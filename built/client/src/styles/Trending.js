"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding: 1rem 1.3rem;\n  width: 85%;\n  margin: 0 auto;\n  padding-top: 2rem;\n  padding-bottom: 7rem;\n  padding-bottom: ", ";\n\n  @media screen and (max-width: 930px) {\n    width: 95%;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 100%;\n  }\n"], ["\n  padding: 1rem 1.3rem;\n  width: 85%;\n  margin: 0 auto;\n  padding-top: 2rem;\n  padding-bottom: 7rem;\n  padding-bottom: ", ";\n\n  @media screen and (max-width: 930px) {\n    width: 95%;\n  }\n\n  @media screen and (max-width: 800px) {\n    width: 100%;\n  }\n"])), function (props) { return (props.noPad ? "0.5rem" : "7rem"); });
exports.default = Wrapper;
var templateObject_1;
