"use strict";


exports.mainPage = function(req, res) {
  res.json({
    message: "Allegrator 2016"
  });
};

exports.computeImage = function(req, res) {
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
