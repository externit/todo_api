"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserRoutes = void 0;
var user_controllers_1 = __importDefault(require("../controllers/user.controllers"));
var user_model_1 = require("../models/user.model");
var user = new user_controllers_1.default();
exports.UserRoutes = [
    {
        method: 'POST',
        path: '/user/create',
        options: {
            validate: {
                payload: user_model_1.userValidation,
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
