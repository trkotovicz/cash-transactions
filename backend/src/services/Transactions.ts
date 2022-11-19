// import Sequelize from '../database/models/index';
import Account from '../database/models/Account';
import Transaction from '../database/models/Transaction';
import User from '../database/models/User';
import ITransaction from '../interfaces/ITransaction';

export default class TransactionService {
  cashIn = async (accountId: number): Promise<ITransaction[]> => {
    const transactions = await Transaction.findAll({
      where: { creditedAccountId: accountId },
      include: [
        { model: Account,
          as: 'creditedAccount',
          attributes: { exclude: ['balance'] } },
        { model: Account,
          as: 'debitedAccount',
          attributes: { exclude: ['balance'] } },
        { model: User, as: 'account' },
      ],
    });
    return transactions;
  };

  // cashOut = async (id: number): Promise<ITransaction[]>=> {};
  // allTransactions = async (id: number): Promise<ITransaction[]> => {};
}