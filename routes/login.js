const loginController = require("../controllers/login-controller");

module.exports = (app) => {
  app.post("/api/login", loginController.sendlogin);
};
