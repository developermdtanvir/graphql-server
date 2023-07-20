const express = require('express');
const {connectToMongoDB} = require('./db/index');
const cors = require('cors');
const userRoute = require('./route/userRoute')
const {ApolloServer,gql} = require('apollo-server-express')
const typeDefs = require('./gql/schema')
const resolvers = require('./gql/resolver')

const port = process.env.PORT || 5000


const app = express();

// milldeware 
app.use(cors());
app.use(express.json())

app.use('/user',userRoute)


connectToMongoDB().catch(console.error);

// graphql server



let apolloServer = null
async function startServer() {
    apolloServer = new ApolloServer({
        typeDefs,
        resolvers,
    });
    await apolloServer.start()
    apolloServer.applyMiddleware({ app,path:'/graphql'});
}
startServer();



app.get('/',(req,res)=>{
    res.send('graphql server is running')
})

app.listen(port,()=>console.log('listeting on port '+port))