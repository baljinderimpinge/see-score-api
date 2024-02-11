var cron = require('node-cron');
const { UserToken } = require("../models");  
const axios = require('axios');

// module.exports.cronjonForToken = cron.schedule('* * * * *', async () => {
//     let current_time_stamp = new Date();
//     let userTokenData = await UserToken.findAll();

//     userTokenData.forEach(async (userToken) => {
//         let tokentimestamp = userToken.tokentimestamp;
//         let expires_in = userToken.expires_in;
//         let accessToken = userToken.token;
//         let refreshToken = userToken.refresh_token;

//         if ((current_time_stamp - tokentimestamp + expires_in) < 500) {
//             const clientId = process.env.CLIENTID;
//             const clientSecret = process.env.CLIENTSECRET;
//             const scope = process.env.SCOPE;
//             const grantType = 'refresh_token';
//             const refresh_token = refreshToken;

//             const requestBody = new URLSearchParams();
//             requestBody.append('client_id', clientId);
//             requestBody.append('client_secret', clientSecret);
//             requestBody.append('scope', scope);
//             requestBody.append('grant_type', grantType);
//             requestBody.append('refresh_token', refresh_token);

//             try {
//                 const response = await axios.post(
//                     `https://login.microsoftonline.com/organizations/oauth2/v2.0/token`,
//                     requestBody.toString(),
//                     {
//                         headers: {
//                             'Content-Type': 'application/x-www-form-urlencoded',
//                             'Authorization': `Bearer ${accessToken}`,
//                         },
//                     }
//                 );
//                let newtoken= response.data.access_token;
//                await UserToken.update({ token: newtoken }, { where: { id: userToken.id } });
//             } catch (error) {
//                 console.error('Error refreshing token:', error);
//                 // Handle error
//             }
//         }
//     });
//     console.log('running a task every minute');
// });
