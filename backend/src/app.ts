import 'express-async-errors';
import express from 'express';
import cors from 'cors';
import errorHandler from './middlewares/errorHandler';
import userRouter from './routes/User';

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter);

app.use(errorHandler);

export default app;
