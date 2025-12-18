import express from 'express';
import morgan from 'morgan';
import path from 'path';
import config from './config.js';

const { port } = config;

const app = express();

app.use(morgan('dev'));

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Allow', 'GET, POST, PUT, DELETE');
    next();
})

app.use(express.static(path.join('public', 'micro')));

app.listen(port.micro, () => {
    console.log(`server start at http://localhost:${port.micro}/`);
});
