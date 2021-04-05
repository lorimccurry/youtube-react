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
var SkeletonWrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n"], ["\n  display: flex;\n  align-items: center;\n  margin-bottom: 1.5rem;\n"])));
function SuggestionSkeleton() {
    return (react_1.default.createElement(Trending_1.default, null,
        react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "350px", height: "30px", mt: "20px", mb: "30px" }),
        react_1.default.createElement(SkeletonWrapper, null,
            react_1.default.createElement(Skeleton_1.ChannelInfoSkeleton, null),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "250px", height: "20px", mb: "20px" }),
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "200px", height: "20px", mb: "20px" }))),
        react_1.default.createElement(SkeletonWrapper, null,
            react_1.default.createElement(Skeleton_1.ChannelInfoSkeleton, null),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "250px", height: "20px", mb: "20px" }),
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "200px", height: "20px", mb: "20px" }))),
        react_1.default.createElement(SkeletonWrapper, null,
            react_1.default.createElement(Skeleton_1.ChannelInfoSkeleton, null),
            react_1.default.createElement("div", null,
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "250px", height: "20px", mb: "20px" }),
                react_1.default.createElement(Skeleton_1.SkeletonLine, { width: "200px", height: "20px", mb: "20px" })))));
}
exports.default = SuggestionSkeleton;
var templateObject_1;
