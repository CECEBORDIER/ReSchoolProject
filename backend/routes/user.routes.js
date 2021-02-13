const { authJwt } = require("../middleware");
var express = require('express');
const controller = require("../controllers/user.controller");
var router = express.Router();
``



  router.get("/all", controller.allAccess);

  router.get("/user", [authJwt.verifyToken], controller.userBoard);

  router.get("/mod", [authJwt.verifyToken, authJwt.isModerator], controller.moderatorBoard);

  router.get("/admin",[authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);
  
  
  module.exports = router;