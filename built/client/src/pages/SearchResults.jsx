"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var react_query_1 = require("react-query");
var react_router_1 = require("react-router");
var styled_components_1 = require("styled-components");
var NoResults_1 = require("../components/NoResults");
var Trending_1 = require("../styles/Trending");
var api_client_1 = require("../utils/api-client");
var TrendingSkeleton_1 = require("../skeletons/TrendingSkeleton");
var ErrorMessage_1 = require("../components/ErrorMessage");
var TrendingCard_1 = require("../components/TrendingCard");
var ChannelInfo_1 = require("../components/ChannelInfo");
var StyledChannels = styled_components_1.default.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-top: 1rem;\n"], ["\n  margin-top: 1rem;\n"])));
function SearchResults() {
    var _this = this;
    var _a;
    var searchQuery = react_router_1.useParams().searchQuery;
    var _b = react_query_1.useQuery(['SearchResults', searchQuery], function () { return __awaiter(_this, void 0, void 0, function () {
        var users, videos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, api_client_1.client
                        .get("/users/search?query=" + searchQuery)
                        .then(function (res) { return res.data.users; })];
                case 1:
                    users = _a.sent();
                    return [4 /*yield*/, api_client_1.client
                            .get("/videos/search?query=" + searchQuery)
                            .then(function (res) { return res.data.videos; })];
                case 2:
                    videos = _a.sent();
                    return [2 /*return*/, { users: users, videos: videos }];
            }
        });
    }); }), data = _b.data, isLoading = _b.isLoading, isError = _b.isError, error = _b.error, isSuccess = _b.isSuccess;
    if (isLoading)
        return <TrendingSkeleton_1.default />;
    if (isError)
        return <ErrorMessage_1.default error={error}/>;
    var hasNoResults = true;
    if (isSuccess && !((_a = data.videos) === null || _a === void 0 ? void 0 : _a.length) && !data.users.length) {
        return (<NoResults_1.default title="No results found" text="Try different keywords or remove search filters"/>);
    }
    return (<Trending_1.default>
      <h2>Search Results</h2>
      <StyledChannels>
        {isSuccess
        ? data.users.map(function (channel) { return (<ChannelInfo_1.default key={channel.id} channel={channel}/>); })
        : null}
      </StyledChannels>
      {isSuccess
        ? data.videos.map(function (video) { return (<TrendingCard_1.default key={video.id} video={video}/>); })
        : null}
    </Trending_1.default>);
}
exports.default = SearchResults;
var templateObject_1;
