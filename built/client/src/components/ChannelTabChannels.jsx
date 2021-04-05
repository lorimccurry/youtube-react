"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var ChannelTabChannels_1 = require("../styles/ChannelTabChannels");
function ChannelTabChannels(_a) {
    var channels = _a.channels;
    if (!channels.length) {
        return <p>Not subscribed to any channels yet.</p>;
    }
    return (<ChannelTabChannels_1.default>
      {channels.map(function (channel) { return (<react_router_dom_1.Link key={channel.id} to={"/channel/" + channel.id}>
          <div className="channel">
            <img src={channel.avatar} alt={channel.username + " channel avatar"}/>
            <h3>{channel.username}</h3>
            <p className="secondary">{channel.subscribersCount} subscribers</p>
          </div>
        </react_router_dom_1.Link>); })}
    </ChannelTabChannels_1.default>);
}
exports.default = ChannelTabChannels;
