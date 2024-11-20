import Pokemon from '../types/Pokemon';
import { executeQuery } from '../utils/queryUtils';

export const getAllPokemons = (): Promise<Pokemon[]> => {
  const query = `
    SELECT id, identifier
    FROM pokemon;
     `;
     return executeQuery(query);
};

export const getPokemon = (searchMethod: string, searchInput: string): Promise<Pokemon[]> => {
  const query = `
    SELECT *
    FROM pokemon
    WHERE ${searchMethod} = ?
    LIMIT 1;
  `;

  return executeQuery(query, searchInput);
}; 

export const getPokemonTypes = (searchMethod: string, searchInput: string): Promise<Pokemon[]> => {
  const query = `
    SELECT p.id AS id, GROUP_CONCAT(DISTINCT t.identifier SEPARATOR ", ") AS "types"
    FROM types AS t
    INNER JOIN pokemon_types AS pt ON pt.type_id = t.id
    INNER JOIN pokemon AS p ON p.id = pt.pokemon_id
    WHERE p.${searchMethod} = ?
    ORDER BY t.identifier ASC;
  `; 
  return executeQuery(query, searchInput)
};

export const getPokemonMoves = (searchMethod: string, searchInput: string | number): Promise<Pokemon[]> => {
  const searchMethodCondition: string = searchMethod === "id" ? `?` : `(SELECT id FROM pokemon AS p WHERE identifier = ?)`;
  
  const query = `
    SELECT pm.pokemon_id AS id, GROUP_CONCAT(DISTINCT m.identifier SEPARATOR ", ") AS "moves"
    FROM pokemon_moves pm
    JOIN moves m ON pm.move_id = m.id
    WHERE pm.pokemon_id = ${searchMethodCondition}
    ORDER BY m.identifier ASC;
  `;

  return executeQuery(query, searchInput)
};

export const getPokemonEggGroups = (searchMethod: string, searchInput: string): Promise<Pokemon[]> => {
  const query = `
    SELECT p.id AS id, GROUP_CONCAT(DISTINCT eg.identifier SEPARATOR ", ") AS "egg_groups"
    FROM egg_groups AS eg
    INNER JOIN pokemon_egg_groups AS peg ON peg.egg_group_id = eg.id
    INNER JOIN pokemon AS p ON p.species_id = peg.species_id
    WHERE p.${searchMethod} = ?
    ORDER BY eg.identifier ASC;
  `;

  return executeQuery(query, searchInput)
};