"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var GoogleAuth_1 = require("./GoogleAuth");
function SidebarAuth() {
    return (react_1.default.createElement("div", { style: { padding: "16px 20px" } },
        react_1.default.createElement("p", null, "Sign in to like videos, comment, and subscribe."),
        react_1.default.createElement("br", null),
        react_1.default.createElement(GoogleAuth_1.default, null)));
}
exports.default = SidebarAuth;
