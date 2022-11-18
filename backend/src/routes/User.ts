import { Router } from 'express';
import userController from './main'

const userRouter = Router();

userRouter.post('/login', userController.login);

export default userRouter;
