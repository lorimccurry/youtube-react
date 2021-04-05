"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var date_1 = require("../utils/date");
var DeleteCommentDropdown_1 = require("./DeleteCommentDropdown");
function CommentList(_a) {
    var comments = _a.comments;
    return comments.map(function (comment) { return (<Comment key={comment.id} comment={comment}/>); });
}
function Comment(_a) {
    var comment = _a.comment;
    return (<div className="comment">
      <react_router_dom_1.Link to={"channel/" + comment.user.id}>
        <img src={comment.user.avatar} alt={comment.user.username + " avatar"}/>
      </react_router_dom_1.Link>
      <div className="comment-info" style={{ flex: '1 1 0' }}>
        <p className="secondary">
          <span>
            <react_router_dom_1.Link className="user-channel" to={"channel/" + comment.user.id}>
              {comment.user.username}
            </react_router_dom_1.Link>
          </span>
          <span style={{ marginLeft: '0.6rem' }}>
            {date_1.formatCreatedAt(comment.createdAt)}
          </span>
        </p>
        <p>{comment.text}</p>
      </div>
      <DeleteCommentDropdown_1.default comment={comment}/>
    </div>);
}
exports.default = react_1.default.memo(CommentList);
