"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Home_1 = require("../styles/Home");
var Skeleton_1 = require("../styles/Skeleton");
var VideoGrid_1 = require("../styles/VideoGrid");
function HomeSkeleton() {
    return (react_1.default.createElement(Home_1.default, null,
        react_1.default.createElement(VideoGrid_1.default, null,
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null),
            react_1.default.createElement(Skeleton_1.VideoCardSkeleton, null))));
}
exports.default = HomeSkeleton;
