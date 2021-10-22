'use strict';

const dotenv = require('dotenv');
const Koa = require('koa');
const Router = require('koa-router');
const Cors = require('koa2-cors');
const BodyParser = require('koa-bodyparser');
const errors = require('js-core/errors');

// Default to local development env.
process.env.STAGE = process.env.STAGE || 'local';

// Try to read .env manually, for directly run node.
dotenv.config({path: `../.env.${process.env.STAGE}`});

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

require('./oauth').create(router);

// Redirect /${stage}/xxx to /xxx
app.use(new Router({prefix: `/${process.env.STAGE}`}).use(router.routes()).routes());

app.listen(9000, () => {
  console.log(`Server start on http://localhost:9000`);
});

