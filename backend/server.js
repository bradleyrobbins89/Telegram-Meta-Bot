import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import cors from 'cors';

import userRoutes from './routes/user.routes.js';
import connectDB from './config/db.js'

dotenv.config();
const app = express();
const mongoURI = process.env.MONGO_DB_URI;

// Middleware
app.use(bodyParser.json());
app.use(cors());
connectDB(mongoURI);

// Routes
app.use('/api', userRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});