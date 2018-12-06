import { Table, Column, Model, CreatedAt, UpdatedAt, DataType, AutoIncrement } from 'sequelize-typescript'

/**
 * User 用户类
 * @param uid - uid
 * @param nickname - 昵称
 * @param avator - 头像
 * @param createdAt - 数据创建时间
 * @param updatedAt - 数据更新时间
 */
@Table({
  tableName: 'user'
})
export default class User extends Model<User> {
  // uid
  @AutoIncrement
  @Column({
    primaryKey: true,
    type: DataType.INTEGER(11),
  })
  uid: number

  // 昵称
  @Column({
    type: DataType.STRING
  })
  nickname: string

  // 头像
  @Column({
    type: DataType.STRING
  })
  avator: string

  // 创建时间
  @CreatedAt
  createdAt?: Date

  // 更新时间
  @UpdatedAt
  updatedAt?: Date
}
