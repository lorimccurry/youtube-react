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
var react_simple_snackbar_1 = require("react-simple-snackbar");
var upload_media_1 = require("../utils/upload-media");
var Icons_1 = require("./Icons");
var UploadVideoModal_1 = require("./UploadVideoModal");
var path_1 = require("path");
function UploadVideo() {
    var _a = react_1.default.useState(false), showModal = _a[0], setShowModal = _a[1];
    var _b = react_1.default.useState(''), previewVideo = _b[0], setPreviewVideo = _b[1];
    var _c = react_1.default.useState(''), thumbnail = _c[0], setThumbnail = _c[1];
    var _d = react_1.default.useState(''), url = _d[0], setUrl = _d[1];
    var _e = react_1.default.useState(''), defaultTitle = _e[0], setDefaultTitle = _e[1];
    var _f = react_simple_snackbar_1.useSnackbar(), openSnackbar = _f[0], closeSnackbar = _f[1];
    var closeModal = function () { return setShowModal(false); };
    function handleUploadVideo(event) {
        return __awaiter(this, void 0, void 0, function () {
            var file, defaultTitle, fileSize, previewVideo_1, url_1, extension;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.persist();
                        file = event.target.files[0];
                        defaultTitle = path_1.default.basename(file.name, path_1.default.extname(file.name));
                        setDefaultTitle(defaultTitle);
                        if (!file) return [3 /*break*/, 2];
                        fileSize = file.size / 1000000;
                        if (fileSize > 50) {
                            return [2 /*return*/, openSnackbar('Video file should be less than 50MB.')];
                        }
                        previewVideo_1 = URL.createObjectURL(file);
                        setPreviewVideo(previewVideo_1);
                        setShowModal(true);
                        return [4 /*yield*/, upload_media_1.uploadMedia({
                                type: 'video',
                                file: file,
                                preset: 'vuwar6ys',
                            })];
                    case 1:
                        url_1 = _a.sent();
                        extension = path_1.default.extname(url_1);
                        setThumbnail(url_1.replace(extension, '.jpg'));
                        event.target.value = '';
                        setUrl(url_1);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    return (react_1.default.createElement("div", null,
        react_1.default.createElement("label", { htmlFor: "video-upload" },
            react_1.default.createElement(Icons_1.UploadIcon, null)),
        react_1.default.createElement("input", { style: { display: 'none' }, id: "video-upload", type: "file", accept: "video/*", onChange: handleUploadVideo }),
        showModal && (react_1.default.createElement(UploadVideoModal_1.default, { previewVideo: previewVideo, thumbnail: thumbnail, url: url, defaultTitle: defaultTitle, closeModal: closeModal }))));
}
exports.default = UploadVideo;
