"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_query_1 = require("react-query");
var ErrorMessage_1 = require("../components/ErrorMessage");
var VideoCard_1 = require("../components/VideoCard");
var HomeSkeleton_1 = require("../skeletons/HomeSkeleton");
var Home_1 = require("../styles/Home");
var VideoGrid_1 = require("../styles/VideoGrid");
var api_client_1 = require("../utils/api-client");
function Home() {
    var _a = react_query_1.useQuery('Home', function () {
        return api_client_1.client.get('/videos').then(function (res) { return res.data.videos; });
    }), videos = _a.data, isSuccess = _a.isSuccess, isLoading = _a.isLoading, isError = _a.isError, error = _a.error;
    if (isLoading)
        return react_1.default.createElement(HomeSkeleton_1.default, null);
    if (isError)
        return react_1.default.createElement(ErrorMessage_1.default, { error: error });
    return (react_1.default.createElement(Home_1.default, null,
        react_1.default.createElement(VideoGrid_1.default, null, isSuccess
            ? videos.map(function (video) { return react_1.default.createElement(VideoCard_1.default, { key: video.id, video: video }); })
            : null)));
}
exports.default = Home;
