import dotenv from 'dotenv';
dotenv.config();
import 'reflect-metadata';
import express from 'express';
import { rootRouter } from './routes/root.router';
import { authRouter } from './routes/auth.roter';
import { globalErrorHandler } from './utils/global-error-handler';
import { AppDataSource } from './data-source';

const app = express();
app.use(express.json());

const port = process.env.APP_PORT ? +process.env.APP_PORT : 9000;

function setupExpress(): void {
	app.use('/', rootRouter);

	app.use('/auth', authRouter);

	// app.all('*', UnhandledRouters);

	app.use(globalErrorHandler);
}

async function startApp(): Promise<void> {
	try {
		await AppDataSource.initialize();
		console.log(`Data Source has been initialized successfully!`);
	} catch (err) {
		console.error(`Error during Data Source initialization!`, err);
		process.exit(1);
	}

	setupExpress();

	app.listen(port, () => {
		console.log(`App is now running at http://locahost:${port}`);
		console.log(`Api Docs are available at http://localhost:${port}/docs`);
	});
}

startApp();
