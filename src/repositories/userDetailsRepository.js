/*
    * @file userDetailsRepository.js
    * This file handles the database interaction for view the data of users on the basis of the week days.
    * It uses the find method of mongoose model to feth the name,email and register_at field of the stored uses.
    * */
const Users = require('../models/userCollection');

const userDetailsFind = async(days) => {
  try{  
  const usersDetails = await Users.find({}, 'name email register_at').lean();
  return await usersDetails.filter(userDetail => {
        const date = new Date(userDetail.register_at);
        const day = date.getDay(); 
        return days.includes(day);
    });
    }catch(error){
        throw error;
    }

}

module.exports = { userDetailsFind };
