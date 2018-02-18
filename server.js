const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '/client/build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
// });

app.get('/api/hello', (req, res) => {
  res.send({ express: 'Hello From Express' });
});


app.listen(9000);