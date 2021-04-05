"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAuth = exports.AuthProvider = void 0;
var react_1 = require("react");
var react_query_1 = require("react-query");
var api_client_1 = require("../utils/api-client");
var AuthContext = react_1.default.createContext(null);
function AuthProvider(_a) {
    var children = _a.children;
    var data = react_query_1.useQuery('AuthProvider', function () {
        return api_client_1.client.get('/auth/me').then(function (res) { return res.data.user; });
    }).data;
    var user = data || null;
    return react_1.default.createElement(AuthContext.Provider, { value: user }, children);
}
exports.AuthProvider = AuthProvider;
function useAuth() {
    var context = react_1.default.useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used with an AuthProvider component.');
    }
    return context;
}
exports.useAuth = useAuth;
