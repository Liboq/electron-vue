# 一个markdown的图床工具
## 原因
在使用语雀写文章时，截图会直接保存到文章中，使用markdown导出时会生成语雀的图片的格式，但是无法在自己的博客上使用（语雀图片cdn设置了白名单），所以，我想大家是否有同样的需求！放在别人的图床上始终不会长久存在，所以试着做一个图床工具

## 目标
在设置中输入key，在复制图片到markdown文档中时生成markdown中相应的图片格式[](),并把图片储存在腾讯云（七牛云等等）中

## 已完成
markdown 文章编写和预览 anchor跳转

## 运行
```
pnpm i
pnpm run electron:serve
```
## 预览
![image](https://github.com/Liboq/electron-vue/assets/99778162/881bf18c-75d7-474d-8497-779f65858044)

## 欢迎 Star，Issues  
您的 Star，是我不断更新维护的动力！！！
若在使用过程中，存在某些问题，欢迎 Issues



