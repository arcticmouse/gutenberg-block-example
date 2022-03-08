/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./blocks/src/blocks.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./blocks/src/block/block.js":
/*!***********************************!*\
  !*** ./blocks/src/block/block.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ "./blocks/src/block/style.scss");
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor.scss */ "./blocks/src/block/editor.scss");
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_editor_scss__WEBPACK_IMPORTED_MODULE_1__);
var _wp$editor = wp.editor,
    RichText = _wp$editor.RichText,
    MediaUpload = _wp$editor.MediaUpload,
    PlainText = _wp$editor.PlainText;
var registerBlockType = wp.blocks.registerBlockType;
var Button = wp.components.Button; // Import our CSS files



registerBlockType('card-block/main', {
  title: 'Card',
  icon: 'heart',
  category: 'common',
  attributes: {
    title: {
      source: 'text',
      selector: '.card__title'
    },
    body: {
      type: 'array',
      source: 'children',
      selector: '.card__body'
    },
    imageAlt: {
      attribute: 'alt',
      selector: '.card__image'
    },
    imageUrl: {
      attribute: 'src',
      selector: '.card__image'
    }
  },
  edit: function edit(_ref) {
    var attributes = _ref.attributes,
        className = _ref.className,
        setAttributes = _ref.setAttributes;

    var getImageButton = function getImageButton(openEvent) {
      if (attributes.imageUrl) {
        return wp.element.createElement("img", {
          src: attributes.imageUrl,
          onClick: openEvent,
          className: "image"
        });
      } else {
        return wp.element.createElement("div", {
          className: "button-container"
        }, wp.element.createElement(Button, {
          onClick: openEvent,
          className: "button button-large"
        }, "Pick an image"));
      }
    };

    return wp.element.createElement("div", {
      className: "container"
    }, wp.element.createElement(MediaUpload, {
      onSelect: function onSelect(media) {
        setAttributes({
          imageAlt: media.alt,
          imageUrl: media.url
        });
      },
      type: "image",
      value: attributes.imageID,
      render: function render(_ref2) {
        var open = _ref2.open;
        return getImageButton(open);
      }
    }), wp.element.createElement(PlainText, {
      onChange: function onChange(content) {
        return setAttributes({
          title: content
        });
      },
      value: attributes.title,
      placeholder: "Your card title",
      className: "heading"
    }), wp.element.createElement(RichText, {
      onChange: function onChange(content) {
        return setAttributes({
          body: content
        });
      },
      value: attributes.body,
      multiline: "p",
      placeholder: "Your card text",
      formattingControls: ['bold', 'italic', 'underline'],
      isSelected: attributes.isSelected
    }));
  },
  save: function save(_ref3) {
    var attributes = _ref3.attributes;

    var cardImage = function cardImage(src, alt) {
      if (!src) return null;

      if (alt) {
        return wp.element.createElement("img", {
          className: "card__image",
          src: src,
          alt: alt
        });
      } // No alt set, so let's hide it from screen readers


      return wp.element.createElement("img", {
        className: "card__image",
        src: src,
        alt: "",
        "aria-hidden": "true"
      });
    };

    return wp.element.createElement("div", {
      className: "card"
    }, cardImage(attributes.imageUrl, attributes.imageAlt), wp.element.createElement("div", {
      className: "card__content"
    }, wp.element.createElement("h3", {
      className: "card__title"
    }, attributes.title), wp.element.createElement("div", {
      className: "card__body"
    }, attributes.body)));
  }
});

/***/ }),

