const jwt = require('jsonwebtoken');
const crypto = require('crypto');

module.exports={
    jwtSign : async(payload)=>{
        console.log("=====", payload)
        try{
       return jwt.sign(payload, "seeScoreSecretKey", {expiresIn: "1d"});
        }catch(error){
            throw error;
        }    
    }  ,
    jwtVerify : async (token) => {
        try {
            return jwt.verify(token,"seeScoreSecretKey" );
        } catch (error) {
            throw error;
        }
    },
    jwtAuthVerify : async (token, publicKey) => {
        try {
            return jwt.verify(token, publicKey, { algorithms: ['RS256'] });
        } catch (error) {
            throw error;
        }
    },
generateRandomString :async (length) => {
    try{
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let randomString = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        randomString += characters.charAt(randomIndex);
    }

    return randomString;
}catch (error) {
    throw error;
}
}

}
      
        
   
 

    