import express from 'express';
import path from 'path';
import morgan from 'morgan';
import config from './config.js';

const app = express();
const { port } = config;

app.use(morgan('dev'));
app.use(express.static(path.join('public', 'main')));

app.post('/app-micros', function (req, res) {
    res.json([{
        name: 'micro1',
        id: 'micro1',
        customElement: 'micro-app-1',
        script: `http://localhost:${port.micro}/micro1.js`,
        style: `http://localhost:${port.micro}/micro1.css`,
        prefetch: true,
    }]);
});

app.listen(port.main, () => {
    console.log(`server start at http://localhost:${port.main}/`);
});