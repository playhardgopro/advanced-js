const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.resolve(__dirname, '.')));

app.listen(3030, () => {
  console.log('Server starting on port 3030');
  console.log('Use this link => http://localhost:3030/index.html');
});
