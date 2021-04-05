"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var menu_button_1 = require("@reach/menu-button");
require("@reach/menu-button/styles.css");
var react_1 = require("react");
var auth_context_1 = require("../context/auth-context");
var api_client_1 = require("../utils/api-client");
var Icons_1 = require("./Icons");
function DeleteCommentDropdown(_a) {
    var comment = _a.comment;
    var user = auth_context_1.useAuth();
    var isCommentAuthor = comment.userId === (user === null || user === void 0 ? void 0 : user.id);
    function handleDeleteComment() {
        api_client_1.deleteComment(comment);
    }
    if (isCommentAuthor) {
        return (react_1.default.createElement("div", null,
            react_1.default.createElement(menu_button_1.Menu, null,
                react_1.default.createElement(menu_button_1.MenuButton, null,
                    react_1.default.createElement(Icons_1.SettingsIcon, null)),
                react_1.default.createElement(menu_button_1.MenuList, null,
                    react_1.default.createElement(menu_button_1.MenuItem, { onSelect: handleDeleteComment },
                        react_1.default.createElement(Icons_1.DeleteIcon, null),
                        react_1.default.createElement("span", null, "Delete Comment"))))));
    }
    return null;
}
exports.default = DeleteCommentDropdown;
