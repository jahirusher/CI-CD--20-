import express from 'express';
import { fileURLToPath } from 'url';
import path from 'path';
import db from './config/connection.js';
import routes from './routes/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', routes);

app.use(express.static(path.join(__dirname, '../client/dist')));

db.once('open', () => {
  app.listen(PORT, () => console.log(`🌍 Now listening on localhost:${PORT}`));
});

