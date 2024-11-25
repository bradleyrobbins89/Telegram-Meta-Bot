import express from 'express';
import { handleFormData, getUserByEmail } from '../controllers/user.controller.js';

const router = express.Router();

router.post('/send-data', handleFormData);
router.get('/user', getUserByEmail);

export default router;