"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var Sidebar_1 = require("../styles/Sidebar");
var react_router_dom_1 = require("react-router-dom");
var Icons_1 = require("./Icons");
var SidebarAuth_1 = require("./SidebarAuth");
var auth_context_1 = require("../context/auth-context");
var Subscriptions_1 = require("./Subscriptions");
function Sidebar(_a) {
    var isSidebarOpen = _a.isSidebarOpen;
    var user = auth_context_1.useAuth();
    return (react_1.default.createElement(Sidebar_1.default, { open: isSidebarOpen },
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/", exact: true, activeClassName: "active" },
            react_1.default.createElement("div", { className: "icon" },
                react_1.default.createElement(Icons_1.HomeIcon, null),
                react_1.default.createElement("span", null, "Home"))),
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/feed/trending", activeClassName: "active" },
            react_1.default.createElement("div", { className: "icon" },
                react_1.default.createElement(Icons_1.TrendingIcon, null),
                react_1.default.createElement("span", null, "Trending"))),
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/feed/subscriptions", activeClassName: "active" },
            react_1.default.createElement("div", { className: "icon" },
                react_1.default.createElement(Icons_1.SubIcon, null),
                react_1.default.createElement("span", null, "Subscriptions"))),
        react_1.default.createElement("div", { className: "divider" }),
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/feed/library", activeClassName: "active" },
            react_1.default.createElement("div", { className: "icon" },
                react_1.default.createElement(Icons_1.LibIcon, null),
                react_1.default.createElement("span", null, "Library"))),
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/feed/history", activeClassName: "active" },
            react_1.default.createElement("div", { className: "icon" },
                react_1.default.createElement(Icons_1.HistoryIcon, null),
                react_1.default.createElement("span", null, "History"))),
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/feed/my_videos", activeClassName: "active" },
            react_1.default.createElement("div", { className: "icon" },
                react_1.default.createElement(Icons_1.VidIcon, null),
                react_1.default.createElement("span", null, "Your videos"))),
        react_1.default.createElement(react_router_dom_1.NavLink, { to: "/feed/liked_videos", activeClassName: "active" },
            react_1.default.createElement("div", { className: "icon" },
                react_1.default.createElement(Icons_1.LikeIcon, null),
                react_1.default.createElement("span", null, "Liked videos"))),
        react_1.default.createElement("div", { className: "divider" }),
        user ? react_1.default.createElement(Subscriptions_1.default, { user: user }) : react_1.default.createElement(SidebarAuth_1.default, null)));
}
exports.default = Sidebar;
