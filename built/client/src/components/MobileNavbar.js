"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var MobileNavbar_1 = require("../styles/MobileNavbar");
var Icons_1 = require("./Icons");
function MobileNavbar() {
    return (react_1.default.createElement(MobileNavbar_1.default, null,
        react_1.default.createElement("div", { className: "icons" },
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", exact: true, activeClassName: 'active' },
                react_1.default.createElement(Icons_1.HomeIcon, null)),
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/feed/trending", activeClassName: 'active' },
                react_1.default.createElement(Icons_1.TrendingIcon, null)),
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/feed/subscriptions", activeClassName: 'active' },
                react_1.default.createElement(Icons_1.SubIcon, null)),
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/feed/history", activeClassName: 'active' },
                react_1.default.createElement(Icons_1.HistoryIcon, null)),
            react_1.default.createElement(react_router_dom_1.NavLink, { to: "/feed/liked_videos", activeClassName: 'active' },
                react_1.default.createElement(Icons_1.WatchIcon, null)))));
}
exports.default = MobileNavbar;
