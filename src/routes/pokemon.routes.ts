import { Router } from 'express';
import { addPokemon, deletePokemon, getAllPokemonsController, getAllPokemonsSpecificInfos,
        getPokemonController,
         } from '../controllers/pokemon.controller';

const router = Router();

router.get('/', getAllPokemonsController);

router.get('/:searchMethod', getPokemonController);

router.get('/:searchMethod', getAllPokemonsSpecificInfos);

router.post('/add', addPokemon);

// router.patch('/update/:id', editPokemon);

router.delete('/delete/:id', deletePokemon);

export default router;