/***/ "./blocks/src/block/editor.scss":
/*!**************************************!*\
  !*** ./blocks/src/block/editor.scss ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/block/style.scss":
/*!*************************************!*\
  !*** ./blocks/src/block/style.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./blocks/src/blocks.js":
/*!******************************!*\
  !*** ./blocks/src/blocks.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _block_block_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./block/block.js */ "./blocks/src/block/block.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYmxvY2tzL3NyYy9ibG9jay9ibG9jay5qcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2NrL2VkaXRvci5zY3NzIiwid2VicGFjazovLy8uL2Jsb2Nrcy9zcmMvYmxvY2svc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly8vLi9ibG9ja3Mvc3JjL2Jsb2Nrcy5qcyJdLCJuYW1lcyI6WyJ3cCIsImVkaXRvciIsIlJpY2hUZXh0IiwiTWVkaWFVcGxvYWQiLCJQbGFpblRleHQiLCJyZWdpc3RlckJsb2NrVHlwZSIsImJsb2NrcyIsIkJ1dHRvbiIsImNvbXBvbmVudHMiLCJ0aXRsZSIsImljb24iLCJjYXRlZ29yeSIsImF0dHJpYnV0ZXMiLCJzb3VyY2UiLCJzZWxlY3RvciIsImJvZHkiLCJ0eXBlIiwiaW1hZ2VBbHQiLCJhdHRyaWJ1dGUiLCJpbWFnZVVybCIsImVkaXQiLCJjbGFzc05hbWUiLCJzZXRBdHRyaWJ1dGVzIiwiZ2V0SW1hZ2VCdXR0b24iLCJvcGVuRXZlbnQiLCJtZWRpYSIsImFsdCIsInVybCIsImltYWdlSUQiLCJvcGVuIiwiY29udGVudCIsImlzU2VsZWN0ZWQiLCJzYXZlIiwiY2FyZEltYWdlIiwic3JjIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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bG9ja3MuYnVpbGQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2Jsb2Nrcy9zcmMvYmxvY2tzLmpzXCIpO1xuIiwiY29uc3QgeyBSaWNoVGV4dCwgTWVkaWFVcGxvYWQsIFBsYWluVGV4dCB9ID0gd3AuZWRpdG9yO1xuY29uc3QgeyByZWdpc3RlckJsb2NrVHlwZSB9ID0gd3AuYmxvY2tzO1xuY29uc3QgeyBCdXR0b24gfSA9IHdwLmNvbXBvbmVudHM7XG5cbi8vIEltcG9ydCBvdXIgQ1NTIGZpbGVzXG5pbXBvcnQgJy4vc3R5bGUuc2Nzcyc7XG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuXG5yZWdpc3RlckJsb2NrVHlwZSgnY2FyZC1ibG9jay9tYWluJywgeyAgIFxuICB0aXRsZTogJ0NhcmQnLFxuICBpY29uOiAnaGVhcnQnLFxuICBjYXRlZ29yeTogJ2NvbW1vbicsXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICB0aXRsZToge1xuICAgICAgc291cmNlOiAndGV4dCcsXG4gICAgICBzZWxlY3RvcjogJy5jYXJkX190aXRsZSdcbiAgICB9LFxuICAgIGJvZHk6IHtcbiAgICAgIHR5cGU6ICdhcnJheScsXG4gICAgICBzb3VyY2U6ICdjaGlsZHJlbicsXG4gICAgICBzZWxlY3RvcjogJy5jYXJkX19ib2R5J1xuICAgIH0sXG4gICAgaW1hZ2VBbHQ6IHtcbiAgICAgIGF0dHJpYnV0ZTogJ2FsdCcsXG4gICAgICBzZWxlY3RvcjogJy5jYXJkX19pbWFnZSdcbiAgICB9LFxuICAgIGltYWdlVXJsOiB7XG4gICAgICBhdHRyaWJ1dGU6ICdzcmMnLFxuICAgICAgc2VsZWN0b3I6ICcuY2FyZF9faW1hZ2UnXG4gICAgfVxuICB9LFxuICBlZGl0KHsgYXR0cmlidXRlcywgY2xhc3NOYW1lLCBzZXRBdHRyaWJ1dGVzIH0pIHtcblxuICAgIGNvbnN0IGdldEltYWdlQnV0dG9uID0gKG9wZW5FdmVudCkgPT4ge1xuICAgICAgaWYoYXR0cmlidXRlcy5pbWFnZVVybCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICBzcmM9eyBhdHRyaWJ1dGVzLmltYWdlVXJsIH1cbiAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuRXZlbnQgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2VcIlxuICAgICAgICAgIC8+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbi1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxCdXR0b24gXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eyBvcGVuRXZlbnQgfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidXR0b24gYnV0dG9uLWxhcmdlXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgUGljayBhbiBpbWFnZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICA8TWVkaWFVcGxvYWRcbiAgICAgICAgICBvblNlbGVjdD17IG1lZGlhID0+IHsgc2V0QXR0cmlidXRlcyh7IGltYWdlQWx0OiBtZWRpYS5hbHQsIGltYWdlVXJsOiBtZWRpYS51cmwgfSk7IH0gfVxuICAgICAgICAgIHR5cGU9XCJpbWFnZVwiXG4gICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmltYWdlSUQgfVxuICAgICAgICAgIHJlbmRlcj17ICh7IG9wZW4gfSkgPT4gZ2V0SW1hZ2VCdXR0b24ob3BlbikgfVxuICAgICAgICAvPlxuICAgICAgICA8UGxhaW5UZXh0XG4gICAgICAgICAgb25DaGFuZ2U9eyBjb250ZW50ID0+IHNldEF0dHJpYnV0ZXMoeyB0aXRsZTogY29udGVudCB9KSB9XG4gICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLnRpdGxlIH1cbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIllvdXIgY2FyZCB0aXRsZVwiXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGVhZGluZ1wiXG4gICAgICAgIC8+XG4gICAgICAgIDxSaWNoVGV4dFxuICAgICAgICAgIG9uQ2hhbmdlPXsgY29udGVudCA9PiBzZXRBdHRyaWJ1dGVzKHsgYm9keTogY29udGVudCB9KSB9XG4gICAgICAgICAgdmFsdWU9eyBhdHRyaWJ1dGVzLmJvZHkgfVxuICAgICAgICAgIG11bHRpbGluZT1cInBcIlxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiWW91ciBjYXJkIHRleHRcIlxuICAgICAgICAgIGZvcm1hdHRpbmdDb250cm9scz17IFsnYm9sZCcsICdpdGFsaWMnLCAndW5kZXJsaW5lJ10gfVxuICAgICAgICAgIGlzU2VsZWN0ZWQ9eyBhdHRyaWJ1dGVzLmlzU2VsZWN0ZWQgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgKTtcblxuICB9LFxuXG4gIHNhdmUoeyBhdHRyaWJ1dGVzIH0pIHtcblxuICAgIGNvbnN0IGNhcmRJbWFnZSA9IChzcmMsIGFsdCkgPT4ge1xuICAgICAgaWYoIXNyYykgcmV0dXJuIG51bGw7XG5cbiAgICAgIGlmKGFsdCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgIDxpbWcgXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkX19pbWFnZVwiIFxuICAgICAgICAgICAgc3JjPXsgc3JjIH1cbiAgICAgICAgICAgIGFsdD17IGFsdCB9XG4gICAgICAgICAgLz4gXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIC8vIE5vIGFsdCBzZXQsIHNvIGxldCdzIGhpZGUgaXQgZnJvbSBzY3JlZW4gcmVhZGVyc1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgPGltZyBcbiAgICAgICAgICBjbGFzc05hbWU9XCJjYXJkX19pbWFnZVwiIFxuICAgICAgICAgIHNyYz17IHNyYyB9XG4gICAgICAgICAgYWx0PVwiXCJcbiAgICAgICAgICBhcmlhLWhpZGRlbj1cInRydWVcIlxuICAgICAgICAvPiBcbiAgICAgICk7XG4gICAgfTtcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkXCI+XG4gICAgICAgIHsgY2FyZEltYWdlKGF0dHJpYnV0ZXMuaW1hZ2VVcmwsIGF0dHJpYnV0ZXMuaW1hZ2VBbHQpIH1cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkX19jb250ZW50XCI+XG4gICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImNhcmRfX3RpdGxlXCI+eyBhdHRyaWJ1dGVzLnRpdGxlIH08L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY2FyZF9fYm9keVwiPlxuICAgICAgICAgICAgeyBhdHRyaWJ1dGVzLmJvZHkgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICk7XG4gIH1cbn0pOyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW4iLCJpbXBvcnQgJy4vYmxvY2svYmxvY2suanMnOyJdLCJzb3VyY2VSb290IjoiIn0=