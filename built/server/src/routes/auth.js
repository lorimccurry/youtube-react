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
exports.getAuthRoutes = void 0;
var client_1 = require("@prisma/client");
var express_1 = require("express");
var jsonwebtoken_1 = require("jsonwebtoken");
var authorization_1 = require("../middleware/authorization");
var google_auth_library_1 = require("google-auth-library");
var client = new google_auth_library_1.OAuth2Client(process.env.GOOGLE_CLIENT_ID);
var prisma = new client_1.PrismaClient();
// A function to get the routes.
// All route definitions are in one place and we only need to export one thing
function getAuthRoutes() {
    var router = express_1.default.Router();
    router.post('/google-login', googleLogin);
    router.get('/me', authorization_1.protect, me);
    router.get('/signout', signout);
    return router;
}
exports.getAuthRoutes = getAuthRoutes;
// All controllers/utility functions here
function googleLogin(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var idToken, ticket, _a, name, picture, email, user, tokenPayload, token;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    idToken = req.body.idToken;
                    return [4 /*yield*/, client.verifyIdToken({
                            idToken: idToken,
                            audience: process.env.GOOGLE_CLIENT_ID
                        })];
                case 1:
                    ticket = _b.sent();
                    _a = ticket.getPayload(), name = _a.name, picture = _a.picture, email = _a.email;
                    return [4 /*yield*/, prisma.user.findUnique({
                            where: {
                                email: email
                            }
                        })];
                case 2:
                    user = _b.sent();
                    if (!!user) return [3 /*break*/, 4];
                    return [4 /*yield*/, prisma.user.create({
                            data: {
                                email: email,
                                username: name,
                                avatar: picture
                            }
                        })];
                case 3:
                    user = _b.sent();
                    _b.label = 4;
                case 4:
                    tokenPayload = { id: user.id };
                    token = jsonwebtoken_1.default.sign(tokenPayload, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRE });
                    res.cookie('token', token, { httpOnly: true });
                    res.status(200).send(token);
                    return [2 /*return*/];
            }
        });
    });
}
function me(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        var subscriptions, channelIds, channels, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, prisma.subscription.findMany({
                        where: {
                            subscriberId: {
                                equals: req.user.id
                            }
                        }
                    })];
                case 1:
                    subscriptions = _a.sent();
                    channelIds = subscriptions.map(function (sub) { return sub.subscribedToId; });
                    return [4 /*yield*/, prisma.user.findMany({
                            where: {
                                id: {
                                    in: channelIds
                                }
                            }
                        })];
                case 2:
                    channels = _a.sent();
                    user = req.user;
                    user.channels = channels;
                    return [2 /*return*/, res.status(200).json({ user: user })];
            }
        });
    });
}
function signout(req, res) {
    res.clearCookie('token');
    res.status(200).json({});
}
