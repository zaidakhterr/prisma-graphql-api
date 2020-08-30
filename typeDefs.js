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
    books: [Book]!
    book(id: Int!): Book
  }

  type Mutation {
    addAuthor(name: String!, email: String!): Author!
    removeAuthor(id: Int!): Author
    addBook(title: String!, authorId: Int!): Book!
    removeBook(id: Int!): Book
  }
`;

module.exports = typeDefs;
