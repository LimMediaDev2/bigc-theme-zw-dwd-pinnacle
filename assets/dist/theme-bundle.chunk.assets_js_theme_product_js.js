"use strict";
(self["webpackChunkPinnacle"] = self["webpackChunkPinnacle"] || []).push([["assets_js_theme_product_js"],{

/***/ "./assets/js/theme/common/form-utils.js":
/*!**********************************************!*\
  !*** ./assets/js/theme/common/form-utils.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Validators: () => (/* binding */ Validators),
/* harmony export */   classifyForm: () => (/* binding */ classifyForm),
/* harmony export */   insertStateHiddenField: () => (/* binding */ insertStateHiddenField)
/* harmony export */ });
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/capitalize */ "./node_modules/lodash/capitalize.js");
/* harmony import */ var lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_capitalize__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/camelCase */ "./node_modules/lodash/camelCase.js");
/* harmony import */ var lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_camelCase__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/includes */ "./node_modules/lodash/includes.js");
/* harmony import */ var lodash_includes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_includes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.regexp.match.js */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.regexp.constructor.js */ "./node_modules/core-js/modules/es6.regexp.constructor.js");
/* harmony import */ var core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _nod__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _models_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./models/forms */ "./assets/js/theme/common/models/forms.js");










var inputTagNames = ['input', 'select', 'textarea'];

/**
 * Apply class name to an input element on its type
 * @param {object} input
 * @param {string} formFieldClass
 * @return {object} Element itself
 */
function classifyInput(input, formFieldClass) {
  var $input = jquery__WEBPACK_IMPORTED_MODULE_7___default()(input);
  var $formField = $input.parent("." + formFieldClass);
  var tagName = $input.prop('tagName').toLowerCase();
  var className = formFieldClass + "--" + tagName;
  var specificClassName;

  // Input can be text/checkbox/radio etc...
  if (tagName === 'input') {
    var inputType = $input.prop('type');
    if (lodash_includes__WEBPACK_IMPORTED_MODULE_2___default()(['radio', 'checkbox', 'submit'], inputType)) {
      // ie: .form-field--checkbox, .form-field--radio
      className = formFieldClass + "--" + lodash_camelCase__WEBPACK_IMPORTED_MODULE_1___default()(inputType);
    } else {
      // ie: .form-field--input .form-field--inputText
      specificClassName = "" + className + lodash_capitalize__WEBPACK_IMPORTED_MODULE_0___default()(inputType);
    }
  }

  // Apply class modifier
  return $formField.addClass(className).addClass(specificClassName);
}

/**
 * Apply class name to each input element in a form based on its type
 * @example
 * // Before
 * <form id="form">
 *     <div class="form-field">
 *         <input type="text">
 *     </div>
 *     <div class="form-field">
 *         <select>...</select>
 *     </div>
 * </form>
 *
 * classifyForm('#form', { formFieldClass: 'form-field' });
 *
 * // After
 * <div class="form-field form-field--input form-field--inputText">...</div>
 * <div class="form-field form-field--select">...</div>
 *
 * @param {string|object} formSelector - selector or element
 * @param {object} options
 * @return {jQuery} Element itself
 */
function classifyForm(formSelector, options) {
  if (options === void 0) {
    options = {};
  }
  var $form = jquery__WEBPACK_IMPORTED_MODULE_7___default()(formSelector);
  var $inputs = $form.find(inputTagNames.join(', '));

  // Obtain options
  var _options = options,
    _options$formFieldCla = _options.formFieldClass,
    formFieldClass = _options$formFieldCla === void 0 ? 'form-field' : _options$formFieldCla;

  // Classify each input in a form
  $inputs.each(function (__, input) {
    classifyInput(input, formFieldClass);
  });
  return $form;
}

/**
 * Get id from given field
 * @param {object} $field JQuery field object
 * @return {string}
 */
function getFieldId($field) {
  var fieldId = $field.prop('name').match(/(\[.*\])/);
  if (fieldId && fieldId.length !== 0) {
    return fieldId[0];
  }
  return '';
}

/**
 * Insert hidden field after State/Province field
 * @param {object} $stateField JQuery field object
 */
function insertStateHiddenField($stateField) {
  var fieldId = getFieldId($stateField);
  var stateFieldAttrs = {
    type: 'hidden',
    name: "FormFieldIsText" + fieldId,
    value: '1'
  };
  $stateField.after(jquery__WEBPACK_IMPORTED_MODULE_7___default()('<input />', stateFieldAttrs));
}
var Validators = {
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setEmailValidation: function setEmailValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: function validate(cb, val) {
          var result = _models_forms__WEBPACK_IMPORTED_MODULE_9__["default"].email(val);
          cb(result);
        },
        errorMessage: 'You must enter a valid email.'
      });
    }
  },
  /**
   * Validate password fields
   * @param validator
   * @param passwordSelector
   * @param password2Selector
   * @param requirements
   * @param isOptional
   */
  setPasswordValidation: function setPasswordValidation(validator, passwordSelector, password2Selector, requirements, isOptional) {
    var $password = jquery__WEBPACK_IMPORTED_MODULE_7___default()(passwordSelector);
    var passwordValidations = [{
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: passwordSelector,
      validate: function validate(cb, val) {
        var result = val.match(new RegExp(requirements.alpha)) && val.match(new RegExp(requirements.numeric)) && val.length >= requirements.minlength;

        // If optional and nothing entered, it is valid
        if (isOptional && val.length === 0) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: requirements.error
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val.length;
        if (isOptional) {
          return cb(true);
        }
        cb(result);
      },
      errorMessage: 'You must enter a password.'
    }, {
      selector: password2Selector,
      validate: function validate(cb, val) {
        var result = val === $password.val();
        cb(result);
      },
      errorMessage: 'Your passwords do not match.'
    }];
    validator.add(passwordValidations);
  },
  /**
   * Validate password fields
   * @param {Nod} validator
   * @param {Object} selectors
   * @param {string} selectors.errorSelector
   * @param {string} selectors.fieldsetSelector
   * @param {string} selectors.formSelector
   * @param {string} selectors.maxPriceSelector
   * @param {string} selectors.minPriceSelector
   */
  setMinMaxPriceValidation: function setMinMaxPriceValidation(validator, selectors) {
    var errorSelector = selectors.errorSelector,
      fieldsetSelector = selectors.fieldsetSelector,
      formSelector = selectors.formSelector,
      maxPriceSelector = selectors.maxPriceSelector,
      minPriceSelector = selectors.minPriceSelector;
    validator.configure({
      form: formSelector,
      preventSubmit: true,
      successClass: '_' // KLUDGE: Don't apply success class
    });

    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: minPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Min price must be less than max. price.',
      selector: maxPriceSelector,
      validate: "min-max:" + minPriceSelector + ":" + maxPriceSelector
    });
    validator.add({
      errorMessage: 'Max. price is required.',
      selector: maxPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Min. price is required.',
      selector: minPriceSelector,
      validate: 'presence'
    });
    validator.add({
      errorMessage: 'Input must be greater than 0.',
      selector: [minPriceSelector, maxPriceSelector],
      validate: 'min-number:0'
    });
    validator.setMessageOptions({
      selector: [minPriceSelector, maxPriceSelector],
      parent: fieldsetSelector,
      errorSpan: errorSelector
    });
  },
  /**
   * Sets up a new validation when the form is dirty
   * @param validator
   * @param field
   */
  setStateCountryValidation: function setStateCountryValidation(validator, field) {
    if (field) {
      validator.add({
        selector: field,
        validate: 'presence',
        errorMessage: 'The \'State/Province\' field cannot be blank.'
      });
    }
  },
  /**
   * Removes classes from dirty form if previously checked
   * @param field
   */
  cleanUpStateValidation: function cleanUpStateValidation(field) {
    var $fieldClassElement = jquery__WEBPACK_IMPORTED_MODULE_7___default()("[data-type=\"" + field.data('fieldType') + "\"]");
    Object.keys(_nod__WEBPACK_IMPORTED_MODULE_8__["default"].classes).forEach(function (value) {
      if ($fieldClassElement.hasClass(_nod__WEBPACK_IMPORTED_MODULE_8__["default"].classes[value])) {
        $fieldClassElement.removeClass(_nod__WEBPACK_IMPORTED_MODULE_8__["default"].classes[value]);
      }
    });
  }
};


