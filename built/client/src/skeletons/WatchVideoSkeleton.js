"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var Skeleton_1 = require("../styles/Skeleton");
var WatchVideoSkeleton_1 = require("../styles/WatchVideoSkeleton");
function ChannelSkeleton() {
    return (react_1.default.createElement(WatchVideoSkeleton_1.default, null,
        react_1.default.createElement("div", { className: "video-container" },
            react_1.default.createElement(Skeleton_1.SkeletonLine, { className: "video", mb: "30px" }),
            react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "300px", height: "25px", mb: "20px" }),
            react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "200px", height: "20px", mb: "20px" }),
            react_1.default.createElement("div", { className: "avatar-card" },
                react_1.default.createElement(Skeleton_1.SkeletonLine, { className: "avatar", mr: "20px" }),
                react_1.default.createElement("div", { className: "avatar-card-info" },
                    react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "240px", height: "20px", mb: "20px" }),
                    react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "160px", height: "20px", mb: "20px" })))),
        react_1.default.createElement("div", { className: "related-videos" },
            react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "180px", height: "20px", mb: "20px" }),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null))));
}
exports.default = ChannelSkeleton;
