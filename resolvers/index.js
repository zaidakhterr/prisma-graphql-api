const { authors } = require("./author");

const resolvers = {
  Query: {
    authors,
  },
};

module.exports = resolvers;