/***/ }),

/***/ "./assets/js/theme/product.js":
/*!************************************!*\
  !*** ./assets/js/theme/product.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Product)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _product_reviews__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./product/reviews */ "./assets/js/theme/product/reviews.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_product_details__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/product-details */ "./assets/js/theme/common/product-details.js");
/* harmony import */ var _product_video_gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./product/video-gallery */ "./assets/js/theme/product/video-gallery.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @fancyapps/fancybox */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
/* harmony import */ var _fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox__WEBPACK_IMPORTED_MODULE_7__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }
/*
 Import all product specific js
 */







var Product = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Product, _PageManager);
  function Product(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.url = window.location.href;
    _this.$reviewLink = $('[data-reveal-id="modal-review-form"]');
    _this.$bulkPricingLink = $('[data-reveal-id="modal-bulk-pricing"]');
    return _this;
  }
  var _proto = Product.prototype;
  _proto.onReady = function onReady() {
    var _this2 = this;
    // Listen for foundation modal close events to sanitize URL after review.
    $(document).on('close.fndtn.reveal', function () {
      if (_this2.url.indexOf('#write_review') !== -1 && typeof window.history.replaceState === 'function') {
        window.history.replaceState(null, document.title, window.location.pathname);
      }
    });
    var validator;

    // Init collapsible
    (0,_common_collapsible__WEBPACK_IMPORTED_MODULE_3__["default"])();
    this.productDetails = new _common_product_details__WEBPACK_IMPORTED_MODULE_4__["default"]($('.productView'), this.context, window.BCData.product_attributes);
    this.productDetails.setProductVariant();
    (0,_product_video_gallery__WEBPACK_IMPORTED_MODULE_5__["default"])();
    var $reviewForm = (0,_common_form_utils__WEBPACK_IMPORTED_MODULE_6__.classifyForm)('.writeReview-form');
    var review = new _product_reviews__WEBPACK_IMPORTED_MODULE_2__["default"]($reviewForm);
    $('body').on('click', '[data-reveal-id="modal-review-form"]', function () {
      validator = review.registerValidation(_this2.context);
    });
    $reviewForm.on('submit', function () {
      if (validator) {
        validator.performCheck();
        return validator.areAll('valid');
      }
      return false;
    });
    this.productReviewHandler();
    this.bulkPricingHandler();
  };
  _proto.productReviewHandler = function productReviewHandler() {
    if (this.url.indexOf('#write_review') !== -1) {
      this.$reviewLink.trigger('click');
    }
  };
  _proto.bulkPricingHandler = function bulkPricingHandler() {
    if (this.url.indexOf('#bulk_pricing') !== -1) {
      this.$bulkPricingLink.trigger('click');
    }
  };
  return Product;
}(_page_manager__WEBPACK_IMPORTED_MODULE_1__["default"]);


/***/ }),

/***/ "./assets/js/theme/product/reviews.js":
/*!********************************************!*\
  !*** ./assets/js/theme/product/reviews.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _default)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_collapsible__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/collapsible */ "./assets/js/theme/common/collapsible.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");




var _default = /*#__PURE__*/function () {
  function _default($reviewForm) {
    this.validator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_1__["default"])({
      submit: $reviewForm.find('input[type="submit"]')
    });
    this.$reviewsContent = $('#product-reviews');
    this.$collapsible = $('[data-collapsible]', this.$reviewsContent);
    this.initLinkBind();
    this.injectPaginationLink();
    this.collapseReviews();
  }

  /**
   * On initial page load, the user clicks on "(12 Reviews)" link
   * The browser jumps to the review page and should expand the reviews section
   */
  var _proto = _default.prototype;
  _proto.initLinkBind = function initLinkBind() {
    var _this = this;
    var $content = $('#productReviews-content', this.$reviewsContent);
    $('.productView-reviewLink').on('click', function () {
      $('.productView-reviewTabLink').trigger('click');
      if (!$content.hasClass('is-open')) {
        _this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__.CollapsibleEvents.click);
      }
    });
  };
  _proto.collapseReviews = function collapseReviews() {
    // We're in paginating state, do not collapse
    if (window.location.hash && window.location.hash.indexOf('#product-reviews') === 0) {
      return;
    }

    // force collapse on page load
    this.$collapsible.trigger(_common_collapsible__WEBPACK_IMPORTED_MODULE_2__.CollapsibleEvents.click);
  }

  /**
   * Inject ID into the pagination link
   */;
  _proto.injectPaginationLink = function injectPaginationLink() {
    var $nextLink = $('.pagination-item--next .pagination-link', this.$reviewsContent);
    var $prevLink = $('.pagination-item--previous .pagination-link', this.$reviewsContent);
    if ($nextLink.length) {
      $nextLink.attr('href', $nextLink.attr('href') + " #product-reviews");
    }
    if ($prevLink.length) {
      $prevLink.attr('href', $prevLink.attr('href') + " #product-reviews");
    }
  };
  _proto.registerValidation = function registerValidation(context) {
    this.context = context;
    this.validator.add([{
      selector: '[name="revrating"]',
      validate: 'presence',
      errorMessage: this.context.reviewRating
    }, {
      selector: '[name="revtitle"]',
      validate: 'presence',
      errorMessage: this.context.reviewSubject
    }, {
      selector: '[name="revtext"]',
      validate: 'presence',
      errorMessage: this.context.reviewComment
    }, {
      selector: '[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_3__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.reviewEmail
    }]);
    return this.validator;
  };
  _proto.validate = function validate() {
    return this.validator.performCheck();
  };
  return _default;
}();


/***/ }),

/***/ "./assets/js/theme/product/video-gallery.js":
/*!**************************************************!*\
  !*** ./assets/js/theme/product/video-gallery.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VideoGallery: () => (/* binding */ VideoGallery),
