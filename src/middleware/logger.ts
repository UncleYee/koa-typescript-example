// log4js 中间件

import { Context } from 'koa'
import * as compose from 'koa-compose'
import {connectLogger, getLogger} from 'log4js'

const logger = async (ctx: Context, next: () => void) => {
  connectLogger(getLogger('http'), { level: 'trace' })
  await next()
}

export const loggerMiddleware = () => compose([logger])