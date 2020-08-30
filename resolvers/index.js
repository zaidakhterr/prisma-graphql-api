const { authors, author, addAuthor, removeAuthor } = require("./author");
const { books, book } = require("./book");

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
  },
};

module.exports = resolvers;
