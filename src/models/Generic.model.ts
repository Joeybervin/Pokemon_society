import * as genericRepository from '../repositories/generic.repository';
import Item from '../types/Item';
import Pokemon from '../types/Pokemon';
import Type from '../types/Type';


export class GenericModel {

    static async delete(table: string, id: number): Promise<boolean> {
        const isDeleted = await genericRepository.deleteById(table, id);
        return isDeleted ? true : false;
    }

    static async update(table: string, id: number, data: Pokemon | Item | Type): Promise<boolean> {
        const isUpdated = await genericRepository.updateData(table, id, data)
        return isUpdated ? true : false;
    }

    static async add(table: string, data: Pokemon | Item | Type): Promise<boolean> {
        const isAdded = await genericRepository.insertData(table, data);
        return isAdded ? true : false;
    }

}   