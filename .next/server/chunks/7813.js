exports.id = 7813;
exports.ids = [7813];
exports.modules = {

/***/ 4323:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 4249, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 94564, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 50885, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 80772, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 68262, 23))

/***/ }),

/***/ 76663:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 36893));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 19262));
Promise.resolve(/* import() eager */).then(__webpack_require__.bind(__webpack_require__, 61259))

/***/ }),

/***/ 61259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(63370);
/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* __next_internal_client_entry_do_not_use__ default auto */ 


const AuthProvider = ({ children })=>{
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_auth_react__WEBPACK_IMPORTED_MODULE_1__.SessionProvider, {
        children: children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AuthProvider);


/***/ }),

/***/ 19262:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ navbar_Navbar)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(31621);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "next/dist/compiled/react"
var react_ = __webpack_require__(18038);
// EXTERNAL MODULE: ./src/components/navbar/navbar.module.css
var navbar_module = __webpack_require__(79056);
var navbar_module_default = /*#__PURE__*/__webpack_require__.n(navbar_module);
// EXTERNAL MODULE: ./src/components/DarkModeToggle/darkModeToggle.module.css
var darkModeToggle_module = __webpack_require__(12048);
var darkModeToggle_module_default = /*#__PURE__*/__webpack_require__.n(darkModeToggle_module);
// EXTERNAL MODULE: ./src/context/ThemeContext.js
var ThemeContext = __webpack_require__(36893);
;// CONCATENATED MODULE: ./src/components/DarkModeToggle/DarkModeToggle.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 



const DarkModeToggle = ()=>{
    const { toggle, mode } = (0,react_.useContext)(ThemeContext.ThemeContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: (darkModeToggle_module_default()).container,
        onClick: toggle,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (darkModeToggle_module_default()).icon,
                children: "\uD83C\uDF19"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (darkModeToggle_module_default()).icon,
                children: "\uD83D\uDD06"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (darkModeToggle_module_default()).ball,
                style: mode === "light" ? {
                    left: "2px"
                } : {
                    right: "2px"
                }
            })
        ]
    });
};
/* harmony default export */ const DarkModeToggle_DarkModeToggle = (DarkModeToggle);

// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(63370);
;// CONCATENATED MODULE: ./src/components/navbar/Navbar.jsx
/* __next_internal_client_entry_do_not_use__ default auto */ 





const links = [
    {
        id: 1,
        title: "Home",
        url: "/"
    },
    {
        id: 3,
        title: "Services",
        url: "/service"
    },
    {
        id: 2,
        title: "Feedback",
        url: "/feedback"
    },
    {
        id: 4,
        title: "About",
        url: "/about"
    },
    {
        id: 5,
        title: "Contact",
        url: "/contact"
    },
    {
        id: 6,
        title: "Dashboard",
        url: "/dashboard"
    }
];
const Navbar = ()=>{
    const session = (0,react.useSession)();
    // console.log(session.data);
    // const user = session.data;
    // console.log(user)
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "container",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "navbar bg-base-100 ",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "navbar-start w-4/5",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "dropdown",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                    tabIndex: 0,
                                    className: "btn btn-ghost lg:hidden",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "h-5 w-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            strokeWidth: "2",
                                            d: "M4 6h16M4 12h8m-8 6h16"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                    tabIndex: 0,
                                    className: "menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52",
                                    children: links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                            href: link.url,
                                            className: `${(navbar_module_default()).link} mx-2`,
                                            children: link.title
                                        }, link.id))
                                })
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "btn btn-ghost normal-case text-xl",
                            children: "Prestige~Planner"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "navbar-center hidden lg:flex",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(DarkModeToggle_DarkModeToggle, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                            className: "menu menu-horizontal px-1",
                            children: links.map((link)=>/*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: link.url,
                                    className: `${(navbar_module_default()).link} mx-2`,
                                    children: link.title
                                }, link.id))
                        })
                    ]
                }),
                session.status === "authenticated" ? /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: `${(navbar_module_default()).logout} `,
                            onClick: react.signOut,
                            children: "Logout"
                        })
                    ]
                }) : /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
                    children: [
                        " ",
                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                            className: (navbar_module_default()).logout,
                            children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                href: "/dashboard/login",
                                children: "login"
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const navbar_Navbar = (Navbar);


/***/ }),

