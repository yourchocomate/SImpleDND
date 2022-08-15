const deviceDetectorJS = require("device-detector-js");
const { User, UserSession } = require("../models");
const { RegisterResponse, LoginResponse } = require("../responses");
const { JWTHelper, PasswordHelper } = require("../helpers");

const deviceDetector = new deviceDetectorJS();

module.exports = {
    name: "AuthController", //Controller Name
    register: async(req, res) => {
        const devicedetect = deviceDetector.parse(req.headers['user-agent']);

        const device = devicedetect.bot ? "Bot" : devicedetect.os ? devicedetect.os.name : devicedetect.device ? devicedetect.device.name : devicedetect.client.name;
        const {fullname, username, password, gender, country} = req.body;
        const hash = await PasswordHelper.hash(password);
        let data = [];
        try {
            data = await User.create({ 
                    fullName: fullname,
                    username,
                    password: hash,
                    gender,
                    country
                });
        } catch (err) {
            return RegisterResponse.error(res, err.errors[0].message, 401);
        }
        UserSession.create({user_id: data.id, gender: data.gender, country: data.country, device}).then(() => {
            return RegisterResponse.success(res, data.dataValues, JWTHelper.create(data));
        }).catch((err) => {
            return RegisterResponse.error(res, err.message, 401);
        })
    },
    login: async(req, res) => {
        const devicedetect = deviceDetector.parse(req.headers['user-agent']);

        const device = devicedetect.bot ? "Bot" : devicedetect.os ? devicedetect.os.name : devicedetect.device ? devicedetect.device.name : devicedetect.client.name;
        const { username, password } = req.body;
        try {

            const user = await User.findOne({ where: {username}});

            if(user && (await PasswordHelper.compare(password, user.password))) {
                UserSession.create({user_id: user.id, gender: user.gender, country: user.country, device}).then(() => {
                    return LoginResponse.success(res, user.dataValues, JWTHelper.create(user));
                }).catch((err) => {
                    return LoginResponse.error(res, err.message, 401);
                })
            }
            else return LoginResponse.error(res, "Invalid Login", 401);

        } catch(err) {
            return LoginResponse.error(res, err.message, 403);
        }
    },
    verify: (req, res) => {
        const {token} = req.body;
        if(!token) return res.status(403).send("No token provided");

        if(token && JWTHelper.verify(token)) return res.status(200).json(JWTHelper.decoded(token));

        return res.status(401).send("Token Expired");
    }
}