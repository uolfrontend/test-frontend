import UsersRoute from '../users/routes/Users.routers';
import UserRoute from '../users/routes/User.router';
import { Router } from 'express';

const router = Router();
router.use('/user', UserRoute);
router.use('/users', UsersRoute);

export default router;
