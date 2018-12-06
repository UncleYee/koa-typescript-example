import { Context } from 'koa'
import Router from 'koa-router'

const router = new Router()

const test = async (ctx: Context) => {
  const { uid } = ctx.query
  let n = ctx.session.user
  if (n) {
    ctx.body = {
      code: 0,
      message: '已经登录',
      data: n
    }
  } else {
    // 登录
    // 写入 session
    ctx.session.user = { uid, skey: Math.random() }
    ctx.body = '未登录后登录成功'
  }
}

// 测试
router.get('/test', test)


export default router
