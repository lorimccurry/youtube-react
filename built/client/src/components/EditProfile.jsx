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
    return (<>
      <EditProfile_1.default>
        <div>
          <Button_1.default grey onClick={function () { return setShowModal(true); }}>
            Edit Profile
          </Button_1.default>
        </div>
        {showModal && (<EditProfileModal_1.default profile={profile} closeModal={closeModal}/>)}
      </EditProfile_1.default>
    </>);
}
exports.default = EditProfile;
