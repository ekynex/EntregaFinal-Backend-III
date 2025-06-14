import request from 'supertest';
import express from 'express';
import usersRouter from '../routes/users.routes.js';

const app = express();
app.use(express.json());
app.use('/api/users', usersRouter);

describe('🧪 Tests funcionales para /api/users', () => {
  test('GET /api/users debe devolver 200 y un mensaje', async () => {
    const response = await request(app).get('/api/users');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Ruta de usuarios funcionando');
  });

  test('GET a una ruta inválida debe devolver 404', async () => {
    const response = await request(app).get('/api/users/404');
    expect(response.statusCode).toBe(404);
  });
});
