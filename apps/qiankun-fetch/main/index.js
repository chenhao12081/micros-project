import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const _filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(_filename);

const app = express();

app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});