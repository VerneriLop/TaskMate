import express from 'express';
import bodyParser from 'body-parser';
import authRoutes from './routes/authRoutes';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware, joka mahdollistaa JSON-rungon käsittelyn
app.use(express.json());

// Pääsivun reitti
app.get('/', (_, res) => {
  res.send('Hello, world!');
});

app.use(bodyParser.json()); // JSON-muotoisten pyyntöjen käsittely

app.use('/api/auth', authRoutes); // Käytetään auth-reittiä

// Käynnistetään palvelin
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
