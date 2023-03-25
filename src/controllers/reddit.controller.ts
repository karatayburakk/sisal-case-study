import { Request, Response } from 'express';
import { catchAsync } from '../utils/catch-async';

interface Post {
	title: string;
	imageUrl: string;
}

export const getTopPosts = catchAsync(async (req: Request, res: Response) => {
	const response = await fetch('https://www.reddit.com/r/node/top.json');
	const { data, message } = await response.json();

	// console.log(data);

	if (!isDataAvailable(message)) {
		return res.status(400).json({
			status: 'fail',
			message,
		});
	}

	const subRedditField = data.children[0].data.subreddit;
	const { posts, numberOfImages } = getPostsAndNumbOfImages(data.children);

	if (numberOfImages === 0) {
		return res.status(404).json({
			status: 'fail',
			message: 'Not Fund',
		});
	}

	return res.status(200).json({
		subRedditField,
		posts,
		numberOfImages,
	});
});

function isDataAvailable(message: string): boolean {
	return message !== 'Forbidden' && message !== 'Not Found';
}

function getPostsAndNumbOfImages(childrenArr: any[]): { posts: Post[]; numberOfImages: number } {
	let numberOfImages = 0;

	const posts: Post[] = [];

	for (let i = 0; i < childrenArr.length; i++) {
		// console.log(childrenArr[i].data.title, childrenArr[i].data.url);

		if (isUrlContainJpg(childrenArr[i].data.url)) {
			posts.push({ title: childrenArr[i].data.title, imageUrl: childrenArr[i].data.url });
			numberOfImages++;
		}
	}

	return { posts, numberOfImages };
}

function isUrlContainJpg(url: string): boolean {
	return url.includes('.jpg');
}
