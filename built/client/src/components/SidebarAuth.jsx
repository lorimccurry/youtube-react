"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var GoogleAuth_1 = require("./GoogleAuth");
function SidebarAuth() {
    return (<div style={{ padding: "16px 20px" }}>
      <p>Sign in to like videos, comment, and subscribe.</p>
      <br />
      <GoogleAuth_1.default />
    </div>);
}
exports.default = SidebarAuth;
