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
        return react_1.default.createElement(ChannelSkeleton_1.default, null);
    if (isError)
        return react_1.default.createElement(ErrorMessage_1.default, { error: error });
    if (!user) {
        return (react_1.default.createElement(SignUpCard_1.default, { icon: react_1.default.createElement(Icons_1.VidIcon, null), title: "Manage your videos", description: "Sign in to upload and manage your videos, pre-recorded or live" }));
    }
    return (react_1.default.createElement(Channel_1.default, { editProfile: channel.isMe },
        react_1.default.createElement("div", { className: "cover" },
            react_1.default.createElement("img", { src: channel.cover, alt: "channel-cover" })),
        react_1.default.createElement("div", { className: "header-tabs" },
            react_1.default.createElement("div", { className: "header" },
                react_1.default.createElement("div", { className: "flex-row" },
                    react_1.default.createElement("img", { className: "avatar lg", src: channel.avatar, alt: channel.username + " avatar" }),
                    react_1.default.createElement("div", null,
                        react_1.default.createElement("h3", null, channel.username),
                        react_1.default.createElement("span", { className: "secondary" },
                            channel.subscribersCount,
                            " subscribers"))),
                channel.isMe && react_1.default.createElement(EditProfile_1.default, { profile: channel }),
                !channel.isMe && !channel.isSubscribed && (react_1.default.createElement(Button_1.default, { onClick: handleToggleSubscribe }, "Subscribe")),
                !channel.isMe && channel.isSubscribed && (react_1.default.createElement(Button_1.default, { grey: true, onClick: handleToggleSubscribe }, "Subscribed"))),
            react_1.default.createElement("div", { className: "tabs" },
                react_1.default.createElement("ul", { className: "secondary" },
                    react_1.default.createElement("li", { style: tab === 'VIDEOS' ? activeTabStyle : {}, onClick: function () { return setTab('VIDEOS'); } }, "Videos"),
                    react_1.default.createElement("li", { style: tab === 'CHANNELS' ? activeTabStyle : {}, onClick: function () { return setTab('CHANNELS'); } }, "Channels"),
                    react_1.default.createElement("li", { style: tab === 'ABOUT' ? activeTabStyle : {}, onClick: function () { return setTab('ABOUT'); } }, "About")))),
        react_1.default.createElement("div", { className: "tab" },
            tab === 'VIDEOS' && react_1.default.createElement(ChannelTabVideo_1.default, { videos: channel.videos }),
            tab === 'CHANNELS' && (react_1.default.createElement(ChannelTabChannels_1.default, { channels: channel.channels })),
            tab === 'ABOUT' && react_1.default.createElement(ChannelTabAbout_1.default, { about: channel.about }))));
}
exports.default = Channel;
