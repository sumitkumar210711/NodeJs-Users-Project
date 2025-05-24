const bcrypt = require('bcryptjs');
const createUserRepository = require('../repositories/createUserRepository');

const createService = async(data) =>{
    try {
        const encryptedPassword = await bcrypt.hash(data.password,10);
        const result = await createUserRepository.create({...data, password:encryptedPassword});
        
        return result;

    }catch(error){
        throw error;
    }
}

module.exports = {createService};
