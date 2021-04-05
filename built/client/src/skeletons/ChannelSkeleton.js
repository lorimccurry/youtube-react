"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var ChannelSkeleton_1 = require("../styles/ChannelSkeleton");
var Skeleton_1 = require("../styles/Skeleton");
function ChannelSkeleton() {
    return (react_1.default.createElement(ChannelSkeleton_1.default, null,
        react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "100%", height: "170px" }),
        react_1.default.createElement("div", { className: "channel-avatar-info" },
            react_1.default.createElement(Skeleton_1.SkeletonLine, { className: "avatar" }),
            react_1.default.createElement("div", { className: "channel-info" },
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "250px", height: "20px", mb: "20px" }),
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "200px", height: "20px", mb: "20px" }))),
        react_1.default.createElement("div", { className: "videos" },
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null))));
}
exports.default = ChannelSkeleton;
