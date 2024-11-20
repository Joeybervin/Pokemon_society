import * as typeRepository from '../repositories/type.repository';
import Type from '../types/Type';
import Pokemon from '../types/Pokemon';

export class TypeModel {

  static async exists(typeName: string): Promise<boolean> {
    const [typeFound] = await typeRepository.typeExist(typeName)
    return typeFound.count === 0 ? false : true;
  }

    static async findAll(): Promise<Type[]> {
        return await typeRepository.getAllTypes();
  }

    static async findOneAndItsPokemons(typeName: string): Promise<Pokemon[]> {
      return await typeRepository.getAllPokemonFromType(typeName);
  }

}