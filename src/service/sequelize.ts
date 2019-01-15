// database
import { Sequelize } from 'sequelize-typescript'

import config from '../config'

export default () => {
  const { name, username, password, port, host, type } = config.get('db')

  const sequelize = new Sequelize({
    dialect: type,
    host,
    port,
    username,
    password,
    database: name,
    dialectOptions: { // MySQL > 5.5，其它数据库删除此项
      charset: 'utf8',
      supportBigNumbers: true,
      bigNumberStrings: true
    },
    pool: {
      max: 50,
      min: 0
    },
    timezone: '+08:00', // 东八时区
    operatorsAliases: false // 操作符别名
  })
  // 加载所有模块
  sequelize.addModels([__dirname + '/**/*.model.ts'])
}
