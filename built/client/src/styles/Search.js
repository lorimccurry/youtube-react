"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  input#search {\n    background: ", ";\n    padding: 0.4rem 1rem;\n    border: 1px solid ", ";\n    height: 31px;\n    color: ", ";\n  }\n\n  form {\n    display: flex;\n  }\n\n  button {\n    width: 65px;\n    background-color: ", ";\n    border-radius: 0 2px 2px 0;\n    border: 1px solid ", ";\n  }\n\n  button svg {\n    pointer-events: none;\n    display: block;\n    width: 100%;\n    height: 24px;\n    color: fff;\n    opacity: 0.6;\n  }\n\n  @media screen and (max-width: 750px) {\n    input#search,\n    button {\n      display: none;\n    }\n  }\n"], ["\n  input#search {\n    background: ", ";\n    padding: 0.4rem 1rem;\n    border: 1px solid ", ";\n    height: 31px;\n    color: ", ";\n  }\n\n  form {\n    display: flex;\n  }\n\n  button {\n    width: 65px;\n    background-color: ", ";\n    border-radius: 0 2px 2px 0;\n    border: 1px solid ", ";\n  }\n\n  button svg {\n    pointer-events: none;\n    display: block;\n    width: 100%;\n    height: 24px;\n    color: fff;\n    opacity: 0.6;\n  }\n\n  @media screen and (max-width: 750px) {\n    input#search,\n    button {\n      display: none;\n    }\n  }\n"])), function (props) { return props.theme.black; }, function (props) { return props.theme.darkGrey; }, function (props) { return props.theme.primaryColor; }, function (props) { return props.theme.darkGrey; }, function (props) { return props.theme.darkGrey; });
exports.default = Wrapper;
var templateObject_1;
