"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var App_1 = require("./App");
var AppProviders_1 = require("./components/AppProviders");
react_dom_1.default.render(<AppProviders_1.default>
    <App_1.default />
  </AppProviders_1.default>, document.getElementById("root"));
