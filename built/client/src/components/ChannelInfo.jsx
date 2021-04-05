"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var use_auth_action_1 = require("../hooks/use-auth-action");
var Button_1 = require("../styles/Button");
var ChannelInfo_1 = require("../styles/ChannelInfo");
var api_client_1 = require("../utils/api-client");
function ChannelInfo(_a) {
    var channel = _a.channel;
    var handleAuthAction = use_auth_action_1.default();
    function handleToggleSubscribe() {
        handleAuthAction(api_client_1.toggleSubscribeUser, channel.id);
    }
    return (<ChannelInfo_1.default>
      <react_router_dom_1.Link to={"/channel/" + channel.id} className="avatar-channel">
        <img src={channel.avatar} alt="avatar"/>

        <div className="channel-info-meta">
          <h3>{channel.username}</h3>

          <p className="secondary">
            <span>{channel.subscribersCount} subscribers</span>{' '}
            <span className="to-hide">•</span>{' '}
            <span className="to-hide">{channel.videosCount} videos</span>
          </p>

          <p className="description secondary">
            {channel.about.length > 65
        ? channel.about.substring(0, 65)
        : channel.about}
          </p>
        </div>
      </react_router_dom_1.Link>

      {!channel.isMe && !channel.isSubscribed && (<Button_1.default onClick={handleToggleSubscribe}>Subscribe</Button_1.default>)}

      {!channel.isMe && channel.isSubscribed && (<Button_1.default grey onClick={handleToggleSubscribe}>
          Subscribed
        </Button_1.default>)}
    </ChannelInfo_1.default>);
}
exports.default = ChannelInfo;
