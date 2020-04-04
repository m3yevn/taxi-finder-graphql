import { ApolloServer } from 'apollo-server';
import typeDefs from './schema';
import resolvers from './resolvers';
import * as env from "dotenv";
import dataSources from './data';

env.config({path:'./.env'});

const server = new ApolloServer({
   typeDefs,
   resolvers,
   dataSources,
   introspection: true,
   playground: true,
});

server.listen(process.env.PORT || 5000).then(({ url }) => {
   console.log(`🚀  Server is ready at ${url}`);
});
