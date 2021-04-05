"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var Subscriptions_1 = require("../styles/Subscriptions");
function Subscriptions(_a) {
    var user = _a.user;
    if (!user)
        return null;
    return (<Subscriptions_1.default>
      {user.channels.length ? <h4>Subscriptions</h4> : null}
      {user.channels.length
        ? user.channels.map(function (channel) { return (<react_router_dom_1.Link key={channel.id} to={"/channel/" + channel.id}>
              <div className="channel">
                <img src={channel.avatar} alt={channel.username + " avatar"}/>
                <span>{channel.username}</span>
              </div>
            </react_router_dom_1.Link>); })
        : null}
    </Subscriptions_1.default>);
}
exports.default = Subscriptions;
