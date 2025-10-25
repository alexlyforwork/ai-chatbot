import express from 'express';
import AIRouter from './v1/routes/ai.router.js';

const router = express.Router();

router.use('/ai', AIRouter);

export { router };

