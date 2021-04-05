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
        return (<div>
        <menu_button_1.Menu>
          <menu_button_1.MenuButton>
            <Icons_1.SettingsIcon />
          </menu_button_1.MenuButton>
          <menu_button_1.MenuList>
            <menu_button_1.MenuItem onSelect={handleDeleteComment}>
              <Icons_1.DeleteIcon />
              <span>Delete Comment</span>
            </menu_button_1.MenuItem>
          </menu_button_1.MenuList>
        </menu_button_1.Menu>
      </div>);
    }
    return null;
}
exports.default = DeleteCommentDropdown;
