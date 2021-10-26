# LabsKTV

The backend for LabsKTV(动手实验室：KTV场景).

## Usage

首先，需要开通腾讯云资源：

* [开通API网关](https://console.cloud.tencent.com/apigateway/service?rid=1)，通过API网关访问云函数，提供HTTP API。
* [开通COS存储](https://console.cloud.tencent.com/cos5)，保存云函数代码用的。
* [开通SLS日志服务](https://console.cloud.tencent.com/cls/overview?region=ap-guangzhou)，云函数保存日志用的。
* [云函数授权](https://console.cloud.tencent.com/scf/list?rid=1&ns=default)，云函数访问其他云资源用的。

接着，安装云函数工具[serverless/sls](https://cloud.tencent.com/document/product/583/44753)，安装依赖库：

```bash
npm install -g serverless
npm install
```

> Note: 若安装sls有问题，请看官方说明文档[sls](https://cloud.tencent.com/document/product/583/44753)，有详细解决办法。

> Note: 关于Node安装，请参考[nodejs](https://nodejs.org/zh-cn/download/)，在Windows下请使用Administrator权限启动`Node.js command prompt`，不支持PowerShell。

然后，创建环境变量文件`.env`，注意需要修改下面所有的`xxx`的内容：

```bash
TRTC_TIM_APPID=xxxxxxxxxxxxxxxx
TRTC_TIM_SECRET=xxxxxxxxxxxxxxxx
```

> Note: TRTC的应用在[TRTC](https://console.cloud.tencent.com/trtc/app)创建，和IM使用同样的应用。

最后，发布云函数，需要扫码授权或配置[本地密钥授权](https://cloud.tencent.com/document/product/583/44786#.E6.9C.AC.E5.9C.B0.E5.AF.86.E9.92.A5.E6.8E.88.E6.9D.83)：

```bash
sls deploy
```

> Note: Windows用户，请使用Administrator权限启动`Node.js command prompt`，否则扫码认证会失败。

从发布日志中获取API网关地址，写入客户端，例如：https://service-xxxyyzzz-1001234567.gz.apigw.tencentcs.com

![image](https://user-images.githubusercontent.com/2777660/138798904-1435d703-db61-47cb-9044-c6d50424bfac.png)

> Note: 在浏览器中直接打开你的网关地址，也应该是成功的才对，如上图所示。

## FAQ

Q: 如何查看云函数的日志？

> A: 查看云函数的日志，请点[这里](https://console.cloud.tencent.com/scf/list-detail?rid=1&ns=default&id=application-prod-labs-ktv&menu=log&tab=codeTab)

Q: 如何删除云函数？

> A: 若需要删除云函数，请执行命令：`sls remove`

Q: 为何网关地址无法访问？

> A: 请确认API网关是否开通，请点[这里](https://console.cloud.tencent.com/apigateway/service?rid=1)

Q: 为何网关返回的是`SystemError(99): Invalid TRTC config`？

> A: 请确认环境变量`.env`文件，是否配置了TRTC的SdkAppId和Secret。

Q: 为何网关和函数无法访问？

> A：请确认是否开通服务，请确认是否账户欠费。

