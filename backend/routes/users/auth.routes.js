const { verifySignUp } = require("../../middleware");
const controller = require("../../controllers/users/auth.controller");
var express = require('express');
var router = express.Router();



  router.post( "/signup",
    [
      verifySignUp.checkDuplicateUsernameOrEmail,
      verifySignUp.checkRolesExisted
    ],
    controller.signup
  );

  router.post("/signin", controller.signin);

  router.put("/createUserAdd", controller.createUserAdd);

  
  module.exports = router;