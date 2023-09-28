import { gql } from "apollo-server-core"

// First we Create Schema 

 const typeDefs = gql`


type Query{

    users:[Users]
    user(id:ID!):Users
    qoutes:[Qoute]
    iqoute(id:ID!):[Qoute]
    

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



type Mutation{
    signUpUser(newUser:UserInput!):Users
}


input UserInput{
firstName:String!
lastName:String!
email:String!
password:String!


}


`
////type Mutation{
////    signUpUser(firstName:String!,lastName:String!,email:String!,password:String!):Users
////}

export default  typeDefs