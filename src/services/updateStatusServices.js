const bcrypt = require('bcryptjs');
const updateStatusRepository = require('../repositories/updateStatusRepository');

const updateService = async() =>{
    try {
        const result = await updateStatusRepository.updateUsersStatus();
        return result;
    }catch(error){
        throw error;
    }
}

module.exports = {updateService};
