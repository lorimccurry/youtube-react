"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: 55px;\n  left: 0;\n  height: 100vh;\n  width: 240px;\n  background: ", ";\n  padding-top: 1rem;\n  overflow: auto;\n  padding-bottom: 1.5rem;\n  transition: all 0.3s;\n  z-index: 2;\n  font-size: 1rem;\n\n  &::-webkit-scrollbar {\n    width: 0;\n  }\n\n  .icon {\n    display: flex;\n    align-items: center;\n    padding: 0.5rem 0;\n    padding-left: 1.5rem;\n  }\n\n  .icon:not(.hover-disable):hover {\n    background: ", ";\n    cursor: pointer;\n  }\n\n  .active div {\n    background: ", ";\n    cursor: pointer;\n  }\n\n  .active svg {\n    fill: #fff;\n  }\n\n  .icon span {\n    padding-left: 1rem;\n    position: relative;\n    top: 1px;\n  }\n\n  .icon svg {\n    height: 30px;\n    width: 30px;\n  }\n\n  @media screen and (max-width: 1093px) {\n    transform: translateX(-100%);\n\n    ", "\n  }\n"], ["\n  position: fixed;\n  top: 55px;\n  left: 0;\n  height: 100vh;\n  width: 240px;\n  background: ", ";\n  padding-top: 1rem;\n  overflow: auto;\n  padding-bottom: 1.5rem;\n  transition: all 0.3s;\n  z-index: 2;\n  font-size: 1rem;\n\n  &::-webkit-scrollbar {\n    width: 0;\n  }\n\n  .icon {\n    display: flex;\n    align-items: center;\n    padding: 0.5rem 0;\n    padding-left: 1.5rem;\n  }\n\n  .icon:not(.hover-disable):hover {\n    background: ", ";\n    cursor: pointer;\n  }\n\n  .active div {\n    background: ", ";\n    cursor: pointer;\n  }\n\n  .active svg {\n    fill: #fff;\n  }\n\n  .icon span {\n    padding-left: 1rem;\n    position: relative;\n    top: 1px;\n  }\n\n  .icon svg {\n    height: 30px;\n    width: 30px;\n  }\n\n  @media screen and (max-width: 1093px) {\n    transform: translateX(-100%);\n\n    ",
    "\n  }\n"])), function (props) { return props.theme.grey; }, function (props) { return props.theme.darkGrey; }, function (props) { return props.theme.darkGrey; }, function (props) {
    return props.open && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n        transform: translateX(0);\n      "], ["\n        transform: translateX(0);\n      "])));
});
exports.default = Wrapper;
var templateObject_1, templateObject_2;
