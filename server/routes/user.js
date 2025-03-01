const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post("/signup/experiencer", userController.signupExperiencer);
router.post("/signup/host", userController.signupHost);
router.post("/login", userController.login);
router.get("/logout", userController.logout);
router.get("/host/:id", userController.getHost);
router.get("/experiencer", userController.getExperiencer);
router.put("/host", userController.putHost);
router.put("/experiencer", userController.putExperiencer);

module.exports = router;
