"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_query_1 = require("react-query");
var Trending_1 = require("../styles/Trending");
var api_client_1 = require("../utils/api-client");
var TrendingSkeleton_1 = require("../skeletons/TrendingSkeleton");
var ErrorMessage_1 = require("../components/ErrorMessage");
var TrendingCard_1 = require("../components/TrendingCard");
function Trending() {
    var _a = react_query_1.useQuery('TrendingVideos,', function () {
        return api_client_1.client.get('/videos/trending').then(function (res) { return res.data.videos; });
    }), videos = _a.data, isLoading = _a.isLoading, isError = _a.isError, isSuccess = _a.isSuccess, error = _a.error;
    if (isLoading)
        return react_1.default.createElement(TrendingSkeleton_1.default, null);
    if (isError)
        return react_1.default.createElement(ErrorMessage_1.default, { error: error });
    return (react_1.default.createElement(Trending_1.default, null, isSuccess
        ? videos.map(function (video) { return react_1.default.createElement(TrendingCard_1.default, { key: video.id, video: video }); })
        : null));
}
exports.default = Trending;
