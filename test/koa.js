const Koa = require('koa')
const logger = require('koa-logger')
const session = require('koa-session')
const app = new Koa()

app.keys = ['chen']

app.use(logger())
app.use(session({
  key: 'koa:sess', /** (string) cookie key (default is koa:sess) */
  /** (number || 'session') maxAge in ms (default is 1 days) */
  /** 'session' will result in a cookie that expires when session/browser is closed */
  /** Warning: If a session cookie is stolen, this cookie will never expire */
  maxAge: 86400000,
  autoCommit: true, /** (boolean) automatically commit headers (default true) */
  overwrite: true, /** (boolean) can overwrite or not (default true) */
  httpOnly: true, /** (boolean) httpOnly or not (default true) */
  signed: true, /** (boolean) signed or not (default true) */
  rolling: false, /** (boolean) Force a session identifier cookie to be set on every response. The expiration is reset to the original maxAge, resetting the expiration countdown. (default is false) */
  renew: false, /** (boolean) renew session when session is nearly expired, so we can always keep user logged in. (default is false)*/
}, app))
app.use(async (ctx, next) => {
  await next()
  ctx.body += ' mid1'
})

app.use(async (ctx, next) => {
  console.log(ctx.session)
  await next()
  ctx.body += ' mid2'
})

app.use(async (ctx, next) =>{
  ctx.session.views = 1
  ctx.body = 'hello world'
})

app.listen(23333)