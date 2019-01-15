import Redis, { Redis as IRedis } from 'ioredis'

const enum DB {
  /** sessio-store */
  session = 0,
  /** token 存储 */
  token = 1
}

export default (db: DB): IRedis => {
  return new Redis({db})
}
