const { authors, author, addAuthor } = require("./author");
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
  },
};

module.exports = resolvers;
