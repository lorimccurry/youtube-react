"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
require("video.js/dist/video-js.css");
var video_js_1 = require("video.js");
var api_client_1 = require("../utils/api-client");
function VideoPlayer(_a) {
    var previewUrl = _a.previewUrl, video = _a.video;
    var videoRef = react_1.default.useRef();
    var id = video.id, url = video.url, thumbnail = video.thumbnail;
    react_1.default.useEffect(function () {
        var vjsPlayer = video_js_1.default(videoRef.current);
        if (!previewUrl) {
            vjsPlayer.poster(thumbnail);
            vjsPlayer.src(url);
        }
        if (previewUrl) {
            vjsPlayer.src({ type: 'video/mp4', src: previewUrl });
        }
        vjsPlayer.on('ended', function () {
            api_client_1.addVideoView(id);
        });
        return function () {
            if (vjsPlayer) {
                vjsPlayer.dispose();
            }
        };
    }, [id, thumbnail, url, previewUrl]);
    return (react_1.default.createElement("div", { "data-vjs-player": true },
        react_1.default.createElement("video", { controls: true, 
            // @ts-ignore
            ref: videoRef, className: "video-js vjs-fluid vjs-big-play-centered" })));
}
exports.default = VideoPlayer;
