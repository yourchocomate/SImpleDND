module.exports = {
    name: "JSONResponse",
    success: (res, data) => {
        return res.status(200).json({
            success: true,
            data
        })
    },
    error: (res, message, code = 401) => {
        return res.status(code).json({
            success: false,
            message
        });
    }
}