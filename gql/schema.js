const {gql} = require('apollo-server-express')
const typeDefs = gql`

    type UserReturn{
        _id:String
        name:String
        email:String
    }

    type Query {
        hello: String
        Ur:[UserReturn]
    }
`

module.exports = typeDefs