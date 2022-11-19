import { Router } from 'express';
import { accountController } from './main';

const accountRouter = Router();

accountRouter.get('/account/:id', accountController.balanceAccount);

export default accountRouter;
