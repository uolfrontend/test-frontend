import { Router } from 'express';
import { createUser, getUsers } from '../controller/Users.controller';

const router = Router();

router.get('', (req, res) => {
  res.send('Você acessou a rota /users');
});

router.post('', createUser);
router.get('', getUsers);

export default router;
