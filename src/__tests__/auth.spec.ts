import request from 'supertest';
import { app } from '../app';
import { userRepository } from '../repositories/user.repository';

beforeEach(async () => {
	await userRepository.clear();
});

describe('User Registration', () => {
	it('should return response status 201 if user creates new account', () => {
		//
		request(app)
			.post('/auth/signup')
			.expect('Content-Type', /json/)
			.expect(201)
			.then(response => {
				expect(response.body).toEqual(
					expect.objectContaining({
						email: expect.any(String),
						token: expect.any(String),
						createdAt: expect.any(String),
						updatedAt: expect.any(String),
					}),
				);
			});
	});
});
