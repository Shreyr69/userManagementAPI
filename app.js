import express from 'express';
import userRouter from './routes/userRoutes.js';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the User Management API');
});

app.use('/api/users', userRouter);

export default app;