import { User , Qoute} from "./DummyData.js";
import {randomBytes} from 'crypto'

// Now we resolve our Queries
const resolvers = {

    Query:{
        users: () => User,
        user:(_,userid)=> User.find(user => user.id === userid.id),
        qoutes:() => Qoute, 
        iqoute:(_,qouteid) => Qoute.filter(qoute => qoute.by == qouteid.id)
        
    },
    
    // we put parent(User) Because we just want those specific User qoutes
    // with the help of this we got id and use them to filter-out qoutes  
    Users:{
        qoutes:(uid) => Qoute.filter( qoute => qoute.by == uid.id)
    
        
    },
    
    Mutation:{



        signUpUser:(_,{newUser})=>{

            // Firts we assign a random number for user
            
            const id = randomBytes(5).toString('hex');
            
            
            User.push({
            
            id,
           ...newUser
           
            })

            return User.find( user => user.id == id )


//         signUpUser:(_,{firstName,lastName,email,password})=>{

// // Firts we assign a random number for user

// const id = randomBytes(5).toString('hex');


// User.push({

// id,
// firstName,
// lastName,
// email,
// password
// })



        }

    } 
    
    }
    
    export default resolvers