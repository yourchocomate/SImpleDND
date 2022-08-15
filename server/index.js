const app = require("./server");
const db = require("./models");

require("./routers");

app.listen(3000, () => {
    db.sequelize.sync();
    console.log("Server is running on port 3000");
}).on("error", (err) => {
    console.log(err);
})