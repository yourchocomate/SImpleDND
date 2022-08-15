
const { auth } = require("../middleware");
const { ChartController, UserController } = require("../controllers");

module.exports = (router) => {
    /*
    *   Middleware
    */
    // router.use(web.regular);
    router.use(auth.verifyToken)

    router.post("/users-all", UserController.getUsersAll);

    // Chart Routes

    // Get Top 15 Users

    router.get("/get-top-users", ChartController.getTopUsers);

    router.get("/get-active-users-by-country", ChartController.getActiveUsersByCountry);
    router.get("/get-active-users-by-gender", ChartController.getActiveUsersByGender);
    router.get("/get-active-users-by-device", ChartController.getActiveUsersByDevice);


    return router;
}