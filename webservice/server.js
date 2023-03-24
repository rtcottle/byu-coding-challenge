const express = require('express');
const path = require('path');
const api = require('./api');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './webapp/movieapp/index.html'))
);

//GET route to test api call
app.get('/api', (req, res) => res.json(api));

app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
