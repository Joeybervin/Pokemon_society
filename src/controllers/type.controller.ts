import { Request, Response } from 'express';
import { TypeModel } from '../models/Type.model';
import { logger } from '../configs/logger';
import Type from '../types/Type';
import Pokemon from '../types/Pokemon';
import { validateQuery } from '../utils/queryUtils';
import { GenericModel } from '../models/Generic.model';


export const getAllTypesController = async (req: Request, res: Response)=> {
    const queryParams = Object.keys(req.query).length > 0 ? req.query : null;

    if (queryParams) {
        return getAllPokemonFromTypeController(req, res);
    }

    try {
        const types: Type[] = await TypeModel.findAll();
        if (types.length === 0) {
          logger.info(`No types found`);
          res.status(404).json({ message: 'No types found' });
          return;
        }
        res.status(200).json(types);
    } catch (error) {
        logger.error(`Failed to retrieve Types: ${error}`);
        res.status(500).json({ message: 'Server error' });
    }
};


export const getAllPokemonFromTypeController = async (req: Request, res: Response) => {
    const typeName: string = String(req.query.name) ?? '';


    if (!validateQuery(typeName)) {
      logger.warn(`Bad Request : SQL INJECTION detected | got : ${typeName}`)
      res.status(404).json({message : 'Bad Request : Give a validate data'})
      return;
    }

    if (!typeName) {
      logger.warn(`Request failed: Type name is required`);
      res.status(400).json({ message: 'Bad Request : Type name is required' });
      return;
    }
 
  try {

    const typeExist: boolean = await TypeModel.exists(typeName);
    if (!typeExist) {
      logger.warn(`Bad Request :  Type not found`);
      res.status(404).json({ message: 'Bad Request : Type not found' });
      return;
    }
    const type: Pokemon[] | null = await TypeModel.findOneAndItsPokemons(typeName);

    console.log(type)
    if (type.length === 0) {
      logger.info(`No Pokémon found for the specified type.`);
      res.status(204).json({ message: `Not data : No Pokémon found for the specified type.` });
      return;
    } 
    res.status(200).json(type);
  } catch (error) {
    logger.error(`Failed to retrieve Pokémon for type "${typeName}": ${error}`);
    res.status(500).json({ message: 'Server error : Please try again later.' });
  }

};

export const addType = async (req: Request, res: Response) => {
  
  try {
    const data: Type = req.body;
    
    if (!data) {
        res.status(400).send('Table and data are required');
        return;
    }

    const newType = await GenericModel.add('types', data) 
        res.status(201).json({message :'Data inserted successfully', data : newType });
    } catch (error) {
        res.status(500).send('Error inserting data');
    }
  
}

// export const editType = async (req: Request, res: Response) => {
//   const table: string ;
//   const id: string;
//   const data: Record<string, any>;
//   const editedType = await GenericModel.update(table, id, data);
// }

export const deleteType = async (req: Request, res: Response) => {

  try {

    const id: number = Number(req.params.id);

    if (!id) {
        res.status(400).send('Table and data are required');
        return;
    }

      const isDelete = await GenericModel.delete('type', id) 

      res.status(201).json({message :'Data deleted successfully', data : id });
    } catch (error) {
        res.status(500).send('Error deleting data');
    }
}