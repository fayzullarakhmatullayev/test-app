import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

import pool from './db.js';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get('/', (req, res) => {
  res.json({ message: 'success' });
});

app.get('/api/employee', async (req, res) => {
  try {
    pool.query('SELECT * FROM employee', (error, results) => {
      if (error) return res.status(500).json({ error });

      res.status(200).json(results.rows);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.get('/api/client', async (req, res) => {
  try {
    pool.query('SELECT * FROM client', (error, results) => {
      if (error) return res.status(500).json({ error });

      res.status(200).json(results.rows);
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
});

app.listen(PORT, () => {
  console.log(`Server runing on http://localhost:${PORT}`);
});
