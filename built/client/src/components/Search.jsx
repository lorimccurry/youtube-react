"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var react_router_1 = require("react-router");
var Search_1 = require("../styles/Search");
var Icons_1 = require("./Icons");
function Search() {
    var history = react_router_1.useHistory();
    function handleSubmit(event) {
        event.preventDefault();
        var searchQuery = event.target.elements.search.value;
        if (!searchQuery.trim())
            return;
        history.push("/results/" + searchQuery);
    }
    return (<Search_1.default>
      <form onSubmit={handleSubmit}>
        <input id="search" type="text" placeholder="Search"/>
        <button aria-label="Search videos and channels" type="submit">
          <Icons_1.SearchIcon />
        </button>
      </form>
    </Search_1.default>);
}
exports.default = Search;
