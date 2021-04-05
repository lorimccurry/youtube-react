"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
var react_1 = require("react");
var Button_1 = require("../styles/Button");
var EditProfile_1 = require("../styles/EditProfile");
var EditProfileModal_1 = require("./EditProfileModal");
function EditProfile(_a) {
    var profile = _a.profile;
    var _b = react_1.default.useState(false), showModal = _b[0], setShowModal = _b[1];
    var closeModal = function () { return setShowModal(false); };
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(EditProfile_1.default, null,
            react_1.default.createElement("div", null,
                react_1.default.createElement(Button_1.default, { grey: true, onClick: function () { return setShowModal(true); } }, "Edit Profile")),
            showModal && (react_1.default.createElement(EditProfileModal_1.default, { profile: profile, closeModal: closeModal })))));
}
exports.default = EditProfile;
