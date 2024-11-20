import pool from '../configs/database/db_connect';
import { logger } from '../configs/logger';

export const executeQuery = <T>(query: string, params: string | number = ''): Promise<T>  => {
  return new Promise((resolve, reject) => {
    pool.query(query, params, (error, results): void => {
      if (error) {
        logger.error(error);
        reject(error);
      } else {
        resolve(results as T);
      }
    });
  });
};

export const validateQuery = (userInput: string): boolean => {

  const regex: RegExp = /\b(SELECT|INSERT|UPDATE|DELETE|DROP|UNION|ALTER|EXEC|TRUNCATE|GRANT|REVOKE|CREATE|SHOW)\b|(--|#|;|\/\|\\|'|"|\\)/

  if (!regex.test(userInput)) {
    return true
  }
  else {
    return false
  }
}

