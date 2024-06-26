import { NextFunction, Request, Response } from 'express';
import { QueryFailedError } from 'typeorm';
import { AppError } from './AppError';

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const globalErrorHandler = (err: any, req: Request, res: Response, _next: NextFunction) => {
	console.error(err.constructor.name);

	// TypeOrm Errors
	if (err.constructor.name === QueryFailedError.name) {
		return res.status(400).json({
			status: 'fail',
			message: err.detail || err.message,
		});
	}

	// App Errors
	if (err.constructor.name === AppError.name) {
		if (err.statusCode === 403) {
			return res.status(err.statusCode).send();
		}

		return res.status(err.statusCode).json({
			status: err.status,
			message: err.message,
		});
	}

	// Undetected Server Errors
	return res.status(500).json({
		message: err.message,
	});
};
