"use strict";

let express = require("express"),
    controller = require("./controller"),
    multer  = require("multer"),
    upload = multer({ dest: "uploads/" });


let router = express.Router();

router.get("/", controller.mainPage);
router.post("/compute", upload.single("img"), controller.computeImage);

module.exports = router;
