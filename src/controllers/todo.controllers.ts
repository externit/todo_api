import { Request, ResponseToolkit } from '@hapi/hapi';

import { Todo } from '../models/todo.model';

interface ReqMongo extends Request {
  mongo: any;
}

export default class TodoController {
  constructior() {}

  public addTodo = async (req: ReqMongo, h: ResponseToolkit) => {
    try {
      const payload: any = req.payload;
      const { title, email } = payload;
      const todo: Todo = {
        email,
        title,
        status: 'active',
        creactedAt: new Date(),
      };

      const result = await req.mongo.db.collection('todos').insertOne(todo);

      return result;
    } catch (e) {
      console.error(e);
    }
  };

  public getTodos = async (req: ReqMongo, h: ResponseToolkit) => {
    try {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;

      const user = await req.mongo.db
        .collection('users')
        .findOne({ _id: ObjectID(id) });

      const todos = await req.mongo.db
        .collection('todos')
        .find({ email: user.email })
        .toArray();

      return todos;
    } catch (e) {
      console.error(e);
    }
  };

  public updateTodo = async (req: ReqMongo, h: ResponseToolkit) => {
    try {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;
      const payload: any = req.payload;
      const { title, status, email } = payload;

      const todo: Todo = { email, title, status, modifiedAt: new Date() };

      const result = await req.mongo.db
        .collection('todos')
        .updateOne({ _id: ObjectID(id) }, { $set: todo });

      return result;
    } catch (e) {
      console.error(e);
    }
  };

  public deleteTodo = async (req: ReqMongo, h: ResponseToolkit) => {
    try {
      const id = req.params.id;
      const ObjectID = req.mongo.ObjectID;

      const status = await req.mongo.db
        .collection('todos')
        .deleteOne({ _id: ObjectID(id) });

      return status;
    } catch (e) {
      console.error(e);
    }
  };
}
