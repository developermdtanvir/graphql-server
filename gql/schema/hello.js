const {gql} = require('apollo-server-express')
module.exports = gql`
    extend type  Query{
        getUser:[User]
    }

    
    input user{
        name:String
        email:String
    }
    type User {
        id:ID
        name:String
        email:String
    }

    extend type Mutation{
        storeUser(input:user):User
    }    


`