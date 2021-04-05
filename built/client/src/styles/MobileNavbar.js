"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  position: fixed;\n  z-index: 100;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: ", ";\n  border-top: 1px solid ", ";\n  display: none;\n  padding: 0.8rem 1rem;\n\n  .icons a {\n    padding: 0;\n    margin: 0;\n  }\n\n  .icons {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .icons svg {\n    width: 30px;\n    height: 30px;\n    fill: ", ";\n  }\n\n  .icons img {\n    width: 26px;\n    height: 26px;\n    object-fit: cover;\n    border-radius: 13px;\n  }\n\n  .active svg {\n    fill: ", ";\n  }\n\n  @media screen and (max-width: 500px) {\n    display: block;\n  }\n"], ["\n  position: fixed;\n  z-index: 100;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  background: ", ";\n  border-top: 1px solid ", ";\n  display: none;\n  padding: 0.8rem 1rem;\n\n  .icons a {\n    padding: 0;\n    margin: 0;\n  }\n\n  .icons {\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n  }\n\n  .icons svg {\n    width: 30px;\n    height: 30px;\n    fill: ", ";\n  }\n\n  .icons img {\n    width: 26px;\n    height: 26px;\n    object-fit: cover;\n    border-radius: 13px;\n  }\n\n  .active svg {\n    fill: ", ";\n  }\n\n  @media screen and (max-width: 500px) {\n    display: block;\n  }\n"])), function (props) { return props.theme.grey; }, function (props) { return props.theme.darkGrey; }, function (props) { return props.theme.darkGrey; }, function (props) { return props.theme.primaryColor; });
exports.default = Wrapper;
var templateObject_1;
