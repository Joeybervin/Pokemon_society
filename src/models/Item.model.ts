import * as itemRepository from '../repositories/item.repository';
import Item from '../types/Item';
import { getDataOrNull } from '../utils/dataUtils';

export class ItemModel {
  
    static async findAll(): Promise<Item[]> {
          return await itemRepository.getAllItem();
    }
  
    static async findOne(searchMethod: string, itemName: string): Promise<Item | null> {
        const item = await itemRepository.getItem(searchMethod, itemName);
        return getDataOrNull(item);
    }

  
  }