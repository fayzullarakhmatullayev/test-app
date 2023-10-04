import pg from 'pg';
import dotenv from 'dotenv';
const { Pool } = pg;

dotenv.config();

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL + "?sslmode=require",
});

// pending, processed, delivered, closed
export default pool;
