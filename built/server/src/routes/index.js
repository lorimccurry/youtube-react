"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRoutes = void 0;
var express_1 = require("express");
var auth_1 = require("./auth");
var user_1 = require("./user");
var video_1 = require("./video");
function getRoutes() {
    // All routes in our Node API are placed on this router
    var router = express_1.default.Router();
    // router.use() prefixes our route (i.e. /api/v1/auth)
    router.use("/auth", auth_1.getAuthRoutes());
    router.use("/users", user_1.getUserRoutes());
    router.use("/videos", video_1.getVideoRoutes());
    return router;
}
exports.getRoutes = getRoutes;
