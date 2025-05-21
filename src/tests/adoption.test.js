import request from 'supertest';
import express from 'express';
import adoptionRouter from '../routes/adoption.routes.js';

const app = express();
app.use(express.json());
app.use('/api/adoptions', adoptionRouter);

describe('📦 Tests funcionales para /api/adoptions', () => {
  test('GET /api/adoptions debe devolver 200 y un mensaje', async () => {
    const response = await request(app).get('/api/adoptions');
    expect(response.statusCode).toBe(200);
    expect(response.body).toHaveProperty('message', 'Listado de adopciones');
  });

  test('GET a una ruta inválida debe devolver 404', async () => {
    const response = await request(app).get('/api/adoptions/404');
    expect(response.statusCode).toBe(404);
  });
});
