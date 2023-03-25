import nodemailer from 'nodemailer';
import { AppError } from './AppError';

interface MailOptions {
	to: string | Array<string>;
	subject: string;
	text: string;
}

export const sendEmail = async (options: MailOptions): Promise<void> => {
	const transporter = nodemailer.createTransport({
		host: 'smtp.sendgrid.net',
		port: 587,
		auth: {
			user: 'apikey',
			pass:
				process.env.SENDGRID_KEY ||
				'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',
		},
	});

	const mailOptions = {
		from: process.env.SENDGRID_EMAIL || 'karatayburakk@gmail.com',
		to: options.to,
		subject: options.subject,
		text: options.text,
	};

	try {
		await transporter.sendMail(mailOptions);
	} catch (err) {
		throw new AppError('Error while sending email', 500);
	}
};
