require("dotenv").config();
import express from "express";
import logger from "morgan";
import { ApolloServer } from "apollo-server-express";
import { typeDefs, resolvers } from "./schema";
import { getUser, protectResolver } from "./users/users.utils";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { graphqlUploadExpress } from "graphql-upload";

const PORT = process.env.PORT;
const app = express();
const startServer = async () => {
  const apollo = new ApolloServer({
    resolvers,
    typeDefs,
    context: async ({ req }) => {
      return {
        loggedInUser: await getUser(req.headers.token),
        protectResolver,
      };
    },
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });

  await apollo.start();

  // app.use(logger("tiny"));
  app.use(express.static("uploads"))
  app.use(graphqlUploadExpress());
  apollo.applyMiddleware({ app });
  app.use("/static", express.static("uploads"));

  await new Promise((r) => app.listen({ port: PORT }, r)).then(() =>
    console.log(
      `🚀 Server is running on http://localhost:${PORT}${apollo.graphqlPath} ✅`
    )
  );
};

startServer();
