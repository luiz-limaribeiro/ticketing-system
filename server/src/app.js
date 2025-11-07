import express from 'express';
import ticketRoutes from './routes/ticketRoutes.js';

const app = express();

app.use(express.json());

app.use('/api/tickets', ticketRoutes);

app.get('/', (req, res) => {
  res.send('IT Support API - Online ✅');
});

export default app;
