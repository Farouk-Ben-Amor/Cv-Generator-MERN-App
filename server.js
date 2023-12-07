import express from 'express';
import cors from 'cors'
const app = express();
import dbConnect from './dbConnect.js';
app.use(express.json())
const port = 5000;
import userRoute from './routes/userRoute.js';
app.use(cors());

app.use('/api/user/', userRoute)


app.get('/', (req, res) => res.send("Hello world!"));

app.listen(port, () => console.log(`This app is running on Port ${port}!`));
