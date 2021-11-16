"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConection = void 0;
var dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
var mongoConection = function () { return ({
    plugin: require('hapi-mongodb'),
    options: {
        // url: process.env.MONGO_URL,
        url: 'mongodb+srv://ihor:12345@cluster0.rm29b.mongodb.net/todos-db?retryWrites=true&w=majority',
        settings: {
            useUnifiedTopology: true,
        },
        decorate: true,
    },
}); };
exports.mongoConection = mongoConection;
