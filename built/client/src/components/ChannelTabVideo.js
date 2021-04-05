"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ChannelTabVideo_1 = require("../styles/ChannelTabVideo");
var VideoCard_1 = require("./VideoCard");
function ChannelTabVideo(_a) {
    var videos = _a.videos;
    if (!videos.length) {
        return react_1.default.createElement("p", null, "This channel hasn't posted any videos yet.");
    }
    return (react_1.default.createElement(ChannelTabVideo_1.default, null,
        react_1.default.createElement("div", { className: "videos" }, videos.map(function (video) { return (react_1.default.createElement(VideoCard_1.default, { key: video.id, noUsername: true, hideAvatar: true, video: video })); }))));
}
exports.default = ChannelTabVideo;
