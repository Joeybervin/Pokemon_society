import * as pokemonRepository from '../repositories/pokemon.repository';
import Pokemon from '../types/Pokemon';
import { getDataOrNull } from '../utils/dataUtils';

export class PokemonModel {


    static async findAll(): Promise<Pokemon[]> {
        return await pokemonRepository.getAllPokemons();
    }

    static async findOne(searchMethod: string, searchInput: string): Promise<Pokemon | null> {
      const pokemon = await pokemonRepository.getPokemon(searchMethod, searchInput);
      return getDataOrNull(pokemon);
    }
    
    static async findPokemonTypes(searchMethod: string, searchInput: string): Promise<Pokemon | null> {
      const typesData = await pokemonRepository.getPokemonTypes(searchMethod, searchInput);
      return getDataOrNull(typesData);
    }

    static async findPokemonMoves(searchMethod: string, searchInput: string): Promise<Pokemon | null> {
      const movesData = await pokemonRepository.getPokemonMoves(searchMethod, searchInput);
      return getDataOrNull(movesData);
    }

    static async findPokemonEggGroups(searchMethod: string, searchInput: string): Promise<Pokemon | null> {
      const eggGroupsData = await pokemonRepository.getPokemonEggGroups(searchMethod, searchInput);
      return getDataOrNull(eggGroupsData);
    }

}