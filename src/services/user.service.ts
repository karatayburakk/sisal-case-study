import { User } from '../entities/user.entity';
import { userRepository } from '../repositories/user.repository';
import { CreateUserDto } from '../dtos/user/create-user.dto';

export async function create(payload: CreateUserDto): Promise<User> {
	const { email, password } = payload;
	const newUser = userRepository.create({
		email,
		password,
	});

	return await userRepository.save(newUser);
}

export async function findById(id: number): Promise<User> {
	return await userRepository.findOneByOrFail({ id });
}

export async function findByEmail(email: string): Promise<User> {
	return await userRepository.findOneByOrFail({ email });
}

export async function updatePasswordById(id: number, password: string): Promise<void> {
	await userRepository.update({ id }, { password });
	return;
}

export async function updatePasswordByEmail(email: string, password: string): Promise<void> {
	await userRepository.update({ email }, { password });
	return;
}
