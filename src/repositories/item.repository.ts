import { executeQuery } from '../utils/queryUtils';
import Item from '../types/Item';

export const getAllItem = (): Promise<Item[]> => {
    const query =
    `
      SELECT id, identifier
      FROM items;
    `;
       return executeQuery(query);
};

export const getItem = (searchMethod: string, searchInput: string): Promise<Item[]> => {
    const query =
     `
    SELECT *
    FROM items
    WHERE ${searchMethod} = ?;
  `;
     return executeQuery(query, searchInput);
};
