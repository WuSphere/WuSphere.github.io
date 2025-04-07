var relearn_searchindex = [
  {
    "breadcrumb": "WuSphereへようこそ",
    "content": "This is a new chapter.\ngit hugo shellscript",
    "description": "This is a new chapter.\ngit hugo shellscript",
    "tags": [],
    "title": "Tech",
    "uri": "/tech/index.html"
  },
  {
    "breadcrumb": "",
    "content": "探求 · 創造 · 成長\nこのサイトでは、テクノロジー、子育て、AI、そして日々の気づきを発信しています。\n🚀 プロジェクト紹介 最新の技術プロジェクトを紹介します。子育て支援システムやAI応用、日常業務効率化など、幅広く取り組んでいます。\n子育て支援システム 技術メモとTips 📘 技術ブログ 日々の学習記録、試行錯誤、ツールの使い方などをまとめています。\nGit や ShellScript の実用例 Hugo や VS Code の活用法 👶 子育てログ 子どもとの日常や、育児・教育に関するヒントを記録。\n面接練習ログ、遊びの工夫、教育方針など 📚 コンテンツ一覧 TechThis is a new chapter.\ngit hugo shellscript privateThis is a new chapter.",
    "description": "技術・生活・子育ての軌跡を発信",
    "tags": [],
    "title": "WuSphereへようこそ",
    "uri": "/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ \u003e  Tech \u003e  git",
    "content": "指定フォルダからファイル一覧をい固定フォーマットのCSVファイルに出力する\n# 出力ファイルのパスを指定 $outputFile = \"H:\\ZZZZZ成果物Temp\\20241111\\40003-20241111\" # CSVのヘッダー行を追加 \"サイズ,日付,時刻,出力資源ファイル名,備考G,備考チェック,備考\" | Out-File -FilePath $outputFile -Encoding UTF8 # 対象フォルダのパスを指定 $targetFolder = \"C:\\path\\to\\your\\folder\" # 現在の日付を備考チェックに使用 $noteCheck = Get-Date -Format \"yyyy/MM/dd\" $noteG = \"QAZ\" # 備考Gの固定値 $note = \"備考\" # 備考の固定値 # 指定フォルダ内のすべてのファイルを再帰的に処理 Get-ChildItem -Path $targetFolder -Recurse -File | ForEach-Object { # ファイル情報の取得 $fileSize = $_.Length $fileDate = $_.LastWriteTime.ToString(\"yyyy/MM/dd\") $fileTime = $_.LastWriteTime.ToString(\"HH:mm:ss\") $filePath = $_.FullName # CSV形式の行を作成して出力ファイルに追加 \"$fileSize,$fileDate,$fileTime,$filePath,$noteG,$noteCheck,$note\" | Out-File -FilePath $outputFile -Append -Encoding UTF8 } Write-Host \"ファイル一覧が $outputFile に出力されました。\"",
    "description": "指定フォルダからファイル一覧をい固定フォーマットのCSVファイルに出力する\n# 出力ファイルのパスを指定 $outputFile = \"H:\\ZZZZZ成果物Temp\\20241111\\40003-20241111\" # CSVのヘッダー行を追加 \"サイズ,日付,時刻,出力資源ファイル名,備考G,備考チェック,備考\" | Out-File -FilePath $outputFile -Encoding UTF8 # 対象フォルダのパスを指定 $targetFolder = \"C:\\path\\to\\your\\folder\" # 現在の日付を備考チェックに使用 $noteCheck = Get-Date -Format \"yyyy/MM/dd\" $noteG = \"QAZ\" # 備考Gの固定値 $note = \"備考\" # 備考の固定値 # 指定フォルダ内のすべてのファイルを再帰的に処理 Get-ChildItem -Path $targetFolder -Recurse -File | ForEach-Object { # ファイル情報の取得 $fileSize = $_.Length $fileDate = $_.LastWriteTime.ToString(\"yyyy/MM/dd\") $fileTime = $_.LastWriteTime.ToString(\"HH:mm:ss\") $filePath = $_.FullName # CSV形式の行を作成して出力ファイルに追加 \"$fileSize,$fileDate,$fileTime,$filePath,$noteG,$noteCheck,$note\" | Out-File -FilePath $outputFile -Append -Encoding UTF8 } Write-Host \"ファイル一覧が $outputFile に出力されました。\"",
    "tags": [],
    "title": "ファイル一覧を抽出する",
    "uri": "/tech/git/getfilelist/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ",
    "content": "This is a new chapter.",
    "description": "This is a new chapter.",
    "tags": [],
    "title": "private",
    "uri": "/private/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ \u003e  Tech \u003e  shellscript",
    "content": "🛠️ 第一步：编写 PowerShell 脚本 # =============================== # Windows 临时文件清理脚本（加强版） # =============================== Write-Host \"=== 🧹 开始系统垃圾文件清理 ===\" # 要清理的路径列表 $paths = @( \"$env:TEMP\", \"$env:WINDIR\\Temp\", \"$env:SystemRoot\\SoftwareDistribution\\Download\", \"$env:SystemRoot\\Prefetch\", \"$env:LocalAppData\\Microsoft\\Windows\\INetCache\", \"$env:LocalAppData\\Microsoft\\Windows\\Explorer\", \"$env:LocalAppData\\CrashDumps\" ) # 删除函数（自动跳过被占用的文件） function Clear-Folder($path) { if (Test-Path $path) { Write-Host \"🧽 清理中: $path\" try { Get-ChildItem -Path $path -Recurse -Force -ErrorAction SilentlyContinue | ForEach-Object { try { Remove-Item $_.FullName -Recurse -Force -ErrorAction Stop } catch { Write-Warning \"⚠️ 無法刪除（可能被占用）: $($_.FullName)\" } } Write-Host \"✅ 完成: $path\" } catch { Write-Warning \"❌ 無法清理: $path\" } } else { Write-Warning \"📁 路径不存在: $path\" } } # 执行清理 foreach ($path in $paths) { Clear-Folder $path } # 可选：清空回收站（如需启用请取消注释） # (New-Object -ComObject Shell.Application).NameSpace(10).Items() | ForEach-Object { $_.InvokeVerb(\"delete\") } Write-Host \"=== ✅ 所有临时文件清理完成 ===\" 📌 请将脚本保存至：H:\\Scripts\\Clear-TempFiles.ps1\n⏰ 第二步：创建任务计划，自动执行脚本 打开「任务计划程序」 在开始菜单搜索「任务计划程序」或 Task Scheduler 创建基本任务 点击右侧「创建基本任务…」 设置任务名称，如 每日临时文件清理\n设置触发频率：选择「每日」，并设定时间（例如每天 09:00）\n设置操作 操作类型：选择「启动程序」 程序:arduino 添加参数（引数）：-ExecutionPolicy Bypass -File \"H:\\Scripts\\Clear-TempFiles.ps1\" 提升权限运行（推荐） 创建任务后 → 在左侧任务库中找到任务 → 右键 → 属性 在「常规」标签页中： 勾选「以最高权限运行」 ✅ 测试任务是否正常 在任务列表中，右键选择任务 → 点击「运行」\n查看 PowerShell 窗口是否正常清理并无报错",
    "description": "🛠️ 第一步：编写 PowerShell 脚本 # =============================== # Windows 临时文件清理脚本（加强版） # =============================== Write-Host \"=== 🧹 开始系统垃圾文件清理 ===\" # 要清理的路径列表 $paths = @( \"$env:TEMP\", \"$env:WINDIR\\Temp\", \"$env:SystemRoot\\SoftwareDistribution\\Download\", \"$env:SystemRoot\\Prefetch\", \"$env:LocalAppData\\Microsoft\\Windows\\INetCache\", \"$env:LocalAppData\\Microsoft\\Windows\\Explorer\", \"$env:LocalAppData\\CrashDumps\" ) # 删除函数（自动跳过被占用的文件） function Clear-Folder($path) { if (Test-Path $path) { Write-Host \"🧽 清理中: $path\" try { Get-ChildItem -Path $path -Recurse -Force -ErrorAction SilentlyContinue | ForEach-Object { try { Remove-Item $_.FullName -Recurse -Force -ErrorAction Stop } catch { Write-Warning \"⚠️ 無法刪除（可能被占用）: $($_.FullName)\" } } Write-Host \"✅ 完成: $path\" } catch { Write-Warning \"❌ 無法清理: $path\" } } else { Write-Warning \"📁 路径不存在: $path\" } } # 执行清理 foreach ($path in $paths) { Clear-Folder $path } # 可选：清空回收站（如需启用请取消注释） # (New-Object -ComObject Shell.Application).NameSpace(10).Items() | ForEach-Object { $_.InvokeVerb(\"delete\") } Write-Host \"=== ✅ 所有临时文件清理完成 ===\" 📌 请将脚本保存至：H:\\Scripts\\Clear-TempFiles.ps1",
    "tags": [],
    "title": "WindowS一時ファイル削除",
    "uri": "/tech/shellscript/auto-temp-cleanup-setup/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ \u003e  Tech",
    "content": "",
    "description": "",
    "tags": [],
    "title": "git",
    "uri": "/tech/git/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ \u003e  Tech",
    "content": "",
    "description": "",
    "tags": [],
    "title": "hugo",
    "uri": "/tech/hugo/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ \u003e  private",
    "content": "",
    "description": "",
    "tags": [],
    "title": "interview",
    "uri": "/private/interview/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ \u003e  private",
    "content": "",
    "description": "",
    "tags": [],
    "title": "others",
    "uri": "/private/others/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ \u003e  Tech",
    "content": "",
    "description": "",
    "tags": [],
    "title": "shellscript",
    "uri": "/tech/shellscript/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ \u003e  private \u003e  interview",
    "content": "💡 面试C# 相关问题 Java 和 C# 的异步编程方式有何不同？何时适合使用异步编程？ Java:\n使用 Future、CompletableFuture（JDK 8+）、Reactive Streams（RxJava, Project Reactor）。 C#: 依赖 async/await 关键字和 Task 并行库（TPL）。 适用于 IO 密集型任务、UI 应用防止卡死、高并发服务器应用（如 ASP.NET Core）。 C# 中 class 和 struct 的区别？ 对比项 class（类） struct（结构体） 存储方式 堆（Heap） 栈（Stack）/封装类 默认行为 引用拷贝 值拷贝 构造函数 可定义无参构造 无默认构造 继承 支持继承和接口 仅支持接口 🔍 面试SQL Server 相关问题 影响 SQL Server 性能的主要因素？如何优化查询性能？ 影响因素：\n索引使用不当（缺失索引、冗余索引、不使用聚集索引）。 查询语句不优化（SELECT *、全表扫描）。 锁与阻塞（长事务占用资源）。 内存 \u0026 CPU 资源不足。 统计信息未更新（SQL 计划低效）。 优化方案：\n合理使用索引（主键索引、覆盖索引、分区索引）。 避免全表扫描（WHERE 过滤、优化 JOIN）。 减少事务锁定（降低事务粒度，NOLOCK 查询）。 定期更新统计信息（UPDATE STATISTICS）。 数据库分片 \u0026 Redis 缓存。 SQL Server 发生性能问题时的排查流程 SQL Server Profiler / Extended Events 进行实时监控。 sys.dm_exec_requests 查询当前执行请求。 DBCC SQLPERF(logspace) 查看日志增长情况。 执行计划（Execution Plan） 分析查询。 🔎 实际作业：修改共通处理的注意事项 ✅ 修改共通逻辑时的检查点\n影响范围分析：查看调用此方法的所有模块。 回归测试：确保修改不会影响其他功能。 性能测试：检查修改是否影响执行效率。 事务安全：涉及数据增删操作时需考虑回滚机制。 日志 \u0026 监控：增加日志记录，方便排查错误。 ✅ 测试关键点\n单元测试（Unit Test） 确保改动点正常。 集成测试（Integration Test） 确保上下游接口正常。 回归测试（Regression Test） 检查是否影响现有功能。 异常情况测试（Edge Case） 模拟异常输入 \u0026 系统压力情况。",
    "description": "💡 面试C# 相关问题 Java 和 C# 的异步编程方式有何不同？何时适合使用异步编程？ Java:\n使用 Future、CompletableFuture（JDK 8+）、Reactive Streams（RxJava, Project Reactor）。 C#: 依赖 async/await 关键字和 Task 并行库（TPL）。 适用于 IO 密集型任务、UI 应用防止卡死、高并发服务器应用（如 ASP.NET Core）。 C# 中 class 和 struct 的区别？ 对比项 class（类） struct（结构体） 存储方式 堆（Heap） 栈（Stack）/封装类 默认行为 引用拷贝 值拷贝 构造函数 可定义无参构造 无默认构造 继承 支持继承和接口 仅支持接口 🔍 面试SQL Server 相关问题 影响 SQL Server 性能的主要因素？如何优化查询性能？ 影响因素：\n索引使用不当（缺失索引、冗余索引、不使用聚集索引）。 查询语句不优化（SELECT *、全表扫描）。 锁与阻塞（长事务占用资源）。 内存 \u0026 CPU 资源不足。 统计信息未更新（SQL 计划低效）。 优化方案：\n合理使用索引（主键索引、覆盖索引、分区索引）。 避免全表扫描（WHERE 过滤、优化 JOIN）。 减少事务锁定（降低事务粒度，NOLOCK 查询）。 定期更新统计信息（UPDATE STATISTICS）。 数据库分片 \u0026 Redis 缓存。 SQL Server 发生性能问题时的排查流程 SQL Server Profiler / Extended Events 进行实时监控。 sys.dm_exec_requests 查询当前执行请求。 DBCC SQLPERF(logspace) 查看日志增长情况。 执行计划（Execution Plan） 分析查询。 🔎 实际作业：修改共通处理的注意事项 ✅ 修改共通逻辑时的检查点",
    "tags": [],
    "title": "アイネス入場者面接",
    "uri": "/private/interview/ines-onboardinginterview/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ \u003e  Tech \u003e  hugo",
    "content": "--- title: Example Diagram --- graph LR; A[Hard edge] --\u003e|Link text| B(Round edge) B --\u003e C{\u003cstrong\u003eDecision\u003c/strong\u003e} C --\u003e|One| D[Result one] C --\u003e|Two| E[Result two] Important Version6.6.6 Captain InfoNew Awesome\nGo Hugo Download Magic\n​ python 1 print(\"Hello World!\") hello. py sh c print(\"Hello World!\") echo \"Hello World!\" printf\"Hello World!\"); Caution Advises about risks or negative outcomes of certain actions.\nImportant Key information users need to know to achieve their goal.\nInfo Information that users might find interesting.\nNote Useful information that users should know, even when skimming content.\nTip Helpful advice for doing things better or more easily.\nWarning Urgent info that needs immediate user attention to avoid problems.",
    "description": "--- title: Example Diagram --- graph LR; A[Hard edge] --\u003e|Link text| B(Round edge) B --\u003e C{\u003cstrong\u003eDecision\u003c/strong\u003e} C --\u003e|One| D[Result one] C --\u003e|Two| E[Result two] Important Version6.6.6 Captain InfoNew Awesome\nGo Hugo Download Magic\n​ python 1 print(\"Hello World!\")",
    "tags": [],
    "title": "レイアウト関連",
    "uri": "/tech/hugo/layout/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ \u003e  Tech \u003e  shellscript",
    "content": "資格情報を更新後、再起動の代わりにキャシュをクリアする klist purge 環境変数を修正した後に、端末を再起動しないで反映する方法 $env:PATH = [System.Environment]::GetEnvironmentVariable(\"PATH\",\"Machine\") + \";\" + [System.Environment]::GetEnvironmentVariable(\"PATH\",\"User\")",
    "description": "資格情報を更新後、再起動の代わりにキャシュをクリアする klist purge 環境変数を修正した後に、端末を再起動しないで反映する方法 $env:PATH = [System.Environment]::GetEnvironmentVariable(\"PATH\",\"Machine\") + \";\" + [System.Environment]::GetEnvironmentVariable(\"PATH\",\"User\")",
    "tags": [],
    "title": "環境変数修正関連",
    "uri": "/tech/shellscript/environmentvariable/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "WuSphereへようこそ",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
