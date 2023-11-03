"use strict";
(() => {
var exports = {};
exports.id = 9602;
exports.ids = [9602];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 56759:
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

// NAMESPACE OBJECT: ./src/app/api/posts/[id]/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  PUT: () => (PUT)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/node-polyfill-headers.js
var node_polyfill_headers = __webpack_require__(45050);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/app-route/module.js
var app_route_module = __webpack_require__(71910);
var module_default = /*#__PURE__*/__webpack_require__.n(app_route_module);
// EXTERNAL MODULE: ./src/models/Post.js
var Post = __webpack_require__(66960);
// EXTERNAL MODULE: ./src/utils/db.js
var db = __webpack_require__(17891);
// EXTERNAL MODULE: ./node_modules/next/dist/server/web/exports/next-response.js
var next_response = __webpack_require__(18847);
;// CONCATENATED MODULE: ./src/app/api/posts/[id]/route.js



async function PUT(request, { params }) {
    const { id } = params;
    const { newTitle: title, newDescription: description } = await request.json();
    await connectMongoDB();
    await Topic.findByIdAndUpdate(id, {
        title,
        description
    });
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fposts%2F%5Bid%5D%2Froute&name=app%2Fapi%2Fposts%2F%5Bid%5D%2Froute&pagePath=private-next-app-dir%2Fapi%2Fposts%2F%5Bid%5D%2Froute.js&appDir=D%3A%5Clevel-2%5Clast-assignment%5Cprestige-planner%5Csrc%5Capp&appPaths=%2Fapi%2Fposts%2F%5Bid%5D%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/posts/[id]/route","pathname":"/api/posts/[id]","filename":"route","bundlePath":"app/api/posts/[id]/route"},"resolvedPagePath":"D:\\level-2\\last-assignment\\prestige-planner\\src\\app\\api\\posts\\[id]\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/posts/[id]/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2669,6255,8847,2190], () => (__webpack_exec__(56759)));
module.exports = __webpack_exports__;

})();