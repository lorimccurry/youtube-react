"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  h4 {\n    text-transform: uppercase;\n    margin-bottom: 0.5rem;\n    letter-spacing: 1.2px;\n    color: ", ";\n    padding-left: 1.5rem;\n  }\n\n  .channel {\n    display: flex;\n    align-items: center;\n    padding: 0.2rem 0;\n    margin-bottom: 0.5rem;\n    padding-left: 1.5rem;\n  }\n\n  .channel:hover {\n    cursor: pointer;\n    background: ", ";\n  }\n\n  .channel img {\n    margin-right: 1rem;\n    width: 22px;\n    height: 22px;\n    object-fit: cover;\n    border-radius: 11px;\n  }\n"], ["\n  h4 {\n    text-transform: uppercase;\n    margin-bottom: 0.5rem;\n    letter-spacing: 1.2px;\n    color: ", ";\n    padding-left: 1.5rem;\n  }\n\n  .channel {\n    display: flex;\n    align-items: center;\n    padding: 0.2rem 0;\n    margin-bottom: 0.5rem;\n    padding-left: 1.5rem;\n  }\n\n  .channel:hover {\n    cursor: pointer;\n    background: ", ";\n  }\n\n  .channel img {\n    margin-right: 1rem;\n    width: 22px;\n    height: 22px;\n    object-fit: cover;\n    border-radius: 11px;\n  }\n"])), function (props) { return props.theme.secondaryColor; }, function (props) { return props.theme.darkGrey; });
exports.default = Wrapper;
var templateObject_1;
