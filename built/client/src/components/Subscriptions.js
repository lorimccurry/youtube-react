"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Subscriptions_1 = require("../styles/Subscriptions");
function Subscriptions(_a) {
    var user = _a.user;
    if (!user)
        return null;
    return (react_1.default.createElement(Subscriptions_1.default, null,
        user.channels.length ? react_1.default.createElement("h4", null, "Subscriptions") : null,
        user.channels.length
            ? user.channels.map(function (channel) { return (react_1.default.createElement(react_router_dom_1.Link, { key: channel.id, to: "/channel/" + channel.id },
                react_1.default.createElement("div", { className: "channel" },
                    react_1.default.createElement("img", { src: channel.avatar, alt: channel.username + " avatar" }),
                    react_1.default.createElement("span", null, channel.username)))); })
            : null));
}
exports.default = Subscriptions;
