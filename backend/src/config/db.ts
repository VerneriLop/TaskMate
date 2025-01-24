import { Pool } from 'pg';
import dotenv from 'dotenv';

// Ladataan ympäristömuuttujat .env-tiedostosta
dotenv.config();

const pool = new Pool({
  user: process.env.DB_USER, // Käyttäjänimi, esim. 'veke'
  host: process.env.DB_HOST, // Oletuksena 'localhost'
  database: process.env.DB_NAME, // Tietokannan nimi, esim. 'taskmate'
  password: process.env.DB_PASSWORD, // Tietokannan salasana
  port: Number(process.env.DB_PORT) || 5432, // Portti, oletuksena 5432
});

export default pool;
