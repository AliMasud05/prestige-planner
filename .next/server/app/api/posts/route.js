"use strict";
(() => {
var exports = {};
exports.id = 990;
exports.ids = [990];
exports.modules = {

/***/ 11185:
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ 22037:
/***/ ((module) => {

module.exports = require("os");

/***/ }),

/***/ 5578:
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

// NAMESPACE OBJECT: ./src/app/api/posts/route.js
var route_namespaceObject = {};
__webpack_require__.r(route_namespaceObject);
__webpack_require__.d(route_namespaceObject, {
  DELETE: () => (DELETE),
  GET: () => (GET),
  POST: () => (POST),
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
;// CONCATENATED MODULE: ./src/app/api/posts/route.js



const GET = async (request)=>{
    const url = new URL(request.url);
    const postId = url.searchParams.get("id");
    const username = url.searchParams.get("username");
    try {
        await (0,db/* default */.Z)(); // Connect to your database
        let query = {};
        if (postId) {
            query = {
                _id: postId
            }; // Search by ID
        } else if (username) {
            query = {
                username
            }; // Search by username
        }
        const posts = await Post/* default */.Z.find(query);
        return new next_response/* default */.Z(JSON.stringify(posts), {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z("Database Error", {
            status: 500
        });
    }
};
const PUT = async (request)=>{
    const url = new URL(request.url);
    const postId = url.searchParams.get("id");
    const requestBody = await request.text();
    const updatedData = JSON.parse(requestBody);
    try {
        await (0,db/* default */.Z)(); // Connect to your database
        const existingPost = await Post/* default */.Z.findById(postId);
        if (!existingPost) {
            return new next_response/* default */.Z("Post not found", {
                status: 404
            });
        }
        const data = await Post/* default */.Z.findByIdAndUpdate(postId, updatedData);
        return new next_response/* default */.Z("Post has been updated", {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z("Database Error", {
            status: 500
        });
    }
};
// export const GET = async (request) => {
//   const url = new URL(request.url);
//   const postId = url.searchParams.get("id"); // Assuming 'id' is the query parameter for the ID
//   try {
//     await connect(); // Connect to your database
//     const post = await Post.findById(postId); // Use the 'findById' method to query by ID
//     if (!post) {
//       return new NextResponse("Post not found", { status: 404 });
//     }
//     return new NextResponse(JSON.stringify(post), { status: 200 });
//   } catch (err) {
//     return new NextResponse("Database Error", { status: 500 });
//   }
// };
const POST = async (request)=>{
    const body = await request.json();
    const newPost = new Post/* default */.Z(body);
    try {
        await (0,db/* default */.Z)();
        await newPost.save();
        return new next_response/* default */.Z("Post has been created", {
            status: 201
        });
    } catch (err) {
        return new next_response/* default */.Z("Database Error", {
            status: 500
        });
    }
};
const DELETE = async (request)=>{
    const postId = request.nextUrl.searchParams.get("id");
    try {
        await (0,db/* default */.Z)(); // Connect to your database
        const post = await Post/* default */.Z.findByIdAndDelete(postId); // Find and delete the post by its ID
        if (!post) {
            return new next_response/* default */.Z("Post not found", {
                status: 404
            });
        }
        return new next_response/* default */.Z("Post has been deleted", {
            status: 200
        });
    } catch (err) {
        return new next_response/* default */.Z("Database Error", {
            status: 500
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?page=%2Fapi%2Fposts%2Froute&name=app%2Fapi%2Fposts%2Froute&pagePath=private-next-app-dir%2Fapi%2Fposts%2Froute.js&appDir=D%3A%5Clevel-2%5Clast-assignment%5Cprestige-planner%5Csrc%5Capp&appPaths=%2Fapi%2Fposts%2Froute&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!

    

    

    

    const options = {"definition":{"kind":"APP_ROUTE","page":"/api/posts/route","pathname":"/api/posts","filename":"route","bundlePath":"app/api/posts/route"},"resolvedPagePath":"D:\\level-2\\last-assignment\\prestige-planner\\src\\app\\api\\posts\\route.js","nextConfigOutput":""}
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

    const originalPathname = "/api/posts/route"

    

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [2669,6255,8847,2190], () => (__webpack_exec__(5578)));
module.exports = __webpack_exports__;

})();