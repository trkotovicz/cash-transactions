import { Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import UserService from '../services/User';
import JwtService from '../services/jwtService';

export default class UserController {
  constructor(private userService: UserService) {}

  login = async (req: Request, res: Response) => {
    const { username, password } = req.body;
    const user = await this.userService.login(username, password);
    const token = JwtService.createToken(user);
    res.status(StatusCodes.OK).json({ user, token });
  };
  
  createUser = async (req: Request, res: Response) => {
    const user = await this.userService.createUserAccount(req.body);
    if (!user) throw Error('ConflictError'); 
    res.status(StatusCodes.CREATED).json(user);
  };
}
