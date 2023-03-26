import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import express, { Request, Response, NextFunction } from 'express';
import { rootRouter } from './routes/root.router';
import { authRouter } from './routes/auth.roter';
import { globalErrorHandler } from './utils/global-error-handler';
import { AppError } from './utils/AppError';
import { redditRouter } from './routes/reddit.router';
import morgan from 'morgan';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', rootRouter);

app.use('/auth', authRouter);

app.use('/reddit', redditRouter);

app.all('*', (req: Request, _res: Response, next: NextFunction): void => {
	return next(new AppError(`Can't find ${req.originalUrl} on this server`, 404));
});

app.use(globalErrorHandler);

export { app };
