const { authors, author, addAuthor, removeAuthor } = require("./author");
const { books, book, addBook } = require("./book");

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
  },
};

module.exports = resolvers;
