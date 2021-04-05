"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Navbar_1 = require("../styles/Navbar");
var GoogleAuth_1 = require("./GoogleAuth");
var react_router_dom_1 = require("react-router-dom");
var Icons_1 = require("./Icons");
var Search_1 = require("./Search");
var auth_context_1 = require("../context/auth-context");
var UserDropdown_1 = require("./UserDropdown");
var UploadVideo_1 = require("./UploadVideo");
function Navbar(_a) {
    var toggleSidebarOpen = _a.toggleSidebarOpen;
    var user = auth_context_1.useAuth();
    return (react_1.default.createElement(Navbar_1.default, null,
        react_1.default.createElement("div", { className: "logo flex-row" },
            react_1.default.createElement(Icons_1.HamburgerIcon, { className: "toggle-navhandler", onClick: toggleSidebarOpen }),
            react_1.default.createElement("span", null,
                react_1.default.createElement(react_router_dom_1.NavLink, { to: "/" },
                    react_1.default.createElement(Icons_1.LogoIcon, { style: {
                            width: 80,
                            height: 24,
                        } })))),
        react_1.default.createElement(Search_1.default, null),
        react_1.default.createElement("ul", null,
            react_1.default.createElement("li", null, user ? react_1.default.createElement(UploadVideo_1.default, null) : react_1.default.createElement(Icons_1.AppsIcon, null)),
            react_1.default.createElement("li", null, user ? react_1.default.createElement(Icons_1.AppsIcon, null) : react_1.default.createElement(Icons_1.SettingsIcon, null)),
            react_1.default.createElement("li", null,
                " ",
                user ? react_1.default.createElement(UserDropdown_1.default, { user: user }) : react_1.default.createElement(GoogleAuth_1.default, null)))));
}
exports.default = Navbar;
