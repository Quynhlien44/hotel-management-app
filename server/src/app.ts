import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

dotenv.config({ path: ".env" });

export default app;