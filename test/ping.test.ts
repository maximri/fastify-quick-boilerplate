import { app } from '../src';

describe('GET /ping', (): void => {
  afterAll(async (): Promise<void> => {
    await app.close();
  });

  it('returns pong', async (): Promise<void> => {
    const response = await app.inject({
      method: 'GET',
      url: '/ping',
    });

    expect(response.statusCode).toBe(200);
    expect(response.body).toBe('pong');
  });
});
