/*
    * @file createUserController.js
* This controller file is part of the Backend project which handles the request/response cycle 
to access the distance calculation functionality.
*/
const distanceServices = require('../services/distanceServices');

const getDistanceController = async(req,res)=>{
    try{
        const userLatitude = req.user.latitude;
        const userLongitude = req.user.longitude;
        const {latitudeDistance, longitudeDistance} =req.query;
        if(!latitudeDistance || !longitudeDistance){
            return res.status(400).json({
                status_code:400,
                message:"Provide the latitude and longitude distance values",
            });
        }

        // The following getDistanceService method is calling to 
        // calculate the distance between the user and the given coordinates.

        const result = await distanceServices.getDistanceService(userLatitude,userLongitude, latitudeDistance, longitudeDistance);        
        res.status(200).json({
            status_code: 200,
            message: "Distance Fetched Successfully",
            distance: result
        });
    }catch(error){
        console.error("Error in fetching distance",error);
        res.status(500).json({
            status_code:500,
            message:error

        })

    }
}

module.exports = {getDistanceController};

