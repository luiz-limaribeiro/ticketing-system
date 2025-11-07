import dotenv from 'dotenv';
import app from './app.js';
import { initDb } from './config/db.js';

dotenv.config();

const PORT = process.env.PORT || 3000;

initDb().then(() => {
  app.listen(PORT, () => {
    console.log(`server running at http://localhost:${PORT}`);
  });
}).catch(err => {
  console.error('error initializing the database:', err)
})
