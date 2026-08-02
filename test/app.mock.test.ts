import { mock, type MockProxy } from 'jest-mock-extended';
import type { FastifyInstance } from 'fastify';
import { buildApp } from '../src/app';

describe('buildApp', (): void => {
  it('registers the ping route', (): void => {
    const server: MockProxy<FastifyInstance> = mock<FastifyInstance>();

    buildApp(server);

    expect(server.get).toHaveBeenCalledWith('/ping', expect.any(Function));
  });
});
