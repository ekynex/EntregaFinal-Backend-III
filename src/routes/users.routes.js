// Sintaxis ESM
import { Router } from 'express';
const router = Router();

router.get('/', (req, res) => {
  res.send('Ruta de usuarios funcionando');
});

export default router;