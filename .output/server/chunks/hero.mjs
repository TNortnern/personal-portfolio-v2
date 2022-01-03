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

var hero$1 = {};

var ids = hero$1.ids = [2,3,4];
var modules = hero$1.modules = {

/***/ 66:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
var vue_composition_api = __webpack_require__(0);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.js!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./components/navigation/Navbar.vue?vue&type=template&id=24c90638&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('client-only',[_c('div',{staticClass:"py-12 z-20 fixed top-0 w-full bg-app-dark-blue duration-250",class:{
      'shadow-2xl pt-6 pb-6': _vm.active
    }},[_c('nav',{ref:"navbar",staticClass:"main-container"},[_c('div',{staticClass:"flex items-center justify-between"},[_c('div',{staticClass:"flex items-center gap-2"},[_c('img',{staticClass:"rounded-full w-12 h-12",attrs:{"src":"/mainavatar.jpg","alt":"human"}}),_vm._v(" "),_c('p',[_vm._v("Trayvon Northern")])]),_vm._v(" "),_c('ul',{staticClass:"flex items-center gap-4"},_vm._l((5),function(i){return _c('li',{key:i,staticClass:"group"},[_c('a',{staticClass:"duration-150 group-hover:text-app-light-blue",attrs:{"href":""}},[_vm._v("Link 0"+_vm._s(i+1))])])}),0)])])])])};
var staticRenderFns = [];


// CONCATENATED MODULE: ./components/navigation/Navbar.vue?vue&type=template&id=24c90638&

// EXTERNAL MODULE: ./node_modules/@nuxt/bridge/dist/runtime/index.mjs
__webpack_require__(3);
// EXTERNAL MODULE: ./node_modules/@nuxt/bridge/dist/runtime/vue2-bridge.mjs + 1 modules
__webpack_require__(1);

// EXTERNAL MODULE: external "axios"
__webpack_require__(63);
// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/babel-loader/lib??ref--0-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.js!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./components/navigation/Navbar.vue?vue&type=script&lang=ts&
// import { ref } from '@nuxtjs/composition-api'

const __sfc_main = {};

__sfc_main.setup = (__props, __ctx) => {
  const navbar = Object(vue_composition_api["J" /* ref */])(null);
  const active = Object(vue_composition_api["J" /* ref */])(false);

  return {
    navbar,
    active
  };
};

/* harmony default export */ var Navbarvue_type_script_lang_ts_ = (__sfc_main);
// CONCATENATED MODULE: ./components/navigation/Navbar.vue?vue&type=script&lang=ts&
 /* harmony default export */ var navigation_Navbarvue_type_script_lang_ts_ = (Navbarvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/navigation/Navbar.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  navigation_Navbarvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "00c4058d"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

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

/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.js!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./components/hero/Hero.vue?vue&type=template&id=692b1561&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"bg-app-dark-blue text-white relative pb-36"},[_c('Navbar'),_vm._ssrNode(" "),_c('HeroIntro')],2)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./components/hero/Hero.vue?vue&type=template&id=692b1561&

// EXTERNAL MODULE: ./components/navigation/Navbar.vue + 8 modules
var Navbar = __webpack_require__(66);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/babel-loader/lib??ref--0-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.js!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./components/hero/Hero.vue?vue&type=script&lang=ts&

const __sfc_main = {};

__sfc_main.setup = (__props, __ctx) => {
  return {};
};

__sfc_main.components = Object.assign({
  Navbar: Navbar["default"]
}, __sfc_main.components);
/* harmony default export */ var Herovue_type_script_lang_ts_ = (__sfc_main);
// CONCATENATED MODULE: ./components/hero/Hero.vue?vue&type=script&lang=ts&
 /* harmony default export */ var hero_Herovue_type_script_lang_ts_ = (Herovue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/hero/Hero.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  hero_Herovue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "dfdfcf5e"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {HeroIntro: __webpack_require__(67).default});


/***/ })

};

const hero = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': hero$1,
  ids: ids,
  modules: modules
}, [hero$1]));

export { hero as h };
