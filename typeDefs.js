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

  input FilterAuthors {
    name: Filter
    email: Filter
  }

  input FilterBooks {
    title: Filter
  }

  enum Sort {
    asc
    desc
  }

  input SortBooks {
    id: Sort
    title: Sort
  }

  input SortAuthors {
    id: Sort
    name: Sort
    email: Sort
  }

  type AuthorList {
    list: [Author]!
    hasMore: Boolean
  }

  type BookList {
    list: [Book]!
    hasMore: Boolean
  }

  type Query {
    authors(pageNo: Int, filter: FilterAuthors, orderBy: SortAuthors): AuthorList
    author(id: Int!): Author
    books(pageNo: Int, filter: FilterBooks, orderBy: SortBooks): BookList
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
