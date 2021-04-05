"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_simple_snackbar_1 = require("react-simple-snackbar");
var default_avatar_png_1 = require("../assets/default-avatar.png");
var auth_context_1 = require("../context/auth-context");
var CommentList_1 = require("../styles/CommentList");
var api_client_1 = require("../utils/api-client");
var CommentList_2 = require("./CommentList");
function AddComment(_a) {
    var video = _a.video;
    var user = auth_context_1.useAuth();
    var openSnackbar = react_simple_snackbar_1.useSnackbar()[0];
    var _b = react_1.default.useState(''), comment = _b[0], setComment = _b[1];
    function handleAddComment(event) {
        if (event.keyCode === 13) {
            event.target.blur();
            if (!comment.trim()) {
                return openSnackbar('Please write a comment.');
            }
            api_client_1.addComment({ video: video, comment: comment })
                .then(function () { return setComment(''); })
                .catch(function () { return openSnackbar('Sign in to add a comment.'); });
        }
    }
    return (react_1.default.createElement(CommentList_1.default, null,
        react_1.default.createElement("h3", null,
            video.comments.length,
            " comments"),
        react_1.default.createElement("div", { className: "add-comment" },
            user ? (react_1.default.createElement("img", { src: user.avatar, alt: user.userName })) : (react_1.default.createElement("img", { src: default_avatar_png_1.default, alt: "default user" })),
            react_1.default.createElement("textarea", { placeholder: "Add a public comment...", value: comment, onKeyDown: handleAddComment, onChange: function (event) { return setComment(event.target.value); }, rows: 1 })),
        react_1.default.createElement(CommentList_2.default, { comments: video.comments })));
}
exports.default = AddComment;
