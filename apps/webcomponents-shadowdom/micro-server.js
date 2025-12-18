import express from 'express';
import morgan from 'morgan';
import path from 'path';
import config from './config.js';

const { port } = config;
const app = new express();

app.use(morgan('dev'));
app.use(express.static(path.join('public', 'micro')));

app.listen(
    port.micro,
    () => {
        console.log(`micro app run at http://localhost:${port.micro}`)
    }
)