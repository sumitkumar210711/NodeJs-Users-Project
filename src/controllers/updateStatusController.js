/*
    * @file updateStatusController.js
    * This controller file is part of the Backend project which handles the request/response cycle 
    * to access the user status update functionality.
*/

const updateStatusServices = require('../services/updateStatusServices');

const updateStatus = async(req,res)=>{
    try{
        // The following updateService method is calling to update the user status in the database.
        const result = await updateStatusServices.updateService();        
        res.status(200).json({
            status_code:200,
            message:"Users Status updated successfully",
        });
    }catch(error){
        console.error("Error in Updating Status",error);
        res.status(500).json({
            status_code:500,
            message:error

        })

    }
}

module.exports = {updateStatus};

