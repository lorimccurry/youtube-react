"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var react_router_dom_1 = require("react-router-dom");
var styled_components_1 = require("styled-components");
var auth_context_1 = require("../context/auth-context");
var GlobalStyle_1 = require("../styles/GlobalStyle");
var theme_1 = require("../styles/theme");
var react_query_1 = require("react-query");
var react_query_devtools_1 = require("react-query-devtools");
var react_simple_snackbar_1 = require("react-simple-snackbar");
var react_error_boundary_1 = require("react-error-boundary");
var ErrorFallback_1 = require("./ErrorFallback");
var config = {
    queries: {
        refetchOnWindowFocus: false,
        retry: function (failureCount, error) {
            if (error.status === 404)
                return false;
            else if (failureCount < 2)
                return true;
            else
                return false;
        },
    },
};
function AppProviders(_a) {
    var children = _a.children;
    return (<react_error_boundary_1.ErrorBoundary FallbackComponent={ErrorFallback_1.default}>
      <react_query_1.ReactQueryConfigProvider config={config}>
        <react_router_dom_1.BrowserRouter>
          <auth_context_1.AuthProvider>
            <react_simple_snackbar_1.default>
              <styled_components_1.ThemeProvider theme={theme_1.darkTheme}>
                <GlobalStyle_1.default />
                <react_query_devtools_1.ReactQueryDevtools />
                {children}
              </styled_components_1.ThemeProvider>
            </react_simple_snackbar_1.default>
          </auth_context_1.AuthProvider>
        </react_router_dom_1.BrowserRouter>
      </react_query_1.ReactQueryConfigProvider>
    </react_error_boundary_1.ErrorBoundary>);
}
exports.default = AppProviders;
