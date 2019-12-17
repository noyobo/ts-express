import { DataTypes, Model } from 'sequelize';

import { sequelize } from '@/database/sequelize';

export class User extends Model {
  public id!: number;
}

User.init(
  {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER.UNSIGNED,
      unique: true,
      allowNull: false,
    },
    username: {
      allowNull: false,
      type: DataTypes.STRING,
      unique: true,
    },
  },
  {
    modelName: 'user',
    sequelize, // this bit is important
    tableName: 'ts_user',
    charset: 'utf8mb4',
    comment: '用户表',
    // indexes: [
    //   {
    //     unique: true,
    //     fields: ['openid', 'unionid'],
    //   },
    // ],
  },
);
