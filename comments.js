//Create web server
// 1. npm init
// 2. npm install express
// 3. npm install body-parser
// 4. npm install cors
// 5. node comments.js

// 6. npm install -g nodemon
// 7. nodemon comments.js

// 8. npm install -g json-server
// 9. json-server --watch db.json

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3001;

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/comments', (req, res) => {
  const comments = [
    {
      id: 1}]})
