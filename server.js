const express = require('express');
const { Pool } = require('pg');
const app = express();

const pool = new Pool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    
});

app.get('/health', async (req, res) => {
  await pool.query('SELECT 1');
  res.json({ status: 'ok', database: 'connected' });
});


app.listen(3000, () => {
  console.log('Escuchando en el puerto 3000 DB');
});