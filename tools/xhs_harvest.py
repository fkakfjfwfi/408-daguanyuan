# -*- coding: utf-8 -*-
"""批量读取小红书笔记：读成功用正常结果，读失败(UPSTREAM_BROKEN)从报错负载解析字段。
   遇渠道暂停自动等待重试一次。结果存 JSON。"""
import json, subprocess, sys, time, re

def parse_error_fields(msg):
    """解析 '- field: x
  value: y' 的 YAML 片段"""
    try:
        import yaml
        data = yaml.safe_load(msg)
        return {d['field']: d.get('value') for d in data if isinstance(d, dict) and 'field' in d}
    except Exception:
        pass
    fields, cur, val = {}, None, None
    lines = msg.split('\n')
    for i, ln in enumerate(lines):
        m = re.match(r'^- field:\s*(.+)$', ln)
        if m:
            if cur: fields[cur] = val
            cur, val = m.group(1).strip(), ''
            continue
        m = re.match(r'^\s+value:\s*>-?\s*$', ln)
        if m and cur is not None:
            val = []
            continue
        m = re.match(r'^\s+value:\s*(.*)$', ln)
        if m and cur is not None:
            v = m.group(1).strip().strip("'").strip('"')
            val = v if v else []
            continue
        if cur is not None and ln.startswith('    ') and isinstance(val, list):
            val.append(ln.strip())
        elif cur is not None and ln.startswith('    ') and isinstance(val, str):
            val += '\n' + ln.strip()
    if cur: fields[cur] = val
    for k in fields:
        if isinstance(fields[k], list): fields[k] = '\n'.join(fields[k])
    return fields

def read_note(url, tries=3):
    for t in range(tries):
        p = subprocess.run(['agent-reach', 'xiaohongshu', 'read', url],
                           capture_output=True, text=True, encoding='utf-8', errors='replace', timeout=120)
        out = (p.stdout or '').strip()
        try:
            d = json.loads(out)
        except Exception:
            return {'ok': False, 'err': 'unparseable: ' + out[:200]}
        if d.get('ok') and d.get('items'):
            it = d['items'][0]
            return {'ok': True, 'title': it.get('title'), 'author': it.get('author'),
                    'url': url, 'text': it.get('text') or ''}
        e = d.get('error') or {}
        msg = e.get('message') or ''
        if 'paused' in msg.lower() and t == 0:
            print('   channel paused, wait 50s...', flush=True)
            time.sleep(75); continue
        if e.get('code') == 'UPSTREAM_BROKEN' and ('field:' in msg or 'value:' in msg):
            f = parse_error_fields(msg)
            return {'ok': True, 'degraded': True, 'title': f.get('title'), 'author': f.get('author'),
                    'url': url, 'text': f.get('content') or '', 'likes': f.get('likes'),
                    'collects': f.get('collects'), 'comments': f.get('comments'), 'tags': f.get('tags')}
        return {'ok': False, 'err': e.get('code') + ': ' + msg[:200]}
    return {'ok': False, 'err': 'paused twice'}

if __name__ == '__main__':
    notes = json.load(open(sys.argv[1], encoding='utf-8'))
    out_path = sys.argv[2]
    results = []
    try:
        results = json.load(open(out_path, encoding='utf-8'))
    except Exception:
        pass
    done_urls = {r['url'] for r in results}
    for n in notes:
        url = n.get('u') or n.get('url')
        title = n.get('t') or n.get('title')
        if url in done_urls: continue
        print('READ:', title[:36], flush=True)
        r = read_note(url)
        r['title'] = r.get('title') or title
        r['url'] = url
        print('  ->', 'ok(degraded)' if r.get('degraded') else ('ok' if r.get('ok') else r.get('err', '')[:60]),
              '| likes:', r.get('likes'), '| collects:', r.get('collects'), flush=True)
        results.append(r)
        json.dump(results, open(out_path, 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
        time.sleep(10)
    print('DONE', len(results))
