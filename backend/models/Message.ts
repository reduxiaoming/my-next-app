import { Table, Column, Model, PrimaryKey, AutoIncrement, DataType } from 'sequelize-typescript';

@Table({
  tableName: 'messages',
  timestamps: false
})
export class Message extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column(DataType.TEXT)
  content!: string;

  @Column({
    type: DataType.STRING,
    field: 'user_id'
  })
  userId!: string;

  @Column(DataType.DATE)
  timestamp!: Date;
}