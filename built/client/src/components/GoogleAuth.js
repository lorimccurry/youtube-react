"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Auth_1 = require("../styles/Auth");
var Icons_1 = require("./Icons");
var react_google_login_1 = require("react-google-login");
var api_client_1 = require("../utils/api-client");
function GoogleAuth() {
    return (react_1.default.createElement(react_google_login_1.GoogleLogin, { clientId: "574624334344-0opaqk31ttnvudgv3c2a89hr2ulndft4.apps.googleusercontent.com", cookiePolicy: "single_host_origin", onSuccess: api_client_1.authenticate, onFailure: api_client_1.authenticate, render: function (renderProps) { return (react_1.default.createElement(Auth_1.default, { tabIndex: 0, type: "button", onClick: renderProps.onClick, disabled: renderProps.disabled },
            react_1.default.createElement("span", { className: "outer" },
                react_1.default.createElement("span", { className: "inner" },
                    react_1.default.createElement(Icons_1.SignInIcon, null)),
                "sign in"))); } }));
}
exports.default = GoogleAuth;
