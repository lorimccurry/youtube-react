"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var styled_components_1 = require("styled-components");
var Button = styled_components_1.default.button(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  padding: 10px 16px;\n  font-family: ", ";\n  background: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: 1px;\n  font-weight: 400;\n  font-size: 14px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.75;\n  text-transform: uppercase;\n  letter-spacing: 0.02857em;\n\n  @media screen and (max-width: 400px) {\n    font-size: 14px;\n    padding: 5px 8px;\n  }\n\n  ", "\n"], ["\n  padding: 10px 16px;\n  font-family: ", ";\n  background: ", ";\n  color: ", ";\n  border: 1px solid ", ";\n  border-radius: 1px;\n  font-weight: 400;\n  font-size: 14px;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.75;\n  text-transform: uppercase;\n  letter-spacing: 0.02857em;\n\n  @media screen and (max-width: 400px) {\n    font-size: 14px;\n    padding: 5px 8px;\n  }\n\n  ",
    "\n"])), function (props) { return props.font; }, function (props) { return props.theme.red; }, function (props) { return props.theme.white; }, function (props) { return props.theme.red; }, function (props) {
    return props.grey && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      background: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n    "], ["\n      background: ", ";\n      border: 1px solid ", ";\n      color: ", ";\n    "])), function (props) { return props.theme.darkGrey; }, function (props) { return props.theme.darkGrey; }, function (props) { return props.theme.secondaryColor; });
});
exports.default = Button;
var templateObject_1, templateObject_2;
