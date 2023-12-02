import mongoose from 'mongoose';

const URL = 'mongodb+srv://faruk:farouk1919@react-node-crud.xj71hng.mongodb.net/cv-generator';
mongoose.connect(URL);

const dbConnection = mongoose.connection;

dbConnection.on('connected', () => {
    console.log('MongoDB connection successful');
});

dbConnection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

export default dbConnection;
