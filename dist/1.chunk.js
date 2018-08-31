webpackJsonp([1],{

/***/ 18:
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(25)

var Component = __webpack_require__(9)(
  /* script */
  __webpack_require__(22),
  /* template */
  __webpack_require__(28),
  /* scopeId */
  "data-v-fe6b855a",
  /* cssModules */
  null
)
Component.options.__file = "D:\\htmls\\iokfine\\personal-website\\src\\views\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-fe6b855a", Component.options)
  } else {
    hotAPI.reload("data-v-fe6b855a", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 20:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "d3e0e6774b104f268cba7d3c405c75b5.png";

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    methods: {
        handleStart: function handleStart() {
            this.$Modal.info({
                title: 'Bravo',
                content: 'Now, enjoy the convenience of iView.'
            });
        }
    }
});

/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "index"
  }, [_c('Row', {
    attrs: {
      "type": "flex",
      "justify": "center",
      "align": "middle"
    }
  }, [_c('Col', {
    attrs: {
      "span": "24"
    }
  }, [_c('h1', [_c('img', {
    attrs: {
      "src": __webpack_require__(20)
    }
  })]), _vm._v(" "), _c('h2', [_c('p', [_vm._v("Welcome to your iView app!")]), _vm._v(" "), _c('Button', {
    attrs: {
      "type": "ghost"
    },
    on: {
      "click": _vm.handleStart
    }
  }, [_vm._v("Start iView")])], 1)])], 1)], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-fe6b855a", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=1.chunk.js.map