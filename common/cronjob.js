// var cron = require('node-cron');
// const { userTokenmodel } = require("../models");  
// const axios = require('axios');



// const customerToken = async (id) => {
//     const tenantId = id;
//     const clientId = process.env.CLIENTID;
//     const clientSecret = process.env.CLIENTSECRET;
//     const scope = process.env.SCOPE;
//     const grantType = process.env.GRANT_TYPE;

//     const requestBody = new URLSearchParams();
//     requestBody.append('client_id', clientId);
//     requestBody.append('client_secret', clientSecret);
//     requestBody.append('scope', scope);
//     requestBody.append('grant_type', grantType);
//     try {
//         const response = await axios.post(
//             `https://login.microsoftonline.com/${tenantId}/oauth2/v2.0/token`,
//             requestBody.toString(),
//             {
//                 headers: {
//                     'Content-Type': 'application/x-www-form-urlencoded',
//                 },
//             }
//         );

//         // Access the token from the response
//         const accessToken = response.data;
//         console.log('Access Token:', accessToken);
//         return accessToken;



//     } catch (error) {
//         console.log(error, "000");
//         return error;
//     }
// }


// module.exports.cronjonForToken = cron.schedule('*/10 * * * * *', async () => {
//     console.log("------------")
//     let current_time_stamp = new Date().getTime();
//     let userTokenData = await userTokenmodel.findAll();
//     userTokenData.forEach(async (userToken) => {
//         let tokentimestamp = userToken.tokentimestamp.getTime();;
//         let expires_in = userToken.expires_in * 1000;
//         let accessToken = userToken.token;
//         let refreshToken = userToken.refresh_token;
//         let checkTimeStamp = tokentimestamp+expires_in-30000;
//         if (checkTimeStamp<=current_time_stamp) {
//             console.log("---0-0-0-0--0")
//             try {
//     const token = await customerToken(refreshToken)
//     let condition = {
//         where: {
//             id: userToken.id
//         }
//     };
//     let payload = {
//         token: token.access_token,
//         expires_in: token.expires_in
//     }
//             const updateToken = await userTokenmodel.update(payload, condition);
//                if (updateToken > 0) {
//                 console.log(`Entry with ID ${userToken.id} deleted successfully.`);
//             } else {
//                 console.log(`No entry found with ID ${userToken.id}.`);
//             }

//             } catch (error) {
//                 console.error('Error refreshing token:', error);
//                 // Handle error
//             }
//         }else{
//             console.log("Skipping")
//         }
//     });
//     console.log('running a task every minute');
// });
