import { Request, Response } from 'express';
import { logger } from '../configs/logger';

export const getHomeController = async (req: Request, res: Response): Promise<void> => {
  
    try {
      
      res.send("Bienvenue dans la Pokemon society API !");
    } catch (error) {
      logger.error(`Failed to show homepage`);
      res.status(500).json({ message: `Server error : ${error}` });
    }
  

};