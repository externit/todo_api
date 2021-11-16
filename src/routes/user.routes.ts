import UserController from '../controllers/user.controllers';
import { userValidation } from '../models/user.model';

const user = new UserController();

export const UserRoutes = [
  {
    method: 'POST',
    path: '/user/create',
    options: {
      validate: {
        payload: userValidation,
      },
    },
    handler: user.createUser,
  },
  {
    method: 'POST',
    path: '/user/login',
    handler: user.validateUser
  }
];
