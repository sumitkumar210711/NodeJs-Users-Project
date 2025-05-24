/**
 *   This database file helps to connect the nodejs environment to the mongo db server using mongoose library for performing 
 *  the database operations using crud operations.
*/
const dotenv = require('dotenv');
dotenv.config();
const mongoose  = require('mongoose');

/*
* The following asynchronous function uses the Mongoose.connect which is a function to connect with the mongodb path.
*/
const connectMongoDB  = async () =>{
    
    try{
        await mongoose.connect(process.env.mongodbPath,{
            
        });
        console.log("Mongo DB is Connected Successfully");
    }catch(error){
        console.error("Mongo DB Connection error",error);
        process.exit(1);
    }
}

module.exports = connectMongoDB;
