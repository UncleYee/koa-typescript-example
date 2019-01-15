import { Context } from 'koa'
import { getLogger } from 'log4js'

import codeManager from '../../../common/code-manager'
import { userQuery } from '../../../service/user/index'

const logger = getLogger('user')

/**
 * 获取用户信息
 */
export const getUserInfo = async (ctx: Context) => {
  try {

    const {uid}: {uid: string} = ctx.params
    const user = await userQuery(uid)
    ctx.body = {...codeManager.success, data: user}
  } catch (error) {
    logger.error(error)
    ctx.body = codeManager.systemError
  }
}

