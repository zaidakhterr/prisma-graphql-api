const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Author {
    id: Int!
    name: String!
    email: String!
    books: [Book]!
  }

  type Book {
    id: Int!
    title: String!
    author: Author!
  }

  type Query {
    authors: [Author]!
    author(id: Int!): Author
  }
`;

module.exports = typeDefs;
