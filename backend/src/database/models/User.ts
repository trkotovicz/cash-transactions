import { INTEGER, Model, STRING } from 'sequelize';
import db from '.';
import Account from './Account';

class User extends Model {
  id!: number;
  username!: string;
  password!: string;
}

User.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  username: {
    type: STRING,
    allowNull: false,
  },
  password: {
    type: STRING,
    allowNull: false,
  },
  accountId: {
    type: STRING,
    allowNull: false,
    references: {
      model: 'Account',
      key: 'id',
    }
  },
}, {
  sequelize: db,
  modelName: 'User',
  timestamps: false,
});

User.belongsTo(Account, { foreignKey: 'accountId', as: 'account' });

export default User;