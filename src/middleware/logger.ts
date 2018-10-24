// log4js 中间件

import { Context } from 'koa'
import * as compose from 'koa-compose'
import { configure, connectLogger, getLogger,} from 'log4js'

import logConfig from '../config/log4js'

// 配置 log4js
configure(logConfig)

const logger = (ctx: Context, next: () => void) => {
  connectLogger(getLogger('http'), { level: 'trace' })
  next()
}

export const loggerMiddleware = () => compose([logger])