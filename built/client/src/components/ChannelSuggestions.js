"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_query_1 = require("react-query");
var Trending_1 = require("../styles/Trending");
var api_client_1 = require("../utils/api-client");
var SuggestionSkeleton_1 = require("../skeletons/SuggestionSkeleton");
var ErrorMessage_1 = require("./ErrorMessage");
var ChannelInfo_1 = require("./ChannelInfo");
function ChannelSuggestions() {
    var _a = react_query_1.useQuery('Channels', function () {
        return api_client_1.client.get('/users').then(function (res) { return res.data.channels; });
    }), channels = _a.data, isLoading = _a.isLoading, isError = _a.isError, error = _a.error, isSuccess = _a.isSuccess;
    if (isLoading)
        return react_1.default.createElement(SuggestionSkeleton_1.default, null);
    if (isError)
        return react_1.default.createElement(ErrorMessage_1.default, { error: error });
    return (react_1.default.createElement(Trending_1.default, null,
        react_1.default.createElement("h2", null, "Suggestions For You"),
        isSuccess
            ? channels.map(function (channel) { return (react_1.default.createElement(ChannelInfo_1.default, { key: channel.id, channel: channel })); })
            : null));
}
exports.default = ChannelSuggestions;
