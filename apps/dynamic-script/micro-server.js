import express from 'express';
import morgan from 'morgan';
import path from 'path';
import config from './config.js';

const app = express();
const { port } = config;

app.use(morgan('dev'));
app.use(express.static(path.join('public', 'micro')));

app.listen(port.micro, () => {
    console.log(`server start at http://localhost:${port.micro}/`);
});