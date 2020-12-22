(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@ncform/ncform-common"));
	else if(typeof define === 'function' && define.amd)
		define("arrayTabs", ["ncformCommon"], factory);
	else if(typeof exports === 'object')
		exports["arrayTabs"] = factory(require("@ncform/ncform-common"));
	else
		root["arrayTabs"] = factory(root["ncformCommon"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__ncform_ncform_common__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/components/layout-comps/array-tabs.vue");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js?!./src/components/layout-comps/array-tabs.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/daniel/Projects/Owner/ncform/ncform/node_modules/babel-loader/lib!/Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib??vue-loader-options!./src/components/layout-comps/array-tabs.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ncformCommon = __webpack_require__(/*! @ncform/ncform-common */ "@ncform/ncform-common");

var _ncformCommon2 = _interopRequireDefault(_ncformCommon);

var _sortablejs = __webpack_require__(/*! sortablejs */ "./node_modules/sortablejs/modular/sortable.complete.esm.js");

var _sortablejs2 = _interopRequireDefault(_sortablejs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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


var layoutArrayMixin = _ncformCommon2.default.mixins.vue.layoutArrayMixin;

exports.default = {

  mixins: [layoutArrayMixin],

  i18nData: {
    en: {
      delItemTips: 'Are you sure to delete this item?'
    },
    zh_cn: {
      delItemTips: '确定要删除该项吗？'
    }
  },

  data: function data() {
    return {
      activeName: '0',
      defaultConfig: {
        tabPosition: 'top'
      }
    };
  },
  mounted: function mounted() {
    var vm = this;
    var el = this.$el.querySelector(".el-tabs__nav");
    if (!this.mergeConfig.disableReorder) {
      var sortTabs = _sortablejs2.default.create(el, {
        animation: 200,
        filter: ".el-icon-close",
        dragClass: 'dragging',
        onEnd: function onEnd(evt) {
          var list = vm.schema.value;
          var item = list.splice(evt.oldIndex, 1)[0];
          list.splice(evt.newIndex, 0, item);
          vm.schema.value = [];
          vm.$nextTick(function () {
            vm.schema.value = list;
            vm.activeName = String(evt.newIndex);
          });
        }
      });
    }
  },


  methods: {
    handleTabsEdit: function handleTabsEdit(targetName, action) {
      var _this = this;

      if (action === 'add') {
        this.addItem();
        this.$data.activeName = this.schema.value.length - 1 + '';
      }
      if (action === 'remove') {
        this.delItem(targetName, this.mergeConfig.requiredDelConfirm, this.mergeConfig.delConfirmText.item || this.$nclang('delItemTips'));
        this.$nextTick(function () {
          var tabIdx = parseInt(targetName);
          if (targetName === _this.$data.activeName) {
            // Remote item is the active item
            if (tabIdx === 0) {
              // First item
              _this.$data.activeName = '0';
            } else {
              _this.$data.activeName = tabIdx - 1 + '';
            }
          } else {
            var activeIdx = parseInt(_this.$data.activeName);
            if (activeIdx > tabIdx) {
              // active item at the right side
              _this.$data.activeName = activeIdx - 1 + '';
            }
          }
        });
      }
    }
  }

};

/***/ }),

/***/ "../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./src/components/layout-comps/array-tabs.vue?vue&type=template&id=68eaec80&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** /Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!/Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib??vue-loader-options!./src/components/layout-comps/array-tabs.vue?vue&type=template&id=68eaec80& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "__array-tabs-form-item" },
    [
      _vm.schema.ui.legend && _vm.schema.ui.showLegend
        ? _c(
            "legend",
            {
              on: {
                click: function($event) {
                  _vm.collapse()
                }
              }
            },
            [
              _vm._v(
                "\n    " +
                  _vm._s(_vm._analyzeVal(_vm.schema.ui.legend)) +
                  "\n    "
              ),
              !_vm.mergeConfig.disableCollapse
                ? _c("i", {
                    staticClass: "el-collapse-item__arrow",
                    class: {
                      "el-icon-arrow-up": !_vm.collapsed,
                      "el-icon-arrow-down": _vm.collapsed
                    }
                  })
                : _vm._e()
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "el-tabs",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.collapsed,
              expression: "!collapsed"
            }
          ],
          attrs: {
            addable: !_vm.mergeConfig.disableAdd,
            type: "card",
            "tab-position": _vm.mergeConfig.tabPosition
          },
          on: { edit: _vm.handleTabsEdit },
          model: {
            value: _vm.activeName,
            callback: function($$v) {
              _vm.activeName = $$v
            },
            expression: "activeName"
          }
        },
        _vm._l(_vm.schema.value, function(dataItem, idx) {
          return _c(
            "el-tab-pane",
            {
              key: dataItem.__dataSchema.__id,
              attrs: {
                closable:
                  (!_vm.mergeConfig.disableDel &&
                    !_vm.isDelExceptionRow(dataItem.__dataSchema)) ||
                  (_vm.mergeConfig.disableDel &&
                    _vm.isDelExceptionRow(dataItem.__dataSchema)),
                name: "" + idx
              }
            },
            [
              _c(
                "span",
                {
                  staticClass: "__array-tabs-tab-label",
                  attrs: { slot: "label" },
                  slot: "label"
                },
                [
                  _vm._v(
                    "\n        " +
                      _vm._s(
                        _vm._analyzeVal(dataItem.__dataSchema.ui.label, idx) +
                          (_vm.mergeConfig.autoIdxToLabel
                            ? " " + (idx + 1)
                            : "")
                      ) +
                      "\n        "
                  ),
                  _vm._v(" "),
                  _c(
                    "el-tooltip",
                    {
                      staticClass: "item",
                      attrs: { effect: "dark", placement: "right-start" }
                    },
                    [
                      _c("div", {
                        attrs: { slot: "content" },
                        domProps: {
                          innerHTML: _vm._s(
                            dataItem.__dataSchema.ui.help.content
                          )
                        },
                        slot: "content"
                      }),
                      _vm._v(" "),
                      dataItem.__dataSchema.ui.help.show === true
                        ? _c(
                            "a",
                            { staticClass: "help", attrs: { href: "#" } },
                            [
                              _c(
                                "span",
                                {
                                  class: dataItem.__dataSchema.ui.help.iconCls
                                },
                                [
                                  _vm._v(
                                    _vm._s(dataItem.__dataSchema.ui.help.text)
                                  )
                                ]
                              )
                            ]
                          )
                        : _vm._e()
                    ]
                  )
                ],
                1
              ),
              _vm._v(" "),
              _vm.isNormalObjSchema(dataItem.__dataSchema)
                ? [
                    _c(
                      "ncform-object",
                      {
                        attrs: {
                          schema: dataItem.__dataSchema,
                          "form-data": _vm.formData,
                          "idx-chain":
                            (_vm.idxChain ? _vm.idxChain + "," : "") + idx,
                          config: dataItem.__dataSchema.ui.widgetConfig,
                          "global-const": _vm.globalConst,
                          "show-legend": false
                        }
                      },
                      [
                        _vm._l(
                          dataItem.__dataSchema.properties || {
                            __notObjItem: dataItem.__dataSchema
                          },
                          function(fieldSchema, fieldName) {
                            return _c(
                              "template",
                              { slot: fieldName },
                              [
                                _vm._t(fieldName, null, {
                                  schema: fieldSchema,
                                  idx: idx
                                })
                              ],
                              2
                            )
                          }
                        )
                      ],
                      2
                    )
                  ]
                : [
                    _vm._t("__notObjItem", null, {
                      schema: dataItem.__dataSchema,
                      idx: idx
                    })
                  ]
            ],
            2
          )
        })
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!*************************************************************************************************************!*\
  !*** /Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \*************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?!./src/components/layout-comps/array-tabs.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!/Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!/Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib??vue-loader-options!./src/components/layout-comps/array-tabs.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")();
// imports


// module
exports.push([module.i, "\n.__array-tabs-form-item > legend {\n  border-left: 6px solid #878D99;\n  padding: 6px;\n  background-color: #d8dce5;\n  color: #5a5e66;\n  font-size: 14px;\n  margin-bottom: 0px;\n  border-radius: 4px 4px 0 0;\n}\n.__array-tabs-form-item > legend .el-collapse-item__arrow {\n    cursor: pointer;\n    line-height: 22px;\n}\n.__array-tabs-form-item .el-tabs {\n  margin-top: 6px;\n}\n.__array-tabs-form-item .el-tabs.el-tabs--left .el-tabs__new-tab {\n    margin-left: 0;\n}\n.__array-tabs-form-item .el-tabs.el-tabs--left .el-tabs__new-tab .el-icon-plus {\n      width: 100%;\n}\n.__array-tabs-form-item .el-tabs .dragging {\n    background-color: #f7f4f4;\n}\n.__array-tabs-form-item .el-tabs .el-tabs__item {\n    display: inline-flex;\n    justify-content: left;\n    align-items: center;\n}\n.__array-tabs-form-item .el-tabs .el-tabs__item .__array-tabs-tab-label {\n      display: inline-block;\n      max-width: 200px;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      line-height: 14px;\n}\n.__array-tabs-form-item .el-tab-pane > .__object-form-item > .el-row {\n  border: none;\n  margin-top: -8px;\n}\n.__array-tabs-form-item .el-tabs__header {\n  margin: 0 0 8px;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function() {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		var result = [];
		for(var i = 0; i < this.length; i++) {
			var item = this[i];
			if(item[2]) {
				result.push("@media " + item[2] + "{" + item[1] + "}");
			} else {
				result.push(item[1]);
			}
		}
		return result.join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};


/***/ }),

/***/ "./node_modules/sortablejs/modular/sortable.complete.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/sortablejs/modular/sortable.complete.esm.js ***!
  \******************************************************************/
/*! exports provided: default, Sortable */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Sortable", function() { return It; });
function t(){return(t=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t}).apply(this,arguments)}function e(t){if("undefined"!=typeof window&&window.navigator)return!!navigator.userAgent.match(t)}var n=e(/(?:Trident.*rv[ :]?11\.|msie|iemobile|Windows Phone)/i),o=e(/Edge/i),i=e(/firefox/i),r=e(/safari/i)&&!e(/chrome/i)&&!e(/android/i),a=e(/iP(ad|od|hone)/i),l=e(/chrome/i)&&e(/android/i),s={capture:!1,passive:!1};function c(t,e,o){t.addEventListener(e,o,!n&&s)}function u(t,e,o){t.removeEventListener(e,o,!n&&s)}function d(t,e){if(e){if(">"===e[0]&&(e=e.substring(1)),t)try{if(t.matches)return t.matches(e);if(t.msMatchesSelector)return t.msMatchesSelector(e);if(t.webkitMatchesSelector)return t.webkitMatchesSelector(e)}catch(t){return!1}return!1}}function h(t){return t.host&&t!==document&&t.host.nodeType?t.host:t.parentNode}function f(t,e,n,o){if(t){n=n||document;do{if(null!=e&&(">"===e[0]?t.parentNode===n&&d(t,e):d(t,e))||o&&t===n)return t;if(t===n)break}while(t=h(t))}return null}var p,g=/\s+/g;function v(t,e,n){if(t&&e)if(t.classList)t.classList[n?"add":"remove"](e);else{var o=(" "+t.className+" ").replace(g," ").replace(" "+e+" "," ");t.className=(o+(n?" "+e:"")).replace(g," ")}}function m(t,e,n){var o=t&&t.style;if(o){if(void 0===n)return document.defaultView&&document.defaultView.getComputedStyle?n=document.defaultView.getComputedStyle(t,""):t.currentStyle&&(n=t.currentStyle),void 0===e?n:n[e];e in o||-1!==e.indexOf("webkit")||(e="-webkit-"+e),o[e]=n+("string"==typeof n?"":"px")}}function b(t,e){var n="";if("string"==typeof t)n=t;else do{var o=m(t,"transform");o&&"none"!==o&&(n=o+" "+n)}while(!e&&(t=t.parentNode));var i=window.DOMMatrix||window.WebKitCSSMatrix||window.CSSMatrix||window.MSCSSMatrix;return i&&new i(n)}function w(t,e,n){if(t){var o=t.getElementsByTagName(e),i=0,r=o.length;if(n)for(;i<r;i++)n(o[i],i);return o}return[]}function E(){return document.scrollingElement||document.documentElement}function y(t,e,o,i,r){if(t.getBoundingClientRect||t===window){var a,l,s,c,u,d,h;if(t!==window&&t!==E()?(l=(a=t.getBoundingClientRect()).top,s=a.left,c=a.bottom,u=a.right,d=a.height,h=a.width):(l=0,s=0,c=window.innerHeight,u=window.innerWidth,d=window.innerHeight,h=window.innerWidth),(e||o)&&t!==window&&(r=r||t.parentNode,!n))do{if(r&&r.getBoundingClientRect&&("none"!==m(r,"transform")||o&&"static"!==m(r,"position"))){var f=r.getBoundingClientRect();l-=f.top+parseInt(m(r,"border-top-width")),s-=f.left+parseInt(m(r,"border-left-width")),c=l+a.height,u=s+a.width;break}}while(r=r.parentNode);if(i&&t!==window){var p=b(r||t),g=p&&p.a,v=p&&p.d;p&&(c=(l/=v)+(d/=v),u=(s/=g)+(h/=g))}return{top:l,left:s,bottom:c,right:u,width:h,height:d}}}function D(t,e,n){for(var o=x(t,!0),i=y(t)[e];o;){var r=y(o)[n];if(!("top"===n||"left"===n?i>=r:i<=r))return o;if(o===E())break;o=x(o,!1)}return!1}function _(t,e,n){for(var o=0,i=0,r=t.children;i<r.length;){if("none"!==r[i].style.display&&r[i]!==It.ghost&&r[i]!==It.dragged&&f(r[i],n.draggable,t,!1)){if(o===e)return r[i];o++}i++}return null}function S(t,e){for(var n=t.lastElementChild;n&&(n===It.ghost||"none"===m(n,"display")||e&&!d(n,e));)n=n.previousElementSibling;return n||null}function C(t,e){var n=0;if(!t||!t.parentNode)return-1;for(;t=t.previousElementSibling;)"TEMPLATE"===t.nodeName.toUpperCase()||t===It.clone||e&&!d(t,e)||n++;return n}function T(t){var e=0,n=0,o=E();if(t)do{var i=b(t);e+=t.scrollLeft*i.a,n+=t.scrollTop*i.d}while(t!==o&&(t=t.parentNode));return[e,n]}function x(t,e){if(!t||!t.getBoundingClientRect)return E();var n=t,o=!1;do{if(n.clientWidth<n.scrollWidth||n.clientHeight<n.scrollHeight){var i=m(n);if(n.clientWidth<n.scrollWidth&&("auto"==i.overflowX||"scroll"==i.overflowX)||n.clientHeight<n.scrollHeight&&("auto"==i.overflowY||"scroll"==i.overflowY)){if(!n.getBoundingClientRect||n===document.body)return E();if(o||e)return n;o=!0}}}while(n=n.parentNode);return E()}function M(t,e){return Math.round(t.top)===Math.round(e.top)&&Math.round(t.left)===Math.round(e.left)&&Math.round(t.height)===Math.round(e.height)&&Math.round(t.width)===Math.round(e.width)}function N(t,e){return function(){if(!p){var n=arguments,o=this;1===n.length?t.call(o,n[0]):t.apply(o,n),p=setTimeout(function(){p=void 0},e)}}}function O(t,e,n){t.scrollLeft+=e,t.scrollTop+=n}function A(t){var e=window.Polymer,n=window.jQuery||window.Zepto;return e&&e.dom?e.dom(t).cloneNode(!0):n?n(t).clone(!0)[0]:t.cloneNode(!0)}function I(t,e){m(t,"position","absolute"),m(t,"top",e.top),m(t,"left",e.left),m(t,"width",e.width),m(t,"height",e.height)}function P(t){m(t,"position",""),m(t,"top",""),m(t,"left",""),m(t,"width",""),m(t,"height","")}var k="Sortable"+(new Date).getTime(),R=[],X={initializeByDefault:!0},Y={mount:function(t){for(var e in X)X.hasOwnProperty(e)&&!(e in t)&&(t[e]=X[e]);R.push(t)},pluginEvent:function(e,n,o){var i=this;this.eventCanceled=!1,o.cancel=function(){i.eventCanceled=!0};var r=e+"Global";R.forEach(function(i){n[i.pluginName]&&(n[i.pluginName][r]&&n[i.pluginName][r](t({sortable:n},o)),n.options[i.pluginName]&&n[i.pluginName][e]&&n[i.pluginName][e](t({sortable:n},o)))})},initializePlugins:function(t,e,n,o){for(var i in R.forEach(function(o){var i=o.pluginName;if(t.options[i]||o.initializeByDefault){var r=new o(t,e,t.options);r.sortable=t,r.options=t.options,t[i]=r,Object.assign(n,r.defaults)}}),t.options)if(t.options.hasOwnProperty(i)){var r=this.modifyOption(t,i,t.options[i]);void 0!==r&&(t.options[i]=r)}},getEventProperties:function(t,e){var n={};return R.forEach(function(o){"function"==typeof o.eventProperties&&Object.assign(n,o.eventProperties.call(e[o.pluginName],t))}),n},modifyOption:function(t,e,n){var o;return R.forEach(function(i){t[i.pluginName]&&i.optionListeners&&"function"==typeof i.optionListeners[e]&&(o=i.optionListeners[e].call(t[i.pluginName],n))}),o}};function B(e){var i=e.sortable,r=e.rootEl,a=e.name,l=e.targetEl,s=e.cloneEl,c=e.toEl,u=e.fromEl,d=e.oldIndex,h=e.newIndex,f=e.oldDraggableIndex,p=e.newDraggableIndex,g=e.originalEvent,v=e.putSortable,m=e.extraEventProperties;if(i=i||r&&r[k]){var b,w=i.options,E="on"+a.charAt(0).toUpperCase()+a.substr(1);!window.CustomEvent||n||o?(b=document.createEvent("Event")).initEvent(a,!0,!0):b=new CustomEvent(a,{bubbles:!0,cancelable:!0}),b.to=c||r,b.from=u||r,b.item=l||r,b.clone=s,b.oldIndex=d,b.newIndex=h,b.oldDraggableIndex=f,b.newDraggableIndex=p,b.originalEvent=g,b.pullMode=v?v.lastPutMode:void 0;var y=t({},m,Y.getEventProperties(a,i));for(var D in y)b[D]=y[D];r&&r.dispatchEvent(b),w[E]&&w[E].call(i,b)}}var H=function(e,n,o){var i=void 0===o?{}:o,r=i.evt,a=function(t,e){if(null==t)return{};var n,o,i={},r=Object.keys(t);for(o=0;o<r.length;o++)e.indexOf(n=r[o])>=0||(i[n]=t[n]);return i}(i,["evt"]);Y.pluginEvent.bind(It)(e,n,t({dragEl:L,parentEl:K,ghostEl:W,rootEl:j,nextEl:z,lastDownEl:G,cloneEl:U,cloneHidden:q,dragStarted:lt,putSortable:tt,activeSortable:It.active,originalEvent:r,oldIndex:V,oldDraggableIndex:Q,newIndex:Z,newDraggableIndex:$,hideGhostForTarget:xt,unhideGhostForTarget:Mt,cloneNowHidden:function(){q=!0},cloneNowShown:function(){q=!1},dispatchSortableEvent:function(t){F({sortable:n,name:t,originalEvent:r})}},a))};function F(e){B(t({putSortable:tt,cloneEl:U,targetEl:L,rootEl:j,oldIndex:V,oldDraggableIndex:Q,newIndex:Z,newDraggableIndex:$},e))}var L,K,W,j,z,G,U,q,V,Z,Q,$,J,tt,et,nt,ot,it,rt,at,lt,st,ct,ut,dt,ht=!1,ft=!1,pt=[],gt=!1,vt=!1,mt=[],bt=!1,wt=[],Et="undefined"!=typeof document,yt=a,Dt=o||n?"cssFloat":"float",_t=Et&&!l&&!a&&"draggable"in document.createElement("div"),St=function(){if(Et){if(n)return!1;var t=document.createElement("x");return t.style.cssText="pointer-events:auto","auto"===t.style.pointerEvents}}(),Ct=function(t,e){var n=m(t),o=parseInt(n.width)-parseInt(n.paddingLeft)-parseInt(n.paddingRight)-parseInt(n.borderLeftWidth)-parseInt(n.borderRightWidth),i=_(t,0,e),r=_(t,1,e),a=i&&m(i),l=r&&m(r),s=a&&parseInt(a.marginLeft)+parseInt(a.marginRight)+y(i).width,c=l&&parseInt(l.marginLeft)+parseInt(l.marginRight)+y(r).width;return"flex"===n.display?"column"===n.flexDirection||"column-reverse"===n.flexDirection?"vertical":"horizontal":"grid"===n.display?n.gridTemplateColumns.split(" ").length<=1?"vertical":"horizontal":i&&a.float&&"none"!==a.float?!r||"both"!==l.clear&&l.clear!==("left"===a.float?"left":"right")?"horizontal":"vertical":i&&("block"===a.display||"flex"===a.display||"table"===a.display||"grid"===a.display||s>=o&&"none"===n[Dt]||r&&"none"===n[Dt]&&s+c>o)?"vertical":"horizontal"},Tt=function(t){function e(t,n){return function(o,i,r,a){if(null==t&&(n||o.options.group.name&&i.options.group.name&&o.options.group.name===i.options.group.name))return!0;if(null==t||!1===t)return!1;if(n&&"clone"===t)return t;if("function"==typeof t)return e(t(o,i,r,a),n)(o,i,r,a);var l=(n?o:i).options.group.name;return!0===t||"string"==typeof t&&t===l||t.join&&t.indexOf(l)>-1}}var n={},o=t.group;o&&"object"==typeof o||(o={name:o}),n.name=o.name,n.checkPull=e(o.pull,!0),n.checkPut=e(o.put),n.revertClone=o.revertClone,t.group=n},xt=function(){!St&&W&&m(W,"display","none")},Mt=function(){!St&&W&&m(W,"display","")};Et&&document.addEventListener("click",function(t){if(ft)return t.preventDefault(),t.stopPropagation&&t.stopPropagation(),t.stopImmediatePropagation&&t.stopImmediatePropagation(),ft=!1,!1},!0);var Nt,Ot=function(t){if(L){var e=(i=(t=t.touches?t.touches[0]:t).clientX,r=t.clientY,pt.some(function(t){if(!S(t)){var e=y(t),n=t[k].options.emptyInsertThreshold;return n&&i>=e.left-n&&i<=e.right+n&&r>=e.top-n&&r<=e.bottom+n?a=t:void 0}}),a);if(e){var n={};for(var o in t)t.hasOwnProperty(o)&&(n[o]=t[o]);n.target=n.rootEl=e,n.preventDefault=void 0,n.stopPropagation=void 0,e[k]._onDragOver(n)}}var i,r,a},At=function(t){L&&L.parentNode[k]._isOutsideThisEl(t.target)};function It(e,n){if(!e||!e.nodeType||1!==e.nodeType)throw"Sortable: `el` must be an HTMLElement, not "+{}.toString.call(e);this.el=e,this.options=n=Object.assign({},n),e[k]=this;var o,i,r={group:null,sort:!0,disabled:!1,store:null,handle:null,draggable:/^[uo]l$/i.test(e.nodeName)?">li":">*",swapThreshold:1,invertSwap:!1,invertedSwapThreshold:null,removeCloneOnHide:!0,direction:function(){return Ct(e,this.options)},ghostClass:"sortable-ghost",chosenClass:"sortable-chosen",dragClass:"sortable-drag",ignore:"a, img",filter:null,preventOnFilter:!0,animation:0,easing:null,setData:function(t,e){t.setData("Text",e.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:"data-id",delay:0,delayOnTouchOnly:!1,touchStartThreshold:(Number.parseInt?Number:window).parseInt(window.devicePixelRatio,10)||1,forceFallback:!1,fallbackClass:"sortable-fallback",fallbackOnBody:!1,fallbackTolerance:0,fallbackOffset:{x:0,y:0},supportPointer:!1!==It.supportPointer&&"PointerEvent"in window,emptyInsertThreshold:5};for(var a in Y.initializePlugins(this,e,r),r)!(a in n)&&(n[a]=r[a]);for(var l in Tt(n),this)"_"===l.charAt(0)&&"function"==typeof this[l]&&(this[l]=this[l].bind(this));this.nativeDraggable=!n.forceFallback&&_t,this.nativeDraggable&&(this.options.touchStartThreshold=1),n.supportPointer?c(e,"pointerdown",this._onTapStart):(c(e,"mousedown",this._onTapStart),c(e,"touchstart",this._onTapStart)),this.nativeDraggable&&(c(e,"dragover",this),c(e,"dragenter",this)),pt.push(this.el),n.store&&n.store.get&&this.sort(n.store.get(this)||[]),Object.assign(this,(i=[],{captureAnimationState:function(){i=[],this.options.animation&&[].slice.call(this.el.children).forEach(function(e){if("none"!==m(e,"display")&&void 0!==e){i.push({target:e,rect:y(e)});var n=t({},i[i.length-1].rect);if(e.thisAnimationDuration){var o=b(e,!0);o&&(n.top-=o.f,n.left-=o.e)}e.fromRect=n}})},addAnimationState:function(t){i.push(t)},removeAnimationState:function(t){i.splice(function(t,e){for(var n in t)if(t.hasOwnProperty(n))for(var o in e)if(e.hasOwnProperty(o)&&e[o]===t[n][o])return Number(n);return-1}(i,{target:t}),1)},animateAll:function(t){var e=this;if(!this.options.animation)return clearTimeout(o),void("function"==typeof t&&t());var n=!1,r=0;i.forEach(function(t){var o=0,i=t.target,a=i.fromRect,l=y(i),s=i.prevFromRect,c=i.prevToRect,u=t.rect,d=b(i,!0);d&&(l.top-=d.f,l.left-=d.e),i.toRect=l,i.thisAnimationDuration&&M(s,l)&&!M(a,l)&&(u.top-l.top)/(u.left-l.left)==(a.top-l.top)/(a.left-l.left)&&(o=function(t,e,n,o){return Math.sqrt(Math.pow(e.top-t.top,2)+Math.pow(e.left-t.left,2))/Math.sqrt(Math.pow(e.top-n.top,2)+Math.pow(e.left-n.left,2))*o.animation}(u,s,c,e.options)),M(l,a)||(i.prevFromRect=a,i.prevToRect=l,o||(o=e.options.animation),e.animate(i,u,l,o)),o&&(n=!0,r=Math.max(r,o),clearTimeout(i.animationResetTimer),i.animationResetTimer=setTimeout(function(){i.animationTime=0,i.prevFromRect=null,i.fromRect=null,i.prevToRect=null,i.thisAnimationDuration=null},o),i.thisAnimationDuration=o)}),clearTimeout(o),n?o=setTimeout(function(){"function"==typeof t&&t()},r):"function"==typeof t&&t(),i=[]},animate:function(t,e,n,o){if(o){m(t,"transition",""),m(t,"transform","");var i=b(this.el),r=(e.left-n.left)/(i&&i.a||1),a=(e.top-n.top)/(i&&i.d||1);t.animatingX=!!r,t.animatingY=!!a,m(t,"transform","translate3d("+r+"px,"+a+"px,0)"),this.forRepaintDummy=function(t){return t.offsetWidth}(t),m(t,"transition","transform "+o+"ms"+(this.options.easing?" "+this.options.easing:"")),m(t,"transform","translate3d(0,0,0)"),"number"==typeof t.animated&&clearTimeout(t.animated),t.animated=setTimeout(function(){m(t,"transition",""),m(t,"transform",""),t.animated=!1,t.animatingX=!1,t.animatingY=!1},o)}}}))}function Pt(t,e,i,r,a,l,s,c){var u,d,h=t[k],f=h.options.onMove;return!window.CustomEvent||n||o?(u=document.createEvent("Event")).initEvent("move",!0,!0):u=new CustomEvent("move",{bubbles:!0,cancelable:!0}),u.to=e,u.from=t,u.dragged=i,u.draggedRect=r,u.related=a||e,u.relatedRect=l||y(e),u.willInsertAfter=c,u.originalEvent=s,t.dispatchEvent(u),f&&(d=f.call(h,u,s)),d}function kt(t){t.draggable=!1}function Rt(){bt=!1}function Xt(t){for(var e=t.tagName+t.className+t.src+t.href+t.textContent,n=e.length,o=0;n--;)o+=e.charCodeAt(n);return o.toString(36)}function Yt(t){return setTimeout(t,0)}function Bt(t){return clearTimeout(t)}It.prototype={constructor:It,_isOutsideThisEl:function(t){this.el.contains(t)||t===this.el||(st=null)},_getDirection:function(t,e){return"function"==typeof this.options.direction?this.options.direction.call(this,t,e,L):this.options.direction},_onTapStart:function(t){if(t.cancelable){var e=this,n=this.el,o=this.options,i=o.preventOnFilter,a=t.type,l=t.touches&&t.touches[0]||t.pointerType&&"touch"===t.pointerType&&t,s=(l||t).target,c=t.target.shadowRoot&&(t.path&&t.path[0]||t.composedPath&&t.composedPath()[0])||s,u=o.filter;if(function(t){wt.length=0;for(var e=t.getElementsByTagName("input"),n=e.length;n--;){var o=e[n];o.checked&&wt.push(o)}}(n),!L&&!(/mousedown|pointerdown/.test(a)&&0!==t.button||o.disabled)&&!c.isContentEditable&&(this.nativeDraggable||!r||!s||"SELECT"!==s.tagName.toUpperCase())&&!((s=f(s,o.draggable,n,!1))&&s.animated||G===s)){if(V=C(s),Q=C(s,o.draggable),"function"==typeof u){if(u.call(this,t,s,this))return F({sortable:e,rootEl:c,name:"filter",targetEl:s,toEl:n,fromEl:n}),H("filter",e,{evt:t}),void(i&&t.cancelable&&t.preventDefault())}else if(u&&(u=u.split(",").some(function(o){if(o=f(c,o.trim(),n,!1))return F({sortable:e,rootEl:o,name:"filter",targetEl:s,fromEl:n,toEl:n}),H("filter",e,{evt:t}),!0})))return void(i&&t.cancelable&&t.preventDefault());o.handle&&!f(c,o.handle,n,!1)||this._prepareDragStart(t,l,s)}}},_prepareDragStart:function(t,e,r){var a,l=this,s=l.el,u=l.options,d=s.ownerDocument;if(r&&!L&&r.parentNode===s){var h=y(r);if(j=s,K=(L=r).parentNode,z=L.nextSibling,G=r,J=u.group,It.dragged=L,rt=(et={target:L,clientX:(e||t).clientX,clientY:(e||t).clientY}).clientX-h.left,at=et.clientY-h.top,this._lastX=(e||t).clientX,this._lastY=(e||t).clientY,L.style["will-change"]="all",a=function(){H("delayEnded",l,{evt:t}),It.eventCanceled?l._onDrop():(l._disableDelayedDragEvents(),!i&&l.nativeDraggable&&(L.draggable=!0),l._triggerDragStart(t,e),F({sortable:l,name:"choose",originalEvent:t}),v(L,u.chosenClass,!0))},u.ignore.split(",").forEach(function(t){w(L,t.trim(),kt)}),c(d,"dragover",Ot),c(d,"mousemove",Ot),c(d,"touchmove",Ot),c(d,"mouseup",l._onDrop),c(d,"touchend",l._onDrop),c(d,"touchcancel",l._onDrop),i&&this.nativeDraggable&&(this.options.touchStartThreshold=4,L.draggable=!0),H("delayStart",this,{evt:t}),!u.delay||u.delayOnTouchOnly&&!e||this.nativeDraggable&&(o||n))a();else{if(It.eventCanceled)return void this._onDrop();c(d,"mouseup",l._disableDelayedDrag),c(d,"touchend",l._disableDelayedDrag),c(d,"touchcancel",l._disableDelayedDrag),c(d,"mousemove",l._delayedDragTouchMoveHandler),c(d,"touchmove",l._delayedDragTouchMoveHandler),u.supportPointer&&c(d,"pointermove",l._delayedDragTouchMoveHandler),l._dragStartTimer=setTimeout(a,u.delay)}}},_delayedDragTouchMoveHandler:function(t){var e=t.touches?t.touches[0]:t;Math.max(Math.abs(e.clientX-this._lastX),Math.abs(e.clientY-this._lastY))>=Math.floor(this.options.touchStartThreshold/(this.nativeDraggable&&window.devicePixelRatio||1))&&this._disableDelayedDrag()},_disableDelayedDrag:function(){L&&kt(L),clearTimeout(this._dragStartTimer),this._disableDelayedDragEvents()},_disableDelayedDragEvents:function(){var t=this.el.ownerDocument;u(t,"mouseup",this._disableDelayedDrag),u(t,"touchend",this._disableDelayedDrag),u(t,"touchcancel",this._disableDelayedDrag),u(t,"mousemove",this._delayedDragTouchMoveHandler),u(t,"touchmove",this._delayedDragTouchMoveHandler),u(t,"pointermove",this._delayedDragTouchMoveHandler)},_triggerDragStart:function(t,e){e=e||"touch"==t.pointerType&&t,!this.nativeDraggable||e?c(document,this.options.supportPointer?"pointermove":e?"touchmove":"mousemove",this._onTouchMove):(c(L,"dragend",this),c(j,"dragstart",this._onDragStart));try{document.selection?Yt(function(){document.selection.empty()}):window.getSelection().removeAllRanges()}catch(t){}},_dragStarted:function(t,e){if(ht=!1,j&&L){H("dragStarted",this,{evt:e}),this.nativeDraggable&&c(document,"dragover",At);var n=this.options;!t&&v(L,n.dragClass,!1),v(L,n.ghostClass,!0),It.active=this,t&&this._appendGhost(),F({sortable:this,name:"start",originalEvent:e})}else this._nulling()},_emulateDragOver:function(){if(nt){this._lastX=nt.clientX,this._lastY=nt.clientY,xt();for(var t=document.elementFromPoint(nt.clientX,nt.clientY),e=t;t&&t.shadowRoot&&(t=t.shadowRoot.elementFromPoint(nt.clientX,nt.clientY))!==e;)e=t;if(L.parentNode[k]._isOutsideThisEl(t),e)do{if(e[k]&&e[k]._onDragOver({clientX:nt.clientX,clientY:nt.clientY,target:t,rootEl:e})&&!this.options.dragoverBubble)break;t=e}while(e=e.parentNode);Mt()}},_onTouchMove:function(t){if(et){var e=this.options,n=e.fallbackTolerance,o=e.fallbackOffset,i=t.touches?t.touches[0]:t,r=W&&b(W,!0),a=W&&r&&r.a,l=W&&r&&r.d,s=yt&&dt&&T(dt),c=(i.clientX-et.clientX+o.x)/(a||1)+(s?s[0]-mt[0]:0)/(a||1),u=(i.clientY-et.clientY+o.y)/(l||1)+(s?s[1]-mt[1]:0)/(l||1);if(!It.active&&!ht){if(n&&Math.max(Math.abs(i.clientX-this._lastX),Math.abs(i.clientY-this._lastY))<n)return;this._onDragStart(t,!0)}if(W){r?(r.e+=c-(ot||0),r.f+=u-(it||0)):r={a:1,b:0,c:0,d:1,e:c,f:u};var d="matrix("+r.a+","+r.b+","+r.c+","+r.d+","+r.e+","+r.f+")";m(W,"webkitTransform",d),m(W,"mozTransform",d),m(W,"msTransform",d),m(W,"transform",d),ot=c,it=u,nt=i}t.cancelable&&t.preventDefault()}},_appendGhost:function(){if(!W){var t=this.options.fallbackOnBody?document.body:j,e=y(L,!0,yt,!0,t),n=this.options;if(yt){for(dt=t;"static"===m(dt,"position")&&"none"===m(dt,"transform")&&dt!==document;)dt=dt.parentNode;dt!==document.body&&dt!==document.documentElement?(dt===document&&(dt=E()),e.top+=dt.scrollTop,e.left+=dt.scrollLeft):dt=E(),mt=T(dt)}v(W=L.cloneNode(!0),n.ghostClass,!1),v(W,n.fallbackClass,!0),v(W,n.dragClass,!0),m(W,"transition",""),m(W,"transform",""),m(W,"box-sizing","border-box"),m(W,"margin",0),m(W,"top",e.top),m(W,"left",e.left),m(W,"width",e.width),m(W,"height",e.height),m(W,"opacity","0.8"),m(W,"position",yt?"absolute":"fixed"),m(W,"zIndex","100000"),m(W,"pointerEvents","none"),It.ghost=W,t.appendChild(W),m(W,"transform-origin",rt/parseInt(W.style.width)*100+"% "+at/parseInt(W.style.height)*100+"%")}},_onDragStart:function(t,e){var n=this,o=t.dataTransfer,i=n.options;H("dragStart",this,{evt:t}),It.eventCanceled?this._onDrop():(H("setupClone",this),It.eventCanceled||((U=A(L)).draggable=!1,U.style["will-change"]="",this._hideClone(),v(U,this.options.chosenClass,!1),It.clone=U),n.cloneId=Yt(function(){H("clone",n),It.eventCanceled||(n.options.removeCloneOnHide||j.insertBefore(U,L),n._hideClone(),F({sortable:n,name:"clone"}))}),!e&&v(L,i.dragClass,!0),e?(ft=!0,n._loopId=setInterval(n._emulateDragOver,50)):(u(document,"mouseup",n._onDrop),u(document,"touchend",n._onDrop),u(document,"touchcancel",n._onDrop),o&&(o.effectAllowed="move",i.setData&&i.setData.call(n,o,L)),c(document,"drop",n),m(L,"transform","translateZ(0)")),ht=!0,n._dragStartId=Yt(n._dragStarted.bind(n,e,t)),c(document,"selectstart",n),lt=!0,r&&m(document.body,"user-select","none"))},_onDragOver:function(e){var n,o,i,r,a=this.el,l=e.target,s=this.options,c=s.group,u=It.active,d=J===c,h=s.sort,p=tt||u,g=this,b=!1;if(!bt){if(void 0!==e.preventDefault&&e.cancelable&&e.preventDefault(),l=f(l,s.draggable,a,!0),B("dragOver"),It.eventCanceled)return b;if(L.contains(e.target)||l.animated&&l.animatingX&&l.animatingY||g._ignoreWhileAnimating===l)return U(!1);if(ft=!1,u&&!s.disabled&&(d?h||(i=!j.contains(L)):tt===this||(this.lastPutMode=J.checkPull(this,u,L,e))&&c.checkPut(this,u,L,e))){if(r="vertical"===this._getDirection(e,l),n=y(L),B("dragOverValid"),It.eventCanceled)return b;if(i)return K=j,G(),this._hideClone(),B("revert"),It.eventCanceled||(z?j.insertBefore(L,z):j.appendChild(L)),U(!0);var w=S(a,s.draggable);if(!w||function(t,e,n){var o=y(S(n.el,n.options.draggable));return e?t.clientX>o.right+10||t.clientX<=o.right&&t.clientY>o.bottom&&t.clientX>=o.left:t.clientX>o.right&&t.clientY>o.top||t.clientX<=o.right&&t.clientY>o.bottom+10}(e,r,this)&&!w.animated){if(w===L)return U(!1);if(w&&a===e.target&&(l=w),l&&(o=y(l)),!1!==Pt(j,a,L,n,l,o,e,!!l))return G(),a.appendChild(L),K=a,q(),U(!0)}else if(l.parentNode===a){o=y(l);var E,_,T,x=L.parentNode!==a,M=!function(t,e,n){var o=n?t.left:t.top,i=n?e.left:e.top;return o===i||(n?t.right:t.bottom)===(n?e.right:e.bottom)||o+(n?t.width:t.height)/2===i+(n?e.width:e.height)/2}(L.animated&&L.toRect||n,l.animated&&l.toRect||o,r),N=r?"top":"left",A=D(l,"top","top")||D(L,"top","top"),I=A?A.scrollTop:void 0;if(st!==l&&(_=o[N],gt=!1,vt=!M&&s.invertSwap||x),0!==(E=function(t,e,n,o,i,r,a,l){var s=o?t.clientY:t.clientX,c=o?n.height:n.width,u=o?n.top:n.left,d=o?n.bottom:n.right,h=!1;if(!a)if(l&&ut<c*i){if(!gt&&(1===ct?s>u+c*r/2:s<d-c*r/2)&&(gt=!0),gt)h=!0;else if(1===ct?s<u+ut:s>d-ut)return-ct}else if(s>u+c*(1-i)/2&&s<d-c*(1-i)/2)return function(t){return C(L)<C(t)?1:-1}(e);return(h=h||a)&&(s<u+c*r/2||s>d-c*r/2)?s>u+c/2?1:-1:0}(e,l,o,r,M?1:s.swapThreshold,null==s.invertedSwapThreshold?s.swapThreshold:s.invertedSwapThreshold,vt,st===l))){var P=C(L);do{T=K.children[P-=E]}while(T&&("none"===m(T,"display")||T===W))}if(0===E||T===l)return U(!1);st=l,ct=E;var R=l.nextElementSibling,X=!1,Y=Pt(j,a,L,n,l,o,e,X=1===E);if(!1!==Y)return 1!==Y&&-1!==Y||(X=1===Y),bt=!0,setTimeout(Rt,30),G(),X&&!R?a.appendChild(L):l.parentNode.insertBefore(L,X?R:l),A&&O(A,0,I-A.scrollTop),K=L.parentNode,void 0===_||vt||(ut=Math.abs(_-y(l)[N])),q(),U(!0)}if(a.contains(L))return U(!1)}return!1}function B(s,c){H(s,g,t({evt:e,isOwner:d,axis:r?"vertical":"horizontal",revert:i,dragRect:n,targetRect:o,canSort:h,fromSortable:p,target:l,completed:U,onMove:function(t,o){return Pt(j,a,L,n,t,y(t),e,o)},changed:q},c))}function G(){B("dragOverAnimationCapture"),g.captureAnimationState(),g!==p&&p.captureAnimationState()}function U(t){return B("dragOverCompleted",{insertion:t}),t&&(d?u._hideClone():u._showClone(g),g!==p&&(v(L,tt?tt.options.ghostClass:u.options.ghostClass,!1),v(L,s.ghostClass,!0)),tt!==g&&g!==It.active?tt=g:g===It.active&&tt&&(tt=null),p===g&&(g._ignoreWhileAnimating=l),g.animateAll(function(){B("dragOverAnimationComplete"),g._ignoreWhileAnimating=null}),g!==p&&(p.animateAll(),p._ignoreWhileAnimating=null)),(l===L&&!L.animated||l===a&&!l.animated)&&(st=null),s.dragoverBubble||e.rootEl||l===document||(L.parentNode[k]._isOutsideThisEl(e.target),!t&&Ot(e)),!s.dragoverBubble&&e.stopPropagation&&e.stopPropagation(),b=!0}function q(){Z=C(L),$=C(L,s.draggable),F({sortable:g,name:"change",toEl:a,newIndex:Z,newDraggableIndex:$,originalEvent:e})}},_ignoreWhileAnimating:null,_offMoveEvents:function(){u(document,"mousemove",this._onTouchMove),u(document,"touchmove",this._onTouchMove),u(document,"pointermove",this._onTouchMove),u(document,"dragover",Ot),u(document,"mousemove",Ot),u(document,"touchmove",Ot)},_offUpEvents:function(){var t=this.el.ownerDocument;u(t,"mouseup",this._onDrop),u(t,"touchend",this._onDrop),u(t,"pointerup",this._onDrop),u(t,"touchcancel",this._onDrop),u(document,"selectstart",this)},_onDrop:function(t){var e=this.el,n=this.options;Z=C(L),$=C(L,n.draggable),H("drop",this,{evt:t}),K=L&&L.parentNode,Z=C(L),$=C(L,n.draggable),It.eventCanceled||(ht=!1,vt=!1,gt=!1,clearInterval(this._loopId),clearTimeout(this._dragStartTimer),Bt(this.cloneId),Bt(this._dragStartId),this.nativeDraggable&&(u(document,"drop",this),u(e,"dragstart",this._onDragStart)),this._offMoveEvents(),this._offUpEvents(),r&&m(document.body,"user-select",""),m(L,"transform",""),t&&(lt&&(t.cancelable&&t.preventDefault(),!n.dropBubble&&t.stopPropagation()),W&&W.parentNode&&W.parentNode.removeChild(W),(j===K||tt&&"clone"!==tt.lastPutMode)&&U&&U.parentNode&&U.parentNode.removeChild(U),L&&(this.nativeDraggable&&u(L,"dragend",this),kt(L),L.style["will-change"]="",lt&&!ht&&v(L,tt?tt.options.ghostClass:this.options.ghostClass,!1),v(L,this.options.chosenClass,!1),F({sortable:this,name:"unchoose",toEl:K,newIndex:null,newDraggableIndex:null,originalEvent:t}),j!==K?(Z>=0&&(F({rootEl:K,name:"add",toEl:K,fromEl:j,originalEvent:t}),F({sortable:this,name:"remove",toEl:K,originalEvent:t}),F({rootEl:K,name:"sort",toEl:K,fromEl:j,originalEvent:t}),F({sortable:this,name:"sort",toEl:K,originalEvent:t})),tt&&tt.save()):Z!==V&&Z>=0&&(F({sortable:this,name:"update",toEl:K,originalEvent:t}),F({sortable:this,name:"sort",toEl:K,originalEvent:t})),It.active&&(null!=Z&&-1!==Z||(Z=V,$=Q),F({sortable:this,name:"end",toEl:K,originalEvent:t}),this.save())))),this._nulling()},_nulling:function(){H("nulling",this),j=L=K=W=z=U=G=q=et=nt=lt=Z=$=V=Q=st=ct=tt=J=It.dragged=It.ghost=It.clone=It.active=null,wt.forEach(function(t){t.checked=!0}),wt.length=ot=it=0},handleEvent:function(t){switch(t.type){case"drop":case"dragend":this._onDrop(t);break;case"dragenter":case"dragover":L&&(this._onDragOver(t),function(t){t.dataTransfer&&(t.dataTransfer.dropEffect="move"),t.cancelable&&t.preventDefault()}(t));break;case"selectstart":t.preventDefault()}},toArray:function(){for(var t,e=[],n=this.el.children,o=0,i=n.length,r=this.options;o<i;o++)f(t=n[o],r.draggable,this.el,!1)&&e.push(t.getAttribute(r.dataIdAttr)||Xt(t));return e},sort:function(t){var e={},n=this.el;this.toArray().forEach(function(t,o){var i=n.children[o];f(i,this.options.draggable,n,!1)&&(e[t]=i)},this),t.forEach(function(t){e[t]&&(n.removeChild(e[t]),n.appendChild(e[t]))})},save:function(){var t=this.options.store;t&&t.set&&t.set(this)},closest:function(t,e){return f(t,e||this.options.draggable,this.el,!1)},option:function(t,e){var n=this.options;if(void 0===e)return n[t];var o=Y.modifyOption(this,t,e);n[t]=void 0!==o?o:e,"group"===t&&Tt(n)},destroy:function(){H("destroy",this);var t=this.el;t[k]=null,u(t,"mousedown",this._onTapStart),u(t,"touchstart",this._onTapStart),u(t,"pointerdown",this._onTapStart),this.nativeDraggable&&(u(t,"dragover",this),u(t,"dragenter",this)),Array.prototype.forEach.call(t.querySelectorAll("[draggable]"),function(t){t.removeAttribute("draggable")}),this._onDrop(),this._disableDelayedDragEvents(),pt.splice(pt.indexOf(this.el),1),this.el=t=null},_hideClone:function(){if(!q){if(H("hideClone",this),It.eventCanceled)return;m(U,"display","none"),this.options.removeCloneOnHide&&U.parentNode&&U.parentNode.removeChild(U),q=!0}},_showClone:function(t){if("clone"===t.lastPutMode){if(q){if(H("showClone",this),It.eventCanceled)return;L.parentNode!=j||this.options.group.revertClone?z?j.insertBefore(U,z):j.appendChild(U):j.insertBefore(U,L),this.options.group.revertClone&&this.animate(L,U),m(U,"display",""),q=!1}}else this._hideClone()}},Et&&c(document,"touchmove",function(t){(It.active||ht)&&t.cancelable&&t.preventDefault()}),It.utils={on:c,off:u,css:m,find:w,is:function(t,e){return!!f(t,e,t,!1)},extend:function(t,e){if(t&&e)for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n]);return t},throttle:N,closest:f,toggleClass:v,clone:A,index:C,nextTick:Yt,cancelNextTick:Bt,detectDirection:Ct,getChild:_},It.get=function(t){return t[k]},It.mount=function(){var e=[].slice.call(arguments);e[0].constructor===Array&&(e=e[0]),e.forEach(function(e){if(!e.prototype||!e.prototype.constructor)throw"Sortable: Mounted plugin must be a constructor function, not "+{}.toString.call(e);e.utils&&(It.utils=t({},It.utils,e.utils)),Y.mount(e)})},It.create=function(t,e){return new It(t,e)},It.version="1.12.0";var Ht,Ft,Lt,Kt,Wt,jt=[],zt=[],Gt=!1,Ut=!1,qt=!1;function Vt(t,e){zt.forEach(function(n,o){var i=e.children[n.sortableIndex+(t?Number(o):0)];i?e.insertBefore(n,i):e.appendChild(n)})}function Zt(){jt.forEach(function(t){t!==Lt&&t.parentNode&&t.parentNode.removeChild(t)})}var Qt=function(t){var e=t.originalEvent,n=t.putSortable,o=t.dragEl,i=t.dispatchSortableEvent,r=t.unhideGhostForTarget;if(e){var a=n||t.activeSortable;(0,t.hideGhostForTarget)();var l=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:e,s=document.elementFromPoint(l.clientX,l.clientY);r(),a&&!a.el.contains(s)&&(i("spill"),this.onSpill({dragEl:o,putSortable:n}))}};function $t(){}function Jt(){}$t.prototype={startIndex:null,dragStart:function(t){this.startIndex=t.oldDraggableIndex},onSpill:function(t){var e=t.dragEl,n=t.putSortable;this.sortable.captureAnimationState(),n&&n.captureAnimationState();var o=_(this.sortable.el,this.startIndex,this.options);o?this.sortable.el.insertBefore(e,o):this.sortable.el.appendChild(e),this.sortable.animateAll(),n&&n.animateAll()},drop:Qt},Object.assign($t,{pluginName:"revertOnSpill"}),Jt.prototype={onSpill:function(t){var e=t.dragEl,n=t.putSortable||this.sortable;n.captureAnimationState(),e.parentNode&&e.parentNode.removeChild(e),n.animateAll()},drop:Qt},Object.assign(Jt,{pluginName:"removeOnSpill"});var te,ee,ne,oe,ie,re,ae=[],le=!1;function se(){ae.forEach(function(t){clearInterval(t.pid)}),ae=[]}function ce(){clearInterval(re)}var ue=N(function(t,e,n,o){if(e.scroll){var i,r=(t.touches?t.touches[0]:t).clientX,a=(t.touches?t.touches[0]:t).clientY,l=e.scrollSensitivity,s=e.scrollSpeed,c=E(),u=!1;ee!==n&&(ee=n,se(),i=e.scrollFn,!0===(te=e.scroll)&&(te=x(n,!0)));var d=0,h=te;do{var f=h,p=y(f),g=p.top,v=p.bottom,b=p.left,w=p.right,D=p.width,_=p.height,S=void 0,C=void 0,T=f.scrollWidth,M=f.scrollHeight,N=m(f),A=f.scrollLeft,I=f.scrollTop;f===c?(S=D<T&&("auto"===N.overflowX||"scroll"===N.overflowX||"visible"===N.overflowX),C=_<M&&("auto"===N.overflowY||"scroll"===N.overflowY||"visible"===N.overflowY)):(S=D<T&&("auto"===N.overflowX||"scroll"===N.overflowX),C=_<M&&("auto"===N.overflowY||"scroll"===N.overflowY));var P=S&&(Math.abs(w-r)<=l&&A+D<T)-(Math.abs(b-r)<=l&&!!A),R=C&&(Math.abs(v-a)<=l&&I+_<M)-(Math.abs(g-a)<=l&&!!I);if(!ae[d])for(var X=0;X<=d;X++)ae[X]||(ae[X]={});ae[d].vx==P&&ae[d].vy==R&&ae[d].el===f||(ae[d].el=f,ae[d].vx=P,ae[d].vy=R,clearInterval(ae[d].pid),0==P&&0==R||(u=!0,ae[d].pid=setInterval(function(){o&&0===this.layer&&It.active._onTouchMove(ie);var e=ae[this.layer].vy?ae[this.layer].vy*s:0,n=ae[this.layer].vx?ae[this.layer].vx*s:0;"function"==typeof i&&"continue"!==i.call(It.dragged.parentNode[k],n,e,t,ie,ae[this.layer].el)||O(ae[this.layer].el,n,e)}.bind({layer:d}),24))),d++}while(e.bubbleScroll&&h!==c&&(h=x(h,!1)));le=u}},30);It.mount(new function(){function t(){for(var t in this.defaults={scroll:!0,scrollSensitivity:30,scrollSpeed:10,bubbleScroll:!0},this)"_"===t.charAt(0)&&"function"==typeof this[t]&&(this[t]=this[t].bind(this))}return t.prototype={dragStarted:function(t){var e=t.originalEvent;this.sortable.nativeDraggable?c(document,"dragover",this._handleAutoScroll):c(document,this.options.supportPointer?"pointermove":e.touches?"touchmove":"mousemove",this._handleFallbackAutoScroll)},dragOverCompleted:function(t){var e=t.originalEvent;this.options.dragOverBubble||e.rootEl||this._handleAutoScroll(e)},drop:function(){this.sortable.nativeDraggable?u(document,"dragover",this._handleAutoScroll):(u(document,"pointermove",this._handleFallbackAutoScroll),u(document,"touchmove",this._handleFallbackAutoScroll),u(document,"mousemove",this._handleFallbackAutoScroll)),ce(),se(),clearTimeout(p),p=void 0},nulling:function(){ie=ee=te=le=re=ne=oe=null,ae.length=0},_handleFallbackAutoScroll:function(t){this._handleAutoScroll(t,!0)},_handleAutoScroll:function(t,e){var i=this,a=(t.touches?t.touches[0]:t).clientX,l=(t.touches?t.touches[0]:t).clientY,s=document.elementFromPoint(a,l);if(ie=t,e||o||n||r){ue(t,this.options,s,e);var c=x(s,!0);!le||re&&a===ne&&l===oe||(re&&ce(),re=setInterval(function(){var n=x(document.elementFromPoint(a,l),!0);n!==c&&(c=n,se()),ue(t,i.options,n,e)},10),ne=a,oe=l)}else{if(!this.options.bubbleScroll||x(s,!0)===E())return void se();ue(t,this.options,x(s,!1),!1)}}},Object.assign(t,{pluginName:"scroll",initializeByDefault:!0})}),It.mount(Jt,$t),It.mount(new function(){function t(){this.defaults={swapClass:"sortable-swap-highlight"}}return t.prototype={dragStart:function(t){Nt=t.dragEl},dragOverValid:function(t){var e=t.completed,n=t.target,o=t.changed,i=t.cancel;if(t.activeSortable.options.swap){var r=this.options;if(n&&n!==this.sortable.el){var a=Nt;!1!==(0,t.onMove)(n)?(v(n,r.swapClass,!0),Nt=n):Nt=null,a&&a!==Nt&&v(a,r.swapClass,!1)}o(),e(!0),i()}},drop:function(t){var e,n,o,i,r,a,l=t.activeSortable,s=t.putSortable,c=t.dragEl,u=s||this.sortable,d=this.options;Nt&&v(Nt,d.swapClass,!1),Nt&&(d.swap||s&&s.options.swap)&&c!==Nt&&(u.captureAnimationState(),u!==l&&l.captureAnimationState(),a=(n=Nt).parentNode,(r=(e=c).parentNode)&&a&&!r.isEqualNode(n)&&!a.isEqualNode(e)&&(o=C(e),i=C(n),r.isEqualNode(a)&&o<i&&i++,r.insertBefore(n,r.children[o]),a.insertBefore(e,a.children[i])),u.animateAll(),u!==l&&l.animateAll())},nulling:function(){Nt=null}},Object.assign(t,{pluginName:"swap",eventProperties:function(){return{swapItem:Nt}}})}),It.mount(new function(){function t(t){for(var e in this)"_"===e.charAt(0)&&"function"==typeof this[e]&&(this[e]=this[e].bind(this));t.options.supportPointer?c(document,"pointerup",this._deselectMultiDrag):(c(document,"mouseup",this._deselectMultiDrag),c(document,"touchend",this._deselectMultiDrag)),c(document,"keydown",this._checkKeyDown),c(document,"keyup",this._checkKeyUp),this.defaults={selectedClass:"sortable-selected",multiDragKey:null,setData:function(e,n){var o="";jt.length&&Ft===t?jt.forEach(function(t,e){o+=(e?", ":"")+t.textContent}):o=n.textContent,e.setData("Text",o)}}}return t.prototype={multiDragKeyDown:!1,isMultiDrag:!1,delayStartGlobal:function(t){Lt=t.dragEl},delayEnded:function(){this.isMultiDrag=~jt.indexOf(Lt)},setupClone:function(t){var e=t.sortable,n=t.cancel;if(this.isMultiDrag){for(var o=0;o<jt.length;o++)zt.push(A(jt[o])),zt[o].sortableIndex=jt[o].sortableIndex,zt[o].draggable=!1,zt[o].style["will-change"]="",v(zt[o],this.options.selectedClass,!1),jt[o]===Lt&&v(zt[o],this.options.chosenClass,!1);e._hideClone(),n()}},clone:function(t){var e=t.dispatchSortableEvent,n=t.cancel;this.isMultiDrag&&(this.options.removeCloneOnHide||jt.length&&Ft===t.sortable&&(Vt(!0,t.rootEl),e("clone"),n()))},showClone:function(t){var e=t.cloneNowShown,n=t.cancel;this.isMultiDrag&&(Vt(!1,t.rootEl),zt.forEach(function(t){m(t,"display","")}),e(),Wt=!1,n())},hideClone:function(t){var e=this,n=t.cloneNowHidden,o=t.cancel;this.isMultiDrag&&(zt.forEach(function(t){m(t,"display","none"),e.options.removeCloneOnHide&&t.parentNode&&t.parentNode.removeChild(t)}),n(),Wt=!0,o())},dragStartGlobal:function(t){!this.isMultiDrag&&Ft&&Ft.multiDrag._deselectMultiDrag(),jt.forEach(function(t){t.sortableIndex=C(t)}),jt=jt.sort(function(t,e){return t.sortableIndex-e.sortableIndex}),qt=!0},dragStarted:function(t){var e=this,n=t.sortable;if(this.isMultiDrag){if(this.options.sort&&(n.captureAnimationState(),this.options.animation)){jt.forEach(function(t){t!==Lt&&m(t,"position","absolute")});var o=y(Lt,!1,!0,!0);jt.forEach(function(t){t!==Lt&&I(t,o)}),Ut=!0,Gt=!0}n.animateAll(function(){Ut=!1,Gt=!1,e.options.animation&&jt.forEach(function(t){P(t)}),e.options.sort&&Zt()})}},dragOver:function(t){var e=t.completed,n=t.cancel;Ut&&~jt.indexOf(t.target)&&(e(!1),n())},revert:function(t){var e=t.fromSortable,n=t.rootEl,o=t.sortable,i=t.dragRect;jt.length>1&&(jt.forEach(function(t){o.addAnimationState({target:t,rect:Ut?y(t):i}),P(t),t.fromRect=i,e.removeAnimationState(t)}),Ut=!1,function(t,e){jt.forEach(function(n,o){var i=e.children[n.sortableIndex+(t?Number(o):0)];i?e.insertBefore(n,i):e.appendChild(n)})}(!this.options.removeCloneOnHide,n))},dragOverCompleted:function(t){var e=t.sortable,n=t.isOwner,o=t.activeSortable,i=t.parentEl,r=t.putSortable,a=this.options;if(t.insertion){if(n&&o._hideClone(),Gt=!1,a.animation&&jt.length>1&&(Ut||!n&&!o.options.sort&&!r)){var l=y(Lt,!1,!0,!0);jt.forEach(function(t){t!==Lt&&(I(t,l),i.appendChild(t))}),Ut=!0}if(!n)if(Ut||Zt(),jt.length>1){var s=Wt;o._showClone(e),o.options.animation&&!Wt&&s&&zt.forEach(function(t){o.addAnimationState({target:t,rect:Kt}),t.fromRect=Kt,t.thisAnimationDuration=null})}else o._showClone(e)}},dragOverAnimationCapture:function(t){var e=t.dragRect,n=t.isOwner,o=t.activeSortable;if(jt.forEach(function(t){t.thisAnimationDuration=null}),o.options.animation&&!n&&o.multiDrag.isMultiDrag){Kt=Object.assign({},e);var i=b(Lt,!0);Kt.top-=i.f,Kt.left-=i.e}},dragOverAnimationComplete:function(){Ut&&(Ut=!1,Zt())},drop:function(t){var e=t.originalEvent,n=t.rootEl,o=t.parentEl,i=t.sortable,r=t.dispatchSortableEvent,a=t.oldIndex,l=t.putSortable,s=l||this.sortable;if(e){var c=this.options,u=o.children;if(!qt)if(c.multiDragKey&&!this.multiDragKeyDown&&this._deselectMultiDrag(),v(Lt,c.selectedClass,!~jt.indexOf(Lt)),~jt.indexOf(Lt))jt.splice(jt.indexOf(Lt),1),Ht=null,B({sortable:i,rootEl:n,name:"deselect",targetEl:Lt,originalEvt:e});else{if(jt.push(Lt),B({sortable:i,rootEl:n,name:"select",targetEl:Lt,originalEvt:e}),e.shiftKey&&Ht&&i.el.contains(Ht)){var d,h,f=C(Ht),p=C(Lt);if(~f&&~p&&f!==p)for(p>f?(h=f,d=p):(h=p,d=f+1);h<d;h++)~jt.indexOf(u[h])||(v(u[h],c.selectedClass,!0),jt.push(u[h]),B({sortable:i,rootEl:n,name:"select",targetEl:u[h],originalEvt:e}))}else Ht=Lt;Ft=s}if(qt&&this.isMultiDrag){if((o[k].options.sort||o!==n)&&jt.length>1){var g=y(Lt),m=C(Lt,":not(."+this.options.selectedClass+")");if(!Gt&&c.animation&&(Lt.thisAnimationDuration=null),s.captureAnimationState(),!Gt&&(c.animation&&(Lt.fromRect=g,jt.forEach(function(t){if(t.thisAnimationDuration=null,t!==Lt){var e=Ut?y(t):g;t.fromRect=e,s.addAnimationState({target:t,rect:e})}})),Zt(),jt.forEach(function(t){u[m]?o.insertBefore(t,u[m]):o.appendChild(t),m++}),a===C(Lt))){var b=!1;jt.forEach(function(t){t.sortableIndex===C(t)||(b=!0)}),b&&r("update")}jt.forEach(function(t){P(t)}),s.animateAll()}Ft=s}(n===o||l&&"clone"!==l.lastPutMode)&&zt.forEach(function(t){t.parentNode&&t.parentNode.removeChild(t)})}},nullingGlobal:function(){this.isMultiDrag=qt=!1,zt.length=0},destroyGlobal:function(){this._deselectMultiDrag(),u(document,"pointerup",this._deselectMultiDrag),u(document,"mouseup",this._deselectMultiDrag),u(document,"touchend",this._deselectMultiDrag),u(document,"keydown",this._checkKeyDown),u(document,"keyup",this._checkKeyUp)},_deselectMultiDrag:function(t){if(!(void 0!==qt&&qt||Ft!==this.sortable||t&&f(t.target,this.options.draggable,this.sortable.el,!1)||t&&0!==t.button))for(;jt.length;){var e=jt[0];v(e,this.options.selectedClass,!1),jt.shift(),B({sortable:this.sortable,rootEl:this.sortable.el,name:"deselect",targetEl:e,originalEvt:t})}},_checkKeyDown:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!0)},_checkKeyUp:function(t){t.key===this.options.multiDragKey&&(this.multiDragKeyDown=!1)}},Object.assign(t,{pluginName:"multiDrag",utils:{select:function(t){var e=t.parentNode[k];e&&e.options.multiDrag&&!~jt.indexOf(t)&&(Ft&&Ft!==e&&(Ft.multiDrag._deselectMultiDrag(),Ft=e),v(t,e.options.selectedClass,!0),jt.push(t))},deselect:function(t){var e=t.parentNode[k],n=jt.indexOf(t);e&&e.options.multiDrag&&~n&&(v(t,e.options.selectedClass,!1),jt.splice(n,1))}},eventProperties:function(){var t=this,e=[],n=[];return jt.forEach(function(o){var i;e.push({multiDragElement:o,index:o.sortableIndex}),i=Ut&&o!==Lt?-1:Ut?C(o,":not(."+t.options.selectedClass+")"):C(o),n.push({multiDragElement:o,index:i})}),{items:[].concat(jt),clones:[].concat(zt),oldIndicies:e,newIndicies:n}},optionListeners:{multiDragKey:function(t){return"ctrl"===(t=t.toLowerCase())?t="Control":t.length>1&&(t=t.charAt(0).toUpperCase()+t.substr(1)),t}}})});/* harmony default export */ __webpack_exports__["default"] = (It);
//# sourceMappingURL=sortable.complete.esm.js.map


