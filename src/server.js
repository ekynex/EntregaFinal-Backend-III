import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/database.js';
import usersRouter from './routes/users.routes.js';
import adoptionRouter from './routes/adoption.routes.js';

dotenv.config();
connectDB();

const app = express();
app.use(express.json());

app.use('/api/users', usersRouter);
app.use('/api/adoptions', adoptionRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));
