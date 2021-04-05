"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Icons_1 = require("../components/Icons");
var SignUpCard_1 = require("../components/SignUpCard");
var auth_context_1 = require("../context/auth-context");
var History_1 = require("./History");
var LikedVideos_1 = require("./LikedVideos");
function Library() {
    var user = auth_context_1.useAuth();
    if (!user) {
        return (react_1.default.createElement(SignUpCard_1.default, { icon: react_1.default.createElement(Icons_1.LibIcon, null), title: "Enjoy your favorite videos", description: "Sign in to access videos that you\u2019ve liked or saved" }));
    }
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(History_1.default, null),
        react_1.default.createElement(LikedVideos_1.default, null)));
}
exports.default = Library;
