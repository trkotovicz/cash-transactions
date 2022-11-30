import { Router } from 'express';
import { userController } from './main';

const userRouter = Router();

userRouter.post('/login', userController.login);
userRouter.post('/register', userController.createUser);

export default userRouter;

/**
 * @swagger
 *  tags:
 *    name: User
 *    description: Endpoints de usuário
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *       User:
 *         type: object
 *         required:
 *            - username
 *            - password
 *         properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 *         example:
 *            username: bartsimpson
 *            password: B00bs!69
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *       UserRegister:
 *         type: object
 *         required:
 *            - username
 *            - password
 *         properties:
 *            username:
 *              type: string
 *            password:
 *              type: string
 *         example:
 *            username: johnwick
 *            password: Daisy!123
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *       UserResponse:
 *         type: object
 *         properties:
 *            user:
 *              type: object
 *              properties:
 *                id:
 *                  type: integer
 *                username:
 *                  type: string
 *                accountId:
 *                  type: integer
 *            token:
 *              type: string
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *       UserRegisterResponse:
 *         type: object
 *         properties:
 *           id:
 *             type: integer
 *           username:
 *              type: string
 *           password:
 *               type: string
 *           accountId:
 *               type: integer
 */

/**
 * @swagger
 *   /login:
 *      post:
 *        tags: [User]
 *        description: Login do usuário
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/User'
 *        responses:
 *          200:
 *            description: OK
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#/components/schemas/UserResponse'
 */

/**
 * @swagger
 *   /register:
 *      post:
 *        tags: [User]
 *        description: Cadastro de usuário
 *        requestBody:
 *          required: true
 *          content:
 *            application/json:
 *              schema:
 *                type: object
 *                $ref: '#/components/schemas/UserRegister'
 *        responses:
 *          201:
 *            description: CREATED
 *            content:
 *              application/json:
 *                schema:
 *                  type: object
 *                  $ref: '#/components/schemas/UserRegisterResponse'
 */
