"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var react_query_1 = require("react-query");
var Icons_1 = require("../components/Icons");
var SignUpCard_1 = require("../components/SignUpCard");
var auth_context_1 = require("../context/auth-context");
var Home_1 = require("../styles/Home");
var VideoGrid_1 = require("../styles/VideoGrid");
var api_client_1 = require("../utils/api-client");
var HomeSkeleton_1 = require("../skeletons/HomeSkeleton");
var ErrorMessage_1 = require("../components/ErrorMessage");
var ChannelSuggestions_1 = require("../components/ChannelSuggestions");
var VideoCard_1 = require("../components/VideoCard");
function Subscriptions() {
    var user = auth_context_1.useAuth();
    var _a = react_query_1.useQuery('Subscriptions', function () { return api_client_1.client.get('/users/subscriptions').then(function (res) { return res.data.feed; }); }, {
        enabled: user,
    }), feed = _a.data, isLoading = _a.isLoading, isError = _a.isError, isSuccess = _a.isSuccess, error = _a.error;
    if (!user) {
        return (react_1.default.createElement(SignUpCard_1.default, { icon: react_1.default.createElement(Icons_1.SubIcon, null), title: "Don't miss new videos", description: "Sign in to see updates from your favorite YouTube channels" }));
    }
    if (isLoading)
        return react_1.default.createElement(HomeSkeleton_1.default, null);
    if (isError)
        return react_1.default.createElement(ErrorMessage_1.default, { error: error });
    if (!isLoading && !feed.length)
        return react_1.default.createElement(ChannelSuggestions_1.default, null);
    return (react_1.default.createElement(Home_1.default, null,
        react_1.default.createElement("div", { style: { marginTop: '1.5rem' } }),
        react_1.default.createElement(VideoGrid_1.default, null, isSuccess
            ? feed.map(function (video) { return (react_1.default.createElement(VideoCard_1.default, { key: video.id, video: video, hideAvatar: true })); })
            : null)));
}
exports.default = Subscriptions;
