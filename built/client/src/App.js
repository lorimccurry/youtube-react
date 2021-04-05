"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var MobileNavbar_1 = require("./components/MobileNavbar");
var Navbar_1 = require("./components/Navbar");
var Sidebar_1 = require("./components/Sidebar");
var use_location_change_1 = require("./hooks/use-location-change");
var Channel_1 = require("./pages/Channel");
var History_1 = require("./pages/History");
var Home_1 = require("./pages/Home");
var Library_1 = require("./pages/Library");
var LikedVideos_1 = require("./pages/LikedVideos");
var NotFound_1 = require("./pages/NotFound");
var SearchResults_1 = require("./pages/SearchResults");
var Subscriptions_1 = require("./pages/Subscriptions");
var Trending_1 = require("./pages/Trending");
var WatchVideo_1 = require("./pages/WatchVideo");
var YourVideos_1 = require("./pages/YourVideos");
var Container_1 = require("./styles/Container");
function App() {
    var _a = react_1.default.useState(false), isSidebarOpen = _a[0], setSidebarOpen = _a[1];
    var handleCloseSidebar = function () { return setSidebarOpen(false); };
    var toggleSidebarOpen = function () { return setSidebarOpen(!isSidebarOpen); };
    use_location_change_1.useLocationChange(handleCloseSidebar);
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Navbar_1.default, { toggleSidebarOpen: toggleSidebarOpen }),
        react_1.default.createElement(Sidebar_1.default, { isSidebarOpen: isSidebarOpen }),
        react_1.default.createElement(MobileNavbar_1.default, null),
        react_1.default.createElement(Container_1.default, null,
            react_1.default.createElement(react_router_dom_1.Switch, null,
                react_1.default.createElement(react_router_dom_1.Route, { exact: true, path: "/", component: Home_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/watch/:videoId", component: WatchVideo_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/channel/:channelId", component: Channel_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/results/:searchQuery", component: SearchResults_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/feed/trending", component: Trending_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/feed/subscriptions", component: Subscriptions_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/feed/library", component: Library_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/feed/history", component: History_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/feed/my_videos", component: YourVideos_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "/feed/liked_videos", component: LikedVideos_1.default }),
                react_1.default.createElement(react_router_dom_1.Route, { path: "*", component: NotFound_1.default })))));
}
exports.default = App;
