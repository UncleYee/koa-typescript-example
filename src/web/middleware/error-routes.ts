// 错误路由捕获中间件

import { Context } from 'koa'
import compose from 'koa-compose'

interface RoutesError {
  status: number
  message?: string
  [title: string]: any
}

const catchErrorRoutes = async (ctx: Context, next: () => Promise<void>) => {
  await next().catch((err: RoutesError) => {
    switch (err.status) {
      case 401: // 未获得授权，无法访问
        ctx.status = 200
        ctx.body = '没有找到内容 - 404'
        break
      default:
        break
    }
  })
}

export const ErrorRoutes = () => compose([
  catchErrorRoutes
])
