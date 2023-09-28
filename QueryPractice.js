import { ApolloServer, } from "apollo-server";

import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import typeDefs from "./Schema.js"; 
import resolvers from "./Resolver.js";

// Now we setup our server and provide him 2 things first one is our schema and second one is resolver


const server = new ApolloServer({

typeDefs,
resolvers   ,
plugins:[
    ApolloServerPluginLandingPageGraphQLPlayground()
]

})


// now we prepare port for listen 

server.listen().then(({url})=>{

console.log(`Server Started at ${url}`);
})



