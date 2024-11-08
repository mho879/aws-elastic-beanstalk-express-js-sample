const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('COMP4964 Lab 7 Part 2 MHO. Additional message after adding review stage.'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
