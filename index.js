const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');

require('dotenv').config();

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/', express.static(path.join(__dirname, 'implicit.html')));

app.listen(6666, () => {console.log(`listening on ${port}`)});