"use strict";
(self["webpackChunkPinnacle"] = self["webpackChunkPinnacle"] || []).push([["assets_js_theme_cart_js"],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Cart)
/* harmony export */ });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");





function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; _setPrototypeOf(subClass, superClass); }
function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var Cart = /*#__PURE__*/function (_PageManager) {
  _inheritsLoose(Cart, _PageManager);
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    this.$cartContent = jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-cart-content]');
    this.$cartMessages = jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-cart-status]');
    this.$cartTotals = jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-cart-totals]');
    this.$overlay = jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    this.bindEvents();
  }

  // cartUpdate($target) {
  //     const itemId = $target.data('cartItemid');
  //     const $el = $(`#qty-${itemId}`);
  //     const oldQty = parseInt($el.val(), 10);
  //     const maxQty = parseInt($el.data('quantityMax'), 10);
  //     const minQty = parseInt($el.data('quantityMin'), 10);
  //     const minError = $el.data('quantityMinError');
  //     const maxError = $el.data('quantityMaxError');
  //     const newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;
  //     // Does not quality for min/max quantity
  //     if (newQty < minQty) {
  //         return swal.fire({
  //             text: minError,
  //             icon: 'error',
  //         });
  //     } else if (maxQty > 0 && newQty > maxQty) {
  //         return swal.fire({
  //             text: maxError,
  //             icon: 'error',
  //         });
  //     }

  //     this.$overlay.show();

  //     utils.api.cart.itemUpdate(itemId, newQty, (err, response) => {
  //         this.$overlay.hide();

  //         if (response.data.status === 'succeed') {
  //             // if the quantity is changed "1" from "0", we have to remove the row.
  //             const remove = (newQty === 0);

  //             this.refreshContent(remove);
  //         } else {
  //             $el.val(oldQty);
  //             swal.fire({
  //                 text: response.data.errors.join('\n'),
  //                 icon: 'error',
  //             });
  //         }
  //     });
  // }

  /**
   * IntuitSolutions.net - Interval Quantity
   */;
  _proto.cartUpdate = function cartUpdate($target) {
    var _this = this;
    var itemId = $target.data('cartItemid');
    var $el = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var interval = Number($el.data('interval')) || 1;
    var newQty = null;

    // handles very first button click to get quantity in line with the interval
    if (oldQty === 1 && interval !== 1) {
      oldQty = 0;
    }

    // if user clicked a button, increment or decrement the qty
    if ($target.hasClass('button')) {
      newQty = $target.data('action') === 'inc' ? oldQty + interval : oldQty - interval;
    } else {
      newQty = oldQty;
    }

    // check min/max qty
    if (newQty < minQty) {
      newQty = minQty;
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
        text: "The minimum purchasable quantity is " + minQty,
        icon: 'error'
      });
    } else if (newQty > maxQty) {
      newQty = maxQty;
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
        text: "The maximum purchasable quantity is " + maxQty,
        icon: 'error'
      });
    }

    // check interval qty
    if (newQty % interval !== 0) {
      newQty = newQty + (interval - newQty % interval); // correct the quantity for the user
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
        text: "Please enter increments of " + interval + ".",
        icon: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this.refreshContent(remove);
      } else {
        $el.val(oldQty);
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this2 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = jquery__WEBPACK_IMPORTED_MODULE_6___default()("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;

    // Does not quality for min/max quantity
    if (!newQty) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
        text: invalidEntry + " is not a valid entry",
        icon: 'error'
      });
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
        text: minError,
        icon: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
        text: maxError,
        icon: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this3 = this;
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this3.refreshContent(true);
      } else {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
          text: response.data.errors.join('\n'),
          icon: 'error'
        });
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this4 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.defaultModal)();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      _this4.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__["default"].hooks.on('product-option-change', function (event, option) {
      var $changedOption = jquery__WEBPACK_IMPORTED_MODULE_6___default()(option);
      var $form = $changedOption.parents('form');
      var $submit = jquery__WEBPACK_IMPORTED_MODULE_6___default()('input.button', $form);
      var $messageBox = jquery__WEBPACK_IMPORTED_MODULE_6___default()('.alertMessageBox');
      var item = jquery__WEBPACK_IMPORTED_MODULE_6___default()('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
            text: err,
            icon: 'error'
          });
          return false;
        }
        if (data.purchasing_message) {
          jquery__WEBPACK_IMPORTED_MODULE_6___default()('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this5 = this;
    var $cartItemsRows = jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-item-row]', this.$cartContent);
    var $cartPageTitle = jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__["default"].api.cart.getContent(options, function (err, response) {
      _this5.$cartContent.html(response.content);
      _this5.$cartTotals.html(response.totals);
      _this5.$cartMessages.html(response.statusMessages);
      $cartPageTitle.replaceWith(response.pageTitle);
      _this5.bindEvents();
      _this5.$overlay.hide();
      var quantity = jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-cart-quantity]', _this5.$cartContent).data('cartQuantity') || 0;
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('body').trigger('cart-quantity-update', quantity);
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this6 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = jquery__WEBPACK_IMPORTED_MODULE_6___default()(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    /**
     * IntuitSolutions.net - Interval Quantity
     */
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('.form-input--incrementTotal', this.$cartContent).on('change', function (event) {
      var $target = jquery__WEBPACK_IMPORTED_MODULE_6___default()(event.currentTarget);
      cartUpdate($target); // update cart quantity
    });

    // cart qty manually updates
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = jquery__WEBPACK_IMPORTED_MODULE_6___default()(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdateQtyTextChange($target, preVal);
    });
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = jquery__WEBPACK_IMPORTED_MODULE_6___default()(event.currentTarget).data('cartItemid');
      var string = jquery__WEBPACK_IMPORTED_MODULE_6___default()(event.currentTarget).data('confirmDelete');
      _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
        text: string,
        icon: 'warning',
        showCancelButton: true
      }).then(function (result) {
        if (result.value) {
          // remove item from cart
          cartRemoveItem(itemId);
        }
      });
      event.preventDefault();
    });
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = jquery__WEBPACK_IMPORTED_MODULE_6___default()(event.currentTarget).data('itemEdit');
      event.preventDefault();
      // edit item in cart
      _this6.cartEditOptions(itemId);
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this7 = this;
    var $couponContainer = jquery__WEBPACK_IMPORTED_MODULE_6___default()('.coupon-code');
    var $couponForm = jquery__WEBPACK_IMPORTED_MODULE_6___default()('.coupon-form');
    var $codeInput = jquery__WEBPACK_IMPORTED_MODULE_6___default()('[name="couponcode"]', $couponForm);
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(event.currentTarget).hide();
      $couponContainer.show();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.coupon-code-cancel').hide();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
          text: $codeInput.data('error'),
          icon: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this7.refreshContent();
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
            text: response.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this8 = this;
    var $certContainer = jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gift-certificate-code');
    var $certForm = jquery__WEBPACK_IMPORTED_MODULE_6___default()('.cart-gift-certificate-form');
    var $certInput = jquery__WEBPACK_IMPORTED_MODULE_6___default()('[name="certcode"]', $certForm);
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(event.currentTarget).toggle();
      $certContainer.toggle();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gift-certificate-cancel').toggle();
    });
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gift-certificate-add').toggle();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!(0,_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_7__["default"])(code)) {
        return _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
          text: $certInput.data('error'),
          icon: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this8.refreshContent();
        } else {
          _global_sweet_alert__WEBPACK_IMPORTED_MODULE_11__["default"].fire({
            text: resp.data.errors.join('\n'),
            icon: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this9 = this;
    var modal = (0,_global_modal__WEBPACK_IMPORTED_MODULE_10__.defaultModal)();
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-item-giftwrap]').on('click', function (event) {
      var itemId = jquery__WEBPACK_IMPORTED_MODULE_6___default()(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_8__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this9.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('.giftWrapping-select').on('change', function (event) {
      var $select = jquery__WEBPACK_IMPORTED_MODULE_6___default()(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      jquery__WEBPACK_IMPORTED_MODULE_6___default()(".giftWrapping-image-" + index).hide();
      jquery__WEBPACK_IMPORTED_MODULE_6___default()("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("#giftWrapping-message-" + index).show();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_6___default()("#giftWrapping-message-" + index).hide();
      }
    });
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = jquery__WEBPACK_IMPORTED_MODULE_6___default()('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = jquery__WEBPACK_IMPORTED_MODULE_6___default()('.giftWrapping-single');
      var $multiForm = jquery__WEBPACK_IMPORTED_MODULE_6___default()('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    jquery__WEBPACK_IMPORTED_MODULE_6___default()('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_9__["default"](jquery__WEBPACK_IMPORTED_MODULE_6___default()('[data-shipping-estimator]'));
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_5__["default"]);


/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ShippingEstimator)
/* harmony export */ });
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan.js */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");









var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = jquery__WEBPACK_IMPORTED_MODULE_3___default()('[data-field-type="State"]', this.$element);
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = (0,_common_nod__WEBPACK_IMPORTED_MODULE_5__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if (jquery__WEBPACK_IMPORTED_MODULE_3___default()(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: jquery__WEBPACK_IMPORTED_MODULE_3___default()(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = jquery__WEBPACK_IMPORTED_MODULE_3___default()(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.estimator-form--ups');
      var $estimatorFormDefault = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    (0,_common_state_country__WEBPACK_IMPORTED_MODULE_4__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        _global_sweet_alert__WEBPACK_IMPORTED_MODULE_8__["default"].fire({
          text: err,
          icon: 'error'
        });
        throw new Error(err);
      }
      var $field = jquery__WEBPACK_IMPORTED_MODULE_3___default()(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_form_utils__WEBPACK_IMPORTED_MODULE_7__.Validators.cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.shipping-estimator');
    var $estimatorForm = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name="shipping-country"]', $estimatorForm).val(),
        state_id: jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name="shipping-state"]', $estimatorForm).val(),
        city: jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: jquery__WEBPACK_IMPORTED_MODULE_3___default()('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.shipping-quotes').html(response.content);

        // bind the select button
        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_6__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.shipping-estimate-hide').show();
    });
    jquery__WEBPACK_IMPORTED_MODULE_3___default()('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.shipping-estimate-show').show();
      jquery__WEBPACK_IMPORTED_MODULE_3___default()('.shipping-estimate-hide').hide();
    });
  };
  return ShippingEstimator;
}();


