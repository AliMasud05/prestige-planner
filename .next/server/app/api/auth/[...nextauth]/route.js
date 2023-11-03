"use strict";
(() => {
var exports = {};
exports.id = 4912;
exports.ids = [4912];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 39491:
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ 14300:
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 82361:
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ 13685:
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ 95687:
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 63477:
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ 57310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 73837:
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ 59796:
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ 93909:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  headerHooks: () => (/* binding */ headerHooks),
  originalPathname: () => (/* binding */ originalPathname),
  requestAsyncStorage: () => (/* binding */ requestAsyncStorage),
  routeModule: () => (/* binding */ routeModule),
  serverHooks: () => (/* binding */ serverHooks),
  staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage),
  staticGenerationBailout: () => (/* binding */ staticGenerationBailout)
});

// NAMESPACE OBJECT: ./src/app/api/auth/[...nextauth]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  GET: () => (handler),
  POST: () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(45050);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(71910);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./node_modules/next-auth/index.js
var next_auth = __webpack_require__(1215);
var next_auth_default = /*#__PURE__*/__webpack_require__.n(next_auth);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/github.js
var github = __webpack_require__(41489);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/google.js
var google = __webpack_require__(16657);
// EXTERNAL MODULE: ./node_modules/next-auth/providers/credentials.js
var credentials = __webpack_require__(94658);
// EXTERNAL MODULE: ./src/models/User.js
var User = __webpack_require__(83121);
// EXTERNAL MODULE: ./node_modules/bcryptjs/index.js
var bcryptjs = __webpack_require__(89702);
var bcryptjs_default = /*#__PURE__*/__webpack_require__.n(bcryptjs);
// EXTERNAL MODULE: ./src/utils/db.js
var db = __webpack_require__(17891);
;// CONCATENATED MODULE: ./src/app/api/auth/[...nextauth]/route.js







const handler = next_auth_default()({
    providers: [
        (0,credentials/* default */.Z)({
            id: "credentials",
            name: "Credentials",
            async authorize (credentials) {
                //Check if the user exists.
                await (0,db/* default */.Z)();
                try {
                    const user = await User/* default */.Z.findOne({
                        email: credentials.email
                    });
                    if (user) {
                        const isPasswordCorrect = await bcryptjs_default().compare(credentials.password, user.password);
                        if (isPasswordCorrect) {
                            return user;
                        } else {
                            throw new Error("Wrong Credentials!");
                        }
                    } else {
                        throw new Error("User not found!");
                    }
                } catch (err) {
                    throw new Error(err);
                }
            }
        }),
        // GithubProvider({
        //   clientId: process.env.GITHUB_ID,
        //   clientSecret: process.env.GITHUB_SECRET,
        // }),
        (0,google/* default */.Z)({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ]
});


;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=D%3A%5Clevel-2%5Clast-assignment%5Cprestige-planner%5Csrc%5Capp&appPaths=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/auth/[...nextauth]/route","pathname":"/api/auth/[...nextauth]","filename":"route","bundlePath":"app/api/auth/[...nextauth]/route"},"resolvedPagePath":"D:\\level-2\\last-assignment\\prestige-planner\\src\\app\\api\\auth\\[...nextauth]\\route.js","nextConfigOutput":""}
    const routeModule = new (module_default())({
      ...options,
      userland: route_namespaceObject,
    })

    // Pull out the exports that we need to expose from the module. This should
    // be eliminated when we've moved the other routes to the new format. These
    // are used to hook into the route.
    const {
      requestAsyncStorage,
      staticGenerationAsyncStorage,
      serverHooks,
      headerHooks,
      staticGenerationBailout
    } = routeModule

    const originalPathname = "/api/auth/[...nextauth]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2669,2823,6255,9702,6458,6438], () => (__webpack_exec__(93909)));
module.exports = __webpack_exports__;

})();