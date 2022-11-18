import UserController from '../controllers/User';
import UserService from '../services/User';

const userService = new UserService();
const userController = new UserController(userService);

export default userController;