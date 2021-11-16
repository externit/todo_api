import TodoController from '../controllers/todo.controllers';
import { todoValidation } from '../models/todo.model';

const todo = new TodoController();

export const TodoRoutes = [
  {
    method: 'PUT',
    path: '/delete/{id}',
    handler: todo.deleteTodo,
  },

  {
    method: 'PUT',
    path: '/update/{id}',
    options: {
      validate: {
        payload: todoValidation,
      },
    },
    handler: todo.updateTodo,
  },

  {
    method: 'POST',
    path: '/add',
    options: {
      validate: {
        payload: todoValidation,
      },
    },
    handler: todo.addTodo,
  },

  {
    method: 'POST',
    path: '/todos',
    handler: todo.getTodos,
  },
];
