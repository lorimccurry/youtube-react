"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
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
exports.getUserRoutes = void 0;
var client_1 = require("@prisma/client");
var express_1 = require("express");
var authorization_1 = require("../middleware/authorization");
var video_1 = require("./video");
var prisma = new client_1.PrismaClient();
function getUserRoutes() {
    var router = express_1.default.Router();
    router.get('/', authorization_1.protect, getRecommendedChannels);
    router.put('/', authorization_1.protect, editUser);
    router.get('/liked-videos', authorization_1.protect, getLikedVideos);
    router.get('/history', authorization_1.protect, getHistory);
    router.get('/subscriptions', authorization_1.protect, getFeed);
    router.get('/search', authorization_1.getAuthUser, searchUser);
    router.get('/:userId', authorization_1.getAuthUser, getProfile);
    router.get('/:userId/toggle-subscribe', authorization_1.protect, toggleSubscribe);
    return router;
}
exports.getUserRoutes = getUserRoutes;
function getLikedVideos(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var model;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    model = 'videoLike';
                    return [4 /*yield*/, getVideos(model, req, res)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getHistory(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var model;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    model = 'view';
                    return [4 /*yield*/, getVideos(model, req, res)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function getVideos(model, req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var videoRelations, videoIds, videos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma[model].findMany({
                        where: {
                            userId: req.user.id,
                        },
                        orderBy: {
                            createdAt: 'desc',
                        },
                    })];
                case 1:
                    videoRelations = _a.sent();
                    videoIds = videoRelations.map(function (videoLike) {
                        return videoLike.videoId;
                    });
                    return [4 /*yield*/, prisma.video.findMany({
                            where: {
                                id: {
                                    in: videoIds,
                                },
                            },
                            include: {
                                user: true,
                            },
                        })];
                case 2:
                    videos = _a.sent();
                    if (!videos.length) {
                        return [2 /*return*/, res.status(200).json({ videos: videos })];
                    }
                    return [4 /*yield*/, video_1.getVideoViews(videos)];
                case 3:
                    videos = _a.sent();
                    return [2 /*return*/, res.status(200).json({ videos: videos })];
            }
        });
    });
}
function toggleSubscribe(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var targetUser, isSubscribed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (req.user.id === req.params.userId) {
                        return [2 /*return*/, next({
                                message: "You can't subscribe to your own channel.",
                                statusCode: 400,
                            })];
                    }
                    return [4 /*yield*/, prisma.user.findUnique({
                            where: {
                                id: req.params.userId,
                            },
                        })];
                case 1:
                    targetUser = _a.sent();
                    if (!targetUser) {
                        return [2 /*return*/, next({
                                message: "No user found with id: " + req.params.userId,
                                statusCode: 400,
                            })];
                    }
                    return [4 /*yield*/, prisma.subscription.findFirst({
                            where: {
                                subscriberId: {
                                    equals: req.user.id,
                                },
                                subscribedToId: {
                                    equals: req.params.userId,
                                },
                            },
                        })];
                case 2:
                    isSubscribed = _a.sent();
                    if (!isSubscribed) return [3 /*break*/, 4];
                    return [4 /*yield*/, prisma.subscription.delete({
                            where: {
                                id: isSubscribed.id,
                            },
                        })];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 6];
                case 4: return [4 /*yield*/, prisma.subscription.create({
                        data: {
                            subscriber: {
                                connect: {
                                    id: req.user.id,
                                },
                            },
                            subscribedTo: {
                                connect: {
                                    id: req.params.userId,
                                },
                            },
                        },
                    })];
                case 5:
                    _a.sent();
                    _a.label = 6;
                case 6:
                    res.status(200).json({});
                    return [2 /*return*/];
            }
        });
    });
}
function getFeed(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var subscriptions, subscribedToIds, feed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.subscription.findMany({
                        where: {
                            subscriberId: {
                                equals: req.user.id,
                            },
                        },
                    })];
                case 1:
                    subscriptions = _a.sent();
                    if (!subscriptions.length) {
                        return [2 /*return*/, res.status(200).json({ feed: subscriptions })];
                    }
                    subscribedToIds = subscriptions.map(function (subscription) { return subscription.subscribedToId; });
                    return [4 /*yield*/, prisma.video.findMany({
                            where: {
                                userId: {
                                    in: subscribedToIds,
                                },
                            },
                            include: {
                                user: true,
                            },
                            orderBy: {
                                createdAt: 'desc',
                            },
                        })];
                case 2:
                    feed = _a.sent();
                    if (!feed.length) {
                        return [2 /*return*/, res.status(200).json({ feed: feed })];
                    }
                    return [4 /*yield*/, video_1.getVideoViews(feed)];
                case 3:
                    feed = _a.sent();
                    return [2 /*return*/, res.status(200).json({ feed: feed })];
            }
        });
    });
}
function searchUser(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var users, _i, users_1, user, subscribersCount, videosCount, isMe, isSubscribed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!req.query.query) {
                        return [2 /*return*/, next({
                                message: 'Please enter a search query',
                                statusCode: 400,
                            })];
                    }
                    return [4 /*yield*/, prisma.user.findMany({
                            where: {
                                username: {
                                    contains: req.query.query,
                                    mode: 'insensitive',
                                },
                            },
                        })];
                case 1:
                    users = _a.sent();
                    if (!users.length) {
                        return [2 /*return*/, res.status(200).json({ users: users })];
                    }
                    _i = 0, users_1 = users;
                    _a.label = 2;
                case 2:
                    if (!(_i < users_1.length)) return [3 /*break*/, 7];
                    user = users_1[_i];
                    return [4 /*yield*/, prisma.subscription.count({
                            where: {
                                subscribedToId: {
                                    equals: user.id,
                                },
                            },
                        })];
                case 3:
                    subscribersCount = _a.sent();
                    return [4 /*yield*/, prisma.video.count({
                            where: {
                                userId: user.id,
                            },
                        })];
                case 4:
                    videosCount = _a.sent();
                    isMe = false;
                    isSubscribed = false;
                    if (!req.user) return [3 /*break*/, 6];
                    isMe = req.user.id === user.id;
                    return [4 /*yield*/, prisma.subscription.findFirst({
                            where: {
                                AND: {
                                    subscriberId: {
                                        equals: req.user.id,
                                    },
                                    subscribedToId: {
                                        equals: user.id,
                                    },
                                },
                            },
                        })];
                case 5:
                    isSubscribed = _a.sent();
                    user.subscribersCount = subscribersCount;
                    user.videosCount = videosCount;
                    user.isMe = isMe;
                    user.isSubscribed = Boolean(isSubscribed);
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7: return [2 /*return*/, res.status(200).json({ users: users })];
            }
        });
    });
}
function getRecommendedChannels(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var channels, _i, channels_1, channel, subscribersCount, videosCount, isSubscribed;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.user.findMany({
                        where: {
                            id: {
                                not: req.user.id,
                            },
                        },
                        take: 10,
                    })];
                case 1:
                    channels = _a.sent();
                    if (!channels.length) {
                        return [2 /*return*/, res.status(200).json({ channels: channels })];
                    }
                    _i = 0, channels_1 = channels;
                    _a.label = 2;
                case 2:
                    if (!(_i < channels_1.length)) return [3 /*break*/, 7];
                    channel = channels_1[_i];
                    return [4 /*yield*/, prisma.subscription.count({
                            where: {
                                subscribedToId: {
                                    equals: channel.id,
                                },
                            },
                        })];
                case 3:
                    subscribersCount = _a.sent();
                    return [4 /*yield*/, prisma.video.count({
                            where: {
                                userId: channel.id,
                            },
                        })];
                case 4:
                    videosCount = _a.sent();
                    return [4 /*yield*/, prisma.subscription.findFirst({
                            where: {
                                AND: {
                                    subscriberId: {
                                        equals: req.user.id,
                                    },
                                    subscribedToId: {
                                        equals: channel.id,
                                    },
                                },
                            },
                        })];
                case 5:
                    isSubscribed = _a.sent();
                    channel.subscribersCount = subscribersCount;
                    channel.videosCount = videosCount;
                    channel.isSubscribed = Boolean(isSubscribed);
                    _a.label = 6;
                case 6:
                    _i++;
                    return [3 /*break*/, 2];
                case 7:
                    res.status(200).json({ channels: channels });
                    return [2 /*return*/];
            }
        });
    });
}
function getProfile(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var user, subscribersCount, videosCount, isMe, isSubscribed, subscriptions, subscribedToIds, channels, _i, channels_2, channel, subscribersCount_1, videos, _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, prisma.user.findUnique({
                        where: {
                            id: req.params.userId,
                        },
                    })];
                case 1:
                    user = _b.sent();
                    if (!user) {
                        return [2 /*return*/, next({
                                message: "No user found with id: " + req.params.userId,
                                statusCode: 400,
                            })];
                    }
                    return [4 /*yield*/, prisma.subscription.count({
                            where: {
                                subscribedToId: {
                                    equals: user.id,
                                },
                            },
                        })];
                case 2:
                    subscribersCount = _b.sent();
                    return [4 /*yield*/, prisma.video.count({
                            where: {
                                userId: user.id,
                            },
                        })];
                case 3:
                    videosCount = _b.sent();
                    isMe = false;
                    isSubscribed = false;
                    if (!req.user) return [3 /*break*/, 5];
                    isMe = req.user.id === user.id;
                    return [4 /*yield*/, prisma.subscription.findFirst({
                            where: {
                                AND: {
                                    subscriberId: {
                                        equals: req.user.id,
                                    },
                                    subscribedToId: {
                                        equals: user.id,
                                    },
                                },
                            },
                        })];
                case 4:
                    isSubscribed = _b.sent();
                    _b.label = 5;
                case 5: return [4 /*yield*/, prisma.subscription.findMany({
                        where: {
                            subscriberId: {
                                equals: user.id,
                            },
                        },
                    })];
                case 6:
                    subscriptions = _b.sent();
                    subscribedToIds = subscriptions.map(function (subscription) { return subscription.subscribedToId; });
                    return [4 /*yield*/, prisma.user.findMany({
                            where: {
                                id: {
                                    in: subscribedToIds,
                                },
                            },
                        })];
                case 7:
                    channels = _b.sent();
                    _i = 0, channels_2 = channels;
                    _b.label = 8;
                case 8:
                    if (!(_i < channels_2.length)) return [3 /*break*/, 11];
                    channel = channels_2[_i];
                    return [4 /*yield*/, prisma.subscription.count({
                            where: {
                                subscribedToId: {
                                    equals: channel.id,
                                },
                            },
                        })];
                case 9:
                    subscribersCount_1 = _b.sent();
                    channel.subscribersCount = subscribersCount_1;
                    _b.label = 10;
                case 10:
                    _i++;
                    return [3 /*break*/, 8];
                case 11: return [4 /*yield*/, prisma.video.findMany({
                        where: {
                            userId: {
                                equals: user.id,
                            },
                        },
                        orderBy: {
                            createdAt: 'desc',
                        },
                    })];
                case 12:
                    videos = _b.sent();
                    user = __assign(__assign({}, user), { subscribersCount: subscribersCount,
                        isMe: isMe,
                        channels: channels,
                        videos: videos, isSubscribed: Boolean(isSubscribed) });
                    if (!videos.length) {
                        return [2 /*return*/, res.status(200).json({ user: user })];
                    }
                    _a = user;
                    return [4 /*yield*/, video_1.getVideoViews(videos)];
                case 13:
                    _a.videos = _b.sent();
                    return [2 /*return*/, res.status(200).json({ user: user })];
            }
        });
    });
}
function editUser(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, username, cover, avatar, about, user;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, username = _a.username, cover = _a.cover, avatar = _a.avatar, about = _a.about;
                    return [4 /*yield*/, prisma.user.update({
                            where: {
                                id: req.user.id,
                            },
                            data: {
                                username: username,
                                cover: cover,
                                avatar: avatar,
                                about: about,
                            },
                        })];
                case 1:
                    user = _b.sent();
                    return [2 /*return*/, res.status(200).json({ user: user })];
            }
        });
    });
}
