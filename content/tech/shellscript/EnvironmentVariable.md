+++
date = '2025-03-18T23:45:26+09:00'
title = '環境変数修正関連'
chapter = true
weight = 4
+++

- 資格情報を更新後、再起動の代わりにキャシュをクリアする
```cmd
klist purge
```
- 環境変数を修正した後に、端末を再起動しないで反映する方法
```powershell
$env:PATH = [System.Environment]::GetEnvironmentVariable("PATH","Machine") + ";" + [System.Environment]::GetEnvironmentVariable("PATH","User")
```