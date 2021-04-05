"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Icons_1 = require("../components/Icons");
var SignUpCard_1 = require("../components/SignUpCard");
var auth_context_1 = require("../context/auth-context");
var History_1 = require("./History");
var LikedVideos_1 = require("./LikedVideos");
function Library() {
    var user = auth_context_1.useAuth();
    if (!user) {
        return (<SignUpCard_1.default icon={<Icons_1.LibIcon />} title="Enjoy your favorite videos" description="Sign in to access videos that you’ve liked or saved"/>);
    }
    return (<>
      <History_1.default />
      <LikedVideos_1.default />
    </>);
}
exports.default = Library;
