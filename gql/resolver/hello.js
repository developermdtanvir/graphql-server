const {userCollection} = require('./../../db')
module.exports = {
    Query:{
        getUser:async()=>{
            const data = await userCollection.find({}).toArray()
            return data
        }
    },

    Mutation:{
        storeUser:async(_,req)=>{
            const data = await userCollection.insertOne(req.input)
            req.input.data = data.insertedId
            return req.input
        }
    } 
}