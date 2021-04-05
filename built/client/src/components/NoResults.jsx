"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var no_results_png_1 = require("../assets/no-results.png");
var NoResults_1 = require("../styles/NoResults");
function NoResults(_a) {
    var title = _a.title, text = _a.text;
    return (<NoResults_1.default>
      <img src={no_results_png_1.default} alt="no results"/>
      <h2>{title}</h2>
      <p className="secondary">{text}</p>
    </NoResults_1.default>);
}
exports.default = NoResults;
