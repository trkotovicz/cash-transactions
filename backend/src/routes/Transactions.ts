import { Router } from 'express';
import { transactionController } from './main';

const transactionRouter = Router();

const URL = '/transactions';

transactionRouter.get(URL, transactionController.allTransactions);
transactionRouter.get(`${URL}/cashin`, transactionController.cashIn);
transactionRouter.get(`${URL}/cashout`, transactionController.cashOut);
transactionRouter.post(`${URL}/new`, transactionController.createTransaction);

export default transactionRouter;
