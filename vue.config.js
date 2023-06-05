const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  lintOnSave: false, // 引入插件不使用时不报报错
  configureWebpack: {
    externals: {
      'electron': 'require("electron")'
    },
      resolve: {
        alias: {
          '@': path.join(__dirname, './src'),
        },
      },
  },

  // 第三方插件配置
  pluginOptions: {
    // vue-cli-plugin-electron-builder 配置
    electronBuilder: {
      nodeIntegration: true,
      // 设置应用主进程的入口
      mainProcessFile: "src/background.js",
      // 设置应用渲染进程的入口
      rendererProcessFile: "src/main.js",
      customFileProtocol: "../",
      // 打包选项
      builderOptions: {
        // 解决的问题：在安装到电脑后，系统通知无法工作
        appId: "com.lbq.vue3", // 软件id
        productName: "JSON工具", // 打包后的名称
        // windows系统相关配置
        win: {
          // 应用图标路径（Windows 系统中 icon 需要 256 * 256 的 ico 格式图片）
          icon: "./src/assets/login-icon.png",
          target: {
            target: "nsis",
            // 支持 64 位的 Windows 系统
            arch: ["x64"],
          },
        },
        nsis: {
          // 如果为false，想要给电脑所有用户安装必须使用管理员权限
          allowElevation: true,
          // 是否一键安装
          oneClick: false,
          // 允许修改安装目录
          allowToChangeInstallationDirectory: true,
          "guid": "com.lbq.vue3", // 软件id
          "include": "./installer.nsh"
        },
      },
    },
  },
})

