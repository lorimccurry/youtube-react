"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ErrorMessage_1 = require("../styles/ErrorMessage");
function ErrorMessage(_a) {
    var error = _a.error, props = __rest(_a, ["error"]);
    return (<ErrorMessage_1.default role="alert" {...props}>
      <h2>Oops, something went wrong:</h2>
      <h3 className="message">{error.message}</h3>
    </ErrorMessage_1.default>);
}
exports.default = ErrorMessage;
