const indexR = require("./index");
const usersR = require("./users");

exports.routesInit = (app) => {
    app.use("/index", indexR);
    app.use("/users", usersR);
}