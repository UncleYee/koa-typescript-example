import Koa from 'koa'
import Router from 'koa-router'

import adminRoutes from './admin'
import serviceRoutes from './service'
import { initSession } from '../middleware'

const router = (app: Koa): Router => {
  const router: Router = new Router({
    prefix: '/api'
  })

  // router.use() // 请求前中间件

  router.use('/service', serviceRoutes.routes())

  // session 中间件
  app.use(initSession(app))

  router.use('/admin', adminRoutes.routes())

  return router
}

export default router
