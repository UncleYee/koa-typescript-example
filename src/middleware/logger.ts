// log4js 中间件

import { Context } from 'koa'
import * as compose from 'koa-compose'
import { getLogger } from 'log4js'

const logger = async (ctx: Context, next: () => void) => {
  const start = Number(new Date())
  await next()
  const ms = Number(new Date()) - start
  const { method, host, url, status, message } = ctx
  getLogger('http').trace(`${method} ${url} ${host} ${status} ${message} - ${ms}ms`)
}

export const Logger = () => compose([logger])