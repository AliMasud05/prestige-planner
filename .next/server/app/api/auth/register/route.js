"use strict";
(() => {
var exports = {};
exports.id = 3002;
exports.ids = [3002];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 6113:
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 51499:
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

// NAMESPACE OBJECT: ./src/app/api/auth/register/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  POST: () => (POST)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(45050);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(71910);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/models/User.js
var User = __webpack_require__(83121);
// EXTERNAL MODULE: ./src/utils/db.js
var db = __webpack_require__(17891);
// EXTERNAL MODULE: ./node_modules/bcryptjs/index.js
var bcryptjs = __webpack_require__(89702);
var bcryptjs_default = /*#__PURE__*/__webpack_require__.n(bcryptjs);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(18847);
;// CONCATENATED MODULE: ./src/app/api/auth/register/route.js




const POST = async (request)=>{
    const { name, email, password, role } = await request.json();
    await (0,db/* default */.Z)();
    const hashedPassword = await bcryptjs_default().hash(password, 5);
    const newUser = new User/* default */.Z({
        role,
        name,
        email,
        password: hashedPassword
    });
    try {
        await newUser.save();
        return new next_response/* default */.Z("User has been created", {
            status: 201
        });
    } catch (err) {
        return new next_response/* default */.Z(err.message, {
            status: 500
        });
    }
};
const GET = async (request)=>{
    await (0,db/* default */.Z)();
    let query = {};
    try {
        const user = await User/* default */.Z.find(query);
        return new next_response/* default */.Z(JSON.stringify(user), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z(err.message, {
            status: 500
        });
    }
};
const DELETE = async (request)=>{
    const postId = request.nextUrl.searchParams.get("id");
    try {
        await (0,db/* default */.Z)(); // Connect to your database
        const post = await User/* default */.Z.findByIdAndDelete(postId); // Find and delete the post by its ID
        if (!post) {
            return new next_response/* default */.Z("Post not found", {
                status: 404
            });
        }
        return new next_response/* default */.Z("user has been deleted", {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z("Database Error", {
            status: 500
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fauth%2Fregister%2Froute&name=app%2Fapi%2Fauth%2Fregister%2Froute&pagePath=private-next-app-dir%2Fapi%2Fauth%2Fregister%2Froute.js&appDir=D%3A%5Clevel-2%5Clast-assignment%5Cprestige-planner%5Csrc%5Capp&appPaths=%2Fapi%2Fauth%2Fregister%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/auth/register/route","pathname":"/api/auth/register","filename":"route","bundlePath":"app/api/auth/register/route"},"resolvedPagePath":"D:\\level-2\\last-assignment\\prestige-planner\\src\\app\\api\\auth\\register\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/auth/register/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2669,6255,8847,9702,6438], () => (__webpack_exec__(51499)));
module.exports = __webpack_exports__;

})();