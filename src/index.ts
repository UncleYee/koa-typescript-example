import * as Koa from 'koa'
import * as bodyParser from 'koa-bodyparser'
import { configure, getLogger } from 'log4js'

import {
  loggerMiddleware
} from './middleware/logger'


import logConfig from './config/log4js'

// 配置 log4js
configure(logConfig)

const logger = getLogger('index')

const app: Koa = new Koa()

// 中间件
app
  .use(loggerMiddleware()) // log 中间件
  .use(bodyParser()) // bodyParser 中间件

app.listen(3000)
console.log('app is listen at prot 3000')
