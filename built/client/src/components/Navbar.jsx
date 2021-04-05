"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Navbar_1 = require("../styles/Navbar");
var GoogleAuth_1 = require("./GoogleAuth");
var react_router_dom_1 = require("react-router-dom");
var Icons_1 = require("./Icons");
var Search_1 = require("./Search");
var auth_context_1 = require("../context/auth-context");
var UserDropdown_1 = require("./UserDropdown");
var UploadVideo_1 = require("./UploadVideo");
function Navbar(_a) {
    var toggleSidebarOpen = _a.toggleSidebarOpen;
    var user = auth_context_1.useAuth();
    return (<Navbar_1.default>
      <div className="logo flex-row">
        <Icons_1.HamburgerIcon className="toggle-navhandler" onClick={toggleSidebarOpen}/>
        <span>
          <react_router_dom_1.NavLink to="/">
            <Icons_1.LogoIcon style={{
        width: 80,
        height: 24,
    }}/>
          </react_router_dom_1.NavLink>
        </span>
      </div>

      <Search_1.default />

      <ul>
        <li>
          {user ? <UploadVideo_1.default /> : <Icons_1.AppsIcon />}
        </li>
        <li>
          {user ? <Icons_1.AppsIcon /> : <Icons_1.SettingsIcon />}
        </li>
        <li>
          {" "}
          {user ? <UserDropdown_1.default user={user}/> : <GoogleAuth_1.default />}
        </li>
      </ul>
    </Navbar_1.default>);
}
exports.default = Navbar;
