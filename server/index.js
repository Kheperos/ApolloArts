import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';

const app = express();

// GraphQL type definitions
const typeDefs = gql`
  type Query {
    hello: String
  }
`;

// GraphQL resolvers
const resolvers = {
  Query: {
    hello: () => 'Hello, world!'
  }
};

// Apollo Server instance
const server = new ApolloServer({ typeDefs, resolvers });

// Connect Apollo Server to Express
server.applyMiddleware({ app });

// Start the server
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
