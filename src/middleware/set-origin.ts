// origin(域) 中间件

import { Context } from 'koa'
import * as compose from 'koa-compose'
import * as _ from 'lodash'

import config from '../config'

const handleOrigin = async (ctx: Context, next: () => void) => {
  if (ctx.request.method === 'OPTIONS') {
    ctx.response.status = 200
  }
  const host = _.get(ctx, 'request.host')
  
  if (host && (host.split(':')[0] === 'localhost' || host.split(':')[0] === '127.0.0.1')) {
    ctx.set('Access-Control-Allow-Origin', '*')
  } else {
    ctx.set('Access-Control-Allow-Origin', config.get('system.http_server_host'))
  }
  ctx.set('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
  ctx.set('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS')
  ctx.set('Access-Control-Allow-Credentials', 'true') // 允许带上 cookie
  await next()
}

export const SetOrigin = () => compose([handleOrigin])