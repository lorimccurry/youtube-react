"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ErrorMessage_1 = require("./ErrorMessage");
function ErrorFallback(_a) {
    var error = _a.error;
    return (<ErrorMessage_1.default error={error} style={{
        height: "100vh",
        marginTop: 0,
    }}/>);
}
exports.default = ErrorFallback;
