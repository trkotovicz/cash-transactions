import { Router } from 'express';
import { accountController } from './main';

const accountRouter = Router();

accountRouter.get('/account/:id', accountController.balanceAccount);

export default accountRouter;

/**
 * @swagger
 *  tags:
 *    name: Account
 *    description: Endpoint da conta bancária
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *       AccountResponse:
 *         type: object
 *         properties:
 *            id:
 *              type: integer
 *            balance:
 *              type: number
 *              format: double
 */

/**
 * @swagger
 *   /account/{id}:
 *      get:
 *        tags: [Account]
 *        description: Retorna os dados de uma conta bancária através do id
 *        parameters:
 *          - in: path
 *            name: id
 *            type: string
 *            required: true
 *        security:
 *          - apiKey: []
 *        responses:
 *          200:
 *            description: OK
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#/components/schemas/AccountResponse'
 */