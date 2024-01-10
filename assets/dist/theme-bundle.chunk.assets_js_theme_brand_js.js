"use strict";
(self["webpackChunkPinnacle"] = self["webpackChunkPinnacle"] || []).push([["assets_js_theme_brand_js"],{

/***/ "./assets/js/theme/brand.js":
/*!**********************************!*\
  !*** ./assets/js/theme/brand.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Brand)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Brand = /*#__PURE__*/function (_CatalogPage) {
  _inheritsLoose(Brand, _CatalogPage);
  function Brand() {
    return _CatalogPage.apply(this, arguments) || this;
  }
  var _proto = Brand.prototype;
  _proto.onReady = function onReady() {
    (0,_global_compare_products__WEBPACK_IMPORTED_MODULE_4__["default"])(this.context.urls);
    if (jquery__WEBPACK_IMPORTED_MODULE_3___default()('#facetedSearch').length > 0) {
      this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_1__.hooks.on('sortBy-submitted', this.onSortBySubmit);
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    var $productListingContainer = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#product-listing-container');
    var $facetedSearchContainer = jquery__WEBPACK_IMPORTED_MODULE_3___default()('#faceted-search-container');
    var productsPerPage = this.context.brandProductsPerPage;
    var requestOptions = {
      template: {
        productListing: 'brand/product-listing',
        sidebar: 'brand/sidebar'
      },
      config: {
        shop_by_brand: true,
        brand: {
          products: {
            limit: productsPerPage
          }
        }
      },
      showMore: 'brand/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_5__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('body').triggerHandler('compareReset');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('html, body').animate({
        scrollTop: 0
      }, 100);
    });
  };
  return Brand;
}(_catalog__WEBPACK_IMPORTED_MODULE_2__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9icmFuZF9qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDZjtBQUNiO0FBQ2lDO0FBQ0o7QUFBQSxJQUUvQkssS0FBSywwQkFBQUMsWUFBQTtFQUFBQyxjQUFBLENBQUFGLEtBQUEsRUFBQUMsWUFBQTtFQUFBLFNBQUFELE1BQUE7SUFBQSxPQUFBQyxZQUFBLENBQUFFLEtBQUEsT0FBQUMsU0FBQTtFQUFBO0VBQUEsSUFBQUMsTUFBQSxHQUFBTCxLQUFBLENBQUFNLFNBQUE7RUFBQUQsTUFBQSxDQUN0QkUsT0FBTyxHQUFQLFNBQUFBLFFBQUEsRUFBVTtJQUNOVCxvRUFBZSxDQUFDLElBQUksQ0FBQ1UsT0FBTyxDQUFDQyxJQUFJLENBQUM7SUFFbEMsSUFBSVosNkNBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDYSxNQUFNLEdBQUcsQ0FBQyxFQUFFO01BQ2hDLElBQUksQ0FBQ0MsaUJBQWlCLENBQUMsQ0FBQztJQUM1QixDQUFDLE1BQU07TUFDSCxJQUFJLENBQUNDLGNBQWMsR0FBRyxJQUFJLENBQUNBLGNBQWMsQ0FBQ0MsSUFBSSxDQUFDLElBQUksQ0FBQztNQUNwRGxCLDZEQUFLLENBQUNtQixFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDRixjQUFjLENBQUM7SUFDckQ7RUFDSixDQUFDO0VBQUFQLE1BQUEsQ0FFRE0saUJBQWlCLEdBQWpCLFNBQUFBLGtCQUFBLEVBQW9CO0lBQ2hCLElBQU1JLHdCQUF3QixHQUFHbEIsNkNBQUMsQ0FBQyw0QkFBNEIsQ0FBQztJQUNoRSxJQUFNbUIsdUJBQXVCLEdBQUduQiw2Q0FBQyxDQUFDLDJCQUEyQixDQUFDO0lBQzlELElBQU1vQixlQUFlLEdBQUcsSUFBSSxDQUFDVCxPQUFPLENBQUNVLG9CQUFvQjtJQUN6RCxJQUFNQyxjQUFjLEdBQUc7TUFDbkJDLFFBQVEsRUFBRTtRQUNOQyxjQUFjLEVBQUUsdUJBQXVCO1FBQ3ZDQyxPQUFPLEVBQUU7TUFDYixDQUFDO01BQ0RDLE1BQU0sRUFBRTtRQUNKQyxhQUFhLEVBQUUsSUFBSTtRQUNuQkMsS0FBSyxFQUFFO1VBQ0hDLFFBQVEsRUFBRTtZQUNOQyxLQUFLLEVBQUVWO1VBQ1g7UUFDSjtNQUNKLENBQUM7TUFDRFcsUUFBUSxFQUFFO0lBQ2QsQ0FBQztJQUVELElBQUksQ0FBQ0MsYUFBYSxHQUFHLElBQUk5Qiw4REFBYSxDQUFDb0IsY0FBYyxFQUFFLFVBQUNXLE9BQU8sRUFBSztNQUNoRWYsd0JBQXdCLENBQUNnQixJQUFJLENBQUNELE9BQU8sQ0FBQ1QsY0FBYyxDQUFDO01BQ3JETCx1QkFBdUIsQ0FBQ2UsSUFBSSxDQUFDRCxPQUFPLENBQUNSLE9BQU8sQ0FBQztNQUU3Q3pCLDZDQUFDLENBQUMsTUFBTSxDQUFDLENBQUNtQyxjQUFjLENBQUMsY0FBYyxDQUFDO01BRXhDbkMsNkNBQUMsQ0FBQyxZQUFZLENBQUMsQ0FBQ29DLE9BQU8sQ0FBQztRQUNwQkMsU0FBUyxFQUFFO01BQ2YsQ0FBQyxFQUFFLEdBQUcsQ0FBQztJQUNYLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUFBbEMsS0FBQTtBQUFBLEVBMUM4QkosZ0RBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaW5uYWNsZS8uL2Fzc2V0cy9qcy90aGVtZS9icmFuZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBob29rcyB9IGZyb20gJ0BiaWdjb21tZXJjZS9zdGVuY2lsLXV0aWxzJztcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBjb21wYXJlUHJvZHVjdHMgZnJvbSAnLi9nbG9iYWwvY29tcGFyZS1wcm9kdWN0cyc7XG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJyYW5kIGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIGNvbXBhcmVQcm9kdWN0cyh0aGlzLmNvbnRleHQudXJscyk7XG5cbiAgICAgICAgaWYgKCQoJyNmYWNldGVkU2VhcmNoJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5vblNvcnRCeVN1Ym1pdCA9IHRoaXMub25Tb3J0QnlTdWJtaXQuYmluZCh0aGlzKTtcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBpbml0RmFjZXRlZFNlYXJjaCgpIHtcbiAgICAgICAgY29uc3QgJHByb2R1Y3RMaXN0aW5nQ29udGFpbmVyID0gJCgnI3Byb2R1Y3QtbGlzdGluZy1jb250YWluZXInKTtcbiAgICAgICAgY29uc3QgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIgPSAkKCcjZmFjZXRlZC1zZWFyY2gtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5icmFuZFByb2R1Y3RzUGVyUGFnZTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnYnJhbmQvcHJvZHVjdC1saXN0aW5nJyxcbiAgICAgICAgICAgICAgICBzaWRlYmFyOiAnYnJhbmQvc2lkZWJhcicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY29uZmlnOiB7XG4gICAgICAgICAgICAgICAgc2hvcF9ieV9icmFuZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBicmFuZDoge1xuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0czoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNob3dNb3JlOiAnYnJhbmQvc2hvdy1tb3JlJyxcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLmZhY2V0ZWRTZWFyY2ggPSBuZXcgRmFjZXRlZFNlYXJjaChyZXF1ZXN0T3B0aW9ucywgKGNvbnRlbnQpID0+IHtcbiAgICAgICAgICAgICRwcm9kdWN0TGlzdGluZ0NvbnRhaW5lci5odG1sKGNvbnRlbnQucHJvZHVjdExpc3RpbmcpO1xuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xuXG4gICAgICAgICAgICAkKCdib2R5JykudHJpZ2dlckhhbmRsZXIoJ2NvbXBhcmVSZXNldCcpO1xuXG4gICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiAwLFxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbImhvb2tzIiwiQ2F0YWxvZ1BhZ2UiLCIkIiwiY29tcGFyZVByb2R1Y3RzIiwiRmFjZXRlZFNlYXJjaCIsIkJyYW5kIiwiX0NhdGFsb2dQYWdlIiwiX2luaGVyaXRzTG9vc2UiLCJhcHBseSIsImFyZ3VtZW50cyIsIl9wcm90byIsInByb3RvdHlwZSIsIm9uUmVhZHkiLCJjb250ZXh0IiwidXJscyIsImxlbmd0aCIsImluaXRGYWNldGVkU2VhcmNoIiwib25Tb3J0QnlTdWJtaXQiLCJiaW5kIiwib24iLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImJyYW5kUHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJ0ZW1wbGF0ZSIsInByb2R1Y3RMaXN0aW5nIiwic2lkZWJhciIsImNvbmZpZyIsInNob3BfYnlfYnJhbmQiLCJicmFuZCIsInByb2R1Y3RzIiwibGltaXQiLCJzaG93TW9yZSIsImZhY2V0ZWRTZWFyY2giLCJjb250ZW50IiwiaHRtbCIsInRyaWdnZXJIYW5kbGVyIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsImRlZmF1bHQiXSwic291cmNlUm9vdCI6IiJ9
