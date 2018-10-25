import { Context } from 'koa'
import * as Router from 'koa-router'

const router: Router = new Router({
  prefix: '/api'
})

const test = async (ctx: Context) => {
  ctx.body = {
    code: 0,
    message: 'this is an http test'
  }
}

router.get('/test', test)

export default router