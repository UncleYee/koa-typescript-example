import * as Koa from 'koa'
import * as KoaBody from 'koa-body'
import * as path from 'path'
import * as KoaLogger from 'koa-logger'

import {
  Logger,
  SetOrigin,
  XmlRequest,
  ErrorRoutesCatch
} from './middleware/index'
import MainRoutes from './routes/main-routes'
import ErrorRoutes from './routes/error-routes'

const app: Koa = new Koa()
const env = process.env.NODE_ENV || 'development' // Current mode
console.log(env)

// 当 app.proxy 设置为 true 时，支持 X-Forwarded-Host 获取客户端的 ip
app.proxy = true

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
  .use(ErrorRoutesCatch())
  .use(KoaLogger())
  .use(MainRoutes.routes())
  .use(MainRoutes.allowedMethods())
  .use(ErrorRoutes())
  .listen(3000)

console.log('app is listen at prot 3000')
