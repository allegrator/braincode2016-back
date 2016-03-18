"use strict";

let shell = require("shelljs");

module.exports = function(urlx) {
  let cmd = `./imgcat.sh ${urlx}`;
  shell.exec(cmd, { async: true });
};
