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
    return (react_1.default.createElement(menu_button_1.Menu, null,
        react_1.default.createElement(menu_button_1.MenuButton, null,
            react_1.default.createElement(Avatar_1.default, { className: "pointer", src: user.avatar, alt: user.username })),
        react_1.default.createElement(menu_button_1.MenuList, null,
            react_1.default.createElement(menu_button_1.MenuItem, { onSelect: function () { return history.push("/channel/" + user.id); } },
                react_1.default.createElement(Icons_1.ChannelIcon, null),
                react_1.default.createElement("span", null, "Your channel")),
            react_1.default.createElement(menu_button_1.MenuItem, { onSelect: api_client_1.signoutUser },
                react_1.default.createElement(Icons_1.SignoutIcon, null),
                react_1.default.createElement("span", null, "Sign out")))));
}
exports.default = UserDropdown;
