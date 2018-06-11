const express = require('express');
const path = require('path');

const app = express();

app.use('/:id', express.static(path.resolve(__dirname + '/../public/')));

app.listen(3000, () => console.log('Express server listening on port 3000'));
