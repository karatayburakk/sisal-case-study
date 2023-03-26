import { AppDataSource } from './data-source';
import { app } from './app';

const port = process.env.APP_PORT ? +process.env.APP_PORT : 9000;

async function startApp(): Promise<void> {
	try {
		await AppDataSource.initialize();
		console.log(`Data Source has been initialized successfully!`);
	} catch (err) {
		console.error(`Error during Data Source initialization!`, err);
		process.exit(1);
	}

	app.listen(port, () => {
		console.log(`App is now running at http://locahost:${port}`);
	});
}

startApp();
