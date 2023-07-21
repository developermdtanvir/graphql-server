const {gql} = require('apollo-server-express')
module.exports = gql`

    type UserReturn{
        _id:String
        name:String
        email:String
    }

    extend type   Query{
        Ur:[UserReturn]
    }

    input book{
        name:String
        email:String
    }
    type Book {
        _id:ID
        name:String
        email:String
    }

    extend type Mutation{
        storeBook(input:book):Book
    }
`
