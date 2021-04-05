"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var ChannelTabVideo_1 = require("../styles/ChannelTabVideo");
var VideoCard_1 = require("./VideoCard");
function ChannelTabVideo(_a) {
    var videos = _a.videos;
    if (!videos.length) {
        return <p>This channel hasn't posted any videos yet.</p>;
    }
    return (<ChannelTabVideo_1.default>
      <div className="videos">
        {videos.map(function (video) { return (<VideoCard_1.default key={video.id} noUsername hideAvatar video={video}/>); })}
      </div>
    </ChannelTabVideo_1.default>);
}
exports.default = ChannelTabVideo;
