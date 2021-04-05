"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var MobileNavbar_1 = require("../styles/MobileNavbar");
var Icons_1 = require("./Icons");
function MobileNavbar() {
    return (<MobileNavbar_1.default>
      <div className="icons">
        <react_router_dom_1.NavLink to="/" exact activeClassName='active'>
          <Icons_1.HomeIcon />
        </react_router_dom_1.NavLink>

        <react_router_dom_1.NavLink to="/feed/trending" activeClassName='active'>
          <Icons_1.TrendingIcon />
        </react_router_dom_1.NavLink>

        <react_router_dom_1.NavLink to="/feed/subscriptions" activeClassName='active'>
          <Icons_1.SubIcon />
        </react_router_dom_1.NavLink>

        <react_router_dom_1.NavLink to="/feed/history" activeClassName='active'>
          <Icons_1.HistoryIcon />
        </react_router_dom_1.NavLink>

        <react_router_dom_1.NavLink to="/feed/liked_videos" activeClassName='active'>
          <Icons_1.WatchIcon />
        </react_router_dom_1.NavLink>
      </div>
    </MobileNavbar_1.default>);
}
exports.default = MobileNavbar;
