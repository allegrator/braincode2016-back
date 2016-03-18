"use strict";

let express = require("express"),
    controller = require("./controller");

let router = express.Router();

router.get("/", controller.mainPage);
router.post("/compute", controller.computeImage);

module.exports = router;
