import { executeQuery } from '../utils/queryUtils';
import Type from '../types/Type';
import Pokemon from '../types/Pokemon';

export const typeExist = (typeName: string): Promise<any[]> => {
  const query =
  `
    SELECT COUNT(*) AS count
    FROM types
    WHERE identifier = ?
  `;
    return executeQuery(query, typeName);
};

export const getAllTypes = (): Promise<Type[]> => {
    const query =
    `
      SELECT id, identifier
      FROM types;
    `;
       return executeQuery(query);
};

export const getAllPokemonFromType = (typeName: string): Promise<Pokemon[]> => {
  const query =
  `
    SELECT  t.id AS type_id, p.id AS pokemon_id, p.identifier AS pokemon_identifier
    FROM pokemon AS p
    RIGHT JOIN pokemon_types AS pt ON pt.pokemon_id = p.id
    RIGHT JOIN types AS t ON t.id = pt.type_id
    WHERE t.identifier = ?
    ORDER BY p.identifier ASC;
  `;
     return executeQuery(query, typeName);
};

  