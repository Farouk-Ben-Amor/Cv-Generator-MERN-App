import dotenv from 'dotenv'
import mongoose from 'mongoose';
dotenv.config
const URL = process.env.MONGODB_URL
mongoose.connect(URL);

const dbConnection = mongoose.connection;

dbConnection.on('connected', () => {
    console.log('MongoDB connection successful');
});

dbConnection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

export default dbConnection;