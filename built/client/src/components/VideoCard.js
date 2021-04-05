"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Avatar_1 = require("../styles/Avatar");
var VideoCard_1 = require("../styles/VideoCard");
var date_1 = require("../utils/date");
var DeleteVideoDropdown_1 = require("./DeleteVideoDropdown");
function VideoCard(_a) {
    var video = _a.video, _b = _a.hideAvatar, hideAvatar = _b === void 0 ? false : _b, _c = _a.noUsername, noUsername = _c === void 0 ? false : _c;
    return (react_1.default.createElement(VideoCard_1.default, null,
        react_1.default.createElement(react_router_dom_1.Link, { to: "/watch/" + video.id },
            react_1.default.createElement("img", { className: "thumb", src: video.thumbnail, alt: video.title })),
        react_1.default.createElement("div", { className: "video-info-container" },
            react_1.default.createElement("div", { className: "channel-avatar" }, !hideAvatar && (react_1.default.createElement(Avatar_1.default, { style: { marginRight: '0.8rem' }, src: video.user.avatar, alt: video.user.username + "'s channel avatar" }))),
            react_1.default.createElement("div", { className: "video-info" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/watch/" + video.id },
                    react_1.default.createElement("h4", { className: "truncate" }, video.title)),
                !noUsername && (react_1.default.createElement(react_router_dom_1.Link, { to: "/channel/{video.user.id}" },
                    react_1.default.createElement("span", { className: "secondary" }, video.user.username))),
                react_1.default.createElement("p", { className: "secondary leading-4" },
                    react_1.default.createElement("span", null,
                        video.views,
                        " views"),
                    " ",
                    react_1.default.createElement("span", null, "\u2022"),
                    ' ',
                    react_1.default.createElement("span", null, date_1.formatCreatedAt(video.createdAt)))),
            react_1.default.createElement(DeleteVideoDropdown_1.default, { video: video }))));
}
exports.default = VideoCard;
