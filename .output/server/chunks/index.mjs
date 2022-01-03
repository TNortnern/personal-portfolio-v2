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

var pages = {};

var ids = pages.ids = [6,1,2,3,4,5];
var modules = pages.modules = {

/***/ 65:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.js!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./components/common/SectionBlock.vue?vue&type=template&id=4893ab7c&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main-container pt-32 pb-36"},[_vm._ssrNode("<div class=\"text-center\"><h4 class=\"text-app-light-blue text-xl font-bold\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.caption)+"\n    ")+"</h4> <h2 class=\"text-5xl\">"+_vm._ssrEscape("\n      "+_vm._s(_vm.title)+"\n    ")+"</h2></div> "),_vm._t("default")],2)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./components/common/SectionBlock.vue?vue&type=template&id=4893ab7c&

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/babel-loader/lib??ref--0-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.js!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./components/common/SectionBlock.vue?vue&type=script&lang=ts&
const __sfc_main = {};
__sfc_main.props = {
  caption: {
    key: "caption",
    required: true,
    type: String
  },
  title: {
    key: "title",
    required: true,
    type: String
  }
};

__sfc_main.setup = (__props, __ctx) => {
  return {};
};

/* harmony default export */ var SectionBlockvue_type_script_lang_ts_ = (__sfc_main);
// CONCATENATED MODULE: ./components/common/SectionBlock.vue?vue&type=script&lang=ts&
 /* harmony default export */ var common_SectionBlockvue_type_script_lang_ts_ = (SectionBlockvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/common/SectionBlock.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  common_SectionBlockvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6290ec24"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

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


/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.js!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./components/services/Services.vue?vue&type=template&id=76c7ae5a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('SectionBlock',{attrs:{"caption":"What I Offer?","title":"My Services"}},[_c('div',{staticClass:"flex justify-between mt-16"},_vm._l((4),function(i){return _c('div',{key:i,staticClass:"w-[20%]"},[_c('span',{staticClass:"bg-app-dark-blue rounded-full p-4 flex items-center justify-center text-white w-24 h-24 mx-auto mb-5"},[_vm._v("\n        icn\n      ")]),_vm._v(" "),_c('div',{},[_c('h5',{staticClass:"text-2xl mb-5"},[_vm._v("\n          User Research\n        ")]),_vm._v(" "),_vm._l((1 * i),function(k){return _c('span',{key:k,staticClass:"text-gray-400 block"},[_vm._v("\n          Lorem ipsum dolor sit amet.\n        ")])})],2)])}),0)])};
var staticRenderFns = [];


// CONCATENATED MODULE: ./components/services/Services.vue?vue&type=template&id=76c7ae5a&

// EXTERNAL MODULE: ./components/common/SectionBlock.vue + 4 modules
var SectionBlock = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/babel-loader/lib??ref--0-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.js!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./components/services/Services.vue?vue&type=script&lang=ts&

const __sfc_main = {};

__sfc_main.setup = (__props, __ctx) => {
  return {};
};

