const {userCollection} = require('./../../db')
module.exports = {
    Query:{
        // hello:()=> 'Hello World',
        Ur:async()=>{
            const query = {}
            const result = await userCollection.find(query).toArray()
            return result
        },
        Mutation:{
            storeBook:async(_,req) =>{
                console.log(req)
            }
        }
        
    }
}

