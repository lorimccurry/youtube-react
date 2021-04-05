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
exports.getVideoRoutes = exports.getVideoViews = void 0;
var express_1 = require("express");
var client_1 = require("@prisma/client");
var authorization_1 = require("../middleware/authorization");
var prisma = new client_1.PrismaClient();
function getVideoRoutes() {
    var router = express_1.default.Router();
    router.get('/', getRecommendedVideos);
    router.post('/', authorization_1.protect, addVideo);
    router.get('/trending', getTrendingVideos);
    router.get('/search', searchVideos);
    router.get('/:videoId', authorization_1.getAuthUser, getVideo);
    router.delete('/:videoId', authorization_1.protect, deleteVideo);
    router.get('/:videoId/view', authorization_1.getAuthUser, addVideoView);
    router.get('/:videoId/like', authorization_1.protect, likeVideo);
    router.get('/:videoId/dislike', authorization_1.protect, dislikeVideo);
    router.post('/:videoId/comments', authorization_1.protect, addComment);
    router.delete('/:videoId/comments/:commentId', authorization_1.protect, deleteComment);
    return router;
}
exports.getVideoRoutes = getVideoRoutes;
function getVideoViews(videos) {
    return __awaiter(this, void 0, void 0, function () {
        var _i, videos_1, video, views;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _i = 0, videos_1 = videos;
                    _a.label = 1;
                case 1:
                    if (!(_i < videos_1.length)) return [3 /*break*/, 4];
                    video = videos_1[_i];
                    return [4 /*yield*/, prisma.view.count({
                            where: {
                                videoId: {
                                    equals: video.id,
                                },
                            },
                        })];
                case 2:
                    views = _a.sent();
                    video.views = views;
                    _a.label = 3;
                case 3:
                    _i++;
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/, videos];
            }
        });
    });
}
exports.getVideoViews = getVideoViews;
function getRecommendedVideos(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var videos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.video.findMany({
                        include: {
                            user: true,
                        },
                        orderBy: {
                            createdAt: 'desc',
                        },
                    })];
                case 1:
                    videos = _a.sent();
                    if (!videos.length) {
                        return [2 /*return*/, res.status(200).json({ videos: videos })];
                    }
                    return [4 /*yield*/, getVideoViews(videos)];
                case 2:
                    videos = _a.sent();
                    res.status(200).json({ videos: videos });
                    return [2 /*return*/];
            }
        });
    });
}
function getTrendingVideos(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var videos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.video.findMany({
                        include: {
                            user: true,
                        },
                        orderBy: {
                            createdAt: 'desc',
                        },
                    })];
                case 1:
                    videos = _a.sent();
                    if (!videos.length) {
                        return [2 /*return*/, res.status(200).json({ videos: videos })];
                    }
                    return [4 /*yield*/, getVideoViews(videos)];
                case 2:
                    videos = _a.sent();
                    videos.sort(function (a, b) { return b.views - a.views; });
                    res.status(200).json({ videos: videos });
                    return [2 /*return*/];
            }
        });
    });
}
function searchVideos(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var videos;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!req.query.query) {
                        return [2 /*return*/, next({
                                message: 'Please enter a search query',
                                statusCode: 400,
                            })];
                    }
                    return [4 /*yield*/, prisma.video.findMany({
                            include: {
                                user: true,
                            },
                            where: {
                                OR: [
                                    {
                                        title: {
                                            contains: req.query.query,
                                            mode: 'insensitive',
                                        },
                                    },
                                    {
                                        description: {
                                            contains: req.query.query,
                                            mode: 'insensitive',
                                        },
                                    },
                                ],
                            },
                        })];
                case 1:
                    videos = _a.sent();
                    if (!videos.length) {
                        return [2 /*return*/, res.status(200).json({ videos: videos })];
                    }
                    return [4 /*yield*/, getVideoViews(videos)];
                case 2:
                    videos = _a.sent();
                    res.status(200).json({ videos: videos });
                    return [2 /*return*/];
            }
        });
    });
}
function addVideo(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, title, description, url, thumbnail, video;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = req.body, title = _a.title, description = _a.description, url = _a.url, thumbnail = _a.thumbnail;
                    return [4 /*yield*/, prisma.video.create({
                            data: {
                                title: title,
                                description: description,
                                url: url,
                                thumbnail: thumbnail,
                                user: {
                                    connect: {
                                        id: req.user.id,
                                    },
                                },
                            },
                        })];
                case 1:
                    video = _b.sent();
                    res.status(200).json({ video: video });
                    return [2 /*return*/];
            }
        });
    });
}
function addComment(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var video, comment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.video.findUnique({
                        where: {
                            id: req.params.videoId,
                        },
                    })];
                case 1:
                    video = _a.sent();
                    if (!video) {
                        return [2 /*return*/, next({
                                message: "No video found with id: \"" + req.params.videoId + "\"",
                                statusCode: 404,
                            })];
                    }
                    return [4 /*yield*/, prisma.comment.create({
                            data: {
                                text: req.body.text,
                                user: {
                                    connect: {
                                        id: req.user.id,
                                    },
                                },
                                video: {
                                    connect: {
                                        id: video.id,
                                    },
                                },
                            },
                        })];
                case 2:
                    comment = _a.sent();
                    res.status(200).json({ comment: comment });
                    return [2 /*return*/];
            }
        });
    });
}
function deleteComment(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var comment;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.comment.findUnique({
                        where: {
                            id: req.params.commentId,
                        },
                        select: {
                            userId: true,
                        },
                    })];
                case 1:
                    comment = _a.sent();
                    if (comment.userId !== req.user.id) {
                        return [2 /*return*/, res
                                .status(401)
                                .send('You are not authorized to delete this comment.')];
                    }
                    return [4 /*yield*/, prisma.comment.delete({
                            where: {
                                id: req.params.commentId,
                            },
                        })];
                case 2:
                    _a.sent();
                    res.status(200).json({});
                    return [2 /*return*/];
            }
        });
    });
}
function addVideoView(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var video;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.video.findUnique({
                        where: {
                            id: req.params.videoId,
                        },
                    })];
                case 1:
                    video = _a.sent();
                    if (!video) {
                        return [2 /*return*/, next({
                                message: "No video found with id: \"" + req.params.videoId + "\"",
                                statusCode: 404,
                            })];
                    }
                    if (!req.user) return [3 /*break*/, 3];
                    return [4 /*yield*/, prisma.view.create({
                            data: {
                                video: {
                                    connect: {
                                        id: req.params.videoId,
                                    },
                                },
                                user: {
                                    connect: {
                                        id: req.user.id,
                                    },
                                },
                            },
                        })];
                case 2:
                    _a.sent();
                    return [3 /*break*/, 5];
                case 3: return [4 /*yield*/, prisma.view.create({
                        data: {
                            video: {
                                connect: {
                                    id: req.params.videoId,
                                },
                            },
                        },
                    })];
                case 4:
                    _a.sent();
                    _a.label = 5;
                case 5:
                    res.status(200).json({});
                    return [2 /*return*/];
            }
        });
    });
}
function likeVideo(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var video, isLiked, isDisliked;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.video.findUnique({
                        where: {
                            id: req.params.videoId,
                        },
                    })];
                case 1:
                    video = _a.sent();
                    if (!video) {
                        return [2 /*return*/, next({
                                message: "No video found with id: \"" + req.params.videoId + "\"",
                                statusCode: 404,
                            })];
                    }
                    return [4 /*yield*/, prisma.videoLike.findFirst({
                            where: {
                                userId: {
                                    equals: req.user.id,
                                },
                                videoId: {
                                    equals: req.params.videoId,
                                },
                                like: {
                                    equals: 1,
                                },
                            },
                        })];
                case 2:
                    isLiked = _a.sent();
                    return [4 /*yield*/, prisma.videoLike.findFirst({
                            where: {
                                userId: {
                                    equals: req.user.id,
                                },
                                videoId: {
                                    equals: req.params.videoId,
                                },
                                like: {
                                    equals: -1,
                                },
                            },
                        })];
                case 3:
                    isDisliked = _a.sent();
                    if (!isLiked) return [3 /*break*/, 5];
                    return [4 /*yield*/, prisma.videoLike.delete({
                            where: {
                                id: isLiked.id,
                            },
                        })];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 5:
                    if (!isDisliked) return [3 /*break*/, 7];
                    return [4 /*yield*/, prisma.videoLike.update({
                            where: {
                                id: isDisliked.id,
                            },
                            data: {
                                like: 1,
                            },
                        })];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, prisma.videoLike.create({
                        data: {
                            user: {
                                connect: {
                                    id: req.user.id,
                                },
                            },
                            video: {
                                connect: {
                                    id: req.params.videoId,
                                },
                            },
                            like: 1,
                        },
                    })];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    res.status(200).json({});
                    return [2 /*return*/];
            }
        });
    });
}
function dislikeVideo(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var video, isLiked, isDisliked;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.video.findUnique({
                        where: {
                            id: req.params.videoId,
                        },
                    })];
                case 1:
                    video = _a.sent();
                    if (!video) {
                        return [2 /*return*/, next({
                                message: "No video found with id: \"" + req.params.videoId + "\"",
                                statusCode: 404,
                            })];
                    }
                    return [4 /*yield*/, prisma.videoLike.findFirst({
                            where: {
                                userId: {
                                    equals: req.user.id,
                                },
                                videoId: {
                                    equals: req.params.videoId,
                                },
                                like: {
                                    equals: 1,
                                },
                            },
                        })];
                case 2:
                    isLiked = _a.sent();
                    return [4 /*yield*/, prisma.videoLike.findFirst({
                            where: {
                                userId: {
                                    equals: req.user.id,
                                },
                                videoId: {
                                    equals: req.params.videoId,
                                },
                                like: {
                                    equals: -1,
                                },
                            },
                        })];
                case 3:
                    isDisliked = _a.sent();
                    if (!isDisliked) return [3 /*break*/, 5];
                    return [4 /*yield*/, prisma.videoLike.delete({
                            where: {
                                id: isDisliked.id,
                            },
                        })];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 5:
                    if (!isLiked) return [3 /*break*/, 7];
                    return [4 /*yield*/, prisma.videoLike.update({
                            where: {
                                id: isLiked.id,
                            },
                            data: {
                                like: -1,
                            },
                        })];
                case 6:
                    _a.sent();
                    return [3 /*break*/, 9];
                case 7: return [4 /*yield*/, prisma.videoLike.create({
                        data: {
                            user: {
                                connect: {
                                    id: req.user.id,
                                },
                            },
                            video: {
                                connect: {
                                    id: req.params.videoId,
                                },
                            },
                            like: -1,
                        },
                    })];
                case 8:
                    _a.sent();
                    _a.label = 9;
                case 9:
                    res.status(200).json({});
                    return [2 /*return*/];
            }
        });
    });
}
function getVideo(req, res, next) {
    return __awaiter(this, void 0, void 0, function () {
        var video, isVideoMine, isLiked, isDisliked, isSubscribed, isViewed, likesCount, dislikesCount, views, subscribersCount;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.video.findUnique({
                        where: {
                            id: req.params.videoId,
                        },
                        include: {
                            user: true,
                            comments: {
                                include: {
                                    user: true,
                                },
                                orderBy: {
                                    createdAt: 'desc',
                                },
                            },
                        },
                    })];
                case 1:
                    video = _a.sent();
                    if (!video) {
                        return [2 /*return*/, next({
                                message: "No video found with id: \"" + req.params.videoId + "\"",
                                statusCode: 404,
                            })];
                    }
                    isVideoMine = false;
                    isLiked = false;
                    isDisliked = false;
                    isSubscribed = false;
                    isViewed = false;
                    if (!req.user) return [3 /*break*/, 6];
                    isVideoMine = req.user.id === video.userId;
                    return [4 /*yield*/, prisma.videoLike.findFirst({
                            where: {
                                userId: {
                                    equals: req.user.id,
                                },
                                videoId: {
                                    equals: req.params.videoId,
                                },
                                like: {
                                    equals: 1,
                                },
                            },
                        })];
                case 2:
                    isLiked = _a.sent();
                    return [4 /*yield*/, prisma.videoLike.findFirst({
                            where: {
                                userId: {
                                    equals: req.user.id,
                                },
                                videoId: {
                                    equals: req.params.videoId,
                                },
                                like: {
                                    equals: -1,
                                },
                            },
                        })];
                case 3:
                    isDisliked = _a.sent();
                    return [4 /*yield*/, prisma.view.findFirst({
                            where: {
                                userId: {
                                    equals: req.user.id,
                                },
                                videoId: {
                                    equals: video.id,
                                },
                            },
                        })];
                case 4:
                    isViewed = _a.sent();
                    return [4 /*yield*/, prisma.subscription.findFirst({
                            where: {
                                subscriberId: {
                                    equals: req.user.id,
                                },
                                subscribedToId: {
                                    equals: video.userId,
                                },
                            },
                        })];
                case 5:
                    isSubscribed = _a.sent();
                    _a.label = 6;
                case 6: return [4 /*yield*/, prisma.videoLike.count({
                        where: {
                            AND: {
                                videoId: {
                                    equals: req.params.videoId,
                                },
                                like: {
                                    equals: 1,
                                },
                            },
                        },
                    })];
                case 7:
                    likesCount = _a.sent();
                    return [4 /*yield*/, prisma.videoLike.count({
                            where: {
                                AND: {
                                    videoId: {
                                        equals: req.params.videoId,
                                    },
                                    like: {
                                        equals: -1,
                                    },
                                },
                            },
                        })];
                case 8:
                    dislikesCount = _a.sent();
                    return [4 /*yield*/, prisma.view.count({
                            where: {
                                videoId: {
                                    equals: video.id,
                                },
                            },
                        })];
                case 9:
                    views = _a.sent();
                    return [4 /*yield*/, prisma.subscription.count({
                            where: {
                                subscribedToId: {
                                    equals: video.userId,
                                },
                            },
                        })];
                case 10:
                    subscribersCount = _a.sent();
                    video = __assign(__assign({}, video), { views: views, commentsCount: video.comments.length, isLiked: Boolean(isLiked), isDisliked: Boolean(isDisliked), likesCount: likesCount, dislikesCount: dislikesCount, isVideoMine: isVideoMine, isSubscribed: Boolean(isSubscribed), isViewed: Boolean(isViewed), subscribersCount: subscribersCount });
                    res.status(200).json({ video: video });
                    return [2 /*return*/];
            }
        });
    });
}
function deleteVideo(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var video;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.video.findUnique({
                        where: {
                            id: req.params.videoId,
                        },
                        select: {
                            userId: true,
                        },
                    })];
                case 1:
                    video = _a.sent();
                    if (req.user.id !== video.userId) {
                        return [2 /*return*/, res.status(401).send('You are not authorized to delete this video.')];
                    }
                    return [4 /*yield*/, prisma.view.deleteMany({
                            where: {
                                videoId: {
                                    equals: req.params.videoId,
                                },
                            },
                        })];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, prisma.videoLike.deleteMany({
                            where: {
                                videoId: {
                                    equals: req.params.videoId,
                                },
                            },
                        })];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, prisma.comment.deleteMany({
                            where: {
                                videoId: {
                                    equals: req.params.videoId,
                                },
                            },
                        })];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, prisma.video.delete({
                            where: {
                                id: req.params.videoId,
                            },
                        })];
                case 5:
                    _a.sent();
                    res.status(200).json({});
                    return [2 /*return*/];
            }
        });
    });
}
