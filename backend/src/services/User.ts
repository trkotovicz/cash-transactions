import md5 from 'md5';
import User from '../database/models/User';
import IUserJwt from '../interfaces/IUserJwt';
import { IUser, userZodSchema } from '../interfaces/IUser';
import passwordValidator from './passwordValidator';

export default class UserService {
  findUser = async (username: string): Promise<IUser> => {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      const err = new Error('Incorrect username or password');
      err.name = 'UnauthorizedError';
      throw err;
    }
    return user;
  };

  login = async (username: string, password: string): Promise<IUserJwt> => {
    const user = await this.findUser(username);
    if (!user || user.password !== md5(password)) {
      const err = new Error('Incorrect username or password');
      err.name = 'UnauthorizedError';
      throw err;
    }

    return { id: user.id, username: user.username };
  };

  // createUser = async (obj: IUser): Promise<IUser> => {
  //   passwordValidator(obj.password);
  //   const parsed = userZodSchema.safeParse(obj);
  //   if (!parsed.success) throw parsed.error;

  //   const user = await User.create(obj);
  //   return user;
  // };
}
