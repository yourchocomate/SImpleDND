const { User } = require("../models");
const { JSONResponse } = require("../responses");

const getPagination = (page, size) => {
    const limit = size ? +size : 10;
    const offset = page ? (page - 1) * limit : 0;
    return { limit, offset };
};

module.exports = {
    name: "UserController", //Controller Name

    getUsersAll: async(req,res) => {
        const { page } = req.body;
        if(!page) return JSONResponse.error(res, "Page No Required", 503);
        const { limit, offset } = getPagination(page, size = 10);
        User.findAll({
            attributes: ['id','fullName', 'gender', 'country'],
            limit,
            offset
        })
        .then((result) => {
            return JSONResponse.success(res, result);
        })
        .catch ((err) => {
            return JSONResponse.error(res, err.message, 503);
        });
    },

}