"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_components_1 = require("styled-components");
var Wrapper = styled_components_1.default.div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  background: ", ";\n  min-height: 100vh;\n  padding-bottom: 7rem;\n\n  .cover {\n    height: 170px;\n  }\n\n  .cover img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .header-tabs {\n    padding: 1.2rem 1rem;\n    padding-bottom: 0;\n    background: ", ";\n  }\n\n  .header {\n    width: 80%;\n    display: flex;\n    margin: 0 auto;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .tabs,\n  .tab {\n    margin: 0 auto;\n    margin-top: 1.5rem;\n    width: 80%;\n  }\n\n  ul {\n    list-style: none;\n    display: flex;\n    align-items: center;\n  }\n\n  li {\n    margin-right: 2rem;\n    text-transform: uppercase;\n    letter-spacing: 1.1px;\n  }\n\n  li:hover {\n    cursor: pointer;\n  }\n\n  @media screen and (max-width: 860px) {\n    .header,\n    .tabs,\n    .tab {\n      width: 90%;\n    }\n  }\n\n  @media screen and (max-width: 470px) {\n    .header,\n    .tabs {\n      width: 100%;\n    }\n  }\n\n  ", "\n"], ["\n  background: ", ";\n  min-height: 100vh;\n  padding-bottom: 7rem;\n\n  .cover {\n    height: 170px;\n  }\n\n  .cover img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  .header-tabs {\n    padding: 1.2rem 1rem;\n    padding-bottom: 0;\n    background: ", ";\n  }\n\n  .header {\n    width: 80%;\n    display: flex;\n    margin: 0 auto;\n    justify-content: space-between;\n    align-items: center;\n  }\n\n  .tabs,\n  .tab {\n    margin: 0 auto;\n    margin-top: 1.5rem;\n    width: 80%;\n  }\n\n  ul {\n    list-style: none;\n    display: flex;\n    align-items: center;\n  }\n\n  li {\n    margin-right: 2rem;\n    text-transform: uppercase;\n    letter-spacing: 1.1px;\n  }\n\n  li:hover {\n    cursor: pointer;\n  }\n\n  @media screen and (max-width: 860px) {\n    .header,\n    .tabs,\n    .tab {\n      width: 90%;\n    }\n  }\n\n  @media screen and (max-width: 470px) {\n    .header,\n    .tabs {\n      width: 100%;\n    }\n  }\n\n  ",
    "\n"])), function (props) { return props.theme.black; }, function (props) { return props.theme.bg; }, function (props) {
    // @ts-ignore
    return props.editProfile && styled_components_1.css(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n      @media screen and (max-width: 440px) {\n        .header {\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: flex-start;\n        }\n      }\n    "], ["\n      @media screen and (max-width: 440px) {\n        .header {\n          flex-direction: column;\n          justify-content: flex-start;\n          align-items: flex-start;\n        }\n      }\n    "])));
});
exports.default = Wrapper;
var templateObject_1, templateObject_2;
