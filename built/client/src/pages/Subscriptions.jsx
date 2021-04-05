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
        return (<SignUpCard_1.default icon={<Icons_1.SubIcon />} title="Don't miss new videos" description="Sign in to see updates from your favorite YouTube channels"/>);
    }
    if (isLoading)
        return <HomeSkeleton_1.default />;
    if (isError)
        return <ErrorMessage_1.default error={error}/>;
    if (!isLoading && !feed.length)
        return <ChannelSuggestions_1.default />;
    return (<Home_1.default>
      <div style={{ marginTop: '1.5rem' }}></div>

      <VideoGrid_1.default>
        {isSuccess
        ? feed.map(function (video) { return (<VideoCard_1.default key={video.id} video={video} hideAvatar/>); })
        : null}
      </VideoGrid_1.default>
    </Home_1.default>);
}
exports.default = Subscriptions;
