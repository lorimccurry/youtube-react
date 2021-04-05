"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Avatar_1 = require("../styles/Avatar");
var VideoCard_1 = require("../styles/VideoCard");
var date_1 = require("../utils/date");
var DeleteVideoDropdown_1 = require("./DeleteVideoDropdown");
function VideoCard(_a) {
    var video = _a.video, _b = _a.hideAvatar, hideAvatar = _b === void 0 ? false : _b, _c = _a.noUsername, noUsername = _c === void 0 ? false : _c;
    return (<VideoCard_1.default>
      <react_router_dom_1.Link to={"/watch/" + video.id}>
        <img className="thumb" src={video.thumbnail} alt={video.title}/>
      </react_router_dom_1.Link>
      <div className="video-info-container">
        <div className="channel-avatar">
          {!hideAvatar && (<Avatar_1.default style={{ marginRight: '0.8rem' }} src={video.user.avatar} alt={video.user.username + "'s channel avatar"}/>)}
        </div>
        <div className="video-info">
          <react_router_dom_1.Link to={"/watch/" + video.id}>
            <h4 className="truncate">{video.title}</h4>
          </react_router_dom_1.Link>
          {!noUsername && (<react_router_dom_1.Link to={"/channel/{video.user.id}"}>
              <span className="secondary">{video.user.username}</span>
            </react_router_dom_1.Link>)}
          <p className="secondary leading-4">
            <span>{video.views} views</span> <span>•</span>{' '}
            <span>{date_1.formatCreatedAt(video.createdAt)}</span>
          </p>
        </div>
        <DeleteVideoDropdown_1.default video={video}/>
      </div>
    </VideoCard_1.default>);
}
exports.default = VideoCard;
