module.exports = {
    name: "auth",
    verifyToken: (req, res, next) => {
        const token = req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer' ? req.headers.authorization.split(' ')[1] : false;
        
        if(!token) return res.status(401).send("No token provided");

        next();
    }
}