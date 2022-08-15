
module.exports = {
    name: "RegisterResponse",
    success: (res, user, token) => {
        return res.status(200).json({
            success: true,
            message: "Register Success",
            data: {
                id: user.id,
                fullName: user.fullName,
                username: user.username,
                gender: user.gender,
                country: user.country
            },
            token
        })
    },
    error: (res, message, code = 401) => {
        return res.status(code).json({
            success: false,
            message
        });
    }
}