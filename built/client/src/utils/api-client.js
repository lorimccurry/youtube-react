"use strict";
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
exports.deleteComment = exports.deleteVideo = exports.dislikeVideo = exports.likeVideo = exports.toggleSubscribeUser = exports.addVideo = exports.addComment = exports.addVideoView = exports.updateUser = exports.signoutUser = exports.authenticate = exports.client = void 0;
var axios_1 = require("axios");
var react_query_1 = require("react-query");
exports.client = axios_1.default.create({
    baseURL: '/api/v1',
});
function authenticate(response) {
    exports.client({
        method: 'POST',
        url: '/auth/google-login',
        data: { idToken: response.tokenId },
    })
        .then(function (res) {
        console.log("Signin success: " + response);
        window.location.assign(window.location.href);
    })
        .catch(function (error) {
        console.log("Sign in error: " + error.response);
    });
}
exports.authenticate = authenticate;
function signoutUser() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.client.get('/auth/signout')];
                case 1:
                    _a.sent();
                    window.location.pathname = '/';
                    return [2 /*return*/];
            }
        });
    });
}
exports.signoutUser = signoutUser;
function updateUser(user) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.client.put("/users", user)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries(['Channel'])];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.updateUser = updateUser;
function addVideoView(videoId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.client.get("/videos/" + videoId + "/view")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries('History')];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.addVideoView = addVideoView;
function addComment(_a) {
    var video = _a.video, comment = _a.comment;
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, exports.client.post("/videos/" + video.id + "/comments", { text: comment })];
                case 1:
                    _b.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries(['WatchVideo', video.id])];
                case 2:
                    _b.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.addComment = addComment;
function addVideo(video) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.client.post('/videos', video)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries('Channel')];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.addVideo = addVideo;
function toggleSubscribeUser(userId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.client.get("/users/" + userId + "/toggle-subscribe")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries('Channel')];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries('Channels')];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries('Subscriptions')];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries('AuthProvider')];
                case 5:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries('WatchVideo')];
                case 6:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries('SearchResults')];
                case 7:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.toggleSubscribeUser = toggleSubscribeUser;
function likeVideo(videoId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.client.get("/videos/" + videoId + "/like")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries(['WatchVideo', videoId])];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.likeVideo = likeVideo;
function dislikeVideo(videoId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.client.get("/videos/" + videoId + "/dislike")];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries(['WatchVideo', videoId])];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.dislikeVideo = dislikeVideo;
function deleteVideo(videoId) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.client.delete("/videos/" + videoId)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries('Channel')];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteVideo = deleteVideo;
function deleteComment(comment) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, exports.client.delete("/videos/" + comment.videoId + "/comments/" + comment.id)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, react_query_1.queryCache.invalidateQueries('WatchVideo')];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
exports.deleteComment = deleteComment;
