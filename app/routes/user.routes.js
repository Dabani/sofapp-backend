const { authJwt } = require("../middleware");
const controller = require("../controllers/user.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/test/all", controller.allAccess);

  app.get(
    "/api/test/user",
    [authJwt.verifyToken],
    controller.userBoard
  );

  app.get(
    "/api/test/player",
    [authJwt.verifyToken, authJwt.isPlayer],
    controller.playerBoard
  );

  app.get(
    "/api/test/agent",
    [authJwt.verifyToken, authJwt.isAgent],
    controller.agentBoard
  );

  app.get(
    "/api/test/manager",
    [authJwt.verifyToken, authJwt.isManager],
    controller.managerBoard
  );

  app.get(
    "/api/test/executive",
    [authJwt.verifyToken, authJwt.isExecutive],
    controller.executiveBoard
  );

  app.get(
    "/api/test/referee",
    [authJwt.verifyToken, authJwt.isReferee],
    controller.refereeBoard
  );

  app.get(
    "/api/test/staff",
    [authJwt.verifyToken, authJwt.isStaff],
    controller.staffBoard
  );

  app.get(
    "/api/test/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminBoard
  );
};