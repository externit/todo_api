import { Request, ResponseToolkit } from '@hapi/hapi';
import { User } from '../models/user.model';
import { compare, genSalt, hash } from 'bcryptjs';
import { unauthorized } from '@hapi/boom';

interface ReqMongo extends Request {
  mongo: any;
}

export default class UserController {
  constructor() {}

  public createUser = async (req: ReqMongo, res: ResponseToolkit) => {
    try {
      const payload: any = req.payload;
      const oldUser = await req.mongo.db
        .collection('users')
        .findOne({ email: payload.email });

      if (oldUser) {
        throw unauthorized('User already register');
      }
      const salt = await genSalt(10);
      const user: User = {
        email: payload.email,
        passwordHash: await hash(payload.passwordHash, salt),
        creactedAt: new Date(),
      };

      const result = req.mongo.db.collection('users').insertOne(user);
      return result;
    } catch (e: any) {
      return e.output.payload;
    }
  };

  public validateUser = async (req: ReqMongo, res: ResponseToolkit) => {
    try {
      const payload: any = req.payload;
      const user = await req.mongo.db
        .collection('users')
        .findOne({ email: payload.email });

      if (!user) {
        throw unauthorized('User not found');
      }
      const isCorrectPassword = await compare(
        payload.password,
        user.passwordHash
      );
      if (!isCorrectPassword) {
        throw unauthorized('Wrong password');
      }
      return { id: user._id };
    } catch (e: any) {
      return e.output.payload;
    }
  };
}
