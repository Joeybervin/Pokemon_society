import { Type } from 'typescript';
import Item from '../types/Item';
import Pokemon from '../types/Pokemon';
import { executeQuery } from '../utils/queryUtils';

export const deleteById = (table: string, id: number): Promise<Pokemon | Item | Type> => {
    const query = `
        DELETE FROM ${table}
        WHERE id = ?;
    `;
    return executeQuery(query, id);
};

export const insertData = (table: string, data: any): Promise<Pokemon | Item | Type> => {
    const tableFormat = Object.keys(data).map((key) => `\`${key}\``).join(', ');
    // const placeholders = Object.keys(data).map(() => '?').join(', ');
    const values = Object.values(data).join('", "');
    const query = `
        INSERT INTO \`${table}\` (${tableFormat})
        VALUES ("${values}");
    `;

    return executeQuery(query);
};

export const updateData = (table: string, id: number, data: any): Promise<Pokemon | Item | Type> => {
    const updates = Object.keys(data).map((key) => `${key} = ?`).join(', ');

    const query = `
        UPDATE ${table}
        SET ${updates}
        WHERE id = ?;
    `;

    return executeQuery(query, id);
};