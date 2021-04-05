"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var no_results_png_1 = require("../assets/no-results.png");
var NoResults_1 = require("../styles/NoResults");
function NoResults(_a) {
    var title = _a.title, text = _a.text;
    return (react_1.default.createElement(NoResults_1.default, null,
        react_1.default.createElement("img", { src: no_results_png_1.default, alt: "no results" }),
        react_1.default.createElement("h2", null, title),
        react_1.default.createElement("p", { className: "secondary" }, text)));
}
exports.default = NoResults;
