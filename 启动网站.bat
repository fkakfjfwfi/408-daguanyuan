@echo off
rem 408大观园 · 双击启动本地服务器并打开网站
rem 若提示找不到 python，请先安装 Python 或把 python 加入 PATH
cd /d "%~dp0"
start "408大观园服务器" /min python -m http.server 8471 --bind 127.0.0.1
timeout /t 1 >nul
start http://127.0.0.1:8471/
echo 已在浏览器打开 408大观园（http://127.0.0.1:8471/）
echo 关闭方法：右下角托盘/任务栏找到 "408大观园服务器" 窗口关闭，或任务管理器结束 python.exe
pause
