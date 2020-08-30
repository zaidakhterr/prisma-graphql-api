const { authors, author } = require("./author");
const { books, book } = require("./book");

const resolvers = {
  Query: {
    authors,
    author,
    books,
    book,
  },
};

module.exports = resolvers;
