/*
@updateStatusRepository.js
* This file is a part of database interaction layer in the Backend project and its responsibility is to update the user status,
if the status of any user is active then it will change to inactive and vice versa.
*/
const Users = require('../models/userCollection');
const updateUsersStatus  = async () =>{
    try{
        //The following updateMany method/function changes the status of all (many) users. 
    const res = await Users.updateMany({}, [
              { $set: { status: { $cond: { if: { $eq: ['$status', 'active'] }, then: 'inactive', else: 'active' } } } }
        ]);
        return res;
    }
    catch(error){
        console.log("error in updating status of users", error);
        throw error;
    }
}
module.exports = {updateUsersStatus};