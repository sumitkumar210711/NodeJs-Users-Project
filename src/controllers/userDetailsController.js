/*
    * @file userDetailsController.js
    * This controller file is part of the Backend project which handles the request/response cycle for the fourth api which
    * fetches the user details based on the week numbers provided in the request.
*/
const userDetailsServices = require('../services/userDetailsServices');


const viewUsersController = async(req,res)=>{
    try{
        
        const {week_numbers} = req.query;
        if(!week_numbers){
            res.status(400).json({
                status_code:400,
                error:"Missing Week number"
            });
        }
        // The following givnne split mwthod is used to split the week numbers string into the array of elements/numbers.
        const day_Numbers = week_numbers.split(',').map(num => parseInt(num.trim())).filter(num => !isNaN(num));
        if(day_Numbers.length ===0){
            res.status(400).json({
                status_code:400,
                error:"Please provide valid 0-6 Numbers"
            });

        }

        //The following every validation checks that each week number is a valid integer between 0 and 6.

        const isValidNumber = day_Numbers.every(num => Number.isInteger(num) && num >= 0 && num <= 6);
        if (!isValidNumber) {
            return res.status(400).json({ 
                status_code: 400, 
                error: 'Week Number must valid integer between 0 and 6' 
            });
        }
        const resultUsers = await userDetailsServices.userFindService(day_Numbers);        
        res.status(200).json({
            status_code: 200,
            message: "User Details fetched Successfully",
            data: resultUsers
        });
    }catch(error){
        console.error("Error in fetching user details",error);
        res.status(500).json({
            status_code:500,
            message:error

        })

    }
}

module.exports = {viewUsersController};

