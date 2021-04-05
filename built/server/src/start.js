"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.startServer = void 0;
var express_1 = require("express");
// Import this module to handle errors when using async functions for our route handlers
require("express-async-errors");
var path_1 = require("path");
var cors_1 = require("cors");
var loglevel_1 = require("loglevel");
var morgan_1 = require("morgan");
var dotenv_1 = require("dotenv");
var cookie_parser_1 = require("cookie-parser");
var routes_1 = require("./routes");
var error_1 = require("./middleware/error");
dotenv_1.default.config();
function startServer(_a) {
    var _b = _a === void 0 ? {} : _a, _c = _b.port, port = _c === void 0 ? process.env.PORT : _c;
    var app = express_1.default();
    app.use(morgan_1.default("dev"));
    app.use(cors_1.default());
    app.use(cookie_parser_1.default());
    app.use(express_1.default.json());
    // all API routes are prefixed with /api/v1
    app.use("/api/v1", routes_1.getRoutes());
    // Generic error handler if errors are missed by 'express-async-errors' middleware
    app.use(error_1.errorMiddleware);
    // When our project is pushed to production, we will serve // the react app using express.static() middleware
    if (process.env.NODE_ENV === "production") {
        app.use(express_1.default.static(path_1.default.resolve(__dirname, "../client/build")));
        // Any request not caught by our API will be routed
        // to our built react app
        app.get("*", function (req, res) {
            res.sendFile(path_1.default.resolve(__dirname, "../client/build", "index.html"));
        });
    }
    // This block of code is made to reliably start and close our express app
    // It is written as a promise, which can be more easily tested
    return new Promise(function (resolve) {
        var server = app.listen(port, function () {
            loglevel_1.default.info("Listening on port " + server.address().port);
            var originalClose = server.close.bind(server);
            server.close = function () {
                return new Promise(function (resolveClose) {
                    originalClose(resolveClose);
                });
            };
            // This function properly closes the server when the program exits
            error_1.setupCloseOnExit(server);
            resolve(server);
        });
    });
}
exports.startServer = startServer;
