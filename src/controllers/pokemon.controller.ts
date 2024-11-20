import { Request, Response } from 'express';
import { logger } from '../configs/logger';
import Pokemon from '../types/Pokemon';
import { validateQuery } from '../utils/queryUtils';

import { GenericModel } from '../models/Generic.model';
import { PokemonModel } from '../models/Pokemon.model';

export const getAllPokemonsController = async (req: Request, res: Response) => {
  
  if (Object.keys(req.params).length > 0) {
    return getPokemonController(req, res);
  }
  try {
    const pokemons: Pokemon[] = await PokemonModel.findAll();
    if (pokemons.length === 0) {
      logger.info("No pokemons found.")
      res.status(204).json({message : "No pokemons found"})
      return;
    }
    res.status(200).json(pokemons);
  } catch (error) {
    logger.error(`Failed to retrieve Pokémon: ${error}`);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getPokemonController = async (req: Request, res: Response) => {
  const searchMethod: string = Number(req.params.searchMethod) ? 'id' : 'identifier';
  const params: string = req.params.searchMethod;

  if (!validateQuery(params)) {
    logger.warn(`Bad Request : SQL INJECTION detected | got : ${params}`)
    res.status(400).json({message : 'Bad Request : Give a validate data'});
    return;
  }

  if (Object.keys(req.query).length > 0) {
    return getAllPokemonsSpecificInfos(req, res)
  }

  try {
    const pokemon: Pokemon |null = await PokemonModel.findOne(searchMethod, params);

    if (!pokemon) {
      logger.info(`Pokemon with ${searchMethod.toUpperCase()} ${params} not found`)
      res.status(404).json({ message: `Pokemon with ${searchMethod.toUpperCase()} ${params} not found` });
      return;
    } 
    res.status(200).json(pokemon);

  } catch (error) {
    logger.error(`Failed to retrieve Pokemon with ID ${params}: ${error}`);
    res.status(500).json({ message: 'Server error' });
  }
}; 

export const getAllPokemonsSpecificInfos = async (req: Request, res: Response) => {
  const searchMethod: string = Number(req.params.searchMethod) ? 'id' : 'identifier';
  const params: string | number = req.params.searchMethod;
  const filter = req.query.filter;
  let pokemonInfos: Pokemon | null;

  if (!validateQuery(String(filter))) {
    logger.warn(`Bad Request : SQL INJECTION detected | got : ${filter}`)
    res.status(400).json({message : 'Bad Request : Give a validate data'});
    return;
  }
  
  try {
    if (filter === 'types') {
      pokemonInfos = await PokemonModel.findPokemonTypes(searchMethod, params);
    }
    else if (filter === 'moves') {
      pokemonInfos = await PokemonModel.findPokemonMoves(searchMethod, params);
    } 
    else if (filter === 'egg_groups') {
      pokemonInfos = await PokemonModel.findPokemonEggGroups(searchMethod, params);
    } else {
      logger.warn(`Request failed: A filter type is required`);
      res.status(400).json({ message: 'Request failed: A filter type is required' });
      return;
    }

    if (!pokemonInfos || !pokemonInfos.id) {
      console.log("ici")
      logger.error(`Not Found : Failed to retrieve Pokemon ${params}.`);
      res.status(404).json({ message: `Not Found : No Pokémon found.` });
      return;
    }

    if (!pokemonInfos[filter]) {
      console.log("coco")
      logger.error(`Failed to retrieve Pokemon ${params} / ${filter}.`);
      res.status(204).json({ message: `No pokemons were found` });
      return;
    }

    res.status(200).json(pokemonInfos);

  } catch (error) {
    logger.error(`Server error`);
    res.status(500).json({ message: 'Server error' });
  }
}
 
export const addPokemon = async (req: Request, res: Response) => {

  try {
    const data: Pokemon = req.body;
    
    if (!data) {
        res.status(400).send('Table and data are required');
        return;
    }

    const newPokemon = await GenericModel.add('pokemon', data) 
        res.status(201).json({message :'Data inserted successfully', data : newPokemon });
    } catch (error) {
        res.status(500).send('Error inserting data');
    }
  
}

// export const editPokemon = async (req: Request, res: Response) => {

//   const table: string ;
//   const id: string;
//   const data: Record<string, any>;
//   const editedPokemon = await GenericModel.update(table, id, data);
// }

export const deletePokemon = async (req: Request, res: Response) => {

  const id: number = Number(req.params.id);
  try {
    
    if (!id) {
        res.status(400).send('Table and data are required');
        return;
    }

      const isDelete = await GenericModel.delete('pokemon', id) 

      res.status(201).json({message :'Data deleted successfully', data : id });
    } catch (error) {
        res.status(500).send('Error deleting data');
    }}

