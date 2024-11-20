import { Router } from 'express';
import pokemonRoutes from './pokemon.routes';
import typeRoutes from './type.routes';
import itemRoutes from './item.routes';

const router = Router();

router.use('/pokemon', pokemonRoutes);

router.use('/type', typeRoutes);

router.use('/item', itemRoutes);

export default router;