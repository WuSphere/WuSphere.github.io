[个人首页](https://wusphere.github.io/)  
https://wusphere.github.io/

#  MEMO  
重新上传代码之后，页面依然没有刷新的原因是浏览器缓存的问题，执行一下命令之后就可以看到最新页面了。  
```
Ctrl + Shift + R
```

本地执行命令  
```
hugo server -D
```
强制清理 Hugo 缓存并重新编译
```
hugo --cleanDestinationDir --ignoreCache
```
重启 Hugo 服务器
```
hugo server -D --disableFastRender
--disableFastRender 确保 Hugo 重新渲染所有页面，不使用缓存。
```

本地链接
http://localhost:1313/

guide

https://mcshelby.github.io/hugo-theme-relearn/configuration/sitemanagement/multilingual/index.html

# 发生的问题  
## 重新创建新的文件夹的时候一直出现public文件夹创建失败的问题。public文件夹缓存的问题。手动删除之后再创建就没问题了  
```
Error: error building site: render: failed to render pages: mkdir C:\DriveH\GitHub\myblog\myblog\public\private: The system cannot find the path specified.
``` 

