# LabsKTV

The backend for LabsKTV(动手实验室：KTV场景).

## Usage

首先，需要开通腾讯云资源：

* [开通API网关](https://console.cloud.tencent.com/apigateway/service?rid=1)，通过API网关访问云函数，提供HTTP API。
* [开通COS存储](https://console.cloud.tencent.com/cos5)，保存云函数代码用的。
* [开通SLS日志服务](https://console.cloud.tencent.com/cls/overview?region=ap-guangzhou)，云函数保存日志用的。
* [云函数授权](https://console.cloud.tencent.com/scf/list?rid=1&ns=default)，云函数访问其他云资源用的。

然后，创建开发测试环境的环境变量文件`.env`，注意需要修改下面所有的`xxx`的内容：

```bash
# TRTC/TIM的资源信息
TRTC_TIM_APPID=xxxxxxxxxxxxxxxx
TRTC_TIM_SECRET=xxxxxxxxxxxxxxxx
```

接着，安装云函数工具[sls](https://cloud.tencent.com/document/product/583/44753)，安装依赖库：

```bash
npm install -g serverless
npm install
```

最后，发布云函数，需要扫码授权或配置[本地密钥授权](https://cloud.tencent.com/document/product/583/44786#.E6.9C.AC.E5.9C.B0.E5.AF.86.E9.92.A5.E6.8E.88.E6.9D.83)：
```bash
sls deploy
```

从发布日志中获取API网关地址，写入客户端，例如：https://service-xxxyyzzz-1001234567.gz.apigw.tencentcs.com

## Notes

删除云函数：
```bash
sls remove
```