/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(cert) {
  if (typeof cert !== 'string') {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLmFzc2V0c19qc190aGVtZV9jYXJ0X2pzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ2xCO0FBRXlDO0FBQ2pCO0FBQ1c7QUFDWjtBQUNOO0FBQUEsSUFFbkJPLElBQUksMEJBQUFDLFlBQUE7RUFBQUMsY0FBQSxDQUFBRixJQUFBLEVBQUFDLFlBQUE7RUFBQSxTQUFBRCxLQUFBO0lBQUEsT0FBQUMsWUFBQSxDQUFBRSxLQUFBLE9BQUFDLFNBQUE7RUFBQTtFQUFBLElBQUFDLE1BQUEsR0FBQUwsSUFBQSxDQUFBTSxTQUFBO0VBQUFELE1BQUEsQ0FDckJFLE9BQU8sR0FBUCxTQUFBQSxRQUFBLEVBQVU7SUFDTixJQUFJLENBQUNDLFlBQVksR0FBR2QsNkNBQUMsQ0FBQyxxQkFBcUIsQ0FBQztJQUM1QyxJQUFJLENBQUNlLGFBQWEsR0FBR2YsNkNBQUMsQ0FBQyxvQkFBb0IsQ0FBQztJQUM1QyxJQUFJLENBQUNnQixXQUFXLEdBQUdoQiw2Q0FBQyxDQUFDLG9CQUFvQixDQUFDO0lBQzFDLElBQUksQ0FBQ2lCLFFBQVEsR0FBR2pCLDZDQUFDLENBQUMsNkJBQTZCLENBQUMsQ0FDM0NrQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUM7O0lBRWIsSUFBSSxDQUFDQyxVQUFVLENBQUMsQ0FBQztFQUNyQjs7RUFFQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7O0VBRUE7RUFDQTs7RUFFQTtFQUNBO0VBQ0E7O0VBRUE7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7RUFDQTtFQUNBO0VBQ0E7O0VBRUE7QUFDSjtBQUNBLEtBRkk7RUFBQVIsTUFBQSxDQUdBUyxVQUFVLEdBQVYsU0FBQUEsV0FBV0MsT0FBTyxFQUFFO0lB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QyxDQUFDO01BQ25DdEMsNkNBQUMsQ0FBQyx5QkFBeUIsQ0FBQyxDQUFDa0IsSUFBSSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUFmLGlCQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7OztBQ3RMTCw2QkFBZSxvQ0FBVThMLElBQUksRUFBRTtFQUMzQixJQUFJLE9BQU9BLElBQUksS0FBSyxRQUFRLEVBQUU7SUFDMUIsT0FBTyxLQUFLO0VBQ2hCOztFQUVBO0VBQ0EsT0FBTyxJQUFJO0FBQ2YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9QaW5uYWNsZS8uL2Fzc2V0cy9qcy90aGVtZS9jYXJ0LmpzIiwid2VicGFjazovL1Bpbm5hY2xlLy4vYXNzZXRzL2pzL3RoZW1lL2NhcnQvc2hpcHBpbmctZXN0aW1hdG9yLmpzIiwid2VicGFjazovL1Bpbm5hY2xlLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUGFnZU1hbmFnZXIgZnJvbSAnLi9wYWdlLW1hbmFnZXInO1xuaW1wb3J0ICQgZnJvbSAnanF1ZXJ5JztcbmltcG9ydCBfIGZyb20gJ2xvZGFzaCc7XG5pbXBvcnQgZ2lmdENlcnRDaGVjayBmcm9tICcuL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvcic7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IFNoaXBwaW5nRXN0aW1hdG9yIGZyb20gJy4vY2FydC9zaGlwcGluZy1lc3RpbWF0b3InO1xuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDYXJ0IGV4dGVuZHMgUGFnZU1hbmFnZXIge1xuICAgIG9uUmVhZHkoKSB7XG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50ID0gJCgnW2RhdGEtY2FydC1jb250ZW50XScpO1xuICAgICAgICB0aGlzLiRjYXJ0TWVzc2FnZXMgPSAkKCdbZGF0YS1jYXJ0LXN0YXR1c10nKTtcbiAgICAgICAgdGhpcy4kY2FydFRvdGFscyA9ICQoJ1tkYXRhLWNhcnQtdG90YWxzXScpO1xuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydF0gLmxvYWRpbmdPdmVybGF5JylcbiAgICAgICAgICAgIC5oaWRlKCk7IC8vIFRPRE86IHRlbXBvcmFyeSB1bnRpbCByb3BlciBwdWxscyBpbiBoaXMgY2FydCBjb21wb25lbnRzXG5cbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgLy8gY2FydFVwZGF0ZSgkdGFyZ2V0KSB7XG4gICAgLy8gICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgIC8vICAgICBjb25zdCAkZWwgPSAkKGAjcXR5LSR7aXRlbUlkfWApO1xuICAgIC8vICAgICBjb25zdCBvbGRRdHkgPSBwYXJzZUludCgkZWwudmFsKCksIDEwKTtcbiAgICAvLyAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAvLyAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAvLyAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xuICAgIC8vICAgICBjb25zdCBtYXhFcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1heEVycm9yJyk7XG4gICAgLy8gICAgIGNvbnN0IG5ld1F0eSA9ICR0YXJnZXQuZGF0YSgnYWN0aW9uJykgPT09ICdpbmMnID8gb2xkUXR5ICsgMSA6IG9sZFF0eSAtIDE7XG4gICAgLy8gICAgIC8vIERvZXMgbm90IHF1YWxpdHkgZm9yIG1pbi9tYXggcXVhbnRpdHlcbiAgICAvLyAgICAgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XG4gICAgLy8gICAgICAgICAgICAgdGV4dDogbWluRXJyb3IsXG4gICAgLy8gICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAvLyAgICAgICAgIH0pO1xuICAgIC8vICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAvLyAgICAgICAgICAgICB0ZXh0OiBtYXhFcnJvcixcbiAgICAvLyAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgIC8vICAgICAgICAgfSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICB0aGlzLiRvdmVybGF5LnNob3coKTtcblxuICAgIC8vICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgIC8vICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAvLyAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAvLyAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcblxuICAgIC8vICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgIC8vICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgLy8gICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgIC8vICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgIC8vICAgICAgICAgICAgIH0pO1xuICAgIC8vICAgICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAvLyB9XG5cbiAgICAvKipcbiAgICAgKiBJbnR1aXRTb2x1dGlvbnMubmV0IC0gSW50ZXJ2YWwgUXVhbnRpdHlcbiAgICAgKi9cbiAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpIHtcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XG4gICAgICAgIGxldCBvbGRRdHkgPSBwYXJzZUludCgkZWwudmFsKCksIDEwKTtcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3QgaW50ZXJ2YWwgPSBOdW1iZXIoJGVsLmRhdGEoJ2ludGVydmFsJykpIHx8IDE7XG4gICAgICAgIGxldCBuZXdRdHkgPSBudWxsO1xuXG4gICAgICAgIC8vIGhhbmRsZXMgdmVyeSBmaXJzdCBidXR0b24gY2xpY2sgdG8gZ2V0IHF1YW50aXR5IGluIGxpbmUgd2l0aCB0aGUgaW50ZXJ2YWxcbiAgICAgICAgaWYgKG9sZFF0eSA9PT0gMSAmJiBpbnRlcnZhbCAhPT0gMSkge1xuICAgICAgICAgICAgb2xkUXR5ID0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGlmIHVzZXIgY2xpY2tlZCBhIGJ1dHRvbiwgaW5jcmVtZW50IG9yIGRlY3JlbWVudCB0aGUgcXR5XG4gICAgICAgIGlmICgkdGFyZ2V0Lmhhc0NsYXNzKCdidXR0b24nKSkge1xuICAgICAgICAgICAgbmV3UXR5ID0gJHRhcmdldC5kYXRhKCdhY3Rpb24nKSA9PT0gJ2luYydcbiAgICAgICAgICAgICAgICA/IG9sZFF0eSArIGludGVydmFsXG4gICAgICAgICAgICAgICAgOiBvbGRRdHkgLSBpbnRlcnZhbDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG5ld1F0eSA9IG9sZFF0eTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIG1pbi9tYXggcXR5XG4gICAgICAgIGlmIChuZXdRdHkgPCBtaW5RdHkpIHtcbiAgICAgICAgICAgIG5ld1F0eSA9IG1pblF0eTtcbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogYFRoZSBtaW5pbXVtIHB1cmNoYXNhYmxlIHF1YW50aXR5IGlzICR7bWluUXR5fWAsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKG5ld1F0eSA+IG1heFF0eSkge1xuICAgICAgICAgICAgbmV3UXR5ID0gbWF4UXR5O1xuICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBgVGhlIG1heGltdW0gcHVyY2hhc2FibGUgcXVhbnRpdHkgaXMgJHttYXhRdHl9YCxcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjaGVjayBpbnRlcnZhbCBxdHlcbiAgICAgICAgaWYgKChuZXdRdHkgJSBpbnRlcnZhbCkgIT09IDApIHtcbiAgICAgICAgICAgIG5ld1F0eSA9IG5ld1F0eSArIChpbnRlcnZhbCAtIChuZXdRdHkgJSBpbnRlcnZhbCkpOyAvLyBjb3JyZWN0IHRoZSBxdWFudGl0eSBmb3IgdGhlIHVzZXJcbiAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgdGV4dDogYFBsZWFzZSBlbnRlciBpbmNyZW1lbnRzIG9mICR7aW50ZXJ2YWx9LmAsXG4gICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVVwZGF0ZShpdGVtSWQsIG5ld1F0eSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xuXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZWVkJykge1xuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XG5cbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHJlbW92ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsID0gbnVsbCkge1xuICAgICAgICBjb25zdCBpdGVtSWQgPSAkdGFyZ2V0LmRhdGEoJ2NhcnRJdGVtaWQnKTtcbiAgICAgICAgY29uc3QgJGVsID0gJChgI3F0eS0ke2l0ZW1JZH1gKTtcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcbiAgICAgICAgY29uc3QgbWluUXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWluJyksIDEwKTtcbiAgICAgICAgY29uc3Qgb2xkUXR5ID0gcHJlVmFsICE9PSBudWxsID8gcHJlVmFsIDogbWluUXR5O1xuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcbiAgICAgICAgY29uc3QgbmV3UXR5ID0gcGFyc2VJbnQoTnVtYmVyKCRlbC52YWwoKSksIDEwKTtcbiAgICAgICAgbGV0IGludmFsaWRFbnRyeTtcblxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XG4gICAgICAgIGlmICghbmV3UXR5KSB7XG4gICAgICAgICAgICBpbnZhbGlkRW50cnkgPSAkZWwudmFsKCk7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBgJHtpbnZhbGlkRW50cnl9IGlzIG5vdCBhIHZhbGlkIGVudHJ5YCxcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3UXR5IDwgbWluUXR5KSB7XG4gICAgICAgICAgICAkZWwudmFsKG9sZFF0eSk7XG4gICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcbiAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcbiAgICAgICAgICAgIHJldHVybiBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IG1heEVycm9yLFxuICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XG4gICAgICAgICAgICAgICAgLy8gaWYgdGhlIHF1YW50aXR5IGlzIGNoYW5nZWQgXCIxXCIgZnJvbSBcIjBcIiwgd2UgaGF2ZSB0byByZW1vdmUgdGhlIHJvdy5cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcblxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xuICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBjYXJ0UmVtb3ZlSXRlbShpdGVtSWQpIHtcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoaXRlbUlkLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgY2FydEVkaXRPcHRpb25zKGl0ZW1JZCkge1xuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6ICdjYXJ0L21vZGFscy9jb25maWd1cmUtcHJvZHVjdCcsXG4gICAgICAgIH07XG5cbiAgICAgICAgbW9kYWwub3BlbigpO1xuXG4gICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5jb25maWd1cmVJbkNhcnQoaXRlbUlkLCBvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB1dGlscy5ob29rcy5vbigncHJvZHVjdC1vcHRpb24tY2hhbmdlJywgKGV2ZW50LCBvcHRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRjaGFuZ2VkT3B0aW9uID0gJChvcHRpb24pO1xuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XG4gICAgICAgICAgICBjb25zdCAkc3VibWl0ID0gJCgnaW5wdXQuYnV0dG9uJywgJGZvcm0pO1xuICAgICAgICAgICAgY29uc3QgJG1lc3NhZ2VCb3ggPSAkKCcuYWxlcnRNZXNzYWdlQm94Jyk7XG4gICAgICAgICAgICBjb25zdCBpdGVtID0gJCgnW25hbWU9XCJpdGVtX2lkXCJdJywgJGZvcm0pLmF0dHIoJ3ZhbHVlJyk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5wcm9kdWN0QXR0cmlidXRlcy5vcHRpb25DaGFuZ2UoaXRlbSwgJGZvcm0uc2VyaWFsaXplKCksIChlcnIsIHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcblxuICAgICAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcbiAgICAgICAgICAgICAgICAgICAgICAgIGljb246ICdlcnJvcicsXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKSB7XG4gICAgICAgICAgICAgICAgICAgICQoJ3AuYWxlcnRCb3gtbWVzc2FnZScsICRtZXNzYWdlQm94KS50ZXh0KGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZWZyZXNoQ29udGVudChyZW1vdmUpIHtcbiAgICAgICAgY29uc3QgJGNhcnRJdGVtc1Jvd3MgPSAkKCdbZGF0YS1pdGVtLXJvd10nLCB0aGlzLiRjYXJ0Q29udGVudCk7XG4gICAgICAgIGNvbnN0ICRjYXJ0UGFnZVRpdGxlID0gJCgnW2RhdGEtY2FydC1wYWdlLXRpdGxlXScpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnY2FydC9jb250ZW50JyxcbiAgICAgICAgICAgICAgICB0b3RhbHM6ICdjYXJ0L3RvdGFscycsXG4gICAgICAgICAgICAgICAgcGFnZVRpdGxlOiAnY2FydC9wYWdlLXRpdGxlJyxcbiAgICAgICAgICAgICAgICBzdGF0dXNNZXNzYWdlczogJ2NhcnQvc3RhdHVzLW1lc3NhZ2VzJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XG5cbiAgICAgICAgLy8gUmVtb3ZlIGxhc3QgaXRlbSBmcm9tIGNhcnQ/IFJlbG9hZFxuICAgICAgICBpZiAocmVtb3ZlICYmICRjYXJ0SXRlbXNSb3dzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENvbnRlbnQob3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50Lmh0bWwocmVzcG9uc2UuY29udGVudCk7XG4gICAgICAgICAgICB0aGlzLiRjYXJ0VG90YWxzLmh0bWwocmVzcG9uc2UudG90YWxzKTtcbiAgICAgICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcy5odG1sKHJlc3BvbnNlLnN0YXR1c01lc3NhZ2VzKTtcblxuICAgICAgICAgICAgJGNhcnRQYWdlVGl0bGUucmVwbGFjZVdpdGgocmVzcG9uc2UucGFnZVRpdGxlKTtcbiAgICAgICAgICAgIHRoaXMuYmluZEV2ZW50cygpO1xuICAgICAgICAgICAgdGhpcy4kb3ZlcmxheS5oaWRlKCk7XG5cbiAgICAgICAgICAgIGNvbnN0IHF1YW50aXR5ID0gJCgnW2RhdGEtY2FydC1xdWFudGl0eV0nLCB0aGlzLiRjYXJ0Q29udGVudCkuZGF0YSgnY2FydFF1YW50aXR5JykgfHwgMDtcblxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kQ2FydEV2ZW50cygpIHtcbiAgICAgICAgY29uc3QgZGVib3VuY2VUaW1lb3V0ID0gNDAwO1xuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgY29uc3QgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UgPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgY29uc3QgY2FydFJlbW92ZUl0ZW0gPSBfLmJpbmQoXy5kZWJvdW5jZSh0aGlzLmNhcnRSZW1vdmVJdGVtLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcbiAgICAgICAgbGV0IHByZVZhbDtcblxuICAgICAgICAvLyBjYXJ0IHVwZGF0ZVxuICAgICAgICAkKCdbZGF0YS1jYXJ0LXVwZGF0ZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xuICAgICAgICB9KTtcblxuICAgICAgICAvKipcbiAgICAgICAgICogSW50dWl0U29sdXRpb25zLm5ldCAtIEludGVydmFsIFF1YW50aXR5XG4gICAgICAgICAqL1xuICAgICAgICAkKCcuZm9ybS1pbnB1dC0taW5jcmVtZW50VG90YWwnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NoYW5nZScsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpOyAvLyB1cGRhdGUgY2FydCBxdWFudGl0eVxuICAgICAgICB9KTtcblxuICAgICAgICAvLyBjYXJ0IHF0eSBtYW51YWxseSB1cGRhdGVzXG4gICAgICAgICQoJy5jYXJ0LWl0ZW0tcXR5LWlucHV0JywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdmb2N1cycsIGZ1bmN0aW9uIG9uUXR5Rm9jdXMoKSB7XG4gICAgICAgICAgICBwcmVWYWwgPSB0aGlzLnZhbHVlO1xuICAgICAgICB9KS5jaGFuZ2UoZXZlbnQgPT4ge1xuICAgICAgICAgICAgY29uc3QgJHRhcmdldCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgY2FydCBxdWFudGl0eVxuICAgICAgICAgICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmNhcnQtcmVtb3ZlJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydEl0ZW1pZCcpO1xuICAgICAgICAgICAgY29uc3Qgc3RyaW5nID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdjb25maXJtRGVsZXRlJyk7XG4gICAgICAgICAgICBzd2FsLmZpcmUoe1xuICAgICAgICAgICAgICAgIHRleHQ6IHN0cmluZyxcbiAgICAgICAgICAgICAgICBpY29uOiAnd2FybmluZycsXG4gICAgICAgICAgICAgICAgc2hvd0NhbmNlbEJ1dHRvbjogdHJ1ZSxcbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3VsdCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXN1bHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGl0ZW0gZnJvbSBjYXJ0XG4gICAgICAgICAgICAgICAgICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCdbZGF0YS1pdGVtLWVkaXRdJywgdGhpcy4kY2FydENvbnRlbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnaXRlbUVkaXQnKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIC8vIGVkaXQgaXRlbSBpbiBjYXJ0XG4gICAgICAgICAgICB0aGlzLmNhcnRFZGl0T3B0aW9ucyhpdGVtSWQpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kUHJvbW9Db2RlRXZlbnRzKCkge1xuICAgICAgICBjb25zdCAkY291cG9uQ29udGFpbmVyID0gJCgnLmNvdXBvbi1jb2RlJyk7XG4gICAgICAgIGNvbnN0ICRjb3Vwb25Gb3JtID0gJCgnLmNvdXBvbi1mb3JtJyk7XG4gICAgICAgIGNvbnN0ICRjb2RlSW5wdXQgPSAkKCdbbmFtZT1cImNvdXBvbmNvZGVcIl0nLCAkY291cG9uRm9ybSk7XG5cbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5zaG93KCk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuc2hvdygpO1xuICAgICAgICAgICAgJGNvZGVJbnB1dC50cmlnZ2VyKCdmb2N1cycpO1xuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5oaWRlKCk7XG4gICAgICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykuaGlkZSgpO1xuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLnNob3coKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNvdXBvbkZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY29kZUlucHV0LnZhbCgpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAvLyBFbXB0eSBjb2RlXG4gICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJGNvZGVJbnB1dC5kYXRhKCdlcnJvcicpLFxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZXJyb3InLFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUNvZGUoY29kZSwgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc3dhbC5maXJlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0Q2VydGlmaWNhdGVFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRjZXJ0Q29udGFpbmVyID0gJCgnLmdpZnQtY2VydGlmaWNhdGUtY29kZScpO1xuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcbiAgICAgICAgY29uc3QgJGNlcnRJbnB1dCA9ICQoJ1tuYW1lPVwiY2VydGNvZGVcIl0nLCAkY2VydEZvcm0pO1xuXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtYWRkJykudG9nZ2xlKCk7XG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS50b2dnbGUoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJGNlcnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgaWYgKCFnaWZ0Q2VydENoZWNrKGNvZGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICRjZXJ0SW5wdXQuZGF0YSgnZXJyb3InKSxcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlHaWZ0Q2VydGlmaWNhdGUoY29kZSwgKGVyciwgcmVzcCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXNwLmRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxuICAgICAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0IG1vZGFsID0gZGVmYXVsdE1vZGFsKCk7XG5cbiAgICAgICAgJCgnW2RhdGEtaXRlbS1naWZ0d3JhcF0nKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1HaWZ0d3JhcCcpO1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogJ2NhcnQvbW9kYWxzL2dpZnQtd3JhcHBpbmctZm9ybScsXG4gICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zKGl0ZW1JZCwgb3B0aW9ucywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRm9ybSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRHaWZ0V3JhcHBpbmdGb3JtKCkge1xuICAgICAgICAkKCcuZ2lmdFdyYXBwaW5nLXNlbGVjdCcpLm9uKCdjaGFuZ2UnLCBldmVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcbiAgICAgICAgICAgIGNvbnN0IGlkID0gJHNlbGVjdC52YWwoKTtcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gJHNlbGVjdC5kYXRhKCdpbmRleCcpO1xuXG4gICAgICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBhbGxvd01lc3NhZ2UgPSAkc2VsZWN0LmZpbmQoYG9wdGlvblt2YWx1ZT0ke2lkfV1gKS5kYXRhKCdhbGxvd01lc3NhZ2UnKTtcblxuICAgICAgICAgICAgJChgLmdpZnRXcmFwcGluZy1pbWFnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctaW1hZ2UtJHtpbmRleH0tJHtpZH1gKS5zaG93KCk7XG5cbiAgICAgICAgICAgIGlmIChhbGxvd01lc3NhZ2UpIHtcbiAgICAgICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLW1lc3NhZ2UtJHtpbmRleH1gKS5zaG93KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICQoYCNnaWZ0V3JhcHBpbmctbWVzc2FnZS0ke2luZGV4fWApLmhpZGUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS50cmlnZ2VyKCdjaGFuZ2UnKTtcblxuICAgICAgICBmdW5jdGlvbiB0b2dnbGVWaWV3cygpIHtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gJCgnaW5wdXQ6cmFkaW9bbmFtZSA9XCJnaWZ0d3JhcHR5cGVcIl06Y2hlY2tlZCcpLnZhbCgpO1xuICAgICAgICAgICAgY29uc3QgJHNpbmdsZUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLXNpbmdsZScpO1xuICAgICAgICAgICAgY29uc3QgJG11bHRpRm9ybSA9ICQoJy5naWZ0V3JhcHBpbmctbXVsdGlwbGUnKTtcblxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnc2FtZScpIHtcbiAgICAgICAgICAgICAgICAkc2luZ2xlRm9ybS5zaG93KCk7XG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5oaWRlKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkbXVsdGlGb3JtLnNob3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgICQoJ1tuYW1lPVwiZ2lmdHdyYXB0eXBlXCJdJykub24oJ2NsaWNrJywgdG9nZ2xlVmlld3MpO1xuXG4gICAgICAgIHRvZ2dsZVZpZXdzKCk7XG4gICAgfVxuXG4gICAgYmluZEV2ZW50cygpIHtcbiAgICAgICAgdGhpcy5iaW5kQ2FydEV2ZW50cygpO1xuICAgICAgICB0aGlzLmJpbmRQcm9tb0NvZGVFdmVudHMoKTtcbiAgICAgICAgdGhpcy5iaW5kR2lmdFdyYXBwaW5nRXZlbnRzKCk7XG4gICAgICAgIHRoaXMuYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpO1xuXG4gICAgICAgIC8vIGluaXRpYXRlIHNoaXBwaW5nIGVzdGltYXRvciBtb2R1bGVcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9IG5ldyBTaGlwcGluZ0VzdGltYXRvcigkKCdbZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJykpO1xuICAgIH1cbn1cbiIsImltcG9ydCAkIGZyb20gJ2pxdWVyeSc7XG5pbXBvcnQgc3RhdGVDb3VudHJ5IGZyb20gJy4uL2NvbW1vbi9zdGF0ZS1jb3VudHJ5JztcbmltcG9ydCBub2QgZnJvbSAnLi4vY29tbW9uL25vZCc7XG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xuaW1wb3J0IHsgVmFsaWRhdG9ycyB9IGZyb20gJy4uL2NvbW1vbi9mb3JtLXV0aWxzJztcbmltcG9ydCBzd2FsIGZyb20gJy4uL2dsb2JhbC9zd2VldC1hbGVydCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNoaXBwaW5nRXN0aW1hdG9yIHtcbiAgICBjb25zdHJ1Y3RvcigkZWxlbWVudCkge1xuICAgICAgICB0aGlzLiRlbGVtZW50ID0gJGVsZW1lbnQ7XG5cbiAgICAgICAgdGhpcy4kc3RhdGUgPSAkKCdbZGF0YS1maWVsZC10eXBlPVwiU3RhdGVcIl0nLCB0aGlzLiRlbGVtZW50KTtcbiAgICAgICAgdGhpcy5pbml0Rm9ybVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCk7XG4gICAgICAgIHRoaXMuYmluZEVzdGltYXRvckV2ZW50cygpO1xuICAgIH1cblxuICAgIGluaXRGb3JtVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9ICdmb3JtW2RhdGEtc2hpcHBpbmctZXN0aW1hdG9yXSc7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IgPSBub2Qoe1xuICAgICAgICAgICAgc3VibWl0OiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSAuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0YCxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXN1Ym1pdCcsIHRoaXMuJGVsZW1lbnQpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIC8vIFdoZW4gc3dpdGNoaW5nIGJldHdlZW4gY291bnRyaWVzLCB0aGUgc3RhdGUvcmVnaW9uIGlzIGR5bmFtaWNcbiAgICAgICAgICAgIC8vIE9ubHkgcGVyZm9ybSBhIGNoZWNrIGZvciBhbGwgZmllbGRzIHdoZW4gY291bnRyeSBoYXMgYSB2YWx1ZVxuICAgICAgICAgICAgLy8gT3RoZXJ3aXNlIGFyZUFsbCgndmFsaWQnKSB3aWxsIGNoZWNrIGNvdW50cnkgZm9yIHZhbGlkaXR5XG4gICAgICAgICAgICBpZiAoJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gKS52YWwoKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICh0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFyZUFsbCgndmFsaWQnKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5iaW5kVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZVZhbGlkYXRpb24oKTtcbiAgICAgICAgdGhpcy5iaW5kVVBTUmF0ZXMoKTtcbiAgICB9XG5cbiAgICBiaW5kVmFsaWRhdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5hZGQoW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHNlbGVjdG9yOiBgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl1gLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb3VudHJ5SWQgPSBOdW1iZXIodmFsKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gY291bnRyeUlkICE9PSAwICYmICFOdW1iZXIuaXNOYU4oY291bnRyeUlkKTtcblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ0NvdW50cnlcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICBiaW5kU3RhdGVWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICQoYCR7dGhpcy5zaGlwcGluZ0VzdGltYXRvcn0gc2VsZWN0W25hbWU9XCJzaGlwcGluZy1zdGF0ZVwiXWApLFxuICAgICAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJlc3VsdDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCAkZWxlID0gJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCk7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCRlbGUubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbGVWYWwgPSAkZWxlLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSBlbGVWYWwgJiYgZWxlVmFsLmxlbmd0aCAmJiBlbGVWYWwgIT09ICdTdGF0ZS9wcm92aW5jZSc7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBjYihyZXN1bHQpO1xuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnVGhlIFxcJ1N0YXRlL1Byb3ZpbmNlXFwnIGZpZWxkIGNhbm5vdCBiZSBibGFuay4nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogVG9nZ2xlIGJldHdlZW4gZGVmYXVsdCBzaGlwcGluZyBhbmQgdXBzIHNoaXBwaW5nIHJhdGVzXG4gICAgICovXG4gICAgYmluZFVQU1JhdGVzKCkge1xuICAgICAgICBjb25zdCBVUFNSYXRlVG9nZ2xlID0gJy5lc3RpbWF0b3ItZm9ybS10b2dnbGVVUFNSYXRlJztcblxuICAgICAgICAkKCdib2R5Jykub24oJ2NsaWNrJywgVVBTUmF0ZVRvZ2dsZSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybVVwcyA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tdXBzJyk7XG4gICAgICAgICAgICBjb25zdCAkZXN0aW1hdG9yRm9ybURlZmF1bHQgPSAkKCcuZXN0aW1hdG9yLWZvcm0tLWRlZmF1bHQnKTtcblxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1VcHMudG9nZ2xlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICRlc3RpbWF0b3JGb3JtRGVmYXVsdC50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBiaW5kU3RhdGVDb3VudHJ5Q2hhbmdlKCkge1xuICAgICAgICBsZXQgJGxhc3Q7XG5cbiAgICAgICAgLy8gUmVxdWVzdHMgdGhlIHN0YXRlcyBmb3IgYSBjb3VudHJ5IHdpdGggQUpBWFxuICAgICAgICBzdGF0ZUNvdW50cnkodGhpcy4kc3RhdGUsIHRoaXMuY29udGV4dCwgeyB1c2VJZEZvclN0YXRlczogdHJ1ZSB9LCAoZXJyLCBmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGVycikge1xuICAgICAgICAgICAgICAgIHN3YWwuZmlyZSh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuZ2V0U3RhdHVzKHRoaXMuJHN0YXRlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZmllbGQuYXR0cigncGxhY2Vob2xkZXInLCAnU3RhdGUvcHJvdmluY2UnKTtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaGVuIHlvdSBjaGFuZ2UgYSBjb3VudHJ5LCB5b3Ugc3dhcCB0aGUgc3RhdGUvcHJvdmluY2UgYmV0d2VlbiBhbiBpbnB1dCBhbmQgYSBzZWxlY3QgZHJvcGRvd25cbiAgICAgICAgICAgIC8vIE5vdCBhbGwgY291bnRyaWVzIHJlcXVpcmUgdGhlIHByb3ZpbmNlIHRvIGJlIGZpbGxlZFxuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZW1vdmUgdGhpcyBjbGFzcyB3aGVuIHdlIHN3YXAgc2luY2Ugbm9kIHZhbGlkYXRpb24gZG9lc24ndCBjbGVhbnVwIGZvciB1c1xuICAgICAgICAgICAgJCh0aGlzLnNoaXBwaW5nRXN0aW1hdG9yKS5maW5kKCcuZm9ybS1maWVsZC0tc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdmb3JtLWZpZWxkLS1zdWNjZXNzJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFc3RpbWF0b3JFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtID0gJCgnLmVzdGltYXRvci1mb3JtJyk7XG5cbiAgICAgICAgJGVzdGltYXRvckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgc3RhdGVfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctc3RhdGVcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgY2l0eTogJCgnW25hbWU9XCJzaGlwcGluZy1jaXR5XCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIHppcF9jb2RlOiAkKCdbbmFtZT1cInNoaXBwaW5nLXppcFwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldFNoaXBwaW5nUXVvdGVzKHBhcmFtcywgJ2NhcnQvc2hpcHBpbmctcXVvdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuc2hpcHBpbmctcXVvdGVzJykuaHRtbChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGJpbmQgdGhlIHNlbGVjdCBidXR0b25cbiAgICAgICAgICAgICAgICAkKCcuc2VsZWN0LXNoaXBwaW5nLXF1b3RlJykub24oJ2NsaWNrJywgY2xpY2tFdmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlSWQgPSAkKCcuc2hpcHBpbmctcXVvdGU6Y2hlY2tlZCcpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5zdWJtaXRTaGlwcGluZ1F1b3RlKHF1b3RlSWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRlc3RpbWF0b3JDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykuc2hvdygpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxuICAgIHJldHVybiB0cnVlO1xufVxuIl0sIm5hbWVzIjpbIlBhZ2VNYW5hZ2VyIiwiJCIsImdpZnRDZXJ0Q2hlY2siLCJ1dGlscyIsIlNoaXBwaW5nRXN0aW1hdG9yIiwiZGVmYXVsdE1vZGFsIiwic3dhbCIsIkNhcnQiLCJfUGFnZU1hbmFnZXIiLCJfaW5oZXJpdHNMb29zZSIsImFwcGx5IiwiYXJndW1lbnRzIiwiX3Byb3RvIiwicHJvdG90eXBlIiwib25SZWFkeSIsIiRjYXJ0Q29udGVudCIsIiRjYXJ0TWVzc2FnZXMiLCIkY2FydFRvdGFscyIsIiRvdmVybGF5IiwiaGlkZSIsImJpbmRFdmVudHMiLCJjYXJ0VXBkYXRlIiwiJHRhcmdldCIsIl90aGlzIiwiaXRlbUlkIiwiZGF0YSIsIiRlbCIsIm9sZFF0eSIsInBhcnNlSW50IiwidmFsIiwibWF4UXR5IiwibWluUXR5IiwiaW50ZXJ2YWwiLCJOdW1iZXIiLCJuZXdRdHkiLCJoYXNDbGFzcyIsImZpcmUiLCJ0ZXh0IiwiaWNvbiIsInNob3ciLCJhcGkiLCJjYXJ0IiwiaXRlbVVwZGF0ZSIsImVyciIsInJlc3BvbnNlIiwic3RhdHVzIiwicmVtb3ZlIiwicmVmcmVzaENvbnRlbnQiLCJlcnJvcnMiLCJqb2luIiwiY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UiLCJwcmVWYWwiLCJfdGhpczIiLCJtaW5FcnJvciIsIm1heEVycm9yIiwiaW52YWxpZEVudHJ5IiwiY2FydFJlbW92ZUl0ZW0iLCJfdGhpczMiLCJpdGVtUmVtb3ZlIiwiY2FydEVkaXRPcHRpb25zIiwiX3RoaXM0IiwibW9kYWwiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJvcGVuIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJjb25maWd1cmVJbkNhcnQiLCJ1cGRhdGVDb250ZW50IiwiY29udGVudCIsImJpbmRHaWZ0V3JhcHBpbmdGb3JtIiwiaG9va3MiLCJvbiIsImV2ZW50Iiwib3B0aW9uIiwiJGNoYW5nZWRPcHRpb24iLCIkZm9ybSIsInBhcmVudHMiLCIkc3VibWl0IiwiJG1lc3NhZ2VCb3giLCJpdGVtIiwiYXR0ciIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsInJlc3VsdCIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInByb3AiLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJfdGhpczUiLCIkY2FydEl0ZW1zUm93cyIsIiRjYXJ0UGFnZVRpdGxlIiwidG90YWxzIiwicGFnZVRpdGxlIiwic3RhdHVzTWVzc2FnZXMiLCJsZW5ndGgiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldENvbnRlbnQiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJxdWFudGl0eSIsInRyaWdnZXIiLCJiaW5kQ2FydEV2ZW50cyIsIl90aGlzNiIsImRlYm91bmNlVGltZW91dCIsIl9iaW5kIiwiX2RlYm91bmNlIiwiY3VycmVudFRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwib25RdHlGb2N1cyIsInZhbHVlIiwiY2hhbmdlIiwic3RyaW5nIiwic2hvd0NhbmNlbEJ1dHRvbiIsInRoZW4iLCJiaW5kUHJvbW9Db2RlRXZlbnRzIiwiX3RoaXM3IiwiJGNvdXBvbkNvbnRhaW5lciIsIiRjb3Vwb25Gb3JtIiwiJGNvZGVJbnB1dCIsImNvZGUiLCJhcHBseUNvZGUiLCJiaW5kR2lmdENlcnRpZmljYXRlRXZlbnRzIiwiX3RoaXM4IiwiJGNlcnRDb250YWluZXIiLCIkY2VydEZvcm0iLCIkY2VydElucHV0IiwidG9nZ2xlIiwiYXBwbHlHaWZ0Q2VydGlmaWNhdGUiLCJyZXNwIiwiYmluZEdpZnRXcmFwcGluZ0V2ZW50cyIsIl90aGlzOSIsImdldEl0ZW1HaWZ0V3JhcHBpbmdPcHRpb25zIiwiJHNlbGVjdCIsImlkIiwiaW5kZXgiLCJhbGxvd01lc3NhZ2UiLCJmaW5kIiwidG9nZ2xlVmlld3MiLCIkc2luZ2xlRm9ybSIsIiRtdWx0aUZvcm0iLCJzaGlwcGluZ0VzdGltYXRvciIsImRlZmF1bHQiLCJzdGF0ZUNvdW50cnkiLCJub2QiLCJWYWxpZGF0b3JzIiwiJGVsZW1lbnQiLCIkc3RhdGUiLCJpbml0Rm9ybVZhbGlkYXRpb24iLCJiaW5kU3RhdGVDb3VudHJ5Q2hhbmdlIiwiYmluZEVzdGltYXRvckV2ZW50cyIsInNoaXBwaW5nVmFsaWRhdG9yIiwic3VibWl0IiwicGVyZm9ybUNoZWNrIiwiYXJlQWxsIiwiYmluZFZhbGlkYXRpb24iLCJiaW5kU3RhdGVWYWxpZGF0aW9uIiwiYmluZFVQU1JhdGVzIiwiYWRkIiwic2VsZWN0b3IiLCJ2YWxpZGF0ZSIsImNiIiwiY291bnRyeUlkIiwiaXNOYU4iLCJlcnJvck1lc3NhZ2UiLCIkZWxlIiwiZWxlVmFsIiwiVVBTUmF0ZVRvZ2dsZSIsIiRlc3RpbWF0b3JGb3JtVXBzIiwiJGVzdGltYXRvckZvcm1EZWZhdWx0IiwidG9nZ2xlQ2xhc3MiLCIkbGFzdCIsImNvbnRleHQiLCJ1c2VJZEZvclN0YXRlcyIsImZpZWxkIiwiRXJyb3IiLCIkZmllbGQiLCJnZXRTdGF0dXMiLCJpcyIsImNsZWFuVXBTdGF0ZVZhbGlkYXRpb24iLCJyZW1vdmVDbGFzcyIsIiRlc3RpbWF0b3JDb250YWluZXIiLCIkZXN0aW1hdG9yRm9ybSIsInBhcmFtcyIsImNvdW50cnlfaWQiLCJzdGF0ZV9pZCIsImNpdHkiLCJ6aXBfY29kZSIsImdldFNoaXBwaW5nUXVvdGVzIiwiY2xpY2tFdmVudCIsInF1b3RlSWQiLCJzdWJtaXRTaGlwcGluZ1F1b3RlIiwiYWRkQ2xhc3MiLCJjZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==
