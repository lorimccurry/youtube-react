"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var not_found_png_1 = require("../assets/not-found.png");
var NotFound_1 = require("../styles/NotFound");
function NotFound() {
    return (react_1.default.createElement(NotFound_1.default, null,
        react_1.default.createElement("img", { src: not_found_png_1.default, alt: "Error page illustration" }),
        react_1.default.createElement("br", null),
        react_1.default.createElement("p", null, "This page isn't available. Sorry about that."),
        react_1.default.createElement("p", null, "Try searching for something else.")));
}
exports.default = NotFound;
