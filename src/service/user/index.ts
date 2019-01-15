import User from './schema.model'
import getRedis from '../../plugins/redis'

// db: 2 存 userInfo
const redis = getRedis(2)

/**
 * 查询用户信息
 */
const userQuery = async (uid: string) => {
  const redisUser: string = await redis.hget('user', uid)
  if (redisUser) {
    return JSON.parse(redisUser)
  }
  // redis 中没查到，去数据库查
  const user = await User.findOne({
    where: {uid},
    raw: true
  })
  if (user) {
    // 往 redis 中写用户信息
    redis.hset('user', uid, JSON.stringify(user))
    return user
  } else {
    return null
  }
}

export {
  userQuery
}
