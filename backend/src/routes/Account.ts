import { Router } from 'express';
import { accountController } from './main';
import authToken from '../middlewares/authentication';

const accountRouter = Router();

accountRouter.use('/account', authToken);

accountRouter.get('/account/:id', accountController.balanceAccount);

export default accountRouter;
