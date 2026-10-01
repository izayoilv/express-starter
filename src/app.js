const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("@apollo/server");
const { expressMiddleware } = require("@as-integrations/express5");
const { typeDefs, resolvers } = require("./graphql");

async function createApp() {
  const server = new ApolloServer({ typeDefs, resolvers });
  await server.start();

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.get("/", (req, res) => {
    res.json({ message: "API Mahasiswa", graphql: "/graphql" });
  });

  app.use("/graphql", expressMiddleware(server));

  return app;
}

module.exports = createApp;
