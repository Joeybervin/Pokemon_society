import { Router } from 'express';
import { addItem, deleteItem, getAllItems, getItem } from '../controllers/item.controller';

const router = Router();

router.get('/', getAllItems);

router.get('/:searchMethod', getItem);

router.post('/add', addItem);

// router.patch('/update/:id', editItem);

router.delete('/delete/:id', deleteItem);


export default router;

