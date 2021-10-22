# LabsKTV

The backend for LabsKTV(动手实验室：KTV场景).

## Local

默认为本机(local)开发环境。

创建开发测试环境的环境变量文件`.env.local`，注意需要修改下面所有的`xxx`的内容：

```bash
# .env

# 发布的AK
TENCENT_SECRET_ID=xxxxxxxxxxxxxxxx
TENCENT_SECRET_KEY=xxxxxxxxxxxxxxxx

# 应用名称
APP=labs

# TRTC/TIM的资源信息
TRTC_TIM_APPID=xxxxxxxxxxxxxxxx
TRTC_TIM_SECRET=xxxxxxxxxxxxxxxx
```

直接用nodejs启动，或者在WebStorm中调试：

```bash
nodejs index.js
```

## Release

线上环境，需要设置环境变量文件`.env.prod`，然后使用命令发布：

```bash
make prod
```

## Test

POSTMAN接口测试:

* [下载PostMan](https://www.postman.com/downloads/)客户端。
* 导入测试文件：`postman/LabsKTV.postman_collection.json `
* 运行整个collection。

