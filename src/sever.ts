import Hapi from '@hapi/hapi';
import { Server } from '@hapi/hapi';

import { TodoRoutes } from './routes/todos.routes';
import { UserRoutes } from './routes/user.routes';

import { mongoConection } from './db/db.connection';

export const init = async (): Promise<void> => {
  const server: Server = Hapi.server({
    port: 4000,
    host: 'localhost',
    routes: {
      cors: true,
    },
  });

  await server.register(mongoConection());
  server.realm.modifiers.route.prefix = '/api/v1';
  server.route(TodoRoutes);
  server.route(UserRoutes);

  await server.start();
};

process.on('unhandledRejection', (err) => {
  console.error('unhandledRejection');
  console.error(err);
  process.exit(1);
});
