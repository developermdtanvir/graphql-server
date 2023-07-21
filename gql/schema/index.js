const {gql} = require('apollo-server-express')
const Ur = require('./User')
const hello = require('./hello')
const rootSchmea = gql`

    type Query {
        _:Boolean
    }

    type Mutation{
        _:Boolean
    }
`

module.exports = [rootSchmea, Ur,hello]