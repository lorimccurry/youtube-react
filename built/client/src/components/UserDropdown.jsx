"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_button_1 = require("@reach/menu-button");
require("@reach/menu-button/styles.css");
var react_1 = require("react");
var react_router_1 = require("react-router");
var Avatar_1 = require("../styles/Avatar");
var api_client_1 = require("../utils/api-client");
var Icons_1 = require("./Icons");
function UserDropdown(_a) {
    var user = _a.user;
    var history = react_router_1.useHistory();
    return (<menu_button_1.Menu>
      <menu_button_1.MenuButton>
        <Avatar_1.default className="pointer" src={user.avatar} alt={user.username}/>
      </menu_button_1.MenuButton>
      <menu_button_1.MenuList>
        <menu_button_1.MenuItem onSelect={function () { return history.push("/channel/" + user.id); }}>
          <Icons_1.ChannelIcon />
          <span>Your channel</span>
        </menu_button_1.MenuItem>
        <menu_button_1.MenuItem onSelect={api_client_1.signoutUser}>
          <Icons_1.SignoutIcon />
          <span>Sign out</span>
        </menu_button_1.MenuItem>
      </menu_button_1.MenuList>
    </menu_button_1.Menu>);
}
exports.default = UserDropdown;