__sfc_main.components = Object.assign({
  SectionBlock: SectionBlock["default"]
}, __sfc_main.components);
/* harmony default export */ var Servicesvue_type_script_lang_ts_ = (__sfc_main);
// CONCATENATED MODULE: ./components/services/Services.vue?vue&type=script&lang=ts&
 /* harmony default export */ var services_Servicesvue_type_script_lang_ts_ = (Servicesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./components/services/Services.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  services_Servicesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "6fa9ea5e"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 70:
/***/ (function(module, __webpack_exports__, __webpack_require__) {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.js!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./pages/index.vue?vue&type=template&id=65cd5f20&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{},[_c('Hero'),_vm._ssrNode(" "),_c('Services'),_vm._ssrNode(" "),_c('SectionBlock',{attrs:{"caption":"Portfolio","title":"My Works"}},[_c('div',{staticClass:"flex justify-center text-lg gap-6 mt-16"},_vm._l((_vm.tabs),function(tab,i){return _c('button',{key:i,staticClass:"rounded-full py-2.5 w-30 duration-150 capitalize",class:_vm.activeItem === i ? 'bg-app-light-blue text-white' : 'text-gray-400 hover:bg-app-light-blue hover:text-white hover:bg-opacity-75',on:{"click":function($event){_vm.activeItem = i;}}},[_vm._v(_vm._s(tab))])}),0),_vm._v(" "),_c('div',{staticClass:"grid grid-cols-2 gap-x-4 gap-y-8 justify-items-center pt-16"},_vm._l((_vm.projects),function(project){return _c('div',{key:project.id,staticClass:"group relative opacity-80 hover:opacity-100 duration-150"},[_c('img',{staticClass:"w-full h-full object-cover",attrs:{"src":project.media && project.media[0] && project.media[0].url,"alt":"proj"}})])}),0)])],2)};
var staticRenderFns = [];


// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=65cd5f20&

// EXTERNAL MODULE: external "core-js/modules/esnext.weak-map.delete-all.js"
__webpack_require__(35);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.delete-all.js"
__webpack_require__(36);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.every.js"
__webpack_require__(37);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.filter.js"
__webpack_require__(38);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find.js"
__webpack_require__(39);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.find-key.js"
__webpack_require__(40);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.includes.js"
__webpack_require__(41);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.key-of.js"
__webpack_require__(42);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-keys.js"
__webpack_require__(43);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.map-values.js"
__webpack_require__(44);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.merge.js"
__webpack_require__(45);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.reduce.js"
__webpack_require__(46);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.some.js"
__webpack_require__(47);

// EXTERNAL MODULE: external "core-js/modules/esnext.map.update.js"
__webpack_require__(48);

// EXTERNAL MODULE: external "defu"
__webpack_require__(64);

// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.mjs
var vue_composition_api = __webpack_require__(0);

// EXTERNAL MODULE: ./node_modules/@nuxt/bridge/dist/runtime/app.mjs
__webpack_require__(4);

// EXTERNAL MODULE: ./node_modules/@nuxt/bridge/dist/runtime/composables.mjs + 4 modules
__webpack_require__(6);

// CONCATENATED MODULE: ./node_modules/@nuxt/bridge/dist/runtime/capi.legacy.mjs

















 // Vue composition API export


 // Common deprecation utils
// TODO: Add migration guide docs to @nuxtjs/composition-api

const checkDocsMsg = 'Please see https://v3.nuxtjs.org/getting-started/bridge-composition-api for more information.';
const msgPrefix = '[bridge] [legacy capi]';

const _warned = {};

const warnOnce = (id, message) => {
  if (!_warned[id]) {
    console.warn(msgPrefix, message, checkDocsMsg);
    _warned[id] = true;
  }
}; // Warn in case of having any imports from `@nuxtjs/composition-api`


warnOnce('import', '`@nuxtjs/composition-api` is deprecated.'); // Stub functions that provided type support
// EXTERNAL MODULE: ./node_modules/@nuxt/bridge/dist/runtime/index.mjs
var runtime = __webpack_require__(3);

// EXTERNAL MODULE: ./components/hero/Hero.vue + 4 modules
var Hero = __webpack_require__(68);

// EXTERNAL MODULE: ./components/services/Services.vue + 4 modules
var Services = __webpack_require__(69);

// EXTERNAL MODULE: ./components/common/SectionBlock.vue + 4 modules
var SectionBlock = __webpack_require__(65);

// CONCATENATED MODULE: ./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--34-0!./node_modules/babel-loader/lib??ref--0-0!./node_modules/@nuxt/components/dist/loader.js??ref--2-0!./node_modules/vue-loader/lib??vue-loader-options!./node_modules/windicss-webpack-plugin/dist/loaders/windicss-template.js!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--32-0!./node_modules/unplugin/dist/webpack/loaders/transform.js??ref--33-0!./pages/index.vue?vue&type=script&lang=ts&





const __sfc_main = {};

__sfc_main.setup = (__props, __ctx) => {
  const projects = Object(vue_composition_api["J" /* ref */])([]);

  const getProjects = () => {
    const {
      data,
      refresh
    } = Object(runtime["c" /* useLazyFetch */])('https://personalport-be.herokuapp.com/projects');
    projects.value = data.value;
  };

  getProjects();
  const activeItem = Object(vue_composition_api["J" /* ref */])(1);
  const tabs = ['all', 'websites', 'design', 'mobile apps'];
  return {
    projects,
    activeItem,
    tabs
  };
};

__sfc_main.components = Object.assign({
  Hero: Hero["default"],
  Services: Services["default"],
  SectionBlock: SectionBlock["default"]
}, __sfc_main.components);
/* harmony default export */ var transform_ref_33_0_pagesvue_type_script_lang_ts_ = (__sfc_main);
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=ts&
 /* harmony default export */ var pagesvue_type_script_lang_ts_ = (transform_ref_33_0_pagesvue_type_script_lang_ts_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_ts_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "544b95af"
  
);

/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Hero: __webpack_require__(68).default,Services: __webpack_require__(69).default});


/***/ })

};

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': pages,
  ids: ids,
  modules: modules
}, [pages]));

export { index as i };
