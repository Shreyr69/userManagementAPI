import express from 'express';
import userRouter from './routes/userRoutes.js';
import postRouter from './routes/postRouter.js';


const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the User Management API');
});

app.use('/api/users', userRouter);
app.use('/api/posts', postRouter);


export default app;