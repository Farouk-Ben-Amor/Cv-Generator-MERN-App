import express from 'express';
const app = express();
import dbConnect from './dbConnect.js';

const port = 3000;

app.get('/', (req, res) => res.send("Hello world!"));

app.listen(port, () => console.log(`This app is running on Port ${port}!`));
