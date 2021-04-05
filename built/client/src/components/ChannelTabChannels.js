"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var ChannelTabChannels_1 = require("../styles/ChannelTabChannels");
function ChannelTabChannels(_a) {
    var channels = _a.channels;
    if (!channels.length) {
        return react_1.default.createElement("p", null, "Not subscribed to any channels yet.");
    }
    return (react_1.default.createElement(ChannelTabChannels_1.default, null, channels.map(function (channel) { return (react_1.default.createElement(react_router_dom_1.Link, { key: channel.id, to: "/channel/" + channel.id },
        react_1.default.createElement("div", { className: "channel" },
            react_1.default.createElement("img", { src: channel.avatar, alt: channel.username + " channel avatar" }),
            react_1.default.createElement("h3", null, channel.username),
            react_1.default.createElement("p", { className: "secondary" },
                channel.subscribersCount,
                " subscribers")))); })));
}
exports.default = ChannelTabChannels;
