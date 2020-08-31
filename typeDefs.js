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

  input Filter {
    contains: String
    equals: String
    not: String
    startsWith: String
    endsWith: String
  }

  input FilterBooks {
    title: Filter
  }

  input FilterAuthors {
    name: Filter
    email: Filter
  }

  enum Sort {
    asc
    desc
  }

  input SortBooks {
    id: Sort
    title: Sort
  }

  type Query {
    authors(pageNo: Int, filter: FilterAuthors): [Author]!
    author(id: Int!): Author
    books(pageNo: Int, filter: FilterBooks, orderBy: SortBooks): [Book]!
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
