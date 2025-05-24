const userDetailsRepository = require('../repositories/userDetailsRepository');

const days = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday'];

const userFindService = async(week_numbers)=> {
    try{
  const usersDetails = await userDetailsRepository.userDetailsFind(week_numbers);

  const usersData = {};
  for (let w of week_numbers) {
    const day_Name = days[w];
    usersData[day_Name] = [];
  }

  usersDetails.forEach(userDetail => {
    const day = new Date(userDetail.register_at).getDay();
    const day_Name = days[day];
    if (usersData[day_Name]) {
      usersData[day_Name].push({ name: userDetail.name, email: userDetail.email });
    }
  });


  return usersData;
    }catch(error){
        throw error;
    }

}
module.exports = { userFindService };
