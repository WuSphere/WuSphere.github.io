var relearn_searchindex = [
  {
    "breadcrumb": "this is WuSphere",
    "content": "This is a new chapter.",
    "description": "This is a new chapter.",
    "tags": [],
    "title": "Tech",
    "uri": "/tech/index.html"
  },
  {
    "breadcrumb": "this is WuSphere",
    "content": "This is a new chapter.",
    "description": "This is a new chapter.",
    "tags": [],
    "title": "個人",
    "uri": "/private/index.html"
  },
  {
    "breadcrumb": "this is WuSphere \u003e  Tech",
    "content": "",
    "description": "",
    "tags": [],
    "title": "First Day",
    "uri": "/tech/git/index.html"
  },
  {
    "breadcrumb": "this is WuSphere \u003e  Tech",
    "content": "",
    "description": "",
    "tags": [],
    "title": "HUGO",
    "uri": "/tech/hugo/index.html"
  },
  {
    "breadcrumb": "this is WuSphere \u003e  個人",
    "content": "",
    "description": "",
    "tags": [],
    "title": "そのた",
    "uri": "/private/others/index.html"
  },
  {
    "breadcrumb": "this is WuSphere \u003e  個人",
    "content": "",
    "description": "",
    "tags": [],
    "title": "面接関連",
    "uri": "/private/interview/index.html"
  },
  {
    "breadcrumb": "this is WuSphere \u003e  Tech",
    "content": "",
    "description": "",
    "tags": [],
    "title": "shellscript",
    "uri": "/tech/shellscript/index.html"
  },
  {
    "breadcrumb": "this is WuSphere \u003e  個人 \u003e  面接関連",
    "content": "💡 面试C# 相关问题 Java 和 C# 的异步编程方式有何不同？何时适合使用异步编程？ Java:\n使用 Future、CompletableFuture（JDK 8+）、Reactive Streams（RxJava, Project Reactor）。 C#: 依赖 async/await 关键字和 Task 并行库（TPL）。 适用于 IO 密集型任务、UI 应用防止卡死、高并发服务器应用（如 ASP.NET Core）。 C# 中 class 和 struct 的区别？ 对比项 class（类） struct（结构体） 存储方式 堆（Heap） 栈（Stack）/封装类 默认行为 引用拷贝 值拷贝 构造函数 可定义无参构造 无默认构造 继承 支持继承和接口 仅支持接口 🔍 面试SQL Server 相关问题 影响 SQL Server 性能的主要因素？如何优化查询性能？ 影响因素：\n索引使用不当（缺失索引、冗余索引、不使用聚集索引）。 查询语句不优化（SELECT *、全表扫描）。 锁与阻塞（长事务占用资源）。 内存 \u0026 CPU 资源不足。 统计信息未更新（SQL 计划低效）。 优化方案：\n合理使用索引（主键索引、覆盖索引、分区索引）。 避免全表扫描（WHERE 过滤、优化 JOIN）。 减少事务锁定（降低事务粒度，NOLOCK 查询）。 定期更新统计信息（UPDATE STATISTICS）。 数据库分片 \u0026 Redis 缓存。 SQL Server 发生性能问题时的排查流程 SQL Server Profiler / Extended Events 进行实时监控。 sys.dm_exec_requests 查询当前执行请求。 DBCC SQLPERF(logspace) 查看日志增长情况。 执行计划（Execution Plan） 分析查询。 🔎 实际作业：修改共通处理的注意事项 ✅ 修改共通逻辑时的检查点\n影响范围分析：查看调用此方法的所有模块。 回归测试：确保修改不会影响其他功能。 性能测试：检查修改是否影响执行效率。 事务安全：涉及数据增删操作时需考虑回滚机制。 日志 \u0026 监控：增加日志记录，方便排查错误。 ✅ 测试关键点\n单元测试（Unit Test） 确保改动点正常。 集成测试（Integration Test） 确保上下游接口正常。 回归测试（Regression Test） 检查是否影响现有功能。 异常情况测试（Edge Case） 模拟异常输入 \u0026 系统压力情况。",
    "description": "💡 面试C# 相关问题 Java 和 C# 的异步编程方式有何不同？何时适合使用异步编程？ Java:\n使用 Future、CompletableFuture（JDK 8+）、Reactive Streams（RxJava, Project Reactor）。 C#: 依赖 async/await 关键字和 Task 并行库（TPL）。 适用于 IO 密集型任务、UI 应用防止卡死、高并发服务器应用（如 ASP.NET Core）。 C# 中 class 和 struct 的区别？ 对比项 class（类） struct（结构体） 存储方式 堆（Heap） 栈（Stack）/封装类 默认行为 引用拷贝 值拷贝 构造函数 可定义无参构造 无默认构造 继承 支持继承和接口 仅支持接口 🔍 面试SQL Server 相关问题 影响 SQL Server 性能的主要因素？如何优化查询性能？ 影响因素：\n索引使用不当（缺失索引、冗余索引、不使用聚集索引）。 查询语句不优化（SELECT *、全表扫描）。 锁与阻塞（长事务占用资源）。 内存 \u0026 CPU 资源不足。 统计信息未更新（SQL 计划低效）。 优化方案：\n合理使用索引（主键索引、覆盖索引、分区索引）。 避免全表扫描（WHERE 过滤、优化 JOIN）。 减少事务锁定（降低事务粒度，NOLOCK 查询）。 定期更新统计信息（UPDATE STATISTICS）。 数据库分片 \u0026 Redis 缓存。 SQL Server 发生性能问题时的排查流程 SQL Server Profiler / Extended Events 进行实时监控。 sys.dm_exec_requests 查询当前执行请求。 DBCC SQLPERF(logspace) 查看日志增长情况。 执行计划（Execution Plan） 分析查询。 🔎 实际作业：修改共通处理的注意事项 ✅ 修改共通逻辑时的检查点",
    "tags": [],
    "title": "アイネス入場者面接",
    "uri": "/private/interview/ines-onboardinginterview/index.html"
  },
  {
    "breadcrumb": "this is WuSphere \u003e  Tech \u003e  HUGO",
    "content": "--- title: Example Diagram --- graph LR; A[Hard edge] --\u003e|Link text| B(Round edge) B --\u003e C{\u003cstrong\u003eDecision\u003c/strong\u003e} C --\u003e|One| D[Result one] C --\u003e|Two| E[Result two] Important Version6.6.6 Captain InfoNew Awesome\nGo Hugo Download Magic\n​ python 1 print(\"Hello World!\") hello. py sh c print(\"Hello World!\") echo \"Hello World!\" printf\"Hello World!\"); Caution Advises about risks or negative outcomes of certain actions.\nImportant Key information users need to know to achieve their goal.\nInfo Information that users might find interesting.\nNote Useful information that users should know, even when skimming content.\nTip Helpful advice for doing things better or more easily.\nWarning Urgent info that needs immediate user attention to avoid problems.",
    "description": "--- title: Example Diagram --- graph LR; A[Hard edge] --\u003e|Link text| B(Round edge) B --\u003e C{\u003cstrong\u003eDecision\u003c/strong\u003e} C --\u003e|One| D[Result one] C --\u003e|Two| E[Result two] Important Version6.6.6 Captain InfoNew Awesome\nGo Hugo Download Magic\n​ python 1 print(\"Hello World!\")",
    "tags": [],
    "title": "レイアウト関連",
    "uri": "/tech/hugo/layout/index.html"
  },
  {
    "breadcrumb": "this is WuSphere \u003e  Tech \u003e  shellscript",
    "content": "資格情報を更新後、再起動の代わりにキャシュをクリアする klist purge 環境変数を修正した後に、端末を再起動しないで反映する方法 $env:PATH = [System.Environment]::GetEnvironmentVariable(\"PATH\",\"Machine\") + \";\" + [System.Environment]::GetEnvironmentVariable(\"PATH\",\"User\")",
    "description": "資格情報を更新後、再起動の代わりにキャシュをクリアする klist purge 環境変数を修正した後に、端末を再起動しないで反映する方法 $env:PATH = [System.Environment]::GetEnvironmentVariable(\"PATH\",\"Machine\") + \";\" + [System.Environment]::GetEnvironmentVariable(\"PATH\",\"User\")",
    "tags": [],
    "title": "環境変数修正関連",
    "uri": "/tech/shellscript/environmentvariable/index.html"
  },
  {
    "breadcrumb": "this is WuSphere",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "breadcrumb": "this is WuSphere",
    "content": "",
    "description": "",
    "tags": [],
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
