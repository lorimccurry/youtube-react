"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SignUpCard_1 = require("../styles/SignUpCard");
var GoogleAuth_1 = require("./GoogleAuth");
function SignUpCard(_a) {
    var icon = _a.icon, title = _a.title, description = _a.description;
    return (<SignUpCard_1.default>
      {icon}
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <br />
        <GoogleAuth_1.default />
      </div>
    </SignUpCard_1.default>);
}
exports.default = SignUpCard;
