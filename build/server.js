"use strict";

var _express = _interopRequireDefault(require("express"));
var _viewEngine = _interopRequireDefault(require("./config/viewEngine"));
var _web = _interopRequireDefault(require("./routes/web"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { "default": e }; }
require("dotenv").config();
var app = (0, _express["default"])();

//config view Engine
(0, _viewEngine["default"])(app);

//init all web routes
(0, _web["default"])(app);
var port = process.env.PORT || 8080;
app.get("/test", function (req, res) {
  setTimeout(function () {
    throw new Error("We crashed!!!!!");
  }, 10);
});
app.listen(port, function () {
  console.log("App is running at the port ".concat(port));
  console.log("http://localhost:".concat(port));
});