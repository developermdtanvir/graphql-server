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

`
