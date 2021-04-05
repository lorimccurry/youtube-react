"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 2rem;\n\n  img {\n    width: 106px;\n    height: 106px;\n    border-radius: 53px;\n    margin-bottom: 0.8rem;\n    object-fit: cover;\n  }\n\n  .channel {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  @media screen and (max-width: 700px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media screen and (max-width: 500px) {\n    width: 90%;\n    margin: 0 auto;\n    grid-template-columns: repeat(2, 1fr);\n  }\n"], ["\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 2rem;\n\n  img {\n    width: 106px;\n    height: 106px;\n    border-radius: 53px;\n    margin-bottom: 0.8rem;\n    object-fit: cover;\n  }\n\n  .channel {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n  }\n\n  @media screen and (max-width: 700px) {\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  @media screen and (max-width: 500px) {\n    width: 90%;\n    margin: 0 auto;\n    grid-template-columns: repeat(2, 1fr);\n  }\n"])));
exports.default = Wrapper;
var templateObject_1;
