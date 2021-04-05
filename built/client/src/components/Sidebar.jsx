"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var Sidebar_1 = require("../styles/Sidebar");
var react_router_dom_1 = require("react-router-dom");
var Icons_1 = require("./Icons");
var SidebarAuth_1 = require("./SidebarAuth");
var auth_context_1 = require("../context/auth-context");
var Subscriptions_1 = require("./Subscriptions");
function Sidebar(_a) {
    var isSidebarOpen = _a.isSidebarOpen;
    var user = auth_context_1.useAuth();
    return (<Sidebar_1.default open={isSidebarOpen}>
      <react_router_dom_1.NavLink to="/" exact activeClassName="active">
        <div className="icon">
          <Icons_1.HomeIcon />
          <span>Home</span>
        </div>
      </react_router_dom_1.NavLink>

      <react_router_dom_1.NavLink to="/feed/trending" activeClassName="active">
        <div className="icon">
          <Icons_1.TrendingIcon />
          <span>Trending</span>
        </div>
      </react_router_dom_1.NavLink>

      <react_router_dom_1.NavLink to="/feed/subscriptions" activeClassName="active">
        <div className="icon">
          <Icons_1.SubIcon />
          <span>Subscriptions</span>
        </div>
      </react_router_dom_1.NavLink>

      <div className="divider"></div>

      <react_router_dom_1.NavLink to="/feed/library" activeClassName="active">
        <div className="icon">
          <Icons_1.LibIcon />
          <span>Library</span>
        </div>
      </react_router_dom_1.NavLink>

      <react_router_dom_1.NavLink to="/feed/history" activeClassName="active">
        <div className="icon">
          <Icons_1.HistoryIcon />
          <span>History</span>
        </div>
      </react_router_dom_1.NavLink>

      <react_router_dom_1.NavLink to="/feed/my_videos" activeClassName="active">
        <div className="icon">
          <Icons_1.VidIcon />
          <span>Your videos</span>
        </div>
      </react_router_dom_1.NavLink>

      <react_router_dom_1.NavLink to="/feed/liked_videos" activeClassName="active">
        <div className="icon">
          <Icons_1.LikeIcon />
          <span>Liked videos</span>
        </div>
      </react_router_dom_1.NavLink>

      <div className="divider"></div>

      {user ? <Subscriptions_1.default user={user}/> : <SidebarAuth_1.default />}
    </Sidebar_1.default>);
}
exports.default = Sidebar;
