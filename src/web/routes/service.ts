import { Context } from 'koa'
import Router from 'koa-router'

import * as controllers from '../controllers'

const router = new Router()

/** 用户相关 */
// 获取用户信息
router.get('/user/:uid', controllers.user.getUserInfo)

export default router