/***/ }),

/***/ "./node_modules/vue-style-loader/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/vue-style-loader/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
var stylesInDom = {},
	memoize = function(fn) {
		var memo;
		return function () {
			if (typeof memo === "undefined") memo = fn.apply(this, arguments);
			return memo;
		};
	},
	isOldIE = memoize(function() {
		return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
	}),
	getHeadElement = memoize(function () {
		return document.head || document.getElementsByTagName("head")[0];
	}),
	singletonElement = null,
	singletonCounter = 0,
	styleElementsInsertedAtTop = [];

module.exports = function(list, options) {
	if(typeof DEBUG !== "undefined" && DEBUG) {
		if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};
	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (typeof options.singleton === "undefined") options.singleton = isOldIE();

	// By default, add <style> tags to the bottom of <head>.
	if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

	var styles = listToStyles(list);
	addStylesToDom(styles, options);

	return function update(newList) {
		var mayRemove = [];
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			domStyle.refs--;
			mayRemove.push(domStyle);
		}
		if(newList) {
			var newStyles = listToStyles(newList);
			addStylesToDom(newStyles, options);
		}
		for(var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];
			if(domStyle.refs === 0) {
				for(var j = 0; j < domStyle.parts.length; j++)
					domStyle.parts[j]();
				delete stylesInDom[domStyle.id];
			}
		}
	};
}

