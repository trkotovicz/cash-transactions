/* eslint-disable max-len */
import { Op } from 'sequelize';
import Account from '../database/models/Account';
// import Sequelize from '../database/models/index';
import Transaction from '../database/models/Transaction';
import User from '../database/models/User';
import IAccount from '../interfaces/IAccount';
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

  decrementBalance = async (value: number, accountId: number/* , t: any */) => {
    const account = await Account.findByPk(accountId);
    if (!account) throw Error('EntityNotFound');
    if (account.balance < value) throw Error('InsuficientFounds');
    const [teste] = await Account.decrement(
      { balance: value },
      { where: { id: accountId }/* , transaction: t */ },
    );
    console.log('========== account', account);
    console.log('========== decrement account', teste);
  };

  incrementBalance = async (value: number, accountId: number/* , t: any */) => {
    const account = await Account.findByPk(accountId);
    if (!account) throw Error('EntityNotFound');
    const [teste] = await Account.increment(
      { balance: value },
      { where: { id: accountId }/* , transaction: t */ },
    );
    console.log('>>>>>>>>>> account', account);
    console.log('>>>>>>>>>> increment account', teste);
  };

  createTransaction = async (usernameCashIn: string, value: number, accountCashOut: IAccount)
  : Promise<ITransaction | undefined> => {
    // const t = await Sequelize.transaction();
    
    const userCashIn = await User.findOne({
      where: { username: usernameCashIn }, attributes: ['username', 'accountId'] });
    if (!userCashIn) throw Error('EntityNotFound');
    if (userCashIn.accountId === accountCashOut.id) throw Error('UnauthorizedError');

    // try/catch comum
    try {
      await this.decrementBalance(value, accountCashOut.id);
      await this.incrementBalance(value, userCashIn.accountId);

      const newTransaction = await Transaction.create({
        value, debitedAccountId: accountCashOut.id, creditedAccountId: userCashIn.accountId,
      });
      return newTransaction;      
    } catch (error) {
      throw new Error();
    }

    // TRANSACTION
    /* try {
      await this.decrementBalance(value, accountCashOut.id, t);
      await this.incrementBalance(value, userCashIn.accountId, t);

      const newTransaction = await Transaction.create({
        value, debitedAccountId: accountCashOut.id, creditedAccountId: userCashIn.accountId,
      }, { transaction: t });

      await t.commit();

      console.log('>>>>>>>>>> service create', newTransaction);      

      return newTransaction;
    } catch (error) { await t.rollback(); } */
  };
}
