const express = require('express');
const port = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser());

mongoose.connect('mongodb://localhost:27017/googlebooks', {useNewUrlParser: true});

app.get('/', (req, res) => res.send('Express DERPPP!'));

app.listen(port, ()=> console.log(`Server is working and listening on port ${port}!`))