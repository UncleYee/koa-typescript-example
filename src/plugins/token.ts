import getRedis from './redis'

// db: 1 存 sessionStroe
const redis = getRedis(1)

/**
 * Token Library
 */
export default class Token {

  /**
   * get value with key from redis
   * get
   * @param key - uid
   */
  static async get(key: string): Promise<object> {
    const value = await redis.get(key)
    return JSON.parse(value)
  }

  /**
   * set user token in redis
   * set
   * @param key - uid
   * @param value - redis token value
   * @param maxAge - period of validity
   */
  static async set(key: string, value: object, maxAge?: number): Promise<void> {
    await redis.set(key, JSON.stringify(value), 'PX', maxAge || 86400000)
  }

  /**
   * update expire
   * @param key - uid
   */
  static async updateExpire(key: string, maxAge?: number): Promise<void> {
    await redis.expire(key, maxAge || 86400000)
  }

  /**
   * destroy user token from redis
   * destroy
   * @param key - uid
   */
  static async destroy(key: string): Promise<void> {
    await redis.del(key)
  }
}
