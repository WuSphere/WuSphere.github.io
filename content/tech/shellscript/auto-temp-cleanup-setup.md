+++
date = '2025-03-18T23:45:26+09:00'
title = 'WindowS一時ファイル削除'
chapter = true
weight = 2
+++


### 🛠️ 第一步：编写 PowerShell 脚本

```powershell
# ===============================
# Windows 临时文件清理脚本（加强版）
# ===============================

Write-Host "=== 🧹 开始系统垃圾文件清理 ==="

# 要清理的路径列表
$paths = @(
    "$env:TEMP",
    "$env:WINDIR\Temp",
    "$env:SystemRoot\SoftwareDistribution\Download",
    "$env:SystemRoot\Prefetch",
    "$env:LocalAppData\Microsoft\Windows\INetCache",
    "$env:LocalAppData\Microsoft\Windows\Explorer",
    "$env:LocalAppData\CrashDumps"
)

# 删除函数（自动跳过被占用的文件）
function Clear-Folder($path) {
    if (Test-Path $path) {
        Write-Host "🧽 清理中: $path"
        try {
            Get-ChildItem -Path $path -Recurse -Force -ErrorAction SilentlyContinue | ForEach-Object {
                try {
                    Remove-Item $_.FullName -Recurse -Force -ErrorAction Stop
                } catch {
                    # Write-Warning "⚠️ 無法刪除（可能被占用）: $($_.FullName)"
                }
            }
            Write-Host "✅ 完成: $path"
        } catch {
            Write-Warning "❌ 無法清理（权限或路径问题）: $path"
        }
    } else {
        Write-Warning "📁 路径不存在: $path"
    }
}

# 执行清理
foreach ($path in $paths) {
    Clear-Folder $path
}

# 可选：清空回收站（如需启用，请取消注释）
# Write-Host "🗑 清空回收站..."
# (New-Object -ComObject Shell.Application).NameSpace(10).Items() | ForEach-Object { $_.InvokeVerb("delete") }

$extraPaths = @(
    "$env:APPDATA\npm-cache",
    "$env:APPDATA\npm",
    "$env:USERPROFILE\.nuget\packages",
    "$env:APPDATA\Postman",
    "$env:APPDATA\Code\Cache",
    "$env:APPDATA\Code\CachedData",
    "$env:APPDATA\Code\logs",
    "$env:APPDATA\Code\User\workspaceStorage",
    "$env:APPDATA\Microsoft\Windows\Recent",
    "$env:APPDATA\Microsoft\Teams"
)

foreach ($extra in $extraPaths) {
    Clear-Folder $extra
}

Write-Host "`n=== ✅ 所有临时/缓存文件清理完成 ==="
```
> 📌 请将脚本保存至：H:\Scripts\Clear-TempFiles.ps1

### ⏰ 第二步：创建任务计划，自动执行脚本
- 1. 打开「任务计划程序」
在开始菜单搜索「任务计划程序」或 Task Scheduler

- 2. 创建基本任务
点击右侧「创建基本任务...」

设置任务名称，如 每日临时文件清理

设置触发频率：选择「每日」，并设定时间（例如每天 09:00）

- 3. 设置操作
操作类型：选择「启动程序」

    - 程序:`powershell`
    - 添加参数（引数）：`-ExecutionPolicy Bypass -File "H:\Scripts\Clear-TempFiles.ps1"`

- 4. 提升权限运行（推荐）
创建任务后 → 在左侧任务库中找到任务 → 右键 → 属性
在「常规」标签页中：
勾选「以最高权限运行」

### ✅ 测试任务是否正常
在任务列表中，右键选择任务 → 点击「运行」

查看 PowerShell 窗口是否正常清理并无报错

