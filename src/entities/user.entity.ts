import {
	Column,
	CreateDateColumn,
	Entity,
	PrimaryGeneratedColumn,
	UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'users' })
export class User {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column({ unique: true, nullable: false })
	email!: string;

	@Column({ nullable: false })
	password!: string;

	@CreateDateColumn()
	createdAt!: Date;

	@UpdateDateColumn()
	updatedAt!: Date;
}
