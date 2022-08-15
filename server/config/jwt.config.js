module.exports = {
    secret: process.env.JWT_SECRET ?? "dynamicpressure",
    expiresIn: process.env.JWT_EXPIRES ?? "1H"
}