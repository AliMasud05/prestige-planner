exports.id = 9672;
exports.ids = [9672];
exports.modules = {

/***/ 96582:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 77910))

/***/ }),

/***/ 77910:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _ant_design_icons_lib_icons_DesktopOutlined__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(76130);
/* harmony import */ var _ant_design_icons_lib_icons_FileOutlined__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(39990);
/* harmony import */ var _ant_design_icons_lib_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(44693);
/* harmony import */ var antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(45781);
/* harmony import */ var antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(91768);
/* harmony import */ var antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(93026);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31621);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 










const { Header, Content, Footer, Sider } = antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__["default"];
function getItem(label, key, icon, route, children) {
    return {
        key,
        icon,
        children,
        label,
        route
    };
}
const items = [
    getItem("Home", "1", /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons_lib_icons_FileOutlined__WEBPACK_IMPORTED_MODULE_4__/* ["default"] */ .Z, {}), "/admin"),
    getItem("User List", "1", /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons_lib_icons_PieChartOutlined__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z, {}), "/admin/user"),
    getItem("Option 2", "2", /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_ant_design_icons_lib_icons_DesktopOutlined__WEBPACK_IMPORTED_MODULE_6__/* ["default"] */ .Z, {}), "/admin/addevent")
];
const AdminLayout = ({ children })=>{
    const [collapsed, setCollapsed] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
        style: {
            minHeight: "100vh"
        },
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Sider, {
                collapsible: true,
                collapsed: collapsed,
                onCollapse: (value)=>setCollapsed(value),
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "demo-logo-vertical"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__["default"], {
                        theme: "dark",
                        defaultSelectedKeys: [
                            "1"
                        ],
                        mode: "inline",
                        children: items.map((item)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_lib_menu__WEBPACK_IMPORTED_MODULE_7__["default"].Item, {
                                icon: item.icon,
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {
                                    href: item.route,
                                    children: item.label
                                })
                            }, item.key))
                    })
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd_lib_layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Header, {
                        style: {
                            padding: 0
                        }
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(Content, {
                        style: {
                            margin: "0 16px"
                        },
                        children: [
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z, {
                                style: {
                                    margin: "16px 0"
                                },
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Item, {
                                        children: "User"
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(antd_lib_breadcrumb__WEBPACK_IMPORTED_MODULE_8__/* ["default"] */ .Z.Item, {
                                        children: "Bill"
                                    })
                                ]
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                style: {
                                    padding: 24,
                                    minHeight: 360
                                },
                                children: children
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Footer, {
                        style: {
                            textAlign: "center"
                        },
                        children: "Ant Design \xa92023 Created by Ant UED"
                    })
                ]
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AdminLayout);


/***/ }),

/***/ 36648:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   $$typeof: () => (/* binding */ $$typeof),
/* harmony export */   __esModule: () => (/* binding */ __esModule),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(17814);

const proxy = (0,next_dist_build_webpack_loaders_next_flight_loader_module_proxy__WEBPACK_IMPORTED_MODULE_0__.createProxy)(String.raw`D:\level-2\last-assignment\prestige-planner\src\app\admin\layout.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__default__);

/***/ })

};
;