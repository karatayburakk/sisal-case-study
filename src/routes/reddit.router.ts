import { Router } from 'express';
import * as redditController from '../controllers/reddit.controller';
import { protect } from '../controllers/auth.controller';

const redditRouter: Router = Router();

redditRouter.get('/top-posts/:subReddit', protect, redditController.getTopPosts);

export { redditRouter };
