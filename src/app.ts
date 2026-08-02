import fastify from 'fastify';
import type { FastifyInstance } from 'fastify';

export function buildApp(server: FastifyInstance = fastify()): FastifyInstance {
  server.get('/ping', async (): Promise<string> => {
    return 'pong';
  });

  return server;
}

export const app: FastifyInstance = buildApp();
