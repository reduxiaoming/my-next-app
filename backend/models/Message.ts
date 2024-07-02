import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';

// 定义消息表
@Table({
  tableName: 'messages', // 指定表名为 'messages'
  timestamps: false // 不使用自动生成的时间戳列（createdAt 和 updatedAt）
})
export class Message extends Model {
  // 定义主键
  @PrimaryKey
  @AutoIncrement // 自动递增
  @Column(DataType.INTEGER) // 指定列的数据类型为整数
  id!: number; // 消息 ID

  // 定义内容列
  @Column(DataType.TEXT) // 指定列的数据类型为文本
  content!: string; // 消息内容

  // 定义用户 ID 列
  @Column({
    type: DataType.STRING, // 指定列的数据类型为字符串
    field: 'user_id' // 指定数据库中的列名为 'user_id'
  })
  userId!: string; // 用户 ID

  // 定义时间戳列
  @Column(DataType.DATE) // 指定列的数据类型为日期
  timestamp!: Date; // 消息的时间戳
}