/* harmony export */   "default": () => (/* binding */ videoGallery)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");

var VideoGallery = /*#__PURE__*/function () {
  function VideoGallery($element) {
    this.$player = $element.find('[data-video-player]');
    this.$videos = $element.find('[data-video-item]');
    this.currentVideo = {};
    this.bindEvents();
  }
  var _proto = VideoGallery.prototype;
  _proto.selectNewVideo = function selectNewVideo(e) {
    e.preventDefault();
    var $target = $(e.currentTarget);
    this.currentVideo = {
      id: $target.data('videoId'),
      $selectedThumb: $target
    };
    this.setMainVideo();
    this.setActiveThumb();
  };
  _proto.setMainVideo = function setMainVideo() {
    this.$player.attr('src', "//www.youtube.com/embed/" + this.currentVideo.id);
  };
  _proto.setActiveThumb = function setActiveThumb() {
    this.$videos.removeClass('is-active');
    this.currentVideo.$selectedThumb.addClass('is-active');
  };
  _proto.bindEvents = function bindEvents() {
    this.$videos.on('click', this.selectNewVideo.bind(this));
  };
  return VideoGallery;
}();
function videoGallery() {
  var pluginKey = 'video-gallery';
  var $videoGallery = $("[data-" + pluginKey + "]");
  $videoGallery.each(function (index, element) {
    var $el = $(element);
    var isInitialized = $el.data(pluginKey) instanceof VideoGallery;
    if (isInitialized) {
      return;
    }
    $el.data(pluginKey, new VideoGallery($el));
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9wcm9kdWN0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBdUI7QUFFQztBQUNXO0FBRW5DLElBQU1HLGFBQWEsR0FBRyxDQUNsQixPQUFPLEVBQ1AsUUFBUSxFQUNSLFVBQVUsQ0FDYjs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTQyxhQUFhQSxDQUFDQyxLQUFLLEVBQUVDLGNBQWMsRUFBRTtFQUMxQyxJQUFNQyxNQUFNLEdBQUdQLDZDQUFDLENBQUNLLEtBQUssQ0FBQztFQUN2QixJQUFNRyxVQUFVLEdBQUdELE1BQU0sQ0FBQ0UsTUFBTSxPQUFLSCxjQUFnQixDQUFDO0VBQ3RELElBQU1JLE9BQU8sR0FBR0gsTUFBTSxDQUFDSSxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUNDLFdBQVcsQ0FBQyxDQUFDO0VBRXBELElBQUlDLFNBQVMsR0FBTVAsY0FBYyxVQUFLSSxPQUFTO0VBQy9DLElBQUlJLGlCQUFpQjs7RUFFckI7RUFDQSxJQUFJSixPQUFPLEtBQUssT0FBTyxFQUFFO0lBQ3JCLElBQU1LLFNBQVMsR0FBR1IsTUFBTSxDQUFDSSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBRXJDLElBQUlLLHNEQUFBLENBQVcsQ0FBQyxPQUFPLEVBQUUsVUFBVSxFQUFFLFFBQVEsQ0FBQyxFQUFFRCxTQUFTLENBQUMsRUFBRTtNQUN4RDtNQUNBRixTQUFTLEdBQU1QLGNBQWMsVUFBS1csdURBQUEsQ0FBWUYsU0FBUyxDQUFHO0lBQzlELENBQUMsTUFBTTtNQUNIO01BQ0FELGlCQUFpQixRQUFNRCxTQUFTLEdBQUdLLHdEQUFBLENBQWFILFNBQVMsQ0FBRztJQUNoRTtFQUNKOztFQUVBO0VBQ0EsT0FBT1AsVUFBVSxDQUNaVyxRQUFRLENBQUNOLFNBQVMsQ0FBQyxDQUNuQk0sUUFBUSxDQUFDTCxpQkFBaUIsQ0FBQztBQUNw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RSxDQUFDO0VBQUFyRCxNQUFBLENBRUR3RCxjQUFjLEdBQWQsU0FBQUEsZUFBQSxFQUFpQjtJQUNiLElBQUksQ0FBQ1gsT0FBTyxDQUFDL0QsV0FBVyxDQUFDLFdBQVcsQ0FBQztJQUNyQyxJQUFJLENBQUNnRSxZQUFZLENBQUNRLGNBQWMsQ0FBQzdJLFFBQVEsQ0FBQyxXQUFXLENBQUM7RUFDMUQsQ0FBQztFQUFBdUYsTUFBQSxDQUVEK0MsVUFBVSxHQUFWLFNBQUFBLFdBQUEsRUFBYTtJQUNULElBQUksQ0FBQ0YsT0FBTyxDQUFDeEMsRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMyQyxjQUFjLENBQUNTLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztFQUM1RCxDQUFDO0VBQUEsT0FBQWYsWUFBQTtBQUFBO0FBR1UsU0FBU3ZELFlBQVlBLENBQUEsRUFBRztFQUNuQyxJQUFNdUUsU0FBUyxHQUFHLGVBQWU7RUFDakMsSUFBTUMsYUFBYSxHQUFHckssQ0FBQyxZQUFVb0ssU0FBUyxNQUFHLENBQUM7RUFFOUNDLGFBQWEsQ0FBQ3hJLElBQUksQ0FBQyxVQUFDeUksS0FBSyxFQUFFQyxPQUFPLEVBQUs7SUFDbkMsSUFBTUMsR0FBRyxHQUFHeEssQ0FBQyxDQUFDdUssT0FBTyxDQUFDO0lBQ3RCLElBQU1FLGFBQWEsR0FBR0QsR0FBRyxDQUFDdEYsSUFBSSxDQUFDa0YsU0FBUyxDQUFDLFlBQVloQixZQUFZO0lBRWpFLElBQUlxQixhQUFhLEVBQUU7TUFDZjtJQUNKO0lBRUFELEdBQUcsQ0FBQ3RGLElBQUksQ0FBQ2tGLFNBQVMsRUFBRSxJQUFJaEIsWUFBWSxDQUFDb0IsR0FBRyxDQUFDLENBQUM7RUFDOUMsQ0FBQyxDQUFDO0FBQ04iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaW5uYWNsZS8uL2Fzc2V0cy9qcy90aGVtZS9jb21tb24vZm9ybS11dGlscy5qcyIsIndlYnBhY2s6Ly9QaW5uYWNsZS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0LmpzIiwid2VicGFjazovL1Bpbm5hY2xlLy4vYXNzZXRzL2pzL3RoZW1lL3Byb2R1Y3QvcmV2aWV3cy5qcyIsIndlYnBhY2s6Ly9QaW5uYWNsZS8uL2Fzc2V0cy9qcy90aGVtZS9wcm9kdWN0L3ZpZGVvLWdhbGxlcnkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgbm9kIGZyb20gJy4vbm9kJztcbmltcG9ydCBmb3JtcyBmcm9tICcuL21vZGVscy9mb3Jtcyc7XG5cbmNvbnN0IGlucHV0VGFnTmFtZXMgPSBbXG4gICAgJ2lucHV0JyxcbiAgICAnc2VsZWN0JyxcbiAgICAndGV4dGFyZWEnLFxuXTtcblxuLyoqXG4gKiBBcHBseSBjbGFzcyBuYW1lIHRvIGFuIGlucHV0IGVsZW1lbnQgb24gaXRzIHR5cGVcbiAqIEBwYXJhbSB7b2JqZWN0fSBpbnB1dFxuICogQHBhcmFtIHtzdHJpbmd9IGZvcm1GaWVsZENsYXNzXG4gKiBAcmV0dXJuIHtvYmplY3R9IEVsZW1lbnQgaXRzZWxmXG4gKi9cbmZ1bmN0aW9uIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKSB7XG4gICAgY29uc3QgJGlucHV0ID0gJChpbnB1dCk7XG4gICAgY29uc3QgJGZvcm1GaWVsZCA9ICRpbnB1dC5wYXJlbnQoYC4ke2Zvcm1GaWVsZENsYXNzfWApO1xuICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXQucHJvcCgndGFnTmFtZScpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICBsZXQgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke3RhZ05hbWV9YDtcbiAgICBsZXQgc3BlY2lmaWNDbGFzc05hbWU7XG5cbiAgICAvLyBJbnB1dCBjYW4gYmUgdGV4dC9jaGVja2JveC9yYWRpbyBldGMuLi5cbiAgICBpZiAodGFnTmFtZSA9PT0gJ2lucHV0Jykge1xuICAgICAgICBjb25zdCBpbnB1dFR5cGUgPSAkaW5wdXQucHJvcCgndHlwZScpO1xuXG4gICAgICAgIGlmIChfLmluY2x1ZGVzKFsncmFkaW8nLCAnY2hlY2tib3gnLCAnc3VibWl0J10sIGlucHV0VHlwZSkpIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0tY2hlY2tib3gsIC5mb3JtLWZpZWxkLS1yYWRpb1xuICAgICAgICAgICAgY2xhc3NOYW1lID0gYCR7Zm9ybUZpZWxkQ2xhc3N9LS0ke18uY2FtZWxDYXNlKGlucHV0VHlwZSl9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIGllOiAuZm9ybS1maWVsZC0taW5wdXQgLmZvcm0tZmllbGQtLWlucHV0VGV4dFxuICAgICAgICAgICAgc3BlY2lmaWNDbGFzc05hbWUgPSBgJHtjbGFzc05hbWV9JHtfLmNhcGl0YWxpemUoaW5wdXRUeXBlKX1gO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQXBwbHkgY2xhc3MgbW9kaWZpZXJcbiAgICByZXR1cm4gJGZvcm1GaWVsZFxuICAgICAgICAuYWRkQ2xhc3MoY2xhc3NOYW1lKVxuICAgICAgICAuYWRkQ2xhc3Moc3BlY2lmaWNDbGFzc05hbWUpO1xufVxuXG4vKipcbiAqIEFwcGx5IGNsYXNzIG5hbWUgdG8gZWFjaCBpbnB1dCBlbGVtZW50IGluIGEgZm9ybSBiYXNlZCBvbiBpdHMgdHlwZVxuICogQGV4YW1wbGVcbiAqIC8vIEJlZm9yZVxuICogPGZvcm0gaWQ9XCJmb3JtXCI+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCI+XG4gKiAgICAgPC9kaXY+XG4gKiAgICAgPGRpdiBjbGFzcz1cImZvcm0tZmllbGRcIj5cbiAqICAgICAgICAgPHNlbGVjdD4uLi48L3NlbGVjdD5cbiAqICAgICA8L2Rpdj5cbiAqIDwvZm9ybT5cbiAqXG4gKiBjbGFzc2lmeUZvcm0oJyNmb3JtJywgeyBmb3JtRmllbGRDbGFzczogJ2Zvcm0tZmllbGQnIH0pO1xuICpcbiAqIC8vIEFmdGVyXG4gKiA8ZGl2IGNsYXNzPVwiZm9ybS1maWVsZCBmb3JtLWZpZWxkLS1pbnB1dCBmb3JtLWZpZWxkLS1pbnB1dFRleHRcIj4uLi48L2Rpdj5cbiAqIDxkaXYgY2xhc3M9XCJmb3JtLWZpZWxkIGZvcm0tZmllbGQtLXNlbGVjdFwiPi4uLjwvZGl2PlxuICpcbiAqIEBwYXJhbSB7c3RyaW5nfG9iamVjdH0gZm9ybVNlbGVjdG9yIC0gc2VsZWN0b3Igb3IgZWxlbWVudFxuICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAqIEByZXR1cm4ge2pRdWVyeX0gRWxlbWVudCBpdHNlbGZcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNsYXNzaWZ5Rm9ybShmb3JtU2VsZWN0b3IsIG9wdGlvbnMgPSB7fSkge1xuICAgIGNvbnN0ICRmb3JtID0gJChmb3JtU2VsZWN0b3IpO1xuICAgIGNvbnN0ICRpbnB1dHMgPSAkZm9ybS5maW5kKGlucHV0VGFnTmFtZXMuam9pbignLCAnKSk7XG5cbiAgICAvLyBPYnRhaW4gb3B0aW9uc1xuICAgIGNvbnN0IHsgZm9ybUZpZWxkQ2xhc3MgPSAnZm9ybS1maWVsZCcgfSA9IG9wdGlvbnM7XG5cbiAgICAvLyBDbGFzc2lmeSBlYWNoIGlucHV0IGluIGEgZm9ybVxuICAgICRpbnB1dHMuZWFjaCgoX18sIGlucHV0KSA9PiB7XG4gICAgICAgIGNsYXNzaWZ5SW5wdXQoaW5wdXQsIGZvcm1GaWVsZENsYXNzKTtcbiAgICB9KTtcblxuICAgIHJldHVybiAkZm9ybTtcbn1cblxuLyoqXG4gKiBHZXQgaWQgZnJvbSBnaXZlbiBmaWVsZFxuICogQHBhcmFtIHtvYmplY3R9ICRmaWVsZCBKUXVlcnkgZmllbGQgb2JqZWN0XG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGdldEZpZWxkSWQoJGZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9ICRmaWVsZC5wcm9wKCduYW1lJykubWF0Y2goLyhcXFsuKlxcXSkvKTtcblxuICAgIGlmIChmaWVsZElkICYmIGZpZWxkSWQubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBmaWVsZElkWzBdO1xuICAgIH1cblxuICAgIHJldHVybiAnJztcbn1cblxuLyoqXG4gKiBJbnNlcnQgaGlkZGVuIGZpZWxkIGFmdGVyIFN0YXRlL1Byb3ZpbmNlIGZpZWxkXG4gKiBAcGFyYW0ge29iamVjdH0gJHN0YXRlRmllbGQgSlF1ZXJ5IGZpZWxkIG9iamVjdFxuICovXG5mdW5jdGlvbiBpbnNlcnRTdGF0ZUhpZGRlbkZpZWxkKCRzdGF0ZUZpZWxkKSB7XG4gICAgY29uc3QgZmllbGRJZCA9IGdldEZpZWxkSWQoJHN0YXRlRmllbGQpO1xuICAgIGNvbnN0IHN0YXRlRmllbGRBdHRycyA9IHtcbiAgICAgICAgdHlwZTogJ2hpZGRlbicsXG4gICAgICAgIG5hbWU6IGBGb3JtRmllbGRJc1RleHQke2ZpZWxkSWR9YCxcbiAgICAgICAgdmFsdWU6ICcxJyxcbiAgICB9O1xuXG4gICAgJHN0YXRlRmllbGQuYWZ0ZXIoJCgnPGlucHV0IC8+Jywgc3RhdGVGaWVsZEF0dHJzKSk7XG59XG5cbmNvbnN0IFZhbGlkYXRvcnMgPSB7XG4gICAgLyoqXG4gICAgICogU2V0cyB1cCBhIG5ldyB2YWxpZGF0aW9uIHdoZW4gdGhlIGZvcm0gaXMgZGlydHlcbiAgICAgKiBAcGFyYW0gdmFsaWRhdG9yXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgc2V0RW1haWxWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBmaWVsZCkgPT4ge1xuICAgICAgICBpZiAoZmllbGQpIHtcbiAgICAgICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBmaWVsZCxcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSB2YWxpZCBlbWFpbC4nLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBwYXNzd29yZFNlbGVjdG9yXG4gICAgICogQHBhcmFtIHBhc3N3b3JkMlNlbGVjdG9yXG4gICAgICogQHBhcmFtIHJlcXVpcmVtZW50c1xuICAgICAqIEBwYXJhbSBpc09wdGlvbmFsXG4gICAgICovXG4gICAgc2V0UGFzc3dvcmRWYWxpZGF0aW9uOiAodmFsaWRhdG9yLCBwYXNzd29yZFNlbGVjdG9yLCBwYXNzd29yZDJTZWxlY3RvciwgcmVxdWlyZW1lbnRzLCBpc09wdGlvbmFsKSA9PiB7XG4gICAgICAgIGNvbnN0ICRwYXNzd29yZCA9ICQocGFzc3dvcmRTZWxlY3Rvcik7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkVmFsaWRhdGlvbnMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbC5sZW5ndGg7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzT3B0aW9uYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3UgbXVzdCBlbnRlciBhIHBhc3N3b3JkLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBwYXNzd29yZFNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubWF0Y2gobmV3IFJlZ0V4cChyZXF1aXJlbWVudHMuYWxwaGEpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLm1hdGNoKG5ldyBSZWdFeHAocmVxdWlyZW1lbnRzLm51bWVyaWMpKVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgdmFsLmxlbmd0aCA+PSByZXF1aXJlbWVudHMubWlubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIElmIG9wdGlvbmFsIGFuZCBub3RoaW5nIGVudGVyZWQsIGl0IGlzIHZhbGlkXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsICYmIHZhbC5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBjYih0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHJlcXVpcmVtZW50cy5lcnJvcixcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IHBhc3N3b3JkMlNlbGVjdG9yLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSB2YWwubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChpc09wdGlvbmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gY2IodHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnWW91IG11c3QgZW50ZXIgYSBwYXNzd29yZC4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogcGFzc3dvcmQyU2VsZWN0b3IsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IHZhbCA9PT0gJHBhc3N3b3JkLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdZb3VyIHBhc3N3b3JkcyBkbyBub3QgbWF0Y2guJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF07XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZChwYXNzd29yZFZhbGlkYXRpb25zKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogVmFsaWRhdGUgcGFzc3dvcmQgZmllbGRzXG4gICAgICogQHBhcmFtIHtOb2R9IHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBzZWxlY3RvcnNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmVycm9yU2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZpZWxkc2V0U2VsZWN0b3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gc2VsZWN0b3JzLmZvcm1TZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWF4UHJpY2VTZWxlY3RvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBzZWxlY3RvcnMubWluUHJpY2VTZWxlY3RvclxuICAgICAqL1xuICAgIHNldE1pbk1heFByaWNlVmFsaWRhdGlvbjogKHZhbGlkYXRvciwgc2VsZWN0b3JzKSA9PiB7XG4gICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIGVycm9yU2VsZWN0b3IsXG4gICAgICAgICAgICBmaWVsZHNldFNlbGVjdG9yLFxuICAgICAgICAgICAgZm9ybVNlbGVjdG9yLFxuICAgICAgICAgICAgbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgIH0gPSBzZWxlY3RvcnM7XG5cbiAgICAgICAgdmFsaWRhdG9yLmNvbmZpZ3VyZSh7XG4gICAgICAgICAgICBmb3JtOiBmb3JtU2VsZWN0b3IsXG4gICAgICAgICAgICBwcmV2ZW50U3VibWl0OiB0cnVlLFxuICAgICAgICAgICAgc3VjY2Vzc0NsYXNzOiAnXycsIC8vIEtMVURHRTogRG9uJ3QgYXBwbHkgc3VjY2VzcyBjbGFzc1xuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWluUHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01pbiBwcmljZSBtdXN0IGJlIGxlc3MgdGhhbiBtYXguIHByaWNlLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogbWF4UHJpY2VTZWxlY3RvcixcbiAgICAgICAgICAgIHZhbGlkYXRlOiBgbWluLW1heDoke21pblByaWNlU2VsZWN0b3J9OiR7bWF4UHJpY2VTZWxlY3Rvcn1gLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3IuYWRkKHtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ01heC4gcHJpY2UgaXMgcmVxdWlyZWQuJyxcbiAgICAgICAgICAgIHNlbGVjdG9yOiBtYXhQcmljZVNlbGVjdG9yLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHZhbGlkYXRvci5hZGQoe1xuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTWluLiBwcmljZSBpcyByZXF1aXJlZC4nLFxuICAgICAgICAgICAgc2VsZWN0b3I6IG1pblByaWNlU2VsZWN0b3IsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdJbnB1dCBtdXN0IGJlIGdyZWF0ZXIgdGhhbiAwLicsXG4gICAgICAgICAgICBzZWxlY3RvcjogW21pblByaWNlU2VsZWN0b3IsIG1heFByaWNlU2VsZWN0b3JdLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdtaW4tbnVtYmVyOjAnLFxuICAgICAgICB9KTtcblxuICAgICAgICB2YWxpZGF0b3Iuc2V0TWVzc2FnZU9wdGlvbnMoe1xuICAgICAgICAgICAgc2VsZWN0b3I6IFttaW5QcmljZVNlbGVjdG9yLCBtYXhQcmljZVNlbGVjdG9yXSxcbiAgICAgICAgICAgIHBhcmVudDogZmllbGRzZXRTZWxlY3RvcixcbiAgICAgICAgICAgIGVycm9yU3BhbjogZXJyb3JTZWxlY3RvcixcbiAgICAgICAgfSk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFNldHMgdXAgYSBuZXcgdmFsaWRhdGlvbiB3aGVuIHRoZSBmb3JtIGlzIGRpcnR5XG4gICAgICogQHBhcmFtIHZhbGlkYXRvclxuICAgICAqIEBwYXJhbSBmaWVsZFxuICAgICAqL1xuICAgIHNldFN0YXRlQ291bnRyeVZhbGlkYXRpb246ICh2YWxpZGF0b3IsIGZpZWxkKSA9PiB7XG4gICAgICAgIGlmIChmaWVsZCkge1xuICAgICAgICAgICAgdmFsaWRhdG9yLmFkZCh7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGZpZWxkLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogJ1RoZSBcXCdTdGF0ZS9Qcm92aW5jZVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgY2xhc3NlcyBmcm9tIGRpcnR5IGZvcm0gaWYgcHJldmlvdXNseSBjaGVja2VkXG4gICAgICogQHBhcmFtIGZpZWxkXG4gICAgICovXG4gICAgY2xlYW5VcFN0YXRlVmFsaWRhdGlvbjogKGZpZWxkKSA9PiB7XG4gICAgICAgIGNvbnN0ICRmaWVsZENsYXNzRWxlbWVudCA9ICQoKGBbZGF0YS10eXBlPVwiJHtmaWVsZC5kYXRhKCdmaWVsZFR5cGUnKX1cIl1gKSk7XG5cbiAgICAgICAgT2JqZWN0LmtleXMobm9kLmNsYXNzZXMpLmZvckVhY2goKHZhbHVlKSA9PiB7XG4gICAgICAgICAgICBpZiAoJGZpZWxkQ2xhc3NFbGVtZW50Lmhhc0NsYXNzKG5vZC5jbGFzc2VzW3ZhbHVlXSkpIHtcbiAgICAgICAgICAgICAgICAkZmllbGRDbGFzc0VsZW1lbnQucmVtb3ZlQ2xhc3Mobm9kLmNsYXNzZXNbdmFsdWVdKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbn07XG5cbmV4cG9ydCB7IFZhbGlkYXRvcnMsIGluc2VydFN0YXRlSGlkZGVuRmllbGQgfTtcbiIsIi8qXG4gSW1wb3J0IGFsbCBwcm9kdWN0IHNwZWNpZmljIGpzXG4gKi9cbmltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XG5pbXBvcnQgUmV2aWV3IGZyb20gJy4vcHJvZHVjdC9yZXZpZXdzJztcbmltcG9ydCBjb2xsYXBzaWJsZUZhY3RvcnkgZnJvbSAnLi9jb21tb24vY29sbGFwc2libGUnO1xuaW1wb3J0IFByb2R1Y3REZXRhaWxzIGZyb20gJy4vY29tbW9uL3Byb2R1Y3QtZGV0YWlscyc7XG5pbXBvcnQgdmlkZW9HYWxsZXJ5IGZyb20gJy4vcHJvZHVjdC92aWRlby1nYWxsZXJ5JztcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSB9IGZyb20gJy4vY29tbW9uL2Zvcm0tdXRpbHMnO1xuaW1wb3J0ICdAZmFuY3lhcHBzL2ZhbmN5Ym94JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcbiAgICBjb25zdHJ1Y3Rvcihjb250ZXh0KSB7XG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xuICAgICAgICB0aGlzLnVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgICAgICB0aGlzLiRyZXZpZXdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nKTtcbiAgICAgICAgdGhpcy4kYnVsa1ByaWNpbmdMaW5rID0gJCgnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtYnVsay1wcmljaW5nXCJdJyk7XG4gICAgfVxuXG4gICAgb25SZWFkeSgpIHtcbiAgICAgICAgLy8gTGlzdGVuIGZvciBmb3VuZGF0aW9uIG1vZGFsIGNsb3NlIGV2ZW50cyB0byBzYW5pdGl6ZSBVUkwgYWZ0ZXIgcmV2aWV3LlxuICAgICAgICAkKGRvY3VtZW50KS5vbignY2xvc2UuZm5kdG4ucmV2ZWFsJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEgJiYgdHlwZW9mIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBkb2N1bWVudC50aXRsZSwgd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgbGV0IHZhbGlkYXRvcjtcblxuICAgICAgICAvLyBJbml0IGNvbGxhcHNpYmxlXG4gICAgICAgIGNvbGxhcHNpYmxlRmFjdG9yeSgpO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdERldGFpbHMgPSBuZXcgUHJvZHVjdERldGFpbHMoJCgnLnByb2R1Y3RWaWV3JyksIHRoaXMuY29udGV4dCwgd2luZG93LkJDRGF0YS5wcm9kdWN0X2F0dHJpYnV0ZXMpO1xuICAgICAgICB0aGlzLnByb2R1Y3REZXRhaWxzLnNldFByb2R1Y3RWYXJpYW50KCk7XG5cbiAgICAgICAgdmlkZW9HYWxsZXJ5KCk7XG5cbiAgICAgICAgY29uc3QgJHJldmlld0Zvcm0gPSBjbGFzc2lmeUZvcm0oJy53cml0ZVJldmlldy1mb3JtJyk7XG4gICAgICAgIGNvbnN0IHJldmlldyA9IG5ldyBSZXZpZXcoJHJldmlld0Zvcm0pO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCAnW2RhdGEtcmV2ZWFsLWlkPVwibW9kYWwtcmV2aWV3LWZvcm1cIl0nLCAoKSA9PiB7XG4gICAgICAgICAgICB2YWxpZGF0b3IgPSByZXZpZXcucmVnaXN0ZXJWYWxpZGF0aW9uKHRoaXMuY29udGV4dCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgICRyZXZpZXdGb3JtLm9uKCdzdWJtaXQnLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFsaWRhdG9yKSB7XG4gICAgICAgICAgICAgICAgdmFsaWRhdG9yLnBlcmZvcm1DaGVjaygpO1xuICAgICAgICAgICAgICAgIHJldHVybiB2YWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMucHJvZHVjdFJldmlld0hhbmRsZXIoKTtcbiAgICAgICAgdGhpcy5idWxrUHJpY2luZ0hhbmRsZXIoKTtcbiAgICB9XG5cbiAgICBwcm9kdWN0UmV2aWV3SGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyN3cml0ZV9yZXZpZXcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJHJldmlld0xpbmsudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJ1bGtQcmljaW5nSGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMudXJsLmluZGV4T2YoJyNidWxrX3ByaWNpbmcnKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuJGJ1bGtQcmljaW5nTGluay50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB7IENvbGxhcHNpYmxlRXZlbnRzIH0gZnJvbSAnLi4vY29tbW9uL2NvbGxhcHNpYmxlJztcbmltcG9ydCBmb3JtcyBmcm9tICcuLi9jb21tb24vbW9kZWxzL2Zvcm1zJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCRyZXZpZXdGb3JtKSB7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yID0gbm9kKHtcbiAgICAgICAgICAgIHN1Ym1pdDogJHJldmlld0Zvcm0uZmluZCgnaW5wdXRbdHlwZT1cInN1Ym1pdFwiXScpLFxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLiRyZXZpZXdzQ29udGVudCA9ICQoJyNwcm9kdWN0LXJldmlld3MnKTtcbiAgICAgICAgdGhpcy4kY29sbGFwc2libGUgPSAkKCdbZGF0YS1jb2xsYXBzaWJsZV0nLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgdGhpcy5pbml0TGlua0JpbmQoKTtcbiAgICAgICAgdGhpcy5pbmplY3RQYWdpbmF0aW9uTGluaygpO1xuICAgICAgICB0aGlzLmNvbGxhcHNlUmV2aWV3cygpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIE9uIGluaXRpYWwgcGFnZSBsb2FkLCB0aGUgdXNlciBjbGlja3Mgb24gXCIoMTIgUmV2aWV3cylcIiBsaW5rXG4gICAgICogVGhlIGJyb3dzZXIganVtcHMgdG8gdGhlIHJldmlldyBwYWdlIGFuZCBzaG91bGQgZXhwYW5kIHRoZSByZXZpZXdzIHNlY3Rpb25cbiAgICAgKi9cbiAgICBpbml0TGlua0JpbmQoKSB7XG4gICAgICAgIGNvbnN0ICRjb250ZW50ID0gJCgnI3Byb2R1Y3RSZXZpZXdzLWNvbnRlbnQnLCB0aGlzLiRyZXZpZXdzQ29udGVudCk7XG5cbiAgICAgICAgJCgnLnByb2R1Y3RWaWV3LXJldmlld0xpbmsnKS5vbignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAkKCcucHJvZHVjdFZpZXctcmV2aWV3VGFiTGluaycpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICBpZiAoISRjb250ZW50Lmhhc0NsYXNzKCdpcy1vcGVuJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLiRjb2xsYXBzaWJsZS50cmlnZ2VyKENvbGxhcHNpYmxlRXZlbnRzLmNsaWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY29sbGFwc2VSZXZpZXdzKCkge1xuICAgICAgICAvLyBXZSdyZSBpbiBwYWdpbmF0aW5nIHN0YXRlLCBkbyBub3QgY29sbGFwc2VcbiAgICAgICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5oYXNoICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoLmluZGV4T2YoJyNwcm9kdWN0LXJldmlld3MnKSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZm9yY2UgY29sbGFwc2Ugb24gcGFnZSBsb2FkXG4gICAgICAgIHRoaXMuJGNvbGxhcHNpYmxlLnRyaWdnZXIoQ29sbGFwc2libGVFdmVudHMuY2xpY2spO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEluamVjdCBJRCBpbnRvIHRoZSBwYWdpbmF0aW9uIGxpbmtcbiAgICAgKi9cbiAgICBpbmplY3RQYWdpbmF0aW9uTGluaygpIHtcbiAgICAgICAgY29uc3QgJG5leHRMaW5rID0gJCgnLnBhZ2luYXRpb24taXRlbS0tbmV4dCAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuICAgICAgICBjb25zdCAkcHJldkxpbmsgPSAkKCcucGFnaW5hdGlvbi1pdGVtLS1wcmV2aW91cyAucGFnaW5hdGlvbi1saW5rJywgdGhpcy4kcmV2aWV3c0NvbnRlbnQpO1xuXG4gICAgICAgIGlmICgkbmV4dExpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkbmV4dExpbmsuYXR0cignaHJlZicsIGAkeyRuZXh0TGluay5hdHRyKCdocmVmJyl9ICNwcm9kdWN0LXJldmlld3NgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICgkcHJldkxpbmsubGVuZ3RoKSB7XG4gICAgICAgICAgICAkcHJldkxpbmsuYXR0cignaHJlZicsIGAkeyRwcmV2TGluay5hdHRyKCdocmVmJyl9ICNwcm9kdWN0LXJldmlld3NgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJlZ2lzdGVyVmFsaWRhdGlvbihjb250ZXh0KSB7XG4gICAgICAgIHRoaXMuY29udGV4dCA9IGNvbnRleHQ7XG4gICAgICAgIHRoaXMudmFsaWRhdG9yLmFkZChbe1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnJhdGluZ1wiXScsXG4gICAgICAgICAgICB2YWxpZGF0ZTogJ3ByZXNlbmNlJyxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld1JhdGluZyxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRpdGxlXCJdJyxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAncHJlc2VuY2UnLFxuICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQucmV2aWV3U3ViamVjdCxcbiAgICAgICAgfSwge1xuICAgICAgICAgICAgc2VsZWN0b3I6ICdbbmFtZT1cInJldnRleHRcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6ICdwcmVzZW5jZScsXG4gICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC5yZXZpZXdDb21tZW50LFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBzZWxlY3RvcjogJ1tuYW1lPVwiZW1haWxcIl0nLFxuICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcbiAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogdGhpcy5jb250ZXh0LnJldmlld0VtYWlsLFxuICAgICAgICB9XSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMudmFsaWRhdG9yO1xuICAgIH1cblxuICAgIHZhbGlkYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52YWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIFZpZGVvR2FsbGVyeSB7XG4gICAgY29uc3RydWN0b3IoJGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyID0gJGVsZW1lbnQuZmluZCgnW2RhdGEtdmlkZW8tcGxheWVyXScpO1xuICAgICAgICB0aGlzLiR2aWRlb3MgPSAkZWxlbWVudC5maW5kKCdbZGF0YS12aWRlby1pdGVtXScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlbyA9IHt9O1xuICAgICAgICB0aGlzLmJpbmRFdmVudHMoKTtcbiAgICB9XG5cbiAgICBzZWxlY3ROZXdWaWRlbyhlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChlLmN1cnJlbnRUYXJnZXQpO1xuXG4gICAgICAgIHRoaXMuY3VycmVudFZpZGVvID0ge1xuICAgICAgICAgICAgaWQ6ICR0YXJnZXQuZGF0YSgndmlkZW9JZCcpLFxuICAgICAgICAgICAgJHNlbGVjdGVkVGh1bWI6ICR0YXJnZXQsXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5zZXRNYWluVmlkZW8oKTtcbiAgICAgICAgdGhpcy5zZXRBY3RpdmVUaHVtYigpO1xuICAgIH1cblxuICAgIHNldE1haW5WaWRlbygpIHtcbiAgICAgICAgdGhpcy4kcGxheWVyLmF0dHIoJ3NyYycsIGAvL3d3dy55b3V0dWJlLmNvbS9lbWJlZC8ke3RoaXMuY3VycmVudFZpZGVvLmlkfWApO1xuICAgIH1cblxuICAgIHNldEFjdGl2ZVRodW1iKCkge1xuICAgICAgICB0aGlzLiR2aWRlb3MucmVtb3ZlQ2xhc3MoJ2lzLWFjdGl2ZScpO1xuICAgICAgICB0aGlzLmN1cnJlbnRWaWRlby4kc2VsZWN0ZWRUaHVtYi5hZGRDbGFzcygnaXMtYWN0aXZlJyk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy4kdmlkZW9zLm9uKCdjbGljaycsIHRoaXMuc2VsZWN0TmV3VmlkZW8uYmluZCh0aGlzKSk7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB2aWRlb0dhbGxlcnkoKSB7XG4gICAgY29uc3QgcGx1Z2luS2V5ID0gJ3ZpZGVvLWdhbGxlcnknO1xuICAgIGNvbnN0ICR2aWRlb0dhbGxlcnkgPSAkKGBbZGF0YS0ke3BsdWdpbktleX1dYCk7XG5cbiAgICAkdmlkZW9HYWxsZXJ5LmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGlzSW5pdGlhbGl6ZWQgPSAkZWwuZGF0YShwbHVnaW5LZXkpIGluc3RhbmNlb2YgVmlkZW9HYWxsZXJ5O1xuXG4gICAgICAgIGlmIChpc0luaXRpYWxpemVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAkZWwuZGF0YShwbHVnaW5LZXksIG5ldyBWaWRlb0dhbGxlcnkoJGVsKSk7XG4gICAgfSk7XG59XG4iXSwibmFtZXMiOlsiJCIsIm5vZCIsImZvcm1zIiwiaW5wdXRUYWdOYW1lcyIsImNsYXNzaWZ5SW5wdXQiLCJpbnB1dCIsImZvcm1GaWVsZENsYXNzIiwiJGlucHV0IiwiJGZvcm1GaWVsZCIsInBhcmVudCIsInRhZ05hbWUiLCJwcm9wIiwidG9Mb3dlckNhc2UiLCJjbGFzc05hbWUiLCJzcGVjaWZpY0NsYXNzTmFtZSIsImlucHV0VHlwZSIsIl9pbmNsdWRlcyIsIl9jYW1lbENhc2UiLCJfY2FwaXRhbGl6ZSIsImFkZENsYXNzIiwiY2xhc3NpZnlGb3JtIiwiZm9ybVNlbGVjdG9yIiwib3B0aW9ucyIsIiRmb3JtIiwiJGlucHV0cyIsImZpbmQiLCJqb2luIiwiX29wdGlvbnMiLCJfb3B0aW9ucyRmb3JtRmllbGRDbGEiLCJlYWNoIiwiX18iLCJnZXRGaWVsZElkIiwiJGZpZWxkIiwiZmllbGRJZCIsIm1hdGNoIiwibGVuZ3RoIiwiaW5zZXJ0U3RhdGVIaWRkZW5GaWVsZCIsIiRzdGF0ZUZpZWxkIiwic3RhdGVGaWVsZEF0dHJzIiwidHlwZSIsIm5hbWUiLCJ2YWx1ZSIsImFmdGVyIiwiVmFsaWRhdG9ycyIsInNldEVtYWlsVmFsaWRhdGlvbiIsInZhbGlkYXRvciIsImZpZWxkIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwidmFsIiwicmVzdWx0IiwiZW1haWwiLCJlcnJvck1lc3NhZ2UiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJwYXNzd29yZFNlbGVjdG9yIiwicGFzc3dvcmQyU2VsZWN0b3IiLCJyZXF1aXJlbWVudHMiLCJpc09wdGlvbmFsIiwiJHBhc3N3b3JkIiwicGFzc3dvcmRWYWxpZGF0aW9ucyIsIlJlZ0V4cCIsImFscGhhIiwibnVtZXJpYyIsIm1pbmxlbmd0aCIsImVycm9yIiwic2V0TWluTWF4UHJpY2VWYWxpZGF0aW9uIiwic2VsZWN0b3JzIiwiZXJyb3JTZWxlY3RvciIsImZpZWxkc2V0U2VsZWN0b3IiLCJtYXhQcmljZVNlbGVjdG9yIiwibWluUHJpY2VTZWxlY3RvciIsImNvbmZpZ3VyZSIsImZvcm0iLCJwcmV2ZW50U3VibWl0Iiwic3VjY2Vzc0NsYXNzIiwic2V0TWVzc2FnZU9wdGlvbnMiLCJlcnJvclNwYW4iLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsIiRmaWVsZENsYXNzRWxlbWVudCIsImRhdGEiLCJPYmplY3QiLCJrZXlzIiwiY2xhc3NlcyIsImZvckVhY2giLCJoYXNDbGFzcyIsInJlbW92ZUNsYXNzIiwiUGFnZU1hbmFnZXIiLCJSZXZpZXciLCJjb2xsYXBzaWJsZUZhY3RvcnkiLCJQcm9kdWN0RGV0YWlscyIsInZpZGVvR2FsbGVyeSIsIlByb2R1Y3QiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImNvbnRleHQiLCJfdGhpcyIsImNhbGwiLCJ1cmwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCIkcmV2aWV3TGluayIsIiRidWxrUHJpY2luZ0xpbmsiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMyIiwiZG9jdW1lbnQiLCJvbiIsImluZGV4T2YiLCJoaXN0b3J5IiwicmVwbGFjZVN0YXRlIiwidGl0bGUiLCJwYXRobmFtZSIsInByb2R1Y3REZXRhaWxzIiwiQkNEYXRhIiwicHJvZHVjdF9hdHRyaWJ1dGVzIiwic2V0UHJvZHVjdFZhcmlhbnQiLCIkcmV2aWV3Rm9ybSIsInJldmlldyIsInJlZ2lzdGVyVmFsaWRhdGlvbiIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByb2R1Y3RSZXZpZXdIYW5kbGVyIiwiYnVsa1ByaWNpbmdIYW5kbGVyIiwidHJpZ2dlciIsImRlZmF1bHQiLCJDb2xsYXBzaWJsZUV2ZW50cyIsIl9kZWZhdWx0Iiwic3VibWl0IiwiJHJldmlld3NDb250ZW50IiwiJGNvbGxhcHNpYmxlIiwiaW5pdExpbmtCaW5kIiwiaW5qZWN0UGFnaW5hdGlvbkxpbmsiLCJjb2xsYXBzZVJldmlld3MiLCIkY29udGVudCIsImNsaWNrIiwiaGFzaCIsIiRuZXh0TGluayIsIiRwcmV2TGluayIsImF0dHIiLCJyZXZpZXdSYXRpbmciLCJyZXZpZXdTdWJqZWN0IiwicmV2aWV3Q29tbWVudCIsInJldmlld0VtYWlsIiwiVmlkZW9HYWxsZXJ5IiwiJGVsZW1lbnQiLCIkcGxheWVyIiwiJHZpZGVvcyIsImN1cnJlbnRWaWRlbyIsImJpbmRFdmVudHMiLCJzZWxlY3ROZXdWaWRlbyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsIiR0YXJnZXQiLCJjdXJyZW50VGFyZ2V0IiwiaWQiLCIkc2VsZWN0ZWRUaHVtYiIsInNldE1haW5WaWRlbyIsInNldEFjdGl2ZVRodW1iIiwiYmluZCIsInBsdWdpbktleSIsIiR2aWRlb0dhbGxlcnkiLCJpbmRleCIsImVsZW1lbnQiLCIkZWwiLCJpc0luaXRpYWxpemVkIl0sInNvdXJjZVJvb3QiOiIifQ==
