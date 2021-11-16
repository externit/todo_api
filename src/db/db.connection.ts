import dotenv from 'dotenv';
dotenv.config();

export const mongoConection = () => ({
  plugin: require('hapi-mongodb'),
  options: {
    // url: process.env.MONGO_URL,
    url: 'mongodb+srv://ihor:12345@cluster0.rm29b.mongodb.net/todos-db?retryWrites=true&w=majority',
    settings: {
      useUnifiedTopology: true,
    },
    decorate: true,
  },
  
});