/***/ 36893:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ThemeContext: () => (/* binding */ ThemeContext),
/* harmony export */   ThemeProvider: () => (/* binding */ ThemeProvider)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(18038);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* __next_internal_client_entry_do_not_use__ ThemeContext,ThemeProvider auto */ 

const ThemeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const ThemeProvider = ({ children })=>{
    const [mode, setMode] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)("dark");
    const toggle = ()=>{
        setMode((prev)=>prev === "dark" ? "light" : "dark");
    };
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(ThemeContext.Provider, {
        value: {
            toggle,
            mode
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: `theme ${mode}`,
            children: children
        })
    });
};


/***/ }),

/***/ 12048:
/***/ ((module) => {

// Exports
module.exports = {
	"container": "darkModeToggle_container__GBEYK",
	"icon": "darkModeToggle_icon__6_uhw",
	"ball": "darkModeToggle_ball__m2soT"
};


/***/ }),

/***/ 79056:
/***/ ((module) => {

// Exports
module.exports = {
	"logo": "navbar_logo__uZP7g",
	"links": "navbar_links__zwFDW",
	"logout": "navbar_logout__109lV"
};


/***/ }),

/***/ 5547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(56786);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-flight-loader/module-proxy.js
var module_proxy = __webpack_require__(17814);
;// CONCATENATED MODULE: ./src/components/navbar/Navbar.jsx

