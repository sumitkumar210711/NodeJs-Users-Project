/*
* This file is the initial point from where the application starts its execution. It uses the express library 
to start the server on nodejs environment and uses the cors, middlewars to connect with the multiple routes files.
*/
const express = require('express');
const cors = require('cors');
const connectMongoDB = require('./src/config/database')
const app = express();
const dotenv = require('dotenv');
const createUserRoutes = require('./src/routes/createUserRoutes');
const updateStatusRoutes = require('./src/routes/updateStatusRoutes');
const distanceRoutes = require('./src/routes/distanceRoutes');
const userDetailsRoutes = require('./src/routes/userDetailsRoutes');
dotenv.config();

//It uses to parse the incoming request bodies and make available to the req.body.
app.use(express.json());

app.use(cors()); // This statement enables cors policy in this node project.
connectMongoDB(); // This statement calls the connectmongodb function from the database.js file.

app.use('/api',createUserRoutes);
app.use('/api',updateStatusRoutes);
app.use('/api',distanceRoutes);
app.use('/api',userDetailsRoutes);

//The following get request will return the string when no route is given.
app.get('/',(req,res)=>{
    res.send("Hello Appsinvo, My Name is Sumit kumar");
});

const port = process.env.PORT;
app.listen(port,()=>{
    console.log(`Server is running on ${port}`)
});





