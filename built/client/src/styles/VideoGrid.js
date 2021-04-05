"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var VideoGrid = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n\n  margin-top: 25px;\n\n  @media screen and (max-width: 870px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media screen and (max-width: 600px) {\n    grid-template-columns: 1fr;\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 2rem;\n\n  margin-top: 25px;\n\n  @media screen and (max-width: 870px) {\n    grid-template-columns: repeat(2, 1fr);\n  }\n\n  @media screen and (max-width: 600px) {\n    grid-template-columns: 1fr;\n  }\n"])));
exports.default = VideoGrid;
var templateObject_1;
