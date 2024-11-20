import { Router } from 'express';
import { getHomeController } from '../controllers/home.controller';

const router = Router();

router.get('/', getHomeController)

// router.get('/gallery', getHomeController);

export default router;