// database
import { Sequelize } from 'sequelize-typescript'

import config from '../config'

const Op = Sequelize.Op
const operatorsAliases = {
  $eq: Op.eq,
  $ne: Op.ne,
  $gte: Op.gte,
  $gt: Op.gt,
  $lte: Op.lte,
  $lt: Op.lt,
  $not: Op.not,
  $in: Op.in,
  $notIn: Op.notIn,
  $is: Op.is,
  $like: Op.like,
  $notLike: Op.notLike,
  $iLike: Op.iLike,
  $notILike: Op.notILike,
  $regexp: Op.regexp,
  $notRegexp: Op.notRegexp,
  $iRegexp: Op.iRegexp,
  $notIRegexp: Op.notIRegexp,
  $between: Op.between,
  $notBetween: Op.notBetween,
  $overlap: Op.overlap,
  $contains: Op.contains,
  $contained: Op.contained,
  $adjacent: Op.adjacent,
  $strictLeft: Op.strictLeft,
  $strictRight: Op.strictRight,
  $noExtendRight: Op.noExtendRight,
  $noExtendLeft: Op.noExtendLeft,
  $and: Op.and,
  $or: Op.or,
  $any: Op.any,
  $all: Op.all,
  $values: Op.values,
  $col: Op.col
}

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
    operatorsAliases // 操作符别名
  })
  // 加载所有模块
  sequelize.addModels([__dirname + '/**/*.model.ts'])
}
