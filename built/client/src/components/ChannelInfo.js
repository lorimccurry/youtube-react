"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var use_auth_action_1 = require("../hooks/use-auth-action");
var Button_1 = require("../styles/Button");
var ChannelInfo_1 = require("../styles/ChannelInfo");
var api_client_1 = require("../utils/api-client");
function ChannelInfo(_a) {
    var channel = _a.channel;
    var handleAuthAction = use_auth_action_1.default();
    function handleToggleSubscribe() {
        handleAuthAction(api_client_1.toggleSubscribeUser, channel.id);
    }
    return (react_1.default.createElement(ChannelInfo_1.default, null,
        react_1.default.createElement(react_router_dom_1.Link, { to: "/channel/" + channel.id, className: "avatar-channel" },
            react_1.default.createElement("img", { src: channel.avatar, alt: "avatar" }),
            react_1.default.createElement("div", { className: "channel-info-meta" },
                react_1.default.createElement("h3", null, channel.username),
                react_1.default.createElement("p", { className: "secondary" },
                    react_1.default.createElement("span", null,
                        channel.subscribersCount,
                        " subscribers"),
                    ' ',
                    react_1.default.createElement("span", { className: "to-hide" }, "\u2022"),
                    ' ',
                    react_1.default.createElement("span", { className: "to-hide" },
                        channel.videosCount,
                        " videos")),
                react_1.default.createElement("p", { className: "description secondary" }, channel.about.length > 65
                    ? channel.about.substring(0, 65)
                    : channel.about))),
        !channel.isMe && !channel.isSubscribed && (react_1.default.createElement(Button_1.default, { onClick: handleToggleSubscribe }, "Subscribe")),
        !channel.isMe && channel.isSubscribed && (react_1.default.createElement(Button_1.default, { grey: true, onClick: handleToggleSubscribe }, "Subscribed"))));
}
exports.default = ChannelInfo;
