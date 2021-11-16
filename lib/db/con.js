"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongoConection = void 0;
var mongoConection = function () { return ({
    plugin: require('hapi-mongodb'),
    options: {
        url: 'mongodb+srv://ihor:12345@cluster0.rm29b.mongodb.net/todos-db?retryWrites=true&w=majority',
        settings: {
            useUnifiedTopology: true,
        },
        decorate: true,
    },
}); };
exports.mongoConection = mongoConection;
