"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var not_found_png_1 = require("../assets/not-found.png");
var NotFound_1 = require("../styles/NotFound");
function NotFound() {
    return (<NotFound_1.default>
      <img src={not_found_png_1.default} alt="Error page illustration"/>
      <br />
      <p>This page isn't available. Sorry about that.</p>
      <p>Try searching for something else.</p>
    </NotFound_1.default>);
}
exports.default = NotFound;
