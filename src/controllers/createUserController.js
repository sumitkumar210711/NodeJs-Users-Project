/*
* This controller file is part of the Backend project which handles the request/response cycle to access the user 
creation functionality.
*/
const createUserServices = require('../services/createUserServices');
const authMiddleware = require('../middleware/authMiddleware');

const createUser = async(req,res)=>{
    try{
        const userData = req.body;
        if(!userData){
            return res.status(400).json({
                status_code:400,
                message:"No Request Body, please add the data  to store in the database",
            });
        }
        // The following createService method is calling to create a new user in the database.
        // It will return the user object if the user is created successfully, otherwise it will return null.
        if(!userData.name || !userData.email || !userData.password || !userData.latitude || !userData.longitude){
            return res.status(400).json({
                status_code:400,
                message:"Provide the Required Fields",
            });
        }
        const resultUser = await createUserServices.createService(userData);


        if(!resultUser){
            return res.status(400).json({
                status_code:400,
                message:`User ${userData.name} already exists`
            });
        }

        // The following generateToken method is calling to create a JWT token for the user after successful registration.
        const token = await authMiddleware.generateToken(resultUser.id, userData.latitude, userData.longitude);
        
        res.status(200).json({
            status_code:200,
            message:"User is successfully created",
            data: {resultUser, token}
        });

    }catch(error){
        if(error.code === 11000){
            return res.status(400).json({
                status_code:400,
                message: `Email already exists`
            });
        }
        else
        {
            res.status(500).json({
            status_code:500,
            message:error
        })
        }
    }
}

module.exports = {createUser};

