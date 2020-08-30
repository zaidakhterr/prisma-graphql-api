const { authors, author, addAuthor, removeAuthor } = require("./author");
const { books, book, addBook, removeBook } = require("./book");

const resolvers = {
  Query: {
    authors,
    author,
    books,
    book,
  },
  Mutation: {
    addAuthor,
    removeAuthor,
    addBook,
    removeBook,
  },
};

module.exports = resolvers;
