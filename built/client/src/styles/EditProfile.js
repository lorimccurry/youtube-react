"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  svg {\n    width: 30px;\n    height: 30px;\n    margin-left: 1rem;\n    fill: ", ";\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n  }\n\n  @media screen and (max-width: 440px) {\n    margin-top: 1rem;\n  }\n"], ["\n  svg {\n    width: 30px;\n    height: 30px;\n    margin-left: 1rem;\n    fill: ", ";\n  }\n\n  div {\n    display: flex;\n    align-items: center;\n  }\n\n  @media screen and (max-width: 440px) {\n    margin-top: 1rem;\n  }\n"])), function (props) { return props.theme.darkGrey; });
exports.default = Wrapper;
var templateObject_1;
