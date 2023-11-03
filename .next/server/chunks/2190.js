"use strict";
exports.id = 2190;
exports.ids = [2190];
exports.modules = {

/***/ 66960:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());
const postSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    ticket: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    guest: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    about: {
        type: String,
        required: true
    }
}, {
    timestamps: true
});
//If the Post collection does not exist create a new one.
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Post || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model("Post", postSchema));


/***/ }),

/***/ 17891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11185);
/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);

const MONGO = "mongodb+srv://prestige-planner:akgT7rg1znA1Q4Cm@cluster0.memgfjc.mongodb.net/prestige-planner";
const connect = async ()=>{
    try {
        await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGO);
    } catch (error) {
        throw new Error("Connection failed!");
    }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connect);


/***/ })

};
;