const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: String,
  authors: String,
  description: String,
  image: String,
  link: String
})

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;