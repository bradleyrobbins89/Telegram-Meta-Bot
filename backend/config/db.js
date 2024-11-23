import mongoose from 'mongoose'

const connectDB = async (mongoURI) => {
    try {
        await mongoose.connect(mongoURI);
        console.log('MongoDB connection successful');
    } catch (err) {
        console.error('MongoDB connection failed:', err.message);
        process.exit(1);
    }
};

export default connectDB;