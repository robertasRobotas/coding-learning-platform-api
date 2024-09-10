import express from 'express';
import { GET_OPENAI_HELP } from '../controllers/openai.js';

const router = express.Router();

router.post('/openai/:userId', GET_OPENAI_HELP);

export default router;