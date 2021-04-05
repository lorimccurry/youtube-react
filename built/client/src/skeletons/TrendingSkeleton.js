"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var styled_components_1 = require("styled-components");
var Trending_1 = require("../styles/Trending");
var Skeleton_1 = require("../styles/Skeleton");
var SkeletonWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n\n  @media screen and (max-width: 750px) {\n    .video-info-container {\n      margin-left: 1.5rem;\n    }\n  }\n\n  @media screen and (max-width: 645px) {\n    flex-direction: column;\n\n    .video-info-container {\n      margin-left: 0;\n      margin-top: 1rem;\n    }\n  }\n"], ["\n  display: flex;\n\n  @media screen and (max-width: 750px) {\n    .video-info-container {\n      margin-left: 1.5rem;\n    }\n  }\n\n  @media screen and (max-width: 645px) {\n    flex-direction: column;\n\n    .video-info-container {\n      margin-left: 0;\n      margin-top: 1rem;\n    }\n  }\n"])));
function TrendingSkeleton() {
    return (react_1.default.createElement(Trending_1.default, null,
        react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "350px", height: "30px", mt: "20px", mb: "25px" }),
        react_1.default.createElement(SkeletonWrapper, null,
            react_1.default.createElement(Skeleton_1.TrendingCardSkeleton, { className: "thumb", mb: "20px", mr: "20px" }),
            react_1.default.createElement("div", { className: "video-info-container" },
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "350px", height: "30px", mb: "20px" }),
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "300px", height: "30px", mb: "20px" }))),
        react_1.default.createElement(SkeletonWrapper, null,
            react_1.default.createElement(Skeleton_1.TrendingCardSkeleton, { className: "thumb", mb: "20px", mr: "20px" }),
            react_1.default.createElement("div", { className: "video-info-container" },
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "350px", height: "30px", mb: "20px" }),
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "300px", height: "30px", mb: "20px" }))),
        react_1.default.createElement(SkeletonWrapper, null,
            react_1.default.createElement(Skeleton_1.TrendingCardSkeleton, { className: "thumb", mb: "20px", mr: "20px" }),
            react_1.default.createElement("div", { className: "video-info-container" },
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "350px", height: "30px", mb: "20px" }),
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "300px", height: "30px", mb: "20px" })))));
}
exports.default = TrendingSkeleton;
var templateObject_1;
