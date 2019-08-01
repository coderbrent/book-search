const express = require('express');
const port = process.env.PORT || 3001;
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const db = mongoose.connection;

app.use(bodyParser());

db.once('open', ()=> console.log('The Google Books DB is open.'))
mongoose.connect('mongodb://localhost:27017/googlebooks', {useNewUrlParser: true});

app.get('/', (req, res) => res.send('Express DERPPP!'));

app.listen(port, ()=> console.log(`Server is working and listening on port ${port}!`))


//ROUTES
app.get('/api/search', (req, res) => {
//return all saved books
})

app.post('/api/savebook', (req, res) => {
//save books to our db
})

app.delete('/api/deletebook/:id', (req, res) => {
//delete a book from the db by it's id
})

app.get('*', (req, res) => {
  //loads our standard view
})