"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Auth_1 = require("../styles/Auth");
var Icons_1 = require("./Icons");
var react_google_login_1 = require("react-google-login");
var api_client_1 = require("../utils/api-client");
function GoogleAuth() {
    return (<react_google_login_1.GoogleLogin clientId="574624334344-0opaqk31ttnvudgv3c2a89hr2ulndft4.apps.googleusercontent.com" cookiePolicy="single_host_origin" onSuccess={api_client_1.authenticate} onFailure={api_client_1.authenticate} render={function (renderProps) { return (<Auth_1.default tabIndex={0} type="button" onClick={renderProps.onClick} disabled={renderProps.disabled}>
          <span className="outer">
            <span className="inner">
              <Icons_1.SignInIcon />
            </span>
            sign in
          </span>
        </Auth_1.default>); }}/>);
}
exports.default = GoogleAuth;
