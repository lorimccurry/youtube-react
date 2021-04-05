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
var Button_1 = require("../styles/Button");
var EditProfileModal_1 = require("../styles/EditProfileModal");
var api_client_1 = require("../utils/api-client");
var upload_media_1 = require("../utils/upload-media");
var Icons_1 = require("./Icons");
function EditProfileModal(_a) {
    var profile = _a.profile, closeModal = _a.closeModal;
    var _b = react_1.default.useState(profile.cover), cover = _b[0], setCover = _b[1];
    var _c = react_1.default.useState(profile.avatar), avatar = _c[0], setAvatar = _c[1];
    var openSnackbar = react_simple_snackbar_1.useSnackbar()[0];
    function handleCoverUpload(event) {
        return __awaiter(this, void 0, void 0, function () {
            var file, cover_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = event.target.files[0];
                        if (!file) return [3 /*break*/, 2];
                        return [4 /*yield*/, upload_media_1.uploadMedia({
                                type: 'image',
                                file: file,
                                preset: 'tlkel6jv',
                            })];
                    case 1:
                        cover_1 = _a.sent();
                        setCover(cover_1);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    function handleAvatarUpload(event) {
        return __awaiter(this, void 0, void 0, function () {
            var file, avatar_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = event.target.files[0];
                        if (!file) return [3 /*break*/, 2];
                        return [4 /*yield*/, upload_media_1.uploadMedia({
                                type: 'image',
                                file: file,
                                preset: 'ckr6u0wh',
                            })];
                    case 1:
                        avatar_1 = _a.sent();
                        setAvatar(avatar_1);
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    }
    function handleEditProfile(event) {
        return __awaiter(this, void 0, void 0, function () {
            var username, about, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        event.preventDefault();
                        username = event.target.elements.username.value;
                        about = event.target.elements.about.value;
                        if (!username.trim()) {
                            return [2 /*return*/, openSnackbar('Username cannot be empty.')];
                        }
                        user = {
                            username: username,
                            about: about,
                            avatar: avatar,
                            cover: cover,
                        };
                        return [4 /*yield*/, api_client_1.updateUser(user)];
                    case 1:
                        _a.sent();
                        openSnackbar('Profile updated.');
                        closeModal();
                        return [2 /*return*/];
                }
            });
        });
    }
    return (<EditProfileModal_1.default>
      <div className="container"></div>
      <div className="edit-profile">
        <form onSubmit={handleEditProfile}>
          <div className="modal-header">
            <h3>
              <Icons_1.CloseIcon onClick={closeModal}/>
              <span>Edit Profile</span>
            </h3>
            <Button_1.default type="submit">Save</Button_1.default>
          </div>

          <div className="cover-upload-container">
            <label htmlFor="cover-upload">
              <img className="pointer" width="100%" height="200px" src={cover} alt="cover"/>
            </label>
            <input id="cover-upload" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleCoverUpload}/>
          </div>

          <div className="avatar-upload-icon">
            <label htmlFor="avatar-upload">
              <img src={avatar} className="pointer avatar lg" alt="avatar"/>
            </label>
            <input id="avatar-upload" type="file" accept="image/*" style={{ display: 'none' }} onChange={handleAvatarUpload}/>
          </div>
          <input type="text" placeholder="Insert username" id="username" defaultValue={profile.username} required/>
          <textarea id="about" placeholder="Tell viewers about your channel" defaultValue={profile.about}/>
        </form>
      </div>
    </EditProfileModal_1.default>);
}
exports.default = EditProfileModal;
