'use strict';

console.log('Only for local debugger');

const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const Koa = require('koa');
const Router = require('koa-router');
const Cors = require('koa2-cors');
const BodyParser = require('koa-bodyparser');
const errors = require('js-core/errors');

// Default to local development env.
process.env.STAGE = process.env.STAGE || 'local';

// Try to read .env manually, for directly run node.
if (fs.existsSync(`.env.${process.env.STAGE}`)) {
  dotenv.config({path: `.env.${process.env.STAGE}`});
} else if (fs.existsSync(path.join('..', `.env.${process.env.STAGE}`))) {
  dotenv.config({path: path.join('..', `.env.${process.env.STAGE}`)});
} else {
  console.warn(`ignore .env.${process.env.STAGE}`);
}

const app = new Koa();

app.use(async (ctx, next) => {
  await next();

  if (ctx.body) {
    const {scfRequestId, xRequestId} = errors.koaRequestId(ctx, ctx.body);
    if (scfRequestId && xRequestId && scfRequestId !== xRequestId) {
      console.log(`bind X-Scf-Request-Id ${scfRequestId} to X-Request-ID ${xRequestId}`);
    }
  }
});

app.use(Cors());
app.use(BodyParser());

const router = new Router();
app.use(router.routes());

// Run all modules in one nodejs server.
require('oauth/oauth').create(router);
require('auth_users/auth_users').create(router);
require('rooms/rooms').create(router);

// For default path.
router.all('/', async (ctx) => {
  ctx.body = errors.data(null, 'ok');
});
router.all('/base/v1/', async (ctx) => {
  ctx.body = errors.data(null, 'ok');
});

// Redirect /${stage}/xxx to /xxx
app.use(new Router({prefix: `/${process.env.STAGE}`}).use(router.routes()).routes());

app.listen(9000, () => {
  console.log(`Server start on http://localhost:9000`);
});

