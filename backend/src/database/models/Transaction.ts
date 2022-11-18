import { DATE, DECIMAL, INTEGER, Model } from 'sequelize';
import db from '.';
import Account from './Account';

class Transaction extends Model {
  id!: number;
  value!: number;
  debitedAccountId!: number;
  creditedAccountId!: number;
  createdAt!: Date;
}

Transaction.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  value: {
    type: DECIMAL(12, 2),
    allowNull: false,
  },
  debitedAccountId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'Account',
      key: 'id',
    },
  },
  creditedAccountId: {
    type: INTEGER,
    allowNull: false,
    references: {
      model: 'Account',
      key: 'id',
    },
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  sequelize: db,
  modelName: 'Transaction',
  tableName: 'transactions',
  timestamps: false,
});

Transaction.belongsTo(
  Account,
  { foreignKey: 'creditedAccountId', as: 'creditedAccount' },
);
Transaction.belongsTo(
  Account,
  { foreignKey: 'debitedAccountId', as: 'debitedAccount' },
);

export default Transaction;