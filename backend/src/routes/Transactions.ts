import { Router } from 'express';
import { transactionController } from './main';
import authToken from '../middlewares/authentication';

const transactionRouter = Router();

transactionRouter.use('/transactions', authToken);

transactionRouter.get('/transactions/cashin', transactionController.cashIn);

export default transactionRouter;
