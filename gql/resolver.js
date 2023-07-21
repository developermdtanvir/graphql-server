const {userCollection} = require('./../db/index')
const resolvers = {
    Query:{
        hello:()=> 'Hello World',
        Ur:async()=>{
            const query = {}
            const result = await userCollection.find(query).toArray()
            return result
        }
    }
}

module.exports = resolvers