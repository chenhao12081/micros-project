import express from 'express';
import path from 'path';
import morgan from 'morgan';
import config from './config.js';

const { port } = config;
const app = new express();

app.use(express.static(path.join('public', 'main')));

app.post('/microapps', function(req, res) {
    res.json([{
        name: 'micro1',
        id: 'micro1',
        customElement: 'micro-app-1',
        script: `http://localhost:${port.micro}/micro1.js`,
        style: `http://localhost:${port.micro}/micro1.css`,
        prefetch: true,
    }, {
        name: 'micro2',
        id: 'micro2',
        customElement: 'micro-app-2',
        sript: `http://localhost:${port.micro}/micro2.js`,
        style: `http://localhost:${port.micro}/micro2.css`,
        prefetch: true,
    }]);
})

app.listen(port.main, () => {
    console.log(`app run at http://localhost:${port.main}/`);
})