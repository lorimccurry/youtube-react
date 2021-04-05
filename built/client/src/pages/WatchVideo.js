"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var api_client_1 = require("../utils/api-client");
var react_query_1 = require("react-query");
var react_router_dom_1 = require("react-router-dom");
var AddComment_1 = require("../components/AddComment");
var Icons_1 = require("../components/Icons");
var NoResults_1 = require("../components/NoResults");
var VideoPlayer_1 = require("../components/VideoPlayer");
var Button_1 = require("../styles/Button");
var WatchVideo_1 = require("../styles/WatchVideo");
var WatchVideoSkeleton_1 = require("../skeletons/WatchVideoSkeleton");
var date_1 = require("../utils/date");
var VideoCard_1 = require("../components/VideoCard");
var use_auth_action_1 = require("../hooks/use-auth-action");
function WatchVideo() {
    var videoId = react_router_dom_1.useParams().videoId;
    var handleAuthAction = use_auth_action_1.default();
    var _a = react_query_1.useQuery(['WatchVideo', videoId], function () { return api_client_1.client.get("/videos/" + videoId).then(function (res) { return res.data.video; }); }), video = _a.data, isLoadingVideo = _a.isLoading;
    var _b = react_query_1.useQuery(['WatchVideo', 'Up Next'], function () { return api_client_1.client.get('/videos').then(function (res) { return res.data.videos; }); }), next = _b.data, isLoadingNext = _b.isLoading;
    if (isLoadingVideo || isLoadingNext) {
        return react_1.default.createElement(WatchVideoSkeleton_1.default, null);
    }
    if (!isLoadingVideo && !video) {
        return (react_1.default.createElement(NoResults_1.default, { title: "Page not found", text: "The page you are looking for is not found or it may have been removed" }));
    }
    function handleLikeVideo() {
        handleAuthAction(api_client_1.likeVideo, video.id);
    }
    function handleDislikeVideo() {
        handleAuthAction(api_client_1.dislikeVideo, video.id);
    }
    function handleToggleSubscribe() {
        handleAuthAction(api_client_1.toggleSubscribeUser, video.user.id);
    }
    return (react_1.default.createElement(WatchVideo_1.default, { filledLike: video && video.isLiked, filledDislike: video && video.isDisliked },
        react_1.default.createElement("div", { className: "video-container" },
            react_1.default.createElement("div", { className: "video" }, !isLoadingVideo && react_1.default.createElement(VideoPlayer_1.default, { video: video })),
            react_1.default.createElement("div", { className: "video-info" },
                react_1.default.createElement("h3", null, video.title),
                react_1.default.createElement("div", { className: "video-info-stats" },
                    react_1.default.createElement("p", null,
                        react_1.default.createElement("span", null,
                            video.views,
                            " views"),
                        " ",
                        react_1.default.createElement("span", null, "\u2022"),
                        ' ',
                        react_1.default.createElement("span", null,
                            "Premiered ",
                            date_1.formatCreatedAt(video.createdAt))),
                    react_1.default.createElement("div", { className: "likes-dislikes flex-row" },
                        react_1.default.createElement("p", { className: "flex-row like" },
                            react_1.default.createElement(Icons_1.LikeIcon, { onClick: handleLikeVideo }),
                            react_1.default.createElement("span", null, video.likesCount)),
                        react_1.default.createElement("p", { className: "flex-row dislike", style: { marginLeft: '1rem' } },
                            react_1.default.createElement(Icons_1.DislikeIcon, { onClick: handleDislikeVideo }),
                            react_1.default.createElement("span", null, video.dislikesCount))))),
            react_1.default.createElement("div", { className: "channel-info-description" },
                react_1.default.createElement("div", { className: "channel-info-flex" },
                    react_1.default.createElement("div", { className: "channel-info flex-row" },
                        react_1.default.createElement("img", { className: "avatar md", src: video.user.avatar, alt: video.user.userName + " channel avatar" }),
                        react_1.default.createElement("div", { className: "channel-info-meta" },
                            react_1.default.createElement("h4", null,
                                react_1.default.createElement(react_router_dom_1.Link, { to: "/channel/" + video.user.id }, video.user.username)),
                            react_1.default.createElement("span", { className: "secondary small" },
                                video.subscribersCount,
                                " subscribers"))),
                    !video.isVideoMine && !video.isSubscribed && (react_1.default.createElement(Button_1.default, { onClick: handleToggleSubscribe }, "Subscribe")),
                    !video.isVideoMine && video.isSubscribed && (react_1.default.createElement(Button_1.default, { grey: true, onClick: handleToggleSubscribe }, "Subscribed"))),
                react_1.default.createElement("p", null, video.description)),
            react_1.default.createElement(AddComment_1.default, { video: video })),
        react_1.default.createElement("div", { className: "related-videos" },
            react_1.default.createElement("h3", { className: "up-next" }, "Up Next"),
            next
                .filter(function (v) { return v.id !== video.id; })
                .slice(0, 10)
                .map(function (video) { return (react_1.default.createElement(VideoCard_1.default, { key: video.id, hideAvatar: true, video: video })); }))));
}
exports.default = WatchVideo;
