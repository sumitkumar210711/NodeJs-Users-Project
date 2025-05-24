/*
* @file createUserRepository.js
* This file is a part of database interaction layer in the Backend project and its responsibility is to create the new user
* in the database.
*/
const Users = require('../models/userCollection');

const create  = async (data) =>{
    try{
    const user = new Users(data);
    return await user.save();
    }catch(error){
        throw error;
    }
}
module.exports = {create};