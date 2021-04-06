# pinecone-recipe-weapp
一个关于食谱的微信小程序



使用了taro-iconfont-cli插件，解决微信中不能预览多色图标问题
文档参考地址[https://gitee.com/mirrors/Taro-Iconfont]


npm 运行多个命令
```
"dev:weapp": "npm run build:weapp -- --watch & cd ./mockserver && npm run start"
```


遇到的问题归总，和总结：
0.审核问题  小程序种类

0.协议问题，版权保护

0.整个图片资源过大，22.5MB

0.使用mockjs图片路径问题

0.tab标签页数据是动态还是写死问题

0.UI设计稿，自己做问题

0.mockjs无法直接使用问题

0.项目文件组件文件层级管理问题

0.音乐问题 线上本地

0.h5端头像用户名问题，虽然不上线h5，但还是做了兼容处理

0.组件间嵌套过深，事件不断向父组件向上传递，性能问题。和一些重复代码问题

0.启动多个命令行问题，并行和串行

0.持久化stoage无法使用问题

0.不同端UI样式问题  和100vh问题

0.自己封装圆环进度条组件时 遇到的封装问题