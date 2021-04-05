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
var react_1 = require("react");
var react_router_1 = require("react-router");
var react_simple_snackbar_1 = require("react-simple-snackbar");
var Button_1 = require("../styles/Button");
var UploadVideoModal_1 = require("../styles/UploadVideoModal");
var api_client_1 = require("../utils/api-client");
var Icons_1 = require("./Icons");
var VideoPlayer_1 = require("./VideoPlayer");
var auth_context_1 = require("../context/auth-context");
function UploadVideoModal(_a) {
    var previewVideo = _a.previewVideo, thumbnail = _a.thumbnail, url = _a.url, defaultTitle = _a.defaultTitle, closeModal = _a.closeModal;
    var user = auth_context_1.useAuth();
    var history = react_router_1.useHistory();
    var openSnackbar = react_simple_snackbar_1.useSnackbar()[0];
    var _b = react_1.default.useState('PREVIEW'), tab = _b[0], setTab = _b[1];
    var _c = react_1.default.useState(defaultTitle), title = _c[0], setTitle = _c[1];
    var _d = react_1.default.useState(''), description = _d[0], setDescription = _d[1];
    function handleTab() {
        return __awaiter(this, void 0, void 0, function () {
            var video;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(tab === 'PREVIEW')) return [3 /*break*/, 1];
                        setTab('FORM');
                        return [3 /*break*/, 3];
                    case 1:
                        console.log(!description.trim(), 'desc trim');
                        if (!title.trim() || !description.trim()) {
                            return [2 /*return*/, openSnackbar('Please fill in all the fields.')];
                        }
                        video = {
                            title: title,
                            description: description,
                            url: url,
                            thumbnail: thumbnail,
                        };
                        return [4 /*yield*/, api_client_1.addVideo(video)];
                    case 2:
                        _a.sent();
                        closeModal();
                        openSnackbar('Video published!');
                        history.push("/channel/" + user.id);
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1.default.createElement(UploadVideoModal_1.default, null,
        react_1.default.createElement("div", { className: "modal-content" },
            react_1.default.createElement("div", { className: "modal-header" },
                react_1.default.createElement("div", { className: "modal-header-left" },
                    react_1.default.createElement(Icons_1.CloseIcon, { onClick: closeModal }),
                    react_1.default.createElement("h3", null, url ? 'Video uploaded!' : 'Uploading...')),
                react_1.default.createElement("div", { style: { display: url ? 'block' : 'none' } },
                    react_1.default.createElement(Button_1.default, { onClick: handleTab }, tab === 'PREVIEW' ? 'Next' : 'Upload'))),
            tab === 'PREVIEW' && (react_1.default.createElement("div", { className: "tab video-preview" },
                react_1.default.createElement(VideoPlayer_1.default, { previewUrl: previewVideo, video: url }))),
            tab === 'FORM' && (react_1.default.createElement("div", { className: "tab video-form" },
                react_1.default.createElement("h2", null, "Video Details"),
                react_1.default.createElement("input", { type: "text", placeholder: "Enter your video title", value: title, onChange: function (event) { return setTitle(event.target.value); } }),
                react_1.default.createElement("textarea", { placeholder: "Tell viewers about your video", value: description, onChange: function (event) { return setDescription(event.target.value); } }))))));
}
exports.default = UploadVideoModal;
