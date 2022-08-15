
const { web } = require("../middleware");
const { AuthController } = require("../controllers");

module.exports = (router) => {
    /*
    *   Middleware
    */
    // router.use(web.regular);
    router.use(web.regular)

    router.post("/auth/register", AuthController.register);
    router.post("/auth/login", AuthController.login);
    router.post("/auth/verify", AuthController.verify);

    return router;
}