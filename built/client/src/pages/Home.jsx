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
        return <HomeSkeleton_1.default />;
    if (isError)
        return <ErrorMessage_1.default error={error}/>;
    return (<Home_1.default>
      <VideoGrid_1.default>
        {isSuccess
        ? videos.map(function (video) { return <VideoCard_1.default key={video.id} video={video}/>; })
        : null}
      </VideoGrid_1.default>
    </Home_1.default>);
}
exports.default = Home;
