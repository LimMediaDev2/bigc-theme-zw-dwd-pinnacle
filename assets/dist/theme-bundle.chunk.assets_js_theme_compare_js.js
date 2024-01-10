(self["webpackChunkPinnacle"] = self["webpackChunkPinnacle"] || []).push([["assets_js_theme_compare_js"],{

/***/ "./assets/js/theme/compare.js":
/*!************************************!*\
  !*** ./assets/js/theme/compare.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Compare)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Compare = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Compare, _PageManager);
  function Compare() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Compare.prototype;
  _proto.onReady = function onReady() {
    var _this = this;
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context.urls);
    var message = this.context.compareRemoveMessage;
    jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').on('click', '[data-comparison-remove]', function (event) {
      if (_this.context.comparisons.length <= 2) {
        (0,_global_modal__WEBPACK_IMPORTED_MODULE_3__.showAlertModal)(message);
        event.preventDefault();
      }
    });
  };
  return Compare;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/global/compare-products.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/global/compare-products.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/map */ "./node_modules/lodash/map.js");
/* harmony import */ var lodash_map__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_map__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal */ "./assets/js/theme/global/modal.js");




function decrementCounter(counter, item) {
  var index = counter.indexOf(item);
  if (index > -1) {
    counter.splice(index, 1);
  }
}
function incrementCounter(counter, item) {
  counter.push(item);
}
function updateCounterNav(counter, $link, urlContext) {
  if (counter.length !== 0) {
    if (!$link.is('visible')) {
      $link.addClass('show');
    }
    $link.attr('href', urlContext.compare + "/" + counter.join('/'));
    $link.find('span.countPill').html(counter.length);
  } else {
    $link.removeClass('show');
  }
}
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(urlContext) {
  var compareCounter = [];
  var $compareLink = jquery__WEBPACK_IMPORTED_MODULE_2___default()('a[data-compare-nav]');
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').on('compareReset', function () {
    var $checked = jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').find('input[name="products\[\]"]:checked');
    compareCounter = $checked.length ? lodash_map__WEBPACK_IMPORTED_MODULE_0___default()($checked, function (element) {
      return element.value;
    }) : [];
    updateCounterNav(compareCounter, $compareLink, urlContext);
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').triggerHandler('compareReset');
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').on('click', '[data-compare-id]', function (event) {
    var product = event.currentTarget.value;
    var $clickedCompareLink = jquery__WEBPACK_IMPORTED_MODULE_2___default()('a[data-compare-nav]');
    if (event.currentTarget.checked) {
      incrementCounter(compareCounter, product);
    } else {
      decrementCounter(compareCounter, product);
    }
    updateCounterNav(compareCounter, $clickedCompareLink, urlContext);
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').on('submit', '[data-product-compare]', function (event) {
    var $this = jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.currentTarget);
    var productsToCompare = $this.find('input[name="products\[\]"]:checked');
    if (productsToCompare.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_3__.showAlertModal)('You must select at least two products to compare');
      event.preventDefault();
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').on('click', 'a[data-compare-nav]', function () {
    var $clickedCheckedInput = jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').find('input[name="products\[\]"]:checked');
    if ($clickedCheckedInput.length <= 1) {
      (0,_modal__WEBPACK_IMPORTED_MODULE_3__.showAlertModal)('You must select at least two products to compare');
      return false;
    }
  });
}

/***/ }),

