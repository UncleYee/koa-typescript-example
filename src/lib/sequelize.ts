// database
import * as Sequelize from 'sequelize'

import config from '../config'

const { name, username, password, host, type } = config.get('db')

const sequelize = new Sequelize(name, username, password, {
  host,
  dialect: type,
  dialectOptions: { // MySQL > 5.5，其它数据库删除此项
    charset: 'utf8',
    collate: 'utf8_bin',
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

export default sequelize
