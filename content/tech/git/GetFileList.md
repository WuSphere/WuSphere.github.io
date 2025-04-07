+++
date = '2025-03-18T23:45:26+09:00'
title = 'ファイル一覧を抽出する'
chapter = true
weight = 1
+++

指定フォルダからファイル一覧をい固定フォーマットのCSVファイルに出力する

```powershell
# 出力ファイルのパスを指定
$outputFile = "H:\ZZZZZ成果物Temp\20241111\40003-20241111"

# CSVのヘッダー行を追加
"サイズ,日付,時刻,出力資源ファイル名,備考G,備考チェック,備考" | Out-File -FilePath $outputFile -Encoding UTF8

# 対象フォルダのパスを指定
$targetFolder = "C:\path\to\your\folder"

# 現在の日付を備考チェックに使用
$noteCheck = Get-Date -Format "yyyy/MM/dd"
$noteG = "QAZ"  # 備考Gの固定値
$note = "備考"  # 備考の固定値

# 指定フォルダ内のすべてのファイルを再帰的に処理
Get-ChildItem -Path $targetFolder -Recurse -File | ForEach-Object {
    # ファイル情報の取得
    $fileSize = $_.Length
    $fileDate = $_.LastWriteTime.ToString("yyyy/MM/dd")
    $fileTime = $_.LastWriteTime.ToString("HH:mm:ss")
    $filePath = $_.FullName

    # CSV形式の行を作成して出力ファイルに追加
    "$fileSize,$fileDate,$fileTime,$filePath,$noteG,$noteCheck,$note" | Out-File -FilePath $outputFile -Append -Encoding UTF8
}

Write-Host "ファイル一覧が $outputFile に出力されました。"


```