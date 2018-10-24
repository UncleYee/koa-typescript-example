import * as Koa from 'koa'
import * as KoaBody from 'koa-body'
import * as path from 'path'

import {
  loggerMiddleware,
  xmlMiddleware
} from './middleware/index'

const app: Koa = new Koa()

// 中间件
app
  .use(loggerMiddleware()) // log 中间件
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
  .use(xmlMiddleware()) // xml 类型请求入参处理

app.listen(3000)
console.log('app is listen at prot 3000')