function addStylesToDom(styles, options) {
	for(var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];
		if(domStyle) {
			domStyle.refs++;
			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}
			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];
			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}
			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles(list) {
	var styles = [];
	var newStyles = {};
	for(var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};
		if(!newStyles[id])
			styles.push(newStyles[id] = {id: id, parts: [part]});
		else
			newStyles[id].parts.push(part);
	}
	return styles;
}

function insertStyleElement(options, styleElement) {
	var head = getHeadElement();
	var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
	if (options.insertAt === "top") {
		if(!lastStyleElementInsertedAtTop) {
			head.insertBefore(styleElement, head.firstChild);
		} else if(lastStyleElementInsertedAtTop.nextSibling) {
			head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			head.appendChild(styleElement);
		}
		styleElementsInsertedAtTop.push(styleElement);
	} else if (options.insertAt === "bottom") {
		head.appendChild(styleElement);
	} else {
		throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
	}
}

function removeStyleElement(styleElement) {
	styleElement.parentNode.removeChild(styleElement);
	var idx = styleElementsInsertedAtTop.indexOf(styleElement);
	if(idx >= 0) {
		styleElementsInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement(options) {
	var styleElement = document.createElement("style");
	styleElement.type = "text/css";
	insertStyleElement(options, styleElement);
	return styleElement;
}

function addStyle(obj, options) {
	var styleElement, update, remove;

	if (options.singleton) {
		var styleIndex = singletonCounter++;
		styleElement = singletonElement || (singletonElement = createStyleElement(options));
		update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
		remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
	} else {
		styleElement = createStyleElement(options);
		update = applyToTag.bind(null, styleElement);
		remove = function() {
			removeStyleElement(styleElement);
		};
	}

	update(obj);

	return function updateStyle(newObj) {
		if(newObj) {
			if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
				return;
			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;
		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag(styleElement, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = styleElement.childNodes;
		if (childNodes[index]) styleElement.removeChild(childNodes[index]);
		if (childNodes.length) {
			styleElement.insertBefore(cssNode, childNodes[index]);
		} else {
			styleElement.appendChild(cssNode);
		}
	}
}

function applyToTag(styleElement, obj) {
	var css = obj.css;
	var media = obj.media;
	var sourceMap = obj.sourceMap;

	if (media) {
		styleElement.setAttribute("media", media);
	}

	if (sourceMap) {
		// https://developer.chrome.com/devtools/docs/javascript-debugging
		// this makes source maps inside style tags work properly in Chrome
		css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */';
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	if (styleElement.styleSheet) {
		styleElement.styleSheet.cssText = css;
	} else {
		while(styleElement.firstChild) {
			styleElement.removeChild(styleElement.firstChild);
		}
		styleElement.appendChild(document.createTextNode(css));
	}
}


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?!./src/components/layout-comps/array-tabs.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader!./node_modules/css-loader!/Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!/Users/daniel/Projects/Owner/ncform/ncform/node_modules/vue-loader/lib??vue-loader-options!./src/components/layout-comps/array-tabs.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./array-tabs.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?!./src/components/layout-comps/array-tabs.vue?vue&type=style&index=0&lang=scss&");
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(/*! ../../../node_modules/vue-style-loader/addStyles.js */ "./node_modules/vue-style-loader/addStyles.js")(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {}

/***/ }),

/***/ "./src/components/layout-comps/array-tabs.vue":
/*!****************************************************!*\
  !*** ./src/components/layout-comps/array-tabs.vue ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _array_tabs_vue_vue_type_template_id_68eaec80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./array-tabs.vue?vue&type=template&id=68eaec80& */ "./src/components/layout-comps/array-tabs.vue?vue&type=template&id=68eaec80&");
/* harmony import */ var _array_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./array-tabs.vue?vue&type=script&lang=js& */ "./src/components/layout-comps/array-tabs.vue?vue&type=script&lang=js&");
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _array_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _array_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _array_tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./array-tabs.vue?vue&type=style&index=0&lang=scss& */ "./src/components/layout-comps/array-tabs.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "../../node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _array_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _array_tabs_vue_vue_type_template_id_68eaec80___WEBPACK_IMPORTED_MODULE_0__["render"],
  _array_tabs_vue_vue_type_template_id_68eaec80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/layout-comps/array-tabs.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/layout-comps/array-tabs.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./src/components/layout-comps/array-tabs.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib!../../../../../node_modules/vue-loader/lib??vue-loader-options!./array-tabs.vue?vue&type=script&lang=js& */ "../../node_modules/babel-loader/lib/index.js!../../node_modules/vue-loader/lib/index.js?!./src/components/layout-comps/array-tabs.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/layout-comps/array-tabs.vue?vue&type=style&index=0&lang=scss&":
/*!**************************************************************************************!*\
  !*** ./src/components/layout-comps/array-tabs.vue?vue&type=style&index=0&lang=scss& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader!../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/sass-loader/lib/loader.js!../../../../../node_modules/vue-loader/lib??vue-loader-options!./array-tabs.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/vue-style-loader/index.js!./node_modules/css-loader/index.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js?!./src/components/layout-comps/array-tabs.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/components/layout-comps/array-tabs.vue?vue&type=template&id=68eaec80&":
/*!***********************************************************************************!*\
  !*** ./src/components/layout-comps/array-tabs.vue?vue&type=template&id=68eaec80& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_template_id_68eaec80___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./array-tabs.vue?vue&type=template&id=68eaec80& */ "../../node_modules/vue-loader/lib/loaders/templateLoader.js?!../../node_modules/vue-loader/lib/index.js?!./src/components/layout-comps/array-tabs.vue?vue&type=template&id=68eaec80&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_template_id_68eaec80___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_array_tabs_vue_vue_type_template_id_68eaec80___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "@ncform/ncform-common":
/*!************************************************************************************************************************************!*\
  !*** external {"root":"ncformCommon","commonjs2":"@ncform/ncform-common","commonjs":"@ncform/ncform-common","amd":"ncformCommon"} ***!
  \************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__ncform_ncform_common__;

/***/ })

