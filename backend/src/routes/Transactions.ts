import { Router } from 'express';
import { transactionController } from './main';

const transactionRouter = Router();

transactionRouter.get('/transactions/cashin', transactionController.cashIn);
transactionRouter.get('/transactions/cashout', transactionController.cashOut);
transactionRouter.get('/transactions', transactionController.allTransactions);

export default transactionRouter;
