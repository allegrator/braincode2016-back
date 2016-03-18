"use strict";

let express = require("express");
let app = express();
let morgan = require("morgan");

app.use(morgan("dev"));

app.use("", require("./router"));

app.listen(5000, () => {
  console.log("Server Started!");
});