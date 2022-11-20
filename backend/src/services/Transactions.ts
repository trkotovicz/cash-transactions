// import Sequelize from '../database/models/index';
import { Op } from 'sequelize';
import Transaction from '../database/models/Transaction';
import User from '../database/models/User';
import ITransaction from '../interfaces/ITransaction';

export default class TransactionService {
  cashIn = async (accountId: number): Promise<ITransaction[]> => {
    const transactions = await Transaction.findAll({
      where: { creditedAccountId: accountId },
      include: [
        { model: User, as: 'debitedUser', attributes: ['username'] },
        { model: User, as: 'creditedUser', attributes: ['username'] },
      ],
    });
    return transactions;
  };

  cashOut = async (accountId: number): Promise<ITransaction[]> => {
    const transactions = await Transaction.findAll({
      where: { debitedAccountId: accountId },
      include: [
        { model: User, as: 'debitedUser', attributes: ['username'] },
        { model: User, as: 'creditedUser', attributes: ['username'] },
      ],
    });
    return transactions;
  };

  allTransactions = async (accountId: number): Promise<ITransaction[]> => {
    const transactions = await Transaction.findAll({
      where: { [Op.or]: {
        debitedAccountId: accountId,
        creditedAccountId: accountId,
      } },
      include: [
        { model: User, as: 'debitedUser', attributes: ['username'] },
        { model: User, as: 'creditedUser', attributes: ['username'] },
      ],
    });
    return transactions;
  };
}