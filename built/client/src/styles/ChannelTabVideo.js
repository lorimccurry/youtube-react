"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  .videos {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2rem;\n  }\n\n  @media screen and (max-width: 830px) {\n    .videos {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n\n  @media screen and (max-width: 540px) {\n    .videos {\n      grid-template-columns: 1fr;\n    }\n  }\n"], ["\n  .videos {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n    grid-gap: 2rem;\n  }\n\n  @media screen and (max-width: 830px) {\n    .videos {\n      grid-template-columns: repeat(2, 1fr);\n    }\n  }\n\n  @media screen and (max-width: 540px) {\n    .videos {\n      grid-template-columns: 1fr;\n    }\n  }\n"])));
exports.default = Wrapper;
var templateObject_1;
