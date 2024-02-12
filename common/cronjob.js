var cron = require('node-cron');
const { userTokenmodel } = require("../models");  
const axios = require('axios');

module.exports.cronjonForToken = cron.schedule('*/10 * * * * *', async () => {
    console.log("------------")
    let current_time_stamp = new Date().getTime();
    let userTokenData = await userTokenmodel.findAll();
    userTokenData.forEach(async (userToken) => {
        let tokentimestamp = userToken.tokentimestamp.getTime();;
        let expires_in = userToken.expires_in * 1000;
        let accessToken = userToken.token;
        let refreshToken = userToken.refresh_token;
        let checkTimeStamp = tokentimestamp+expires_in-30000;
        if (checkTimeStamp<=current_time_stamp) {
            console.log("---0-0-0-0--0")
            try {
            const deletedRows = await userTokenmodel.destroy({ where: { id: userToken.id } });
               if (deletedRows > 0) {
                console.log(`Entry with ID ${userToken.id} deleted successfully.`);
            } else {
                console.log(`No entry found with ID ${userToken.id}.`);
            }

            } catch (error) {
                console.error('Error refreshing token:', error);
                // Handle error
            }
        }
    });
    console.log('running a task every minute');
});
