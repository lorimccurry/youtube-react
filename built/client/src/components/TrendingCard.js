"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var TrendingCard_1 = require("../styles/TrendingCard");
var date_1 = require("../utils/date");
function TrendingCard(_a) {
    var video = _a.video;
    return (react_1.default.createElement(TrendingCard_1.default, null,
        react_1.default.createElement(react_router_dom_1.Link, { to: "/watch/" + video.id },
            react_1.default.createElement("img", { className: "thumb", src: video.thumbnail, alt: video.title })),
        react_1.default.createElement("div", { className: "video-info-container" },
            react_1.default.createElement(react_router_dom_1.Link, { to: "/watch/" + video.id },
                react_1.default.createElement("h3", null, video.title)),
            react_1.default.createElement("p", { className: "secondary" },
                react_1.default.createElement(react_router_dom_1.Link, { to: "/channel/" + video.user.id }, video.user.username),
                react_1.default.createElement("span", null, "\u2022"),
                react_1.default.createElement("span", null,
                    video.views,
                    " views"),
                react_1.default.createElement("span", null, "\u2022"),
                " ",
                react_1.default.createElement("span", null, date_1.formatCreatedAt(video.createdAt))),
            react_1.default.createElement("p", { className: "secondary" }, video.description))));
}
exports.default = TrendingCard;
