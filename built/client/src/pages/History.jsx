"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var Icons_1 = require("../components/Icons");
var SignUpCard_1 = require("../components/SignUpCard");
var auth_context_1 = require("../context/auth-context");
var Trending_1 = require("../styles/Trending");
var api_client_1 = require("../utils/api-client");
var TrendingSkeleton_1 = require("../skeletons/TrendingSkeleton");
var ErrorMessage_1 = require("../components/ErrorMessage");
var react_router_dom_1 = require("react-router-dom");
var react_query_1 = require("react-query");
var TrendingCard_1 = require("../components/TrendingCard");
function History() {
    var user = auth_context_1.useAuth();
    var _a = react_query_1.useQuery('History', function () { return api_client_1.client.get('/users/history').then(function (res) { return res.data.videos; }); }, { enabled: user }), videos = _a.data, isLoading = _a.isLoading, isError = _a.isError, isSuccess = _a.isSuccess, error = _a.error;
    if (!user) {
        return (<SignUpCard_1.default icon={<Icons_1.HistoryIcon />} title="Keep track of what you watch" description="Watch history isn't viewable when signed out"/>);
    }
    if (isLoading)
        return <TrendingSkeleton_1.default />;
    if (isError)
        return <ErrorMessage_1.default error={error}/>;
    return (<Trending_1.default noPad>
      <h2>History</h2>
      {isSuccess && !videos.length && (<p className="secondary">
          Videos that you have watched will show up here.
        </p>)}

      {isSuccess
        ? videos.map(function (video) { return (<react_router_dom_1.Link key={video.id} to={"/watch/" + video.id}>
              <TrendingCard_1.default video={video}/>
            </react_router_dom_1.Link>); })
        : null}
    </Trending_1.default>);
}
exports.default = History;
