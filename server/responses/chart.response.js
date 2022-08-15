module.exports = {
    name: "ChartResponse",
    success: (res, data) => {
        const dau = data.map(r => {
            return {
                name: r.name,
                value: r.dau
            }
        })
        const wau = data.map(r => {
            return {
                name: r.name,
                value: r.wau
            }
        })
        const mau = data.map(r => {
            return {
                name: r.name,
                value: r.mau
            }
        })
        return res.status(200).json({dau, wau, mau});
    },
    error: (res, message, code = 401) => {
        return res.status(code).json({
            success: false,
            message
        })
    }
}