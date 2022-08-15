const jwt = require("jsonwebtoken");
const {jwtConfig} = require("../config");

module.exports = {
    name: "JWTHelper",
    create: (user) => {
        const token = jwt.sign({
            fullname: user.fullName, 
            username: user.username, 
            country: user.country, 
            device: user.device,
            gender: user.gender
        }, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
        return token;
    },
    verify: (token) => {
        try {

            const verified = jwt.verify(token, jwtConfig.secret);
            if(verified) return true;

        } catch(err) {
            console.log(err.message);
        }

        return false;
    },
    decoded: (token) => {
        try {

            const verified = jwt.decode(token, jwtConfig.secret);
            if(verified) return verified;

        } catch(err) {
            console.log(err.message);
        }

        return false;
    }
}