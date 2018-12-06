import getRedis from './redis'

// db: 0 存 sessionStroe
const redis = getRedis(0)

/**
 * SessionStore
 */
export default class SessionStore {

  /**
   * get
   * @param key - session key
   * @returns - session value
   */
  public async get(key: string): Promise<object> {
    const value = await redis.get(key)
    return JSON.parse(value)
  }

  /**
   * set
   * @param key - session key
   * @param value - session value
   * @param maxAge - period of validity
   */
  public async set(key: string, value: object, maxAge: number = 86400000): Promise<void> {
    await redis.set(key, JSON.stringify(value), 'PX', maxAge)
  }

  /**
   * destroy
   * @param key - session key
   */
  public async destroy(key: string): Promise<void> {
    await redis.del(key)
  }
}
