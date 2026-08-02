import env from '@fastify/env';
import { app } from './app';

const envSchema = {
  type: 'object',
  required: ['PORT'],
  properties: {
    PORT: { type: 'integer', minimum: 1, maximum: 65535 },
  },
} as const;

const envFile = process.env.NODE_ENV === 'test' ? '.env.test' : '.env';

const start = async (): Promise<void> => {
  await app.register(env, {
    schema: envSchema,
    dotenv: { path: envFile },
  });

  await app.listen({ port: app.getEnvs<{ PORT: number }>().PORT });
};

start().catch((error: unknown): void => {
  app.log.error(error);
  process.exit(1);
});
