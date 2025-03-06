---
title: "🔒 私人页面"
date: 2024-03-06T12:00:00
draft: false
description: "此页面受密码保护，仅限授权用户访问"
passwordHash: "fe722635c2dcbf66048fa9ef4dcf1ec3e301c2f9b942ed523f64814afff82beb"
type: "protected"
---

## 💡 面试C# 相关问题

### Java 和 C# 的异步编程方式有何不同？何时适合使用异步编程？
Java:
- 使用 `Future`、`CompletableFuture`（JDK 8+）、`Reactive Streams`（RxJava, Project Reactor）。
C#:
- 依赖 `async/await` 关键字和 `Task` 并行库（TPL）。
- 适用于 **IO 密集型任务**、**UI 应用防止卡死**、**高并发服务器应用**（如 ASP.NET Core）。

### C# 中 `class` 和 `struct` 的区别？
| 对比项       | `class`（类） | `struct`（结构体） |
|-------------|-------------|------------------|
| **存储方式** | 堆（Heap） | 栈（Stack）/封装类 |
| **默认行为** | 引用拷贝 | 值拷贝 |
| **构造函数** | 可定义无参构造 | 无默认构造 |
| **继承** | 支持继承和接口 | 仅支持接口 |

---

## 🔍 面试SQL Server 相关问题

### **影响 SQL Server 性能的主要因素？如何优化查询性能？**
影响因素：
- **索引使用不当**（缺失索引、冗余索引、不使用聚集索引）。
- **查询语句不优化**（`SELECT *`、全表扫描）。
- **锁与阻塞**（长事务占用资源）。
- **内存 & CPU 资源不足**。
- **统计信息未更新**（SQL 计划低效）。

优化方案：
- **合理使用索引**（主键索引、覆盖索引、分区索引）。
- **避免全表扫描**（`WHERE` 过滤、优化 `JOIN`）。
- **减少事务锁定**（降低事务粒度，`NOLOCK` 查询）。
- **定期更新统计信息**（`UPDATE STATISTICS`）。
- **数据库分片 & Redis 缓存**。

### **SQL Server 发生性能问题时的排查流程**
1. **SQL Server Profiler / Extended Events** 进行实时监控。
2. **`sys.dm_exec_requests`** 查询当前执行请求。
3. **`DBCC SQLPERF(logspace)`** 查看日志增长情况。
4. **执行计划（Execution Plan）** 分析查询。

---

## 🔎 实际作业：修改共通处理的注意事项
✅ **修改共通逻辑时的检查点**
1. **影响范围分析**：查看调用此方法的所有模块。
2. **回归测试**：确保修改不会影响其他功能。
3. **性能测试**：检查修改是否影响执行效率。
4. **事务安全**：涉及数据增删操作时需考虑回滚机制。
5. **日志 & 监控**：增加日志记录，方便排查错误。

✅ **测试关键点**
- **单元测试（Unit Test）** 确保改动点正常。
- **集成测试（Integration Test）** 确保上下游接口正常。
- **回归测试（Regression Test）** 检查是否影响现有功能。
- **异常情况测试（Edge Case）** 模拟异常输入 & 系统压力情况。

</div>

<script>
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(byte => byte.toString(16).padStart(2, "0")).join("");
}

document.getElementById("password-submit").addEventListener("click", async function () {
    let inputPassword = document.getElementById("password-input").value;
    let hashedInput = await hashPassword(inputPassword);
    let correctHash = "fe722635c2dcbf66048fa9ef4dcf1ec3e301c2f9b942ed523f64814afff82beb"; // "yang123456" 的 SHA-256 哈希

    if (hashedInput === correctHash) {
        document.getElementById("password-container").style.display = "none";
        document.getElementById("private-content").style.display = "block";
    } else {
        alert("🚫 密码错误，请重试！");
    }
});
</script>
