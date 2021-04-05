"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
function ChannelTabAbout(_a) {
    var _b = _a.about, about = _b === void 0 ? 'No description for this channel.' : _b;
    return react_1.default.createElement("p", null, about);
}
exports.default = ChannelTabAbout;
