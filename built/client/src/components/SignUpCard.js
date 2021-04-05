"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SignUpCard_1 = require("../styles/SignUpCard");
var GoogleAuth_1 = require("./GoogleAuth");
function SignUpCard(_a) {
    var icon = _a.icon, title = _a.title, description = _a.description;
    return (react_1.default.createElement(SignUpCard_1.default, null,
        icon,
        react_1.default.createElement("div", null,
            react_1.default.createElement("h1", null, title),
            react_1.default.createElement("p", null, description),
            react_1.default.createElement("br", null),
            react_1.default.createElement(GoogleAuth_1.default, null))));
}
exports.default = SignUpCard;
