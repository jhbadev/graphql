import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";

import  {typeDefs} from './typedefs/index';
import { resolvers } from "./resolvers";




// SERVER
const server = new ApolloServer({
  typeDefs,
  resolvers

});

const { url } = await startStandaloneServer(server, {
  listen: {
    port: 4000,
  },
});

console.log(`App Listening on ${url}`);



