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

var commonSectionBlock$1 = {};

var ids = commonSectionBlock$1.ids = [1];
var modules = commonSectionBlock$1.modules = {

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

/***/ })

};

const commonSectionBlock = /*#__PURE__*/Object.freeze(/*#__PURE__*/_mergeNamespaces({
  __proto__: null,
  'default': commonSectionBlock$1,
  ids: ids,
  modules: modules
}, [commonSectionBlock$1]));

export { commonSectionBlock as c };
