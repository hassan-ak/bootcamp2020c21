const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const resolvers = {
    Query : {
        user : ()=>{
            return {
                name: "Hassan Ali Khan",
                age: 28
            }
        }
    }
}

const server = new ApolloServer({ typeDefs , resolvers });

server.listen().then(() => {
    console.log(`
      Server is running!
      Listening on port 4000
      Explore at https://studio.apollographql.com/dev
    `);
  });