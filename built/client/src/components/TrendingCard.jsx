"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var TrendingCard_1 = require("../styles/TrendingCard");
var date_1 = require("../utils/date");
function TrendingCard(_a) {
    var video = _a.video;
    return (<TrendingCard_1.default>
      <react_router_dom_1.Link to={"/watch/" + video.id}>
        <img className="thumb" src={video.thumbnail} alt={video.title}/>
      </react_router_dom_1.Link>
      <div className="video-info-container">
        <react_router_dom_1.Link to={"/watch/" + video.id}>
          <h3>{video.title}</h3>
        </react_router_dom_1.Link>
        <p className="secondary">
          <react_router_dom_1.Link to={"/channel/" + video.user.id}>{video.user.username}</react_router_dom_1.Link>
          <span>•</span>
          <span>{video.views} views</span>
          <span>•</span> <span>{date_1.formatCreatedAt(video.createdAt)}</span>
        </p>
        <p className="secondary">{video.description}</p>
      </div>
    </TrendingCard_1.default>);
}
exports.default = TrendingCard;
