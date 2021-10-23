# LabsKTV

The backend for LabsKTV(动手实验室：KTV场景).

## Usage

创建开发测试环境的环境变量文件`.env`，注意需要修改下面所有的`xxx`的内容：

```bash
# TRTC/TIM的资源信息
TRTC_TIM_APPID=xxxxxxxxxxxxxxxx
TRTC_TIM_SECRET=xxxxxxxxxxxxxxxx
```

安装云函数工具[sls](https://cloud.tencent.com/document/product/583/44753)，安装依赖库：

```bash
npm install -g serverless
npm install
```

发布云函数：
```bash
sls deploy
```

从发布日志中获取API网关地址，例如：https://service-xxxyyzzz-1001234567.gz.apigw.tencentcs.com

删除云函数：
```bash
sls remove
```

