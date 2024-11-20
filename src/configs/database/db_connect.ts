import mysql, { Pool } from 'mysql2';
import { logger } from '../logger';
import * as dotenv from 'dotenv'
dotenv.config()

const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  // port: process.env.MYSQL_PORT,
  waitForConnections: true,
  connectionLimit: Number(process.env.MYSQL_CONNECTION_LIMIT) || 10,
  queueLimit: 0
});

pool.getConnection((error, connection) => {
  if (error) {
    logger.error(`Échec de connexion à la base de données : ${error.message}`);
  } else {
    logger.info('Connexion réussie à la bse de données.');
    connection.release();
  }
})

export default pool;




