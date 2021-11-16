"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TodoRoutes = void 0;
var todo_controllers_1 = __importDefault(require("../controllers/todo.controllers"));
var todo_model_1 = require("../models/todo.model");
var todo = new todo_controllers_1.default();
exports.TodoRoutes = [
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
                payload: todo_model_1.todoValidation,
            },
        },
        handler: todo.updateTodo,
    },
    {
        method: 'POST',
        path: '/add',
        options: {
            validate: {
                payload: todo_model_1.todoValidation,
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
