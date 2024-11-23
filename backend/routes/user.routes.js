import express from 'express';
import { handleFormData } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/send-data', handleFormData);

export default router;
