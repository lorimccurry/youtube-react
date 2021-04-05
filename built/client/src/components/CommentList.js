"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var date_1 = require("../utils/date");
var DeleteCommentDropdown_1 = require("./DeleteCommentDropdown");
function CommentList(_a) {
    var comments = _a.comments;
    return comments.map(function (comment) { return (react_1.default.createElement(Comment, { key: comment.id, comment: comment })); });
}
function Comment(_a) {
    var comment = _a.comment;
    return (react_1.default.createElement("div", { className: "comment" },
        react_1.default.createElement(react_router_dom_1.Link, { to: "channel/" + comment.user.id },
            react_1.default.createElement("img", { src: comment.user.avatar, alt: comment.user.username + " avatar" })),
        react_1.default.createElement("div", { className: "comment-info", style: { flex: '1 1 0' } },
            react_1.default.createElement("p", { className: "secondary" },
                react_1.default.createElement("span", null,
                    react_1.default.createElement(react_router_dom_1.Link, { className: "user-channel", to: "channel/" + comment.user.id }, comment.user.username)),
                react_1.default.createElement("span", { style: { marginLeft: '0.6rem' } }, date_1.formatCreatedAt(comment.createdAt))),
            react_1.default.createElement("p", null, comment.text)),
        react_1.default.createElement(DeleteCommentDropdown_1.default, { comment: comment })));
}
exports.default = react_1.default.memo(CommentList);
