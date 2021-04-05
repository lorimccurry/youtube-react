"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var loglevel_1 = require("loglevel");
var start_1 = require("./start");
loglevel_1.default.setLevel("info");
start_1.startServer();
