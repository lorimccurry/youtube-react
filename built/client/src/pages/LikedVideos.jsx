"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_query_1 = require("react-query");
var react_router_dom_1 = require("react-router-dom");
var auth_context_1 = require("../context/auth-context");
var api_client_1 = require("../utils/api-client");
var Icons_1 = require("../components/Icons");
var ErrorMessage_1 = require("../components/ErrorMessage");
var SignUpCard_1 = require("../components/SignUpCard");
var TrendingCard_1 = require("../components/TrendingCard");
var TrendingSkeleton_1 = require("../skeletons/TrendingSkeleton");
var Trending_1 = require("../styles/Trending");
function LikedVideos() {
    var user = auth_context_1.useAuth();
    var _a = react_query_1.useQuery('likedVideos,', function () { return api_client_1.client.get('/users/liked-videos').then(function (res) { return res.data.videos; }); }, {
        enabled: user,
    }), videos = _a.data, isLoading = _a.isLoading, isError = _a.isError, isSuccess = _a.isSuccess, error = _a.error;
    if (isLoading)
        return <TrendingSkeleton_1.default />;
    if (isError)
        return <ErrorMessage_1.default error={error}/>;
    if (!user) {
        return (<SignUpCard_1.default icon={<Icons_1.ChannelIcon />} title="Save everything you like" description="Videos that you have liked will show up here"/>);
    }
    return (<Trending_1.default>
      <h2>Liked Videos</h2>
      {isSuccess && !videos.length && (<p className="secondary">
          Videos that you have liked will show up here.
        </p>)}

      {isSuccess
        ? videos.map(function (video) { return (<react_router_dom_1.Link key={video.id} to={"/watch/" + video.id}>
              <TrendingCard_1.default video={video}/>
            </react_router_dom_1.Link>); })
        : null}
    </Trending_1.default>);
}
exports.default = LikedVideos;
