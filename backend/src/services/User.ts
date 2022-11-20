import md5 from 'md5';
import Sequelize from '../database/models/index';
import User from '../database/models/User';
import Account from '../database/models/Account';
import IUserJwt from '../interfaces/IUserJwt';
import { IUser, INewUser } from '../interfaces/IUser';
import { validateUser } from './validatorService';

export default class UserService {
  findUser = async (username: string): Promise<IUser> => {
    const user = await User.findOne({ where: { username } });
    if (!user) throw Error('EntityNotFound');
    return user;
  };

  login = async (username: string, password: string): Promise<IUserJwt> => {
    const user = await this.findUser(username);
    if (!user || user.password !== md5(password)) {
      throw Error('UnauthorizedError');
    }
    return { id: user.id, username: user.username, accountId: user.accountId };
  };

  createUserAccount = async (obj: INewUser): Promise<User | undefined> => {
    const t = await Sequelize.transaction();

    const { username, password } = obj;
    validateUser(obj);

    try {
      const account = await Account.create({}, { transaction: t });

      const [user, created] = await User.findOrCreate({
        where: { username },
        defaults: { username, password: md5(password), accountId: account.id },
        transaction: t,
      });
      if (!created) throw Error('ConflictError');
      
      await t.commit();
      return user;
    } catch (error) {
      await t.rollback();
      console.error(error);
    }
  };  
}
