"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var react_query_1 = require("react-query");
var react_router_1 = require("react-router");
var Icons_1 = require("../components/Icons");
var SignUpCard_1 = require("../components/SignUpCard");
var Channel_1 = require("../styles/Channel");
var api_client_1 = require("../utils/api-client");
var ChannelSkeleton_1 = require("../skeletons/ChannelSkeleton");
var ErrorMessage_1 = require("../components/ErrorMessage");
var auth_context_1 = require("../context/auth-context");
var EditProfile_1 = require("../components/EditProfile");
var Button_1 = require("../styles/Button");
var ChannelTabVideo_1 = require("../components/ChannelTabVideo");
var ChannelTabChannels_1 = require("../components/ChannelTabChannels");
var ChannelTabAbout_1 = require("../components/ChannelTabAbout");
var use_auth_action_1 = require("../hooks/use-auth-action");
var activeTabStyle = {
    borderBottom: '2px solid white',
    color: 'white',
};
function Channel() {
    var _a = react_1.default.useState('VIDEOS'), tab = _a[0], setTab = _a[1];
    var user = auth_context_1.useAuth();
    var channelId = react_router_1.useParams().channelId;
    var handleAuthAction = use_auth_action_1.default();
    var loggedInUserId = user ? user.id : undefined;
    var userId = channelId !== null && channelId !== void 0 ? channelId : loggedInUserId;
    var _b = react_query_1.useQuery(['Channel', userId], function () { return api_client_1.client.get("/users/" + userId).then(function (res) { return res.data.user; }); }, {
        enabled: userId,
    }), channel = _b.data, isLoading = _b.isLoading, isError = _b.isError, error = _b.error;
    function handleToggleSubscribe() {
        handleAuthAction(api_client_1.toggleSubscribeUser, channel.id);
    }
    if (isLoading)
        return <ChannelSkeleton_1.default />;
    if (isError)
        return <ErrorMessage_1.default error={error}/>;
    if (!user) {
        return (<SignUpCard_1.default icon={<Icons_1.VidIcon />} title="Manage your videos" description="Sign in to upload and manage your videos, pre-recorded or live"/>);
    }
    return (<Channel_1.default editProfile={channel.isMe}>
      <div className="cover">
        <img src={channel.cover} alt="channel-cover"/>
      </div>

      <div className="header-tabs">
        <div className="header">
          <div className="flex-row">
            <img className="avatar lg" src={channel.avatar} alt={channel.username + " avatar"}/>
            <div>
              <h3>{channel.username}</h3>
              <span className="secondary">
                {channel.subscribersCount} subscribers
              </span>
            </div>
          </div>
          {channel.isMe && <EditProfile_1.default profile={channel}/>}

          {!channel.isMe && !channel.isSubscribed && (<Button_1.default onClick={handleToggleSubscribe}>Subscribe</Button_1.default>)}

          {!channel.isMe && channel.isSubscribed && (<Button_1.default grey onClick={handleToggleSubscribe}>
              Subscribed
            </Button_1.default>)}
        </div>

        <div className="tabs">
          <ul className="secondary">
            <li style={tab === 'VIDEOS' ? activeTabStyle : {}} onClick={function () { return setTab('VIDEOS'); }}>
              Videos
            </li>
            <li style={tab === 'CHANNELS' ? activeTabStyle : {}} onClick={function () { return setTab('CHANNELS'); }}>
              Channels
            </li>
            <li style={tab === 'ABOUT' ? activeTabStyle : {}} onClick={function () { return setTab('ABOUT'); }}>
              About
            </li>
          </ul>
        </div>
      </div>

      <div className="tab">
        {tab === 'VIDEOS' && <ChannelTabVideo_1.default videos={channel.videos}/>}
        {tab === 'CHANNELS' && (<ChannelTabChannels_1.default channels={channel.channels}/>)}
        {tab === 'ABOUT' && <ChannelTabAbout_1.default about={channel.about}/>}
      </div>
    </Channel_1.default>);
}
exports.default = Channel;
