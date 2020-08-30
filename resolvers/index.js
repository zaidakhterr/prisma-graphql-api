const { authors, author } = require("./author");

const resolvers = {
  Query: {
    authors,
    author,
  },
};

module.exports = resolvers;
