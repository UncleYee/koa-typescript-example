// 错误路由处理

import { Context } from 'koa'
import * as compose from 'koa-compose'

const handleErrorRoutes = async (ctx: Context, next: () => void) => {
  switch (ctx.status) {
    case 404:
      ctx.body = '没有找到内容 - 404'
      break
  }
  await next()
}

export default () => compose([handleErrorRoutes])
