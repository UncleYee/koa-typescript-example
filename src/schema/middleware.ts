import { Context } from 'koa'

// 没有返回值的函数
export interface VoidOutput {
  (...params: any[]): void
}

// 中间件
export interface Middleware {
  (ctx: Context, next: VoidOutput): void
}

