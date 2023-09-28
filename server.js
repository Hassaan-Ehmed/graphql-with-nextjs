// ApolloServer for Serve GraphQL on Node.js
import { ApolloServer,gql } from "apollo-server";

// For Custom Playground for Testing GraphQL API's
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

import {Qoute,User} from './DummyData.js'


// Create Schema

//Define Respone Type for  Client Side request
// ab Users pe square bracket isi liye nahi lagayaa kio ke ab single user jayega   
const typeDefs = gql`

type Query{
    users:[Users]
    user(id:ID!):Users
    qoutes:[Qoute]
    iqoute(by:ID!):[Qoute]
}

type Users{
    id:ID!
    firstName:String
    lastName:String
    email:String
    password:String
    qoutes:[Qoute]
   
}


type Qoute{

qoute:String
by:ID

}




`
// resolver joke process karega  Query ko
 
const resolvers = {

// Handle Query for greet specifically 
Query:{

// respone will be a return value of Function    
users: () => User,
qoutes: () => Qoute,

// We don't need parent we just need given id so leave the black param
user:(_,args)=> User.find(user => user.id === args.id ),

// user grab individual user and check if current user.id match with given.id/desired.id (args)
// so it will return that particular user other wise find()method rertun undefined

iqoute:(_,{by}) => Qoute.filter(qoute => qoute.by == by )
    

},


// We more desolve User's Schema[for just qoute ke *Define ] and tell him that when query match by qoute 
// (in Users Schema) so run callback and this function take 1 argument called
// parent adn then i filterout qoutes array based upon a condition that
// if current qoute's id matches to  user'd so get result to me other wise no ! 

// frist Parmeter take parent and second parmeter take Argument of function  

Users:{
qoutes:(ur)=> Qoute.filter(qoute => qoute.by == ur.id)
}

}


//Server ko (specific) -> Port pe Enabled kiya 
// takey tum  (Listen) karsako

const server = new ApolloServer({

// if key/value same so you can written once
//// typeDefs:typeDefs

typeDefs,
resolvers,
plugins:[
    ApolloServerPluginLandingPageGraphQLPlayground()
]
    
})

// setup port 

// server.listen().then(({url})=>{

// console.log(`Server Ready at ${url}`);

// })


// nodemon use 
// (Because some changes on Backend )
// Server Automatically Restart !






