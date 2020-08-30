const express = require("express");
const { ApolloServer, gql } = require("apollo-server-express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

const main = () => {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
  });

  server.applyMiddleware({ app, path: "/graphql" });

  app.listen({ port: 4000 }, () => console.log(`Server ready at http://localhost:4000${server.graphqlPath}`));
};

main();
