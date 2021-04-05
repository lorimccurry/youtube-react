"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_google_login_1 = require("react-google-login");
var auth_context_1 = require("../context/auth-context");
var api_client_1 = require("../utils/api-client");
function useAuthAction() {
    var user = auth_context_1.useAuth();
    var signIn = react_google_login_1.useGoogleLogin({
        onSuccess: api_client_1.authenticate,
        clientId: '574624334344-0opaqk31ttnvudgv3c2a89hr2ulndft4.apps.googleusercontent.com',
    }).signIn;
    function handleAuthAction(authAction, data) {
        if (user) {
            authAction(data);
        }
        else {
            signIn();
        }
    }
    return handleAuthAction;
}
exports.default = useAuthAction;
