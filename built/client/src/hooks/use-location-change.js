"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLocationChange = void 0;
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
function usePrevious(locationValue) {
    var ref = react_1.default.useRef();
    react_1.default.useEffect(function () {
        ref.current = locationValue;
    });
    return ref.current;
}
function useLocationChange(callback) {
    var location = react_router_dom_1.useLocation();
    var prevLocation = usePrevious(location);
    react_1.default.useEffect(function () {
        if ((prevLocation === null || prevLocation === void 0 ? void 0 : prevLocation.pathname) !== location.pathname) {
            callback();
        }
    }, [location, prevLocation, callback]);
}
exports.useLocationChange = useLocationChange;
