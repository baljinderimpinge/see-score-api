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
        console.log(checkTimeStamp,"checkTimeStampcheckTimeStamp")
        console.log(current_time_stamp,"current_time_stampcurrent_time_stamp")
        if (checkTimeStamp<=current_time_stamp) {
            console.log("---0-0-0-0--0")
            const clientId = process.env.CLIENTID;
            const clientSecret = process.env.CLIENTSECRET;
            const scope = process.env.SCOPE;
            const grantType = 'refresh_token';
            const refresh_token = refreshToken;

            const requestBody = new URLSearchParams();
            requestBody.append('client_id', clientId);
            requestBody.append('client_secret', clientSecret);
            requestBody.append('scope', scope);
            requestBody.append('grant_type', grantType);
            requestBody.append('refresh_token', refresh_token);

            try {
                const response = await axios.post(
                    `https://login.microsoftonline.com/organizations/oauth2/v2.0/token`,
                    requestBody.toString(),
                    {
                        headers: {
                            'Content-Type': 'application/x-www-form-urlencoded',
                            'Authorization': `Bearer ${accessToken}`,
                        },
                    }
                );
                console.log(response.data,"--=-=-=-")
               let newtoken= response.data.access_token;
               let condition = {
                where: {
                    id: userToken.id
                }
            };
            let payload = {
                token: newtoken,
                refresh_token: response.data.refresh_token,
                expires_in: response.data.expires_in,
                tokentimestamp:new Date().getTime()
            }
            let newAccesstoken = await userTokenmodel.update(payload, condition)
            //const deletedRows = await userTokenmodel.update({ where: { id: userToken.id } });
               if (newAccesstoken > 0) {
                console.log(`Entry with ID ${userToken.id} updated successfully.`);
            } else {
                console.log(`No entry found with ID ${userToken.id}.`);
            }

            } catch (error) {
                console.error('Error refreshing token:', error);
                // Handle error
            }
        }
    });
    console.log('running a task after 10 seconds');
});