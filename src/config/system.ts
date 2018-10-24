import * as path from 'path'

const env = process.env.NODE_ENV || 'development' // 当前环境

// 系统配置
export const SYSTEM = {
  HTTP_server_host: 'miniapp.uncleye.com' // HTTP服务器地址,请勿添加"http://" （即前端调用使用的服务器地址，如果是APP请设置为 * )
}