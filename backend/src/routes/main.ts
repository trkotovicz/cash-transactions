import AccountController from '../controllers/Account';
import UserController from '../controllers/User';
import AccountService from '../services/Account';
import UserService from '../services/User';

const userService = new UserService();
const userController = new UserController(userService);

const accountService = new AccountService();
const accountController = new AccountController(accountService);

export { userController, accountController };