/***/ "./node_modules/lodash/map.js":
/*!************************************!*\
  !*** ./node_modules/lodash/map.js ***!
  \************************************/
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb21wYXJlX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2xCO0FBQ3lCO0FBQ1E7QUFBQSxJQUVuQ0ksT0FBTywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLE9BQUEsRUFBQUMsWUFBQTtFQUFBLFNBQUFELFFBQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFFLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUEsSUFBQUMsTUFBQSxHQUFBTCxPQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUN4QkUsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUFBLElBQUFDLEtBQUE7SUFDTlQsb0VBQWUsQ0FBQyxJQUFJLENBQUNVLE9BQU8sQ0FBQ0MsSUFBSSxDQUFDO0lBRWxDLElBQU1DLE9BQU8sR0FBRyxJQUFJLENBQUNGLE9BQU8sQ0FBQ0csb0JBQW9CO0lBRWpEZiw2Q0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDZ0IsRUFBRSxDQUFDLE9BQU8sRUFBRSwwQkFBMEIsRUFBRSxVQUFBQyxLQUFLLEVBQUk7TUFDdkQsSUFBSU4sS0FBSSxDQUFDQyxPQUFPLENBQUNNLFdBQVcsQ0FBQ0MsTUFBTSxJQUFJLENBQUMsRUFBRTtRQUN0Q2xCLDZEQUFjLENBQUNhLE9BQU8sQ0FBQztRQUN2QkcsS0FBSyxDQUFDRyxjQUFjLENBQUMsQ0FBQztNQUMxQjtJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUFBakIsT0FBQTtBQUFBLEVBWmdDSixxREFBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0x6QjtBQUVrQjtBQUV6QyxTQUFTdUIsZ0JBQWdCQSxDQUFDQyxPQUFPLEVBQUVDLElBQUksRUFBRTtFQUNyQyxJQUFNQyxLQUFLLEdBQUdGLE9BQU8sQ0FBQ0csT0FBTyxDQUFDRixJQUFJLENBQUM7RUFFbkMsSUFBSUMsS0FBSyxHQUFHLENBQUMsQ0FBQyxFQUFFO0lBQ1pGLE9BQU8sQ0FBQ0ksTUFBTSxDQUFDRixLQUFLLEVBQUUsQ0FBQyxDQUFDO0VBQzVCO0FBQ0o7QUFFQSxTQUFTRyxnQkFBZ0JBLENBQUNMLE9BQU8sRUFBRUMsSUFBSSxFQUFFO0VBQ3JDRCxPQUFPLENBQUNNLElBQUksQ0FBQ0wsSUFBSSxDQUFDO0FBQ3RCO0FBRUEsU0FBU00sZ0JBQWdCQSxDQUFDUCxPQUFPLEVBQUVRLEtBQUssRUFBRUMsVUFBVSxFQUFFO0VBQ2xELElBQUlULE9BQU8sQ0FBQ0osTUFBTSxLQUFLLENBQUMsRUFBRTtJQUN0QixJQUFJLENBQUNZLEtBQUssQ0FBQ0UsRUFBRSxDQUFDLFNBQVMsQ0FBQyxFQUFFO01BQ3RCRixLQUFLLENBQUNHLFFBQVEsQ0FBQyxNQUFNLENBQUM7SUFDMUI7SUFDQUgsS0FBSyxDQUFDSSxJQUFJLENBQUMsTUFBTSxFQUFLSCxVQUFVLENBQUNJLE9BQU8sU0FBSWIsT0FBTyxDQUFDYyxJQUFJLENBQUMsR0FBRyxDQUFHLENBQUM7SUFDaEVOLEtBQUssQ0FBQ08sSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUNDLElBQUksQ0FBQ2hCLE9BQU8sQ0FBQ0osTUFBTSxDQUFDO0VBQ3JELENBQUMsTUFBTTtJQUNIWSxLQUFLLENBQUNTLFdBQVcsQ0FBQyxNQUFNLENBQUM7RUFDN0I7QUFDSjtBQUVBLDZCQUFlLG9DQUFVUixVQUFVLEVBQUU7RUFDakMsSUFBSVMsY0FBYyxHQUFHLEVBQUU7RUFFdkIsSUFBTUMsWUFBWSxHQUFHMUMsNkNBQUMsQ0FBQyxxQkFBcUIsQ0FBQztFQUU3Q0EsNkNBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ2dCLEVBQUUsQ0FBQyxjQUFjLEVBQUUsWUFBTTtJQUMvQixJQUFNMkIsUUFBUSxHQUFHM0MsNkNBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3NDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUVyRUcsY0FBYyxHQUFHRSxRQUFRLENBQUN4QixNQUFNLEdBQUd5QixpREFBQSxDQUFNRCxRQUFRLEVBQUUsVUFBQUUsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FBQ0MsS0FBSztJQUFBLEVBQUMsR0FBRyxFQUFFO0lBQ2pGaEIsZ0JBQWdCLENBQUNXLGNBQWMsRUFBRUMsWUFBWSxFQUFFVixVQUFVLENBQUM7RUFDOUQsQ0FBQyxDQUFDO0VBRUZoQyw2Q0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDK0MsY0FBYyxDQUFDLGNBQWMsQ0FBQztFQUV4Qy9DLDZDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNnQixFQUFFLENBQUMsT0FBTyxFQUFFLG1CQUFtQixFQUFFLFVBQUFDLEtBQUssRUFBSTtJQUNoRCxJQUFNK0IsT0FBTyxHQUFHL0IsS0FBSyxDQUFDZ0MsYUFBYSxDQUFDSCxLQUFLO0lBQ3pDLElBQU1JLG1CQUFtQixHQUFHbEQsNkNBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUVwRCxJQUFJaUIsS0FBSyxDQUFDZ0MsYUFBYSxDQUFDRSxPQUFPLEVBQUU7TUFDN0J2QixnQkFBZ0IsQ0FBQ2EsY0FBYyxFQUFFTyxPQUFPLENBQUM7SUFDN0MsQ0FBQyxNQUFNO01BQ0gxQixnQkFBZ0IsQ0FBQ21CLGNBQWMsRUFBRU8sT0FBTyxDQUFDO0lBQzdDO0lBRUFsQixnQkFBZ0IsQ0FBQ1csY0FBYyxFQUFFUyxtQkFBbUIsRUFBRWxCLFVBQVUsQ0FBQztFQUNyRSxDQUFDLENBQUM7RUFFRmhDLDZDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNnQixFQUFFLENBQUMsUUFBUSxFQUFFLHdCQUF3QixFQUFFLFVBQUFDLEtBQUssRUFBSTtJQUN0RCxJQUFNbUMsS0FBSyxHQUFHcEQsNkNBQUMsQ0FBQ2lCLEtBQUssQ0FBQ2dDLGFBQWEsQ0FBQztJQUNwQyxJQUFNSSxpQkFBaUIsR0FBR0QsS0FBSyxDQUFDZCxJQUFJLENBQUMsb0NBQW9DLENBQUM7SUFFMUUsSUFBSWUsaUJBQWlCLENBQUNsQyxNQUFNLElBQUksQ0FBQyxFQUFFO01BQy9CbEIsc0RBQWMsQ0FBQyxrREFBa0QsQ0FBQztNQUNsRWdCLEtBQUssQ0FBQ0csY0FBYyxDQUFDLENBQUM7SUFDMUI7RUFDSixDQUFDLENBQUM7RUFFRnBCLDZDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNnQixFQUFFLENBQUMsT0FBTyxFQUFFLHFCQUFxQixFQUFFLFlBQU07SUFDL0MsSUFBTXNDLG9CQUFvQixHQUFHdEQsNkNBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQ3NDLElBQUksQ0FBQyxvQ0FBb0MsQ0FBQztJQUVqRixJQUFJZ0Isb0JBQW9CLENBQUNuQyxNQUFNLElBQUksQ0FBQyxFQUFFO01BQ2xDbEIsc0RBQWMsQ0FBQyxrREFBa0QsQ0FBQztNQUNsRSxPQUFPLEtBQUs7SUFDaEI7RUFDSixDQUFDLENBQUM7QUFDTjs7Ozs7Ozs7OztBQ3pFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxPQUFPO0FBQ2xCLFdBQVcsVUFBVTtBQUNyQixhQUFhLE9BQU87QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUGlubmFjbGUvLi9hc3NldHMvanMvdGhlbWUvY29tcGFyZS5qcyIsIndlYnBhY2s6Ly9QaW5uYWNsZS8uL2Fzc2V0cy9qcy90aGVtZS9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cy5qcyIsIndlYnBhY2s6Ly9QaW5uYWNsZS8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvbWFwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IHsgc2hvd0FsZXJ0TW9kYWwgfSBmcm9tICcuL2dsb2JhbC9tb2RhbCc7XG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb21wYXJlIGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG5cbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHRoaXMuY29udGV4dC5jb21wYXJlUmVtb3ZlTWVzc2FnZTtcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgJ1tkYXRhLWNvbXBhcmlzb24tcmVtb3ZlXScsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbnRleHQuY29tcGFyaXNvbnMubGVuZ3RoIDw9IDIpIHtcbiAgICAgICAgICAgICAgICBzaG93QWxlcnRNb2RhbChtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcbmltcG9ydCB7IHNob3dBbGVydE1vZGFsIH0gZnJvbSAnLi9tb2RhbCc7XG5cbmZ1bmN0aW9uIGRlY3JlbWVudENvdW50ZXIoY291bnRlciwgaXRlbSkge1xuICAgIGNvbnN0IGluZGV4ID0gY291bnRlci5pbmRleE9mKGl0ZW0pO1xuXG4gICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgY291bnRlci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5jcmVtZW50Q291bnRlcihjb3VudGVyLCBpdGVtKSB7XG4gICAgY291bnRlci5wdXNoKGl0ZW0pO1xufVxuXG5mdW5jdGlvbiB1cGRhdGVDb3VudGVyTmF2KGNvdW50ZXIsICRsaW5rLCB1cmxDb250ZXh0KSB7XG4gICAgaWYgKGNvdW50ZXIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIGlmICghJGxpbmsuaXMoJ3Zpc2libGUnKSkge1xuICAgICAgICAgICAgJGxpbmsuYWRkQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgfVxuICAgICAgICAkbGluay5hdHRyKCdocmVmJywgYCR7dXJsQ29udGV4dC5jb21wYXJlfS8ke2NvdW50ZXIuam9pbignLycpfWApO1xuICAgICAgICAkbGluay5maW5kKCdzcGFuLmNvdW50UGlsbCcpLmh0bWwoY291bnRlci5sZW5ndGgpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgICRsaW5rLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAodXJsQ29udGV4dCkge1xuICAgIGxldCBjb21wYXJlQ291bnRlciA9IFtdO1xuXG4gICAgY29uc3QgJGNvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgJCgnYm9keScpLm9uKCdjb21wYXJlUmVzZXQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0ICRjaGVja2VkID0gJCgnYm9keScpLmZpbmQoJ2lucHV0W25hbWU9XCJwcm9kdWN0c1xcW1xcXVwiXTpjaGVja2VkJyk7XG5cbiAgICAgICAgY29tcGFyZUNvdW50ZXIgPSAkY2hlY2tlZC5sZW5ndGggPyBfLm1hcCgkY2hlY2tlZCwgZWxlbWVudCA9PiBlbGVtZW50LnZhbHVlKSA6IFtdO1xuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY29tcGFyZUxpbmssIHVybENvbnRleHQpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcblxuICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtY29tcGFyZS1pZF0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0IHByb2R1Y3QgPSBldmVudC5jdXJyZW50VGFyZ2V0LnZhbHVlO1xuICAgICAgICBjb25zdCAkY2xpY2tlZENvbXBhcmVMaW5rID0gJCgnYVtkYXRhLWNvbXBhcmUtbmF2XScpO1xuXG4gICAgICAgIGlmIChldmVudC5jdXJyZW50VGFyZ2V0LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIGluY3JlbWVudENvdW50ZXIoY29tcGFyZUNvdW50ZXIsIHByb2R1Y3QpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZGVjcmVtZW50Q291bnRlcihjb21wYXJlQ291bnRlciwgcHJvZHVjdCk7XG4gICAgICAgIH1cblxuICAgICAgICB1cGRhdGVDb3VudGVyTmF2KGNvbXBhcmVDb3VudGVyLCAkY2xpY2tlZENvbXBhcmVMaW5rLCB1cmxDb250ZXh0KTtcbiAgICB9KTtcblxuICAgICQoJ2JvZHknKS5vbignc3VibWl0JywgJ1tkYXRhLXByb2R1Y3QtY29tcGFyZV0nLCBldmVudCA9PiB7XG4gICAgICAgIGNvbnN0ICR0aGlzID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgY29uc3QgcHJvZHVjdHNUb0NvbXBhcmUgPSAkdGhpcy5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmIChwcm9kdWN0c1RvQ29tcGFyZS5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLm9uKCdjbGljaycsICdhW2RhdGEtY29tcGFyZS1uYXZdJywgKCkgPT4ge1xuICAgICAgICBjb25zdCAkY2xpY2tlZENoZWNrZWRJbnB1dCA9ICQoJ2JvZHknKS5maW5kKCdpbnB1dFtuYW1lPVwicHJvZHVjdHNcXFtcXF1cIl06Y2hlY2tlZCcpO1xuXG4gICAgICAgIGlmICgkY2xpY2tlZENoZWNrZWRJbnB1dC5sZW5ndGggPD0gMSkge1xuICAgICAgICAgICAgc2hvd0FsZXJ0TW9kYWwoJ1lvdSBtdXN0IHNlbGVjdCBhdCBsZWFzdCB0d28gcHJvZHVjdHMgdG8gY29tcGFyZScpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfSk7XG59XG4iLCIvKipcbiAqIEEgc3BlY2lhbGl6ZWQgdmVyc2lvbiBvZiBgXy5tYXBgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvciBpdGVyYXRlZVxuICogc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyB0aGUgbmV3IG1hcHBlZCBhcnJheS5cbiAqL1xuZnVuY3Rpb24gYXJyYXlNYXAoYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGgsXG4gICAgICByZXN1bHQgPSBBcnJheShsZW5ndGgpO1xuXG4gIHdoaWxlICgrK2luZGV4IDwgbGVuZ3RoKSB7XG4gICAgcmVzdWx0W2luZGV4XSA9IGl0ZXJhdGVlKGFycmF5W2luZGV4XSwgaW5kZXgsIGFycmF5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGFycmF5TWFwO1xuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiJCIsInNob3dBbGVydE1vZGFsIiwiY29tcGFyZVByb2R1Y3RzIiwiQ29tcGFyZSIsIl9QYWdlTWFuYWdlciIsIl9pbmhlcml0c0xvb3NlIiwiYXBwbHkiLCJhcmd1bWVudHMiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMiLCJjb250ZXh0IiwidXJscyIsIm1lc3NhZ2UiLCJjb21wYXJlUmVtb3ZlTWVzc2FnZSIsIm9uIiwiZXZlbnQiLCJjb21wYXJpc29ucyIsImxlbmd0aCIsInByZXZlbnREZWZhdWx0IiwiZGVmYXVsdCIsImRlY3JlbWVudENvdW50ZXIiLCJjb3VudGVyIiwiaXRlbSIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsImluY3JlbWVudENvdW50ZXIiLCJwdXNoIiwidXBkYXRlQ291bnRlck5hdiIsIiRsaW5rIiwidXJsQ29udGV4dCIsImlzIiwiYWRkQ2xhc3MiLCJhdHRyIiwiY29tcGFyZSIsImpvaW4iLCJmaW5kIiwiaHRtbCIsInJlbW92ZUNsYXNzIiwiY29tcGFyZUNvdW50ZXIiLCIkY29tcGFyZUxpbmsiLCIkY2hlY2tlZCIsIl9tYXAiLCJlbGVtZW50IiwidmFsdWUiLCJ0cmlnZ2VySGFuZGxlciIsInByb2R1Y3QiLCJjdXJyZW50VGFyZ2V0IiwiJGNsaWNrZWRDb21wYXJlTGluayIsImNoZWNrZWQiLCIkdGhpcyIsInByb2R1Y3RzVG9Db21wYXJlIiwiJGNsaWNrZWRDaGVja2VkSW5wdXQiXSwic291cmNlUm9vdCI6IiJ9
