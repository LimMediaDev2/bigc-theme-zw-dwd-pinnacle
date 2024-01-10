"use strict";
(self["webpackChunkPinnacle"] = self["webpackChunkPinnacle"] || []).push([["assets_js_theme_contact-us_js"],{

/***/ "./assets/js/theme/contact-us.js":
/*!***************************************!*\
  !*** ./assets/js/theme/contact-us.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ContactUs)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ContactUs = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(ContactUs, _PageManager);
  function ContactUs() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = ContactUs.prototype;
  _proto.onReady = function onReady() {
    this.registerContactFormValidation();
  };
  _proto.registerContactFormValidation = function registerContactFormValidation() {
    var formSelector = 'form[data-contact-form]';
    var contactUsValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_2__["default"])({
      submit: formSelector + " input[type=\"submit\"]"
    });
    var $contactForm = jquery__WEBPACK_IMPORTED_MODULE_3___default()(formSelector);
    contactUsValidator.add([{
      selector: formSelector + " input[name=\"contact_email\"]",
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.contactEmail
    }, {
      selector: formSelector + " textarea[name=\"contact_question\"]",
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_4__["default"].notEmpty(val);
        cb(result);
      },
      errorMessage: this.context.contactQuestion
    }]);
    $contactForm.on('submit', function (event) {
      contactUsValidator.performCheck();
      if (contactUsValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  return ContactUs;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jb250YWN0LXVzX2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1Y7QUFDUjtBQUNtQjtBQUFBLElBRXJCSSxTQUFTLDBCQUFBQyxZQUFBO0VBQUFDLGNBQUEsQ0FBQUYsU0FBQSxFQUFBQyxZQUFBO0VBQUEsU0FBQUQsVUFBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUUsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQSxJQUFBQyxNQUFBLEdBQUFMLFNBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQzFCRSxPQUFPLEdBQVAsU0FBQUEsUUFBQSxFQUFVO0lBQ04sSUFBSSxDQUFDQyw2QkFBNkIsQ0FBQyxDQUFDO0VBQ3hDLENBQUM7RUFBQUgsTUFBQSxDQUVERyw2QkFBNkIsR0FBN0IsU0FBQUEsOEJBQUEsRUFBZ0M7SUFDNUIsSUFBTUMsWUFBWSxHQUFHLHlCQUF5QjtJQUM5QyxJQUFNQyxrQkFBa0IsR0FBR2IsdURBQUcsQ0FBQztNQUMzQmMsTUFBTSxFQUFLRixZQUFZO0lBQzNCLENBQUMsQ0FBQztJQUNGLElBQU1HLFlBQVksR0FBR2QsNkNBQUMsQ0FBQ1csWUFBWSxDQUFDO0lBRXBDQyxrQkFBa0IsQ0FBQ0csR0FBRyxDQUFDLENBQ25CO01BQ0lDLFFBQVEsRUFBS0wsWUFBWSxtQ0FBOEI7TUFDdkRNLFFBQVEsRUFBRSxTQUFBQSxTQUFDQyxFQUFFLEVBQUVDLEdBQUcsRUFBSztRQUNuQixJQUFNQyxNQUFNLEdBQUduQiw0REFBSyxDQUFDb0IsS0FBSyxDQUFDRixHQUFHLENBQUM7UUFFL0JELEVBQUUsQ0FBQ0UsTUFBTSxDQUFDO01BQ2QsQ0FBQztNQUNERSxZQUFZLEVBQUUsSUFBSSxDQUFDQyxPQUFPLENBQUNDO0lBQy9CLENBQUMsRUFDRDtNQUNJUixRQUFRLEVBQUtMLFlBQVkseUNBQW9DO01BQzdETSxRQUFRLEVBQUUsU0FBQUEsU0FBQ0MsRUFBRSxFQUFFQyxHQUFHLEVBQUs7UUFDbkIsSUFBTUMsTUFBTSxHQUFHbkIsNERBQUssQ0FBQ3dCLFFBQVEsQ0FBQ04sR0FBRyxDQUFDO1FBRWxDRCxFQUFFLENBQUNFLE1BQU0sQ0FBQztNQUNkLENBQUM7TUFDREUsWUFBWSxFQUFFLElBQUksQ0FBQ0MsT0FBTyxDQUFDRztJQUMvQixDQUFDLENBQ0osQ0FBQztJQUVGWixZQUFZLENBQUNhLEVBQUUsQ0FBQyxRQUFRLEVBQUUsVUFBQUMsS0FBSyxFQUFJO01BQy9CaEIsa0JBQWtCLENBQUNpQixZQUFZLENBQUMsQ0FBQztNQUVqQyxJQUFJakIsa0JBQWtCLENBQUNrQixNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUU7UUFDcEM7TUFDSjtNQUVBRixLQUFLLENBQUNHLGNBQWMsQ0FBQyxDQUFDO0lBQzFCLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQSxPQUFBN0IsU0FBQTtBQUFBLEVBMUNrQ0oscURBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaW5uYWNsZS8uL2Fzc2V0cy9qcy90aGVtZS9jb250YWN0LXVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgbm9kIGZyb20gJy4vY29tbW9uL25vZCc7XG5pbXBvcnQgJCBmcm9tICdqcXVlcnknO1xuaW1wb3J0IGZvcm1zIGZyb20gJy4vY29tbW9uL21vZGVscy9mb3Jtcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbnRhY3RVcyBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBvblJlYWR5KCkge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyQ29udGFjdEZvcm1WYWxpZGF0aW9uKCk7XG4gICAgfVxuXG4gICAgcmVnaXN0ZXJDb250YWN0Rm9ybVZhbGlkYXRpb24oKSB7XG4gICAgICAgIGNvbnN0IGZvcm1TZWxlY3RvciA9ICdmb3JtW2RhdGEtY29udGFjdC1mb3JtXSc7XG4gICAgICAgIGNvbnN0IGNvbnRhY3RVc1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke2Zvcm1TZWxlY3Rvcn0gaW5wdXRbdHlwZT1cInN1Ym1pdFwiXWAsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCAkY29udGFjdEZvcm0gPSAkKGZvcm1TZWxlY3Rvcik7XG5cbiAgICAgICAgY29udGFjdFVzVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke2Zvcm1TZWxlY3Rvcn0gaW5wdXRbbmFtZT1cImNvbnRhY3RfZW1haWxcIl1gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmb3Jtcy5lbWFpbCh2YWwpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5jb250YWN0RW1haWwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHtmb3JtU2VsZWN0b3J9IHRleHRhcmVhW25hbWU9XCJjb250YWN0X3F1ZXN0aW9uXCJdYCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMubm90RW1wdHkodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuY29udGFjdFF1ZXN0aW9uLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG5cbiAgICAgICAgJGNvbnRhY3RGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb250YWN0VXNWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG5cbiAgICAgICAgICAgIGlmIChjb250YWN0VXNWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsiUGFnZU1hbmFnZXIiLCJub2QiLCIkIiwiZm9ybXMiLCJDb250YWN0VXMiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsInJlZ2lzdGVyQ29udGFjdEZvcm1WYWxpZGF0aW9uIiwiZm9ybVNlbGVjdG9yIiwiY29udGFjdFVzVmFsaWRhdG9yIiwic3VibWl0IiwiJGNvbnRhY3RGb3JtIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwicmVzdWx0IiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJjb250ZXh0IiwiY29udGFjdEVtYWlsIiwibm90RW1wdHkiLCJjb250YWN0UXVlc3Rpb24iLCJvbiIsImV2ZW50IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwicHJldmVudERlZmF1bHQiLCJkZWZhdWx0Il0sInNvdXJjZVJvb3QiOiIifQ==
