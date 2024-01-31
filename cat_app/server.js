const express = require('express');
const app = express();
const port = 3000;

const axios = require('axios');

app.set('view engine', 'ejs');

app.get('/', async (req, res) => {
  const catFactsUrl = 'https://catfact.ninja/facts';

  try {
    const response = await axios.get(catFactsUrl);
    const catFacts = response.data.data;

    // res.json(catFacts);
    res.render("index", {catFacts})
  } catch (error) {
    console.error('Error fetching cat facts:', error);
    res.status(500).send('Error fetching cat facts');
  }
});

// Define routes and middleware here

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});