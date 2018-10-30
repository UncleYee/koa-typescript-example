import * as convict from 'convict'
import { getLogger } from 'log4js'

const logger = getLogger('config')

const config = convict({
  env: {
    doc: 'The application environment.',
    format: ['production', 'development', 'test'],
    default: 'development',
    env: 'NODE_ENV'
  },
  ip: {
    doc: 'The IP address to bind.',
    format: 'ipaddress',
    default: '127.0.0.1',
    env: 'IP_ADDRESS',
  },
  port: {
    doc: 'The port to bind.',
    format: 'port',
    default: 8080,
    env: 'PORT',
    arg: 'port'
  },
  db: {
    type: {
      doc: 'Database type',
      format: String,
      default: 'mysql'
    },
    host: {
      doc: 'Database host name/IP',
      format: '*',
      default: '127.0.0.1'
    },
    port: {
      doc: 'The port to connect database',
      format: 'port',
      default: 3306
    },
    username: {
      doc: 'Database user',
      format: String,
      default: 'root'
    },
    password: {
      doc: 'Database user password',
      format: String,
      default: '123456'
    },
    name: {
      doc: 'Database name',
      format: String,
      default: 'users'
    }
  },
  system: {
    http_server_host: {
      doc: 'http server host',
      format: String,
      default: '*' // HTTP服务器地址,请勿添加'http://' （即前端调用使用的服务器地址，如果是APP请设置为 * )
    }
  }
})

// 加载当前环境下的配置文件
const env = config.get('env')
try {
  const path = `${__dirname}/env/${env}.json`
  logger.info(`trying to access ${path}`)
  config.loadFile(path)
  logger.info(`load ${env} config success`)
} catch (error) {
  logger.warn(`${env} config file doesn\'t exist, loading defaults`)
}

// 验证 config
config.validate({allowed: 'strict'})

export default config