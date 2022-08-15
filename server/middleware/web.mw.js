module.exports = {
    name: "web",
    regular: (req, res, next) => {
        res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
        next();
    }
}