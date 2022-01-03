function _mergeNamespaces(n, m) {
  for (var i = 0; i < m.length; i++) {
    const e = m[i];
    if (typeof e !== 'string' && !Array.isArray(e)) { for (const k in e) {
      if (k !== 'default' && !(k in n)) {
        const d = Object.getOwnPropertyDescriptor(e, k);
        if (d) {
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      }
    } }
  }
  return Object.freeze(n);
}

var heroIntro$1 = {};

var ids = heroIntro$1.ids = [3];
var modules = heroIntro$1.modules = {

/***/ 67:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.js!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./components/hero/HeroIntro.vue?vue&type=template&id=031f15b0&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container pt-36"},[_vm._ssrNode("<div><h1 class=\"text-app-light-blue text-lg mb-2 uppercase\">\n      Hello my name is Trayvon\n    </h1> <p class=\"text-5xl mb-2\">\n      I make and design websites.\n    </p> <div class=\"text-xl mb-6\"><p>\n        I'm a frontend developer co-founder of Codista, a software studio in Vienna.\n      </p> <p>\n        I also write about the web on my Biogand on Twitter.\n      </p></div> <button class=\"border border-app-light-blue px-16 py-2.5 duration-150 text-xl rounded-md text-app-light-blue hover:bg-gray-100 hover:bg-opacity-10\">\n      Get in touch\n    </button></div>")])};
var staticRenderFns = [];


// CONCATENATED MODULE: ./components/hero/HeroIntro.vue?vue&type=template&id=031f15b0&

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/hero/HeroIntro.vue

var script = {};


/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  script,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "77bd2e6a"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

};

const heroIntro = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': heroIntro$1,
  ids: ids,
  modules: modules
}, [heroIntro$1]));

export { heroIntro as h };
