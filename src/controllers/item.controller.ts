import { Request, Response } from 'express';
import { logger } from '../configs/logger';
import Item from '../types/Item';
import { validateQuery } from '../utils/queryUtils';
import { ItemModel } from '../models/Item.model';
import { GenericModel } from '../models/Generic.model';



export const getAllItems = async (req: Request, res: Response) => {
     
  if (Object.keys(req.params).length > 0) {
    return getItem(req, res);
  }
  
  try {
    const items: Item[] = await ItemModel.findAll();
    if (items.length === 0) {
      logger.info("No item found.")
      res.status(204).json({message : "No item found"})
      return;
    }
    res.status(200).json(items);
  } catch (error) {
    logger.error(`Failed to retrieve items : ${error}`);
    res.status(500).json({ message: 'Server error' });
  }
};

export const getItem = async (req: Request, res: Response) => {

    const searchMethod: string = Number(req.params.searchMethod) ? 'id' : 'identifier';
    const params: string = req.params.searchMethod;
  
    if (!validateQuery(params)) {
      logger.warn(`Bad Request : SQL INJECTION detected | got : ${params}`)
      res.status(400).json({message : 'Bad Request : Give a validate data'});
      return;
    }
  
    try {
      const item: Item | null = await ItemModel.findOne(searchMethod, params);
  
      if (!item) {
        logger.info(`Item with ${searchMethod.toUpperCase()} ${params} not found`)
        res.status(404).json({ message: `Item with ${searchMethod.toUpperCase()} ${params} not found` });
        return;
      } 
      res.status(200).json(item);
  
    } catch (error) {
      logger.error(`Failed to retrieve Item with ID ${params}: ${error}`);
      res.status(500).json({ message: 'Server error' });
    }
}; 
  
export const addItem = async (req: Request, res: Response) => {

  try {
    const data: Item = req.body;
    
    if (!data) {
        res.status(400).send('Table and data are required');
        return;
    }

    const newItem = await GenericModel.add('items', data) 
        res.status(201).json({message :'Data inserted successfully', data : newItem });
    } catch (error) {
        res.status(500).send('Error inserting data');
    }
  
}

// export const editItem = async (req: Request, res: Response) => {
//   const table: string ;
//   const id: string;
//   const data: Record<string, any>;
//   const editedItem = await GenericModel.update(table, id, data);
// }

export const deleteItem = async (req: Request, res: Response) => {
  
  try {
    const id: number = Number(req.params.id);
    
    if (!id) {
        res.status(400).send('Table and data are required');
        return;
    }

      await GenericModel.delete('items', id) 

      res.status(201).json({message :'Data deleted successfully', data : id });
    } catch (error) {
        res.status(500).send('Error deleting data');
    }
}