const jwt = require('jsonwebtoken');


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
    }
}
      
        
   
 

    