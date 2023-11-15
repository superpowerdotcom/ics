"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _utils = require("./utils");
var defaults = {
  title: 'Untitled event',
  productId: 'adamgibbons/ics',
  method: 'PUBLISH',
  uid: 'uid-example',
  timestamp: (0, _utils.formatDate)(null, 'utc'),
  start: (0, _utils.formatDate)(null, 'utc')
};
var _default = exports["default"] = defaults;