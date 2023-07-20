const express = require('express');
const router = express.Router();
const {userCollection} = require('./../db/index')

router.get('/',async(req,res)=>{
const query = {}
   const cursor = await userCollection.find(query)
   const result = await cursor.toArray()
   res.send(result)
})

module.exports = router