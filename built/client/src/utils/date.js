"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCreatedAt = void 0;
var formatDistanceToNowStrict_1 = require("date-fns/formatDistanceToNowStrict");
function formatCreatedAt(timestamp) {
    return formatDistanceToNowStrict_1.default(new Date(timestamp), { addSuffix: true });
}
exports.formatCreatedAt = formatCreatedAt;
