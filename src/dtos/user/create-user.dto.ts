import { Expose } from 'class-transformer';
import { IsDefined, IsEmail, IsString } from 'class-validator';

export class CreateUserDto {
	@IsDefined()
	@IsEmail()
	@Expose()
	email!: string;

	@IsDefined()
	@IsString()
	@Expose()
	password!: string;
}
