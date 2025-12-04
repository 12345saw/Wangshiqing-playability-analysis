# 启动开发服务器并打开浏览器
Write-Host "正在启动开发服务器..." -ForegroundColor Green

# 启动开发服务器
Start-Process powershell -ArgumentList "-NoExit", "-Command", "cd '$PSScriptRoot'; npm run dev"

# 等待服务器启动
Write-Host "等待服务器启动（15秒）..." -ForegroundColor Yellow
Start-Sleep -Seconds 15

# 尝试打开浏览器
Write-Host "正在打开浏览器..." -ForegroundColor Green
Start-Process "http://localhost:3000"

Write-Host "`n如果浏览器没有自动打开，请手动访问: http://localhost:3000" -ForegroundColor Cyan
Write-Host "如果 3000 端口被占用，请查看终端中的实际端口号" -ForegroundColor Yellow

