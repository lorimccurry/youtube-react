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
        return (react_1.default.createElement(SignUpCard_1.default, { icon: react_1.default.createElement(Icons_1.HistoryIcon, null), title: "Keep track of what you watch", description: "Watch history isn't viewable when signed out" }));
    }
    if (isLoading)
        return react_1.default.createElement(TrendingSkeleton_1.default, null);
    if (isError)
        return react_1.default.createElement(ErrorMessage_1.default, { error: error });
    return (react_1.default.createElement(Trending_1.default, { noPad: true },
        react_1.default.createElement("h2", null, "History"),
        isSuccess && !videos.length && (react_1.default.createElement("p", { className: "secondary" }, "Videos that you have watched will show up here.")),
        isSuccess
            ? videos.map(function (video) { return (react_1.default.createElement(react_router_dom_1.Link, { key: video.id, to: "/watch/" + video.id },
                react_1.default.createElement(TrendingCard_1.default, { video: video }))); })
            : null));
}
exports.default = History;