const proxy = (0,module_proxy.createProxy)(String.raw`D:\level-2\last-assignment\prestige-planner\src\components\navbar\Navbar.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule, $$typeof } = proxy;
const __default__ = proxy.default;


/* harmony default export */ const Navbar = (__default__);
// EXTERNAL MODULE: ./node_modules/next-auth/react/index.js
var react = __webpack_require__(42364);
// EXTERNAL MODULE: ./src/app/globals.css
var globals = __webpack_require__(75553);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(46261);
;// CONCATENATED MODULE: ./src/components/Shared/Footer.js


const Footer = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: "text-gray-600 body-font",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "container px-5 py-24 mx-auto",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "flex flex-wrap md:text-left text-center order-first",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "lg:w-1/4 md:w-1/2 w-full px-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
                                    children: "CATEGORIES"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "list-none mb-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-gray-600 hover:text-gray-800",
                                                children: "First Link"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-gray-600 hover:text-gray-800",
                                                children: "Second Link"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-gray-600 hover:text-gray-800",
                                                children: "Third Link"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-gray-600 hover:text-gray-800",
                                                children: "Fourth Link"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "lg:w-1/4 md:w-1/2 w-full px-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
                                    children: "CATEGORIES"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "list-none mb-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-gray-600 hover:text-gray-800",
                                                children: "First Link"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-gray-600 hover:text-gray-800",
                                                children: "Second Link"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-gray-600 hover:text-gray-800",
                                                children: "Third Link"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-gray-600 hover:text-gray-800",
                                                children: "Fourth Link"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "lg:w-1/4 md:w-1/2 w-full px-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
                                    children: "CATEGORIES"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("nav", {
                                    className: "list-none mb-10",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-gray-600 hover:text-gray-800",
                                                children: "First Link"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-gray-600 hover:text-gray-800",
                                                children: "Second Link"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-gray-600 hover:text-gray-800",
                                                children: "Third Link"
                                            })
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                className: "text-gray-600 hover:text-gray-800",
                                                children: "Fourth Link"
                                            })
                                        })
                                    ]
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "lg:w-1/4 md:w-1/2 w-full px-4",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                    className: "title-font font-medium text-gray-900 tracking-widest text-sm mb-3",
                                    children: "SUBSCRIBE"
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                    for: "footer-field",
                                                    className: "leading-7 text-sm text-gray-600",
                                                    children: "Placeholder"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("input", {
                                                    type: "text",
                                                    id: "footer-field",
                                                    name: "footer-field",
                                                    className: "w-full bg-gray-100   bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("button", {
                                            className: "lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded",
                                            children: "Button"
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "bg-gray-100",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("a", {
                            className: "flex title-font font-medium items-center md:justify-start justify-center text-gray-900",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                    xmlns: "http://www.w3.org/2000/svg",
                                    fill: "none",
                                    stroke: "currentColor",
                                    "stroke-linecap": "round",
                                    "stroke-linejoin": "round",
                                    "stroke-width": "2",
                                    className: "w-10 h-10 text-white p-2 bg-indigo-500 rounded-full",
                                    viewBox: "0 0 24 24",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                        d: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "ml-3 text-xl",
                                    children: "Tailblocks"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("p", {
                            className: "text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4",
                            children: [
                                "\xa9 2020 Tailblocks —",
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    href: "https://twitter.com/knyttneve",
                                    rel: "noopener noreferrer",
                                    className: "text-gray-600 ml-1",
                                    target: "_blank",
                                    children: "@knyttneve"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                            className: "inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "text-gray-500",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        fill: "currentColor",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                                        fill: "currentColor",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                            d: "M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"
                                        })
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        fill: "none",
                                        stroke: "currentColor",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "2",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("rect", {
                                                width: "20",
                                                height: "20",
                                                x: "2",
                                                y: "2",
                                                rx: "5",
                                                ry: "5"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                d: "M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
                                            })
                                        ]
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                    className: "ml-3 text-gray-500",
                                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("svg", {
                                        fill: "currentColor",
                                        stroke: "currentColor",
                                        "stroke-linecap": "round",
                                        "stroke-linejoin": "round",
                                        "stroke-width": "0",
                                        className: "w-5 h-5",
                                        viewBox: "0 0 24 24",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                                stroke: "none",
                                                d: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("circle", {
                                                cx: "4",
                                                cy: "4",
                                                r: "2",
                                                stroke: "none"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
};
/* harmony default export */ const Shared_Footer = (Footer);

;// CONCATENATED MODULE: ./src/context/ThemeContext.js

const ThemeContext_proxy = (0,module_proxy.createProxy)(String.raw`D:\level-2\last-assignment\prestige-planner\src\context\ThemeContext.js`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: ThemeContext_esModule, $$typeof: ThemeContext_$$typeof } = ThemeContext_proxy;
const ThemeContext_default_ = ThemeContext_proxy.default;

const e0 = ThemeContext_proxy["ThemeContext"];

const e1 = ThemeContext_proxy["ThemeProvider"];

;// CONCATENATED MODULE: ./src/components/AuthProvider/AuthProvider.jsx

const AuthProvider_proxy = (0,module_proxy.createProxy)(String.raw`D:\level-2\last-assignment\prestige-planner\src\components\AuthProvider\AuthProvider.jsx`)

// Accessing the __esModule property and exporting $$typeof are required here.
// The __esModule getter forces the proxy target to create the default export
// and the $$typeof value is for rendering logic to determine if the module
// is a client boundary.
const { __esModule: AuthProvider_esModule, $$typeof: AuthProvider_$$typeof } = AuthProvider_proxy;
const AuthProvider_default_ = AuthProvider_proxy.default;


/* harmony default export */ const AuthProvider = (AuthProvider_default_);
;// CONCATENATED MODULE: ./src/app/layout.js







const metadata = {
    title: "Prestige-planner",
    description: "Generated by create next app"
};
function RootLayout({ children }) {
    return /*#__PURE__*/ jsx_runtime_.jsx("html", {
        lang: "en",
        "data-theme": "light",
        children: /*#__PURE__*/ jsx_runtime_.jsx("body", {
            children: /*#__PURE__*/ jsx_runtime_.jsx(e1, {
                children: /*#__PURE__*/ jsx_runtime_.jsx(AuthProvider, {
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(Navbar, {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex justify-center items-center my-8",
                                children: children
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(Shared_Footer, {})
                        ]
                    })
                })
            })
        })
    });
}


/***/ }),

/***/ 82819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(49984);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"any"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 75553:
/***/ (() => {



/***/ })

};
;