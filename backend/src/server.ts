import express from 'express';

const app = express();
const port = 5001;

// Middleware, joka mahdollistaa JSON-rungon käsittelyn
app.use(express.json());

// Pääsivun reitti
app.get('/', (_, res) => {
  res.send('Hello, world!');
});

// Käynnistetään palvelin
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});