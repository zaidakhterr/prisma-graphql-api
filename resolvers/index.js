const { authors } = require("./author");

const resolvers = {
  Query: {
    hello: () => "hello",
    authors,
  },
};

module.exports = resolvers;
