import Koa from 'koa'
import KoaBody from 'koa-body'
import path from 'path'
import KoaLogger from 'koa-logger'
import { configure } from 'log4js'

import {
  Logger,
  SetOrigin,
  XmlRequest,
  ErrorRoutes
} from './middleware'
import router from './routes'
import dbConnect from '../service/sequelize'
import logConfig from '../config/log4js'

// 配置 log4js
configure(logConfig)

const app: Koa = new Koa()

// 当 app.proxy 设置为 true 时，支持 X-Forwarded-Host 获取客户端的 ip
app.proxy = true

// 链接数据库
dbConnect()

// 路由
const routes = router(app)

// 中间件
app
  .use(SetOrigin()) // 请求域中间件
  .use(Logger()) // 日志中间件
  .use(KoaBody({
    multipart: true,
    strict: false,
    formidable: {
      uploadDir: path.join(__dirname, '../../upload/')
    },
    jsonLimit: '10mb',
    formLimit: '10mb',
    textLimit: '10mb'
  })) // bodyParser 中间件
  .use(XmlRequest()) // xml 类型请求入参处理
  .use(ErrorRoutes())
  .use(KoaLogger())
  .use(routes.routes())
  .use(routes.allowedMethods())
  // .use(async (ctx, next) => {
  //   console.log(ctx.body)
  // })

export default app
