import { DataSource } from 'typeorm';
import { User } from './entities/user.entity';

export const AppDataSource = new DataSource({
	type: 'mysql',
	host: process.env.MYSQLDB_HOST || 'data-source',
	// host: 'localhost',
	username: process.env.MYSQLDB_USER || 'root',
	password: process.env.MYSQLDB_ROOT_PASSWORD || '123456',
	port: process.env.MYSQLDB_PORT ? parseInt(process.env.MYSQLDB_PORT) : 3306,
	database: process.env.MYSQLDB_DATABASE || 'db',
	synchronize: true,
	logging: false,
	entities: [User],
});
