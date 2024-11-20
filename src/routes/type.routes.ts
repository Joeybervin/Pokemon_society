import { Router } from 'express';
import { getAllTypesController, getAllPokemonFromTypeController, deleteType, addType } from '../controllers/type.controller';

const router = Router();

router.get('/', getAllTypesController);

router.get('/:name', getAllPokemonFromTypeController);

router.post('/add', addType);

// router.patch('/update/:id', editType);

router.delete('/delete/:id', deleteType);

export default router;