/******/ });
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9bbmFtZV0vd2VicGFjay91bml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uIiwid2VicGFjazovL1tuYW1lXS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9bbmFtZV0vc3JjL2NvbXBvbmVudHMvbGF5b3V0LWNvbXBzL2FycmF5LXRhYnMudnVlIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL2xheW91dC1jb21wcy9hcnJheS10YWJzLnZ1ZT9kOTRlIiwid2VicGFjazovL1tuYW1lXS8vVXNlcnMvZGFuaWVsL1Byb2plY3RzL093bmVyL25jZm9ybS9uY2Zvcm0vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qcyIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQtY29tcHMvYXJyYXktdGFicy52dWU/NzNiZCIsIndlYnBhY2s6Ly9bbmFtZV0vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3NvcnRhYmxlanMvbW9kdWxhci9zb3J0YWJsZS5jb21wbGV0ZS5lc20uanMiLCJ3ZWJwYWNrOi8vW25hbWVdLy4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL2xheW91dC1jb21wcy9hcnJheS10YWJzLnZ1ZT8xY2E5Iiwid2VicGFjazovL1tuYW1lXS8uL3NyYy9jb21wb25lbnRzL2xheW91dC1jb21wcy9hcnJheS10YWJzLnZ1ZSIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQtY29tcHMvYXJyYXktdGFicy52dWU/MjRiYiIsIndlYnBhY2s6Ly9bbmFtZV0vLi9zcmMvY29tcG9uZW50cy9sYXlvdXQtY29tcHMvYXJyYXktdGFicy52dWU/Mzg5MiIsIndlYnBhY2s6Ly9bbmFtZV0vZXh0ZXJuYWwge1wicm9vdFwiOlwibmNmb3JtQ29tbW9uXCIsXCJjb21tb25qczJcIjpcIkBuY2Zvcm0vbmNmb3JtLWNvbW1vblwiLFwiY29tbW9uanNcIjpcIkBuY2Zvcm0vbmNmb3JtLWNvbW1vblwiLFwiYW1kXCI6XCJuY2Zvcm1Db21tb25cIn0iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87QUNWQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNtQkE7Ozs7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7a0JBRUE7O0FBRUEsNEJBRkE7O0FBSUE7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QUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEO0FBQ3ZEOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2TkE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1SkFBd0Y7QUFDeEY7QUFDQTtBQUNBLFk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1RrQztBQUNsQztBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsdUJBaUJBO0FBQ0E7QUFDQSxnRjs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZDNEwsZ1BBQW9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBK0ksd1hBQW9CLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQW5YLG1FIiwiZmlsZSI6ImFycmF5VGFicy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkocmVxdWlyZShcIkBuY2Zvcm0vbmNmb3JtLWNvbW1vblwiKSk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShcImFycmF5VGFic1wiLCBbXCJuY2Zvcm1Db21tb25cIl0sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiYXJyYXlUYWJzXCJdID0gZmFjdG9yeShyZXF1aXJlKFwiQG5jZm9ybS9uY2Zvcm0tY29tbW9uXCIpKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJhcnJheVRhYnNcIl0gPSBmYWN0b3J5KHJvb3RbXCJuY2Zvcm1Db21tb25cIl0pO1xufSkod2luZG93LCBmdW5jdGlvbihfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19uY2Zvcm1fbmNmb3JtX2NvbW1vbl9fKSB7XG5yZXR1cm4gIiwiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvY29tcG9uZW50cy9sYXlvdXQtY29tcHMvYXJyYXktdGFicy52dWVcIik7XG4iLCI8dGVtcGxhdGU+XG5cbiAgPGRpdiBjbGFzcz1cIl9fYXJyYXktdGFicy1mb3JtLWl0ZW1cIj5cblxuICAgIDxsZWdlbmQgdi1pZj1cInNjaGVtYS51aS5sZWdlbmQgJiYgc2NoZW1hLnVpLnNob3dMZWdlbmRcIiBAY2xpY2s9XCJjb2xsYXBzZSgpXCI+XG4gICAgICB7e19hbmFseXplVmFsKHNjaGVtYS51aS5sZWdlbmQpfX1cbiAgICAgIDxpIHYtaWY9XCIhbWVyZ2VDb25maWcuZGlzYWJsZUNvbGxhcHNlXCIgY2xhc3M9XCJlbC1jb2xsYXBzZS1pdGVtX19hcnJvd1wiIDpjbGFzcz1cInsnZWwtaWNvbi1hcnJvdy11cCc6ICFjb2xsYXBzZWQsICdlbC1pY29uLWFycm93LWRvd24nOiBjb2xsYXBzZWR9XCI+PC9pPlxuICAgIDwvbGVnZW5kPlxuICAgIDxlbC10YWJzIHYtc2hvdz1cIiFjb2xsYXBzZWRcIiA6YWRkYWJsZT1cIiFtZXJnZUNvbmZpZy5kaXNhYmxlQWRkXCIgdHlwZT1cImNhcmRcIiA6dGFiLXBvc2l0aW9uPVwibWVyZ2VDb25maWcudGFiUG9zaXRpb25cIiBAZWRpdD1cImhhbmRsZVRhYnNFZGl0XCIgdi1tb2RlbD1cImFjdGl2ZU5hbWVcIj5cbiAgICAgIDxlbC10YWItcGFuZSB2LWZvcj1cIihkYXRhSXRlbSwgaWR4KSBpbiBzY2hlbWEudmFsdWVcIiA6a2V5PVwiZGF0YUl0ZW0uX19kYXRhU2NoZW1hLl9faWRcIiA6Y2xvc2FibGU9XCIoIW1lcmdlQ29uZmlnLmRpc2FibGVEZWwgJiYgIWlzRGVsRXhjZXB0aW9uUm93KGRhdGFJdGVtLl9fZGF0YVNjaGVtYSkpIHx8IChtZXJnZUNvbmZpZy5kaXNhYmxlRGVsICYmIGlzRGVsRXhjZXB0aW9uUm93KGRhdGFJdGVtLl9fZGF0YVNjaGVtYSkpXCIgOm5hbWU9XCInJyArIGlkeFwiPlxuXG4gICAgICAgIDxzcGFuIHNsb3Q9XCJsYWJlbFwiIGNsYXNzPVwiX19hcnJheS10YWJzLXRhYi1sYWJlbFwiPlxuICAgICAgICAgIHt7X2FuYWx5emVWYWwoZGF0YUl0ZW0uX19kYXRhU2NoZW1hLnVpLmxhYmVsLCBpZHgpICsgKG1lcmdlQ29uZmlnLmF1dG9JZHhUb0xhYmVsID8gJyAnICsgKGlkeCArIDEpIDogJycpfX1cbiAgICAgICAgICA8IS0tIOaPkOekuuS/oeaBryAtLT5cbiAgICAgICAgICA8ZWwtdG9vbHRpcCBjbGFzcz1cIml0ZW1cIiBlZmZlY3Q9XCJkYXJrXCIgcGxhY2VtZW50PVwicmlnaHQtc3RhcnRcIj5cbiAgICAgICAgICAgIDxkaXYgc2xvdD1cImNvbnRlbnRcIiB2LWh0bWw9XCJkYXRhSXRlbS5fX2RhdGFTY2hlbWEudWkuaGVscC5jb250ZW50XCI+PC9kaXY+XG4gICAgICAgICAgICA8YSBjbGFzcz1cImhlbHBcIiB2LWlmPVwiZGF0YUl0ZW0uX19kYXRhU2NoZW1hLnVpLmhlbHAuc2hvdyA9PT0gdHJ1ZVwiIGhyZWY9XCIjXCI+PHNwYW4gOmNsYXNzPVwiZGF0YUl0ZW0uX19kYXRhU2NoZW1hLnVpLmhlbHAuaWNvbkNsc1wiPnt7ZGF0YUl0ZW0uX19kYXRhU2NoZW1hLnVpLmhlbHAudGV4dH19PC9zcGFuPjwvYT5cbiAgICAgICAgICA8L2VsLXRvb2x0aXA+XG4gICAgICAgIDwvc3Bhbj5cblxuICAgICAgICA8IS0tIGFycmF5IGl0ZW0g5pivIOato+W4uOeahCBvYmplY3Qg57G75Z6LIC0tPlxuICAgICAgICA8dGVtcGxhdGUgdi1pZj1cImlzTm9ybWFsT2JqU2NoZW1hKGRhdGFJdGVtLl9fZGF0YVNjaGVtYSlcIj5cbiAgICAgICAgICA8bmNmb3JtLW9iamVjdCA6c2NoZW1hPVwiZGF0YUl0ZW0uX19kYXRhU2NoZW1hXCIgOmZvcm0tZGF0YT1cImZvcm1EYXRhXCIgOmlkeC1jaGFpbj1cIihpZHhDaGFpbiA/IGlkeENoYWluICsgJywnIDogJycpICsgaWR4XCIgOmNvbmZpZz1cImRhdGFJdGVtLl9fZGF0YVNjaGVtYS51aS53aWRnZXRDb25maWdcIiA6Z2xvYmFsLWNvbnN0PVwiZ2xvYmFsQ29uc3RcIiA6c2hvdy1sZWdlbmQ9XCJmYWxzZVwiPlxuXG4gICAgICAgICAgICA8dGVtcGxhdGUgdi1mb3I9XCIoZmllbGRTY2hlbWEsIGZpZWxkTmFtZSkgaW4gKGRhdGFJdGVtLl9fZGF0YVNjaGVtYS5wcm9wZXJ0aWVzIHx8IHtfX25vdE9iakl0ZW06IGRhdGFJdGVtLl9fZGF0YVNjaGVtYX0pXCIgOnNsb3Q9XCJmaWVsZE5hbWVcIj48IS0tIOazqOaEj++8ml9fbm90T2JqSXRlbSDov5nkuKpLZXnkuLrkuI5mb3JtLWl0ZW3nuqblrprlpb3nmoTlgLzvvIzlhbblroPlkI3lrZfkuI3nlJ/mlYggLS0+XG4gICAgICAgICAgICAgIDxzbG90IDpuYW1lPVwiZmllbGROYW1lXCIgOnNjaGVtYT1cImZpZWxkU2NoZW1hXCIgOmlkeD1cImlkeFwiPjwvc2xvdD5cbiAgICAgICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgICA8L25jZm9ybS1vYmplY3Q+XG4gICAgICAgIDwvdGVtcGxhdGU+XG5cbiAgICAgICAgPCEtLSBhcnJheSBpdGVtIOaYryDpnZ7mraPluLjnmoQgb2JqZWN0IOexu+WeiyDku6Xlj4og5YW25a6D57G75Z6LIC0tPlxuICAgICAgICA8dGVtcGxhdGUgdi1lbHNlPlxuICAgICAgICAgIDxzbG90IG5hbWU9XCJfX25vdE9iakl0ZW1cIiA6c2NoZW1hPVwiZGF0YUl0ZW0uX19kYXRhU2NoZW1hXCIgOmlkeD1cImlkeFwiPjwvc2xvdD4gPCEtLSDms6jmhI/vvJpfX25vdE9iakl0ZW0g5ZKMIF9fZGF0YVNjaGVtYSDpg73mmK/nuqblrprlpb3nmoTlgLzvvIzlhbblroPlkI3lrZfkuI3nlJ/mlYggLS0+XG4gICAgICAgIDwvdGVtcGxhdGU+XG4gICAgICA8L2VsLXRhYi1wYW5lPlxuICAgIDwvZWwtdGFicz5cblxuICA8L2Rpdj5cblxuPC90ZW1wbGF0ZT5cblxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+XG4gIC5fX2FycmF5LXRhYnMtZm9ybS1pdGVtIHtcblxuICAgIC8vIG1hcmdpbi10b3A6IDhweDtcblxuICAgICYgPiBsZWdlbmQge1xuICAgICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjODc4RDk5O1xuICAgICAgcGFkZGluZzogNnB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZGNlNTtcbiAgICAgIGNvbG9yOiAjNWE1ZTY2O1xuICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNHB4IDRweCAwIDA7XG5cbiAgICAgIC5lbC1jb2xsYXBzZS1pdGVtX19hcnJvdyB7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIycHg7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLmVsLXRhYnMge1xuICAgICAgbWFyZ2luLXRvcDogNnB4O1xuICAgICAgJi5lbC10YWJzLS1sZWZ0IHtcbiAgICAgICAgLmVsLXRhYnNfX25ldy10YWIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIC5lbC1pY29uLXBsdXMge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAuZHJhZ2dpbmcge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmNGY0O1xuICAgICAgfVxuICAgICAgLmVsLXRhYnNfX2l0ZW0ge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBsZWZ0O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAuX19hcnJheS10YWJzLXRhYi1sYWJlbCB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgICBsaW5lLWhlaWdodDogMTRweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIC5lbC10YWItcGFuZSA+IC5fX29iamVjdC1mb3JtLWl0ZW0gPiAuZWwtcm93IHtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG1hcmdpbi10b3A6IC04cHhcbiAgICB9XG4gICAgLmVsLXRhYnNfX2hlYWRlciB7XG4gICAgICBtYXJnaW46IDAgMCA4cHg7XG4gICAgfVxuICB9XG48L3N0eWxlPlxuXG48c2NyaXB0PlxuXG4gIGltcG9ydCBuY2Zvcm1Db21tb24gZnJvbSAnQG5jZm9ybS9uY2Zvcm0tY29tbW9uJztcbiAgaW1wb3J0IFNvcnRhYmxlIGZyb20gXCJzb3J0YWJsZWpzXCI7XG5cbiAgY29uc3QgbGF5b3V0QXJyYXlNaXhpbiA9IG5jZm9ybUNvbW1vbi5taXhpbnMudnVlLmxheW91dEFycmF5TWl4aW47XG5cbiAgZXhwb3J0IGRlZmF1bHQge1xuXG4gICAgbWl4aW5zOiBbbGF5b3V0QXJyYXlNaXhpbl0sXG5cbiAgICBpMThuRGF0YToge1xuICAgICAgZW46IHtcbiAgICAgICAgZGVsSXRlbVRpcHM6ICdBcmUgeW91IHN1cmUgdG8gZGVsZXRlIHRoaXMgaXRlbT8nLFxuICAgICAgfSxcbiAgICAgIHpoX2NuOiB7XG4gICAgICAgIGRlbEl0ZW1UaXBzOiAn56Gu5a6a6KaB5Yig6Zmk6K+l6aG55ZCX77yfJyxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgZGF0YSgpIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgIGFjdGl2ZU5hbWU6ICcwJyxcbiAgICAgICAgZGVmYXVsdENvbmZpZzoge1xuICAgICAgICAgIHRhYlBvc2l0aW9uOiAndG9wJyxcbiAgICAgICAgfSxcbiAgICAgIH1cbiAgICB9LFxuXG4gICAgbW91bnRlZCgpIHtcbiAgICAgIGNvbnN0IHZtID0gdGhpcztcbiAgICAgIGNvbnN0IGVsID0gdGhpcy4kZWwucXVlcnlTZWxlY3RvcihcIi5lbC10YWJzX19uYXZcIik7XG4gICAgICBpZiAoIXRoaXMubWVyZ2VDb25maWcuZGlzYWJsZVJlb3JkZXIpIHtcbiAgICAgICAgY29uc3Qgc29ydFRhYnMgPSBTb3J0YWJsZS5jcmVhdGUoZWwsIHtcbiAgICAgICAgICBhbmltYXRpb246IDIwMCxcbiAgICAgICAgICBmaWx0ZXI6IFwiLmVsLWljb24tY2xvc2VcIixcbiAgICAgICAgICBkcmFnQ2xhc3M6ICdkcmFnZ2luZycsXG4gICAgICAgICAgb25FbmQoZXZ0KSB7XG4gICAgICAgICAgICBjb25zdCBsaXN0ID0gdm0uc2NoZW1hLnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgaXRlbSA9IGxpc3Quc3BsaWNlKGV2dC5vbGRJbmRleCwgMSlbMF07XG4gICAgICAgICAgICBsaXN0LnNwbGljZShldnQubmV3SW5kZXgsIDAsIGl0ZW0pO1xuICAgICAgICAgICAgdm0uc2NoZW1hLnZhbHVlID0gW107XG4gICAgICAgICAgICB2bS4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgICB2bS5zY2hlbWEudmFsdWUgPSBsaXN0O1xuICAgICAgICAgICAgICB2bS5hY3RpdmVOYW1lID0gU3RyaW5nKGV2dC5uZXdJbmRleCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH0sXG5cbiAgICBtZXRob2RzOiB7XG4gICAgICBoYW5kbGVUYWJzRWRpdCh0YXJnZXROYW1lLCBhY3Rpb24pIHtcbiAgICAgICAgaWYgKGFjdGlvbiA9PT0gJ2FkZCcpIHtcbiAgICAgICAgICB0aGlzLmFkZEl0ZW0oKTtcbiAgICAgICAgICB0aGlzLiRkYXRhLmFjdGl2ZU5hbWUgPSAodGhpcy5zY2hlbWEudmFsdWUubGVuZ3RoIC0gMSkgKyAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWN0aW9uID09PSAncmVtb3ZlJykge1xuICAgICAgICAgIHRoaXMuZGVsSXRlbSh0YXJnZXROYW1lLCB0aGlzLm1lcmdlQ29uZmlnLnJlcXVpcmVkRGVsQ29uZmlybSwgdGhpcy5tZXJnZUNvbmZpZy5kZWxDb25maXJtVGV4dC5pdGVtIHx8IHRoaXMuJG5jbGFuZygnZGVsSXRlbVRpcHMnKSk7XG4gICAgICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHRhYklkeCA9IHBhcnNlSW50KHRhcmdldE5hbWUpO1xuICAgICAgICAgICAgaWYgKHRhcmdldE5hbWUgPT09IHRoaXMuJGRhdGEuYWN0aXZlTmFtZSkgeyAvLyBSZW1vdGUgaXRlbSBpcyB0aGUgYWN0aXZlIGl0ZW1cbiAgICAgICAgICAgICAgaWYgKHRhYklkeCA9PT0gMCkgeyAvLyBGaXJzdCBpdGVtXG4gICAgICAgICAgICAgICAgdGhpcy4kZGF0YS5hY3RpdmVOYW1lID0gJzAnXG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy4kZGF0YS5hY3RpdmVOYW1lID0gKHRhYklkeCAtIDEpICsgJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGxldCBhY3RpdmVJZHggPSBwYXJzZUludCh0aGlzLiRkYXRhLmFjdGl2ZU5hbWUpO1xuICAgICAgICAgICAgICBpZiAoYWN0aXZlSWR4ID4gdGFiSWR4KSB7IC8vIGFjdGl2ZSBpdGVtIGF0IHRoZSByaWdodCBzaWRlXG4gICAgICAgICAgICAgICAgdGhpcy4kZGF0YS5hY3RpdmVOYW1lID0gKGFjdGl2ZUlkeCAtIDEpICsgJyc7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gIH1cbjwvc2NyaXB0PlxuIiwidmFyIHJlbmRlciA9IGZ1bmN0aW9uKCkge1xuICB2YXIgX3ZtID0gdGhpc1xuICB2YXIgX2ggPSBfdm0uJGNyZWF0ZUVsZW1lbnRcbiAgdmFyIF9jID0gX3ZtLl9zZWxmLl9jIHx8IF9oXG4gIHJldHVybiBfYyhcbiAgICBcImRpdlwiLFxuICAgIHsgc3RhdGljQ2xhc3M6IFwiX19hcnJheS10YWJzLWZvcm0taXRlbVwiIH0sXG4gICAgW1xuICAgICAgX3ZtLnNjaGVtYS51aS5sZWdlbmQgJiYgX3ZtLnNjaGVtYS51aS5zaG93TGVnZW5kXG4gICAgICAgID8gX2MoXG4gICAgICAgICAgICBcImxlZ2VuZFwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBvbjoge1xuICAgICAgICAgICAgICAgIGNsaWNrOiBmdW5jdGlvbigkZXZlbnQpIHtcbiAgICAgICAgICAgICAgICAgIF92bS5jb2xsYXBzZSgpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgW1xuICAgICAgICAgICAgICBfdm0uX3YoXG4gICAgICAgICAgICAgICAgXCJcXG4gICAgXCIgK1xuICAgICAgICAgICAgICAgICAgX3ZtLl9zKF92bS5fYW5hbHl6ZVZhbChfdm0uc2NoZW1hLnVpLmxlZ2VuZCkpICtcbiAgICAgICAgICAgICAgICAgIFwiXFxuICAgIFwiXG4gICAgICAgICAgICAgICksXG4gICAgICAgICAgICAgICFfdm0ubWVyZ2VDb25maWcuZGlzYWJsZUNvbGxhcHNlXG4gICAgICAgICAgICAgICAgPyBfYyhcImlcIiwge1xuICAgICAgICAgICAgICAgICAgICBzdGF0aWNDbGFzczogXCJlbC1jb2xsYXBzZS1pdGVtX19hcnJvd1wiLFxuICAgICAgICAgICAgICAgICAgICBjbGFzczoge1xuICAgICAgICAgICAgICAgICAgICAgIFwiZWwtaWNvbi1hcnJvdy11cFwiOiAhX3ZtLmNvbGxhcHNlZCxcbiAgICAgICAgICAgICAgICAgICAgICBcImVsLWljb24tYXJyb3ctZG93blwiOiBfdm0uY29sbGFwc2VkXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBfdm0uX2UoKVxuICAgICAgICAgICAgXVxuICAgICAgICAgIClcbiAgICAgICAgOiBfdm0uX2UoKSxcbiAgICAgIF92bS5fdihcIiBcIiksXG4gICAgICBfYyhcbiAgICAgICAgXCJlbC10YWJzXCIsXG4gICAgICAgIHtcbiAgICAgICAgICBkaXJlY3RpdmVzOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6IFwic2hvd1wiLFxuICAgICAgICAgICAgICByYXdOYW1lOiBcInYtc2hvd1wiLFxuICAgICAgICAgICAgICB2YWx1ZTogIV92bS5jb2xsYXBzZWQsXG4gICAgICAgICAgICAgIGV4cHJlc3Npb246IFwiIWNvbGxhcHNlZFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgYWRkYWJsZTogIV92bS5tZXJnZUNvbmZpZy5kaXNhYmxlQWRkLFxuICAgICAgICAgICAgdHlwZTogXCJjYXJkXCIsXG4gICAgICAgICAgICBcInRhYi1wb3NpdGlvblwiOiBfdm0ubWVyZ2VDb25maWcudGFiUG9zaXRpb25cbiAgICAgICAgICB9LFxuICAgICAgICAgIG9uOiB7IGVkaXQ6IF92bS5oYW5kbGVUYWJzRWRpdCB9LFxuICAgICAgICAgIG1vZGVsOiB7XG4gICAgICAgICAgICB2YWx1ZTogX3ZtLmFjdGl2ZU5hbWUsXG4gICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24oJCR2KSB7XG4gICAgICAgICAgICAgIF92bS5hY3RpdmVOYW1lID0gJCR2XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZXhwcmVzc2lvbjogXCJhY3RpdmVOYW1lXCJcbiAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgICAgIF92bS5fbChfdm0uc2NoZW1hLnZhbHVlLCBmdW5jdGlvbihkYXRhSXRlbSwgaWR4KSB7XG4gICAgICAgICAgcmV0dXJuIF9jKFxuICAgICAgICAgICAgXCJlbC10YWItcGFuZVwiLFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBrZXk6IGRhdGFJdGVtLl9fZGF0YVNjaGVtYS5fX2lkLFxuICAgICAgICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgICAgIGNsb3NhYmxlOlxuICAgICAgICAgICAgICAgICAgKCFfdm0ubWVyZ2VDb25maWcuZGlzYWJsZURlbCAmJlxuICAgICAgICAgICAgICAgICAgICAhX3ZtLmlzRGVsRXhjZXB0aW9uUm93KGRhdGFJdGVtLl9fZGF0YVNjaGVtYSkpIHx8XG4gICAgICAgICAgICAgICAgICAoX3ZtLm1lcmdlQ29uZmlnLmRpc2FibGVEZWwgJiZcbiAgICAgICAgICAgICAgICAgICAgX3ZtLmlzRGVsRXhjZXB0aW9uUm93KGRhdGFJdGVtLl9fZGF0YVNjaGVtYSkpLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIgKyBpZHhcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgc3RhdGljQ2xhc3M6IFwiX19hcnJheS10YWJzLXRhYi1sYWJlbFwiLFxuICAgICAgICAgICAgICAgICAgYXR0cnM6IHsgc2xvdDogXCJsYWJlbFwiIH0sXG4gICAgICAgICAgICAgICAgICBzbG90OiBcImxhYmVsXCJcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgIF92bS5fdihcbiAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiICtcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICBfdm0uX2FuYWx5emVWYWwoZGF0YUl0ZW0uX19kYXRhU2NoZW1hLnVpLmxhYmVsLCBpZHgpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKF92bS5tZXJnZUNvbmZpZy5hdXRvSWR4VG9MYWJlbFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCIgXCIgKyAoaWR4ICsgMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IFwiXCIpXG4gICAgICAgICAgICAgICAgICAgICAgKSArXG4gICAgICAgICAgICAgICAgICAgICAgXCJcXG4gICAgICAgIFwiXG4gICAgICAgICAgICAgICAgICApLFxuICAgICAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgICAgIF9jKFxuICAgICAgICAgICAgICAgICAgICBcImVsLXRvb2x0aXBcIixcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY0NsYXNzOiBcIml0ZW1cIixcbiAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBlZmZlY3Q6IFwiZGFya1wiLCBwbGFjZW1lbnQ6IFwicmlnaHQtc3RhcnRcIiB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICBfYyhcImRpdlwiLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBhdHRyczogeyBzbG90OiBcImNvbnRlbnRcIiB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgZG9tUHJvcHM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW5uZXJIVE1MOiBfdm0uX3MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUl0ZW0uX19kYXRhU2NoZW1hLnVpLmhlbHAuY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2xvdDogXCJjb250ZW50XCJcbiAgICAgICAgICAgICAgICAgICAgICB9KSxcbiAgICAgICAgICAgICAgICAgICAgICBfdm0uX3YoXCIgXCIpLFxuICAgICAgICAgICAgICAgICAgICAgIGRhdGFJdGVtLl9fZGF0YVNjaGVtYS51aS5oZWxwLnNob3cgPT09IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgID8gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJhXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeyBzdGF0aWNDbGFzczogXCJoZWxwXCIsIGF0dHJzOiB7IGhyZWY6IFwiI1wiIH0gfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfYyhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJzcGFuXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogZGF0YUl0ZW0uX19kYXRhU2NoZW1hLnVpLmhlbHAuaWNvbkNsc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl92KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgX3ZtLl9zKGRhdGFJdGVtLl9fZGF0YVNjaGVtYS51aS5oZWxwLnRleHQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICA6IF92bS5fZSgpXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIDFcbiAgICAgICAgICAgICAgKSxcbiAgICAgICAgICAgICAgX3ZtLl92KFwiIFwiKSxcbiAgICAgICAgICAgICAgX3ZtLmlzTm9ybWFsT2JqU2NoZW1hKGRhdGFJdGVtLl9fZGF0YVNjaGVtYSlcbiAgICAgICAgICAgICAgICA/IFtcbiAgICAgICAgICAgICAgICAgICAgX2MoXG4gICAgICAgICAgICAgICAgICAgICAgXCJuY2Zvcm0tb2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBkYXRhSXRlbS5fX2RhdGFTY2hlbWEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiZm9ybS1kYXRhXCI6IF92bS5mb3JtRGF0YSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpZHgtY2hhaW5cIjpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoX3ZtLmlkeENoYWluID8gX3ZtLmlkeENoYWluICsgXCIsXCIgOiBcIlwiKSArIGlkeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgY29uZmlnOiBkYXRhSXRlbS5fX2RhdGFTY2hlbWEudWkud2lkZ2V0Q29uZmlnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcImdsb2JhbC1jb25zdFwiOiBfdm0uZ2xvYmFsQ29uc3QsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwic2hvdy1sZWdlbmRcIjogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIF92bS5fbChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YUl0ZW0uX19kYXRhU2NoZW1hLnByb3BlcnRpZXMgfHwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF9fbm90T2JqSXRlbTogZGF0YUl0ZW0uX19kYXRhU2NoZW1hXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGZ1bmN0aW9uKGZpZWxkU2NoZW1hLCBmaWVsZE5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gX2MoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcInRlbXBsYXRlXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7IHNsb3Q6IGZpZWxkTmFtZSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfdm0uX3QoZmllbGROYW1lLCBudWxsLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NoZW1hOiBmaWVsZFNjaGVtYSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZHg6IGlkeFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgIDJcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIDogW1xuICAgICAgICAgICAgICAgICAgICBfdm0uX3QoXCJfX25vdE9iakl0ZW1cIiwgbnVsbCwge1xuICAgICAgICAgICAgICAgICAgICAgIHNjaGVtYTogZGF0YUl0ZW0uX19kYXRhU2NoZW1hLFxuICAgICAgICAgICAgICAgICAgICAgIGlkeDogaWR4XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgIClcbiAgICBdLFxuICAgIDFcbiAgKVxufVxudmFyIHN0YXRpY1JlbmRlckZucyA9IFtdXG5yZW5kZXIuX3dpdGhTdHJpcHBlZCA9IHRydWVcblxuZXhwb3J0IHsgcmVuZGVyLCBzdGF0aWNSZW5kZXJGbnMgfSIsIi8qIGdsb2JhbHMgX19WVUVfU1NSX0NPTlRFWFRfXyAqL1xuXG4vLyBJTVBPUlRBTlQ6IERvIE5PVCB1c2UgRVMyMDE1IGZlYXR1cmVzIGluIHRoaXMgZmlsZSAoZXhjZXB0IGZvciBtb2R1bGVzKS5cbi8vIFRoaXMgbW9kdWxlIGlzIGEgcnVudGltZSB1dGlsaXR5IGZvciBjbGVhbmVyIGNvbXBvbmVudCBtb2R1bGUgb3V0cHV0IGFuZCB3aWxsXG4vLyBiZSBpbmNsdWRlZCBpbiB0aGUgZmluYWwgd2VicGFjayB1c2VyIGJ1bmRsZS5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbm9ybWFsaXplQ29tcG9uZW50IChcbiAgc2NyaXB0RXhwb3J0cyxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZ1bmN0aW9uYWxUZW1wbGF0ZSxcbiAgaW5qZWN0U3R5bGVzLFxuICBzY29wZUlkLFxuICBtb2R1bGVJZGVudGlmaWVyLCAvKiBzZXJ2ZXIgb25seSAqL1xuICBzaGFkb3dNb2RlIC8qIHZ1ZS1jbGkgb25seSAqL1xuKSB7XG4gIC8vIFZ1ZS5leHRlbmQgY29uc3RydWN0b3IgZXhwb3J0IGludGVyb3BcbiAgdmFyIG9wdGlvbnMgPSB0eXBlb2Ygc2NyaXB0RXhwb3J0cyA9PT0gJ2Z1bmN0aW9uJ1xuICAgID8gc2NyaXB0RXhwb3J0cy5vcHRpb25zXG4gICAgOiBzY3JpcHRFeHBvcnRzXG5cbiAgLy8gcmVuZGVyIGZ1bmN0aW9uc1xuICBpZiAocmVuZGVyKSB7XG4gICAgb3B0aW9ucy5yZW5kZXIgPSByZW5kZXJcbiAgICBvcHRpb25zLnN0YXRpY1JlbmRlckZucyA9IHN0YXRpY1JlbmRlckZuc1xuICAgIG9wdGlvbnMuX2NvbXBpbGVkID0gdHJ1ZVxuICB9XG5cbiAgLy8gZnVuY3Rpb25hbCB0ZW1wbGF0ZVxuICBpZiAoZnVuY3Rpb25hbFRlbXBsYXRlKSB7XG4gICAgb3B0aW9ucy5mdW5jdGlvbmFsID0gdHJ1ZVxuICB9XG5cbiAgLy8gc2NvcGVkSWRcbiAgaWYgKHNjb3BlSWQpIHtcbiAgICBvcHRpb25zLl9zY29wZUlkID0gJ2RhdGEtdi0nICsgc2NvcGVJZFxuICB9XG5cbiAgdmFyIGhvb2tcbiAgaWYgKG1vZHVsZUlkZW50aWZpZXIpIHsgLy8gc2VydmVyIGJ1aWxkXG4gICAgaG9vayA9IGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICAvLyAyLjMgaW5qZWN0aW9uXG4gICAgICBjb250ZXh0ID1cbiAgICAgICAgY29udGV4dCB8fCAvLyBjYWNoZWQgY2FsbFxuICAgICAgICAodGhpcy4kdm5vZGUgJiYgdGhpcy4kdm5vZGUuc3NyQ29udGV4dCkgfHwgLy8gc3RhdGVmdWxcbiAgICAgICAgKHRoaXMucGFyZW50ICYmIHRoaXMucGFyZW50LiR2bm9kZSAmJiB0aGlzLnBhcmVudC4kdm5vZGUuc3NyQ29udGV4dCkgLy8gZnVuY3Rpb25hbFxuICAgICAgLy8gMi4yIHdpdGggcnVuSW5OZXdDb250ZXh0OiB0cnVlXG4gICAgICBpZiAoIWNvbnRleHQgJiYgdHlwZW9mIF9fVlVFX1NTUl9DT05URVhUX18gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnRleHQgPSBfX1ZVRV9TU1JfQ09OVEVYVF9fXG4gICAgICB9XG4gICAgICAvLyBpbmplY3QgY29tcG9uZW50IHN0eWxlc1xuICAgICAgaWYgKGluamVjdFN0eWxlcykge1xuICAgICAgICBpbmplY3RTdHlsZXMuY2FsbCh0aGlzLCBjb250ZXh0KVxuICAgICAgfVxuICAgICAgLy8gcmVnaXN0ZXIgY29tcG9uZW50IG1vZHVsZSBpZGVudGlmaWVyIGZvciBhc3luYyBjaHVuayBpbmZlcnJlbmNlXG4gICAgICBpZiAoY29udGV4dCAmJiBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cykge1xuICAgICAgICBjb250ZXh0Ll9yZWdpc3RlcmVkQ29tcG9uZW50cy5hZGQobW9kdWxlSWRlbnRpZmllcilcbiAgICAgIH1cbiAgICB9XG4gICAgLy8gdXNlZCBieSBzc3IgaW4gY2FzZSBjb21wb25lbnQgaXMgY2FjaGVkIGFuZCBiZWZvcmVDcmVhdGVcbiAgICAvLyBuZXZlciBnZXRzIGNhbGxlZFxuICAgIG9wdGlvbnMuX3NzclJlZ2lzdGVyID0gaG9va1xuICB9IGVsc2UgaWYgKGluamVjdFN0eWxlcykge1xuICAgIGhvb2sgPSBzaGFkb3dNb2RlXG4gICAgICA/IGZ1bmN0aW9uICgpIHsgaW5qZWN0U3R5bGVzLmNhbGwodGhpcywgdGhpcy4kcm9vdC4kb3B0aW9ucy5zaGFkb3dSb290KSB9XG4gICAgICA6IGluamVjdFN0eWxlc1xuICB9XG5cbiAgaWYgKGhvb2spIHtcbiAgICBpZiAob3B0aW9ucy5mdW5jdGlvbmFsKSB7XG4gICAgICAvLyBmb3IgdGVtcGxhdGUtb25seSBob3QtcmVsb2FkIGJlY2F1c2UgaW4gdGhhdCBjYXNlIHRoZSByZW5kZXIgZm4gZG9lc24ndFxuICAgICAgLy8gZ28gdGhyb3VnaCB0aGUgbm9ybWFsaXplclxuICAgICAgb3B0aW9ucy5faW5qZWN0U3R5bGVzID0gaG9va1xuICAgICAgLy8gcmVnaXN0ZXIgZm9yIGZ1bmN0aW9hbCBjb21wb25lbnQgaW4gdnVlIGZpbGVcbiAgICAgIHZhciBvcmlnaW5hbFJlbmRlciA9IG9wdGlvbnMucmVuZGVyXG4gICAgICBvcHRpb25zLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcldpdGhTdHlsZUluamVjdGlvbiAoaCwgY29udGV4dCkge1xuICAgICAgICBob29rLmNhbGwoY29udGV4dClcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUmVuZGVyKGgsIGNvbnRleHQpXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGluamVjdCBjb21wb25lbnQgcmVnaXN0cmF0aW9uIGFzIGJlZm9yZUNyZWF0ZSBob29rXG4gICAgICB2YXIgZXhpc3RpbmcgPSBvcHRpb25zLmJlZm9yZUNyZWF0ZVxuICAgICAgb3B0aW9ucy5iZWZvcmVDcmVhdGUgPSBleGlzdGluZ1xuICAgICAgICA/IFtdLmNvbmNhdChleGlzdGluZywgaG9vaylcbiAgICAgICAgOiBbaG9va11cbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIGV4cG9ydHM6IHNjcmlwdEV4cG9ydHMsXG4gICAgb3B0aW9uczogb3B0aW9uc1xuICB9XG59XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKCk7XG4vLyBpbXBvcnRzXG5cblxuLy8gbW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJcXG4uX19hcnJheS10YWJzLWZvcm0taXRlbSA+IGxlZ2VuZCB7XFxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkICM4NzhEOTk7XFxuICBwYWRkaW5nOiA2cHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDhkY2U1O1xcbiAgY29sb3I6ICM1YTVlNjY7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBtYXJnaW4tYm90dG9tOiAwcHg7XFxuICBib3JkZXItcmFkaXVzOiA0cHggNHB4IDAgMDtcXG59XFxuLl9fYXJyYXktdGFicy1mb3JtLWl0ZW0gPiBsZWdlbmQgLmVsLWNvbGxhcHNlLWl0ZW1fX2Fycm93IHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBsaW5lLWhlaWdodDogMjJweDtcXG59XFxuLl9fYXJyYXktdGFicy1mb3JtLWl0ZW0gLmVsLXRhYnMge1xcbiAgbWFyZ2luLXRvcDogNnB4O1xcbn1cXG4uX19hcnJheS10YWJzLWZvcm0taXRlbSAuZWwtdGFicy5lbC10YWJzLS1sZWZ0IC5lbC10YWJzX19uZXctdGFiIHtcXG4gICAgbWFyZ2luLWxlZnQ6IDA7XFxufVxcbi5fX2FycmF5LXRhYnMtZm9ybS1pdGVtIC5lbC10YWJzLmVsLXRhYnMtLWxlZnQgLmVsLXRhYnNfX25ldy10YWIgLmVsLWljb24tcGx1cyB7XFxuICAgICAgd2lkdGg6IDEwMCU7XFxufVxcbi5fX2FycmF5LXRhYnMtZm9ybS1pdGVtIC5lbC10YWJzIC5kcmFnZ2luZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y0ZjQ7XFxufVxcbi5fX2FycmF5LXRhYnMtZm9ybS1pdGVtIC5lbC10YWJzIC5lbC10YWJzX19pdGVtIHtcXG4gICAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogbGVmdDtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuLl9fYXJyYXktdGFicy1mb3JtLWl0ZW0gLmVsLXRhYnMgLmVsLXRhYnNfX2l0ZW0gLl9fYXJyYXktdGFicy10YWItbGFiZWwge1xcbiAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gICAgICBtYXgtd2lkdGg6IDIwMHB4O1xcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XFxuICAgICAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxuICAgICAgbGluZS1oZWlnaHQ6IDE0cHg7XFxufVxcbi5fX2FycmF5LXRhYnMtZm9ybS1pdGVtIC5lbC10YWItcGFuZSA+IC5fX29iamVjdC1mb3JtLWl0ZW0gPiAuZWwtcm93IHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIG1hcmdpbi10b3A6IC04cHg7XFxufVxcbi5fX2FycmF5LXRhYnMtZm9ybS1pdGVtIC5lbC10YWJzX19oZWFkZXIge1xcbiAgbWFyZ2luOiAwIDAgOHB4O1xcbn1cXG5cIiwgXCJcIl0pO1xuXG4vLyBleHBvcnRzXG4iLCIvKlxyXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXHJcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxyXG4qL1xyXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdHZhciBsaXN0ID0gW107XHJcblxyXG5cdC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcclxuXHRsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XHJcblx0XHR2YXIgcmVzdWx0ID0gW107XHJcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHR2YXIgaXRlbSA9IHRoaXNbaV07XHJcblx0XHRcdGlmKGl0ZW1bMl0pIHtcclxuXHRcdFx0XHRyZXN1bHQucHVzaChcIkBtZWRpYSBcIiArIGl0ZW1bMl0gKyBcIntcIiArIGl0ZW1bMV0gKyBcIn1cIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0cmVzdWx0LnB1c2goaXRlbVsxXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdHJldHVybiByZXN1bHQuam9pbihcIlwiKTtcclxuXHR9O1xyXG5cclxuXHQvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxyXG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcclxuXHRcdGlmKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKVxyXG5cdFx0XHRtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XHJcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xyXG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGlkID0gdGhpc1tpXVswXTtcclxuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxyXG5cdFx0XHRcdGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcclxuXHRcdH1cclxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuXHRcdFx0dmFyIGl0ZW0gPSBtb2R1bGVzW2ldO1xyXG5cdFx0XHQvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXHJcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXHJcblx0XHRcdC8vICB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXHJcblx0XHRcdC8vICBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXHJcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XHJcblx0XHRcdFx0aWYobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xyXG5cdFx0XHRcdFx0aXRlbVsyXSA9IG1lZGlhUXVlcnk7XHJcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcclxuXHRcdFx0XHRcdGl0ZW1bMl0gPSBcIihcIiArIGl0ZW1bMl0gKyBcIikgYW5kIChcIiArIG1lZGlhUXVlcnkgKyBcIilcIjtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fTtcclxuXHRyZXR1cm4gbGlzdDtcclxufTtcclxuIiwiZnVuY3Rpb24gdCgpe3JldHVybih0PU9iamVjdC5hc3NpZ258fGZ1bmN0aW9uKHQpe2Zvcih2YXIgZT0xO2U8YXJndW1lbnRzLmxlbmd0aDtlKyspe3ZhciBuPWFyZ3VtZW50c1tlXTtmb3IodmFyIG8gaW4gbilPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwobixvKSYmKHRbb109bltvXSl9cmV0dXJuIHR9KS5hcHBseSh0aGlzLGFyZ3VtZW50cyl9ZnVuY3Rpb24gZSh0KXtpZihcInVuZGVmaW5lZFwiIT10eXBlb2Ygd2luZG93JiZ3aW5kb3cubmF2aWdhdG9yKXJldHVybiEhbmF2aWdhdG9yLnVzZXJBZ2VudC5tYXRjaCh0KX12YXIgbj1lKC8oPzpUcmlkZW50LipydlsgOl0/MTFcXC58bXNpZXxpZW1vYmlsZXxXaW5kb3dzIFBob25lKS9pKSxvPWUoL0VkZ2UvaSksaT1lKC9maXJlZm94L2kpLHI9ZSgvc2FmYXJpL2kpJiYhZSgvY2hyb21lL2kpJiYhZSgvYW5kcm9pZC9pKSxhPWUoL2lQKGFkfG9kfGhvbmUpL2kpLGw9ZSgvY2hyb21lL2kpJiZlKC9hbmRyb2lkL2kpLHM9e2NhcHR1cmU6ITEscGFzc2l2ZTohMX07ZnVuY3Rpb24gYyh0LGUsbyl7dC5hZGRFdmVudExpc3RlbmVyKGUsbywhbiYmcyl9ZnVuY3Rpb24gdSh0LGUsbyl7dC5yZW1vdmVFdmVudExpc3RlbmVyKGUsbywhbiYmcyl9ZnVuY3Rpb24gZCh0LGUpe2lmKGUpe2lmKFwiPlwiPT09ZVswXSYmKGU9ZS5zdWJzdHJpbmcoMSkpLHQpdHJ5e2lmKHQubWF0Y2hlcylyZXR1cm4gdC5tYXRjaGVzKGUpO2lmKHQubXNNYXRjaGVzU2VsZWN0b3IpcmV0dXJuIHQubXNNYXRjaGVzU2VsZWN0b3IoZSk7aWYodC53ZWJraXRNYXRjaGVzU2VsZWN0b3IpcmV0dXJuIHQud2Via2l0TWF0Y2hlc1NlbGVjdG9yKGUpfWNhdGNoKHQpe3JldHVybiExfXJldHVybiExfX1mdW5jdGlvbiBoKHQpe3JldHVybiB0Lmhvc3QmJnQhPT1kb2N1bWVudCYmdC5ob3N0Lm5vZGVUeXBlP3QuaG9zdDp0LnBhcmVudE5vZGV9ZnVuY3Rpb24gZih0LGUsbixvKXtpZih0KXtuPW58fGRvY3VtZW50O2Rve2lmKG51bGwhPWUmJihcIj5cIj09PWVbMF0/dC5wYXJlbnROb2RlPT09biYmZCh0LGUpOmQodCxlKSl8fG8mJnQ9PT1uKXJldHVybiB0O2lmKHQ9PT1uKWJyZWFrfXdoaWxlKHQ9aCh0KSl9cmV0dXJuIG51bGx9dmFyIHAsZz0vXFxzKy9nO2Z1bmN0aW9uIHYodCxlLG4pe2lmKHQmJmUpaWYodC5jbGFzc0xpc3QpdC5jbGFzc0xpc3Rbbj9cImFkZFwiOlwicmVtb3ZlXCJdKGUpO2Vsc2V7dmFyIG89KFwiIFwiK3QuY2xhc3NOYW1lK1wiIFwiKS5yZXBsYWNlKGcsXCIgXCIpLnJlcGxhY2UoXCIgXCIrZStcIiBcIixcIiBcIik7dC5jbGFzc05hbWU9KG8rKG4/XCIgXCIrZTpcIlwiKSkucmVwbGFjZShnLFwiIFwiKX19ZnVuY3Rpb24gbSh0LGUsbil7dmFyIG89dCYmdC5zdHlsZTtpZihvKXtpZih2b2lkIDA9PT1uKXJldHVybiBkb2N1bWVudC5kZWZhdWx0VmlldyYmZG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZT9uPWRvY3VtZW50LmRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGUodCxcIlwiKTp0LmN1cnJlbnRTdHlsZSYmKG49dC5jdXJyZW50U3R5bGUpLHZvaWQgMD09PWU/bjpuW2VdO2UgaW4gb3x8LTEhPT1lLmluZGV4T2YoXCJ3ZWJraXRcIil8fChlPVwiLXdlYmtpdC1cIitlKSxvW2VdPW4rKFwic3RyaW5nXCI9PXR5cGVvZiBuP1wiXCI6XCJweFwiKX19ZnVuY3Rpb24gYih0LGUpe3ZhciBuPVwiXCI7aWYoXCJzdHJpbmdcIj09dHlwZW9mIHQpbj10O2Vsc2UgZG97dmFyIG89bSh0LFwidHJhbnNmb3JtXCIpO28mJlwibm9uZVwiIT09byYmKG49bytcIiBcIituKX13aGlsZSghZSYmKHQ9dC5wYXJlbnROb2RlKSk7dmFyIGk9d2luZG93LkRPTU1hdHJpeHx8d2luZG93LldlYktpdENTU01hdHJpeHx8d2luZG93LkNTU01hdHJpeHx8d2luZG93Lk1TQ1NTTWF0cml4O3JldHVybiBpJiZuZXcgaShuKX1mdW5jdGlvbiB3KHQsZSxuKXtpZih0KXt2YXIgbz10LmdldEVsZW1lbnRzQnlUYWdOYW1lKGUpLGk9MCxyPW8ubGVuZ3RoO2lmKG4pZm9yKDtpPHI7aSsrKW4ob1tpXSxpKTtyZXR1cm4gb31yZXR1cm5bXX1mdW5jdGlvbiBFKCl7cmV0dXJuIGRvY3VtZW50LnNjcm9sbGluZ0VsZW1lbnR8fGRvY3VtZW50LmRvY3VtZW50RWxlbWVudH1mdW5jdGlvbiB5KHQsZSxvLGkscil7aWYodC5nZXRCb3VuZGluZ0NsaWVudFJlY3R8fHQ9PT13aW5kb3cpe3ZhciBhLGwscyxjLHUsZCxoO2lmKHQhPT13aW5kb3cmJnQhPT1FKCk/KGw9KGE9dC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKSkudG9wLHM9YS5sZWZ0LGM9YS5ib3R0b20sdT1hLnJpZ2h0LGQ9YS5oZWlnaHQsaD1hLndpZHRoKToobD0wLHM9MCxjPXdpbmRvdy5pbm5lckhlaWdodCx1PXdpbmRvdy5pbm5lcldpZHRoLGQ9d2luZG93LmlubmVySGVpZ2h0LGg9d2luZG93LmlubmVyV2lkdGgpLChlfHxvKSYmdCE9PXdpbmRvdyYmKHI9cnx8dC5wYXJlbnROb2RlLCFuKSlkb3tpZihyJiZyLmdldEJvdW5kaW5nQ2xpZW50UmVjdCYmKFwibm9uZVwiIT09bShyLFwidHJhbnNmb3JtXCIpfHxvJiZcInN0YXRpY1wiIT09bShyLFwicG9zaXRpb25cIikpKXt2YXIgZj1yLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO2wtPWYudG9wK3BhcnNlSW50KG0ocixcImJvcmRlci10b3Atd2lkdGhcIikpLHMtPWYubGVmdCtwYXJzZUludChtKHIsXCJib3JkZXItbGVmdC13aWR0aFwiKSksYz1sK2EuaGVpZ2h0LHU9cythLndpZHRoO2JyZWFrfX13aGlsZShyPXIucGFyZW50Tm9kZSk7aWYoaSYmdCE9PXdpbmRvdyl7dmFyIHA9YihyfHx0KSxnPXAmJnAuYSx2PXAmJnAuZDtwJiYoYz0obC89dikrKGQvPXYpLHU9KHMvPWcpKyhoLz1nKSl9cmV0dXJue3RvcDpsLGxlZnQ6cyxib3R0b206YyxyaWdodDp1LHdpZHRoOmgsaGVpZ2h0OmR9fX1mdW5jdGlvbiBEKHQsZSxuKXtmb3IodmFyIG89eCh0LCEwKSxpPXkodClbZV07bzspe3ZhciByPXkobylbbl07aWYoIShcInRvcFwiPT09bnx8XCJsZWZ0XCI9PT1uP2k+PXI6aTw9cikpcmV0dXJuIG87aWYobz09PUUoKSlicmVhaztvPXgobywhMSl9cmV0dXJuITF9ZnVuY3Rpb24gXyh0LGUsbil7Zm9yKHZhciBvPTAsaT0wLHI9dC5jaGlsZHJlbjtpPHIubGVuZ3RoOyl7aWYoXCJub25lXCIhPT1yW2ldLnN0eWxlLmRpc3BsYXkmJnJbaV0hPT1JdC5naG9zdCYmcltpXSE9PUl0LmRyYWdnZWQmJmYocltpXSxuLmRyYWdnYWJsZSx0LCExKSl7aWYobz09PWUpcmV0dXJuIHJbaV07bysrfWkrK31yZXR1cm4gbnVsbH1mdW5jdGlvbiBTKHQsZSl7Zm9yKHZhciBuPXQubGFzdEVsZW1lbnRDaGlsZDtuJiYobj09PUl0Lmdob3N0fHxcIm5vbmVcIj09PW0obixcImRpc3BsYXlcIil8fGUmJiFkKG4sZSkpOyluPW4ucHJldmlvdXNFbGVtZW50U2libGluZztyZXR1cm4gbnx8bnVsbH1mdW5jdGlvbiBDKHQsZSl7dmFyIG49MDtpZighdHx8IXQucGFyZW50Tm9kZSlyZXR1cm4tMTtmb3IoO3Q9dC5wcmV2aW91c0VsZW1lbnRTaWJsaW5nOylcIlRFTVBMQVRFXCI9PT10Lm5vZGVOYW1lLnRvVXBwZXJDYXNlKCl8fHQ9PT1JdC5jbG9uZXx8ZSYmIWQodCxlKXx8bisrO3JldHVybiBufWZ1bmN0aW9uIFQodCl7dmFyIGU9MCxuPTAsbz1FKCk7aWYodClkb3t2YXIgaT1iKHQpO2UrPXQuc2Nyb2xsTGVmdCppLmEsbis9dC5zY3JvbGxUb3AqaS5kfXdoaWxlKHQhPT1vJiYodD10LnBhcmVudE5vZGUpKTtyZXR1cm5bZSxuXX1mdW5jdGlvbiB4KHQsZSl7aWYoIXR8fCF0LmdldEJvdW5kaW5nQ2xpZW50UmVjdClyZXR1cm4gRSgpO3ZhciBuPXQsbz0hMTtkb3tpZihuLmNsaWVudFdpZHRoPG4uc2Nyb2xsV2lkdGh8fG4uY2xpZW50SGVpZ2h0PG4uc2Nyb2xsSGVpZ2h0KXt2YXIgaT1tKG4pO2lmKG4uY2xpZW50V2lkdGg8bi5zY3JvbGxXaWR0aCYmKFwiYXV0b1wiPT1pLm92ZXJmbG93WHx8XCJzY3JvbGxcIj09aS5vdmVyZmxvd1gpfHxuLmNsaWVudEhlaWdodDxuLnNjcm9sbEhlaWdodCYmKFwiYXV0b1wiPT1pLm92ZXJmbG93WXx8XCJzY3JvbGxcIj09aS5vdmVyZmxvd1kpKXtpZighbi5nZXRCb3VuZGluZ0NsaWVudFJlY3R8fG49PT1kb2N1bWVudC5ib2R5KXJldHVybiBFKCk7aWYob3x8ZSlyZXR1cm4gbjtvPSEwfX19d2hpbGUobj1uLnBhcmVudE5vZGUpO3JldHVybiBFKCl9ZnVuY3Rpb24gTSh0LGUpe3JldHVybiBNYXRoLnJvdW5kKHQudG9wKT09PU1hdGgucm91bmQoZS50b3ApJiZNYXRoLnJvdW5kKHQubGVmdCk9PT1NYXRoLnJvdW5kKGUubGVmdCkmJk1hdGgucm91bmQodC5oZWlnaHQpPT09TWF0aC5yb3VuZChlLmhlaWdodCkmJk1hdGgucm91bmQodC53aWR0aCk9PT1NYXRoLnJvdW5kKGUud2lkdGgpfWZ1bmN0aW9uIE4odCxlKXtyZXR1cm4gZnVuY3Rpb24oKXtpZighcCl7dmFyIG49YXJndW1lbnRzLG89dGhpczsxPT09bi5sZW5ndGg/dC5jYWxsKG8sblswXSk6dC5hcHBseShvLG4pLHA9c2V0VGltZW91dChmdW5jdGlvbigpe3A9dm9pZCAwfSxlKX19fWZ1bmN0aW9uIE8odCxlLG4pe3Quc2Nyb2xsTGVmdCs9ZSx0LnNjcm9sbFRvcCs9bn1mdW5jdGlvbiBBKHQpe3ZhciBlPXdpbmRvdy5Qb2x5bWVyLG49d2luZG93LmpRdWVyeXx8d2luZG93LlplcHRvO3JldHVybiBlJiZlLmRvbT9lLmRvbSh0KS5jbG9uZU5vZGUoITApOm4/bih0KS5jbG9uZSghMClbMF06dC5jbG9uZU5vZGUoITApfWZ1bmN0aW9uIEkodCxlKXttKHQsXCJwb3NpdGlvblwiLFwiYWJzb2x1dGVcIiksbSh0LFwidG9wXCIsZS50b3ApLG0odCxcImxlZnRcIixlLmxlZnQpLG0odCxcIndpZHRoXCIsZS53aWR0aCksbSh0LFwiaGVpZ2h0XCIsZS5oZWlnaHQpfWZ1bmN0aW9uIFAodCl7bSh0LFwicG9zaXRpb25cIixcIlwiKSxtKHQsXCJ0b3BcIixcIlwiKSxtKHQsXCJsZWZ0XCIsXCJcIiksbSh0LFwid2lkdGhcIixcIlwiKSxtKHQsXCJoZWlnaHRcIixcIlwiKX12YXIgaz1cIlNvcnRhYmxlXCIrKG5ldyBEYXRlKS5nZXRUaW1lKCksUj1bXSxYPXtpbml0aWFsaXplQnlEZWZhdWx0OiEwfSxZPXttb3VudDpmdW5jdGlvbih0KXtmb3IodmFyIGUgaW4gWClYLmhhc093blByb3BlcnR5KGUpJiYhKGUgaW4gdCkmJih0W2VdPVhbZV0pO1IucHVzaCh0KX0scGx1Z2luRXZlbnQ6ZnVuY3Rpb24oZSxuLG8pe3ZhciBpPXRoaXM7dGhpcy5ldmVudENhbmNlbGVkPSExLG8uY2FuY2VsPWZ1bmN0aW9uKCl7aS5ldmVudENhbmNlbGVkPSEwfTt2YXIgcj1lK1wiR2xvYmFsXCI7Ui5mb3JFYWNoKGZ1bmN0aW9uKGkpe25baS5wbHVnaW5OYW1lXSYmKG5baS5wbHVnaW5OYW1lXVtyXSYmbltpLnBsdWdpbk5hbWVdW3JdKHQoe3NvcnRhYmxlOm59LG8pKSxuLm9wdGlvbnNbaS5wbHVnaW5OYW1lXSYmbltpLnBsdWdpbk5hbWVdW2VdJiZuW2kucGx1Z2luTmFtZV1bZV0odCh7c29ydGFibGU6bn0sbykpKX0pfSxpbml0aWFsaXplUGx1Z2luczpmdW5jdGlvbih0LGUsbixvKXtmb3IodmFyIGkgaW4gUi5mb3JFYWNoKGZ1bmN0aW9uKG8pe3ZhciBpPW8ucGx1Z2luTmFtZTtpZih0Lm9wdGlvbnNbaV18fG8uaW5pdGlhbGl6ZUJ5RGVmYXVsdCl7dmFyIHI9bmV3IG8odCxlLHQub3B0aW9ucyk7ci5zb3J0YWJsZT10LHIub3B0aW9ucz10Lm9wdGlvbnMsdFtpXT1yLE9iamVjdC5hc3NpZ24obixyLmRlZmF1bHRzKX19KSx0Lm9wdGlvbnMpaWYodC5vcHRpb25zLmhhc093blByb3BlcnR5KGkpKXt2YXIgcj10aGlzLm1vZGlmeU9wdGlvbih0LGksdC5vcHRpb25zW2ldKTt2b2lkIDAhPT1yJiYodC5vcHRpb25zW2ldPXIpfX0sZ2V0RXZlbnRQcm9wZXJ0aWVzOmZ1bmN0aW9uKHQsZSl7dmFyIG49e307cmV0dXJuIFIuZm9yRWFjaChmdW5jdGlvbihvKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBvLmV2ZW50UHJvcGVydGllcyYmT2JqZWN0LmFzc2lnbihuLG8uZXZlbnRQcm9wZXJ0aWVzLmNhbGwoZVtvLnBsdWdpbk5hbWVdLHQpKX0pLG59LG1vZGlmeU9wdGlvbjpmdW5jdGlvbih0LGUsbil7dmFyIG87cmV0dXJuIFIuZm9yRWFjaChmdW5jdGlvbihpKXt0W2kucGx1Z2luTmFtZV0mJmkub3B0aW9uTGlzdGVuZXJzJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiBpLm9wdGlvbkxpc3RlbmVyc1tlXSYmKG89aS5vcHRpb25MaXN0ZW5lcnNbZV0uY2FsbCh0W2kucGx1Z2luTmFtZV0sbikpfSksb319O2Z1bmN0aW9uIEIoZSl7dmFyIGk9ZS5zb3J0YWJsZSxyPWUucm9vdEVsLGE9ZS5uYW1lLGw9ZS50YXJnZXRFbCxzPWUuY2xvbmVFbCxjPWUudG9FbCx1PWUuZnJvbUVsLGQ9ZS5vbGRJbmRleCxoPWUubmV3SW5kZXgsZj1lLm9sZERyYWdnYWJsZUluZGV4LHA9ZS5uZXdEcmFnZ2FibGVJbmRleCxnPWUub3JpZ2luYWxFdmVudCx2PWUucHV0U29ydGFibGUsbT1lLmV4dHJhRXZlbnRQcm9wZXJ0aWVzO2lmKGk9aXx8ciYmcltrXSl7dmFyIGIsdz1pLm9wdGlvbnMsRT1cIm9uXCIrYS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSthLnN1YnN0cigxKTshd2luZG93LkN1c3RvbUV2ZW50fHxufHxvPyhiPWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIikpLmluaXRFdmVudChhLCEwLCEwKTpiPW5ldyBDdXN0b21FdmVudChhLHtidWJibGVzOiEwLGNhbmNlbGFibGU6ITB9KSxiLnRvPWN8fHIsYi5mcm9tPXV8fHIsYi5pdGVtPWx8fHIsYi5jbG9uZT1zLGIub2xkSW5kZXg9ZCxiLm5ld0luZGV4PWgsYi5vbGREcmFnZ2FibGVJbmRleD1mLGIubmV3RHJhZ2dhYmxlSW5kZXg9cCxiLm9yaWdpbmFsRXZlbnQ9ZyxiLnB1bGxNb2RlPXY/di5sYXN0UHV0TW9kZTp2b2lkIDA7dmFyIHk9dCh7fSxtLFkuZ2V0RXZlbnRQcm9wZXJ0aWVzKGEsaSkpO2Zvcih2YXIgRCBpbiB5KWJbRF09eVtEXTtyJiZyLmRpc3BhdGNoRXZlbnQoYiksd1tFXSYmd1tFXS5jYWxsKGksYil9fXZhciBIPWZ1bmN0aW9uKGUsbixvKXt2YXIgaT12b2lkIDA9PT1vP3t9Om8scj1pLmV2dCxhPWZ1bmN0aW9uKHQsZSl7aWYobnVsbD09dClyZXR1cm57fTt2YXIgbixvLGk9e30scj1PYmplY3Qua2V5cyh0KTtmb3Iobz0wO288ci5sZW5ndGg7bysrKWUuaW5kZXhPZihuPXJbb10pPj0wfHwoaVtuXT10W25dKTtyZXR1cm4gaX0oaSxbXCJldnRcIl0pO1kucGx1Z2luRXZlbnQuYmluZChJdCkoZSxuLHQoe2RyYWdFbDpMLHBhcmVudEVsOkssZ2hvc3RFbDpXLHJvb3RFbDpqLG5leHRFbDp6LGxhc3REb3duRWw6RyxjbG9uZUVsOlUsY2xvbmVIaWRkZW46cSxkcmFnU3RhcnRlZDpsdCxwdXRTb3J0YWJsZTp0dCxhY3RpdmVTb3J0YWJsZTpJdC5hY3RpdmUsb3JpZ2luYWxFdmVudDpyLG9sZEluZGV4OlYsb2xkRHJhZ2dhYmxlSW5kZXg6USxuZXdJbmRleDpaLG5ld0RyYWdnYWJsZUluZGV4OiQsaGlkZUdob3N0Rm9yVGFyZ2V0Onh0LHVuaGlkZUdob3N0Rm9yVGFyZ2V0Ok10LGNsb25lTm93SGlkZGVuOmZ1bmN0aW9uKCl7cT0hMH0sY2xvbmVOb3dTaG93bjpmdW5jdGlvbigpe3E9ITF9LGRpc3BhdGNoU29ydGFibGVFdmVudDpmdW5jdGlvbih0KXtGKHtzb3J0YWJsZTpuLG5hbWU6dCxvcmlnaW5hbEV2ZW50OnJ9KX19LGEpKX07ZnVuY3Rpb24gRihlKXtCKHQoe3B1dFNvcnRhYmxlOnR0LGNsb25lRWw6VSx0YXJnZXRFbDpMLHJvb3RFbDpqLG9sZEluZGV4OlYsb2xkRHJhZ2dhYmxlSW5kZXg6USxuZXdJbmRleDpaLG5ld0RyYWdnYWJsZUluZGV4OiR9LGUpKX12YXIgTCxLLFcsaix6LEcsVSxxLFYsWixRLCQsSix0dCxldCxudCxvdCxpdCxydCxhdCxsdCxzdCxjdCx1dCxkdCxodD0hMSxmdD0hMSxwdD1bXSxndD0hMSx2dD0hMSxtdD1bXSxidD0hMSx3dD1bXSxFdD1cInVuZGVmaW5lZFwiIT10eXBlb2YgZG9jdW1lbnQseXQ9YSxEdD1vfHxuP1wiY3NzRmxvYXRcIjpcImZsb2F0XCIsX3Q9RXQmJiFsJiYhYSYmXCJkcmFnZ2FibGVcImluIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiksU3Q9ZnVuY3Rpb24oKXtpZihFdCl7aWYobilyZXR1cm4hMTt2YXIgdD1kb2N1bWVudC5jcmVhdGVFbGVtZW50KFwieFwiKTtyZXR1cm4gdC5zdHlsZS5jc3NUZXh0PVwicG9pbnRlci1ldmVudHM6YXV0b1wiLFwiYXV0b1wiPT09dC5zdHlsZS5wb2ludGVyRXZlbnRzfX0oKSxDdD1mdW5jdGlvbih0LGUpe3ZhciBuPW0odCksbz1wYXJzZUludChuLndpZHRoKS1wYXJzZUludChuLnBhZGRpbmdMZWZ0KS1wYXJzZUludChuLnBhZGRpbmdSaWdodCktcGFyc2VJbnQobi5ib3JkZXJMZWZ0V2lkdGgpLXBhcnNlSW50KG4uYm9yZGVyUmlnaHRXaWR0aCksaT1fKHQsMCxlKSxyPV8odCwxLGUpLGE9aSYmbShpKSxsPXImJm0ocikscz1hJiZwYXJzZUludChhLm1hcmdpbkxlZnQpK3BhcnNlSW50KGEubWFyZ2luUmlnaHQpK3koaSkud2lkdGgsYz1sJiZwYXJzZUludChsLm1hcmdpbkxlZnQpK3BhcnNlSW50KGwubWFyZ2luUmlnaHQpK3kocikud2lkdGg7cmV0dXJuXCJmbGV4XCI9PT1uLmRpc3BsYXk/XCJjb2x1bW5cIj09PW4uZmxleERpcmVjdGlvbnx8XCJjb2x1bW4tcmV2ZXJzZVwiPT09bi5mbGV4RGlyZWN0aW9uP1widmVydGljYWxcIjpcImhvcml6b250YWxcIjpcImdyaWRcIj09PW4uZGlzcGxheT9uLmdyaWRUZW1wbGF0ZUNvbHVtbnMuc3BsaXQoXCIgXCIpLmxlbmd0aDw9MT9cInZlcnRpY2FsXCI6XCJob3Jpem9udGFsXCI6aSYmYS5mbG9hdCYmXCJub25lXCIhPT1hLmZsb2F0PyFyfHxcImJvdGhcIiE9PWwuY2xlYXImJmwuY2xlYXIhPT0oXCJsZWZ0XCI9PT1hLmZsb2F0P1wibGVmdFwiOlwicmlnaHRcIik/XCJob3Jpem9udGFsXCI6XCJ2ZXJ0aWNhbFwiOmkmJihcImJsb2NrXCI9PT1hLmRpc3BsYXl8fFwiZmxleFwiPT09YS5kaXNwbGF5fHxcInRhYmxlXCI9PT1hLmRpc3BsYXl8fFwiZ3JpZFwiPT09YS5kaXNwbGF5fHxzPj1vJiZcIm5vbmVcIj09PW5bRHRdfHxyJiZcIm5vbmVcIj09PW5bRHRdJiZzK2M+byk/XCJ2ZXJ0aWNhbFwiOlwiaG9yaXpvbnRhbFwifSxUdD1mdW5jdGlvbih0KXtmdW5jdGlvbiBlKHQsbil7cmV0dXJuIGZ1bmN0aW9uKG8saSxyLGEpe2lmKG51bGw9PXQmJihufHxvLm9wdGlvbnMuZ3JvdXAubmFtZSYmaS5vcHRpb25zLmdyb3VwLm5hbWUmJm8ub3B0aW9ucy5ncm91cC5uYW1lPT09aS5vcHRpb25zLmdyb3VwLm5hbWUpKXJldHVybiEwO2lmKG51bGw9PXR8fCExPT09dClyZXR1cm4hMTtpZihuJiZcImNsb25lXCI9PT10KXJldHVybiB0O2lmKFwiZnVuY3Rpb25cIj09dHlwZW9mIHQpcmV0dXJuIGUodChvLGkscixhKSxuKShvLGkscixhKTt2YXIgbD0obj9vOmkpLm9wdGlvbnMuZ3JvdXAubmFtZTtyZXR1cm4hMD09PXR8fFwic3RyaW5nXCI9PXR5cGVvZiB0JiZ0PT09bHx8dC5qb2luJiZ0LmluZGV4T2YobCk+LTF9fXZhciBuPXt9LG89dC5ncm91cDtvJiZcIm9iamVjdFwiPT10eXBlb2Ygb3x8KG89e25hbWU6b30pLG4ubmFtZT1vLm5hbWUsbi5jaGVja1B1bGw9ZShvLnB1bGwsITApLG4uY2hlY2tQdXQ9ZShvLnB1dCksbi5yZXZlcnRDbG9uZT1vLnJldmVydENsb25lLHQuZ3JvdXA9bn0seHQ9ZnVuY3Rpb24oKXshU3QmJlcmJm0oVyxcImRpc3BsYXlcIixcIm5vbmVcIil9LE10PWZ1bmN0aW9uKCl7IVN0JiZXJiZtKFcsXCJkaXNwbGF5XCIsXCJcIil9O0V0JiZkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIixmdW5jdGlvbih0KXtpZihmdClyZXR1cm4gdC5wcmV2ZW50RGVmYXVsdCgpLHQuc3RvcFByb3BhZ2F0aW9uJiZ0LnN0b3BQcm9wYWdhdGlvbigpLHQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uJiZ0LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpLGZ0PSExLCExfSwhMCk7dmFyIE50LE90PWZ1bmN0aW9uKHQpe2lmKEwpe3ZhciBlPShpPSh0PXQudG91Y2hlcz90LnRvdWNoZXNbMF06dCkuY2xpZW50WCxyPXQuY2xpZW50WSxwdC5zb21lKGZ1bmN0aW9uKHQpe2lmKCFTKHQpKXt2YXIgZT15KHQpLG49dFtrXS5vcHRpb25zLmVtcHR5SW5zZXJ0VGhyZXNob2xkO3JldHVybiBuJiZpPj1lLmxlZnQtbiYmaTw9ZS5yaWdodCtuJiZyPj1lLnRvcC1uJiZyPD1lLmJvdHRvbStuP2E9dDp2b2lkIDB9fSksYSk7aWYoZSl7dmFyIG49e307Zm9yKHZhciBvIGluIHQpdC5oYXNPd25Qcm9wZXJ0eShvKSYmKG5bb109dFtvXSk7bi50YXJnZXQ9bi5yb290RWw9ZSxuLnByZXZlbnREZWZhdWx0PXZvaWQgMCxuLnN0b3BQcm9wYWdhdGlvbj12b2lkIDAsZVtrXS5fb25EcmFnT3ZlcihuKX19dmFyIGkscixhfSxBdD1mdW5jdGlvbih0KXtMJiZMLnBhcmVudE5vZGVba10uX2lzT3V0c2lkZVRoaXNFbCh0LnRhcmdldCl9O2Z1bmN0aW9uIEl0KGUsbil7aWYoIWV8fCFlLm5vZGVUeXBlfHwxIT09ZS5ub2RlVHlwZSl0aHJvd1wiU29ydGFibGU6IGBlbGAgbXVzdCBiZSBhbiBIVE1MRWxlbWVudCwgbm90IFwiK3t9LnRvU3RyaW5nLmNhbGwoZSk7dGhpcy5lbD1lLHRoaXMub3B0aW9ucz1uPU9iamVjdC5hc3NpZ24oe30sbiksZVtrXT10aGlzO3ZhciBvLGkscj17Z3JvdXA6bnVsbCxzb3J0OiEwLGRpc2FibGVkOiExLHN0b3JlOm51bGwsaGFuZGxlOm51bGwsZHJhZ2dhYmxlOi9eW3VvXWwkL2kudGVzdChlLm5vZGVOYW1lKT9cIj5saVwiOlwiPipcIixzd2FwVGhyZXNob2xkOjEsaW52ZXJ0U3dhcDohMSxpbnZlcnRlZFN3YXBUaHJlc2hvbGQ6bnVsbCxyZW1vdmVDbG9uZU9uSGlkZTohMCxkaXJlY3Rpb246ZnVuY3Rpb24oKXtyZXR1cm4gQ3QoZSx0aGlzLm9wdGlvbnMpfSxnaG9zdENsYXNzOlwic29ydGFibGUtZ2hvc3RcIixjaG9zZW5DbGFzczpcInNvcnRhYmxlLWNob3NlblwiLGRyYWdDbGFzczpcInNvcnRhYmxlLWRyYWdcIixpZ25vcmU6XCJhLCBpbWdcIixmaWx0ZXI6bnVsbCxwcmV2ZW50T25GaWx0ZXI6ITAsYW5pbWF0aW9uOjAsZWFzaW5nOm51bGwsc2V0RGF0YTpmdW5jdGlvbih0LGUpe3Quc2V0RGF0YShcIlRleHRcIixlLnRleHRDb250ZW50KX0sZHJvcEJ1YmJsZTohMSxkcmFnb3ZlckJ1YmJsZTohMSxkYXRhSWRBdHRyOlwiZGF0YS1pZFwiLGRlbGF5OjAsZGVsYXlPblRvdWNoT25seTohMSx0b3VjaFN0YXJ0VGhyZXNob2xkOihOdW1iZXIucGFyc2VJbnQ/TnVtYmVyOndpbmRvdykucGFyc2VJbnQod2luZG93LmRldmljZVBpeGVsUmF0aW8sMTApfHwxLGZvcmNlRmFsbGJhY2s6ITEsZmFsbGJhY2tDbGFzczpcInNvcnRhYmxlLWZhbGxiYWNrXCIsZmFsbGJhY2tPbkJvZHk6ITEsZmFsbGJhY2tUb2xlcmFuY2U6MCxmYWxsYmFja09mZnNldDp7eDowLHk6MH0sc3VwcG9ydFBvaW50ZXI6ITEhPT1JdC5zdXBwb3J0UG9pbnRlciYmXCJQb2ludGVyRXZlbnRcImluIHdpbmRvdyxlbXB0eUluc2VydFRocmVzaG9sZDo1fTtmb3IodmFyIGEgaW4gWS5pbml0aWFsaXplUGx1Z2lucyh0aGlzLGUscikscikhKGEgaW4gbikmJihuW2FdPXJbYV0pO2Zvcih2YXIgbCBpbiBUdChuKSx0aGlzKVwiX1wiPT09bC5jaGFyQXQoMCkmJlwiZnVuY3Rpb25cIj09dHlwZW9mIHRoaXNbbF0mJih0aGlzW2xdPXRoaXNbbF0uYmluZCh0aGlzKSk7dGhpcy5uYXRpdmVEcmFnZ2FibGU9IW4uZm9yY2VGYWxsYmFjayYmX3QsdGhpcy5uYXRpdmVEcmFnZ2FibGUmJih0aGlzLm9wdGlvbnMudG91Y2hTdGFydFRocmVzaG9sZD0xKSxuLnN1cHBvcnRQb2ludGVyP2MoZSxcInBvaW50ZXJkb3duXCIsdGhpcy5fb25UYXBTdGFydCk6KGMoZSxcIm1vdXNlZG93blwiLHRoaXMuX29uVGFwU3RhcnQpLGMoZSxcInRvdWNoc3RhcnRcIix0aGlzLl9vblRhcFN0YXJ0KSksdGhpcy5uYXRpdmVEcmFnZ2FibGUmJihjKGUsXCJkcmFnb3ZlclwiLHRoaXMpLGMoZSxcImRyYWdlbnRlclwiLHRoaXMpKSxwdC5wdXNoKHRoaXMuZWwpLG4uc3RvcmUmJm4uc3RvcmUuZ2V0JiZ0aGlzLnNvcnQobi5zdG9yZS5nZXQodGhpcyl8fFtdKSxPYmplY3QuYXNzaWduKHRoaXMsKGk9W10se2NhcHR1cmVBbmltYXRpb25TdGF0ZTpmdW5jdGlvbigpe2k9W10sdGhpcy5vcHRpb25zLmFuaW1hdGlvbiYmW10uc2xpY2UuY2FsbCh0aGlzLmVsLmNoaWxkcmVuKS5mb3JFYWNoKGZ1bmN0aW9uKGUpe2lmKFwibm9uZVwiIT09bShlLFwiZGlzcGxheVwiKSYmdm9pZCAwIT09ZSl7aS5wdXNoKHt0YXJnZXQ6ZSxyZWN0OnkoZSl9KTt2YXIgbj10KHt9LGlbaS5sZW5ndGgtMV0ucmVjdCk7aWYoZS50aGlzQW5pbWF0aW9uRHVyYXRpb24pe3ZhciBvPWIoZSwhMCk7byYmKG4udG9wLT1vLmYsbi5sZWZ0LT1vLmUpfWUuZnJvbVJlY3Q9bn19KX0sYWRkQW5pbWF0aW9uU3RhdGU6ZnVuY3Rpb24odCl7aS5wdXNoKHQpfSxyZW1vdmVBbmltYXRpb25TdGF0ZTpmdW5jdGlvbih0KXtpLnNwbGljZShmdW5jdGlvbih0LGUpe2Zvcih2YXIgbiBpbiB0KWlmKHQuaGFzT3duUHJvcGVydHkobikpZm9yKHZhciBvIGluIGUpaWYoZS5oYXNPd25Qcm9wZXJ0eShvKSYmZVtvXT09PXRbbl1bb10pcmV0dXJuIE51bWJlcihuKTtyZXR1cm4tMX0oaSx7dGFyZ2V0OnR9KSwxKX0sYW5pbWF0ZUFsbDpmdW5jdGlvbih0KXt2YXIgZT10aGlzO2lmKCF0aGlzLm9wdGlvbnMuYW5pbWF0aW9uKXJldHVybiBjbGVhclRpbWVvdXQobyksdm9pZChcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0KCkpO3ZhciBuPSExLHI9MDtpLmZvckVhY2goZnVuY3Rpb24odCl7dmFyIG89MCxpPXQudGFyZ2V0LGE9aS5mcm9tUmVjdCxsPXkoaSkscz1pLnByZXZGcm9tUmVjdCxjPWkucHJldlRvUmVjdCx1PXQucmVjdCxkPWIoaSwhMCk7ZCYmKGwudG9wLT1kLmYsbC5sZWZ0LT1kLmUpLGkudG9SZWN0PWwsaS50aGlzQW5pbWF0aW9uRHVyYXRpb24mJk0ocyxsKSYmIU0oYSxsKSYmKHUudG9wLWwudG9wKS8odS5sZWZ0LWwubGVmdCk9PShhLnRvcC1sLnRvcCkvKGEubGVmdC1sLmxlZnQpJiYobz1mdW5jdGlvbih0LGUsbixvKXtyZXR1cm4gTWF0aC5zcXJ0KE1hdGgucG93KGUudG9wLXQudG9wLDIpK01hdGgucG93KGUubGVmdC10LmxlZnQsMikpL01hdGguc3FydChNYXRoLnBvdyhlLnRvcC1uLnRvcCwyKStNYXRoLnBvdyhlLmxlZnQtbi5sZWZ0LDIpKSpvLmFuaW1hdGlvbn0odSxzLGMsZS5vcHRpb25zKSksTShsLGEpfHwoaS5wcmV2RnJvbVJlY3Q9YSxpLnByZXZUb1JlY3Q9bCxvfHwobz1lLm9wdGlvbnMuYW5pbWF0aW9uKSxlLmFuaW1hdGUoaSx1LGwsbykpLG8mJihuPSEwLHI9TWF0aC5tYXgocixvKSxjbGVhclRpbWVvdXQoaS5hbmltYXRpb25SZXNldFRpbWVyKSxpLmFuaW1hdGlvblJlc2V0VGltZXI9c2V0VGltZW91dChmdW5jdGlvbigpe2kuYW5pbWF0aW9uVGltZT0wLGkucHJldkZyb21SZWN0PW51bGwsaS5mcm9tUmVjdD1udWxsLGkucHJldlRvUmVjdD1udWxsLGkudGhpc0FuaW1hdGlvbkR1cmF0aW9uPW51bGx9LG8pLGkudGhpc0FuaW1hdGlvbkR1cmF0aW9uPW8pfSksY2xlYXJUaW1lb3V0KG8pLG4/bz1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XCJmdW5jdGlvblwiPT10eXBlb2YgdCYmdCgpfSxyKTpcImZ1bmN0aW9uXCI9PXR5cGVvZiB0JiZ0KCksaT1bXX0sYW5pbWF0ZTpmdW5jdGlvbih0LGUsbixvKXtpZihvKXttKHQsXCJ0cmFuc2l0aW9uXCIsXCJcIiksbSh0LFwidHJhbnNmb3JtXCIsXCJcIik7dmFyIGk9Yih0aGlzLmVsKSxyPShlLmxlZnQtbi5sZWZ0KS8oaSYmaS5hfHwxKSxhPShlLnRvcC1uLnRvcCkvKGkmJmkuZHx8MSk7dC5hbmltYXRpbmdYPSEhcix0LmFuaW1hdGluZ1k9ISFhLG0odCxcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlM2QoXCIrcitcInB4LFwiK2ErXCJweCwwKVwiKSx0aGlzLmZvclJlcGFpbnREdW1teT1mdW5jdGlvbih0KXtyZXR1cm4gdC5vZmZzZXRXaWR0aH0odCksbSh0LFwidHJhbnNpdGlvblwiLFwidHJhbnNmb3JtIFwiK28rXCJtc1wiKyh0aGlzLm9wdGlvbnMuZWFzaW5nP1wiIFwiK3RoaXMub3B0aW9ucy5lYXNpbmc6XCJcIikpLG0odCxcInRyYW5zZm9ybVwiLFwidHJhbnNsYXRlM2QoMCwwLDApXCIpLFwibnVtYmVyXCI9PXR5cGVvZiB0LmFuaW1hdGVkJiZjbGVhclRpbWVvdXQodC5hbmltYXRlZCksdC5hbmltYXRlZD1zZXRUaW1lb3V0KGZ1bmN0aW9uKCl7bSh0LFwidHJhbnNpdGlvblwiLFwiXCIpLG0odCxcInRyYW5zZm9ybVwiLFwiXCIpLHQuYW5pbWF0ZWQ9ITEsdC5hbmltYXRpbmdYPSExLHQuYW5pbWF0aW5nWT0hMX0sbyl9fX0pKX1mdW5jdGlvbiBQdCh0LGUsaSxyLGEsbCxzLGMpe3ZhciB1LGQsaD10W2tdLGY9aC5vcHRpb25zLm9uTW92ZTtyZXR1cm4hd2luZG93LkN1c3RvbUV2ZW50fHxufHxvPyh1PWRvY3VtZW50LmNyZWF0ZUV2ZW50KFwiRXZlbnRcIikpLmluaXRFdmVudChcIm1vdmVcIiwhMCwhMCk6dT1uZXcgQ3VzdG9tRXZlbnQoXCJtb3ZlXCIse2J1YmJsZXM6ITAsY2FuY2VsYWJsZTohMH0pLHUudG89ZSx1LmZyb209dCx1LmRyYWdnZWQ9aSx1LmRyYWdnZWRSZWN0PXIsdS5yZWxhdGVkPWF8fGUsdS5yZWxhdGVkUmVjdD1sfHx5KGUpLHUud2lsbEluc2VydEFmdGVyPWMsdS5vcmlnaW5hbEV2ZW50PXMsdC5kaXNwYXRjaEV2ZW50KHUpLGYmJihkPWYuY2FsbChoLHUscykpLGR9ZnVuY3Rpb24ga3QodCl7dC5kcmFnZ2FibGU9ITF9ZnVuY3Rpb24gUnQoKXtidD0hMX1mdW5jdGlvbiBYdCh0KXtmb3IodmFyIGU9dC50YWdOYW1lK3QuY2xhc3NOYW1lK3Quc3JjK3QuaHJlZit0LnRleHRDb250ZW50LG49ZS5sZW5ndGgsbz0wO24tLTspbys9ZS5jaGFyQ29kZUF0KG4pO3JldHVybiBvLnRvU3RyaW5nKDM2KX1mdW5jdGlvbiBZdCh0KXtyZXR1cm4gc2V0VGltZW91dCh0LDApfWZ1bmN0aW9uIEJ0KHQpe3JldHVybiBjbGVhclRpbWVvdXQodCl9SXQucHJvdG90eXBlPXtjb25zdHJ1Y3RvcjpJdCxfaXNPdXRzaWRlVGhpc0VsOmZ1bmN0aW9uKHQpe3RoaXMuZWwuY29udGFpbnModCl8fHQ9PT10aGlzLmVsfHwoc3Q9bnVsbCl9LF9nZXREaXJlY3Rpb246ZnVuY3Rpb24odCxlKXtyZXR1cm5cImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzLm9wdGlvbnMuZGlyZWN0aW9uP3RoaXMub3B0aW9ucy5kaXJlY3Rpb24uY2FsbCh0aGlzLHQsZSxMKTp0aGlzLm9wdGlvbnMuZGlyZWN0aW9ufSxfb25UYXBTdGFydDpmdW5jdGlvbih0KXtpZih0LmNhbmNlbGFibGUpe3ZhciBlPXRoaXMsbj10aGlzLmVsLG89dGhpcy5vcHRpb25zLGk9by5wcmV2ZW50T25GaWx0ZXIsYT10LnR5cGUsbD10LnRvdWNoZXMmJnQudG91Y2hlc1swXXx8dC5wb2ludGVyVHlwZSYmXCJ0b3VjaFwiPT09dC5wb2ludGVyVHlwZSYmdCxzPShsfHx0KS50YXJnZXQsYz10LnRhcmdldC5zaGFkb3dSb290JiYodC5wYXRoJiZ0LnBhdGhbMF18fHQuY29tcG9zZWRQYXRoJiZ0LmNvbXBvc2VkUGF0aCgpWzBdKXx8cyx1PW8uZmlsdGVyO2lmKGZ1bmN0aW9uKHQpe3d0Lmxlbmd0aD0wO2Zvcih2YXIgZT10LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaW5wdXRcIiksbj1lLmxlbmd0aDtuLS07KXt2YXIgbz1lW25dO28uY2hlY2tlZCYmd3QucHVzaChvKX19KG4pLCFMJiYhKC9tb3VzZWRvd258cG9pbnRlcmRvd24vLnRlc3QoYSkmJjAhPT10LmJ1dHRvbnx8by5kaXNhYmxlZCkmJiFjLmlzQ29udGVudEVkaXRhYmxlJiYodGhpcy5uYXRpdmVEcmFnZ2FibGV8fCFyfHwhc3x8XCJTRUxFQ1RcIiE9PXMudGFnTmFtZS50b1VwcGVyQ2FzZSgpKSYmISgocz1mKHMsby5kcmFnZ2FibGUsbiwhMSkpJiZzLmFuaW1hdGVkfHxHPT09cykpe2lmKFY9QyhzKSxRPUMocyxvLmRyYWdnYWJsZSksXCJmdW5jdGlvblwiPT10eXBlb2YgdSl7aWYodS5jYWxsKHRoaXMsdCxzLHRoaXMpKXJldHVybiBGKHtzb3J0YWJsZTplLHJvb3RFbDpjLG5hbWU6XCJmaWx0ZXJcIix0YXJnZXRFbDpzLHRvRWw6bixmcm9tRWw6bn0pLEgoXCJmaWx0ZXJcIixlLHtldnQ6dH0pLHZvaWQoaSYmdC5jYW5jZWxhYmxlJiZ0LnByZXZlbnREZWZhdWx0KCkpfWVsc2UgaWYodSYmKHU9dS5zcGxpdChcIixcIikuc29tZShmdW5jdGlvbihvKXtpZihvPWYoYyxvLnRyaW0oKSxuLCExKSlyZXR1cm4gRih7c29ydGFibGU6ZSxyb290RWw6byxuYW1lOlwiZmlsdGVyXCIsdGFyZ2V0RWw6cyxmcm9tRWw6bix0b0VsOm59KSxIKFwiZmlsdGVyXCIsZSx7ZXZ0OnR9KSwhMH0pKSlyZXR1cm4gdm9pZChpJiZ0LmNhbmNlbGFibGUmJnQucHJldmVudERlZmF1bHQoKSk7by5oYW5kbGUmJiFmKGMsby5oYW5kbGUsbiwhMSl8fHRoaXMuX3ByZXBhcmVEcmFnU3RhcnQodCxsLHMpfX19LF9wcmVwYXJlRHJhZ1N0YXJ0OmZ1bmN0aW9uKHQsZSxyKXt2YXIgYSxsPXRoaXMscz1sLmVsLHU9bC5vcHRpb25zLGQ9cy5vd25lckRvY3VtZW50O2lmKHImJiFMJiZyLnBhcmVudE5vZGU9PT1zKXt2YXIgaD15KHIpO2lmKGo9cyxLPShMPXIpLnBhcmVudE5vZGUsej1MLm5leHRTaWJsaW5nLEc9cixKPXUuZ3JvdXAsSXQuZHJhZ2dlZD1MLHJ0PShldD17dGFyZ2V0OkwsY2xpZW50WDooZXx8dCkuY2xpZW50WCxjbGllbnRZOihlfHx0KS5jbGllbnRZfSkuY2xpZW50WC1oLmxlZnQsYXQ9ZXQuY2xpZW50WS1oLnRvcCx0aGlzLl9sYXN0WD0oZXx8dCkuY2xpZW50WCx0aGlzLl9sYXN0WT0oZXx8dCkuY2xpZW50WSxMLnN0eWxlW1wid2lsbC1jaGFuZ2VcIl09XCJhbGxcIixhPWZ1bmN0aW9uKCl7SChcImRlbGF5RW5kZWRcIixsLHtldnQ6dH0pLEl0LmV2ZW50Q2FuY2VsZWQ/bC5fb25Ecm9wKCk6KGwuX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50cygpLCFpJiZsLm5hdGl2ZURyYWdnYWJsZSYmKEwuZHJhZ2dhYmxlPSEwKSxsLl90cmlnZ2VyRHJhZ1N0YXJ0KHQsZSksRih7c29ydGFibGU6bCxuYW1lOlwiY2hvb3NlXCIsb3JpZ2luYWxFdmVudDp0fSksdihMLHUuY2hvc2VuQ2xhc3MsITApKX0sdS5pZ25vcmUuc3BsaXQoXCIsXCIpLmZvckVhY2goZnVuY3Rpb24odCl7dyhMLHQudHJpbSgpLGt0KX0pLGMoZCxcImRyYWdvdmVyXCIsT3QpLGMoZCxcIm1vdXNlbW92ZVwiLE90KSxjKGQsXCJ0b3VjaG1vdmVcIixPdCksYyhkLFwibW91c2V1cFwiLGwuX29uRHJvcCksYyhkLFwidG91Y2hlbmRcIixsLl9vbkRyb3ApLGMoZCxcInRvdWNoY2FuY2VsXCIsbC5fb25Ecm9wKSxpJiZ0aGlzLm5hdGl2ZURyYWdnYWJsZSYmKHRoaXMub3B0aW9ucy50b3VjaFN0YXJ0VGhyZXNob2xkPTQsTC5kcmFnZ2FibGU9ITApLEgoXCJkZWxheVN0YXJ0XCIsdGhpcyx7ZXZ0OnR9KSwhdS5kZWxheXx8dS5kZWxheU9uVG91Y2hPbmx5JiYhZXx8dGhpcy5uYXRpdmVEcmFnZ2FibGUmJihvfHxuKSlhKCk7ZWxzZXtpZihJdC5ldmVudENhbmNlbGVkKXJldHVybiB2b2lkIHRoaXMuX29uRHJvcCgpO2MoZCxcIm1vdXNldXBcIixsLl9kaXNhYmxlRGVsYXllZERyYWcpLGMoZCxcInRvdWNoZW5kXCIsbC5fZGlzYWJsZURlbGF5ZWREcmFnKSxjKGQsXCJ0b3VjaGNhbmNlbFwiLGwuX2Rpc2FibGVEZWxheWVkRHJhZyksYyhkLFwibW91c2Vtb3ZlXCIsbC5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKSxjKGQsXCJ0b3VjaG1vdmVcIixsLl9kZWxheWVkRHJhZ1RvdWNoTW92ZUhhbmRsZXIpLHUuc3VwcG9ydFBvaW50ZXImJmMoZCxcInBvaW50ZXJtb3ZlXCIsbC5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKSxsLl9kcmFnU3RhcnRUaW1lcj1zZXRUaW1lb3V0KGEsdS5kZWxheSl9fX0sX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcjpmdW5jdGlvbih0KXt2YXIgZT10LnRvdWNoZXM/dC50b3VjaGVzWzBdOnQ7TWF0aC5tYXgoTWF0aC5hYnMoZS5jbGllbnRYLXRoaXMuX2xhc3RYKSxNYXRoLmFicyhlLmNsaWVudFktdGhpcy5fbGFzdFkpKT49TWF0aC5mbG9vcih0aGlzLm9wdGlvbnMudG91Y2hTdGFydFRocmVzaG9sZC8odGhpcy5uYXRpdmVEcmFnZ2FibGUmJndpbmRvdy5kZXZpY2VQaXhlbFJhdGlvfHwxKSkmJnRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZygpfSxfZGlzYWJsZURlbGF5ZWREcmFnOmZ1bmN0aW9uKCl7TCYma3QoTCksY2xlYXJUaW1lb3V0KHRoaXMuX2RyYWdTdGFydFRpbWVyKSx0aGlzLl9kaXNhYmxlRGVsYXllZERyYWdFdmVudHMoKX0sX2Rpc2FibGVEZWxheWVkRHJhZ0V2ZW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXMuZWwub3duZXJEb2N1bWVudDt1KHQsXCJtb3VzZXVwXCIsdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnKSx1KHQsXCJ0b3VjaGVuZFwiLHRoaXMuX2Rpc2FibGVEZWxheWVkRHJhZyksdSh0LFwidG91Y2hjYW5jZWxcIix0aGlzLl9kaXNhYmxlRGVsYXllZERyYWcpLHUodCxcIm1vdXNlbW92ZVwiLHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlciksdSh0LFwidG91Y2htb3ZlXCIsdGhpcy5fZGVsYXllZERyYWdUb3VjaE1vdmVIYW5kbGVyKSx1KHQsXCJwb2ludGVybW92ZVwiLHRoaXMuX2RlbGF5ZWREcmFnVG91Y2hNb3ZlSGFuZGxlcil9LF90cmlnZ2VyRHJhZ1N0YXJ0OmZ1bmN0aW9uKHQsZSl7ZT1lfHxcInRvdWNoXCI9PXQucG9pbnRlclR5cGUmJnQsIXRoaXMubmF0aXZlRHJhZ2dhYmxlfHxlP2MoZG9jdW1lbnQsdGhpcy5vcHRpb25zLnN1cHBvcnRQb2ludGVyP1wicG9pbnRlcm1vdmVcIjplP1widG91Y2htb3ZlXCI6XCJtb3VzZW1vdmVcIix0aGlzLl9vblRvdWNoTW92ZSk6KGMoTCxcImRyYWdlbmRcIix0aGlzKSxjKGosXCJkcmFnc3RhcnRcIix0aGlzLl9vbkRyYWdTdGFydCkpO3RyeXtkb2N1bWVudC5zZWxlY3Rpb24/WXQoZnVuY3Rpb24oKXtkb2N1bWVudC5zZWxlY3Rpb24uZW1wdHkoKX0pOndpbmRvdy5nZXRTZWxlY3Rpb24oKS5yZW1vdmVBbGxSYW5nZXMoKX1jYXRjaCh0KXt9fSxfZHJhZ1N0YXJ0ZWQ6ZnVuY3Rpb24odCxlKXtpZihodD0hMSxqJiZMKXtIKFwiZHJhZ1N0YXJ0ZWRcIix0aGlzLHtldnQ6ZX0pLHRoaXMubmF0aXZlRHJhZ2dhYmxlJiZjKGRvY3VtZW50LFwiZHJhZ292ZXJcIixBdCk7dmFyIG49dGhpcy5vcHRpb25zOyF0JiZ2KEwsbi5kcmFnQ2xhc3MsITEpLHYoTCxuLmdob3N0Q2xhc3MsITApLEl0LmFjdGl2ZT10aGlzLHQmJnRoaXMuX2FwcGVuZEdob3N0KCksRih7c29ydGFibGU6dGhpcyxuYW1lOlwic3RhcnRcIixvcmlnaW5hbEV2ZW50OmV9KX1lbHNlIHRoaXMuX251bGxpbmcoKX0sX2VtdWxhdGVEcmFnT3ZlcjpmdW5jdGlvbigpe2lmKG50KXt0aGlzLl9sYXN0WD1udC5jbGllbnRYLHRoaXMuX2xhc3RZPW50LmNsaWVudFkseHQoKTtmb3IodmFyIHQ9ZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChudC5jbGllbnRYLG50LmNsaWVudFkpLGU9dDt0JiZ0LnNoYWRvd1Jvb3QmJih0PXQuc2hhZG93Um9vdC5lbGVtZW50RnJvbVBvaW50KG50LmNsaWVudFgsbnQuY2xpZW50WSkpIT09ZTspZT10O2lmKEwucGFyZW50Tm9kZVtrXS5faXNPdXRzaWRlVGhpc0VsKHQpLGUpZG97aWYoZVtrXSYmZVtrXS5fb25EcmFnT3Zlcih7Y2xpZW50WDpudC5jbGllbnRYLGNsaWVudFk6bnQuY2xpZW50WSx0YXJnZXQ6dCxyb290RWw6ZX0pJiYhdGhpcy5vcHRpb25zLmRyYWdvdmVyQnViYmxlKWJyZWFrO3Q9ZX13aGlsZShlPWUucGFyZW50Tm9kZSk7TXQoKX19LF9vblRvdWNoTW92ZTpmdW5jdGlvbih0KXtpZihldCl7dmFyIGU9dGhpcy5vcHRpb25zLG49ZS5mYWxsYmFja1RvbGVyYW5jZSxvPWUuZmFsbGJhY2tPZmZzZXQsaT10LnRvdWNoZXM/dC50b3VjaGVzWzBdOnQscj1XJiZiKFcsITApLGE9VyYmciYmci5hLGw9VyYmciYmci5kLHM9eXQmJmR0JiZUKGR0KSxjPShpLmNsaWVudFgtZXQuY2xpZW50WCtvLngpLyhhfHwxKSsocz9zWzBdLW10WzBdOjApLyhhfHwxKSx1PShpLmNsaWVudFktZXQuY2xpZW50WStvLnkpLyhsfHwxKSsocz9zWzFdLW10WzFdOjApLyhsfHwxKTtpZighSXQuYWN0aXZlJiYhaHQpe2lmKG4mJk1hdGgubWF4KE1hdGguYWJzKGkuY2xpZW50WC10aGlzLl9sYXN0WCksTWF0aC5hYnMoaS5jbGllbnRZLXRoaXMuX2xhc3RZKSk8bilyZXR1cm47dGhpcy5fb25EcmFnU3RhcnQodCwhMCl9aWYoVyl7cj8oci5lKz1jLShvdHx8MCksci5mKz11LShpdHx8MCkpOnI9e2E6MSxiOjAsYzowLGQ6MSxlOmMsZjp1fTt2YXIgZD1cIm1hdHJpeChcIityLmErXCIsXCIrci5iK1wiLFwiK3IuYytcIixcIityLmQrXCIsXCIrci5lK1wiLFwiK3IuZitcIilcIjttKFcsXCJ3ZWJraXRUcmFuc2Zvcm1cIixkKSxtKFcsXCJtb3pUcmFuc2Zvcm1cIixkKSxtKFcsXCJtc1RyYW5zZm9ybVwiLGQpLG0oVyxcInRyYW5zZm9ybVwiLGQpLG90PWMsaXQ9dSxudD1pfXQuY2FuY2VsYWJsZSYmdC5wcmV2ZW50RGVmYXVsdCgpfX0sX2FwcGVuZEdob3N0OmZ1bmN0aW9uKCl7aWYoIVcpe3ZhciB0PXRoaXMub3B0aW9ucy5mYWxsYmFja09uQm9keT9kb2N1bWVudC5ib2R5OmosZT15KEwsITAseXQsITAsdCksbj10aGlzLm9wdGlvbnM7aWYoeXQpe2ZvcihkdD10O1wic3RhdGljXCI9PT1tKGR0LFwicG9zaXRpb25cIikmJlwibm9uZVwiPT09bShkdCxcInRyYW5zZm9ybVwiKSYmZHQhPT1kb2N1bWVudDspZHQ9ZHQucGFyZW50Tm9kZTtkdCE9PWRvY3VtZW50LmJvZHkmJmR0IT09ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50PyhkdD09PWRvY3VtZW50JiYoZHQ9RSgpKSxlLnRvcCs9ZHQuc2Nyb2xsVG9wLGUubGVmdCs9ZHQuc2Nyb2xsTGVmdCk6ZHQ9RSgpLG10PVQoZHQpfXYoVz1MLmNsb25lTm9kZSghMCksbi5naG9zdENsYXNzLCExKSx2KFcsbi5mYWxsYmFja0NsYXNzLCEwKSx2KFcsbi5kcmFnQ2xhc3MsITApLG0oVyxcInRyYW5zaXRpb25cIixcIlwiKSxtKFcsXCJ0cmFuc2Zvcm1cIixcIlwiKSxtKFcsXCJib3gtc2l6aW5nXCIsXCJib3JkZXItYm94XCIpLG0oVyxcIm1hcmdpblwiLDApLG0oVyxcInRvcFwiLGUudG9wKSxtKFcsXCJsZWZ0XCIsZS5sZWZ0KSxtKFcsXCJ3aWR0aFwiLGUud2lkdGgpLG0oVyxcImhlaWdodFwiLGUuaGVpZ2h0KSxtKFcsXCJvcGFjaXR5XCIsXCIwLjhcIiksbShXLFwicG9zaXRpb25cIix5dD9cImFic29sdXRlXCI6XCJmaXhlZFwiKSxtKFcsXCJ6SW5kZXhcIixcIjEwMDAwMFwiKSxtKFcsXCJwb2ludGVyRXZlbnRzXCIsXCJub25lXCIpLEl0Lmdob3N0PVcsdC5hcHBlbmRDaGlsZChXKSxtKFcsXCJ0cmFuc2Zvcm0tb3JpZ2luXCIscnQvcGFyc2VJbnQoVy5zdHlsZS53aWR0aCkqMTAwK1wiJSBcIithdC9wYXJzZUludChXLnN0eWxlLmhlaWdodCkqMTAwK1wiJVwiKX19LF9vbkRyYWdTdGFydDpmdW5jdGlvbih0LGUpe3ZhciBuPXRoaXMsbz10LmRhdGFUcmFuc2ZlcixpPW4ub3B0aW9ucztIKFwiZHJhZ1N0YXJ0XCIsdGhpcyx7ZXZ0OnR9KSxJdC5ldmVudENhbmNlbGVkP3RoaXMuX29uRHJvcCgpOihIKFwic2V0dXBDbG9uZVwiLHRoaXMpLEl0LmV2ZW50Q2FuY2VsZWR8fCgoVT1BKEwpKS5kcmFnZ2FibGU9ITEsVS5zdHlsZVtcIndpbGwtY2hhbmdlXCJdPVwiXCIsdGhpcy5faGlkZUNsb25lKCksdihVLHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywhMSksSXQuY2xvbmU9VSksbi5jbG9uZUlkPVl0KGZ1bmN0aW9uKCl7SChcImNsb25lXCIsbiksSXQuZXZlbnRDYW5jZWxlZHx8KG4ub3B0aW9ucy5yZW1vdmVDbG9uZU9uSGlkZXx8ai5pbnNlcnRCZWZvcmUoVSxMKSxuLl9oaWRlQ2xvbmUoKSxGKHtzb3J0YWJsZTpuLG5hbWU6XCJjbG9uZVwifSkpfSksIWUmJnYoTCxpLmRyYWdDbGFzcywhMCksZT8oZnQ9ITAsbi5fbG9vcElkPXNldEludGVydmFsKG4uX2VtdWxhdGVEcmFnT3Zlciw1MCkpOih1KGRvY3VtZW50LFwibW91c2V1cFwiLG4uX29uRHJvcCksdShkb2N1bWVudCxcInRvdWNoZW5kXCIsbi5fb25Ecm9wKSx1KGRvY3VtZW50LFwidG91Y2hjYW5jZWxcIixuLl9vbkRyb3ApLG8mJihvLmVmZmVjdEFsbG93ZWQ9XCJtb3ZlXCIsaS5zZXREYXRhJiZpLnNldERhdGEuY2FsbChuLG8sTCkpLGMoZG9jdW1lbnQsXCJkcm9wXCIsbiksbShMLFwidHJhbnNmb3JtXCIsXCJ0cmFuc2xhdGVaKDApXCIpKSxodD0hMCxuLl9kcmFnU3RhcnRJZD1ZdChuLl9kcmFnU3RhcnRlZC5iaW5kKG4sZSx0KSksYyhkb2N1bWVudCxcInNlbGVjdHN0YXJ0XCIsbiksbHQ9ITAsciYmbShkb2N1bWVudC5ib2R5LFwidXNlci1zZWxlY3RcIixcIm5vbmVcIikpfSxfb25EcmFnT3ZlcjpmdW5jdGlvbihlKXt2YXIgbixvLGkscixhPXRoaXMuZWwsbD1lLnRhcmdldCxzPXRoaXMub3B0aW9ucyxjPXMuZ3JvdXAsdT1JdC5hY3RpdmUsZD1KPT09YyxoPXMuc29ydCxwPXR0fHx1LGc9dGhpcyxiPSExO2lmKCFidCl7aWYodm9pZCAwIT09ZS5wcmV2ZW50RGVmYXVsdCYmZS5jYW5jZWxhYmxlJiZlLnByZXZlbnREZWZhdWx0KCksbD1mKGwscy5kcmFnZ2FibGUsYSwhMCksQihcImRyYWdPdmVyXCIpLEl0LmV2ZW50Q2FuY2VsZWQpcmV0dXJuIGI7aWYoTC5jb250YWlucyhlLnRhcmdldCl8fGwuYW5pbWF0ZWQmJmwuYW5pbWF0aW5nWCYmbC5hbmltYXRpbmdZfHxnLl9pZ25vcmVXaGlsZUFuaW1hdGluZz09PWwpcmV0dXJuIFUoITEpO2lmKGZ0PSExLHUmJiFzLmRpc2FibGVkJiYoZD9ofHwoaT0hai5jb250YWlucyhMKSk6dHQ9PT10aGlzfHwodGhpcy5sYXN0UHV0TW9kZT1KLmNoZWNrUHVsbCh0aGlzLHUsTCxlKSkmJmMuY2hlY2tQdXQodGhpcyx1LEwsZSkpKXtpZihyPVwidmVydGljYWxcIj09PXRoaXMuX2dldERpcmVjdGlvbihlLGwpLG49eShMKSxCKFwiZHJhZ092ZXJWYWxpZFwiKSxJdC5ldmVudENhbmNlbGVkKXJldHVybiBiO2lmKGkpcmV0dXJuIEs9aixHKCksdGhpcy5faGlkZUNsb25lKCksQihcInJldmVydFwiKSxJdC5ldmVudENhbmNlbGVkfHwoej9qLmluc2VydEJlZm9yZShMLHopOmouYXBwZW5kQ2hpbGQoTCkpLFUoITApO3ZhciB3PVMoYSxzLmRyYWdnYWJsZSk7aWYoIXd8fGZ1bmN0aW9uKHQsZSxuKXt2YXIgbz15KFMobi5lbCxuLm9wdGlvbnMuZHJhZ2dhYmxlKSk7cmV0dXJuIGU/dC5jbGllbnRYPm8ucmlnaHQrMTB8fHQuY2xpZW50WDw9by5yaWdodCYmdC5jbGllbnRZPm8uYm90dG9tJiZ0LmNsaWVudFg+PW8ubGVmdDp0LmNsaWVudFg+by5yaWdodCYmdC5jbGllbnRZPm8udG9wfHx0LmNsaWVudFg8PW8ucmlnaHQmJnQuY2xpZW50WT5vLmJvdHRvbSsxMH0oZSxyLHRoaXMpJiYhdy5hbmltYXRlZCl7aWYodz09PUwpcmV0dXJuIFUoITEpO2lmKHcmJmE9PT1lLnRhcmdldCYmKGw9dyksbCYmKG89eShsKSksITEhPT1QdChqLGEsTCxuLGwsbyxlLCEhbCkpcmV0dXJuIEcoKSxhLmFwcGVuZENoaWxkKEwpLEs9YSxxKCksVSghMCl9ZWxzZSBpZihsLnBhcmVudE5vZGU9PT1hKXtvPXkobCk7dmFyIEUsXyxULHg9TC5wYXJlbnROb2RlIT09YSxNPSFmdW5jdGlvbih0LGUsbil7dmFyIG89bj90LmxlZnQ6dC50b3AsaT1uP2UubGVmdDplLnRvcDtyZXR1cm4gbz09PWl8fChuP3QucmlnaHQ6dC5ib3R0b20pPT09KG4/ZS5yaWdodDplLmJvdHRvbSl8fG8rKG4/dC53aWR0aDp0LmhlaWdodCkvMj09PWkrKG4/ZS53aWR0aDplLmhlaWdodCkvMn0oTC5hbmltYXRlZCYmTC50b1JlY3R8fG4sbC5hbmltYXRlZCYmbC50b1JlY3R8fG8sciksTj1yP1widG9wXCI6XCJsZWZ0XCIsQT1EKGwsXCJ0b3BcIixcInRvcFwiKXx8RChMLFwidG9wXCIsXCJ0b3BcIiksST1BP0Euc2Nyb2xsVG9wOnZvaWQgMDtpZihzdCE9PWwmJihfPW9bTl0sZ3Q9ITEsdnQ9IU0mJnMuaW52ZXJ0U3dhcHx8eCksMCE9PShFPWZ1bmN0aW9uKHQsZSxuLG8saSxyLGEsbCl7dmFyIHM9bz90LmNsaWVudFk6dC5jbGllbnRYLGM9bz9uLmhlaWdodDpuLndpZHRoLHU9bz9uLnRvcDpuLmxlZnQsZD1vP24uYm90dG9tOm4ucmlnaHQsaD0hMTtpZighYSlpZihsJiZ1dDxjKmkpe2lmKCFndCYmKDE9PT1jdD9zPnUrYypyLzI6czxkLWMqci8yKSYmKGd0PSEwKSxndCloPSEwO2Vsc2UgaWYoMT09PWN0P3M8dSt1dDpzPmQtdXQpcmV0dXJuLWN0fWVsc2UgaWYocz51K2MqKDEtaSkvMiYmczxkLWMqKDEtaSkvMilyZXR1cm4gZnVuY3Rpb24odCl7cmV0dXJuIEMoTCk8Qyh0KT8xOi0xfShlKTtyZXR1cm4oaD1ofHxhKSYmKHM8dStjKnIvMnx8cz5kLWMqci8yKT9zPnUrYy8yPzE6LTE6MH0oZSxsLG8scixNPzE6cy5zd2FwVGhyZXNob2xkLG51bGw9PXMuaW52ZXJ0ZWRTd2FwVGhyZXNob2xkP3Muc3dhcFRocmVzaG9sZDpzLmludmVydGVkU3dhcFRocmVzaG9sZCx2dCxzdD09PWwpKSl7dmFyIFA9QyhMKTtkb3tUPUsuY2hpbGRyZW5bUC09RV19d2hpbGUoVCYmKFwibm9uZVwiPT09bShULFwiZGlzcGxheVwiKXx8VD09PVcpKX1pZigwPT09RXx8VD09PWwpcmV0dXJuIFUoITEpO3N0PWwsY3Q9RTt2YXIgUj1sLm5leHRFbGVtZW50U2libGluZyxYPSExLFk9UHQoaixhLEwsbixsLG8sZSxYPTE9PT1FKTtpZighMSE9PVkpcmV0dXJuIDEhPT1ZJiYtMSE9PVl8fChYPTE9PT1ZKSxidD0hMCxzZXRUaW1lb3V0KFJ0LDMwKSxHKCksWCYmIVI/YS5hcHBlbmRDaGlsZChMKTpsLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKEwsWD9SOmwpLEEmJk8oQSwwLEktQS5zY3JvbGxUb3ApLEs9TC5wYXJlbnROb2RlLHZvaWQgMD09PV98fHZ0fHwodXQ9TWF0aC5hYnMoXy15KGwpW05dKSkscSgpLFUoITApfWlmKGEuY29udGFpbnMoTCkpcmV0dXJuIFUoITEpfXJldHVybiExfWZ1bmN0aW9uIEIocyxjKXtIKHMsZyx0KHtldnQ6ZSxpc093bmVyOmQsYXhpczpyP1widmVydGljYWxcIjpcImhvcml6b250YWxcIixyZXZlcnQ6aSxkcmFnUmVjdDpuLHRhcmdldFJlY3Q6byxjYW5Tb3J0OmgsZnJvbVNvcnRhYmxlOnAsdGFyZ2V0OmwsY29tcGxldGVkOlUsb25Nb3ZlOmZ1bmN0aW9uKHQsbyl7cmV0dXJuIFB0KGosYSxMLG4sdCx5KHQpLGUsbyl9LGNoYW5nZWQ6cX0sYykpfWZ1bmN0aW9uIEcoKXtCKFwiZHJhZ092ZXJBbmltYXRpb25DYXB0dXJlXCIpLGcuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCksZyE9PXAmJnAuY2FwdHVyZUFuaW1hdGlvblN0YXRlKCl9ZnVuY3Rpb24gVSh0KXtyZXR1cm4gQihcImRyYWdPdmVyQ29tcGxldGVkXCIse2luc2VydGlvbjp0fSksdCYmKGQ/dS5faGlkZUNsb25lKCk6dS5fc2hvd0Nsb25lKGcpLGchPT1wJiYodihMLHR0P3R0Lm9wdGlvbnMuZ2hvc3RDbGFzczp1Lm9wdGlvbnMuZ2hvc3RDbGFzcywhMSksdihMLHMuZ2hvc3RDbGFzcywhMCkpLHR0IT09ZyYmZyE9PUl0LmFjdGl2ZT90dD1nOmc9PT1JdC5hY3RpdmUmJnR0JiYodHQ9bnVsbCkscD09PWcmJihnLl9pZ25vcmVXaGlsZUFuaW1hdGluZz1sKSxnLmFuaW1hdGVBbGwoZnVuY3Rpb24oKXtCKFwiZHJhZ092ZXJBbmltYXRpb25Db21wbGV0ZVwiKSxnLl9pZ25vcmVXaGlsZUFuaW1hdGluZz1udWxsfSksZyE9PXAmJihwLmFuaW1hdGVBbGwoKSxwLl9pZ25vcmVXaGlsZUFuaW1hdGluZz1udWxsKSksKGw9PT1MJiYhTC5hbmltYXRlZHx8bD09PWEmJiFsLmFuaW1hdGVkKSYmKHN0PW51bGwpLHMuZHJhZ292ZXJCdWJibGV8fGUucm9vdEVsfHxsPT09ZG9jdW1lbnR8fChMLnBhcmVudE5vZGVba10uX2lzT3V0c2lkZVRoaXNFbChlLnRhcmdldCksIXQmJk90KGUpKSwhcy5kcmFnb3ZlckJ1YmJsZSYmZS5zdG9wUHJvcGFnYXRpb24mJmUuc3RvcFByb3BhZ2F0aW9uKCksYj0hMH1mdW5jdGlvbiBxKCl7Wj1DKEwpLCQ9QyhMLHMuZHJhZ2dhYmxlKSxGKHtzb3J0YWJsZTpnLG5hbWU6XCJjaGFuZ2VcIix0b0VsOmEsbmV3SW5kZXg6WixuZXdEcmFnZ2FibGVJbmRleDokLG9yaWdpbmFsRXZlbnQ6ZX0pfX0sX2lnbm9yZVdoaWxlQW5pbWF0aW5nOm51bGwsX29mZk1vdmVFdmVudHM6ZnVuY3Rpb24oKXt1KGRvY3VtZW50LFwibW91c2Vtb3ZlXCIsdGhpcy5fb25Ub3VjaE1vdmUpLHUoZG9jdW1lbnQsXCJ0b3VjaG1vdmVcIix0aGlzLl9vblRvdWNoTW92ZSksdShkb2N1bWVudCxcInBvaW50ZXJtb3ZlXCIsdGhpcy5fb25Ub3VjaE1vdmUpLHUoZG9jdW1lbnQsXCJkcmFnb3ZlclwiLE90KSx1KGRvY3VtZW50LFwibW91c2Vtb3ZlXCIsT3QpLHUoZG9jdW1lbnQsXCJ0b3VjaG1vdmVcIixPdCl9LF9vZmZVcEV2ZW50czpmdW5jdGlvbigpe3ZhciB0PXRoaXMuZWwub3duZXJEb2N1bWVudDt1KHQsXCJtb3VzZXVwXCIsdGhpcy5fb25Ecm9wKSx1KHQsXCJ0b3VjaGVuZFwiLHRoaXMuX29uRHJvcCksdSh0LFwicG9pbnRlcnVwXCIsdGhpcy5fb25Ecm9wKSx1KHQsXCJ0b3VjaGNhbmNlbFwiLHRoaXMuX29uRHJvcCksdShkb2N1bWVudCxcInNlbGVjdHN0YXJ0XCIsdGhpcyl9LF9vbkRyb3A6ZnVuY3Rpb24odCl7dmFyIGU9dGhpcy5lbCxuPXRoaXMub3B0aW9ucztaPUMoTCksJD1DKEwsbi5kcmFnZ2FibGUpLEgoXCJkcm9wXCIsdGhpcyx7ZXZ0OnR9KSxLPUwmJkwucGFyZW50Tm9kZSxaPUMoTCksJD1DKEwsbi5kcmFnZ2FibGUpLEl0LmV2ZW50Q2FuY2VsZWR8fChodD0hMSx2dD0hMSxndD0hMSxjbGVhckludGVydmFsKHRoaXMuX2xvb3BJZCksY2xlYXJUaW1lb3V0KHRoaXMuX2RyYWdTdGFydFRpbWVyKSxCdCh0aGlzLmNsb25lSWQpLEJ0KHRoaXMuX2RyYWdTdGFydElkKSx0aGlzLm5hdGl2ZURyYWdnYWJsZSYmKHUoZG9jdW1lbnQsXCJkcm9wXCIsdGhpcyksdShlLFwiZHJhZ3N0YXJ0XCIsdGhpcy5fb25EcmFnU3RhcnQpKSx0aGlzLl9vZmZNb3ZlRXZlbnRzKCksdGhpcy5fb2ZmVXBFdmVudHMoKSxyJiZtKGRvY3VtZW50LmJvZHksXCJ1c2VyLXNlbGVjdFwiLFwiXCIpLG0oTCxcInRyYW5zZm9ybVwiLFwiXCIpLHQmJihsdCYmKHQuY2FuY2VsYWJsZSYmdC5wcmV2ZW50RGVmYXVsdCgpLCFuLmRyb3BCdWJibGUmJnQuc3RvcFByb3BhZ2F0aW9uKCkpLFcmJlcucGFyZW50Tm9kZSYmVy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKFcpLChqPT09S3x8dHQmJlwiY2xvbmVcIiE9PXR0Lmxhc3RQdXRNb2RlKSYmVSYmVS5wYXJlbnROb2RlJiZVLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoVSksTCYmKHRoaXMubmF0aXZlRHJhZ2dhYmxlJiZ1KEwsXCJkcmFnZW5kXCIsdGhpcyksa3QoTCksTC5zdHlsZVtcIndpbGwtY2hhbmdlXCJdPVwiXCIsbHQmJiFodCYmdihMLHR0P3R0Lm9wdGlvbnMuZ2hvc3RDbGFzczp0aGlzLm9wdGlvbnMuZ2hvc3RDbGFzcywhMSksdihMLHRoaXMub3B0aW9ucy5jaG9zZW5DbGFzcywhMSksRih7c29ydGFibGU6dGhpcyxuYW1lOlwidW5jaG9vc2VcIix0b0VsOkssbmV3SW5kZXg6bnVsbCxuZXdEcmFnZ2FibGVJbmRleDpudWxsLG9yaWdpbmFsRXZlbnQ6dH0pLGohPT1LPyhaPj0wJiYoRih7cm9vdEVsOkssbmFtZTpcImFkZFwiLHRvRWw6Syxmcm9tRWw6aixvcmlnaW5hbEV2ZW50OnR9KSxGKHtzb3J0YWJsZTp0aGlzLG5hbWU6XCJyZW1vdmVcIix0b0VsOkssb3JpZ2luYWxFdmVudDp0fSksRih7cm9vdEVsOkssbmFtZTpcInNvcnRcIix0b0VsOkssZnJvbUVsOmosb3JpZ2luYWxFdmVudDp0fSksRih7c29ydGFibGU6dGhpcyxuYW1lOlwic29ydFwiLHRvRWw6SyxvcmlnaW5hbEV2ZW50OnR9KSksdHQmJnR0LnNhdmUoKSk6WiE9PVYmJlo+PTAmJihGKHtzb3J0YWJsZTp0aGlzLG5hbWU6XCJ1cGRhdGVcIix0b0VsOkssb3JpZ2luYWxFdmVudDp0fSksRih7c29ydGFibGU6dGhpcyxuYW1lOlwic29ydFwiLHRvRWw6SyxvcmlnaW5hbEV2ZW50OnR9KSksSXQuYWN0aXZlJiYobnVsbCE9WiYmLTEhPT1afHwoWj1WLCQ9USksRih7c29ydGFibGU6dGhpcyxuYW1lOlwiZW5kXCIsdG9FbDpLLG9yaWdpbmFsRXZlbnQ6dH0pLHRoaXMuc2F2ZSgpKSkpKSx0aGlzLl9udWxsaW5nKCl9LF9udWxsaW5nOmZ1bmN0aW9uKCl7SChcIm51bGxpbmdcIix0aGlzKSxqPUw9Sz1XPXo9VT1HPXE9ZXQ9bnQ9bHQ9Wj0kPVY9UT1zdD1jdD10dD1KPUl0LmRyYWdnZWQ9SXQuZ2hvc3Q9SXQuY2xvbmU9SXQuYWN0aXZlPW51bGwsd3QuZm9yRWFjaChmdW5jdGlvbih0KXt0LmNoZWNrZWQ9ITB9KSx3dC5sZW5ndGg9b3Q9aXQ9MH0saGFuZGxlRXZlbnQ6ZnVuY3Rpb24odCl7c3dpdGNoKHQudHlwZSl7Y2FzZVwiZHJvcFwiOmNhc2VcImRyYWdlbmRcIjp0aGlzLl9vbkRyb3AodCk7YnJlYWs7Y2FzZVwiZHJhZ2VudGVyXCI6Y2FzZVwiZHJhZ292ZXJcIjpMJiYodGhpcy5fb25EcmFnT3Zlcih0KSxmdW5jdGlvbih0KXt0LmRhdGFUcmFuc2ZlciYmKHQuZGF0YVRyYW5zZmVyLmRyb3BFZmZlY3Q9XCJtb3ZlXCIpLHQuY2FuY2VsYWJsZSYmdC5wcmV2ZW50RGVmYXVsdCgpfSh0KSk7YnJlYWs7Y2FzZVwic2VsZWN0c3RhcnRcIjp0LnByZXZlbnREZWZhdWx0KCl9fSx0b0FycmF5OmZ1bmN0aW9uKCl7Zm9yKHZhciB0LGU9W10sbj10aGlzLmVsLmNoaWxkcmVuLG89MCxpPW4ubGVuZ3RoLHI9dGhpcy5vcHRpb25zO288aTtvKyspZih0PW5bb10sci5kcmFnZ2FibGUsdGhpcy5lbCwhMSkmJmUucHVzaCh0LmdldEF0dHJpYnV0ZShyLmRhdGFJZEF0dHIpfHxYdCh0KSk7cmV0dXJuIGV9LHNvcnQ6ZnVuY3Rpb24odCl7dmFyIGU9e30sbj10aGlzLmVsO3RoaXMudG9BcnJheSgpLmZvckVhY2goZnVuY3Rpb24odCxvKXt2YXIgaT1uLmNoaWxkcmVuW29dO2YoaSx0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLG4sITEpJiYoZVt0XT1pKX0sdGhpcyksdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe2VbdF0mJihuLnJlbW92ZUNoaWxkKGVbdF0pLG4uYXBwZW5kQ2hpbGQoZVt0XSkpfSl9LHNhdmU6ZnVuY3Rpb24oKXt2YXIgdD10aGlzLm9wdGlvbnMuc3RvcmU7dCYmdC5zZXQmJnQuc2V0KHRoaXMpfSxjbG9zZXN0OmZ1bmN0aW9uKHQsZSl7cmV0dXJuIGYodCxlfHx0aGlzLm9wdGlvbnMuZHJhZ2dhYmxlLHRoaXMuZWwsITEpfSxvcHRpb246ZnVuY3Rpb24odCxlKXt2YXIgbj10aGlzLm9wdGlvbnM7aWYodm9pZCAwPT09ZSlyZXR1cm4gblt0XTt2YXIgbz1ZLm1vZGlmeU9wdGlvbih0aGlzLHQsZSk7blt0XT12b2lkIDAhPT1vP286ZSxcImdyb3VwXCI9PT10JiZUdChuKX0sZGVzdHJveTpmdW5jdGlvbigpe0goXCJkZXN0cm95XCIsdGhpcyk7dmFyIHQ9dGhpcy5lbDt0W2tdPW51bGwsdSh0LFwibW91c2Vkb3duXCIsdGhpcy5fb25UYXBTdGFydCksdSh0LFwidG91Y2hzdGFydFwiLHRoaXMuX29uVGFwU3RhcnQpLHUodCxcInBvaW50ZXJkb3duXCIsdGhpcy5fb25UYXBTdGFydCksdGhpcy5uYXRpdmVEcmFnZ2FibGUmJih1KHQsXCJkcmFnb3ZlclwiLHRoaXMpLHUodCxcImRyYWdlbnRlclwiLHRoaXMpKSxBcnJheS5wcm90b3R5cGUuZm9yRWFjaC5jYWxsKHQucXVlcnlTZWxlY3RvckFsbChcIltkcmFnZ2FibGVdXCIpLGZ1bmN0aW9uKHQpe3QucmVtb3ZlQXR0cmlidXRlKFwiZHJhZ2dhYmxlXCIpfSksdGhpcy5fb25Ecm9wKCksdGhpcy5fZGlzYWJsZURlbGF5ZWREcmFnRXZlbnRzKCkscHQuc3BsaWNlKHB0LmluZGV4T2YodGhpcy5lbCksMSksdGhpcy5lbD10PW51bGx9LF9oaWRlQ2xvbmU6ZnVuY3Rpb24oKXtpZighcSl7aWYoSChcImhpZGVDbG9uZVwiLHRoaXMpLEl0LmV2ZW50Q2FuY2VsZWQpcmV0dXJuO20oVSxcImRpc3BsYXlcIixcIm5vbmVcIiksdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlJiZVLnBhcmVudE5vZGUmJlUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChVKSxxPSEwfX0sX3Nob3dDbG9uZTpmdW5jdGlvbih0KXtpZihcImNsb25lXCI9PT10Lmxhc3RQdXRNb2RlKXtpZihxKXtpZihIKFwic2hvd0Nsb25lXCIsdGhpcyksSXQuZXZlbnRDYW5jZWxlZClyZXR1cm47TC5wYXJlbnROb2RlIT1qfHx0aGlzLm9wdGlvbnMuZ3JvdXAucmV2ZXJ0Q2xvbmU/ej9qLmluc2VydEJlZm9yZShVLHopOmouYXBwZW5kQ2hpbGQoVSk6ai5pbnNlcnRCZWZvcmUoVSxMKSx0aGlzLm9wdGlvbnMuZ3JvdXAucmV2ZXJ0Q2xvbmUmJnRoaXMuYW5pbWF0ZShMLFUpLG0oVSxcImRpc3BsYXlcIixcIlwiKSxxPSExfX1lbHNlIHRoaXMuX2hpZGVDbG9uZSgpfX0sRXQmJmMoZG9jdW1lbnQsXCJ0b3VjaG1vdmVcIixmdW5jdGlvbih0KXsoSXQuYWN0aXZlfHxodCkmJnQuY2FuY2VsYWJsZSYmdC5wcmV2ZW50RGVmYXVsdCgpfSksSXQudXRpbHM9e29uOmMsb2ZmOnUsY3NzOm0sZmluZDp3LGlzOmZ1bmN0aW9uKHQsZSl7cmV0dXJuISFmKHQsZSx0LCExKX0sZXh0ZW5kOmZ1bmN0aW9uKHQsZSl7aWYodCYmZSlmb3IodmFyIG4gaW4gZSllLmhhc093blByb3BlcnR5KG4pJiYodFtuXT1lW25dKTtyZXR1cm4gdH0sdGhyb3R0bGU6TixjbG9zZXN0OmYsdG9nZ2xlQ2xhc3M6dixjbG9uZTpBLGluZGV4OkMsbmV4dFRpY2s6WXQsY2FuY2VsTmV4dFRpY2s6QnQsZGV0ZWN0RGlyZWN0aW9uOkN0LGdldENoaWxkOl99LEl0LmdldD1mdW5jdGlvbih0KXtyZXR1cm4gdFtrXX0sSXQubW91bnQ9ZnVuY3Rpb24oKXt2YXIgZT1bXS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7ZVswXS5jb25zdHJ1Y3Rvcj09PUFycmF5JiYoZT1lWzBdKSxlLmZvckVhY2goZnVuY3Rpb24oZSl7aWYoIWUucHJvdG90eXBlfHwhZS5wcm90b3R5cGUuY29uc3RydWN0b3IpdGhyb3dcIlNvcnRhYmxlOiBNb3VudGVkIHBsdWdpbiBtdXN0IGJlIGEgY29uc3RydWN0b3IgZnVuY3Rpb24sIG5vdCBcIit7fS50b1N0cmluZy5jYWxsKGUpO2UudXRpbHMmJihJdC51dGlscz10KHt9LEl0LnV0aWxzLGUudXRpbHMpKSxZLm1vdW50KGUpfSl9LEl0LmNyZWF0ZT1mdW5jdGlvbih0LGUpe3JldHVybiBuZXcgSXQodCxlKX0sSXQudmVyc2lvbj1cIjEuMTIuMFwiO3ZhciBIdCxGdCxMdCxLdCxXdCxqdD1bXSx6dD1bXSxHdD0hMSxVdD0hMSxxdD0hMTtmdW5jdGlvbiBWdCh0LGUpe3p0LmZvckVhY2goZnVuY3Rpb24obixvKXt2YXIgaT1lLmNoaWxkcmVuW24uc29ydGFibGVJbmRleCsodD9OdW1iZXIobyk6MCldO2k/ZS5pbnNlcnRCZWZvcmUobixpKTplLmFwcGVuZENoaWxkKG4pfSl9ZnVuY3Rpb24gWnQoKXtqdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3QhPT1MdCYmdC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCl9KX12YXIgUXQ9ZnVuY3Rpb24odCl7dmFyIGU9dC5vcmlnaW5hbEV2ZW50LG49dC5wdXRTb3J0YWJsZSxvPXQuZHJhZ0VsLGk9dC5kaXNwYXRjaFNvcnRhYmxlRXZlbnQscj10LnVuaGlkZUdob3N0Rm9yVGFyZ2V0O2lmKGUpe3ZhciBhPW58fHQuYWN0aXZlU29ydGFibGU7KDAsdC5oaWRlR2hvc3RGb3JUYXJnZXQpKCk7dmFyIGw9ZS5jaGFuZ2VkVG91Y2hlcyYmZS5jaGFuZ2VkVG91Y2hlcy5sZW5ndGg/ZS5jaGFuZ2VkVG91Y2hlc1swXTplLHM9ZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChsLmNsaWVudFgsbC5jbGllbnRZKTtyKCksYSYmIWEuZWwuY29udGFpbnMocykmJihpKFwic3BpbGxcIiksdGhpcy5vblNwaWxsKHtkcmFnRWw6byxwdXRTb3J0YWJsZTpufSkpfX07ZnVuY3Rpb24gJHQoKXt9ZnVuY3Rpb24gSnQoKXt9JHQucHJvdG90eXBlPXtzdGFydEluZGV4Om51bGwsZHJhZ1N0YXJ0OmZ1bmN0aW9uKHQpe3RoaXMuc3RhcnRJbmRleD10Lm9sZERyYWdnYWJsZUluZGV4fSxvblNwaWxsOmZ1bmN0aW9uKHQpe3ZhciBlPXQuZHJhZ0VsLG49dC5wdXRTb3J0YWJsZTt0aGlzLnNvcnRhYmxlLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpLG4mJm4uY2FwdHVyZUFuaW1hdGlvblN0YXRlKCk7dmFyIG89Xyh0aGlzLnNvcnRhYmxlLmVsLHRoaXMuc3RhcnRJbmRleCx0aGlzLm9wdGlvbnMpO28/dGhpcy5zb3J0YWJsZS5lbC5pbnNlcnRCZWZvcmUoZSxvKTp0aGlzLnNvcnRhYmxlLmVsLmFwcGVuZENoaWxkKGUpLHRoaXMuc29ydGFibGUuYW5pbWF0ZUFsbCgpLG4mJm4uYW5pbWF0ZUFsbCgpfSxkcm9wOlF0fSxPYmplY3QuYXNzaWduKCR0LHtwbHVnaW5OYW1lOlwicmV2ZXJ0T25TcGlsbFwifSksSnQucHJvdG90eXBlPXtvblNwaWxsOmZ1bmN0aW9uKHQpe3ZhciBlPXQuZHJhZ0VsLG49dC5wdXRTb3J0YWJsZXx8dGhpcy5zb3J0YWJsZTtuLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpLGUucGFyZW50Tm9kZSYmZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGUpLG4uYW5pbWF0ZUFsbCgpfSxkcm9wOlF0fSxPYmplY3QuYXNzaWduKEp0LHtwbHVnaW5OYW1lOlwicmVtb3ZlT25TcGlsbFwifSk7dmFyIHRlLGVlLG5lLG9lLGllLHJlLGFlPVtdLGxlPSExO2Z1bmN0aW9uIHNlKCl7YWUuZm9yRWFjaChmdW5jdGlvbih0KXtjbGVhckludGVydmFsKHQucGlkKX0pLGFlPVtdfWZ1bmN0aW9uIGNlKCl7Y2xlYXJJbnRlcnZhbChyZSl9dmFyIHVlPU4oZnVuY3Rpb24odCxlLG4sbyl7aWYoZS5zY3JvbGwpe3ZhciBpLHI9KHQudG91Y2hlcz90LnRvdWNoZXNbMF06dCkuY2xpZW50WCxhPSh0LnRvdWNoZXM/dC50b3VjaGVzWzBdOnQpLmNsaWVudFksbD1lLnNjcm9sbFNlbnNpdGl2aXR5LHM9ZS5zY3JvbGxTcGVlZCxjPUUoKSx1PSExO2VlIT09biYmKGVlPW4sc2UoKSxpPWUuc2Nyb2xsRm4sITA9PT0odGU9ZS5zY3JvbGwpJiYodGU9eChuLCEwKSkpO3ZhciBkPTAsaD10ZTtkb3t2YXIgZj1oLHA9eShmKSxnPXAudG9wLHY9cC5ib3R0b20sYj1wLmxlZnQsdz1wLnJpZ2h0LEQ9cC53aWR0aCxfPXAuaGVpZ2h0LFM9dm9pZCAwLEM9dm9pZCAwLFQ9Zi5zY3JvbGxXaWR0aCxNPWYuc2Nyb2xsSGVpZ2h0LE49bShmKSxBPWYuc2Nyb2xsTGVmdCxJPWYuc2Nyb2xsVG9wO2Y9PT1jPyhTPUQ8VCYmKFwiYXV0b1wiPT09Ti5vdmVyZmxvd1h8fFwic2Nyb2xsXCI9PT1OLm92ZXJmbG93WHx8XCJ2aXNpYmxlXCI9PT1OLm92ZXJmbG93WCksQz1fPE0mJihcImF1dG9cIj09PU4ub3ZlcmZsb3dZfHxcInNjcm9sbFwiPT09Ti5vdmVyZmxvd1l8fFwidmlzaWJsZVwiPT09Ti5vdmVyZmxvd1kpKTooUz1EPFQmJihcImF1dG9cIj09PU4ub3ZlcmZsb3dYfHxcInNjcm9sbFwiPT09Ti5vdmVyZmxvd1gpLEM9XzxNJiYoXCJhdXRvXCI9PT1OLm92ZXJmbG93WXx8XCJzY3JvbGxcIj09PU4ub3ZlcmZsb3dZKSk7dmFyIFA9UyYmKE1hdGguYWJzKHctcik8PWwmJkErRDxUKS0oTWF0aC5hYnMoYi1yKTw9bCYmISFBKSxSPUMmJihNYXRoLmFicyh2LWEpPD1sJiZJK188TSktKE1hdGguYWJzKGctYSk8PWwmJiEhSSk7aWYoIWFlW2RdKWZvcih2YXIgWD0wO1g8PWQ7WCsrKWFlW1hdfHwoYWVbWF09e30pO2FlW2RdLnZ4PT1QJiZhZVtkXS52eT09UiYmYWVbZF0uZWw9PT1mfHwoYWVbZF0uZWw9ZixhZVtkXS52eD1QLGFlW2RdLnZ5PVIsY2xlYXJJbnRlcnZhbChhZVtkXS5waWQpLDA9PVAmJjA9PVJ8fCh1PSEwLGFlW2RdLnBpZD1zZXRJbnRlcnZhbChmdW5jdGlvbigpe28mJjA9PT10aGlzLmxheWVyJiZJdC5hY3RpdmUuX29uVG91Y2hNb3ZlKGllKTt2YXIgZT1hZVt0aGlzLmxheWVyXS52eT9hZVt0aGlzLmxheWVyXS52eSpzOjAsbj1hZVt0aGlzLmxheWVyXS52eD9hZVt0aGlzLmxheWVyXS52eCpzOjA7XCJmdW5jdGlvblwiPT10eXBlb2YgaSYmXCJjb250aW51ZVwiIT09aS5jYWxsKEl0LmRyYWdnZWQucGFyZW50Tm9kZVtrXSxuLGUsdCxpZSxhZVt0aGlzLmxheWVyXS5lbCl8fE8oYWVbdGhpcy5sYXllcl0uZWwsbixlKX0uYmluZCh7bGF5ZXI6ZH0pLDI0KSkpLGQrK313aGlsZShlLmJ1YmJsZVNjcm9sbCYmaCE9PWMmJihoPXgoaCwhMSkpKTtsZT11fX0sMzApO0l0Lm1vdW50KG5ldyBmdW5jdGlvbigpe2Z1bmN0aW9uIHQoKXtmb3IodmFyIHQgaW4gdGhpcy5kZWZhdWx0cz17c2Nyb2xsOiEwLHNjcm9sbFNlbnNpdGl2aXR5OjMwLHNjcm9sbFNwZWVkOjEwLGJ1YmJsZVNjcm9sbDohMH0sdGhpcylcIl9cIj09PXQuY2hhckF0KDApJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzW3RdJiYodGhpc1t0XT10aGlzW3RdLmJpbmQodGhpcykpfXJldHVybiB0LnByb3RvdHlwZT17ZHJhZ1N0YXJ0ZWQ6ZnVuY3Rpb24odCl7dmFyIGU9dC5vcmlnaW5hbEV2ZW50O3RoaXMuc29ydGFibGUubmF0aXZlRHJhZ2dhYmxlP2MoZG9jdW1lbnQsXCJkcmFnb3ZlclwiLHRoaXMuX2hhbmRsZUF1dG9TY3JvbGwpOmMoZG9jdW1lbnQsdGhpcy5vcHRpb25zLnN1cHBvcnRQb2ludGVyP1wicG9pbnRlcm1vdmVcIjplLnRvdWNoZXM/XCJ0b3VjaG1vdmVcIjpcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCl9LGRyYWdPdmVyQ29tcGxldGVkOmZ1bmN0aW9uKHQpe3ZhciBlPXQub3JpZ2luYWxFdmVudDt0aGlzLm9wdGlvbnMuZHJhZ092ZXJCdWJibGV8fGUucm9vdEVsfHx0aGlzLl9oYW5kbGVBdXRvU2Nyb2xsKGUpfSxkcm9wOmZ1bmN0aW9uKCl7dGhpcy5zb3J0YWJsZS5uYXRpdmVEcmFnZ2FibGU/dShkb2N1bWVudCxcImRyYWdvdmVyXCIsdGhpcy5faGFuZGxlQXV0b1Njcm9sbCk6KHUoZG9jdW1lbnQsXCJwb2ludGVybW92ZVwiLHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCksdShkb2N1bWVudCxcInRvdWNobW92ZVwiLHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCksdShkb2N1bWVudCxcIm1vdXNlbW92ZVwiLHRoaXMuX2hhbmRsZUZhbGxiYWNrQXV0b1Njcm9sbCkpLGNlKCksc2UoKSxjbGVhclRpbWVvdXQocCkscD12b2lkIDB9LG51bGxpbmc6ZnVuY3Rpb24oKXtpZT1lZT10ZT1sZT1yZT1uZT1vZT1udWxsLGFlLmxlbmd0aD0wfSxfaGFuZGxlRmFsbGJhY2tBdXRvU2Nyb2xsOmZ1bmN0aW9uKHQpe3RoaXMuX2hhbmRsZUF1dG9TY3JvbGwodCwhMCl9LF9oYW5kbGVBdXRvU2Nyb2xsOmZ1bmN0aW9uKHQsZSl7dmFyIGk9dGhpcyxhPSh0LnRvdWNoZXM/dC50b3VjaGVzWzBdOnQpLmNsaWVudFgsbD0odC50b3VjaGVzP3QudG91Y2hlc1swXTp0KS5jbGllbnRZLHM9ZG9jdW1lbnQuZWxlbWVudEZyb21Qb2ludChhLGwpO2lmKGllPXQsZXx8b3x8bnx8cil7dWUodCx0aGlzLm9wdGlvbnMscyxlKTt2YXIgYz14KHMsITApOyFsZXx8cmUmJmE9PT1uZSYmbD09PW9lfHwocmUmJmNlKCkscmU9c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKXt2YXIgbj14KGRvY3VtZW50LmVsZW1lbnRGcm9tUG9pbnQoYSxsKSwhMCk7biE9PWMmJihjPW4sc2UoKSksdWUodCxpLm9wdGlvbnMsbixlKX0sMTApLG5lPWEsb2U9bCl9ZWxzZXtpZighdGhpcy5vcHRpb25zLmJ1YmJsZVNjcm9sbHx8eChzLCEwKT09PUUoKSlyZXR1cm4gdm9pZCBzZSgpO3VlKHQsdGhpcy5vcHRpb25zLHgocywhMSksITEpfX19LE9iamVjdC5hc3NpZ24odCx7cGx1Z2luTmFtZTpcInNjcm9sbFwiLGluaXRpYWxpemVCeURlZmF1bHQ6ITB9KX0pLEl0Lm1vdW50KEp0LCR0KSxJdC5tb3VudChuZXcgZnVuY3Rpb24oKXtmdW5jdGlvbiB0KCl7dGhpcy5kZWZhdWx0cz17c3dhcENsYXNzOlwic29ydGFibGUtc3dhcC1oaWdobGlnaHRcIn19cmV0dXJuIHQucHJvdG90eXBlPXtkcmFnU3RhcnQ6ZnVuY3Rpb24odCl7TnQ9dC5kcmFnRWx9LGRyYWdPdmVyVmFsaWQ6ZnVuY3Rpb24odCl7dmFyIGU9dC5jb21wbGV0ZWQsbj10LnRhcmdldCxvPXQuY2hhbmdlZCxpPXQuY2FuY2VsO2lmKHQuYWN0aXZlU29ydGFibGUub3B0aW9ucy5zd2FwKXt2YXIgcj10aGlzLm9wdGlvbnM7aWYobiYmbiE9PXRoaXMuc29ydGFibGUuZWwpe3ZhciBhPU50OyExIT09KDAsdC5vbk1vdmUpKG4pPyh2KG4sci5zd2FwQ2xhc3MsITApLE50PW4pOk50PW51bGwsYSYmYSE9PU50JiZ2KGEsci5zd2FwQ2xhc3MsITEpfW8oKSxlKCEwKSxpKCl9fSxkcm9wOmZ1bmN0aW9uKHQpe3ZhciBlLG4sbyxpLHIsYSxsPXQuYWN0aXZlU29ydGFibGUscz10LnB1dFNvcnRhYmxlLGM9dC5kcmFnRWwsdT1zfHx0aGlzLnNvcnRhYmxlLGQ9dGhpcy5vcHRpb25zO050JiZ2KE50LGQuc3dhcENsYXNzLCExKSxOdCYmKGQuc3dhcHx8cyYmcy5vcHRpb25zLnN3YXApJiZjIT09TnQmJih1LmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpLHUhPT1sJiZsLmNhcHR1cmVBbmltYXRpb25TdGF0ZSgpLGE9KG49TnQpLnBhcmVudE5vZGUsKHI9KGU9YykucGFyZW50Tm9kZSkmJmEmJiFyLmlzRXF1YWxOb2RlKG4pJiYhYS5pc0VxdWFsTm9kZShlKSYmKG89QyhlKSxpPUMobiksci5pc0VxdWFsTm9kZShhKSYmbzxpJiZpKyssci5pbnNlcnRCZWZvcmUobixyLmNoaWxkcmVuW29dKSxhLmluc2VydEJlZm9yZShlLGEuY2hpbGRyZW5baV0pKSx1LmFuaW1hdGVBbGwoKSx1IT09bCYmbC5hbmltYXRlQWxsKCkpfSxudWxsaW5nOmZ1bmN0aW9uKCl7TnQ9bnVsbH19LE9iamVjdC5hc3NpZ24odCx7cGx1Z2luTmFtZTpcInN3YXBcIixldmVudFByb3BlcnRpZXM6ZnVuY3Rpb24oKXtyZXR1cm57c3dhcEl0ZW06TnR9fX0pfSksSXQubW91bnQobmV3IGZ1bmN0aW9uKCl7ZnVuY3Rpb24gdCh0KXtmb3IodmFyIGUgaW4gdGhpcylcIl9cIj09PWUuY2hhckF0KDApJiZcImZ1bmN0aW9uXCI9PXR5cGVvZiB0aGlzW2VdJiYodGhpc1tlXT10aGlzW2VdLmJpbmQodGhpcykpO3Qub3B0aW9ucy5zdXBwb3J0UG9pbnRlcj9jKGRvY3VtZW50LFwicG9pbnRlcnVwXCIsdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpOihjKGRvY3VtZW50LFwibW91c2V1cFwiLHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKSxjKGRvY3VtZW50LFwidG91Y2hlbmRcIix0aGlzLl9kZXNlbGVjdE11bHRpRHJhZykpLGMoZG9jdW1lbnQsXCJrZXlkb3duXCIsdGhpcy5fY2hlY2tLZXlEb3duKSxjKGRvY3VtZW50LFwia2V5dXBcIix0aGlzLl9jaGVja0tleVVwKSx0aGlzLmRlZmF1bHRzPXtzZWxlY3RlZENsYXNzOlwic29ydGFibGUtc2VsZWN0ZWRcIixtdWx0aURyYWdLZXk6bnVsbCxzZXREYXRhOmZ1bmN0aW9uKGUsbil7dmFyIG89XCJcIjtqdC5sZW5ndGgmJkZ0PT09dD9qdC5mb3JFYWNoKGZ1bmN0aW9uKHQsZSl7bys9KGU/XCIsIFwiOlwiXCIpK3QudGV4dENvbnRlbnR9KTpvPW4udGV4dENvbnRlbnQsZS5zZXREYXRhKFwiVGV4dFwiLG8pfX19cmV0dXJuIHQucHJvdG90eXBlPXttdWx0aURyYWdLZXlEb3duOiExLGlzTXVsdGlEcmFnOiExLGRlbGF5U3RhcnRHbG9iYWw6ZnVuY3Rpb24odCl7THQ9dC5kcmFnRWx9LGRlbGF5RW5kZWQ6ZnVuY3Rpb24oKXt0aGlzLmlzTXVsdGlEcmFnPX5qdC5pbmRleE9mKEx0KX0sc2V0dXBDbG9uZTpmdW5jdGlvbih0KXt2YXIgZT10LnNvcnRhYmxlLG49dC5jYW5jZWw7aWYodGhpcy5pc011bHRpRHJhZyl7Zm9yKHZhciBvPTA7bzxqdC5sZW5ndGg7bysrKXp0LnB1c2goQShqdFtvXSkpLHp0W29dLnNvcnRhYmxlSW5kZXg9anRbb10uc29ydGFibGVJbmRleCx6dFtvXS5kcmFnZ2FibGU9ITEsenRbb10uc3R5bGVbXCJ3aWxsLWNoYW5nZVwiXT1cIlwiLHYoenRbb10sdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsITEpLGp0W29dPT09THQmJnYoenRbb10sdGhpcy5vcHRpb25zLmNob3NlbkNsYXNzLCExKTtlLl9oaWRlQ2xvbmUoKSxuKCl9fSxjbG9uZTpmdW5jdGlvbih0KXt2YXIgZT10LmRpc3BhdGNoU29ydGFibGVFdmVudCxuPXQuY2FuY2VsO3RoaXMuaXNNdWx0aURyYWcmJih0aGlzLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGV8fGp0Lmxlbmd0aCYmRnQ9PT10LnNvcnRhYmxlJiYoVnQoITAsdC5yb290RWwpLGUoXCJjbG9uZVwiKSxuKCkpKX0sc2hvd0Nsb25lOmZ1bmN0aW9uKHQpe3ZhciBlPXQuY2xvbmVOb3dTaG93bixuPXQuY2FuY2VsO3RoaXMuaXNNdWx0aURyYWcmJihWdCghMSx0LnJvb3RFbCksenQuZm9yRWFjaChmdW5jdGlvbih0KXttKHQsXCJkaXNwbGF5XCIsXCJcIil9KSxlKCksV3Q9ITEsbigpKX0saGlkZUNsb25lOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10LmNsb25lTm93SGlkZGVuLG89dC5jYW5jZWw7dGhpcy5pc011bHRpRHJhZyYmKHp0LmZvckVhY2goZnVuY3Rpb24odCl7bSh0LFwiZGlzcGxheVwiLFwibm9uZVwiKSxlLm9wdGlvbnMucmVtb3ZlQ2xvbmVPbkhpZGUmJnQucGFyZW50Tm9kZSYmdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHQpfSksbigpLFd0PSEwLG8oKSl9LGRyYWdTdGFydEdsb2JhbDpmdW5jdGlvbih0KXshdGhpcy5pc011bHRpRHJhZyYmRnQmJkZ0Lm11bHRpRHJhZy5fZGVzZWxlY3RNdWx0aURyYWcoKSxqdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3Quc29ydGFibGVJbmRleD1DKHQpfSksanQ9anQuc29ydChmdW5jdGlvbih0LGUpe3JldHVybiB0LnNvcnRhYmxlSW5kZXgtZS5zb3J0YWJsZUluZGV4fSkscXQ9ITB9LGRyYWdTdGFydGVkOmZ1bmN0aW9uKHQpe3ZhciBlPXRoaXMsbj10LnNvcnRhYmxlO2lmKHRoaXMuaXNNdWx0aURyYWcpe2lmKHRoaXMub3B0aW9ucy5zb3J0JiYobi5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKSx0aGlzLm9wdGlvbnMuYW5pbWF0aW9uKSl7anQuZm9yRWFjaChmdW5jdGlvbih0KXt0IT09THQmJm0odCxcInBvc2l0aW9uXCIsXCJhYnNvbHV0ZVwiKX0pO3ZhciBvPXkoTHQsITEsITAsITApO2p0LmZvckVhY2goZnVuY3Rpb24odCl7dCE9PUx0JiZJKHQsbyl9KSxVdD0hMCxHdD0hMH1uLmFuaW1hdGVBbGwoZnVuY3Rpb24oKXtVdD0hMSxHdD0hMSxlLm9wdGlvbnMuYW5pbWF0aW9uJiZqdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe1AodCl9KSxlLm9wdGlvbnMuc29ydCYmWnQoKX0pfX0sZHJhZ092ZXI6ZnVuY3Rpb24odCl7dmFyIGU9dC5jb21wbGV0ZWQsbj10LmNhbmNlbDtVdCYmfmp0LmluZGV4T2YodC50YXJnZXQpJiYoZSghMSksbigpKX0scmV2ZXJ0OmZ1bmN0aW9uKHQpe3ZhciBlPXQuZnJvbVNvcnRhYmxlLG49dC5yb290RWwsbz10LnNvcnRhYmxlLGk9dC5kcmFnUmVjdDtqdC5sZW5ndGg+MSYmKGp0LmZvckVhY2goZnVuY3Rpb24odCl7by5hZGRBbmltYXRpb25TdGF0ZSh7dGFyZ2V0OnQscmVjdDpVdD95KHQpOml9KSxQKHQpLHQuZnJvbVJlY3Q9aSxlLnJlbW92ZUFuaW1hdGlvblN0YXRlKHQpfSksVXQ9ITEsZnVuY3Rpb24odCxlKXtqdC5mb3JFYWNoKGZ1bmN0aW9uKG4sbyl7dmFyIGk9ZS5jaGlsZHJlbltuLnNvcnRhYmxlSW5kZXgrKHQ/TnVtYmVyKG8pOjApXTtpP2UuaW5zZXJ0QmVmb3JlKG4saSk6ZS5hcHBlbmRDaGlsZChuKX0pfSghdGhpcy5vcHRpb25zLnJlbW92ZUNsb25lT25IaWRlLG4pKX0sZHJhZ092ZXJDb21wbGV0ZWQ6ZnVuY3Rpb24odCl7dmFyIGU9dC5zb3J0YWJsZSxuPXQuaXNPd25lcixvPXQuYWN0aXZlU29ydGFibGUsaT10LnBhcmVudEVsLHI9dC5wdXRTb3J0YWJsZSxhPXRoaXMub3B0aW9ucztpZih0Lmluc2VydGlvbil7aWYobiYmby5faGlkZUNsb25lKCksR3Q9ITEsYS5hbmltYXRpb24mJmp0Lmxlbmd0aD4xJiYoVXR8fCFuJiYhby5vcHRpb25zLnNvcnQmJiFyKSl7dmFyIGw9eShMdCwhMSwhMCwhMCk7anQuZm9yRWFjaChmdW5jdGlvbih0KXt0IT09THQmJihJKHQsbCksaS5hcHBlbmRDaGlsZCh0KSl9KSxVdD0hMH1pZighbilpZihVdHx8WnQoKSxqdC5sZW5ndGg+MSl7dmFyIHM9V3Q7by5fc2hvd0Nsb25lKGUpLG8ub3B0aW9ucy5hbmltYXRpb24mJiFXdCYmcyYmenQuZm9yRWFjaChmdW5jdGlvbih0KXtvLmFkZEFuaW1hdGlvblN0YXRlKHt0YXJnZXQ6dCxyZWN0Okt0fSksdC5mcm9tUmVjdD1LdCx0LnRoaXNBbmltYXRpb25EdXJhdGlvbj1udWxsfSl9ZWxzZSBvLl9zaG93Q2xvbmUoZSl9fSxkcmFnT3ZlckFuaW1hdGlvbkNhcHR1cmU6ZnVuY3Rpb24odCl7dmFyIGU9dC5kcmFnUmVjdCxuPXQuaXNPd25lcixvPXQuYWN0aXZlU29ydGFibGU7aWYoanQuZm9yRWFjaChmdW5jdGlvbih0KXt0LnRoaXNBbmltYXRpb25EdXJhdGlvbj1udWxsfSksby5vcHRpb25zLmFuaW1hdGlvbiYmIW4mJm8ubXVsdGlEcmFnLmlzTXVsdGlEcmFnKXtLdD1PYmplY3QuYXNzaWduKHt9LGUpO3ZhciBpPWIoTHQsITApO0t0LnRvcC09aS5mLEt0LmxlZnQtPWkuZX19LGRyYWdPdmVyQW5pbWF0aW9uQ29tcGxldGU6ZnVuY3Rpb24oKXtVdCYmKFV0PSExLFp0KCkpfSxkcm9wOmZ1bmN0aW9uKHQpe3ZhciBlPXQub3JpZ2luYWxFdmVudCxuPXQucm9vdEVsLG89dC5wYXJlbnRFbCxpPXQuc29ydGFibGUscj10LmRpc3BhdGNoU29ydGFibGVFdmVudCxhPXQub2xkSW5kZXgsbD10LnB1dFNvcnRhYmxlLHM9bHx8dGhpcy5zb3J0YWJsZTtpZihlKXt2YXIgYz10aGlzLm9wdGlvbnMsdT1vLmNoaWxkcmVuO2lmKCFxdClpZihjLm11bHRpRHJhZ0tleSYmIXRoaXMubXVsdGlEcmFnS2V5RG93biYmdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcoKSx2KEx0LGMuc2VsZWN0ZWRDbGFzcywhfmp0LmluZGV4T2YoTHQpKSx+anQuaW5kZXhPZihMdCkpanQuc3BsaWNlKGp0LmluZGV4T2YoTHQpLDEpLEh0PW51bGwsQih7c29ydGFibGU6aSxyb290RWw6bixuYW1lOlwiZGVzZWxlY3RcIix0YXJnZXRFbDpMdCxvcmlnaW5hbEV2dDplfSk7ZWxzZXtpZihqdC5wdXNoKEx0KSxCKHtzb3J0YWJsZTppLHJvb3RFbDpuLG5hbWU6XCJzZWxlY3RcIix0YXJnZXRFbDpMdCxvcmlnaW5hbEV2dDplfSksZS5zaGlmdEtleSYmSHQmJmkuZWwuY29udGFpbnMoSHQpKXt2YXIgZCxoLGY9QyhIdCkscD1DKEx0KTtpZih+ZiYmfnAmJmYhPT1wKWZvcihwPmY/KGg9ZixkPXApOihoPXAsZD1mKzEpO2g8ZDtoKyspfmp0LmluZGV4T2YodVtoXSl8fCh2KHVbaF0sYy5zZWxlY3RlZENsYXNzLCEwKSxqdC5wdXNoKHVbaF0pLEIoe3NvcnRhYmxlOmkscm9vdEVsOm4sbmFtZTpcInNlbGVjdFwiLHRhcmdldEVsOnVbaF0sb3JpZ2luYWxFdnQ6ZX0pKX1lbHNlIEh0PUx0O0Z0PXN9aWYocXQmJnRoaXMuaXNNdWx0aURyYWcpe2lmKChvW2tdLm9wdGlvbnMuc29ydHx8byE9PW4pJiZqdC5sZW5ndGg+MSl7dmFyIGc9eShMdCksbT1DKEx0LFwiOm5vdCguXCIrdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MrXCIpXCIpO2lmKCFHdCYmYy5hbmltYXRpb24mJihMdC50aGlzQW5pbWF0aW9uRHVyYXRpb249bnVsbCkscy5jYXB0dXJlQW5pbWF0aW9uU3RhdGUoKSwhR3QmJihjLmFuaW1hdGlvbiYmKEx0LmZyb21SZWN0PWcsanQuZm9yRWFjaChmdW5jdGlvbih0KXtpZih0LnRoaXNBbmltYXRpb25EdXJhdGlvbj1udWxsLHQhPT1MdCl7dmFyIGU9VXQ/eSh0KTpnO3QuZnJvbVJlY3Q9ZSxzLmFkZEFuaW1hdGlvblN0YXRlKHt0YXJnZXQ6dCxyZWN0OmV9KX19KSksWnQoKSxqdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe3VbbV0/by5pbnNlcnRCZWZvcmUodCx1W21dKTpvLmFwcGVuZENoaWxkKHQpLG0rK30pLGE9PT1DKEx0KSkpe3ZhciBiPSExO2p0LmZvckVhY2goZnVuY3Rpb24odCl7dC5zb3J0YWJsZUluZGV4PT09Qyh0KXx8KGI9ITApfSksYiYmcihcInVwZGF0ZVwiKX1qdC5mb3JFYWNoKGZ1bmN0aW9uKHQpe1AodCl9KSxzLmFuaW1hdGVBbGwoKX1GdD1zfShuPT09b3x8bCYmXCJjbG9uZVwiIT09bC5sYXN0UHV0TW9kZSkmJnp0LmZvckVhY2goZnVuY3Rpb24odCl7dC5wYXJlbnROb2RlJiZ0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodCl9KX19LG51bGxpbmdHbG9iYWw6ZnVuY3Rpb24oKXt0aGlzLmlzTXVsdGlEcmFnPXF0PSExLHp0Lmxlbmd0aD0wfSxkZXN0cm95R2xvYmFsOmZ1bmN0aW9uKCl7dGhpcy5fZGVzZWxlY3RNdWx0aURyYWcoKSx1KGRvY3VtZW50LFwicG9pbnRlcnVwXCIsdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpLHUoZG9jdW1lbnQsXCJtb3VzZXVwXCIsdGhpcy5fZGVzZWxlY3RNdWx0aURyYWcpLHUoZG9jdW1lbnQsXCJ0b3VjaGVuZFwiLHRoaXMuX2Rlc2VsZWN0TXVsdGlEcmFnKSx1KGRvY3VtZW50LFwia2V5ZG93blwiLHRoaXMuX2NoZWNrS2V5RG93biksdShkb2N1bWVudCxcImtleXVwXCIsdGhpcy5fY2hlY2tLZXlVcCl9LF9kZXNlbGVjdE11bHRpRHJhZzpmdW5jdGlvbih0KXtpZighKHZvaWQgMCE9PXF0JiZxdHx8RnQhPT10aGlzLnNvcnRhYmxlfHx0JiZmKHQudGFyZ2V0LHRoaXMub3B0aW9ucy5kcmFnZ2FibGUsdGhpcy5zb3J0YWJsZS5lbCwhMSl8fHQmJjAhPT10LmJ1dHRvbikpZm9yKDtqdC5sZW5ndGg7KXt2YXIgZT1qdFswXTt2KGUsdGhpcy5vcHRpb25zLnNlbGVjdGVkQ2xhc3MsITEpLGp0LnNoaWZ0KCksQih7c29ydGFibGU6dGhpcy5zb3J0YWJsZSxyb290RWw6dGhpcy5zb3J0YWJsZS5lbCxuYW1lOlwiZGVzZWxlY3RcIix0YXJnZXRFbDplLG9yaWdpbmFsRXZ0OnR9KX19LF9jaGVja0tleURvd246ZnVuY3Rpb24odCl7dC5rZXk9PT10aGlzLm9wdGlvbnMubXVsdGlEcmFnS2V5JiYodGhpcy5tdWx0aURyYWdLZXlEb3duPSEwKX0sX2NoZWNrS2V5VXA6ZnVuY3Rpb24odCl7dC5rZXk9PT10aGlzLm9wdGlvbnMubXVsdGlEcmFnS2V5JiYodGhpcy5tdWx0aURyYWdLZXlEb3duPSExKX19LE9iamVjdC5hc3NpZ24odCx7cGx1Z2luTmFtZTpcIm11bHRpRHJhZ1wiLHV0aWxzOntzZWxlY3Q6ZnVuY3Rpb24odCl7dmFyIGU9dC5wYXJlbnROb2RlW2tdO2UmJmUub3B0aW9ucy5tdWx0aURyYWcmJiF+anQuaW5kZXhPZih0KSYmKEZ0JiZGdCE9PWUmJihGdC5tdWx0aURyYWcuX2Rlc2VsZWN0TXVsdGlEcmFnKCksRnQ9ZSksdih0LGUub3B0aW9ucy5zZWxlY3RlZENsYXNzLCEwKSxqdC5wdXNoKHQpKX0sZGVzZWxlY3Q6ZnVuY3Rpb24odCl7dmFyIGU9dC5wYXJlbnROb2RlW2tdLG49anQuaW5kZXhPZih0KTtlJiZlLm9wdGlvbnMubXVsdGlEcmFnJiZ+biYmKHYodCxlLm9wdGlvbnMuc2VsZWN0ZWRDbGFzcywhMSksanQuc3BsaWNlKG4sMSkpfX0sZXZlbnRQcm9wZXJ0aWVzOmZ1bmN0aW9uKCl7dmFyIHQ9dGhpcyxlPVtdLG49W107cmV0dXJuIGp0LmZvckVhY2goZnVuY3Rpb24obyl7dmFyIGk7ZS5wdXNoKHttdWx0aURyYWdFbGVtZW50Om8saW5kZXg6by5zb3J0YWJsZUluZGV4fSksaT1VdCYmbyE9PUx0Py0xOlV0P0MobyxcIjpub3QoLlwiK3Qub3B0aW9ucy5zZWxlY3RlZENsYXNzK1wiKVwiKTpDKG8pLG4ucHVzaCh7bXVsdGlEcmFnRWxlbWVudDpvLGluZGV4Oml9KX0pLHtpdGVtczpbXS5jb25jYXQoanQpLGNsb25lczpbXS5jb25jYXQoenQpLG9sZEluZGljaWVzOmUsbmV3SW5kaWNpZXM6bn19LG9wdGlvbkxpc3RlbmVyczp7bXVsdGlEcmFnS2V5OmZ1bmN0aW9uKHQpe3JldHVyblwiY3RybFwiPT09KHQ9dC50b0xvd2VyQ2FzZSgpKT90PVwiQ29udHJvbFwiOnQubGVuZ3RoPjEmJih0PXQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkrdC5zdWJzdHIoMSkpLHR9fX0pfSk7ZXhwb3J0IGRlZmF1bHQgSXQ7ZXhwb3J0e0l0IGFzIFNvcnRhYmxlfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXNvcnRhYmxlLmNvbXBsZXRlLmVzbS5qcy5tYXBcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG52YXIgc3R5bGVzSW5Eb20gPSB7fSxcblx0bWVtb2l6ZSA9IGZ1bmN0aW9uKGZuKSB7XG5cdFx0dmFyIG1lbW87XG5cdFx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0XHRyZXR1cm4gbWVtbztcblx0XHR9O1xuXHR9LFxuXHRpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gL21zaWUgWzYtOV1cXGIvLnRlc3Qod2luZG93Lm5hdmlnYXRvci51c2VyQWdlbnQudG9Mb3dlckNhc2UoKSk7XG5cdH0pLFxuXHRnZXRIZWFkRWxlbWVudCA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBkb2N1bWVudC5oZWFkIHx8IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiaGVhZFwiKVswXTtcblx0fSksXG5cdHNpbmdsZXRvbkVsZW1lbnQgPSBudWxsLFxuXHRzaW5nbGV0b25Db3VudGVyID0gMCxcblx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3AgPSBbXTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gPT09IFwidW5kZWZpbmVkXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiA8aGVhZD4uXG5cdGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ1bmRlZmluZWRcIikgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0KTtcblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0KTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKVxuXHRcdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMobGlzdCkge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblx0XHRpZighbmV3U3R5bGVzW2lkXSlcblx0XHRcdHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZVxuXHRcdFx0bmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpIHtcblx0dmFyIGhlYWQgPSBnZXRIZWFkRWxlbWVudCgpO1xuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcFtzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZighbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgaGVhZC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKHN0eWxlRWxlbWVudCwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRoZWFkLmFwcGVuZENoaWxkKHN0eWxlRWxlbWVudCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudHNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGVFbGVtZW50KTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0aGVhZC5hcHBlbmRDaGlsZChzdHlsZUVsZW1lbnQpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnLiBNdXN0IGJlICd0b3AnIG9yICdib3R0b20nLlwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG5cdHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG5cdHZhciBpZHggPSBzdHlsZUVsZW1lbnRzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlRWxlbWVudCk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVFbGVtZW50c0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblx0c3R5bGVFbGVtZW50LnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZUVsZW1lbnQpO1xuXHRyZXR1cm4gc3R5bGVFbGVtZW50O1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlRWxlbWVudCwgdXBkYXRlLCByZW1vdmU7XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cdFx0c3R5bGVFbGVtZW50ID0gc2luZ2xldG9uRWxlbWVudCB8fCAoc2luZ2xldG9uRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlRWxlbWVudCwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZUVsZW1lbnQsIHN0eWxlSW5kZXgsIHRydWUpO1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlRWxlbWVudCA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGVFbGVtZW50KTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG5cdFx0aWYobmV3T2JqKSB7XG5cdFx0XHRpZihuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApXG5cdFx0XHRcdHJldHVybjtcblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGVFbGVtZW50LCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZUVsZW1lbnQuY2hpbGROb2Rlcztcblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZUVsZW1lbnQuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlRWxlbWVudCwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdGlmIChtZWRpYSkge1xuXHRcdHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cHM6Ly9kZXZlbG9wZXIuY2hyb21lLmNvbS9kZXZ0b29scy9kb2NzL2phdmFzY3JpcHQtZGVidWdnaW5nXG5cdFx0Ly8gdGhpcyBtYWtlcyBzb3VyY2UgbWFwcyBpbnNpZGUgc3R5bGUgdGFncyB3b3JrIHByb3Blcmx5IGluIENocm9tZVxuXHRcdGNzcyArPSAnXFxuLyojIHNvdXJjZVVSTD0nICsgc291cmNlTWFwLnNvdXJjZXNbMF0gKyAnICovJztcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXHRcdHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuIiwiLy8gc3R5bGUtbG9hZGVyOiBBZGRzIHNvbWUgY3NzIHRvIHRoZSBET00gYnkgYWRkaW5nIGEgPHN0eWxlPiB0YWdcblxuLy8gbG9hZCB0aGUgc3R5bGVzXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FycmF5LXRhYnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiKTtcbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuLy8gYWRkIHRoZSBzdHlsZXMgdG8gdGhlIERPTVxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1zdHlsZS1sb2FkZXIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIHt9KTtcbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuLy8gSG90IE1vZHVsZSBSZXBsYWNlbWVudFxuaWYobW9kdWxlLmhvdCkge1xuXHQvLyBXaGVuIHRoZSBzdHlsZXMgY2hhbmdlLCB1cGRhdGUgdGhlIDxzdHlsZT4gdGFnc1xuXHRpZighY29udGVudC5sb2NhbHMpIHtcblx0XHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2xvYWRlcnMvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXJyYXktdGFicy52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZsYW5nPXNjc3MmXCIsIGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIG5ld0NvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvbG9hZGVycy9zdHlsZVBvc3RMb2FkZXIuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi4vLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9hcnJheS10YWJzLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmxhbmc9c2NzcyZcIik7XG5cdFx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblx0XHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0XHR9KTtcblx0fVxuXHQvLyBXaGVuIHRoZSBtb2R1bGUgaXMgZGlzcG9zZWQsIHJlbW92ZSB0aGUgPHN0eWxlPiB0YWdzXG5cdG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbigpIHsgdXBkYXRlKCk7IH0pO1xufSIsImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zIH0gZnJvbSBcIi4vYXJyYXktdGFicy52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NjhlYWVjODAmXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vYXJyYXktdGFicy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCJcbmV4cG9ydCAqIGZyb20gXCIuL2FycmF5LXRhYnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5pbXBvcnQgc3R5bGUwIGZyb20gXCIuL2FycmF5LXRhYnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbFxuICBcbilcblxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgdmFyIGFwaSA9IHJlcXVpcmUoXCIvVXNlcnMvZGFuaWVsL1Byb2plY3RzL093bmVyL25jZm9ybS9uY2Zvcm0vbm9kZV9tb2R1bGVzL3Z1ZS1ob3QtcmVsb2FkLWFwaS9kaXN0L2luZGV4LmpzXCIpXG4gIGFwaS5pbnN0YWxsKHJlcXVpcmUoJ3Z1ZScpKVxuICBpZiAoYXBpLmNvbXBhdGlibGUpIHtcbiAgICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gICAgaWYgKCFtb2R1bGUuaG90LmRhdGEpIHtcbiAgICAgIGFwaS5jcmVhdGVSZWNvcmQoJzY4ZWFlYzgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZWxvYWQoJzY4ZWFlYzgwJywgY29tcG9uZW50Lm9wdGlvbnMpXG4gICAgfVxuICAgIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9hcnJheS10YWJzLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD02OGVhZWM4MCZcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgYXBpLnJlcmVuZGVyKCc2OGVhZWM4MCcsIHtcbiAgICAgICAgcmVuZGVyOiByZW5kZXIsXG4gICAgICAgIHN0YXRpY1JlbmRlckZuczogc3RhdGljUmVuZGVyRm5zXG4gICAgICB9KVxuICAgIH0pXG4gIH1cbn1cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwic3JjL2NvbXBvbmVudHMvbGF5b3V0LWNvbXBzL2FycmF5LXRhYnMudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIiwiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FycmF5LXRhYnMudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vYXJyYXktdGFicy52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmXCIiLCJpbXBvcnQgbW9kIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FycmF5LXRhYnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtc3R5bGUtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2xpYi9sb2FkZXJzL3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuLi8uLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL2FycmF5LXRhYnMudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmbGFuZz1zY3NzJlwiIiwibW9kdWxlLmV4cG9ydHMgPSBfX1dFQlBBQ0tfRVhURVJOQUxfTU9EVUxFX19uY2Zvcm1fbmNmb3JtX2NvbW1vbl9fOyJdLCJzb3VyY2VSb290IjoiIn0=