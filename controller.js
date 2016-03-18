"use strict";

let showImg = require("./service/showimg");

exports.mainPage = function(req, res) {
  res.json({
    message: "Allegrator 2016"
  });
};

exports.computeImage = function(req, res) {

  let file = req.file;

  if (!file) {
    res.send(400).json({
      message: "File \"img\" required"
    });
  }

  showImg(file.path);

  console.log(file);

  res.json([{
    position: {
      x0: 0.25,
      y0: 0.25,
      x1: 0.75,
      y1: 0.75
    },
    category_name: "Słuchawki",
    category_id: 1
  }]);
};
