import { Router } from 'express';
import { getUser, updateUser, deleteUser } from '../controller/User.controller';

const router = Router();

router.get('', (req, res) => {
  res.send('Você acessou a rota /user');
});

router.get(':id', getUser);
router.put(':id', updateUser);
router.delete(':id', deleteUser);

export default router;
