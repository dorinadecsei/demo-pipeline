const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello Telco!');
});

app.listen(port, () => {
  console.log(`Backend server is running at http://localhost:${port}`);
});

