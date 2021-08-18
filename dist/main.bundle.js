/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/actions/index.js":
/*!******************************!*\
  !*** ./src/actions/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getContent\": () => (/* binding */ getContent)\n/* harmony export */ });\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../routes */ \"./src/routes/index.js\");\n/* harmony import */ var _components_pets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/pets */ \"./src/components/pets.js\");\n/* harmony import */ var _components_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/slider */ \"./src/components/slider.js\");\n/* harmony import */ var _components_currentPet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/currentPet */ \"./src/components/currentPet.js\");\n/* harmony import */ var _components_takeHome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/takeHome */ \"./src/components/takeHome.js\");\n/* harmony import */ var _components_pickUpForOverexposure__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/pickUpForOverexposure */ \"./src/components/pickUpForOverexposure.js\");\n/* harmony import */ var _components_counterPets__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/counterPets */ \"./src/components/counterPets.js\");\n/* harmony import */ var _components_petsGalleryPage__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/petsGalleryPage */ \"./src/components/petsGalleryPage.js\");\n/* harmony import */ var _components_filterPets__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/filterPets */ \"./src/components/filterPets.js\");\n/* harmony import */ var _components_createPetItem__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/createPetItem */ \"./src/components/createPetItem.js\");\n/* harmony import */ var _components_editPetItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/editPetItem */ \"./src/components/editPetItem.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar getContent = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0,_routes__WEBPACK_IMPORTED_MODULE_0__.default)();\n\n          case 2:\n            if (!document.querySelector(\"#carousel\")) {\n              _context.next = 10;\n              break;\n            }\n\n            _context.next = 5;\n            return (0,_components_pets__WEBPACK_IMPORTED_MODULE_1__.default)();\n\n          case 5:\n            (0,_components_slider__WEBPACK_IMPORTED_MODULE_2__.default)();\n            (0,_components_currentPet__WEBPACK_IMPORTED_MODULE_3__.default)();\n            (0,_components_takeHome__WEBPACK_IMPORTED_MODULE_4__.default)();\n            (0,_components_pickUpForOverexposure__WEBPACK_IMPORTED_MODULE_5__.default)();\n            (0,_components_counterPets__WEBPACK_IMPORTED_MODULE_6__.default)();\n\n          case 10:\n            if (!document.querySelector(\"#gallery-page\")) {\n              _context.next = 17;\n              break;\n            }\n\n            _context.next = 13;\n            return (0,_components_petsGalleryPage__WEBPACK_IMPORTED_MODULE_7__.generatePetsGallery)();\n\n          case 13:\n            document.querySelector(\"#gallery-page\").addEventListener('load', document.querySelector(\"#gallery-page__select\").focus());\n            (0,_components_currentPet__WEBPACK_IMPORTED_MODULE_3__.default)();\n            (0,_components_createPetItem__WEBPACK_IMPORTED_MODULE_9__.default)();\n            (0,_components_editPetItem__WEBPACK_IMPORTED_MODULE_10__.default)();\n\n          case 17:\n            // select filter\n            if (document.querySelector(\"#gallery-page__select\")) {\n              document.querySelector(\"#gallery-page__select\").addEventListener(\"change\", _components_filterPets__WEBPACK_IMPORTED_MODULE_8__.filterPets);\n            }\n            /*   // close preloader\r\n              const preloader = document.querySelector('#preloader');\r\n              if (preloader) {\r\n                setTimeout(closePreloader, 1000);\r\n              }\r\n             */\n\n\n          case 18:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getContent() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n\n\n//# sourceURL=webpack://webpack_start/./src/actions/index.js?");

/***/ }),

/***/ "./src/components/counterPets.js":
/*!***************************************!*\
  !*** ./src/components/counterPets.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar counterPets = function counterPets() {\n  var currentCounter = document.querySelector('.gallery__counter');\n  var listPets = document.querySelector('.gallery__list');\n  var currentPets = listPets.getElementsByClassName('gallery-item').length;\n  currentCounter.innerHTML = \" (\".concat(currentPets, \")\");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (counterPets);\n\n//# sourceURL=webpack://webpack_start/./src/components/counterPets.js?");

/***/ }),

/***/ "./src/components/createPetItem.js":
/*!*****************************************!*\
  !*** ./src/components/createPetItem.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/css/modal.css */ \"./src/styles/css/modal.css\");\n/* harmony import */ var _images_img_bg_no_image_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/img/bg/no_image.png */ \"./src/images/img/bg/no_image.png\");\n/* harmony import */ var _lib_generateModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/generateModal.js */ \"./src/lib/generateModal.js\");\n/* harmony import */ var _utils_createDataLocal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/createDataLocal */ \"./src/utils/createDataLocal.js\");\n/* harmony import */ var _components_petsGalleryPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/petsGalleryPage */ \"./src/components/petsGalleryPage.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\nvar createPetItem = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var createModal;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            createModal = new _lib_generateModal_js__WEBPACK_IMPORTED_MODULE_2__.default({\n              linkAttributeName: \"data-newPet\",\n              catchFocus: true,\n              closeOnEsc: true,\n              backscroll: true,\n              beforeOpen: function beforeOpen(modal) {\n                var modalContainer = modal.openedWindow.querySelector(\"#create-item-container\");\n                modalContainer.innerHTML = createPetItemModal();\n                submitCreateForm(modalContainer, createModal);\n                setPetImage(modalContainer);\n              }\n            });\n\n          case 1:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function createPetItem() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar createPetItemModal = function createPetItemModal() {\n  return \"\\n                <form id=\\\"createPetForm\\\" class=\\\"create-form\\\" >\\n                    <div class=\\\"create-form__header\\\">\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C \\u043F\\u0438\\u0442\\u043E\\u043C\\u0446\\u0430</div>\\n                    <div class=\\\"create-form__line\\\"></div>\\n                    <div class=\\\"image-container\\\">\\n                        <img id=\\\"petImage\\\" name=\\\"image\\\" class=\\\"create-form__image\\\" src=\\\"\".concat(_images_img_bg_no_image_png__WEBPACK_IMPORTED_MODULE_1__, \"\\\" alt=\\\"\\u0412\\u0430\\u0448 \\u0434\\u0440\\u0443\\u0433\\\">\\n                    </div>\\n                    <div class=\\\"create-form__input-container\\\">\\n                        <label>\\u0412\\u0438\\u0434 \\u043F\\u0438\\u0442\\u043E\\u043C\\u0446\\u0430:</label>\\n                        <input type=\\\"radio\\\" name=\\\"kind\\\" id=\\\"dog\\\" value=\\\"dog\\\">\\n                        <label for=\\\"dog\\\">\\u0421\\u043E\\u0431\\u0430\\u043A\\u0430</label>\\n                        <input type=\\\"radio\\\" name=\\\"kind\\\" id=\\\"cat\\\" value=\\\"cat\\\">\\n                        <label for=\\\"cat\\\">\\u041A\\u043E\\u0442</label>\\n                    </div>\\n                    <div class=\\\"create-form__input-container\\\">\\n                        <label>\\u041F\\u043E\\u043B:</label>\\n                        <input type=\\\"radio\\\" name=\\\"gender\\\" id=\\\"boy\\\" value=\\\"\\u041C\\u0430\\u043B\\u044C\\u0447\\u0438\\u043A\\\">\\n                        <label for=\\\"boy\\\">\\u041C\\u0430\\u043B\\u044C\\u0447\\u0438\\u043A</label>\\n                        <input type=\\\"radio\\\" name=\\\"gender\\\" id=\\\"girl\\\" value=\\\"\\u0414\\u0435\\u0432\\u043E\\u0447\\u043A\\u0430\\\">\\n                        <label for=\\\"girl\\\">\\u0414\\u0435\\u0432\\u043E\\u0447\\u043A\\u0430</label>\\n                    </div>\\n                    <div class=\\\"create-form__input-container\\\">\\n                        <label for=\\\"nickName\\\">\\u041A\\u043B\\u0438\\u0447\\u043A\\u0430:</label>\\n                        <input id=\\\"nickName\\\" type=\\\"text\\\" class=\\\"create-form__input\\\" name=\\\"nickName\\\" required />\\n                    </div>\\n                    <div class=\\\"create-form__input-container\\\">\\n                        <label for=\\\"age\\\">\\u0412\\u043E\\u0437\\u0440\\u0430\\u0441\\u0442:</label>\\n                        <input id=\\\"age\\\" type=\\\"text\\\" class=\\\"create-form__input\\\" name=\\\"age\\\" required />\\n                    </div>\\n                    <div class=\\\"create-form__input-container\\\">\\n                        <label for=\\\"shortSummary\\\">\\u041A\\u0440\\u0430\\u0442\\u043A\\u043E\\u0435 \\u043E\\u043F\\u0438\\u0441\\u0430\\u043D\\u0438\\u0435:</label>\\n                        <input id=\\\"shortSummary\\\" type=\\\"text\\\" class=\\\"create-form__input\\\" name=\\\"shortSummary\\\" required />\\n                    </div>\\n                    <div class=\\\"create-form__input-container\\\">\\n                        <label for=\\\"petDescription\\\">\\u041F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u0435\\u0435:</label>\\n                        <textarea id=\\\"petDescription\\\" class=\\\"create-form__textarea\\\" name=\\\"description\\\" rows=\\\"5\\\" required></textarea>\\n                    </div>\\n                    <div class=\\\"create-form__input-container\\\">\\n                        <label for=\\\"image\\\">\\u0424\\u043E\\u0442\\u043E:</label>\\n                        <input id=\\\"image\\\" type=\\\"file\\\" name=\\\"image\\\"/>\\n                    </div>\\n                    <div class=\\\"create-form__buttons-container\\\">\\n                        <button class=\\\"create-form__save-button\\\" id=\\\"savePet\\\" type=\\\"submit\\\" >\\n                            <div class=\\\"create-form__save-button-bg\\\">\\n                                <span class=\\\"create-form__save-button-text\\\">\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C</span>\\n                            </div>\\n                        </button>\\n                    </div>\\n                </form>\\n            \");\n};\n\nvar submitCreateForm = function submitCreateForm(modalContainer, modal) {\n  modalContainer.querySelector(\"#createPetForm\").addEventListener(\"submit\", /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(event) {\n      var pet;\n      return regeneratorRuntime.wrap(function _callee2$(_context2) {\n        while (1) {\n          switch (_context2.prev = _context2.next) {\n            case 0:\n              _context2.next = 2;\n              return (0,_utils_createDataLocal__WEBPACK_IMPORTED_MODULE_3__.createPet)(event);\n\n            case 2:\n              pet = _context2.sent;\n              modal.close();\n              (0,_components_petsGalleryPage__WEBPACK_IMPORTED_MODULE_4__.addPetToGallery)(pet);\n\n            case 5:\n            case \"end\":\n              return _context2.stop();\n          }\n        }\n      }, _callee2);\n    }));\n\n    return function (_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n};\n\nvar setPetImage = function setPetImage(modalContainer) {\n  modalContainer.querySelector('#image').addEventListener(\"change\", /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event) {\n      var promise;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              promise = new Promise(function (resolve, reject) {\n                var reader = new FileReader();\n\n                reader.onloadend = /*#__PURE__*/function () {\n                  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(e) {\n                    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n                      while (1) {\n                        switch (_context3.prev = _context3.next) {\n                          case 0:\n                            resolve(e.target.result);\n\n                          case 1:\n                          case \"end\":\n                            return _context3.stop();\n                        }\n                      }\n                    }, _callee3);\n                  }));\n\n                  return function (_x3) {\n                    return _ref4.apply(this, arguments);\n                  };\n                }();\n\n                reader.onerror = function (error) {\n                  reject(error);\n                };\n\n                reader.readAsDataURL(event.currentTarget.files[0]);\n              });\n              _context4.next = 3;\n              return promise.then(function (image) {\n                return modalContainer.querySelector('#petImage').setAttribute('src', image);\n              });\n\n            case 3:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function (_x2) {\n      return _ref3.apply(this, arguments);\n    };\n  }());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createPetItem);\n\n//# sourceURL=webpack://webpack_start/./src/components/createPetItem.js?");

/***/ }),

/***/ "./src/components/currentPet.js":
/*!**************************************!*\
  !*** ./src/components/currentPet.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getDataLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getDataLocal */ \"./src/utils/getDataLocal.js\");\n/* harmony import */ var _lib_generateModal_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../lib/generateModal.js */ \"./src/lib/generateModal.js\");\n/* harmony import */ var _styles_css_modal_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/css/modal.css */ \"./src/styles/css/modal.css\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar generateCurrentPetModal = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            new _lib_generateModal_js__WEBPACK_IMPORTED_MODULE_1__.default({\n              catchFocus: true,\n              closeOnEsc: true,\n              backscroll: true,\n              beforeOpen: function () {\n                var _beforeOpen = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(modal) {\n                  var currentPetId, pet, modalContainer;\n                  return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          currentPetId = modal.starter.dataset.petid;\n                          _context.next = 3;\n                          return (0,_utils_getDataLocal__WEBPACK_IMPORTED_MODULE_0__.getPet)(currentPetId);\n\n                        case 3:\n                          pet = _context.sent;\n                          modalContainer = modal.openedWindow.querySelector(\"#pet-modal-container\");\n                          modalContainer.innerHTML = currentPetModal(pet);\n\n                        case 6:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                function beforeOpen(_x) {\n                  return _beforeOpen.apply(this, arguments);\n                }\n\n                return beforeOpen;\n              }()\n            });\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function generateCurrentPetModal() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar currentPetModal = function currentPetModal(pet) {\n  return \"\\n    <div class=\\\"pet-modal\\\">\\n        <div class=\\\"pet-modal__header\\\">\".concat(pet.nickName, \"</div>\\n        <div class=\\\"pet-modal__line\\\"></div>\\n        <div class=\\\"pet-modal__desc\\\">\").concat(pet.gender, \", \").concat(pet.age, \"</div>\\n        <p class=\\\"pet-modal__text\\\">\").concat(pet.shortSummary, \"</p>\\n        <p class=\\\"pet-modal__text\\\">\").concat(pet.description, \"</p>\\n        <div class=\\\"image-container\\\">\\n            <img id=\\\"petImage\\\" name=\\\"image\\\" class=\\\"pet-modal__image\\\" src=\\\"\").concat(pet.image, \"\\\" alt=\\\"\\u0412\\u0430\\u0448 \\u0434\\u0440\\u0443\\u0433\\\">\\n        </div>\\n\\n        <div class=\\\"pet-modal__buttons-container\\\">\\n            <button class=\\\"pet-modal__takeHome-button\\\" id=\\\"takeHome\\\" data-petId=\\\"\").concat(pet.id, \"\\\">\\n                <div class=\\\"pet-modal__takeHome-button-bg\\\">\\n                    <span class=\\\"pet-modal__takeHome-button-text\\\">\\u0417\\u0430\\u0431\\u0440\\u0430\\u0442\\u044C \\u0434\\u043E\\u043C\\u043E\\u0439</span>\\n                </div>\\n            </button>\\n            <button class=\\\"pet-modal__overexposure-button\\\" id=\\\"pickUpForOverexposure\\\" data-petId=\\\"\").concat(pet.id, \"\\\">\\n                <div class=\\\"pet-modal__overexposure-button-bg\\\">\\n                    <span class=\\\"pet-modal__overexposure-button-text\\\">\\u0417\\u0430\\u0431\\u0440\\u0430\\u0442\\u044C \\u043D\\u0430 \\u043F\\u0435\\u0440\\u0435\\u0434\\u0435\\u0440\\u0436\\u043A\\u0443</span>\\n                </div>\\n            </button>\\n        </div>\\n    </div>\\n    \");\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateCurrentPetModal);\n\n//# sourceURL=webpack://webpack_start/./src/components/currentPet.js?");

/***/ }),

/***/ "./src/components/editPetItem.js":
/*!***************************************!*\
  !*** ./src/components/editPetItem.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/css/modal.css */ \"./src/styles/css/modal.css\");\n/* harmony import */ var _utils_getDataLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getDataLocal */ \"./src/utils/getDataLocal.js\");\n/* harmony import */ var _lib_generateModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/generateModal */ \"./src/lib/generateModal.js\");\n/* harmony import */ var _utils_updateDataLocal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/updateDataLocal */ \"./src/utils/updateDataLocal.js\");\n/* harmony import */ var _utils_deleteDataLocal__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/deleteDataLocal */ \"./src/utils/deleteDataLocal.js\");\n/* harmony import */ var _components_petsGalleryPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/petsGalleryPage */ \"./src/components/petsGalleryPage.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\nvar editPetItem = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var modal;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            modal = new _lib_generateModal__WEBPACK_IMPORTED_MODULE_2__.default({\n              linkAttributeName: \"data-editPet\",\n              catchFocus: true,\n              closeOnEsc: true,\n              backscroll: true,\n              beforeOpen: function () {\n                var _beforeOpen = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(modal) {\n                  var currentPetId, pet, modalContainer;\n                  return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          currentPetId = modal.starter.dataset.petid;\n                          console.log(currentPetId);\n                          _context.next = 4;\n                          return (0,_utils_getDataLocal__WEBPACK_IMPORTED_MODULE_1__.getPet)(currentPetId);\n\n                        case 4:\n                          pet = _context.sent;\n                          modalContainer = modal.openedWindow.querySelector(\"#edit-item-container\");\n                          modalContainer.innerHTML = editPetItemModal(pet);\n                          updatePetForm(modalContainer, modal);\n                          deletePetForm(modalContainer);\n                          setPetImage(modalContainer);\n\n                        case 10:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                function beforeOpen(_x) {\n                  return _beforeOpen.apply(this, arguments);\n                }\n\n                return beforeOpen;\n              }()\n            });\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function editPetItem() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar editPetItemModal = function editPetItemModal(pet) {\n  return \"\\n        <form id=\\\"updatePetForm\\\" class=\\\"update-form\\\" >\\n            <div class=\\\"update-form__header\\\">\\u0418\\u0437\\u043C\\u0435\\u043D\\u0438\\u0442\\u044C \\u043F\\u0438\\u0442\\u043E\\u043C\\u0446\\u0430</div>\\n            <div class=\\\"update-form__line\\\"></div>\\n            <div class=\\\"image-container\\\">\\n                <img id=\\\"petImage\\\" name=\\\"image\\\" class=\\\"update-form__image\\\" src=\\\"\".concat(pet.image, \"\\\" alt=\\\"\\u0412\\u0430\\u0448 \\u0434\\u0440\\u0443\\u0433\\\">\\n            </div>\\n            <div class=\\\"update-form__input-container\\\">\\n                <label>\\u0412\\u0438\\u0434 \\u043F\\u0438\\u0442\\u043E\\u043C\\u0446\\u0430:</label>\\n                <input type=\\\"radio\\\" name=\\\"kind\\\" id=\\\"dog\\\" value=\\\"dog\\\"\") + (pet.kind === \"dog\" ? \"checked\" : \"\") + \">\\n                <label for=\\\"dog\\\">\\u0421\\u043E\\u0431\\u0430\\u043A\\u0430</label>\\n                <input type=\\\"radio\\\" name=\\\"kind\\\" id=\\\"cat\\\" value=\\\"cat\\\"\" + (pet.kind === \"cat\" ? \"checked\" : \"\") + \">\\n                <label for=\\\"cat\\\">\\u041A\\u043E\\u0442</label>\\n            </div>\\n            <div class=\\\"update-form__input-container\\\">\\n                <label>\\u041F\\u043E\\u043B:</label>\\n                <input type=\\\"radio\\\" name=\\\"gender\\\" id=\\\"boy\\\" value=\\\"\\u041C\\u0430\\u043B\\u044C\\u0447\\u0438\\u043A\\\"\" + (pet.gender === \"Мальчик\" ? \"checked\" : \"\") + \">\\n                <label for=\\\"boy\\\">\\u041C\\u0430\\u043B\\u044C\\u0447\\u0438\\u043A</label>\\n                <input type=\\\"radio\\\" name=\\\"gender\\\" id=\\\"girl\\\" value=\\\"\\u0414\\u0435\\u0432\\u043E\\u0447\\u043A\\u0430\\\"\" + (pet.gender === \"Девочка\" ? \"checked\" : \"\") + \">\\n                <label for=\\\"girl\\\">\\u0414\\u0435\\u0432\\u043E\\u0447\\u043A\\u0430</label>\\n            </div>\\n            <div class=\\\"update-form__input-container\\\">\\n                <label for=\\\"nickName\\\">\\u041A\\u043B\\u0438\\u0447\\u043A\\u0430:</label>\\n                <input id=\\\"nickName\\\" type=\\\"text\\\" class=\\\"update-form__input\\\" name=\\\"nickName\\\" value=\\\"\".concat(pet.nickName, \"\\\" required />\\n            </div>\\n            <div class=\\\"update-form__input-container\\\">\\n                <label for=\\\"age\\\">\\u0412\\u043E\\u0437\\u0440\\u0430\\u0441\\u0442:</label>\\n                <input id=\\\"age\\\" type=\\\"text\\\" class=\\\"update-form__input\\\" name=\\\"age\\\" value=\\\"\").concat(pet.age, \"\\\" required />\\n            </div>\\n            <div class=\\\"update-form__input-container\\\">\\n                <label for=\\\"shortSummary\\\">\\u041A\\u0440\\u0430\\u0442\\u043A\\u043E\\u0435 \\u043E\\u043F\\u0438\\u0441\\u0430\\u043D\\u0438\\u0435:</label>\\n                <input id=\\\"shortSummary\\\" type=\\\"text\\\" class=\\\"update-form__input\\\" name=\\\"shortSummary\\\" value=\\\"\").concat(pet.shortSummary, \"\\\" required />\\n            </div>\\n            <div class=\\\"update-form__input-container\\\">\\n                <label for=\\\"petDescription\\\">\\u041F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u0435\\u0435:</label>\\n                <textarea id=\\\"petDescription\\\" class=\\\"update-form__textarea\\\" name=\\\"description\\\" rows=\\\"5\\\" required>\").concat(pet.description, \"</textarea>\\n            </div>\\n            <div class=\\\"update-form__input-container\\\">\\n                <label for=\\\"image\\\">\\u0424\\u043E\\u0442\\u043E:</label>\\n                <input id=\\\"image\\\" type=\\\"file\\\" name=\\\"image\\\"/>\\n            </div>\\n            <div class=\\\"update-form__buttons-container\\\">\\n                <button class=\\\"update-form__save-button\\\" id=\\\"savePet\\\" type=\\\"submit\\\" data-petId=\\\"\").concat(pet.id, \"\\\">\\n                    <div class=\\\"update-form__save-button-bg\\\">\\n                        <span class=\\\"update-form__save-button-text\\\">\\u0421\\u043E\\u0445\\u0440\\u0430\\u043D\\u0438\\u0442\\u044C</span>\\n                    </div>\\n                </button>\\n                <button class=\\\"update-form__delete-button\\\" id=\\\"deletePet\\\" data-hystclose data-petId=\\\"\").concat(pet.id, \"\\\">\\n                    <div class=\\\"update-form__delete-button-bg\\\">\\n                        <span class=\\\"update-form__delete-button-text\\\">\\u0423\\u0434\\u0430\\u043B\\u0438\\u0442\\u044C</span>\\n                    </div>\\n                </button>\\n            </div>\\n        </form>                \\n    \");\n};\n\nvar updatePetForm = function updatePetForm(modalContainer, modal) {\n  modalContainer.querySelector(\"#updatePetForm\").addEventListener(\"submit\", /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {\n      var petId, pet;\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              event.preventDefault();\n              petId = event.submitter.dataset.petid;\n              _context3.next = 4;\n              return (0,_utils_updateDataLocal__WEBPACK_IMPORTED_MODULE_3__.updatePet)(petId);\n\n            case 4:\n              pet = _context3.sent;\n              modal.close();\n              (0,_components_petsGalleryPage__WEBPACK_IMPORTED_MODULE_5__.updatePetInGallery)(pet);\n\n            case 7:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n};\n\nvar deletePetForm = function deletePetForm(modalContainer) {\n  modalContainer.querySelector(\"#deletePet\").addEventListener(\"click\", /*#__PURE__*/function () {\n    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(event) {\n      var petId;\n      return regeneratorRuntime.wrap(function _callee4$(_context4) {\n        while (1) {\n          switch (_context4.prev = _context4.next) {\n            case 0:\n              event.preventDefault();\n              petId = event.currentTarget.dataset.petid;\n              _context4.next = 4;\n              return (0,_utils_deleteDataLocal__WEBPACK_IMPORTED_MODULE_4__.deletePet)(petId);\n\n            case 4:\n              (0,_components_petsGalleryPage__WEBPACK_IMPORTED_MODULE_5__.deletePetFromGallery)(petId);\n\n            case 5:\n            case \"end\":\n              return _context4.stop();\n          }\n        }\n      }, _callee4);\n    }));\n\n    return function (_x3) {\n      return _ref3.apply(this, arguments);\n    };\n  }());\n};\n\nvar setPetImage = function setPetImage(modalContainer) {\n  modalContainer.querySelector('#image').addEventListener(\"change\", /*#__PURE__*/function () {\n    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(event) {\n      var promise;\n      return regeneratorRuntime.wrap(function _callee6$(_context6) {\n        while (1) {\n          switch (_context6.prev = _context6.next) {\n            case 0:\n              promise = new Promise(function (resolve, reject) {\n                var reader = new FileReader();\n\n                reader.onloadend = /*#__PURE__*/function () {\n                  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(e) {\n                    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n                      while (1) {\n                        switch (_context5.prev = _context5.next) {\n                          case 0:\n                            resolve(e.target.result);\n\n                          case 1:\n                          case \"end\":\n                            return _context5.stop();\n                        }\n                      }\n                    }, _callee5);\n                  }));\n\n                  return function (_x5) {\n                    return _ref5.apply(this, arguments);\n                  };\n                }();\n\n                reader.onerror = function (error) {\n                  reject(error);\n                };\n\n                reader.readAsDataURL(event.currentTarget.files[0]);\n              });\n              _context6.next = 3;\n              return promise.then(function (image) {\n                return modalContainer.querySelector('#petImage').setAttribute('src', image);\n              });\n\n            case 3:\n            case \"end\":\n              return _context6.stop();\n          }\n        }\n      }, _callee6);\n    }));\n\n    return function (_x4) {\n      return _ref4.apply(this, arguments);\n    };\n  }());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (editPetItem);\n\n//# sourceURL=webpack://webpack_start/./src/components/editPetItem.js?");

/***/ }),

/***/ "./src/components/filterPets.js":
/*!**************************************!*\
  !*** ./src/components/filterPets.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"filterPets\": () => (/* binding */ filterPets)\n/* harmony export */ });\n/* harmony import */ var _utils_getDataLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getDataLocal */ \"./src/utils/getDataLocal.js\");\n/* harmony import */ var _petsGalleryPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./petsGalleryPage */ \"./src/components/petsGalleryPage.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar filterPets = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {\n    var searchValue, allCats, allDogs, allPets;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            searchValue = event.target.value;\n\n            if (!(searchValue == \"cat\")) {\n              _context.next = 8;\n              break;\n            }\n\n            _context.next = 4;\n            return (0,_utils_getDataLocal__WEBPACK_IMPORTED_MODULE_0__.getAllCats)();\n\n          case 4:\n            allCats = _context.sent;\n            (0,_petsGalleryPage__WEBPACK_IMPORTED_MODULE_1__.generatePetsGallery)(allCats);\n            _context.next = 19;\n            break;\n\n          case 8:\n            if (!(searchValue == \"dog\")) {\n              _context.next = 15;\n              break;\n            }\n\n            _context.next = 11;\n            return (0,_utils_getDataLocal__WEBPACK_IMPORTED_MODULE_0__.getAllDogs)();\n\n          case 11:\n            allDogs = _context.sent;\n            (0,_petsGalleryPage__WEBPACK_IMPORTED_MODULE_1__.generatePetsGallery)(allDogs);\n            _context.next = 19;\n            break;\n\n          case 15:\n            _context.next = 17;\n            return (0,_utils_getDataLocal__WEBPACK_IMPORTED_MODULE_0__.getAllPets)();\n\n          case 17:\n            allPets = _context.sent;\n            (0,_petsGalleryPage__WEBPACK_IMPORTED_MODULE_1__.generatePetsGallery)(allPets);\n\n          case 19:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function filterPets(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n\n\n//# sourceURL=webpack://webpack_start/./src/components/filterPets.js?");

/***/ }),

/***/ "./src/components/pets.js":
/*!********************************!*\
  !*** ./src/components/pets.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _utils_getDataLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getDataLocal */ \"./src/utils/getDataLocal.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\nvar generateAllPets = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var pets;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return (0,_utils_getDataLocal__WEBPACK_IMPORTED_MODULE_0__.getAllPets)();\n\n          case 2:\n            pets = _context.sent;\n            pets.forEach(function (pet) {\n              var petsGallery = document.querySelector(\"#pets-gallery\");\n              petsGallery.innerHTML += \"\\n          <li class=\\\"gallery__item gallery-item\\\" data-petId=\\\"\".concat(pet.id, \"\\\">\\n            <img class=\\\"gallery-item__img\\\" src=\\\"\").concat(pet.image, \"\\\" alt=\\\"\\u0412\\u0430\\u0448 \\u0434\\u0440\\u0443\\u0433\\\">\\n            <h4 class=\\\"gallery-item__name\\\">\").concat(pet.nickName, \"</h4>\\n            <br>\\n            <hr>\\n            <div class=\\\"gallery-item__desc\\\">\").concat(pet.gender, \", \").concat(pet.age, \"</div>\\n            <p class=\\\"gallery-item__text\\\">\").concat(pet.shortSummary, \"</p>\\n            <a href=\\\"#\\\" data-hystmodal=\\\"#myModal\\\" class=\\\"gallery-item__link\\\" data-petId=\\\"\").concat(pet.id, \"\\\">\\u041F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u0435\\u0435</a>\\n          </li>\\n        \");\n            });\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function generateAllPets() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateAllPets);\n\n//# sourceURL=webpack://webpack_start/./src/components/pets.js?");

/***/ }),

/***/ "./src/components/petsGalleryPage.js":
/*!*******************************************!*\
  !*** ./src/components/petsGalleryPage.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generatePetsGallery\": () => (/* binding */ generatePetsGallery),\n/* harmony export */   \"addPetToGallery\": () => (/* binding */ addPetToGallery),\n/* harmony export */   \"updatePetInGallery\": () => (/* binding */ updatePetInGallery),\n/* harmony export */   \"deletePetFromGallery\": () => (/* binding */ deletePetFromGallery)\n/* harmony export */ });\n/* harmony import */ var _utils_getDataLocal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/getDataLocal */ \"./src/utils/getDataLocal.js\");\n/* harmony import */ var _images_img_gallery_pencil_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/img/gallery/pencil.svg */ \"./src/images/img/gallery/pencil.svg\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar generatePetsGallery = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(pets) {\n    var petsGallery;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            if (!(pets == undefined)) {\n              _context.next = 6;\n              break;\n            }\n\n            _context.next = 3;\n            return (0,_utils_getDataLocal__WEBPACK_IMPORTED_MODULE_0__.getAllPets)();\n\n          case 3:\n            _context.t0 = _context.sent;\n            _context.next = 7;\n            break;\n\n          case 6:\n            _context.t0 = pets;\n\n          case 7:\n            pets = _context.t0;\n            petsGallery = document.querySelector(\"#pets-gallery-page\");\n            petsGallery.innerHTML = '';\n            pets.forEach(function (pet) {\n              petsGallery.innerHTML += \"\\n          <li class=\\\"gallery-page__item page-item\\\" id=\\\"pet_\".concat(pet.id, \"\\\">\\n            <div class=\\\"page-item__content\\\">\\n              <img class=\\\"page-item__img\\\" src=\\\"\").concat(pet.image, \"\\\" alt=\\\"\\u0412\\u0430\\u0448 \\u0434\\u0440\\u0443\\u0433\\\">\\n              <h4 class=\\\"page-item__name\\\">\").concat(pet.nickName, \"</h4>\\n              <br>\\n              <hr>\\n              <div class=\\\"page-item__desc\\\">\").concat(pet.gender, \", \").concat(pet.age, \"</div>\\n              <p class=\\\"page-item__text\\\">\").concat(pet.shortSummary, \"</p>\\n              <a href=\\\"#\\\" data-hystmodal=\\\"#myModal\\\" class=\\\"page-item__link\\\" data-petId=\\\"\").concat(pet.id, \"\\\">\\u041F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u0435\\u0435</a>\\n              <button class=\\\"gallery__edit-btn\\\" data-editPet=\\\"#edit-item\\\" data-petId=\\\"\").concat(pet.id, \"\\\"><img src=\\\"\").concat(_images_img_gallery_pencil_svg__WEBPACK_IMPORTED_MODULE_1__, \"\\\" class=\\\"edit-btn__img\\\"></button>\\n            </div>          \\n          </li>\\n        \");\n            });\n\n          case 11:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function generatePetsGallery(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar addPetToGallery = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pet) {\n    var petsGallery;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            petsGallery = document.querySelector(\"#pets-gallery-page\");\n            petsGallery.innerHTML += \"\\n          <li class=\\\"gallery-page__item page-item\\\" id=\\\"pet_\".concat(pet.id, \"\\\">\\n            <div class=\\\"page-item__content\\\">\\n              <img class=\\\"page-item__img\\\" src=\\\"\").concat(pet.image, \"\\\" alt=\\\"\\u0412\\u0430\\u0448 \\u0434\\u0440\\u0443\\u0433\\\">\\n              <h4 class=\\\"page-item__name\\\">\").concat(pet.nickName, \"</h4>\\n              <br>\\n              <hr>\\n              <div class=\\\"page-item__desc\\\">\").concat(pet.gender, \", \").concat(pet.age, \"</div>\\n              <p class=\\\"page-item__text\\\">\").concat(pet.shortSummary, \"</p>\\n              <a href=\\\"#\\\" data-hystmodal=\\\"#myModal\\\" class=\\\"page-item__link\\\" data-petId=\\\"\").concat(pet.id, \"\\\">\\u041F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u0435\\u0435</a>\\n              <button class=\\\"gallery__edit-btn\\\" data-editPet=\\\"#edit-item\\\" data-petId=\\\"\").concat(pet.id, \"\\\"><img src=\\\"\").concat(_images_img_gallery_pencil_svg__WEBPACK_IMPORTED_MODULE_1__, \"\\\" class=\\\"edit-btn__img\\\"></button>\\n            </div>          \\n          </li>\\n        \");\n\n          case 2:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function addPetToGallery(_x2) {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar updatePetInGallery = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(pet) {\n    var petContainer;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            petContainer = document.getElementById(\"pet_\".concat(pet.id));\n            petContainer.innerHTML = \"\\n          <div class=\\\"page-item__content\\\">\\n              <img class=\\\"page-item__img\\\" src=\\\"\".concat(pet.image, \"\\\" alt=\\\"\\u0412\\u0430\\u0448 \\u0434\\u0440\\u0443\\u0433\\\">\\n              <h4 class=\\\"page-item__name\\\">\").concat(pet.nickName, \"</h4>\\n              <br>\\n              <hr>\\n              <div class=\\\"page-item__desc\\\">\").concat(pet.gender, \", \").concat(pet.age, \"</div>\\n              <p class=\\\"page-item__text\\\">\").concat(pet.shortSummary, \"</p>\\n              <a href=\\\"#\\\" data-hystmodal=\\\"#myModal\\\" class=\\\"page-item__link\\\" data-petId=\\\"\").concat(pet.id, \"\\\">\\u041F\\u043E\\u0434\\u0440\\u043E\\u0431\\u043D\\u0435\\u0435</a>\\n              <button class=\\\"gallery__edit-btn\\\" data-editPet=\\\"#edit-item\\\" data-petId=\\\"\").concat(pet.id, \"\\\"><img src=\\\"\").concat(_images_img_gallery_pencil_svg__WEBPACK_IMPORTED_MODULE_1__, \"\\\" class=\\\"edit-btn__img\\\"></button>\\n          </div>\\n        \");\n\n          case 2:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function updatePetInGallery(_x3) {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nvar deletePetFromGallery = /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(petId) {\n    var petContainer;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            petContainer = document.getElementById(\"pet_\".concat(petId)).remove();\n\n          case 1:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function deletePetFromGallery(_x4) {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\n\n\n//# sourceURL=webpack://webpack_start/./src/components/petsGalleryPage.js?");

/***/ }),

/***/ "./src/components/pickUpForOverexposure.js":
/*!*************************************************!*\
  !*** ./src/components/pickUpForOverexposure.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/css/modal.css */ \"./src/styles/css/modal.css\");\n/* harmony import */ var _utils_getDataLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getDataLocal */ \"./src/utils/getDataLocal.js\");\n/* harmony import */ var _lib_generateModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/generateModal.js */ \"./src/lib/generateModal.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar generatePickUpForOverexposureModal = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var pickUpForOverexposureModal;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            pickUpForOverexposureModal = new _lib_generateModal_js__WEBPACK_IMPORTED_MODULE_2__.default({\n              linkAttributeName: \"data-pickUpForOverexposure\",\n              catchFocus: true,\n              closeOnEsc: true,\n              backscroll: true,\n              beforeOpen: function () {\n                var _beforeOpen = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(modal) {\n                  var petId, modalContainer, pet;\n                  return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          petId = document.getElementById(\"markedPet\").dataset.petid;\n                          modalContainer = modal.openedWindow.querySelector(\"#pick-up-for-overexposure-modal-container\");\n                          _context.next = 4;\n                          return (0,_utils_getDataLocal__WEBPACK_IMPORTED_MODULE_1__.getPet)(petId);\n\n                        case 4:\n                          pet = _context.sent;\n                          modalContainer.innerHTML = pickUpForOverexposureModalContent(pet);\n                          submitPickUpForOverexposureForm(modalContainer, pickUpForOverexposureModal);\n\n                        case 7:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                function beforeOpen(_x) {\n                  return _beforeOpen.apply(this, arguments);\n                }\n\n                return beforeOpen;\n              }()\n            });\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function generatePickUpForOverexposureModal() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar pickUpForOverexposureModalContent = function pickUpForOverexposureModalContent(pet) {\n  return \"\\n            <form id=\\\"pickUpForOverexposureForm\\\" class=\\\"pick-up-for-overexposure-form\\\" >\\n                <div class=\\\"pick-up-for-overexposure-form__header\\\">\\u0417\\u0430\\u0431\\u0440\\u0430\\u0442\\u044C \\u043D\\u0430 \\u043F\\u0435\\u0440\\u0435\\u0434\\u0435\\u0440\\u0436\\u043A\\u0443</div>\\n                <div class=\\\"pick-up-for-overexposure-form__line\\\"></div>\\n                <div class=\\\"image-container\\\">\\n                    <img id=\\\"petImage\\\" name=\\\"image\\\" class=\\\"pick-up-for-overexposure-form__image\\\" src=\\\"\".concat(pet.image, \"\\\" alt=\\\"\\u0412\\u0430\\u0448 \\u0434\\u0440\\u0443\\u0433\\\">\\n                </div>\\n                <div class=\\\"pick-up-for-overexposure-form__input-container\\\">\\n                    <label for=\\\"firstName\\\">\\u0418\\u043C\\u044F:</label>\\n                    <input id=\\\"firstName\\\" type=\\\"text\\\" class=\\\"pick-up-for-overexposure-form__input\\\" name=\\\"firstName\\\" required />\\n                </div>\\n                <div class=\\\"pick-up-for-overexposure-form__input-container\\\">\\n                    <label for=\\\"lastName\\\">\\u0424\\u0430\\u043C\\u0438\\u043B\\u0438\\u044F:</label>\\n                    <input id=\\\"lastName\\\" type=\\\"text\\\" class=\\\"pick-up-for-overexposure-form__input\\\" name=\\\"lastName\\\" required />\\n                </div>\\n                <div class=\\\"pick-up-for-overexposure-form__input-container\\\">\\n                    <label for=\\\"phone\\\">\\u041D\\u043E\\u043C\\u0435\\u0440 \\u0442\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D\\u0430:</label>\\n                    <input id=\\\"phone\\\" type=\\\"tel\\\" placeholder=\\\"xx xxx-xx-xx\\\" pattern=\\\"[0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2}\\\" class=\\\"pick-up-for-overexposure-form__input\\\" name=\\\"phone\\\" required />\\n                </div>\\n                <div class=\\\"pick-up-for-overexposure-form__input-container\\\">\\n                    <label for=\\\"remarks\\\">\\u0417\\u0430\\u043C\\u0435\\u0447\\u0430\\u043D\\u0438\\u044F:</label>\\n                    <textarea id=\\\"remarks\\\" class=\\\"pick-up-for-overexposure-form__textarea\\\" name=\\\"remarks\\\" rows=\\\"5\\\"></textarea>\\n                </div>\\n                <div class=\\\"pick-up-for-overexposure-form__coment\\\">\\n                    \\u041D\\u0430\\u0448\\u0438 \\u0432\\u043E\\u043B\\u043E\\u043D\\u0442\\u0435\\u0440\\u044B \\u0431\\u0443\\u0434\\u0443\\u0442 \\u0430\\u043A\\u0442\\u0438\\u0432\\u043D\\u043E \\u0438\\u0441\\u043A\\u0430\\u0442\\u044C \\u0431\\u0443\\u0434\\u0443\\u0449\\u0438\\u0439 \\u0434\\u043E\\u043C \\u0445\\u0432\\u043E\\u0441\\u0442\\u0438\\u043A\\u0443, \\u043F\\u043E\\u043A\\u0430 \\u0432\\u044B \\u043F\\u043E\\u043C\\u043E\\u0433\\u0430\\u0435\\u0442\\u0435 \\u043D\\u0430\\u043C \\u0441 \\u043F\\u0435\\u0440\\u0435\\u0434\\u0435\\u0440\\u0436\\u043A\\u043E\\u0439.\\n                </div>\\n                <div class=\\\"pick-up-for-overexposure-form__coment\\\">\\n                    \\u0421\\u043F\\u0430\\u0441\\u0438\\u0431\\u043E \\u0437\\u0430 \\u043F\\u043E\\u043C\\u043E\\u0449\\u044C!\\n                </div>\\n                <div class=\\\"pick-up-for-overexposure-form__buttons-container\\\">\\n                    <button class=\\\"pick-up-for-overexposure-form__save-button\\\" id=\\\"savePet\\\" type=\\\"submit\\\">\\n                        <div class=\\\"pick-up-for-overexposure-form__save-button-bg\\\">\\n                            <span class=\\\"pick-up-for-overexposure-form__save-button-text\\\">\\u0417\\u0430\\u0431\\u0440\\u0430\\u0442\\u044C \\u043D\\u0430 \\u043F\\u0435\\u0440\\u0435\\u0434\\u0435\\u0440\\u0436\\u043A\\u0443</span>\\n                        </div>\\n                    </button>\\n                </div>\\n            </form>\\n        \");\n};\n\nvar submitPickUpForOverexposureForm = function submitPickUpForOverexposureForm(modalContainer, modal) {\n  modalContainer.querySelector(\"#pickUpForOverexposureForm\").addEventListener(\"submit\", /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              event.preventDefault();\n              modal.close();\n\n            case 2:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generatePickUpForOverexposureModal);\n\n//# sourceURL=webpack://webpack_start/./src/components/pickUpForOverexposure.js?");

/***/ }),

/***/ "./src/components/slider.js":
/*!**********************************!*\
  !*** ./src/components/slider.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n/* этот код помечает картинки, для удобства разработки */\nvar slider = function slider() {\n  /*  let i = 1;\r\n   for (let li of carousel.querySelectorAll('li')) {\r\n       //li.style.position = 'relative';\r\n       //li.insertAdjacentHTML('beforeend', `<span style=\"position:absolute;left:0;top:0\">${i}</span>`);\r\n       i++;\r\n   }\r\n   */\n\n  /* конфигурация */\n  var width = 1; // ширина картинки\n  //let count = 1; // видимое количество изображений */ \n\n  var list = carousel.querySelector('ul');\n  var listElems = list.getElementsByTagName('li');\n  var position = 1; // положение ленты прокрутки\n\n  if (list.style.marginLeft === \"0px\") {\n    listElems[0].style.opacity = 0.5;\n    listElems[1].style.opacity = 1;\n    listElems[1].id = \"markedPet\";\n    listElems[2].style.opacity = 0.5;\n  }\n\n  carousel.querySelector('.gallery-slider__left-btn').onclick = function () {\n    // сдвиг влево\n    //position += width * count;\n    // последнее передвижение влево может быть не на 3, а на 2 или 1 элемент\n    position = Math.min(position, 0);\n    list.style.marginLeft = position + 'px';\n\n    var arrList = _toConsumableArray(listElems);\n\n    arrList.unshift(arrList[arrList.length - 1]);\n    arrList.pop();\n    arrList.forEach(function (element) {\n      list.appendChild(element);\n    });\n\n    for (var i = 0; i < listElems.length; i++) {\n      listElems[i].style.opacity = 0.5;\n      listElems[i + 2].style.opacity = 0.5;\n      listElems[i + 1].style.opacity = 1;\n      listElems[i + 1].id = \"markedPet\";\n      break;\n    }\n  };\n\n  carousel.querySelector('.gallery-slider__right-btn').onclick = function () {\n    // сдвиг вправо\n    //position -= width * count;\n    position = Math.max(position, -width);\n    /*        // последнее передвижение вправо может быть не на 3, а на 2 или 1 элемент\r\n           position = Math.max(position, -width * (listElems.length - count)); */\n\n    list.style.marginLeft = position + 'px';\n    list.appendChild(listElems[0]);\n\n    for (var i = 0; i < listElems.length; i++) {\n      listElems[i].style.opacity = 0.5;\n      listElems[i + 2].style.opacity = 0.5;\n      listElems[i + 1].style.opacity = 1;\n      listElems[i + 1].id = \"markedPet\";\n      break;\n    }\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (slider);\n\n//# sourceURL=webpack://webpack_start/./src/components/slider.js?");

/***/ }),

/***/ "./src/components/takeHome.js":
/*!************************************!*\
  !*** ./src/components/takeHome.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css_modal_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/css/modal.css */ \"./src/styles/css/modal.css\");\n/* harmony import */ var _utils_getDataLocal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils/getDataLocal */ \"./src/utils/getDataLocal.js\");\n/* harmony import */ var _lib_generateModal_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../lib/generateModal.js */ \"./src/lib/generateModal.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\nvar generateTakeHomeModal = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var takeHomeModal;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            takeHomeModal = new _lib_generateModal_js__WEBPACK_IMPORTED_MODULE_2__.default({\n              linkAttributeName: \"data-takeHome\",\n              catchFocus: true,\n              closeOnEsc: true,\n              backscroll: true,\n              beforeOpen: function () {\n                var _beforeOpen = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(modal) {\n                  var petId, modalContainer, pet;\n                  return regeneratorRuntime.wrap(function _callee$(_context) {\n                    while (1) {\n                      switch (_context.prev = _context.next) {\n                        case 0:\n                          petId = document.getElementById(\"markedPet\").dataset.petid;\n                          modalContainer = modal.openedWindow.querySelector(\"#take-home-modal-container\");\n                          _context.next = 4;\n                          return (0,_utils_getDataLocal__WEBPACK_IMPORTED_MODULE_1__.getPet)(petId);\n\n                        case 4:\n                          pet = _context.sent;\n                          modalContainer.innerHTML = takeHomeModalContent(pet);\n                          submitTakeHomeForm(modalContainer, takeHomeModal);\n\n                        case 7:\n                        case \"end\":\n                          return _context.stop();\n                      }\n                    }\n                  }, _callee);\n                }));\n\n                function beforeOpen(_x) {\n                  return _beforeOpen.apply(this, arguments);\n                }\n\n                return beforeOpen;\n              }()\n            });\n\n          case 1:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function generateTakeHomeModal() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar takeHomeModalContent = function takeHomeModalContent(pet) {\n  return \"\\n            <form id=\\\"takeHomeForm\\\" class=\\\"take-home-form\\\" >\\n                <div class=\\\"take-home-form__header\\\">\\u0417\\u0430\\u0431\\u0440\\u0430\\u0442\\u044C \\u0434\\u043E\\u043C\\u043E\\u0439</div>\\n                <div class=\\\"take-home-form__line\\\"></div>\\n                <div class=\\\"image-container\\\">\\n                    <img id=\\\"petImage\\\" name=\\\"image\\\" class=\\\"take-home-form__image\\\" src=\\\"\".concat(pet.image, \"\\\" alt=\\\"\\u0412\\u0430\\u0448 \\u0434\\u0440\\u0443\\u0433\\\">\\n                </div>\\n                <div class=\\\"take-home-form__input-container\\\">\\n                    <label for=\\\"firstName\\\">\\u0418\\u043C\\u044F:</label>\\n                    <input id=\\\"firstName\\\" type=\\\"text\\\" class=\\\"take-home-form__input\\\" name=\\\"firstName\\\" required />\\n                </div>\\n                <div class=\\\"take-home-form__input-container\\\">\\n                    <label for=\\\"lastName\\\">\\u0424\\u0430\\u043C\\u0438\\u043B\\u0438\\u044F:</label>\\n                    <input id=\\\"lastName\\\" type=\\\"text\\\" class=\\\"take-home-form__input\\\" name=\\\"lastName\\\" required />\\n                </div>\\n                <div class=\\\"take-home-form__input-container\\\">\\n                    <label for=\\\"phone\\\">\\u041D\\u043E\\u043C\\u0435\\u0440 \\u0442\\u0435\\u043B\\u0435\\u0444\\u043E\\u043D\\u0430:</label>\\n                    <input id=\\\"phone\\\" type=\\\"tel\\\" placeholder=\\\"xx xxx-xx-xx\\\" pattern=\\\"[0-9]{2} [0-9]{3}-[0-9]{2}-[0-9]{2}\\\" class=\\\"take-home-form__input\\\" name=\\\"phone\\\" required />\\n                </div>\\n                <div class=\\\"take-home-form__input-container\\\">c\\n                    <label for=\\\"remarks\\\">\\u0417\\u0430\\u043C\\u0435\\u0447\\u0430\\u043D\\u0438\\u044F:</label>\\n                    <textarea id=\\\"remarks\\\" class=\\\"take-home-form__textarea\\\" name=\\\"remarks\\\" rows=\\\"5\\\"></textarea>\\n                </div>\\n                <div class=\\\"take-home-form__buttons-container\\\">\\n                    <button class=\\\"take-home-form__save-button\\\" id=\\\"savePet\\\" type=\\\"submit\\\">\\n                        <div class=\\\"take-home-form__save-button-bg\\\">\\n                            <span class=\\\"take-home-form__save-button-text\\\">\\u0417\\u0430\\u0431\\u0440\\u0430\\u0442\\u044C \\u0434\\u043E\\u043C\\u043E\\u0439</span>\\n                        </div>\\n                    </button>\\n                </div>\\n            </form>\\n        \");\n};\n\nvar submitTakeHomeForm = function submitTakeHomeForm(modalContainer, modal) {\n  modalContainer.querySelector(\"#takeHomeForm\").addEventListener(\"submit\", /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(event) {\n      return regeneratorRuntime.wrap(function _callee3$(_context3) {\n        while (1) {\n          switch (_context3.prev = _context3.next) {\n            case 0:\n              event.preventDefault();\n              modal.close();\n\n            case 2:\n            case \"end\":\n              return _context3.stop();\n          }\n        }\n      }, _callee3);\n    }));\n\n    return function (_x2) {\n      return _ref2.apply(this, arguments);\n    };\n  }());\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (generateTakeHomeModal);\n\n//# sourceURL=webpack://webpack_start/./src/components/takeHome.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ \"./src/routes/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./src/actions/index.js\");\n\n\nwindow.addEventListener('load', function () {\n  (0,_routes__WEBPACK_IMPORTED_MODULE_0__.default)();\n  (0,_actions__WEBPACK_IMPORTED_MODULE_1__.getContent)();\n});\nwindow.addEventListener('hashchange', function () {\n  console.log(12312312312312);\n  (0,_routes__WEBPACK_IMPORTED_MODULE_0__.default)();\n  (0,_actions__WEBPACK_IMPORTED_MODULE_1__.getContent)();\n});\n\n//# sourceURL=webpack://webpack_start/./src/index.js?");

/***/ }),

/***/ "./src/lib/generateModal.js":
/*!**********************************!*\
  !*** ./src/lib/generateModal.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ HystModal)\n/* harmony export */ });\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }\n\nfunction _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar HystModal = /*#__PURE__*/function () {\n  function HystModal(props) {\n    _classCallCheck(this, HystModal);\n\n    var defaultConfig = {\n      backscroll: true,\n      linkAttributeName: 'data-hystmodal',\n      closeOnOverlay: true,\n      closeOnEsc: true,\n      closeOnButton: true,\n      waitTransitions: false,\n      catchFocus: true,\n      fixedSelectors: \"*[data-hystfixed]\",\n      beforeOpen: function beforeOpen() {},\n      afterClose: function afterClose() {}\n    };\n    this.config = Object.assign(defaultConfig, props);\n\n    if (this.config.linkAttributeName) {\n      this.init();\n    }\n\n    this._closeAfterTransition = this._closeAfterTransition.bind(this);\n  }\n\n  _createClass(HystModal, [{\n    key: \"init\",\n    value: function init() {\n      this.isOpened = false;\n      this.openedWindow = false;\n      this.starter = false, this._nextWindows = false;\n      this._scrollPosition = 0;\n      this._reopenTrigger = false;\n      this._overlayChecker = false, this._isMoved = false;\n      this._focusElements = ['a[href]', 'area[href]', 'input:not([disabled]):not([type=\"hidden\"]):not([aria-hidden])', 'select:not([disabled]):not([aria-hidden])', 'textarea:not([disabled]):not([aria-hidden])', 'button:not([disabled]):not([aria-hidden])', 'iframe', 'object', 'embed', '[contenteditable]', '[tabindex]:not([tabindex^=\"-\"])'];\n      this._modalBlock = false;\n\n      if (!HystModal._shadow) {\n        HystModal._shadow = document.createElement('button');\n\n        HystModal._shadow.classList.add('hystmodal__shadow');\n\n        document.body.appendChild(HystModal._shadow);\n      }\n\n      this.eventsFeeler();\n    }\n  }, {\n    key: \"eventsFeeler\",\n    value: function eventsFeeler() {\n      document.addEventListener(\"click\", function (e) {\n        var clickedlink = e.target.closest(\"[\" + this.config.linkAttributeName + \"]\");\n\n        if (!this._isMoved && clickedlink) {\n          e.preventDefault();\n          this.starter = clickedlink;\n          var targetSelector = this.starter.getAttribute(this.config.linkAttributeName);\n          this._nextWindows = document.querySelector(targetSelector);\n          this.open();\n          return;\n        }\n\n        if (this.config.closeOnButton && e.target.closest('[data-hystclose]')) {\n          this.close();\n          return;\n        }\n      }.bind(this));\n\n      if (this.config.closeOnOverlay) {\n        document.addEventListener('mousedown', function (e) {\n          if (!this._isMoved && e.target instanceof Element && !e.target.classList.contains('hystmodal__wrap')) return;\n          this._overlayChecker = true;\n        }.bind(this));\n        document.addEventListener('mouseup', function (e) {\n          if (!this._isMoved && e.target instanceof Element && this._overlayChecker && e.target.classList.contains('hystmodal__wrap')) {\n            e.preventDefault();\n            !this._overlayChecker;\n            this.close();\n            return;\n          }\n\n          this._overlayChecker = false;\n        }.bind(this));\n      }\n\n      ;\n      window.addEventListener(\"keydown\", function (e) {\n        if (!this._isMoved && this.config.closeOnEsc && e.which == 27 && this.isOpened) {\n          e.preventDefault();\n          this.close();\n          return;\n        }\n\n        if (!this._isMoved && this.config.catchFocus && e.which == 9 && this.isOpened) {\n          this.focusCatcher(e);\n          return;\n        }\n      }.bind(this));\n    }\n  }, {\n    key: \"open\",\n    value: function open(selector) {\n      if (selector) {\n        if (typeof selector === \"string\") {\n          this._nextWindows = document.querySelector(selector);\n        } else {\n          this._nextWindows = selector;\n        }\n      }\n\n      if (!this._nextWindows) {\n        console.log(\"Warinig: hustModal selector is not found\");\n        return;\n      }\n\n      if (this.isOpened) {\n        this._reopenTrigger = true;\n        this.close();\n        return;\n      }\n\n      this.openedWindow = this._nextWindows;\n      this._modalBlock = this.openedWindow.querySelector('.hystmodal__window');\n      this.config.beforeOpen(this);\n\n      this._bodyScrollControl();\n\n      HystModal._shadow.classList.add(\"hystmodal__shadow--show\");\n\n      this.openedWindow.classList.add(\"hystmodal--active\");\n      this.openedWindow.setAttribute('aria-hidden', 'false');\n      if (this.config.catchFocus) this.focusContol();\n      this.isOpened = true;\n    }\n  }, {\n    key: \"close\",\n    value: function close() {\n      if (!this.isOpened) {\n        return;\n      }\n\n      if (this.config.waitTransitions) {\n        this.openedWindow.classList.add(\"hystmodal--moved\");\n        this._isMoved = true;\n        this.openedWindow.addEventListener(\"transitionend\", this._closeAfterTransition);\n        this.openedWindow.classList.remove(\"hystmodal--active\");\n      } else {\n        this.openedWindow.classList.remove(\"hystmodal--active\");\n\n        this._closeAfterTransition();\n      }\n    }\n  }, {\n    key: \"_closeAfterTransition\",\n    value: function _closeAfterTransition() {\n      this.openedWindow.classList.remove(\"hystmodal--moved\");\n      this.openedWindow.removeEventListener(\"transitionend\", this._closeAfterTransition);\n      this._isMoved = false;\n\n      HystModal._shadow.classList.remove(\"hystmodal__shadow--show\");\n\n      this.openedWindow.setAttribute('aria-hidden', 'true');\n      if (this.config.catchFocus) this.focusContol();\n\n      this._bodyScrollControl();\n\n      this.isOpened = false;\n      this.openedWindow.scrollTop = 0;\n      this.config.afterClose(this);\n\n      if (this._reopenTrigger) {\n        this._reopenTrigger = false;\n        this.open();\n      }\n    }\n  }, {\n    key: \"focusContol\",\n    value: function focusContol() {\n      var nodes = this.openedWindow.querySelectorAll(this._focusElements);\n\n      if (this.isOpened && this.starter) {\n        this.starter.focus();\n      } else {\n        if (nodes.length) nodes[0].focus();\n      }\n    }\n  }, {\n    key: \"focusCatcher\",\n    value: function focusCatcher(e) {\n      var nodes = this.openedWindow.querySelectorAll(this._focusElements);\n      var nodesArray = Array.prototype.slice.call(nodes);\n\n      if (!this.openedWindow.contains(document.activeElement)) {\n        nodesArray[0].focus();\n        e.preventDefault();\n      } else {\n        var focusedItemIndex = nodesArray.indexOf(document.activeElement);\n        console.log(focusedItemIndex);\n\n        if (e.shiftKey && focusedItemIndex === 0) {\n          nodesArray[nodesArray.length - 1].focus();\n          e.preventDefault();\n        }\n\n        if (!e.shiftKey && focusedItemIndex === nodesArray.length - 1) {\n          nodesArray[0].focus();\n          e.preventDefault();\n        }\n      }\n    }\n  }, {\n    key: \"_bodyScrollControl\",\n    value: function _bodyScrollControl() {\n      if (!this.config.backscroll) return; // collect fixel selectors to array\n\n      var fixedSelectors = Array.prototype.slice.call(document.querySelectorAll(this.config.fixedSelectors));\n      var html = document.documentElement;\n\n      if (this.isOpened === true) {\n        html.classList.remove(\"hystmodal__opened\");\n        html.style.marginRight = \"\";\n        fixedSelectors.map(function (el) {\n          el.style.marginRight = \"\";\n        });\n        window.scrollTo(0, this._scrollPosition);\n        html.style.top = \"\";\n        return;\n      }\n\n      this._scrollPosition = window.pageYOffset;\n      var marginSize = window.innerWidth - html.clientWidth;\n      html.style.top = -this._scrollPosition + \"px\";\n\n      if (marginSize) {\n        html.style.marginRight = marginSize + \"px\";\n        fixedSelectors.map(function (el) {\n          el.style.marginRight = parseInt(getComputedStyle(el).marginRight) + marginSize + \"px\";\n        });\n      }\n\n      html.classList.add(\"hystmodal__opened\");\n    }\n  }]);\n\n  return HystModal;\n}();\n\n_defineProperty(HystModal, \"_shadow\", false);\n\n\n\n//# sourceURL=webpack://webpack_start/./src/lib/generateModal.js?");

/***/ }),

/***/ "./src/pages/Gallery.js":
/*!******************************!*\
  !*** ./src/pages/Gallery.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css_gallery_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/css/gallery.css */ \"./src/styles/css/gallery.css\");\n/* harmony import */ var _styles_css_hystmodal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/css/hystmodal.css */ \"./src/styles/css/hystmodal.css\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\nvar Gallery = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var view;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            view = \"\\n\\n    <section id=\\\"gallery-page\\\" >\\n    <div class=\\\"gallery-page__header\\\">\\n        <h2 class=\\\"gallery-page__title\\\">\\u041D\\u0430\\u0448\\u0438 \\u043F\\u043E\\u0434\\u043E\\u043F\\u0435\\u0447\\u043D\\u044B\\u0435</h2>\\n        <a href=\\\"/save_life/dist/index.html/#carousel\\\" class=\\\"gallery-page__link\\\">\\u0412\\u0435\\u0440\\u043D\\u0443\\u0442\\u044C\\u0441\\u044F \\u043D\\u0430\\u0437\\u0430\\u0434</a>\\n        <select id=\\\"gallery-page__select\\\" name=\\\"select\\\" size=\\\"1\\\">\\n            <option selected value=\\\"all\\\">\\u041A\\u043E\\u0442\\u044B \\u0438 \\u0441\\u043E\\u0431\\u0430\\u043A\\u0438</option>\\n            <option value=\\\"cat\\\">\\u0422\\u043E\\u043B\\u044C\\u043A\\u043E \\u043A\\u043E\\u0442\\u044B</option>\\n            <option value=\\\"dog\\\">\\u0422\\u043E\\u043B\\u044C\\u043A\\u0438 \\u0441\\u043E\\u0431\\u0430\\u043A\\u0438</option>\\n        </select>\\n    </div>  \\n    <div class=\\\"gallery-page\\\">\\n        <ul id=\\\"pets-gallery-page\\\" class=\\\"gallery-page__list\\\"></ul>   \\n    </div>\\n    <div class=\\\"gallery-buttons-container\\\">\\n        <button class=\\\"gallery__add-btn\\\" data-newPet=\\\"#create-item\\\">\\n            <div class=\\\"gallery__add-btn-bg\\\">\\n                <span class=\\\"gallery__add-btn-text\\\">\\u0414\\u043E\\u0431\\u0430\\u0432\\u0438\\u0442\\u044C</span>\\n            </div>\\n        </button>\\n    </div>\\n\\n    </section>\\n\\n    <!--Current pet Modal-->\\n    <div class=\\\"hystmodal\\\" id=\\\"myModal\\\" aria-hidden=\\\"true\\\">\\n        <div class=\\\"hystmodal__wrap\\\">\\n            <div class=\\\"hystmodal__window\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\">\\n                <button data-hystclose class=\\\"hystmodal__close\\\">\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C</button>  \\n                <div id=\\\"pet-modal-container\\\"></div>\\n            </div>\\n        </div> \\n    </div>\\n\\n    <!--Create pet Modal-->\\n    <div class=\\\"hystmodal\\\" id=\\\"create-item\\\" aria-hidden=\\\"true\\\">\\n        <div class=\\\"hystmodal__wrap\\\">\\n            <div class=\\\"hystmodal__window\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\">\\n                <button data-hystclose class=\\\"hystmodal__close\\\">\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C</button> \\n                <div id=\\\"create-item-container\\\"></div> \\n            </div>\\n        </div> \\n    </div>\\n\\n    <!--Edit pet Modal-->\\n    <div class=\\\"hystmodal\\\" id=\\\"edit-item\\\" aria-hidden=\\\"true\\\">\\n        <div class=\\\"hystmodal__wrap\\\">\\n            <div class=\\\"hystmodal__window\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\">\\n                <button data-hystclose class=\\\"hystmodal__close\\\">\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C</button> \\n                <div id=\\\"edit-item-container\\\"></div> \\n            </div>\\n        </div> \\n    </div>\\n\\n\\n    \";\n            return _context.abrupt(\"return\", view);\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function Gallery() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gallery);\n\n//# sourceURL=webpack://webpack_start/./src/pages/Gallery.js?");

/***/ }),

/***/ "./src/pages/Home.js":
/*!***************************!*\
  !*** ./src/pages/Home.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/css/main.css */ \"./src/styles/css/main.css\");\n/* harmony import */ var _styles_css_hystmodal_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/css/hystmodal.css */ \"./src/styles/css/hystmodal.css\");\n/* harmony import */ var _images_img_bg_desc_img_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/img/bg/desc_img_2.png */ \"./src/images/img/bg/desc_img_2.png\");\n/* harmony import */ var _images_img_bg_desc_img_1_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/img/bg/desc_img_1.png */ \"./src/images/img/bg/desc_img_1.png\");\n/* harmony import */ var _images_icons_sections_section_1_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/icons/sections/section_1.png */ \"./src/images/icons/sections/section_1.png\");\n/* harmony import */ var _images_icons_sections_section_2_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/icons/sections/section_2.png */ \"./src/images/icons/sections/section_2.png\");\n/* harmony import */ var _images_icons_sections_section_3_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/icons/sections/section_3.png */ \"./src/images/icons/sections/section_3.png\");\n/* harmony import */ var _images_icons_sections_section_4_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../images/icons/sections/section_4.png */ \"./src/images/icons/sections/section_4.png\");\n/* harmony import */ var _images_icons_sections_section_5_png__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../images/icons/sections/section_5.png */ \"./src/images/icons/sections/section_5.png\");\n/* harmony import */ var _images_icons_left_btn_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../images/icons/left-btn.png */ \"./src/images/icons/left-btn.png\");\n/* harmony import */ var _images_icons_right_btn_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../images/icons/right-btn.png */ \"./src/images/icons/right-btn.png\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! regenerator-runtime */ \"./node_modules/regenerator-runtime/runtime.js\");\n/* harmony import */ var regenerator_runtime__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime__WEBPACK_IMPORTED_MODULE_11__);\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar Home = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regenerator_runtime__WEBPACK_IMPORTED_MODULE_11___default().mark(function _callee() {\n    var view;\n    return regenerator_runtime__WEBPACK_IMPORTED_MODULE_11___default().wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            view = \"\\n    <section id=\\\"description\\\" >\\n    <div class=\\\"section-description\\\">\\n        <div class=\\\"section-description__body\\\">\\n            <h2 class=\\\"section-description__title\\\">\\u0422\\u0443\\u0442 \\u0431\\u043E\\u043B\\u044C\\u0448\\u0438\\u0435 \\u0434\\u043E\\u0431\\u0440\\u044B\\u0435 \\u0441\\u0435\\u0440\\u0434\\u0446\\u0430 \\u043F\\u043E\\u043C\\u043E\\u0433\\u0430\\u044E\\u0442 \\u0436\\u0438\\u0442\\u044C \\u043C\\u0430\\u043B\\u0435\\u043D\\u044C\\u043A\\u0438\\u043C \\u0441\\u0435\\u0440\\u0434\\u0435\\u0447\\u043A\\u0430\\u043C</h2>\\n            <p class=\\\"section-description__text\\\">\\n             \\u0415\\u0436\\u0435\\u0434\\u043D\\u0435\\u0432\\u043D\\u043E \\u0432 \\u043F\\u0443\\u043D\\u043A\\u0442 \\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E \\u0441\\u043E\\u0434\\u0435\\u0440\\u0436\\u0430\\u043D\\u0438\\u044F, \\u043F\\u0443\\u0442\\u0451\\u043C \\u043E\\u0442\\u043B\\u043E\\u0432\\u0430, \\u043F\\u043E\\u043F\\u0430\\u0434\\u0430\\u044E\\u0442 \\u0431\\u0435\\u0437\\u043D\\u0430\\u0434\\u0437\\u043E\\u0440\\u043D\\u044B\\u0435 \\u0441\\u043E\\u0431\\u0430\\u043A\\u0438 \\u0438 \\u043A\\u043E\\u0442\\u044B. \\u041F\\u043E \\u0437\\u0430\\u043A\\u043E\\u043D\\u0443, \\u0443 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445 \\u043D\\u0430\\u0445\\u043E\\u0434\\u044F\\u0449\\u0438\\u0445\\u0441\\u044F \\u0432 \\u0421\\u0410\\u0425\\u0435 \\u0435\\u0441\\u0442\\u044C \\u0432\\u0441\\u0435\\u0433\\u043E \\u043B\\u0438\\u0448\\u044C \\u043D\\u0435\\u0441\\u043A\\u043E\\u043B\\u044C\\u043A\\u043E \\u0434\\u043D\\u0435\\u0439, \\u0447\\u0442\\u043E\\u0431\\u044B \\u043D\\u0430\\u0439\\u0442\\u0438 \\u043F\\u0440\\u0435\\u0436\\u043D\\u0435\\u0433\\u043E \\u0438\\u043B\\u0438 \\u043E\\u0431\\u0440\\u0435\\u0441\\u0442\\u0438 \\u043D\\u043E\\u0432\\u043E\\u0433\\u043E \\u0445\\u043E\\u0437\\u044F\\u0438\\u043D\\u0430. \\u0412 \\u043F\\u0440\\u043E\\u0442\\u0438\\u0432\\u043D\\u043E\\u043C \\u0441\\u043B\\u0443\\u0447\\u0430\\u0435 \\u043D\\u0435\\u0432\\u043E\\u0441\\u0442\\u0440\\u0435\\u0431\\u043E\\u0432\\u0430\\u043D\\u043D\\u044B\\u0445 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445 \\u0436\\u0434\\u0451\\u0442 \\u0423\\u0421\\u042B\\u041F\\u041B\\u0415\\u041D\\u0418\\u0415! \\u0417\\u0434\\u0435\\u0441\\u044C \\u0432\\u044B \\u0441\\u043C\\u043E\\u0436\\u0435\\u0442\\u0435 \\u043D\\u0430\\u0439\\u0442\\u0438 \\u0441\\u0432\\u043E\\u0435\\u0433\\u043E \\u043A\\u0430\\u043A \\u043F\\u043E\\u0442\\u0435\\u0440\\u044F\\u0432\\u0448\\u0435\\u0433\\u043E\\u0441\\u044F, \\u0442\\u0430\\u043A \\u0438 \\u043D\\u043E\\u0432\\u043E\\u0433\\u043E \\u0432\\u0435\\u0440\\u043D\\u043E\\u0433\\u043E \\u0434\\u0440\\u0443\\u0433\\u0430! \\n            </p>\\n            <p class=\\\"section-description__text\\\">\\n             \\u0415\\u0441\\u043B\\u0438 \\u043D\\u0435\\u0442 \\u0432\\u043E\\u0437\\u043C\\u043E\\u0436\\u043D\\u043E\\u0441\\u0442\\u0438 \\u0437\\u0430\\u0431\\u0440\\u0430\\u0442\\u044C \\u0445\\u0432\\u043E\\u0441\\u0442\\u0438\\u043A\\u0430, \\u0432\\u044B \\u043C\\u043E\\u0436\\u0435\\u0442\\u0435 \\u043F\\u043E\\u043C\\u043E\\u0447\\u044C \\u043D\\u0430\\u043C \\u0444\\u0438\\u043D\\u0430\\u043D\\u0441\\u043E\\u0432\\u043E \\u0438\\u043B\\u0438 \\u0434\\u0440\\u0443\\u0433\\u043E\\u0439 \\u043C\\u0430\\u0442\\u0435\\u0440\\u0438\\u0430\\u043B\\u044C\\u043D\\u043E\\u0439 \\u043F\\u043E\\u043C\\u043E\\u0449\\u044C\\u044E. \\u0415\\u0449\\u0435 \\u043D\\u0430\\u043C \\u0432\\u0441\\u0435\\u0433\\u0434\\u0430 \\u043D\\u0443\\u0436\\u043D\\u044B \\u0434\\u043E\\u0431\\u0440\\u044B\\u0435 \\u0438 \\u043E\\u0442\\u0437\\u044B\\u0432\\u0447\\u0438\\u0432\\u044B\\u0435 \\u043B\\u044E\\u0434\\u0438 - \\u0432\\u043E\\u043B\\u043E\\u043D\\u0442\\u0435\\u0440\\u044B, \\u0431\\u0435\\u0437 \\u0432\\u0430\\u0441 \\u043E\\u0447\\u0435\\u043D\\u044C \\u0442\\u0440\\u0443\\u0434\\u043D\\u043E!\\n            </p>\\n        </div>\\n        <div class=\\\"section-description__image\\\">\\n            <div class=\\\"section-description__image-sqr\\\"></div>\\n            <div class=\\\"section-description__image-crc\\\"></div>\\n            <div> <img src=\\\"\".concat(_images_img_bg_desc_img_1_png__WEBPACK_IMPORTED_MODULE_3__, \"\\\" alt=\\\"dog\\\" class=\\\"section-description__image_1\\\"></div>\\n            <div class=\\\"section-description__image-crc_2\\\"></div>\\n            <div> <img src=\\\"\").concat(_images_img_bg_desc_img_2_png__WEBPACK_IMPORTED_MODULE_2__, \"\\\" alt=\\\"cat\\\" class=\\\"section-description__image_2\\\"></div>\\n        </div>\\n    </div>\\n\\n</section>\\n\\n<section id = \\\"help\\\" class =\\\"help-nav\\\">\\n    <h2 class =\\\"help-nav__title\\\">\\u041A\\u0430\\u043A \\u043F\\u043E\\u043C\\u043E\\u0447\\u044C?</h2>\\n    <ul class =\\\"help-nav__list\\\">\\n        <li class =\\\"help-nav__item help-item\\\">\\n            <a href=\\\"#home-help\\\" class=\\\"help-item__link\\\">\\n                <div class=\\\"help-item__img\\\"><img src=\\\"\").concat(_images_icons_sections_section_1_png__WEBPACK_IMPORTED_MODULE_4__, \"\\\"></div>\\n                <div class=\\\"help-item__text\\\">\\u0414\\u0430\\u0442\\u044C \\u0445\\u0432\\u043E\\u0441\\u0442\\u0438\\u043A\\u0443 \\u0434\\u043E\\u043C \\u0438\\u043B\\u0438 \\u0432\\u0437\\u044F\\u0442\\u044C \\u043D\\u0430 \\u043F\\u0435\\u0440\\u0435\\u0434\\u0435\\u0440\\u0436\\u043A\\u0443</div> \\n            </a>\\n            </li>\\n        <li class =\\\"help-nav__item help-item\\\">\\n            <a href=\\\"#home-help\\\" class=\\\"help-item__link\\\">\\n                <div class=\\\"help-item__img\\\"><img src=\\\"\").concat(_images_icons_sections_section_2_png__WEBPACK_IMPORTED_MODULE_5__, \"\\\"></div>\\n                <div class=\\\"help-item__text\\\">\\u041F\\u0435\\u0440\\u0435\\u0447\\u0438\\u0441\\u043B\\u0438\\u0442\\u044C \\u0434\\u0435\\u043D\\u044C\\u0433\\u0438 \\u0432 \\u0444\\u043E\\u043D\\u0434 \\u043F\\u043E\\u043C\\u043E\\u0449\\u0438</div> \\n            </a>\\n            </li>\\n        <li class =\\\"help-nav__item help-item\\\">\\n            <a href=\\\"#home-help\\\" class=\\\"help-item__link\\\">\\n                <div class=\\\"help-item__img\\\"><img src=\\\"\").concat(_images_icons_sections_section_3_png__WEBPACK_IMPORTED_MODULE_6__, \"\\\"></div>\\n                <div class=\\\"help-item__text\\\">\\u041F\\u0440\\u0438\\u0432\\u0435\\u0437\\u0442\\u0438 \\u043A\\u043E\\u0440\\u043C, \\u043B\\u0435\\u043A\\u0430\\u0440\\u0441\\u0442\\u0432\\u0430 \\u0438\\u043B\\u0438 \\u0434\\u0440\\u0443\\u0433\\u0438\\u0435 \\u0432\\u0435\\u0449\\u0438</div> \\n            </a>\\n            </li>\\n        <li class =\\\"help-nav__item help-item\\\">\\n            <a href=\\\"#home-help\\\" class=\\\"help-item__link\\\">\\n                <div class=\\\"help-item__img\\\"><img src=\\\"\").concat(_images_icons_sections_section_4_png__WEBPACK_IMPORTED_MODULE_7__, \"\\\"></div>\\n                <div class=\\\"help-item__text\\\">\\u0414\\u043E\\u0441\\u0442\\u0430\\u0432\\u0438\\u0442\\u044C \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u043C \\u0435\\u0434\\u0443 \\u0438\\u043B\\u0438 \\u043E\\u0442\\u0432\\u0435\\u0437\\u0442\\u0438 \\u0432 \\u0431\\u043E\\u043B\\u044C\\u043D\\u0438\\u0446\\u0443</div> \\n            </a>\\n            </li>\\n        <li class =\\\"help-nav__item help-item\\\">\\n            <a href=\\\"#home-help\\\" class=\\\"help-item__link\\\">\\n                <div class=\\\"help-item__img\\\"><img src=\\\"\").concat(_images_icons_sections_section_5_png__WEBPACK_IMPORTED_MODULE_8__, \"\\\"></div>\\n                <div class=\\\"help-item__text\\\">\\u0412\\u044B\\u0433\\u0443\\u043B\\u0438\\u0432\\u0430\\u0442\\u044C, \\u043A\\u043E\\u0440\\u043C\\u0438\\u0442\\u044C, \\u043C\\u044B\\u0442\\u044C \\u0438\\u043B\\u0438 \\u043B\\u0435\\u0447\\u0438\\u0442\\u044C \\u0445\\u0432\\u043E\\u0441\\u0442\\u0438\\u043A\\u043E\\u0432</div>\\n            </a>\\n            </li>\\n    </ul>\\n</section>\\n\\n<section id=\\\"home-help\\\" >\\n    <div class=\\\"create-form__line\\\"></div>\\n    <div class=\\\"home-help__logo\\\"></div>\\n    <div class=\\\"home-help__body\\\">\\n        <div class=\\\"home-help__item home-item\\\">\\n            <h3 class=\\\"home-item__title\\\">\\u0414\\u043E\\u043C \\u0438 \\u043B\\u044E\\u0431\\u043E\\u0432\\u044C \\u0434\\u043B\\u044F \\u0445\\u0432\\u043E\\u0441\\u0442\\u0438\\u043A\\u0430</h3>\\n            <p class=\\\"home-item__text\\\">\\u0421\\u0430\\u043C\\u0430\\u044F \\u0431\\u043E\\u043B\\u044C\\u0448\\u0430\\u044F \\u043F\\u043E\\u043C\\u043E\\u0449\\u044C - \\u044D\\u0442\\u043E \\u0441\\u043F\\u0430\\u0441\\u0442\\u0438 \\u0436\\u0438\\u0437\\u043D\\u044C \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u043E\\u043C\\u0443, \\u0437\\u0430\\u0431\\u0440\\u0430\\u0442\\u044C \\u0434\\u043E\\u043C\\u043E\\u0439, \\u0438\\u043B\\u0438 \\u043F\\u043E\\u043C\\u043E\\u0447\\u044C \\u0445\\u0432\\u043E\\u0441\\u0442\\u0438\\u043A\\u0443 \\u0441 \\u043F\\u043E\\u0438\\u0441\\u043A\\u043E\\u043C \\u0434\\u043E\\u043C\\u0430. \\u0423 \\u043D\\u0430\\u0448\\u0438\\u0445 \\u043F\\u043E\\u0434\\u043E\\u043F\\u0435\\u0447\\u043D\\u044B\\u0445 \\u043E\\u0447\\u0435\\u043D\\u044C \\u043C\\u0430\\u043B\\u043E \\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u0438. \\u0420\\u0430\\u0441\\u0441\\u043A\\u0430\\u0437\\u044B\\u0432\\u0430\\u0439\\u0442\\u0435 \\u0434\\u0440\\u0443\\u0437\\u044C\\u044F \\u0438 \\u0438 \\u0437\\u043D\\u0430\\u043A\\u043E\\u043C\\u044B\\u043C \\u043E \\u043D\\u0430\\u0448\\u0438\\u0445 \\u0445\\u0432\\u043E\\u0441\\u0442\\u0438\\u043A\\u0430\\u0445, \\u0432\\u043E\\u0437\\u043C\\u043E\\u0436\\u043D\\u043E \\u043A\\u043E\\u043C\\u0443-\\u0442\\u043E \\u043D\\u0443\\u0436\\u0435\\u043D \\u0431\\u0443\\u0434\\u0435\\u0442 \\u0438\\u043C\\u0435\\u043D\\u043D\\u043E \\u0442\\u0430\\u043A\\u043E\\u0439 \\u0434\\u0440\\u0443\\u0433.</p>\\n        </div>\\n        <div class=\\\"home-help__item\\\">\\n            <h3 class=\\\"home-item__title\\\">\\u041F\\u0435\\u0440\\u0435\\u0434\\u0435\\u0440\\u0436\\u043A\\u0430</h3>\\n            <p class=\\\"home-item__text\\\">\\u041A\\u043E\\u0433\\u0434\\u0430 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445 \\u0436\\u0434\\u0435\\u0442 \\u0441\\u043A\\u043E\\u0440\\u043E\\u0435 \\u0443\\u0441\\u044B\\u043F\\u043B\\u0435\\u043D\\u0438\\u0435, \\u043E\\u0447\\u0435\\u043D\\u044C \\u0432\\u0430\\u0436\\u043D\\u043E \\u043D\\u0430\\u0439\\u0442\\u0438 \\u0435\\u043C\\u0443 \\u0434\\u043E\\u043C. \\u041D\\u043E \\u043F\\u043E\\u043A\\u0430 \\u0434\\u043E\\u043C \\u0438 \\u043D\\u043E\\u0432\\u044B\\u0435 \\u0438\\u043B\\u0438 \\u0441\\u0442\\u0430\\u0440\\u044B\\u0435 \\u0445\\u043E\\u0437\\u044F\\u0435\\u0432\\u0430 \\u0440\\u0430\\u0437\\u044B\\u0441\\u043A\\u0438\\u0432\\u0430\\u044E\\u0442\\u0441\\u044F, \\u0445\\u0432\\u043E\\u0441\\u0442\\u0438\\u043A\\u0443 \\u043D\\u0443\\u0436\\u043D\\u043E \\u0433\\u0434\\u0435-\\u0442\\u043E \\u0436\\u0438\\u0442\\u044C. \\u0412\\u044B \\u043C\\u043E\\u0436\\u0435\\u0442\\u0435 \\u0437\\u0430\\u0431\\u0440\\u0430\\u0442\\u044C \\u043A \\u0441\\u0435\\u0431\\u0435 \\u0434\\u043E\\u043C\\u043E\\u0439 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445 \\u043D\\u0430 \\u0432\\u0440\\u0435\\u043C\\u044F. \\u0412\\u043E\\u043B\\u043E\\u043D\\u0442\\u0435\\u0440\\u044B, \\u0432 \\u0441\\u0432\\u043E\\u044E \\u043E\\u0447\\u0435\\u0440\\u0435\\u0434\\u044C, \\u043E\\u0431\\u044F\\u0437\\u0430\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E \\u043F\\u043E\\u043C\\u043E\\u0433\\u0443\\u0442 \\u0441 \\u043F\\u043E\\u0438\\u0441\\u043A\\u043E\\u043C \\u043D\\u043E\\u0432\\u043E\\u0433\\u043E \\u0434\\u043E\\u043C\\u0430.\\n            </p>\\n        </div>\\n    </div>\\n\\n    \\n</section>\\n\\n<section id=\\\"wards-animals\\\" class=\\\"gallery\\\">\\n    <h2 class=\\\"gallery__title\\\">\\u041D\\u0430\\u0448\\u0438 \\u043F\\u043E\\u0434\\u043E\\u043F\\u0435\\u0447\\u043D\\u044B\\u0435</h2>\\n    <a href=\\\"/save_life/dist/#/gallery\\\" class=\\\"gallery__link\\\">\\u041F\\u043E\\u0441\\u043C\\u043E\\u0442\\u0440\\u0435\\u0442\\u044C \\u0432\\u0441\\u0435\\u0445<span class=\\\"gallery__counter\\\"></span></a>\\n    <div id=\\\"carousel\\\" class=\\\"carousel\\\">\\n        <div class=\\\"gallery gallery-slider\\\">\\n            <ul id=\\\"pets-gallery\\\" class=\\\"gallery__list\\\" style=\\\"margin-left: 0px\\\"></ul>\\n            <button class=\\\"gallery-slider__left-btn\\\"><img src=\\\"\").concat(_images_icons_left_btn_png__WEBPACK_IMPORTED_MODULE_9__, \"\\\"></button>\\n            <button class=\\\"gallery-slider__right-btn\\\"><img src=\\\"\").concat(_images_icons_right_btn_png__WEBPACK_IMPORTED_MODULE_10__, \"\\\"></button>\\n            <button class=\\\"gallery__btn1\\\" data-takeHome=\\\"#takeHomeModal\\\">\\n                <div class=\\\"gallery__btn1-bg\\\"><span class=\\\"gallery-btn1__text\\\">\\u0417\\u0430\\u0431\\u0440\\u0430\\u0442\\u044C \\u0434\\u043E\\u043C\\u043E\\u0439</span></div>\\n            </button>\\n            <button class=\\\"gallery__btn2\\\" data-pickUpForOverexposure=\\\"#pickUpForOverexposureModal\\\">\\n                <div class=\\\"gallery__btn2-bg\\\"><span class=\\\"gallery-btn2__text\\\">\\u0417\\u0430\\u0431\\u0440\\u0430\\u0442\\u044C \\u043D\\u0430 \\u043F\\u0435\\u0440\\u0435\\u0434\\u0435\\u0440\\u0436\\u043A\\u0443</span></div>\\n            </button>  \\n        </div>\\n    </div>          \\n</section>\\n\\n<!-- <section id=\\\"financial-help\\\">\\n    <hr>\\n    <h3>\\u0424\\u0438\\u043D\\u0430\\u043D\\u0441\\u043E\\u0432\\u0430\\u044F \\u043F\\u043E\\u0434\\u0434\\u0435\\u0440\\u0436\\u043A\\u0430</h3>\\n    <p> \\u0422\\u0430\\u043A\\u0430\\u044F \\u043F\\u043E\\u043C\\u043E\\u0449\\u044C \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u0430 \\u0434\\u043B\\u044F \\u043E\\u043F\\u043B\\u0430\\u0442\\u044B \\u0441\\u0442\\u0435\\u0440\\u0438\\u043B\\u0438\\u0437\\u0430\\u0446\\u0438\\u0438, \\u043F\\u0440\\u0438\\u0432\\u0438\\u0432\\u043E\\u043A, \\u043B\\u0435\\u0447\\u0435\\u043D\\u0438\\u044F \\u0431\\u043E\\u043B\\u044C\\u043D\\u044B\\u0445 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445, \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u0430 \\u043A\\u043E\\u0440\\u043C\\u0430 \\u0438 \\u0434\\u0440\\u0443\\u0433\\u0438\\u0445 \\u0436\\u0438\\u0437\\u043D\\u0435\\u043D\\u043D\\u043E \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u044B\\u0445 \\u0432\\u0435\\u0449\\u0435\\u0439.</p>\\n    <div>\\n        <h4>\\u0420\\u0430\\u0441\\u0447\\u0435\\u0442\\u043D\\u044B\\u0439 \\u0441\\u0447\\u0435\\u0442 \\u0432 \\u0411\\u0430\\u043D\\u043A\\u0435</h4>\\n        <p>\\u0411\\u041E\\u041E\\u0417\\u0416 \\\"\\u0421\\u041F\\u0410\\u0421\\u0418 \\u0416\\u0418\\u0417\\u041D\\u042C\\\"<br>\\n            \\u0423\\u041D\\u041F: 590375680 <br>\\n            \\u0422\\u0435\\u043A\\u0443\\u0449\\u0438\\u0439 (\\u0440\\u0430\\u0441\\u0447\\u0435\\u0442\\u043D\\u044B\\u0439) \\u0441\\u0447\\u0435\\u0442 \\u0432 BYN: <br>\\n            BY13ALFA30152555460010270000 <br>\\n            \\u0417\\u0410\\u041E '\\u0410\\u043B\\u044C\\u0444\\u0430-\\u0411\\u0430\\u043D\\u043A'<br>\\n            \\u0411\\u0418\\u041A: ALFABY2X <br>\\n        </p>\\n        <button class=\\\"financial-help__btn\\\">\\u0411\\u044B\\u0441\\u0442\\u0440\\u044B\\u0439 \\u043F\\u043B\\u0430\\u0442\\u0435\\u0436</button>\\n    </div>\\n    <div>\\n    <h4>\\u041A\\u043E\\u0440\\u043E\\u0431\\u043E\\u0447\\u043A\\u0438 \\u0432 \\u0433\\u043E\\u0440\\u043E\\u0434\\u0435</h4>\\n        <ol type=\\\"1\\\"><p>\\u041D\\u0430\\u0448\\u0438 \\u043A\\u043E\\u0440\\u043E\\u0431\\u043E\\u0447\\u043A\\u0438 \\u0434\\u043B\\u044F \\u043F\\u043E\\u0436\\u0435\\u0440\\u0442\\u0432\\u043E\\u0432\\u0430\\u043D\\u0438\\u0439 \\u0432 \\u0433. \\u0413\\u0440\\u043E\\u0434\\u043D\\u043E:</p>\\n            <li>\\u0417\\u043E\\u043E\\u043C\\u0430\\u0440\\u043A\\u0435\\u0442 \\xAB\\u0417\\u043E\\u043E\\u0431\\u0430\\u0437\\u0430\\u0440\\xBB, \\u0443\\u043B. \\u041A\\u043E\\u043C\\u0430\\u0440\\u043E\\u0432\\u0430, 26\\u0430; </li>\\n            <li>\\u0423\\u0447\\u0435\\u0431\\u043D\\u044B\\u0439 \\u043A\\u043E\\u0440\\u043F\\u0443\\u0441 \\u0413\\u0413\\u0410\\u0423,  \\u0443\\u043B. \\u0412\\u043E\\u043B\\u043A\\u043E\\u0432\\u0438\\u0447\\u0430, 1;</li>\\n            <li>\\u041F\\u0430\\u0440\\u0438\\u043A\\u043C\\u0430\\u0445\\u0435\\u0440\\u0441\\u043A\\u0430\\u044F \\xAB\\u041F\\u0420\\u0418\\u041C\\u0410\\u0414\\u041E\\u041D\\u041D\\u0410\\xBB, \\u0443\\u043B. \\u0413\\u043E\\u0433\\u043E\\u043B\\u044F, 11;</li>\\n            <li>\\u0417\\u043E\\u043E\\u043C\\u0430\\u0440\\u043A\\u0435\\u0442 \\xAB\\u0417\\u043E\\u043E\\u0431\\u0430\\u0437\\u0430\\u0440\\xBB \\u0443\\u043B. \\u041F\\u0443\\u0448\\u043A\\u0438\\u043D\\u0430, 31\\u0430;</li>\\n            <li>\\u0413\\u0438\\u043F\\u0435\\u0440\\u043C\\u0430\\u0440\\u043A\\u0435\\u0442 \\xAB\\u0415\\u0432\\u0440\\u043E\\u043E\\u043F\\u0442\\xBB, \\u0443\\u043B. \\u0422\\u0438\\u043C\\u0438\\u0440\\u044F\\u0437\\u0435\\u0432\\u0430, 8;</li>\\n            <li>\\u0413\\u0438\\u043F\\u0435\\u0440\\u043C\\u0430\\u0440\\u043A\\u0435\\u0442 \\xAB\\u0415\\u0432\\u0440\\u043E\\u043E\\u043F\\u0442\\xBB, \\u0443\\u043B. \\u042F\\u043D\\u043A\\u0438 \\u041A\\u0443\\u043F\\u0430\\u043B\\u044B, 82\\u0410;</li>\\n            <li>\\u0424\\u0438\\u0442\\u043D\\u0435\\u0441-\\u0446\\u0435\\u043D\\u0442\\u0440 \\xAB\\u0410\\u0414\\u0420\\u0415\\u041D\\u0410\\u041B\\u0418\\u041D\\xBB, \\u0443\\u043B. \\u041F\\u043E\\u0434\\u043E\\u043B\\u044C\\u043D\\u0430\\u044F, \\u0434.37.</li>\\n        </ol>\\n    </div>\\n</section>\\n\\n<section id=\\\"other-help\\\">\\n    <hr>\\n    <h3>\\u041F\\u0440\\u043E\\u0447\\u0430\\u044F \\u043F\\u043E\\u043C\\u043E\\u0449\\u044C</h3>\\n    <h4>\\u041A\\u043E\\u0440\\u043C\\u0430</h4>\\n    <ul>\\u041C\\u043E\\u0436\\u043D\\u043E \\u043F\\u043E\\u043C\\u043E\\u0447\\u044C \\u0441 \\u043F\\u043E\\u043A\\u0443\\u043F\\u043A\\u043E\\u0439 \\u0438 \\u0434\\u043E\\u0441\\u0442\\u0430\\u0432\\u043A\\u043E\\u0439 \\u0435\\u0434\\u044B \\u0434\\u043B\\u044F \\u0445\\u0432\\u043E\\u0441\\u0442\\u0430\\u0442\\u044B\\u0445:\\n        <li>\\u0411\\u044B\\u0441\\u0442\\u0440\\u043E\\u0440\\u0430\\u0437\\u0432\\u0430\\u0440\\u0438\\u0432\\u0430\\u044E\\u0449\\u0438\\u0435\\u0441\\u044F \\u043A\\u0440\\u0443\\u043F\\u044B: \\u0434\\u0440\\u043E\\u0431\\u043B\\u0451\\u043D\\u0430\\u044F \\u0433\\u0440\\u0435\\u0447\\u043A\\u0430, \\u043E\\u0432\\u0441\\u044F\\u043D\\u043A\\u0430, \\u0441\\u0435\\u0447\\u043A\\u0430, \\u043E\\u0432\\u0441\\u044F\\u043D\\u044B\\u0435/\\u0433\\u0440\\u0435\\u0447\\u043D\\u0435\\u0432\\u044B\\u0435 \\u0445\\u043B\\u043E\\u043F\\u044C\\u044F, \\u043D\\u0435 \\u0442\\u0440\\u0435\\u0431\\u0443\\u044E\\u0449\\u0438\\u0435 \\u0432\\u0430\\u0440\\u043A\\u0438;</li>\\n        <li>\\u0421\\u0443\\u0445\\u0438\\u0435 \\u0438 \\u0432\\u043B\\u0430\\u0436\\u043D\\u044B\\u0435 \\u043A\\u043E\\u0440\\u043C\\u0430 \\u0434\\u043B\\u044F \\u0441\\u043E\\u0431\\u0430\\u043A \\u0438 \\u043A\\u043E\\u0442\\u043E\\u0432 (\\u043A\\u0440\\u043E\\u043C\\u0435 \\u0420\\u0435\\u043A\\u0441 \\u0438 Petboom),</li>\\n        <li> \\u0424\\u0430\\u0440\\u0448 \\u0434\\u043B\\u044F \\u0441\\u043E\\u0431\\u0430\\u043A, \\\"\\u0411\\u041E\\u0411\\u0418\\u041A\\u0418\\\" \\u0438 \\u0434\\u0440.</li>\\n        <div>\\u0412\\u044B \\u043C\\u043E\\u0436\\u0435\\u0442\\u0435 \\u043F\\u043E\\u043C\\u043E\\u0447\\u044C \\u0432 \\u043F\\u0440\\u0438\\u0433\\u043E\\u0442\\u043E\\u0432\\u043B\\u0435\\u043D\\u0438\\u0438 \\u043A\\u0430\\u0448 \\u0438 \\u0438\\u0445 \\u0434\\u043E\\u0441\\u0442\\u0430\\u0432\\u043A\\u0435!</div>\\n    </ul>\\n    <h4>\\u041B\\u0435\\u043A\\u0430\\u0440\\u0441\\u0442\\u0432\\u0430</h4>\\n    <p>\\u041D\\u0430\\u043C \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u044B \\u043F\\u0440\\u0435\\u043F\\u0430\\u0440\\u0430\\u0442\\u044B: \\u0446\\u0435\\u0444\\u0442\\u0440\\u0438\\u0430\\u043A\\u0441\\u043E\\u043D (\\u0444\\u043B\\u0430\\u043A\\u043E\\u043D \\u043F\\u043E 0,5 \\u0433); \\u043D\\u043E\\u0432\\u043E\\u043A\\u0430\\u0438\\u043D (\\u0440\\u0430\\u0441\\u0442\\u0432\\u043E\\u0440 \\u0434\\u043B\\u044F \\u0438\\u043D\\u044A\\u0435\\u043A\\u0446\\u0438\\u0439); \\u0433\\u0438\\u0441\\u043A\\u0430\\u043D; \\u0433\\u0430\\u043C\\u0430\\u0432\\u0438\\u0442; \\u043A\\u0430\\u0442\\u043E\\u0437\\u0430\\u043B; \\u0430\\u043D\\u0442\\u0438\\u0442\\u043E\\u043A\\u0441 \\u0444\\u043E\\u0441\\u043F\\u0440\\u0435\\u043D\\u0438\\u043B; \\u044D\\u043D\\u0442\\u0435\\u0440\\u043E\\u0441\\u0433\\u0435\\u043B\\u044C (\\u043F\\u0430\\u0441\\u0442\\u0430); \\u043F\\u0440\\u0435\\u043F\\u0430\\u0440\\u0430\\u0442\\u044B \\u043E\\u0442 \\u0433\\u043B\\u0438\\u0441\\u0442\\u043E\\u0432, \\u0431\\u043B\\u043E\\u0445, \\u043A\\u043B\\u0435\\u0449\\u0435\\u0439, \\u0434\\u043B\\u044F \\u0437\\u0430\\u0436\\u0438\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F \\u0440\\u0430\\u043D.\\n    </p>\\n    <h4>\\u0414\\u0440\\u0443\\u0433\\u0438\\u0435 \\u043D\\u0443\\u0436\\u043D\\u044B\\u0435 \\u0432\\u0435\\u0449\\u0438</h4>\\n    <ul>\\u0414\\u043B\\u044F \\u0441\\u043E\\u0434\\u0435\\u0440\\u0436\\u0430\\u043D\\u0438\\u044F \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445 \\u0432\\u0441\\u0435\\u0433\\u0434\\u0430 \\u043D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u044B:\\n        <li>\\u041E\\u0448\\u0435\\u0439\\u043D\\u0438\\u043A\\u0438, \\u043F\\u043E\\u0432\\u043E\\u0434\\u043A\\u0438, \\u043D\\u0430\\u043C\\u043E\\u0440\\u0434\\u043D\\u0438\\u043A\\u0438;</li>\\n        <li>\\u041E\\u043F\\u0438\\u043B\\u043A\\u0438 \\u0438 \\u0441\\u043E\\u043B\\u043E\\u043C\\u0430 \\u0432 \\u043B\\u044E\\u0431\\u043E\\u043C \\u043A\\u043E\\u043B\\u0438\\u0447\\u0435\\u0441\\u0442\\u0432\\u0435;</li>\\n        <li>\\u041F\\u043E\\u0441\\u0443\\u0434\\u0430 \\u0434\\u043B\\u044F \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445 \\u0438 \\u0434\\u043B\\u044F \\u043F\\u0440\\u0438\\u0433\\u043E\\u0442\\u043E\\u0432\\u043B\\u0435\\u043D\\u0438\\u044F \\u0435\\u0434\\u044B - \\u043C\\u0438\\u0441\\u043A\\u0438, \\u043A\\u0430\\u0441\\u0442\\u0440\\u044E\\u043B\\u0438, \\u043D\\u043E\\u0436\\u0438, \\u0447\\u0435\\u0440\\u043F\\u0430\\u043A\\u0438 \\u0438 \\u0434\\u0440.);</li>\\n        <li>\\u0422\\u0435\\u043F\\u043B\\u044B\\u0435 \\u0432\\u0435\\u0449\\u0438, \\u043B\\u0435\\u0436\\u0430\\u043A\\u0438 \\u0434\\u043B\\u044F \\u0443\\u0442\\u0435\\u043F\\u043B\\u0435\\u043D\\u0438\\u044F \\u0438 \\u0443\\u044E\\u0442\\u0430 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445;</li>\\n        <li>\\u0411\\u0443\\u0434\\u043A\\u0438.</li>\\n    </ul>\\n</section>\\n\\n<section id=\\\"car-help\\\">\\n    <hr>\\n    <h3>\\u0410\\u0432\\u0442\\u043E\\u043F\\u043E\\u043C\\u043E\\u0449\\u044C</h3>\\n    <p>\\u0412\\u0430\\u0436\\u043D\\u043E\\u0439 \\u043F\\u043E\\u043C\\u043E\\u0449\\u044C\\u044E \\u0431\\u0443\\u0434\\u0435\\u0442 \\u0442\\u0440\\u0430\\u043D\\u0441\\u043F\\u043E\\u0440\\u0442\\u0438\\u0440\\u043E\\u0432\\u043A\\u0430. \\u041D\\u0435\\u043E\\u0431\\u0445\\u043E\\u0434\\u0438\\u043C\\u043E \\u043E\\u0442\\u0432\\u043E\\u0437\\u0438\\u0442\\u044C \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445 \\u0432 \\u0432\\u0435\\u0442\\u0435\\u0440\\u0438\\u043D\\u0430\\u0440\\u043D\\u0443\\u044E \\u043A\\u043B\\u0438\\u043D\\u0438\\u043A\\u0443 \\u0432 \\u0441\\u043E\\u043F\\u0440\\u043E\\u0432\\u043E\\u0436\\u0434\\u0435\\u043D\\u0438\\u0438 \\u043D\\u0430\\u0448\\u0435\\u0433\\u043E \\u0432\\u043E\\u043B\\u043E\\u043D\\u0442\\u0435\\u0440\\u0430 \\u0438\\u043B\\u0438 \\u043F\\u0440\\u0438\\u0432\\u043E\\u0437\\u0438\\u0442\\u044C \\u0435\\u0434\\u0443. \\u0415\\u0441\\u043B\\u0438 \\u0443 \\u0432\\u0430\\u0441 \\u0435\\u0441\\u0442\\u044C \\u0430\\u0432\\u0442\\u043E\\u043C\\u043E\\u0431\\u0438\\u043B\\u044C, \\u043D\\u0435\\u043C\\u043D\\u043E\\u0433\\u043E \\u0441\\u0432\\u043E\\u0431\\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u0438 \\u0438 \\u0434\\u043E\\u0431\\u0440\\u043E\\u0435 \\u0441\\u0435\\u0440\\u0434\\u0446\\u0435 - \\u0431\\u0443\\u0434\\u0435\\u043C \\u0432\\u0430\\u043C \\u0440\\u0430\\u0434\\u044B.</p>\\n</section>\\n\\n<section id=\\\"volunteering\\\">\\n    <hr>\\n    <h2>\\u0412\\u043E\\u043B\\u043E\\u043D\\u0442\\u0435\\u0440\\u0441\\u0442\\u0432\\u043E</h2>\\n    <p>\\u041A\\u0430\\u0442\\u0430\\u0441\\u0442\\u0440\\u043E\\u0444\\u0438\\u0447\\u0435\\u0441\\u043A\\u0438 \\u043D\\u0435 \\u0445\\u0432\\u0430\\u0442\\u0430\\u0435\\u0442 \\u0434\\u043E\\u0431\\u0440\\u044B\\u0445 \\u043B\\u044E\\u0434\\u0435\\u0439, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u0433\\u043E\\u0442\\u043E\\u0432\\u044B \\u043F\\u043E\\u0434\\u0435\\u043B\\u0438\\u0442\\u044C\\u0441\\u044F \\u0441\\u0432\\u043E\\u0438\\u043C \\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u0435\\u043C \\u0438 \\u043E\\u043A\\u0440\\u0443\\u0436\\u0438\\u0442\\u044C \\u0437\\u0430\\u0431\\u043E\\u0442\\u043E\\u0439 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445. \\u041C\\u043D\\u043E\\u0433\\u043E \\u043E\\u043F\\u044B\\u0442\\u0430 \\u043D\\u0435 \\u043D\\u0443\\u0436\\u043D\\u043E, \\u0432\\u0441\\u0435 \\u0440\\u0430\\u0441\\u0441\\u043A\\u0430\\u0436\\u0435\\u043C \\u0438 \\u043F\\u043E\\u043C\\u043E\\u0436\\u0435\\u043C! \\u0415\\u0441\\u043B\\u0438 \\u0412\\u044B \\u0440\\u0430\\u0441\\u043F\\u043E\\u043B\\u0430\\u0433\\u0430\\u0435\\u0442\\u0435 \\u043D\\u0435\\u0441\\u043A\\u043E\\u043B\\u044C\\u043A\\u0438\\u043C\\u0438 \\u0447\\u0430\\u0441\\u0430\\u043C\\u0438 \\u0441\\u0432\\u043E\\u0431\\u043E\\u0434\\u043D\\u043E\\u0433\\u043E \\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u0438, \\u043F\\u0440\\u043E\\u0432\\u0435\\u0434\\u0438\\u0442\\u0435 \\u0435\\u0433\\u043E \\u0441 \\u043F\\u043E\\u043B\\u044C\\u0437\\u043E\\u0439! \\u0413\\u043B\\u0430\\u0432\\u043D\\u043E\\u0435 \\u0443\\u0441\\u043B\\u043E\\u0432\\u0438\\u0435 - \\u044D\\u0442\\u043E \\u0412\\u0430\\u0448\\u0435 \\u0441\\u043E\\u0432\\u0435\\u0440\\u0448\\u0435\\u043D\\u043D\\u043E\\u043B\\u0435\\u0442\\u0438\\u0435 \\u0438 \\u043B\\u044E\\u0431\\u043E\\u0432\\u044C \\u043A \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u043C!\\n        \\u0427\\u0430\\u0441\\u0442\\u043E \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u043C \\u043D\\u0435 \\u0445\\u0432\\u0430\\u0442\\u0430\\u0435\\u0442 \\u043E\\u0431\\u044B\\u0447\\u043D\\u044B\\u0445 \\u043F\\u0440\\u043E\\u0433\\u0443\\u043B\\u043E\\u043A \\u0438 \\u0438\\u0433\\u0440\\u044B, \\u043E\\u043D\\u0438 \\u0441\\u0438\\u0434\\u044F\\u0442 \\u0432 \\u043A\\u043B\\u0435\\u0442\\u043A\\u0430\\u0445 \\u0438 \\u0433\\u0440\\u0443\\u0441\\u0442\\u044F\\u0442.</p>\\n</section>\\n\\n<section class=\\\"news\\\">\\n    <h2 class=\\\"news__title\\\">\\u041D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0438</h2>\\n    <ul class=\\\"news__list\\\">\\n        <li class=\\\"news__item news-item\\\">\\n          <h4 class=\\\"news-item__title\\\">\\u0417\\u0430\\u0433\\u043E\\u043B\\u043E\\u0432\\u043E\\u043A \\u043D\\u043E\\u0432\\u043E\\u0441\\u0442\\u0438</h4>\\n          <div class=\\\"news-item__text\\\">\\n            <p>\\u041D\\u0430\\u0439\\u0434\\u0435\\u043D\\u044B \\u0431\\u0435\\u0434\\u043E\\u043C\\u043D\\u044B\\u0435 \\u0449\\u0435\\u043D\\u043A\\u0438 \\u043F\\u043E \\u0443\\u043B\\u0438\\u0446\\u0435 \\u0413\\u043E\\u0440\\u044C\\u043A\\u043E\\u0433\\u043E \\u0434.56. \\u0421\\u0435\\u0433\\u043E\\u0434\\u043D\\u044F \\u0431\\u0443\\u0434\\u0443\\u0442 \\u043F\\u0435\\u0440\\u0435\\u0432\\u0435\\u0437\\u0435\\u043D\\u044B \\u0432 \\u0432\\u043E\\u043B\\u044C\\u0435\\u0440\\u044B \\u0421\\u0410\\u0425\\u0430. \\u0415\\u0441\\u043B\\u0438 \\u0443 \\u0432\\u0430\\u0441 \\u0435\\u0441\\u0442\\u044C \\u0432\\u043E\\u0437\\u043C\\u043E\\u0436\\u043D\\u043E\\u0441\\u0442\\u044C \\u0432\\u0437\\u044F\\u0442\\u044C \\u043D\\u0430 \\u043F\\u0435\\u0440\\u0435\\u0434\\u0435\\u0440\\u0436\\u043A\\u0443 \\u0438\\u043B\\u0438 \\u043F\\u0440\\u0438\\u0441\\u0442\\u0440\\u043E\\u0438\\u0442\\u044C \\u043C\\u0430\\u043B\\u044B\\u0448\\u0435\\u0439 - \\u0431\\u0443\\u0434\\u0435\\u043C \\u0432\\u0430\\u043C \\u043E\\u0447\\u0435\\u043D\\u044C \\u0431\\u043B\\u0430\\u0433\\u043E\\u0434\\u0430\\u0440\\u043D\\u044B.</p>\\n            <a href=\\\"#\\\" class=\\\"news-item__link\\\">\\u0427\\u0438\\u0442\\u0430\\u0442\\u044C \\u0434\\u0430\\u043B\\u044C\\u0448\\u0435</a>\\n          </div>\\n          \\n        </li>\\n   \\n</section>\\n<section id=\\\"info\\\">\\n    <h2>\\u041E \\u043D\\u0430\\u0441</h2>\\n    <h3 id=\\\"contacts\\\">\\u041A\\u043E\\u043D\\u0442\\u0430\\u043A\\u0442\\u044B</h3>\\n    <address></address>\\n</section>\\n-->\\n\\n    <!--Current pet Modal-->\\n    <div class=\\\"hystmodal\\\" id=\\\"myModal\\\" aria-hidden=\\\"true\\\">\\n        <div class=\\\"hystmodal__wrap\\\">\\n            <div class=\\\"hystmodal__window\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\">\\n                <button data-hystclose class=\\\"hystmodal__close\\\">\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C</button>  \\n                <div id=\\\"pet-modal-container\\\"></div>\\n            </div>\\n        </div> \\n    </div>\\n\\n    <!--Take home pet Modal-->\\n    <div class=\\\"hystmodal\\\" id=\\\"takeHomeModal\\\" aria-hidden=\\\"true\\\">\\n        <div class=\\\"hystmodal__wrap\\\">\\n            <div class=\\\"hystmodal__window\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\">\\n                <button data-hystclose class=\\\"hystmodal__close\\\">\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C</button>  \\n                <div id=\\\"take-home-modal-container\\\"></div>\\n            </div>\\n        </div> \\n    </div>\\n\\n    <!--Pick up pet for overexposure Modal-->\\n    <div class=\\\"hystmodal\\\" id=\\\"pickUpForOverexposureModal\\\" aria-hidden=\\\"true\\\">\\n        <div class=\\\"hystmodal__wrap\\\">\\n            <div class=\\\"hystmodal__window\\\" role=\\\"dialog\\\" aria-modal=\\\"true\\\">\\n                <button data-hystclose class=\\\"hystmodal__close\\\">\\u0417\\u0430\\u043A\\u0440\\u044B\\u0442\\u044C</button>  \\n                <div id=\\\"pick-up-for-overexposure-modal-container\\\"></div>\\n            </div>\\n        </div> \\n    </div>\\n    \");\n            return _context.abrupt(\"return\", view);\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function Home() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Home);\n\n//# sourceURL=webpack://webpack_start/./src/pages/Home.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../pages/Home */ \"./src/pages/Home.js\");\n/* harmony import */ var _template_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../template/Header */ \"./src/template/Header.js\");\n/* harmony import */ var _template_Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../template/Footer */ \"./src/template/Footer.js\");\n/* harmony import */ var _utils_getHash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/getHash */ \"./src/utils/getHash.js\");\n/* harmony import */ var _utils_getResolveRoutes__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/getResolveRoutes */ \"./src/utils/getResolveRoutes.js\");\n/* harmony import */ var _pages_Gallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../pages/Gallery */ \"./src/pages/Gallery.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\n\n\n\n\n\n/* import ErrorNotFound from \"../pages/ErrorNotFound\";\r\nimport SignIn from \"../pages/SignIn\";\r\nimport LogIn from \"../pages/LogIn\";\r\nimport Task from \"../pages/Task\"; */\n\nvar routes = {\n  \"/\": _pages_Home__WEBPACK_IMPORTED_MODULE_0__.default,\n  \"/gallery\": _pages_Gallery__WEBPACK_IMPORTED_MODULE_5__.default\n  /*\"/signin\": SignIn, // http://localhost:8080/#/signin\r\n    \"/login1\": LogIn,\r\n    \"/:id\": Task //http://localhost:8080/#/3 */\n\n};\n\nvar router = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n    var header, content, footer, hash, route, render;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            header =  false || document.getElementById(\"header\");\n            content =  false || document.getElementById(\"content\");\n            footer =  false || document.getElementById(\"footer\");\n            header.innerHTML = (0,_template_Header__WEBPACK_IMPORTED_MODULE_1__.default)();\n            footer.innerHTML = (0,_template_Footer__WEBPACK_IMPORTED_MODULE_2__.default)();\n            hash = (0,_utils_getHash__WEBPACK_IMPORTED_MODULE_3__.default)();\n            _context.next = 8;\n            return (0,_utils_getResolveRoutes__WEBPACK_IMPORTED_MODULE_4__.default)(hash);\n\n          case 8:\n            route = _context.sent;\n            render = routes[route] ? routes[route] : ErrorNotFound;\n            _context.next = 12;\n            return render();\n\n          case 12:\n            content.innerHTML = _context.sent;\n\n          case 13:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function router() {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (router);\n\n//# sourceURL=webpack://webpack_start/./src/routes/index.js?");

/***/ }),

/***/ "./src/template/Footer.js":
/*!********************************!*\
  !*** ./src/template/Footer.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/css/main.css */ \"./src/styles/css/main.css\");\n\n\nvar Footer = function Footer() {\n  var view = \"\\n    <section id=\\\"footer-img\\\">\\n    <div class=\\\"footer-img__bg\\\">\\n   \\n    </div> \\n    <div class=\\\"footer-img__bg-crc\\\"></div>\\n    <div class=\\\"footer-img__bg-sqr\\\"></div>\\n    <p class=\\\"footer-img__text\\\">\\u0421\\u043F\\u0430\\u0441\\u0438\\u0431\\u043E \\u0437\\u0430 \\u043F\\u043E\\u043C\\u043E\\u0449\\u044C</p> \\n    </section>\\n    <nav></nav>\\n    \";\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Footer);\n\n//# sourceURL=webpack://webpack_start/./src/template/Footer.js?");

/***/ }),

/***/ "./src/template/Header.js":
/*!********************************!*\
  !*** ./src/template/Header.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _styles_css_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/css/main.css */ \"./src/styles/css/main.css\");\n/* harmony import */ var _images_img_bg_bg_text_1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/img/bg/bg_text_1.png */ \"./src/images/img/bg/bg_text_1.png\");\n/* harmony import */ var _images_img_bg_bg_text_2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/img/bg/bg_text_2.png */ \"./src/images/img/bg/bg_text_2.png\");\n/* harmony import */ var _images_img_bg_bg_text_3_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/img/bg/bg_text_3.png */ \"./src/images/img/bg/bg_text_3.png\");\n/* harmony import */ var _images_img_bg_cat_bg_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/img/bg/cat_bg.png */ \"./src/images/img/bg/cat_bg.png\");\n/* harmony import */ var _images_icons_instagram_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/icons/instagram.png */ \"./src/images/icons/instagram.png\");\n/* harmony import */ var _images_icons_vk_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/icons/vk.png */ \"./src/images/icons/vk.png\");\n\n\n\n\n\n\n\n\nvar Header = function Header() {\n  var view = \"\\n    <div class=\\\"header-img__dog\\\"></div>\\n    <div class=\\\"header-img\\\">\\n        <img src=\\\"\".concat(_images_img_bg_cat_bg_png__WEBPACK_IMPORTED_MODULE_4__, \"\\\" alt=\\\"cat\\\" class=\\\"header-img__cat\\\">\\n    </div>\\n    <nav class=\\\"header-nav\\\"> \\n        <a class=\\\"header-nav__link nav__link--active\\\" href=\\\"#help\\\">\\u041A\\u0430\\u043A \\u043F\\u043E\\u043C\\u043E\\u0447\\u044C</a>\\n        <a class=\\\"header-nav__link\\\" href=\\\"#wards-animals\\\">\\u041F\\u043E\\u0434\\u043E\\u043F\\u0435\\u0447\\u043D\\u044B\\u0435 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0435</a> \\n    </nav>\\n    <div class=\\\"header-socials\\\">\\n        <a href=\\\"#\\\" class=\\\"socials__link socials__link--tw\\\"> <img src=\\\"\").concat(_images_icons_instagram_png__WEBPACK_IMPORTED_MODULE_5__, \"\\\"></a>\\n        <a href=\\\"#\\\" class=\\\"socials__link socials__link--fb\\\"><img src=\\\"\").concat(_images_icons_vk_png__WEBPACK_IMPORTED_MODULE_6__, \"\\\"></a>\\n    </div>\\n    <div class=\\\"header-promo\\\">\\n    <h1 class=\\\"header-promo__title\\\">\\u0421\\u041F\\u0410\\u0421\\u0418 \\u0416\\u0418\\u0417\\u041D\\u042C</h1>\\n\\n    <div class=\\\"header-promo__subtitle\\\">\\u0411\\u043B\\u0430\\u0433\\u043E\\u0442\\u0432\\u043E\\u0440\\u0438\\u0442\\u0435\\u043B\\u044C\\u043D\\u043E\\u0435 \\u043E\\u0431\\u0449\\u0435\\u0441\\u0442\\u0432\\u0435\\u043D\\u043D\\u043E\\u0435 \\u043E\\u0431\\u044A\\u0435\\u0434\\u0438\\u043D\\u0435\\u043D\\u0438\\u0435 \\u0437\\u0430\\u0449\\u0438\\u0442\\u044B \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445</div>\\n    <p class=\\\"header-promo__text\\\">\\u041D\\u0430\\u0448\\u0430 \\u0446\\u0435\\u043B\\u044C: \\u043F\\u043E\\u043C\\u043E\\u0449\\u044C \\u0431\\u0435\\u0437\\u0434\\u043E\\u043C\\u043D\\u044B\\u043C \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u043C. \\u041C\\u044B \\u043F\\u043E\\u0434\\u0434\\u0435\\u0440\\u0436\\u0438\\u0432\\u0430\\u0435\\u043C \\u0445\\u0432\\u043E\\u0441\\u0442\\u0438\\u043A\\u043E\\u0432, \\u043A\\u043E\\u0442\\u043E\\u0440\\u044B\\u0435 \\u043E\\u043A\\u0430\\u0437\\u0430\\u043B\\u0438\\u0441\\u044C \\u0432 \\u043F\\u0443\\u043D\\u043A\\u0442\\u0435 \\u043E\\u0442\\u043B\\u043E\\u0432\\u0430 \\u0438 \\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E \\u0441\\u043E\\u0434\\u0435\\u0440\\u0436\\u0430\\u043D\\u0438\\u044F. </p>\\n    <p class=\\\"header-promo__slogan\\\">\\u0423 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445, \\u043D\\u0430\\u0445\\u043E\\u0434\\u044F\\u0449\\u0438\\u0445\\u0441\\u044F \\u0432 \\u043F\\u0443\\u043D\\u043A\\u0442\\u0435 \\u043E\\u0442\\u043B\\u043E\\u0432\\u0430 \\u0438 \\u0432\\u0440\\u0435\\u043C\\u0435\\u043D\\u043D\\u043E\\u0433\\u043E \\u0441\\u043E\\u0434\\u0435\\u0440\\u0436\\u0430\\u043D\\u0438\\u044F \\u0431\\u0440\\u043E\\u0434\\u044F\\u0447\\u0438\\u0445 \\u0436\\u0438\\u0432\\u043E\\u0442\\u043D\\u044B\\u0445, \\u0435\\u0441\\u0442\\u044C \\u0432\\u0441\\u0435\\u0433\\u043E \\u043D\\u0435\\u0441\\u043A\\u043E\\u043B\\u044C\\u043A\\u043E \\u0434\\u043D\\u0435\\u0439 \\u0434\\u043E \\u0443\\u0441\\u044B\\u043F\\u043B\\u0435\\u043D\\u0438\\u044F...</p>\\n    </div>\\n    <div class=\\\"slogan-text_1\\\" ><img src=\\\"\").concat(_images_img_bg_bg_text_1_png__WEBPACK_IMPORTED_MODULE_1__, \"\\\" ></div>\\n    <div class=\\\"slogan-text_2\\\" ><img src=\\\"\").concat(_images_img_bg_bg_text_2_png__WEBPACK_IMPORTED_MODULE_2__, \"\\\" ></div>\\n    <div class=\\\"slogan-text_3\\\" ><img src=\\\"\").concat(_images_img_bg_bg_text_3_png__WEBPACK_IMPORTED_MODULE_3__, \"\\\" ></div>\\n    <div class=\\\"header-promo__btn-div\\\">\\n        <button class=\\\"gallery__btn1\\\">\\n                <div class=\\\"gallery__btn1-bg\\\"><span class=\\\"gallery-btn1__text\\\">\\u0425\\u043E\\u0447\\u0443 \\u043F\\u043E\\u043C\\u043E\\u0447\\u044C</span></div>\\n        </button>\\n    </div>\\n    \");\n  return view;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Header);\n\n//# sourceURL=webpack://webpack_start/./src/template/Header.js?");

/***/ }),

/***/ "./src/utils/createDataLocal.js":
/*!**************************************!*\
  !*** ./src/utils/createDataLocal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"createPet\": () => (/* binding */ createPet)\n/* harmony export */ });\n/* harmony import */ var _getFormData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFormData */ \"./src/utils/getFormData.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar PETS_LOCAL = 'http://localhost:3000/pets';\n\nvar createPet = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(event) {\n    var data, settings, response, pet;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            event.preventDefault();\n            data = (0,_getFormData__WEBPACK_IMPORTED_MODULE_0__.getFormData)(\"#createPetForm\");\n            settings = {\n              method: \"POST\",\n              body: JSON.stringify(data),\n              headers: {\n                Accept: \"application/json\",\n                \"Content-type\": \"application/json\"\n              }\n            };\n            _context.prev = 3;\n            _context.next = 6;\n            return fetch(PETS_LOCAL, settings);\n\n          case 6:\n            response = _context.sent;\n            _context.next = 9;\n            return response.json();\n\n          case 9:\n            pet = _context.sent;\n            console.log(pet);\n            return _context.abrupt(\"return\", pet);\n\n          case 14:\n            _context.prev = 14;\n            _context.t0 = _context[\"catch\"](3);\n            return _context.abrupt(\"return\", _context.t0);\n\n          case 17:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[3, 14]]);\n  }));\n\n  return function createPet(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n\n\n//# sourceURL=webpack://webpack_start/./src/utils/createDataLocal.js?");

/***/ }),

/***/ "./src/utils/deleteDataLocal.js":
/*!**************************************!*\
  !*** ./src/utils/deleteDataLocal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"deletePet\": () => (/* binding */ deletePet)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar PETS_LOCAL = 'http://localhost:3000/pets';\n\nvar deletePet = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(petId) {\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(\"\".concat(PETS_LOCAL, \"/\").concat(petId), {\n              method: \"DELETE\"\n            });\n\n          case 2:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function deletePet(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n\n\n//# sourceURL=webpack://webpack_start/./src/utils/deleteDataLocal.js?");

/***/ }),

/***/ "./src/utils/getDataLocal.js":
/*!***********************************!*\
  !*** ./src/utils/getDataLocal.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllPets\": () => (/* binding */ getAllPets),\n/* harmony export */   \"getAllDogs\": () => (/* binding */ getAllDogs),\n/* harmony export */   \"getAllCats\": () => (/* binding */ getAllCats),\n/* harmony export */   \"getPet\": () => (/* binding */ getPet)\n/* harmony export */ });\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nvar PETS_LOCAL = 'http://localhost:3000/pets';\nvar DOGS_LOCAL = 'http://localhost:3000/pets?kind=dog';\nvar CATS_LOCAL = 'http://localhost:3000/pets?kind=cat';\n\nvar getResource = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(url) {\n    var res;\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            _context.next = 2;\n            return fetch(url);\n\n          case 2:\n            res = _context.sent;\n            return _context.abrupt(\"return\", res.json());\n\n          case 4:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee);\n  }));\n\n  return function getResource(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\nvar getAllPets = /*#__PURE__*/function () {\n  var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n    var res;\n    return regeneratorRuntime.wrap(function _callee2$(_context2) {\n      while (1) {\n        switch (_context2.prev = _context2.next) {\n          case 0:\n            _context2.next = 2;\n            return getResource(PETS_LOCAL);\n\n          case 2:\n            res = _context2.sent;\n            return _context2.abrupt(\"return\", res);\n\n          case 4:\n          case \"end\":\n            return _context2.stop();\n        }\n      }\n    }, _callee2);\n  }));\n\n  return function getAllPets() {\n    return _ref2.apply(this, arguments);\n  };\n}();\n\nvar getAllDogs = /*#__PURE__*/function () {\n  var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n    var res;\n    return regeneratorRuntime.wrap(function _callee3$(_context3) {\n      while (1) {\n        switch (_context3.prev = _context3.next) {\n          case 0:\n            _context3.next = 2;\n            return getResource(DOGS_LOCAL);\n\n          case 2:\n            res = _context3.sent;\n            return _context3.abrupt(\"return\", res);\n\n          case 4:\n          case \"end\":\n            return _context3.stop();\n        }\n      }\n    }, _callee3);\n  }));\n\n  return function getAllDogs() {\n    return _ref3.apply(this, arguments);\n  };\n}();\n\nvar getAllCats = /*#__PURE__*/function () {\n  var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {\n    var res;\n    return regeneratorRuntime.wrap(function _callee4$(_context4) {\n      while (1) {\n        switch (_context4.prev = _context4.next) {\n          case 0:\n            _context4.next = 2;\n            return getResource(CATS_LOCAL);\n\n          case 2:\n            res = _context4.sent;\n            return _context4.abrupt(\"return\", res);\n\n          case 4:\n          case \"end\":\n            return _context4.stop();\n        }\n      }\n    }, _callee4);\n  }));\n\n  return function getAllCats() {\n    return _ref4.apply(this, arguments);\n  };\n}();\n\nvar getPet = /*#__PURE__*/function () {\n  var _ref5 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(id) {\n    var res;\n    return regeneratorRuntime.wrap(function _callee5$(_context5) {\n      while (1) {\n        switch (_context5.prev = _context5.next) {\n          case 0:\n            _context5.next = 2;\n            return getResource(\"\".concat(PETS_LOCAL, \"/\").concat(id));\n\n          case 2:\n            res = _context5.sent;\n            return _context5.abrupt(\"return\", res);\n\n          case 4:\n          case \"end\":\n            return _context5.stop();\n        }\n      }\n    }, _callee5);\n  }));\n\n  return function getPet(_x2) {\n    return _ref5.apply(this, arguments);\n  };\n}();\n\n\n\n//# sourceURL=webpack://webpack_start/./src/utils/getDataLocal.js?");

/***/ }),

/***/ "./src/utils/getFormData.js":
/*!**********************************!*\
  !*** ./src/utils/getFormData.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getFormData\": () => (/* binding */ getFormData)\n/* harmony export */ });\nvar getFormData = function getFormData(formId) {\n  var data = {};\n  var form = document.querySelector(formId);\n  var inputs = form.getElementsByTagName(\"input\");\n\n  for (var i = 0; i < inputs.length; i++) {\n    var element = inputs[i];\n\n    if (element.type == 'radio') {\n      if (element.checked) {\n        data[element.name] = element.value;\n      }\n    } else if (element.type != 'file') {\n      data[element.name] = element.value;\n    }\n  }\n\n  Array.from(form.getElementsByTagName(\"textarea\")).forEach(function (element) {\n    data[element.getAttribute('name')] = element.value;\n  });\n  var petImage = form.querySelector('#petImage');\n  data[petImage.name] = petImage.src;\n  return data;\n};\n\n\n\n//# sourceURL=webpack://webpack_start/./src/utils/getFormData.js?");

/***/ }),

/***/ "./src/utils/getHash.js":
/*!******************************!*\
  !*** ./src/utils/getHash.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar getHash = function getHash() {\n  return location.hash.slice(1).toLocaleLowerCase().split(\"/\")[1] || \"/\";\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getHash);\n\n//# sourceURL=webpack://webpack_start/./src/utils/getHash.js?");

/***/ }),

/***/ "./src/utils/getResolveRoutes.js":
/*!***************************************!*\
  !*** ./src/utils/getResolveRoutes.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar getResolveRoutes = function getResolveRoutes(route) {\n  if (route.length <= 5) {\n    var validationRoute = route === \"/\" ? route : \"/:id\";\n    return validationRoute;\n  }\n\n  return \"/\".concat(route);\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getResolveRoutes);\n\n//# sourceURL=webpack://webpack_start/./src/utils/getResolveRoutes.js?");

/***/ }),

/***/ "./src/utils/updateDataLocal.js":
/*!**************************************!*\
  !*** ./src/utils/updateDataLocal.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"updatePet\": () => (/* binding */ updatePet)\n/* harmony export */ });\n/* harmony import */ var _getFormData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getFormData */ \"./src/utils/getFormData.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\n\nvar PETS_LOCAL = 'http://localhost:3000/pets';\n\nvar updatePet = /*#__PURE__*/function () {\n  var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(petId) {\n    var data, settings, response, _data;\n\n    return regeneratorRuntime.wrap(function _callee$(_context) {\n      while (1) {\n        switch (_context.prev = _context.next) {\n          case 0:\n            data = (0,_getFormData__WEBPACK_IMPORTED_MODULE_0__.getFormData)(\"#updatePetForm\");\n            settings = {\n              method: \"PUT\",\n              body: JSON.stringify(data),\n              headers: {\n                Accept: \"application/json\",\n                \"Content-type\": \"application/json\"\n              }\n            };\n            _context.prev = 2;\n            _context.next = 5;\n            return fetch(\"\".concat(PETS_LOCAL, \"/\").concat(petId), settings);\n\n          case 5:\n            response = _context.sent;\n            _context.next = 8;\n            return response.json();\n\n          case 8:\n            _data = _context.sent;\n            console.log(_data);\n            return _context.abrupt(\"return\", _data);\n\n          case 13:\n            _context.prev = 13;\n            _context.t0 = _context[\"catch\"](2);\n            return _context.abrupt(\"return\", _context.t0);\n\n          case 16:\n          case \"end\":\n            return _context.stop();\n        }\n      }\n    }, _callee, null, [[2, 13]]);\n  }));\n\n  return function updatePet(_x) {\n    return _ref.apply(this, arguments);\n  };\n}();\n\n\n\n//# sourceURL=webpack://webpack_start/./src/utils/updateDataLocal.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/css/gallery.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/css/gallery.css ***!
  \**************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E */ \"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#gallery-page {\\r\\n    width: 1466px;\\r\\n    position: relative; \\r\\n    margin: 0px auto; \\r\\n}\\r\\n.gallery-page__header{\\r\\n    position: relative;\\r\\n    margin-top: 50px;\\r\\n}\\r\\n.gallery-page__title {\\r\\n    position: absolute;\\r\\n    margin-left: 605px;  \\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 600;\\r\\n    font-size: 28px;\\r\\n    line-height: 120%; \\r\\n    color: #242424; \\r\\n}\\r\\n.gallery-page__link{\\r\\n    position: relative;\\r\\n    display: inline-block;\\r\\n    margin-left: 162px; \\r\\n    \\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 20px;\\r\\n    line-height: 20px;    \\r\\n    color: #6B6B6B;\\r\\n}\\r\\n\\r\\n.gallery-page__list {\\r\\n    position: relative;\\r\\n    display: flex;  \\r\\n    margin-top: 51px;\\r\\n    list-style:none;  \\r\\n    /* grid-template-columns: repeat(4, 368px);  */\\r\\n    justify-content: center;\\r\\n    flex-wrap: wrap;\\r\\n    \\r\\n}\\r\\n\\r\\n.page-item__content {\\r\\n    display: flex;\\r\\n    flex-direction: column;\\r\\n    height: 555px;\\r\\n    width: 368px;\\r\\n    padding: 16px;\\r\\n    margin-right: 21px; \\r\\n    margin-bottom: 21px;\\r\\n    box-shadow: 6px 6px 16px rgba(163, 163, 163, 0.6), -8px -8px 16px #FFFFFF, inset 4px 4px 16px rgba(203, 203, 203, 0.25);\\r\\n    border-radius: 5px;\\r\\n    box-sizing: border-box;   \\r\\n}\\r\\n\\r\\n/*  .page-item:nth-child(4) {\\r\\n    margin-right: 0px;\\r\\n}   */\\r\\n.gallery-page img:hover {\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n.page-item__name {\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    margin-top: 10px;\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 22px;\\r\\n    line-height: 20px;  \\r\\n    color: #242424;  \\r\\n}\\r\\n.page-item__desc{\\r\\n    margin-top: 10px;\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 16px;\\r\\n    line-height: 20px;\\r\\n    color: #6B6B6B;\\r\\n}\\r\\n.page-item__text{\\r\\n    margin-top: 8px;\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 18px;\\r\\n    line-height: 20px;\\r\\n    color: #242424;\\r\\n}\\r\\n.page-item__link {\\r\\n    position: absolute;\\r\\n    margin-top: 501px;\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 21px;\\r\\n    line-height: 40px;\\r\\n    text-decoration-line: underline;\\r\\n    color: #AD7F00;\\r\\n}\\r\\n.gallery__edit-btn{\\r\\n    position: absolute;\\r\\n    margin-top: 500px; \\r\\n    margin-left: 310px;\\r\\n    background: none;\\r\\n    border:none;\\r\\n}\\r\\n\\r\\n/* \\r\\nbuttons */\\r\\n\\r\\n.gallery-item__btn1{\\r\\n    position: absolute;\\r\\n    width: 209px;\\r\\n    height: 42px;\\r\\n    margin-left: 610px;\\r\\n    margin-top: 0px;\\r\\n    background: linear-gradient(180deg, #FFDE89 0%, #FFCB38 100%);\\r\\n    box-shadow: 7px 7px 16px #E3E3E3, -3px -4px 8px rgba(255, 255, 255, 0.9), inset 13px 22px 8px rgba(0, 0, 0, 0.02);\\r\\n    border-radius: 58px;\\r\\n    border-style: none;\\r\\n}\\r\\n.gallery-item__btn1:hover {\\r\\n    background: #FFCB38;\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n.gallery-item__btn1-bg{\\r\\n    position: relative;\\r\\n    width: 199px;\\r\\n    height: 32px;\\r\\n    margin-left: 6px;\\r\\n    margin-top: 0px; \\r\\n    background: linear-gradient(180deg, #FFECB5 0%, #FFE69F 0.01%, #FFD45A 100%);\\r\\n    box-shadow: 3px 3px 13px rgba(0, 0, 0, 0.25);\\r\\n    border-radius: 58px;\\r\\n}\\r\\n\\r\\n.gallery-item-btn1__text {\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    margin-top: 6px;\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 21px;\\r\\n    line-height: 20px;  \\r\\n    color: #242424;  \\r\\n}\\r\\n\\r\\n.gallery-item__btn2{\\r\\n    position: absolute;\\r\\n    width: 296px;\\r\\n    height: 42px;\\r\\n    margin-left: 570px;\\r\\n    margin-top: 68px;\\r\\n    background: #F6F6F6;\\r\\n    box-shadow: 7px 7px 16px #E3E3E3, -4px -4px 8px rgba(255, 255, 255, 0.7), inset 13px 22px 8px rgba(0, 0, 0, 0.02);\\r\\n    border-radius: 58px;\\r\\n    border-style:none;\\r\\n}\\r\\n.gallery-item__btn2:hover {\\r\\n    background: rgba(128, 128, 128, 0.1);\\r\\n    cursor: pointer;\\r\\n  }\\r\\n\\r\\n.gallery-item__btn2-bg{\\r\\n    position: relative;\\r\\n    width: 286px;\\r\\n    height: 32px;\\r\\n    margin-left: 5px;\\r\\n    margin-top: 0px; \\r\\n    background: linear-gradient(180deg, #FBFBFB 0%, #F6F6F6 100%);\\r\\n    box-shadow: 3px 3px 13px rgba(128, 128, 128, 0.25);\\r\\n    border-radius: 58px;\\r\\n}\\r\\n.gallery-item-btn2__text {\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    margin-top: 6px;\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 21px;\\r\\n    line-height: 20px;  \\r\\n    color: #242424;  \\r\\n}\\r\\n\\r\\n.gallery-page button:focus {\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n  /* select */\\r\\n#gallery-page__select {\\r\\n    position: absolute;\\r\\n    margin-left: 835px;\\r\\n    display: inline-block; \\r\\n    width: 100%; \\r\\n    max-width: 168px; \\r\\n    box-sizing: border-box; \\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 18px;\\r\\n    line-height: 20px;\\r\\n    color: #242424;\\r\\n\\r\\n    padding: .6em 1.4em .5em .8em; \\r\\n\\r\\n    border: 1px solid #D6D6D6;\\r\\n    box-shadow: 0 1px 0 1px rgba(0,0,0,.04); \\r\\n    border-radius: 4px;\\r\\n    -moz-appearance: none;\\r\\n    -webkit-appearance: none;\\r\\n    appearance: none;\\r\\n    background-color: #fff; \\r\\n\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \"), linear-gradient(to bottom, #ffffff 0%,#e5e5e5 100%);  \\r\\n    background-repeat: no-repeat, repeat;\\r\\n    background-position: right .7em top 50%, 0 0;\\r\\n    background-size: .65em auto, 100%; \\r\\n} \\r\\n\\r\\n#gallery-page__select::-ms-expand { display: none; } \\r\\n#gallery-page__select:hover { border-color: #888; } \\r\\n#gallery-page__select:focus { \\r\\n    border-color: #aaa; \\r\\n    box-shadow: 0 0 1px 2px #FFC41E;\\r\\n    box-shadow: 0 0 0 3px -moz-mac-focusring; \\r\\n    color: #222;\\r\\n    outline: none; \\r\\n}\\r\\n\\r\\n#gallery-page__select option { font-weight:normal; } \\r\\n *[dir=\\\"rtl\\\"] #gallery-page__select, :root:lang(ar) #gallery-page__select, :root:lang(iw) #gallery-page__select { \\r\\nbackground-position: left .7em top 50%, 0 0; \\r\\npadding: .6em .8em .5em 1.4em; \\r\\n}\\r\\n\\r\\n.gallery-buttons-container {\\r\\n    display: table;\\r\\n    margin-top: 20px;\\r\\n    margin-left: auto;\\r\\n    margin-right: auto;\\r\\n    margin-bottom: 0;\\r\\n}\\r\\n\\r\\n.gallery__add-btn {\\r\\n    width: 168px;\\r\\n    height: 42px;\\r\\n    background: linear-gradient(180deg, #FFDE89 0%, #FFCB38 100%);\\r\\n    box-shadow: 7px 7px 16px #E3E3E3, -3px -4px 8px rgba(255, 255, 255, 0.9), inset 13px 22px 8px rgba(0, 0, 0, 0.02);\\r\\n    border-radius: 58px;\\r\\n    border-style: none;\\r\\n    padding: 5px;\\r\\n    border: 1px;\\r\\n}\\r\\n.gallery__add-btn:hover {\\r\\n    background: #FFCB38;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.gallery__add-btn-bg {\\r\\n    position: relative;\\r\\n    width: 158px;\\r\\n    height: 32px;\\r\\n    background: linear-gradient(180deg, #FFECB5 0%, #FFE69F 0.01%, #FFD45A 100%);\\r\\n    box-shadow: 3px 3px 13px rgba(0, 0, 0, 0.25);\\r\\n    border-radius: 58px;\\r\\n    border: 1px;\\r\\n}\\r\\n\\r\\n.gallery__add-btn-text {\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    margin-top: 6px;\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 21px;\\r\\n    line-height: 20px;  \\r\\n    color: #242424;\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_start/./src/styles/css/gallery.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/css/hystmodal.css":
/*!****************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/css/hystmodal.css ***!
  \****************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E */ \"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E */ \"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".hystmodal__opened {\\r\\n    position: fixed;\\r\\n    right: 0;\\r\\n    left: 0;\\r\\n    overflow: hidden;\\r\\n}\\r\\n.hystmodal__shadow{\\r\\n    position: fixed;\\r\\n    border:none;\\r\\n    display: block;\\r\\n    width: 100%;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    right: 0;\\r\\n    left: 0;\\r\\n    overflow: hidden;\\r\\n    pointer-events: none;\\r\\n    z-index: 98;\\r\\n    opacity: 0;\\r\\n    transition: opacity 0.15s ease;\\r\\n    background-color: black;\\r\\n}\\r\\n.hystmodal__shadow--show{\\r\\n    pointer-events: auto;\\r\\n    opacity: 0.6;\\r\\n}\\r\\n.hystmodal {\\r\\n    position: fixed;\\r\\n    top: 0;\\r\\n    bottom: 0;\\r\\n    right: 0;\\r\\n    left: 0;\\r\\n    overflow: hidden;\\r\\n    overflow-y: auto;\\r\\n    -webkit-overflow-scrolling: touch;\\r\\n    opacity: 1;\\r\\n    pointer-events: none;\\r\\n    display: flex;\\r\\n    flex-flow: column nowrap;\\r\\n    justify-content: flex-start;\\r\\n    z-index: 99;\\r\\n    visibility: hidden;\\r\\n}\\r\\n.hystmodal--active{\\r\\n    opacity: 1;\\r\\n}\\r\\n.hystmodal--moved,\\r\\n.hystmodal--active{\\r\\n    pointer-events: auto;\\r\\n    visibility: visible;\\r\\n}\\r\\n.hystmodal__wrap {\\r\\n    flex-shrink: 0;\\r\\n    flex-grow: 0;\\r\\n    width: 100%;\\r\\n    min-height: 100%;\\r\\n    margin: auto;\\r\\n    display: flex;\\r\\n    flex-flow: column nowrap;\\r\\n    align-items: center;\\r\\n    justify-content: center;\\r\\n}\\r\\n.hystmodal__window {\\r\\n    margin: 50px 0;\\r\\n    box-sizing: border-box;\\r\\n    flex-shrink: 0;\\r\\n    flex-grow: 0;\\r\\n    background: #fff;\\r\\n    width: 600px;\\r\\n    max-width: 100%;\\r\\n    overflow: visible;\\r\\n    transition: transform 0.2s ease 0s, opacity 0.2s ease 0s;\\r\\n    transform: scale(0.9);\\r\\n    opacity: 0;\\r\\n}\\r\\n.hystmodal--active .hystmodal__window{\\r\\n    transform: scale(1);\\r\\n    opacity: 1;\\r\\n}\\r\\n.hystmodal__close{\\r\\n    position: absolute;\\r\\n    z-index: 10;\\r\\n    top:0;\\r\\n    right: -40px;\\r\\n    display: block;\\r\\n    width: 30px;\\r\\n    height: 30px;\\r\\n    background-color: transparent;\\r\\n    background-position: center center;\\r\\n    background-repeat: no-repeat;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n    background-size: 100% 100%;\\r\\n    border: none;\\r\\n    font-size: 0;\\r\\n    cursor: pointer;\\r\\n    outline: none;\\r\\n}\\r\\n.hystmodal__close:focus{\\r\\n    outline: 2px dotted #afb3b9;\\r\\n    outline-offset: 2px;\\r\\n}\\r\\n@media all and (max-width:767px){\\r\\n    .hystmodal__close{\\r\\n        top:10px;\\r\\n        right: 10px;\\r\\n        width: 24px;\\r\\n        height: 24px;\\r\\n        background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \");\\r\\n    }\\r\\n    .hystmodal__window{\\r\\n        margin: 0;\\r\\n    }\\r\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_start/./src/styles/css/hystmodal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/css/main.css":
/*!***********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/css/main.css ***!
  \***********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/img/bg/dog_bg.jpg */ \"./src/images/img/bg/dog_bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/img/bg/footer_bg.jpg */ \"./src/images/img/bg/footer_bg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"*,\\n*::before,\\n*::after {\\n  box-sizing: border-box;\\n  margin: 0;\\n  padding: 0;\\n}\\n/* \\nbody,\\nhtml {\\n    width: 100%;\\n\\theight: 100%;\\n    margin: 0 auto;\\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-family: -apple-system, BlinkMacSystemFont, \\\"Segoe UI\\\", Roboto, \\\"Helvetica Neue\\\", Arial, \\\"Noto Sans\\\", sans-serif, \\\"Apple Color Emoji\\\", \\\"Segoe UI Emoji\\\", \\\"Segoe UI Symbol\\\", \\\"Noto Color Emoji\\\"; \\n    text-align: left;\\n    background-color:#F6F6F6;\\n}\\n */\\n body,\\n html{ \\n    background-color:#E5E5E5;\\n}\\n\\n.page-header {\\n    width: 1366px;\\n    height: 834px;\\n    position: relative; \\n    margin: 0 auto; \\n}\\n\\n.header-nav {\\n    position: absolute;\\n    display: flex;\\n    justify-content: space-between;\\n    width: 535px;\\n    padding-left: 130px;\\n    padding-top: 62px;\\n    font-weight: 600;\\n    font-size: 16px;\\n    line-height: 19px;\\n    color: #242424;\\n    order: 1;\\n}\\n.header-socials {\\n    position: absolute;\\n    display: flex;\\n    justify-content: space-around;\\n    width: 300px;\\n    margin-top: 15px;\\n    padding-left: 1259px;\\n   \\n}\\n.header-socials a {\\n    padding-right: 10px; \\n}\\n.header-socials img {\\n    width: 50px; \\n}\\n\\n .header-img__dog {\\n    position: absolute; \\n    margin-top: 0;\\n    margin-left: 638px; \\n    width: 718px;\\n    height: 713px;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") center center/cover no-repeat;\\n}  \\n\\n.header-img__cat {\\n   position: absolute;\\n   display: block;\\n   margin-left: 707px;\\n   margin-top: 470px;\\n}\\n\\n.slogan-text_1 img{\\n    position:absolute;\\n    display: block;  \\n    margin-top: 374px; \\n    margin-left: 0px; \\n    opacity: 0.5;   \\n}\\n\\n.slogan-text_2 {\\n    position:absolute;\\n    display: block;  \\n    margin-top: 566px; \\n    margin-left: 0px; \\n    opacity: 0.5; \\n}\\n.slogan-text_3  {\\n    position:absolute;\\n    display: block;  \\n    margin-top: 671px; \\n    margin-left: 296px; \\n    opacity: 0.5; \\n}\\n.header-promo{\\n    position:absolute;\\n    margin-top: 73px;\\n}\\n\\n.header-promo__title{\\n    width: 659px;\\n    height: 77px;\\n    margin-left: 110px;\\n    margin-top: 91px;\\n\\n    font-weight: bold;\\n    font-size: 72px;\\n    line-height: 87px;\\n    display: flex;\\n    align-items: center;\\n    color: #242424; \\n}\\n\\n.header-promo__subtitle {\\n    width: 659px;\\n    height: 18px;\\n    margin-left: 110px;\\n    margin-top: 10px;\\n    font-weight: 300;\\n    font-size: 20px;\\n    line-height: 18px;\\n    color: #6B6B6B;\\n}\\n.header-promo__text{\\n    width: 699px;\\n    height: 44px;\\n    margin-left: 110px;\\n    margin-top: 12px;\\n    font-weight: 600;\\n    font-size: 20px;\\n    line-height: 140%;   \\n    color: #474747;\\n}\\n.header-promo__slogan{\\n    width: 498px;\\n    height: 116px;\\n    margin-left: 110px;\\n    margin-top: 43px;\\n    font-weight: 600;\\n    font-size: 25px;\\n    line-height: 29px;\\n    color: #C78100;\\n}\\n.header-promo__btn-div {\\n    position: absolute;\\n    margin-top: 530px;\\n    margin-left: -350px;\\n}\\n\\n\\n\\n#description {\\n    height: 650px;\\n    left: 0px;\\n    background: #FFFFFF;\\n}\\n\\n.section-description {\\n    position: absolute;\\n    width: 1366px;\\n    margin: 0 auto;\\n\\n}\\n.section-description__body {\\n    position: absolute;\\n    display: inline-block;\\n    width: 566px;\\n    font-family: Gilroy;\\n    font-style: normal;\\n    margin-top: 128px;\\n    margin-left: 793px;\\n    \\n}\\n.section-description__title {\\n    font-weight: 600;\\n    font-size: 29px;\\n    line-height: 120%;\\n    color: #C78100;\\n    text-align: center;\\n}\\n.section-description p {\\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: normal;\\n    font-size: 19px;\\n    line-height: 140%;\\n    color: #242424;\\n    margin-top: 20px;\\n}\\n\\n.section-description__image-sqr {\\n    position: absolute;\\n   display: inline-block;\\n   width: 341px; \\n   height: 521px;\\n   margin-top: 54px;\\n   margin-left: 0px;\\n   background-color:#FFC41E;\\n}\\n.section-description__image-crc {\\n    position: absolute;\\n   display: inline-block;\\n   width: 521px; \\n   height: 521px;\\n   margin-top: 54px;\\n   margin-left: 78px;\\n   background-color:#FFC41E;\\n   border-radius: 50%;\\n}\\n.section-description__image-crc_2 {\\n    position: absolute;\\n   display: inline-block;\\n   width: 245px; \\n   height: 245px;\\n   margin-top: 350px;\\n   margin-left: 383px;\\n   background-color:#FFC41E;\\n   border-radius: 50%;\\n}\\n.section-description__image_1 {\\n    position: absolute;\\n   display: inline-block;\\n   margin-top: 85px;\\n   margin-left: 112px;\\n}\\n.section-description__image_2 {\\n    position: absolute;\\n   display: inline-block;\\n   margin-top: 358px;\\n   margin-left: 392px;\\n}\\n  \\n\\n/* help */\\n\\n#help {\\n    width: 1366px;\\n    position: relative; \\n    margin: 0 auto; \\n}\\n.help-nav__title {\\n    position: absolute;\\n    margin: 80px 599px;  \\n    \\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: 300;\\n    font-size: 28px;\\n    line-height: 24px;\\n   \\n}\\n\\n.help-nav__list {\\n    position: absolute;\\n    display: flex;\\n    margin: 151px 20px;\\n    align-items: center;\\n}\\n\\n.help-nav__item {\\n    display: flex;\\n    flex-direction: column;\\n    height: 240px;\\n    width: 166px;\\n    padding: 8px;\\n    margin-right: 120px;\\n    border-radius: 5px;\\n    box-sizing: border-box;\\n}\\n.help-nav__item:nth-child(5) {\\n    margin-right: 0px;\\n}\\n\\n.help-item__img {\\n    width: 150px;\\n    height: 150px;\\n    margin-top: 0px;\\n    padding: 20px;\\n    background: #F6F6F6;\\n    border: 1px solid rgba(255, 255, 255, 0.5);\\n    box-sizing: border-box;\\n    box-shadow: 6px 6px 16px rgba(224, 224, 224, 0.6), -6px -6px 16px rgba(255, 255, 255, 0.77);\\n    border-radius: 50%;\\n}\\n.help-item__text {\\n    display: inline-block;\\n    margin-top: 24px;\\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 18px;\\n    line-height: 140%;\\n    text-align: center;\\n    color: #474747;\\n}\\n\\n\\n\\n/* home-help */\\n\\n\\n#home-help {\\n    width: 1366px;\\n    position: relative; \\n    margin: 0 auto; \\n    margin-top: 541px;\\n    height: 398px;\\n} \\n.home-help__body {\\n    position: absolute;\\n    display: flex;\\n    margin: 112px 200px;\\n    align-items: center;\\n}\\n.home-help__item {\\n    display: flex;\\n    flex-direction: column;\\n    width: 389px;\\n    padding: 8px;\\n    margin-right: 177px;\\n    box-sizing: border-box;\\n}\\n.home-help__item:nth-child(2) {\\n    margin-right: 0px;\\n}\\n\\n.home-item__title {\\n    text-align: center;\\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: 600;\\n    font-size: 29px;\\n    line-height: 24px;\\n    color: #242424;\\n}\\n\\n.home-item__text {\\n    display: inline-block;\\n    margin-top: 20px;\\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: normal;\\n    font-size: 19px;\\n    line-height: 140%;\\n    color: #242424;\\n}\\n\\n\\n\\n\\n\\n\\n\\n\\n#financial-help {\\n    width: 1366px;\\n    height: 716px;\\n    left: 2px;\\n    top: 3353px;\\n    background: #FFFFFF;\\n}\\n\\n\\n\\n/* галерея \\\"Наши подопечные\\\" */\\n#wards-animals {\\n    width: 1366px;\\n    position: relative; \\n    margin: 0 auto; \\n}\\n.gallery__title {\\n    position: relative;\\n    margin-top: 72px; \\n    margin-left: 570px;  \\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: 300;\\n    font-size: 28px;\\n    line-height: 24px; \\n    color: #242424; \\n}\\n.gallery__link{\\n    position: relative;\\n    display: inline-block;\\n    margin-top: 24px; \\n    margin-left: 580px; \\n    \\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 22px;\\n    line-height: 40px;\\n    color: #AD7F00;\\n}\\n.carousel {\\n    position: relative;\\n    width: 1250px;\\n  }\\n\\n.gallery-slider {\\n    margin-top: 20px;\\n    margin-left: 70px; \\n    width: 1250px; \\n    overflow: hidden; \\n}\\n\\n.gallery__list {\\n    position: relative;\\n    display: flex; \\n    height: 580px;\\n    list-style: none;\\n    /* transition: margin-left 2s; */\\n}\\n\\n.gallery-item {\\n    display: flex;\\n    flex-direction: column;\\n    height: 555px;\\n    width: 368px;\\n    padding: 16px;\\n    margin-right: 60px;\\n    box-shadow: 6px 6px 16px rgba(163, 163, 163, 0.6), -8px -8px 16px #FFFFFF, inset 4px 4px 16px rgba(203, 203, 203, 0.25);\\n    border-radius: 5px;\\n    box-sizing: border-box;\\n   \\n}\\n/* .gallery-item:nth-child(3) {\\n    margin-right: 0px;\\n} */\\n\\n.gallery-item__name {\\n    display: inline-block;\\n    text-align: center;\\n    margin-top: 10px;\\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 22px;\\n    line-height: 20px;  \\n    color: #242424;  \\n}\\n.gallery-item__desc{\\n    margin-top: 10px;\\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 16px;\\n    line-height: 20px;\\n    color: #6B6B6B;\\n}\\n.gallery-item__text{\\n    margin-top: 8px;\\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 18px;\\n    line-height: 20px;\\n    color: #242424;\\n}\\n.gallery-item__link {\\n    position: absolute;\\n    margin-top: 502px;\\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 21px;\\n    line-height: 40px;\\n    text-decoration-line: underline;\\n    color: #AD7F00;\\n}\\n\\n.gallery-slider__left-btn{\\n    position: absolute;\\n    width: 77px;\\n    height: 77px;\\n    margin-left: 146px;\\n    margin-top: 13px;\\n    background: #F6F6F6;\\n    border: 1px solid rgba(255, 255, 255, 0.5);\\n    box-sizing: border-box;\\n    box-shadow: 6px 6px 16px rgba(224, 224, 224, 0.6), -6px -6px 16px rgba(255, 255, 255, 0.77);\\n    border-radius: 50%;\\n}\\n.gallery-slider__right-btn{\\n    position: absolute;\\n    width: 77px;\\n    height: 77px;\\n    margin-left: 1000px;\\n    margin-top: 13px;\\n    background: #F6F6F6;\\n    border: 1px solid rgba(255, 255, 255, 0.5);\\n    box-sizing: border-box;\\n    box-shadow: 6px 6px 16px rgba(224, 224, 224, 0.6), -6px -6px 16px rgba(255, 255, 255, 0.77);\\n    border-radius: 50%;\\n}\\n.gallery__btn1{\\n    position: absolute;\\n    width: 209px;\\n    height: 42px;\\n    margin-left: 505px;\\n    margin-top: 0px;\\n    background: linear-gradient(180deg, #FFDE89 0%, #FFCB38 100%);\\n    box-shadow: 7px 7px 16px #E3E3E3, -3px -4px 8px rgba(255, 255, 255, 0.9), inset 13px 22px 8px rgba(0, 0, 0, 0.02);\\n    border-radius: 58px;\\n    border-style: none;\\n    padding: 5px;\\n    border: 1px;\\n}\\n.gallery__btn1:hover {\\n    background: #FFCB38;\\n    cursor: pointer;\\n  }\\n\\n.gallery__btn1-bg{\\n    position: relative;\\n    width: 199px;\\n    height: 32px;\\n    background: linear-gradient(180deg, #FFECB5 0%, #FFE69F 0.01%, #FFD45A 100%);\\n    box-shadow: 3px 3px 13px rgba(0, 0, 0, 0.25);\\n    border-radius: 58px;\\n    border: 1px;\\n}\\n\\n.gallery-btn1__text {\\n    display: inline-block;\\n    text-align: center;\\n    margin-top: 6px;\\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 21px;\\n    line-height: 20px;  \\n    color: #242424;  \\n}\\n\\n.gallery__btn2{\\n    position: absolute;\\n    width: 296px;\\n    height: 42px;\\n    margin-left: 460px;\\n    margin-top: 68px;\\n    background: #F6F6F6;\\n    box-shadow: 7px 7px 16px #E3E3E3, -4px -4px 8px rgba(255, 255, 255, 0.7), inset 13px 22px 8px rgba(0, 0, 0, 0.02);\\n    border-radius: 58px;\\n    border-style:none;\\n    padding: 5px;\\n    border: 1px;\\n}\\n.gallery__btn2:hover {\\n    background: rgba(128, 128, 128, 0.1);\\n    cursor: pointer;\\n  }\\n\\n.gallery__btn2-bg{\\n    position: relative;\\n    width: 286px;\\n    height: 32px;\\n    background: linear-gradient(180deg, #FBFBFB 0%, #F6F6F6 100%);\\n    box-shadow: 3px 3px 13px rgba(128, 128, 128, 0.25);\\n    border-radius: 58px;\\n    border: 1px;\\n}\\n.gallery-btn2__text {\\n    display: inline-block;\\n    text-align: center;\\n    margin-top: 7px;\\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: 500;\\n    font-size: 21px;\\n    line-height: 20px;  \\n    color: #242424;  \\n}\\n\\n.gallery button:focus {\\n    outline: none;\\n  }\\n  \\n.gallery-slider__right-btn:hover,\\n.gallery-slider__left-btn:hover {\\n    box-shadow: 3px 3px 13px rgba(128, 128, 128, 0.6);\\n    cursor: pointer;\\n  }\\n\\n\\n\\n\\n\\n\\n\\n\\n\\n.news {\\n    width: 1366px;\\n    height: 563px;\\n    left: 0px;\\n    top: 6135px;\\n\\n    background: #FFFFFF;\\n}\\n\\n#footer-img {\\n    position: relative; \\n    height: 841px;\\n    margin-top:180px;\\n}\\n\\n.footer-img__bg {\\n    position: absolute;\\n    margin-top: 0;  \\n    width: 100%;\\n    height: 100%;\\n    z-index:1;\\n  \\n} \\n.footer-img__bg:before {\\n    content: \\\"\\\";\\n    display: block;\\n    width: inherit;\\n    height: inherit;\\n    position: absolute;\\n    top: 0;\\n    left: 0;\\n    background: inherit;\\n    background-size: cover;\\n    opacity: 0.85;\\n    z-index:-1;\\n    background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") center center/cover no-repeat;\\n    /* filter: saturate(105%); */\\n    filter: contrast(115%);\\n  }\\n\\n.footer-img__text{\\n    position: absolute;\\n    display: inline-block;\\n    margin-top: 303px; \\n    margin-left: 134px;   \\n    width: 446px;\\n    height: 154px;\\n    font-family: Gilroy;\\n    font-style: normal;\\n    font-weight: bold;\\n    font-size: 64px;\\n    line-height: 77px;\\n    color: #ffffff;\\n    z-index: 2;\\n}\\n\\n.footer-img__bg-sqr {\\n   position: absolute;\\n   display: inline-block;\\n   width: 357px; \\n   height: 521px;\\n   margin-top: 119px;\\n   background: #322D1E;\\n   \\n}\\n.footer-img__bg-crc {\\n    position: absolute;\\n   display: inline-block;\\n   width: 521px; \\n   height: 521px;\\n   margin-top: 119px;\\n   margin-left: 94px;\\n   border-radius: 50%;\\n   background: #322D1E;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_start/./src/styles/css/main.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/css/modal.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/css/modal.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../images/icons/close.svg */ \"./src/images/icons/close.svg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \".hystmodal__window {\\r\\n    border-radius: 5px;\\r\\n}\\r\\n\\r\\n.hystmodal__close {\\r\\n    top: 40px;\\r\\n    right: 40px;\\r\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\r\\n}\\r\\n\\r\\n.hystmodal__close:focus {\\r\\n    outline: none;\\r\\n    outline-offset: 0;\\r\\n}\\r\\n\\r\\n.pet-modal,\\r\\n.create-form,\\r\\n.update-form,\\r\\n.take-home-form,\\r\\n.pick-up-for-overexposure-form {\\r\\n    padding: 40px;    \\r\\n}\\r\\n\\r\\n.create-form__header,\\r\\n.update-form__header,\\r\\n.take-home-form__header,\\r\\n.pick-up-for-overexposure-form__header {\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 600;\\r\\n    font-size: 28px;\\r\\n    line-height: 24px;\\r\\n    color: #B3B3B3;\\r\\n    height: 40px;\\r\\n}\\r\\n\\r\\n.pet-modal__line,\\r\\n.create-form__line,\\r\\n.update-form__line,\\r\\n.take-home-form__line,\\r\\n.pick-up-for-overexposure-form__line {\\r\\n    width: 100%;\\r\\n    height: 2px;\\r\\n    margin-top: 8px;\\r\\n    margin-bottom: 17px;\\r\\n    background-color: #FFCB38;\\r\\n}\\r\\n\\r\\n.create-form__image,\\r\\n.update-form__image,\\r\\n.take-home-form__image,\\r\\n.pick-up-for-overexposure-form__image {\\r\\n    border-radius: 50%;\\r\\n    width: 40%;\\r\\n    height: auto;\\r\\n    display: block;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n\\r\\n.create-form__input,\\r\\n.update-form__input,\\r\\n.take-home-form__input,\\r\\n.pick-up-for-overexposure-form__input {\\r\\n    border: 1px solid #D6D6D6;\\r\\n    box-sizing: border-box;\\r\\n    border-radius: 2px;\\r\\n    height: 30px;\\r\\n    width: 100%;\\r\\n    font-family: Gilroy;\\r\\n    font-weight: 500;\\r\\n    font-size: 14px;\\r\\n    line-height: 20px;\\r\\n    color: #6B6B6B;\\r\\n    padding: 10px 16px;\\r\\n}\\r\\n\\r\\n.create-form__textarea,\\r\\n.update-form__textarea,\\r\\n.take-home-form__textarea,\\r\\n.pick-up-for-overexposure-form__textarea {\\r\\n    background: #FFFFFF;\\r\\n    border: 1px solid #D6D6D6;\\r\\n    box-sizing: border-box;\\r\\n    border-radius: 2px;\\r\\n    width: 100%;\\r\\n    font-family: Gilroy;\\r\\n    font-weight: 500;\\r\\n    font-size: 14px;\\r\\n    line-height: 20px;\\r\\n    color: #6B6B6B;\\r\\n    padding: 10px 16px;\\r\\n}\\r\\n\\r\\n.create-form__save-button,\\r\\n.update-form__save-button,\\r\\n.take-home-form__save-button,\\r\\n.pick-up-for-overexposure-form__save-button {\\r\\n    width: 168px;\\r\\n    height: 42px;\\r\\n    background: linear-gradient(180deg, #FFDE89 0%, #FFCB38 100%);\\r\\n    box-shadow: 7px 7px 16px #E3E3E3, -3px -4px 8px rgba(255, 255, 255, 0.9), inset 13px 22px 8px rgba(0, 0, 0, 0.02);\\r\\n    border-radius: 58px;\\r\\n    border-style: none;\\r\\n    padding: 5px;\\r\\n    border: 1px;\\r\\n}\\r\\n\\r\\n.pick-up-for-overexposure-form__save-button {\\r\\n    width: 240px\\r\\n}\\r\\n\\r\\n.take-home-form__save-button,\\r\\n.pick-up-for-overexposure-form__save-button {\\r\\n    margin: 0 auto;\\r\\n}\\r\\n\\r\\n.create-form__save-button:hover,\\r\\n.update-form__save-button:hover,\\r\\n.take-home-form__save-button:hover,\\r\\n.pick-up-for-overexposure-form__save-button:hover {\\r\\n    background: #FFCB38;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.create-form__save-button-bg,\\r\\n.update-form__save-button-bg,\\r\\n.take-home-form__save-button-bg,\\r\\n.pick-up-for-overexposure-form__save-button-bg {\\r\\n    position: relative;\\r\\n    width: 158px;\\r\\n    height: 32px;\\r\\n    background: linear-gradient(180deg, #FFECB5 0%, #FFE69F 0.01%, #FFD45A 100%);\\r\\n    box-shadow: 3px 3px 13px rgba(0, 0, 0, 0.25);\\r\\n    border-radius: 58px;\\r\\n    border: 1px;\\r\\n}\\r\\n\\r\\n.pick-up-for-overexposure-form__save-button-bg {\\r\\n    width: 230px;\\r\\n}\\r\\n\\r\\n.create-form__save-button-text,\\r\\n.update-form__save-button-text,\\r\\n.take-home-form__save-button-text,\\r\\n.pick-up-for-overexposure-form__save-button-text {\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    margin-top: 6px;\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 21px;\\r\\n    line-height: 20px;  \\r\\n    color: #242424;\\r\\n}\\r\\n\\r\\n.update-form__delete-button {\\r\\n    width: 143px;\\r\\n    height: 42px;\\r\\n    background: #F6F6F6;\\r\\n    box-shadow: 7px 7px 16px #E3E3E3, -4px -4px 8px rgba(255, 255, 255, 0.7), inset 13px 22px 8px rgba(0, 0, 0, 0.02);\\r\\n    border-radius: 58px;\\r\\n    border-style:none;\\r\\n    padding: 5px;\\r\\n    border: 1px;\\r\\n}\\r\\n\\r\\n.update-form__delete-button:hover {\\r\\n    background: rgb(255 0 0 / 63%);\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.update-form__delete-button-bg {\\r\\n    position: relative;\\r\\n    width: 133px;\\r\\n    height: 32px; \\r\\n    background: linear-gradient(180deg, #FBFBFB 0%, #F6F6F6 100%);\\r\\n    box-shadow: 3px 3px 13px rgba(128, 128, 128, 0.25);\\r\\n    border-radius: 58px;\\r\\n    border: 1px;\\r\\n}\\r\\n\\r\\n.update-form__delete-button-text {\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    margin-top: 6px;\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 21px;\\r\\n    line-height: 20px;  \\r\\n    color: #242424;  \\r\\n}\\r\\n\\r\\n.create-form button:focus,\\r\\n.update-form button:focus,\\r\\n.take-home-form button:focus,\\r\\n.pick-up-for-overexposure-form button:focus {\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n.create-form__input-container,\\r\\n.update-form__input-container,\\r\\n.take-home-form__input-container,\\r\\n.pick-up-for-overexposure-form__input-container {\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n.create-form__buttons-container,\\r\\n.update-form__buttons-container,\\r\\n.take-home-form__buttons-container,\\r\\n.pick-up-for-overexposure-form__buttons-container {\\r\\n    margin-top: 32px;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\\r\\n.pick-up-for-overexposure-form__coment {\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: normal;\\r\\n    font-size: 16px;\\r\\n    line-height: 140%;\\r\\n    display: flex;\\r\\n    align-items: center;\\r\\n    color: #B3B3B3;\\r\\n}\\r\\n\\r\\n\\r\\n/* currentPetModal */\\r\\n\\r\\n.pet-modal__header {\\r\\n    text-align: center;\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 600;\\r\\n    font-size: 28px;\\r\\n    line-height: 24px;\\r\\n    color: #B3B3B3;\\r\\n    height: 40px;\\r\\n}\\r\\n\\r\\n.pet-modal__desc {\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 16px;\\r\\n    line-height: 20px;\\r\\n    color: #6B6B6B;\\r\\n}\\r\\n\\r\\n.pet-modal__text {\\r\\n    max-width: 520px;\\r\\n    margin: 20px 0;\\r\\n    word-wrap: break-word;\\r\\n}\\r\\n\\r\\n.pet-modal__image {\\r\\n    width: 50%;\\r\\n    height: auto;\\r\\n    display: block;\\r\\n    margin: 0 auto;\\r\\n}\\r\\n\\r\\n\\r\\n.pet-modal__takeHome-button {\\r\\n    width: 168px;\\r\\n    height: 42px;\\r\\n    background: linear-gradient(180deg, #FFDE89 0%, #FFCB38 100%);\\r\\n    box-shadow: 7px 7px 16px #E3E3E3, -3px -4px 8px rgba(255, 255, 255, 0.9), inset 13px 22px 8px rgba(0, 0, 0, 0.02);\\r\\n    border-radius: 58px;\\r\\n    border-style: none;\\r\\n    padding: 5px;\\r\\n    border: 1px;\\r\\n}\\r\\n\\r\\n.pet-modal__takeHome-button:hover {\\r\\n    background: #FFCB38;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.pet-modal__takeHome-button-bg {\\r\\n    position: relative;\\r\\n    width: 158px;\\r\\n    height: 32px;\\r\\n    background: linear-gradient(180deg, #FFECB5 0%, #FFE69F 0.01%, #FFD45A 100%);\\r\\n    box-shadow: 3px 3px 13px rgba(0, 0, 0, 0.25);\\r\\n    border-radius: 58px;\\r\\n    border: 1px;\\r\\n}\\r\\n\\r\\n.pet-modal__takeHome-button-text {\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    margin-top: 6px;\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 21px;\\r\\n    line-height: 20px;  \\r\\n    color: #242424;\\r\\n}\\r\\n\\r\\n.pet-modal__overexposure-button {\\r\\n    width: 298px;\\r\\n    height: 42px;\\r\\n    background: #F6F6F6;\\r\\n    box-shadow: 7px 7px 16px #E3E3E3, -4px -4px 8px rgba(255, 255, 255, 0.7), inset 13px 22px 8px rgba(0, 0, 0, 0.02);\\r\\n    border-radius: 58px;\\r\\n    border-style:none;\\r\\n    padding: 5px;\\r\\n    border: 1px;\\r\\n}\\r\\n\\r\\n.pet-modal__overexposure-button:hover {\\r\\n    background: rgba(128, 128, 128, 0.1);\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\n.pet-modal__overexposure-button-bg {\\r\\n    position: relative;\\r\\n    width: 288px;\\r\\n    height: 32px; \\r\\n    background: linear-gradient(180deg, #FBFBFB 0%, #F6F6F6 100%);\\r\\n    box-shadow: 3px 3px 13px rgba(128, 128, 128, 0.25);\\r\\n    border-radius: 58px;\\r\\n    border: 1px;\\r\\n}\\r\\n\\r\\n.pet-modal__overexposure-button-text {\\r\\n    display: inline-block;\\r\\n    text-align: center;\\r\\n    margin-top: 6px;\\r\\n    font-family: Gilroy;\\r\\n    font-style: normal;\\r\\n    font-weight: 500;\\r\\n    font-size: 21px;\\r\\n    line-height: 20px;  \\r\\n    color: #242424;  \\r\\n}\\r\\n\\r\\n.pet-modal button:focus {\\r\\n    outline: none;\\r\\n}\\r\\n\\r\\n.pet-modal__input-container {\\r\\n    margin-top: 10px;\\r\\n}\\r\\n\\r\\n.pet-modal__buttons-container {\\r\\n    margin-top: 32px;\\r\\n    display: flex;\\r\\n    justify-content: space-between;\\r\\n}\\r\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://webpack_start/./src/styles/css/modal.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === \"string\") {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, \"\"]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://webpack_start/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://webpack_start/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("/**\n * Copyright (c) 2014-present, Facebook, Inc.\n *\n * This source code is licensed under the MIT license found in the\n * LICENSE file in the root directory of this source tree.\n */\n\nvar runtime = (function (exports) {\n  \"use strict\";\n\n  var Op = Object.prototype;\n  var hasOwn = Op.hasOwnProperty;\n  var undefined; // More compressible than void 0.\n  var $Symbol = typeof Symbol === \"function\" ? Symbol : {};\n  var iteratorSymbol = $Symbol.iterator || \"@@iterator\";\n  var asyncIteratorSymbol = $Symbol.asyncIterator || \"@@asyncIterator\";\n  var toStringTagSymbol = $Symbol.toStringTag || \"@@toStringTag\";\n\n  function define(obj, key, value) {\n    Object.defineProperty(obj, key, {\n      value: value,\n      enumerable: true,\n      configurable: true,\n      writable: true\n    });\n    return obj[key];\n  }\n  try {\n    // IE 8 has a broken Object.defineProperty that only works on DOM objects.\n    define({}, \"\");\n  } catch (err) {\n    define = function(obj, key, value) {\n      return obj[key] = value;\n    };\n  }\n\n  function wrap(innerFn, outerFn, self, tryLocsList) {\n    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.\n    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;\n    var generator = Object.create(protoGenerator.prototype);\n    var context = new Context(tryLocsList || []);\n\n    // The ._invoke method unifies the implementations of the .next,\n    // .throw, and .return methods.\n    generator._invoke = makeInvokeMethod(innerFn, self, context);\n\n    return generator;\n  }\n  exports.wrap = wrap;\n\n  // Try/catch helper to minimize deoptimizations. Returns a completion\n  // record like context.tryEntries[i].completion. This interface could\n  // have been (and was previously) designed to take a closure to be\n  // invoked without arguments, but in all the cases we care about we\n  // already have an existing method we want to call, so there's no need\n  // to create a new function object. We can even get away with assuming\n  // the method takes exactly one argument, since that happens to be true\n  // in every case, so we don't have to touch the arguments object. The\n  // only additional allocation required is the completion record, which\n  // has a stable shape and so hopefully should be cheap to allocate.\n  function tryCatch(fn, obj, arg) {\n    try {\n      return { type: \"normal\", arg: fn.call(obj, arg) };\n    } catch (err) {\n      return { type: \"throw\", arg: err };\n    }\n  }\n\n  var GenStateSuspendedStart = \"suspendedStart\";\n  var GenStateSuspendedYield = \"suspendedYield\";\n  var GenStateExecuting = \"executing\";\n  var GenStateCompleted = \"completed\";\n\n  // Returning this object from the innerFn has the same effect as\n  // breaking out of the dispatch switch statement.\n  var ContinueSentinel = {};\n\n  // Dummy constructor functions that we use as the .constructor and\n  // .constructor.prototype properties for functions that return Generator\n  // objects. For full spec compliance, you may wish to configure your\n  // minifier not to mangle the names of these two functions.\n  function Generator() {}\n  function GeneratorFunction() {}\n  function GeneratorFunctionPrototype() {}\n\n  // This is a polyfill for %IteratorPrototype% for environments that\n  // don't natively support it.\n  var IteratorPrototype = {};\n  define(IteratorPrototype, iteratorSymbol, function () {\n    return this;\n  });\n\n  var getProto = Object.getPrototypeOf;\n  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));\n  if (NativeIteratorPrototype &&\n      NativeIteratorPrototype !== Op &&\n      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {\n    // This environment has a native %IteratorPrototype%; use it instead\n    // of the polyfill.\n    IteratorPrototype = NativeIteratorPrototype;\n  }\n\n  var Gp = GeneratorFunctionPrototype.prototype =\n    Generator.prototype = Object.create(IteratorPrototype);\n  GeneratorFunction.prototype = GeneratorFunctionPrototype;\n  define(Gp, \"constructor\", GeneratorFunctionPrototype);\n  define(GeneratorFunctionPrototype, \"constructor\", GeneratorFunction);\n  GeneratorFunction.displayName = define(\n    GeneratorFunctionPrototype,\n    toStringTagSymbol,\n    \"GeneratorFunction\"\n  );\n\n  // Helper for defining the .next, .throw, and .return methods of the\n  // Iterator interface in terms of a single ._invoke method.\n  function defineIteratorMethods(prototype) {\n    [\"next\", \"throw\", \"return\"].forEach(function(method) {\n      define(prototype, method, function(arg) {\n        return this._invoke(method, arg);\n      });\n    });\n  }\n\n  exports.isGeneratorFunction = function(genFun) {\n    var ctor = typeof genFun === \"function\" && genFun.constructor;\n    return ctor\n      ? ctor === GeneratorFunction ||\n        // For the native GeneratorFunction constructor, the best we can\n        // do is to check its .name property.\n        (ctor.displayName || ctor.name) === \"GeneratorFunction\"\n      : false;\n  };\n\n  exports.mark = function(genFun) {\n    if (Object.setPrototypeOf) {\n      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);\n    } else {\n      genFun.__proto__ = GeneratorFunctionPrototype;\n      define(genFun, toStringTagSymbol, \"GeneratorFunction\");\n    }\n    genFun.prototype = Object.create(Gp);\n    return genFun;\n  };\n\n  // Within the body of any async function, `await x` is transformed to\n  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test\n  // `hasOwn.call(value, \"__await\")` to determine if the yielded value is\n  // meant to be awaited.\n  exports.awrap = function(arg) {\n    return { __await: arg };\n  };\n\n  function AsyncIterator(generator, PromiseImpl) {\n    function invoke(method, arg, resolve, reject) {\n      var record = tryCatch(generator[method], generator, arg);\n      if (record.type === \"throw\") {\n        reject(record.arg);\n      } else {\n        var result = record.arg;\n        var value = result.value;\n        if (value &&\n            typeof value === \"object\" &&\n            hasOwn.call(value, \"__await\")) {\n          return PromiseImpl.resolve(value.__await).then(function(value) {\n            invoke(\"next\", value, resolve, reject);\n          }, function(err) {\n            invoke(\"throw\", err, resolve, reject);\n          });\n        }\n\n        return PromiseImpl.resolve(value).then(function(unwrapped) {\n          // When a yielded Promise is resolved, its final value becomes\n          // the .value of the Promise<{value,done}> result for the\n          // current iteration.\n          result.value = unwrapped;\n          resolve(result);\n        }, function(error) {\n          // If a rejected Promise was yielded, throw the rejection back\n          // into the async generator function so it can be handled there.\n          return invoke(\"throw\", error, resolve, reject);\n        });\n      }\n    }\n\n    var previousPromise;\n\n    function enqueue(method, arg) {\n      function callInvokeWithMethodAndArg() {\n        return new PromiseImpl(function(resolve, reject) {\n          invoke(method, arg, resolve, reject);\n        });\n      }\n\n      return previousPromise =\n        // If enqueue has been called before, then we want to wait until\n        // all previous Promises have been resolved before calling invoke,\n        // so that results are always delivered in the correct order. If\n        // enqueue has not been called before, then it is important to\n        // call invoke immediately, without waiting on a callback to fire,\n        // so that the async generator function has the opportunity to do\n        // any necessary setup in a predictable way. This predictability\n        // is why the Promise constructor synchronously invokes its\n        // executor callback, and why async functions synchronously\n        // execute code before the first await. Since we implement simple\n        // async functions in terms of async generators, it is especially\n        // important to get this right, even though it requires care.\n        previousPromise ? previousPromise.then(\n          callInvokeWithMethodAndArg,\n          // Avoid propagating failures to Promises returned by later\n          // invocations of the iterator.\n          callInvokeWithMethodAndArg\n        ) : callInvokeWithMethodAndArg();\n    }\n\n    // Define the unified helper method that is used to implement .next,\n    // .throw, and .return (see defineIteratorMethods).\n    this._invoke = enqueue;\n  }\n\n  defineIteratorMethods(AsyncIterator.prototype);\n  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {\n    return this;\n  });\n  exports.AsyncIterator = AsyncIterator;\n\n  // Note that simple async functions are implemented on top of\n  // AsyncIterator objects; they just return a Promise for the value of\n  // the final result produced by the iterator.\n  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {\n    if (PromiseImpl === void 0) PromiseImpl = Promise;\n\n    var iter = new AsyncIterator(\n      wrap(innerFn, outerFn, self, tryLocsList),\n      PromiseImpl\n    );\n\n    return exports.isGeneratorFunction(outerFn)\n      ? iter // If outerFn is a generator, return the full iterator.\n      : iter.next().then(function(result) {\n          return result.done ? result.value : iter.next();\n        });\n  };\n\n  function makeInvokeMethod(innerFn, self, context) {\n    var state = GenStateSuspendedStart;\n\n    return function invoke(method, arg) {\n      if (state === GenStateExecuting) {\n        throw new Error(\"Generator is already running\");\n      }\n\n      if (state === GenStateCompleted) {\n        if (method === \"throw\") {\n          throw arg;\n        }\n\n        // Be forgiving, per 25.3.3.3.3 of the spec:\n        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume\n        return doneResult();\n      }\n\n      context.method = method;\n      context.arg = arg;\n\n      while (true) {\n        var delegate = context.delegate;\n        if (delegate) {\n          var delegateResult = maybeInvokeDelegate(delegate, context);\n          if (delegateResult) {\n            if (delegateResult === ContinueSentinel) continue;\n            return delegateResult;\n          }\n        }\n\n        if (context.method === \"next\") {\n          // Setting context._sent for legacy support of Babel's\n          // function.sent implementation.\n          context.sent = context._sent = context.arg;\n\n        } else if (context.method === \"throw\") {\n          if (state === GenStateSuspendedStart) {\n            state = GenStateCompleted;\n            throw context.arg;\n          }\n\n          context.dispatchException(context.arg);\n\n        } else if (context.method === \"return\") {\n          context.abrupt(\"return\", context.arg);\n        }\n\n        state = GenStateExecuting;\n\n        var record = tryCatch(innerFn, self, context);\n        if (record.type === \"normal\") {\n          // If an exception is thrown from innerFn, we leave state ===\n          // GenStateExecuting and loop back for another invocation.\n          state = context.done\n            ? GenStateCompleted\n            : GenStateSuspendedYield;\n\n          if (record.arg === ContinueSentinel) {\n            continue;\n          }\n\n          return {\n            value: record.arg,\n            done: context.done\n          };\n\n        } else if (record.type === \"throw\") {\n          state = GenStateCompleted;\n          // Dispatch the exception by looping back around to the\n          // context.dispatchException(context.arg) call above.\n          context.method = \"throw\";\n          context.arg = record.arg;\n        }\n      }\n    };\n  }\n\n  // Call delegate.iterator[context.method](context.arg) and handle the\n  // result, either by returning a { value, done } result from the\n  // delegate iterator, or by modifying context.method and context.arg,\n  // setting context.delegate to null, and returning the ContinueSentinel.\n  function maybeInvokeDelegate(delegate, context) {\n    var method = delegate.iterator[context.method];\n    if (method === undefined) {\n      // A .throw or .return when the delegate iterator has no .throw\n      // method always terminates the yield* loop.\n      context.delegate = null;\n\n      if (context.method === \"throw\") {\n        // Note: [\"return\"] must be used for ES3 parsing compatibility.\n        if (delegate.iterator[\"return\"]) {\n          // If the delegate iterator has a return method, give it a\n          // chance to clean up.\n          context.method = \"return\";\n          context.arg = undefined;\n          maybeInvokeDelegate(delegate, context);\n\n          if (context.method === \"throw\") {\n            // If maybeInvokeDelegate(context) changed context.method from\n            // \"return\" to \"throw\", let that override the TypeError below.\n            return ContinueSentinel;\n          }\n        }\n\n        context.method = \"throw\";\n        context.arg = new TypeError(\n          \"The iterator does not provide a 'throw' method\");\n      }\n\n      return ContinueSentinel;\n    }\n\n    var record = tryCatch(method, delegate.iterator, context.arg);\n\n    if (record.type === \"throw\") {\n      context.method = \"throw\";\n      context.arg = record.arg;\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    var info = record.arg;\n\n    if (! info) {\n      context.method = \"throw\";\n      context.arg = new TypeError(\"iterator result is not an object\");\n      context.delegate = null;\n      return ContinueSentinel;\n    }\n\n    if (info.done) {\n      // Assign the result of the finished delegate to the temporary\n      // variable specified by delegate.resultName (see delegateYield).\n      context[delegate.resultName] = info.value;\n\n      // Resume execution at the desired location (see delegateYield).\n      context.next = delegate.nextLoc;\n\n      // If context.method was \"throw\" but the delegate handled the\n      // exception, let the outer generator proceed normally. If\n      // context.method was \"next\", forget context.arg since it has been\n      // \"consumed\" by the delegate iterator. If context.method was\n      // \"return\", allow the original .return call to continue in the\n      // outer generator.\n      if (context.method !== \"return\") {\n        context.method = \"next\";\n        context.arg = undefined;\n      }\n\n    } else {\n      // Re-yield the result returned by the delegate method.\n      return info;\n    }\n\n    // The delegate iterator is finished, so forget it and continue with\n    // the outer generator.\n    context.delegate = null;\n    return ContinueSentinel;\n  }\n\n  // Define Generator.prototype.{next,throw,return} in terms of the\n  // unified ._invoke helper method.\n  defineIteratorMethods(Gp);\n\n  define(Gp, toStringTagSymbol, \"Generator\");\n\n  // A Generator should always return itself as the iterator object when the\n  // @@iterator function is called on it. Some browsers' implementations of the\n  // iterator prototype chain incorrectly implement this, causing the Generator\n  // object to not be returned from this call. This ensures that doesn't happen.\n  // See https://github.com/facebook/regenerator/issues/274 for more details.\n  define(Gp, iteratorSymbol, function() {\n    return this;\n  });\n\n  define(Gp, \"toString\", function() {\n    return \"[object Generator]\";\n  });\n\n  function pushTryEntry(locs) {\n    var entry = { tryLoc: locs[0] };\n\n    if (1 in locs) {\n      entry.catchLoc = locs[1];\n    }\n\n    if (2 in locs) {\n      entry.finallyLoc = locs[2];\n      entry.afterLoc = locs[3];\n    }\n\n    this.tryEntries.push(entry);\n  }\n\n  function resetTryEntry(entry) {\n    var record = entry.completion || {};\n    record.type = \"normal\";\n    delete record.arg;\n    entry.completion = record;\n  }\n\n  function Context(tryLocsList) {\n    // The root entry object (effectively a try statement without a catch\n    // or a finally block) gives us a place to store values thrown from\n    // locations where there is no enclosing try statement.\n    this.tryEntries = [{ tryLoc: \"root\" }];\n    tryLocsList.forEach(pushTryEntry, this);\n    this.reset(true);\n  }\n\n  exports.keys = function(object) {\n    var keys = [];\n    for (var key in object) {\n      keys.push(key);\n    }\n    keys.reverse();\n\n    // Rather than returning an object with a next method, we keep\n    // things simple and return the next function itself.\n    return function next() {\n      while (keys.length) {\n        var key = keys.pop();\n        if (key in object) {\n          next.value = key;\n          next.done = false;\n          return next;\n        }\n      }\n\n      // To avoid creating an additional object, we just hang the .value\n      // and .done properties off the next function object itself. This\n      // also ensures that the minifier will not anonymize the function.\n      next.done = true;\n      return next;\n    };\n  };\n\n  function values(iterable) {\n    if (iterable) {\n      var iteratorMethod = iterable[iteratorSymbol];\n      if (iteratorMethod) {\n        return iteratorMethod.call(iterable);\n      }\n\n      if (typeof iterable.next === \"function\") {\n        return iterable;\n      }\n\n      if (!isNaN(iterable.length)) {\n        var i = -1, next = function next() {\n          while (++i < iterable.length) {\n            if (hasOwn.call(iterable, i)) {\n              next.value = iterable[i];\n              next.done = false;\n              return next;\n            }\n          }\n\n          next.value = undefined;\n          next.done = true;\n\n          return next;\n        };\n\n        return next.next = next;\n      }\n    }\n\n    // Return an iterator with no values.\n    return { next: doneResult };\n  }\n  exports.values = values;\n\n  function doneResult() {\n    return { value: undefined, done: true };\n  }\n\n  Context.prototype = {\n    constructor: Context,\n\n    reset: function(skipTempReset) {\n      this.prev = 0;\n      this.next = 0;\n      // Resetting context._sent for legacy support of Babel's\n      // function.sent implementation.\n      this.sent = this._sent = undefined;\n      this.done = false;\n      this.delegate = null;\n\n      this.method = \"next\";\n      this.arg = undefined;\n\n      this.tryEntries.forEach(resetTryEntry);\n\n      if (!skipTempReset) {\n        for (var name in this) {\n          // Not sure about the optimal order of these conditions:\n          if (name.charAt(0) === \"t\" &&\n              hasOwn.call(this, name) &&\n              !isNaN(+name.slice(1))) {\n            this[name] = undefined;\n          }\n        }\n      }\n    },\n\n    stop: function() {\n      this.done = true;\n\n      var rootEntry = this.tryEntries[0];\n      var rootRecord = rootEntry.completion;\n      if (rootRecord.type === \"throw\") {\n        throw rootRecord.arg;\n      }\n\n      return this.rval;\n    },\n\n    dispatchException: function(exception) {\n      if (this.done) {\n        throw exception;\n      }\n\n      var context = this;\n      function handle(loc, caught) {\n        record.type = \"throw\";\n        record.arg = exception;\n        context.next = loc;\n\n        if (caught) {\n          // If the dispatched exception was caught by a catch block,\n          // then let that catch block handle the exception normally.\n          context.method = \"next\";\n          context.arg = undefined;\n        }\n\n        return !! caught;\n      }\n\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        var record = entry.completion;\n\n        if (entry.tryLoc === \"root\") {\n          // Exception thrown outside of any try block that could handle\n          // it, so set the completion value of the entire function to\n          // throw the exception.\n          return handle(\"end\");\n        }\n\n        if (entry.tryLoc <= this.prev) {\n          var hasCatch = hasOwn.call(entry, \"catchLoc\");\n          var hasFinally = hasOwn.call(entry, \"finallyLoc\");\n\n          if (hasCatch && hasFinally) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            } else if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else if (hasCatch) {\n            if (this.prev < entry.catchLoc) {\n              return handle(entry.catchLoc, true);\n            }\n\n          } else if (hasFinally) {\n            if (this.prev < entry.finallyLoc) {\n              return handle(entry.finallyLoc);\n            }\n\n          } else {\n            throw new Error(\"try statement without catch or finally\");\n          }\n        }\n      }\n    },\n\n    abrupt: function(type, arg) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc <= this.prev &&\n            hasOwn.call(entry, \"finallyLoc\") &&\n            this.prev < entry.finallyLoc) {\n          var finallyEntry = entry;\n          break;\n        }\n      }\n\n      if (finallyEntry &&\n          (type === \"break\" ||\n           type === \"continue\") &&\n          finallyEntry.tryLoc <= arg &&\n          arg <= finallyEntry.finallyLoc) {\n        // Ignore the finally entry if control is not jumping to a\n        // location outside the try/catch block.\n        finallyEntry = null;\n      }\n\n      var record = finallyEntry ? finallyEntry.completion : {};\n      record.type = type;\n      record.arg = arg;\n\n      if (finallyEntry) {\n        this.method = \"next\";\n        this.next = finallyEntry.finallyLoc;\n        return ContinueSentinel;\n      }\n\n      return this.complete(record);\n    },\n\n    complete: function(record, afterLoc) {\n      if (record.type === \"throw\") {\n        throw record.arg;\n      }\n\n      if (record.type === \"break\" ||\n          record.type === \"continue\") {\n        this.next = record.arg;\n      } else if (record.type === \"return\") {\n        this.rval = this.arg = record.arg;\n        this.method = \"return\";\n        this.next = \"end\";\n      } else if (record.type === \"normal\" && afterLoc) {\n        this.next = afterLoc;\n      }\n\n      return ContinueSentinel;\n    },\n\n    finish: function(finallyLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.finallyLoc === finallyLoc) {\n          this.complete(entry.completion, entry.afterLoc);\n          resetTryEntry(entry);\n          return ContinueSentinel;\n        }\n      }\n    },\n\n    \"catch\": function(tryLoc) {\n      for (var i = this.tryEntries.length - 1; i >= 0; --i) {\n        var entry = this.tryEntries[i];\n        if (entry.tryLoc === tryLoc) {\n          var record = entry.completion;\n          if (record.type === \"throw\") {\n            var thrown = record.arg;\n            resetTryEntry(entry);\n          }\n          return thrown;\n        }\n      }\n\n      // The context.catch method must only be called with a location\n      // argument that corresponds to a known catch block.\n      throw new Error(\"illegal catch attempt\");\n    },\n\n    delegateYield: function(iterable, resultName, nextLoc) {\n      this.delegate = {\n        iterator: values(iterable),\n        resultName: resultName,\n        nextLoc: nextLoc\n      };\n\n      if (this.method === \"next\") {\n        // Deliberately forget the last sent value so that we don't\n        // accidentally pass it on to the delegate.\n        this.arg = undefined;\n      }\n\n      return ContinueSentinel;\n    }\n  };\n\n  // Regardless of whether this script is executing as a CommonJS module\n  // or not, return the runtime object so that we can declare the variable\n  // regeneratorRuntime in the outer scope, which allows this module to be\n  // injected easily by `bin/regenerator --include-runtime script.js`.\n  return exports;\n\n}(\n  // If this script is executing as a CommonJS module, use module.exports\n  // as the regeneratorRuntime namespace. Otherwise create a new empty\n  // object. Either way, the resulting object will be used to initialize\n  // the regeneratorRuntime variable at the top of this file.\n   true ? module.exports : 0\n));\n\ntry {\n  regeneratorRuntime = runtime;\n} catch (accidentalStrictMode) {\n  // This module should not be running in strict mode, so the above\n  // assignment should always work unless something is misconfigured. Just\n  // in case runtime.js accidentally runs in strict mode, in modern engines\n  // we can explicitly access globalThis. In older engines we can escape\n  // strict mode using a global Function call. This could conceivably fail\n  // if a Content Security Policy forbids using Function, but in that case\n  // the proper solution is to fix the accidental strict mode problem. If\n  // you've misconfigured your bundler to force strict mode and applied a\n  // CSP to forbid Function, and you're not willing to fix either of those\n  // problems, please detail your unique predicament in a GitHub issue.\n  if (typeof globalThis === \"object\") {\n    globalThis.regeneratorRuntime = runtime;\n  } else {\n    Function(\"r\", \"regeneratorRuntime = r\")(runtime);\n  }\n}\n\n\n//# sourceURL=webpack://webpack_start/./node_modules/regenerator-runtime/runtime.js?");

/***/ }),

/***/ "./src/styles/css/gallery.css":
/*!************************************!*\
  !*** ./src/styles/css/gallery.css ***!
  \************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./gallery.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/css/gallery.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../node_modules/css-loader/dist/cjs.js!./gallery.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/css/gallery.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./gallery.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/css/gallery.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_gallery_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack_start/./src/styles/css/gallery.css?");

/***/ }),

/***/ "./src/styles/css/hystmodal.css":
/*!**************************************!*\
  !*** ./src/styles/css/hystmodal.css ***!
  \**************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./hystmodal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/css/hystmodal.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../node_modules/css-loader/dist/cjs.js!./hystmodal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/css/hystmodal.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./hystmodal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/css/hystmodal.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_hystmodal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack_start/./src/styles/css/hystmodal.css?");

/***/ }),

/***/ "./src/styles/css/main.css":
/*!*********************************!*\
  !*** ./src/styles/css/main.css ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/css/main.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/css/main.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./main.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/css/main.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack_start/./src/styles/css/main.css?");

/***/ }),

/***/ "./src/styles/css/modal.css":
/*!**********************************!*\
  !*** ./src/styles/css/modal.css ***!
  \**********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/css/modal.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default, options);\n\n\nif (true) {\n  if (!_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals || module.hot.invalidate) {\n    var isEqualLocals = function isEqualLocals(a, b, isNamedExport) {\n  if (!a && b || a && !b) {\n    return false;\n  }\n\n  var p;\n\n  for (p in a) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (a[p] !== b[p]) {\n      return false;\n    }\n  }\n\n  for (p in b) {\n    if (isNamedExport && p === \"default\") {\n      // eslint-disable-next-line no-continue\n      continue;\n    }\n\n    if (!a[p]) {\n      return false;\n    }\n  }\n\n  return true;\n};\n    var isNamedExport = !_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n    var oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n\n    module.hot.accept(\n      /*! !!../../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/css/modal.css\",\n      __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js!./modal.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/css/modal.css\");\n(function () {\n        if (!isEqualLocals(oldLocals, isNamedExport ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals, isNamedExport)) {\n                module.hot.invalidate();\n\n                return;\n              }\n\n              oldLocals = isNamedExport ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__ : _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals;\n\n              update(_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default);\n      })(__WEBPACK_OUTDATED_DEPENDENCIES__); }\n    )\n  }\n\n  module.hot.dispose(function() {\n    update();\n  });\n}\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_modal_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);\n\n\n//# sourceURL=webpack://webpack_start/./src/styles/css/modal.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://webpack_start/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://webpack_start/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var style = document.createElement(\"style\");\n  options.setAttributes(style, options.attributes);\n  options.insert(style);\n  return style;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://webpack_start/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(style) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    style.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://webpack_start/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction apply(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute(\"media\", media);\n  } else {\n    style.removeAttribute(\"media\");\n  }\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, style);\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var style = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(style, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(style);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://webpack_start/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, style) {\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://webpack_start/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/images/icons/close.svg":
/*!************************************!*\
  !*** ./src/images/icons/close.svg ***!
  \************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik03Ljk5OTU2IDYuNTg1ODJMMTQuMzYzNSAwLjIyMTg1NkwxNS43Nzc3IDEuNjM2MDdMOS40MTM3NyA4LjAwMDAzTDE1Ljc3NzcgMTQuMzY0TDE0LjM2MzUgMTUuNzc4Mkw3Ljk5OTU2IDkuNDE0MjRMMS42MzU2IDE1Ljc3ODJMMC4yMjEzODMgMTQuMzY0TDYuNTg1MzQgOC4wMDAwM0wwLjIyMTM4MyAxLjYzNjA3TDEuNjM1NiAwLjIyMTg1Nkw3Ljk5OTU2IDYuNTg1ODJaIiBmaWxsPSIjODE4NjlDIi8+Cjwvc3ZnPgo=\";\n\n//# sourceURL=webpack://webpack_start/./src/images/icons/close.svg?");

/***/ }),

/***/ "./src/images/icons/instagram.png":
/*!****************************************!*\
  !*** ./src/images/icons/instagram.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"81b7df2276becb65434b.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/icons/instagram.png?");

/***/ }),

/***/ "./src/images/icons/left-btn.png":
/*!***************************************!*\
  !*** ./src/images/icons/left-btn.png ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"3631d437b427ad2b5f20.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/icons/left-btn.png?");

/***/ }),

/***/ "./src/images/icons/right-btn.png":
/*!****************************************!*\
  !*** ./src/images/icons/right-btn.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a09592333618c8d7d4b4.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/icons/right-btn.png?");

/***/ }),

/***/ "./src/images/icons/sections/section_1.png":
/*!*************************************************!*\
  !*** ./src/images/icons/sections/section_1.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"ae57259284ca3d9fe601.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/icons/sections/section_1.png?");

/***/ }),

/***/ "./src/images/icons/sections/section_2.png":
/*!*************************************************!*\
  !*** ./src/images/icons/sections/section_2.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"523b10e48895a1e9415b.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/icons/sections/section_2.png?");

/***/ }),

/***/ "./src/images/icons/sections/section_3.png":
/*!*************************************************!*\
  !*** ./src/images/icons/sections/section_3.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a8c68e79cc9320b3fcec.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/icons/sections/section_3.png?");

/***/ }),

/***/ "./src/images/icons/sections/section_4.png":
/*!*************************************************!*\
  !*** ./src/images/icons/sections/section_4.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c87ee1e1a2f5594565b5.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/icons/sections/section_4.png?");

/***/ }),

/***/ "./src/images/icons/sections/section_5.png":
/*!*************************************************!*\
  !*** ./src/images/icons/sections/section_5.png ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"bc3d9512c436a78a778a.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/icons/sections/section_5.png?");

/***/ }),

/***/ "./src/images/icons/vk.png":
/*!*********************************!*\
  !*** ./src/images/icons/vk.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"a4786de73d389cd5e6c7.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/icons/vk.png?");

/***/ }),

/***/ "./src/images/img/bg/bg_text_1.png":
/*!*****************************************!*\
  !*** ./src/images/img/bg/bg_text_1.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"408fe98f18e4d4c5577f.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/img/bg/bg_text_1.png?");

/***/ }),

/***/ "./src/images/img/bg/bg_text_2.png":
/*!*****************************************!*\
  !*** ./src/images/img/bg/bg_text_2.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"7621d931c323cc5c5832.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/img/bg/bg_text_2.png?");

/***/ }),

/***/ "./src/images/img/bg/bg_text_3.png":
/*!*****************************************!*\
  !*** ./src/images/img/bg/bg_text_3.png ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"4dca110fd59b2930f958.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/img/bg/bg_text_3.png?");

/***/ }),

/***/ "./src/images/img/bg/cat_bg.png":
/*!**************************************!*\
  !*** ./src/images/img/bg/cat_bg.png ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"24e204741ce17624f070.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/img/bg/cat_bg.png?");

/***/ }),

/***/ "./src/images/img/bg/desc_img_1.png":
/*!******************************************!*\
  !*** ./src/images/img/bg/desc_img_1.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"b0912189fea6faf17224.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/img/bg/desc_img_1.png?");

/***/ }),

/***/ "./src/images/img/bg/desc_img_2.png":
/*!******************************************!*\
  !*** ./src/images/img/bg/desc_img_2.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"e5becc065cc8bfd94a17.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/img/bg/desc_img_2.png?");

/***/ }),

/***/ "./src/images/img/bg/dog_bg.jpg":
/*!**************************************!*\
  !*** ./src/images/img/bg/dog_bg.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"c0d22267f7e0b3adc368.jpg\";\n\n//# sourceURL=webpack://webpack_start/./src/images/img/bg/dog_bg.jpg?");

/***/ }),

/***/ "./src/images/img/bg/footer_bg.jpg":
/*!*****************************************!*\
  !*** ./src/images/img/bg/footer_bg.jpg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"50636576b21cbea6677f.jpg\";\n\n//# sourceURL=webpack://webpack_start/./src/images/img/bg/footer_bg.jpg?");

/***/ }),

/***/ "./src/images/img/bg/no_image.png":
/*!****************************************!*\
  !*** ./src/images/img/bg/no_image.png ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
eval("module.exports = __webpack_require__.p + \"87c1113ecef760fdfb0e.png\";\n\n//# sourceURL=webpack://webpack_start/./src/images/img/bg/no_image.png?");

/***/ }),

/***/ "./src/images/img/gallery/pencil.svg":
/*!*******************************************!*\
  !*** ./src/images/img/gallery/pencil.svg ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB3aWR0aD0iMzAiIGhlaWdodD0iMzAiIGZpbGw9IiNBRDdGMDAiIHZlcnNpb249IjEuMSIgaWQ9IkNhcGFfMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgeD0iMHB4IiB5PSIwcHgiIHZpZXdCb3g9IjAgMCA0ODAgNDgwIiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxnPg0KCTxnPg0KCQk8cGF0aCBkPSJNNDUzLjk5Miw1My43NzdMNDA4LjczNiw4LjUxM2MtOS4zNzItOS4zNjktMjQuNTY0LTkuMzY5LTMzLjkzNiwwTDY2LjU3NiwzMTYuNzM3Yy0wLjA4LDAuMDgtMC4xMDQsMC4xOTItMC4xNzYsMC4yNzINCgkJCWMtMC41NiwwLjYwNi0xLjAxOSwxLjI5Ny0xLjM2LDIuMDQ4Yy0wLjA5NSwwLjE3NC0wLjE4LDAuMzUzLTAuMjU2LDAuNTM2Yy0wLjA0LDAuMDk2LTAuMTA0LDAuMTc2LTAuMTM2LDAuMjcyTDMwLjcxMiw0MjEuNzEzDQoJCQljLTEuMzcxLDQuMiwwLjkyMiw4LjcxNyw1LjEyMiwxMC4wODhjMS42MTMsMC41MjcsMy4zNTMsMC41MjcsNC45NjYsMGwxMDEuODE2LTMzLjkzNmMwLjA5NiwwLDAuMTc2LTAuMDk2LDAuMjcyLTAuMTM2DQoJCQljMC4xODMtMC4wNzYsMC4zNjItMC4xNjEsMC41MzYtMC4yNTZjMC43NTEtMC4zNDEsMS40NDItMC44LDIuMDQ4LTEuMzZjMC4wOC0wLjA3MiwwLjE5Mi0wLjA5NiwwLjI3Mi0wLjE3Nkw0NTMuOTkyLDg3LjcxMw0KCQkJQzQ2My4zNjEsNzguMzQxLDQ2My4zNjEsNjMuMTQ5LDQ1My45OTIsNTMuNzc3eiBNNTAuOTQ0LDQxMS41NjlsMjQuOC03NC4zNmw0OS42LDQ5LjZMNTAuOTQ0LDQxMS41Njl6IE0xNDAuMTIsMzc4Ljk2OQ0KCQkJbC01Ni41NzYtNTYuNTc2TDMzNS4yLDcwLjc0NWwyMi42MzIsMjIuNjMyTDIwOCwyNDMuMjAxYy0zLjE3OCwzLjA2OS0zLjI2Niw4LjEzNC0wLjE5NiwxMS4zMTINCgkJCWMzLjA2OSwzLjE3OCw4LjEzNCwzLjI2NiwxMS4zMTIsMC4xOTZjMC4wNjctMC4wNjQsMC4xMzItMC4xMywwLjE5Ni0wLjE5NmwxNDkuODI0LTE0OS44MjRsMjIuNjMyLDIyLjYyNEwxNDAuMTIsMzc4Ljk2OXoNCgkJCSBNNDQyLjY4LDc2LjQwMWwtMzkuNiwzOS42MDhsLTI4LjI2NC0yOC4yNzJsLTI4LjMxMi0yOC4zMDRsMzkuNjA4LTM5LjZjMy4xMjQtMy4xMjMsOC4xODgtMy4xMjMsMTEuMzEyLDBsNDUuMjQ4LDQ1LjI1Ng0KCQkJQzQ0NS43OTcsNjguMjExLDQ0NS44MDEsNzMuMjc1LDQ0Mi42OCw3Ni40MDF6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NzIsNDYyLjUxM0g4Yy00LjQxOCwwLTgsMy41ODItOCw4czMuNTgyLDgsOCw4aDQ2NGM0LjQxOCwwLDgtMy41ODIsOC04UzQ3Ni40MTgsNDYyLjUxMyw0NzIsNDYyLjUxM3oiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCgk8Zz4NCgkJPHBhdGggZD0iTTQ3Miw0MTQuNTEzSDIzMmMtNC40MTgsMC04LDMuNTgyLTgsOHMzLjU4Miw4LDgsOGgyNDBjNC40MTgsMCw4LTMuNTgyLDgtOFM0NzYuNDE4LDQxNC41MTMsNDcyLDQxNC41MTN6Ii8+DQoJPC9nPg0KPC9nPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik00NzIsMzU4LjUxM0gyNjRjLTQuNDE4LDAtOCwzLjU4Mi04LDhzMy41ODIsOCw4LDhoMjA4YzQuNDE4LDAsOC0zLjU4Miw4LThTNDc2LjQxOCwzNTguNTEzLDQ3MiwzNTguNTEzeiIvPg0KCTwvZz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjwvc3ZnPg0K\";\n\n//# sourceURL=webpack://webpack_start/./src/images/img/gallery/pencil.svg?");

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23111%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E\";\n\n//# sourceURL=webpack://webpack_start/data:image/svg+xml,%253Csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_24_24%2527%253E%253Cpath_fill=%2527%2523fff%2527_stroke=%2527%2523111%2527_stroke-linecap=%2527square%2527_stroke-miterlimit=%252750%2527_stroke-width=%25272%2527_d=%2527M22_2L2_22%2527/%253E%253Cpath_fill=%2527none%2527_stroke=%2527%2523111%2527_stroke-linecap=%2527square%2527_stroke-miterlimit=%252750%2527_stroke-width=%25272%2527_d=%2527M2_2l20_20%2527/%253E%253C/svg%253E?");

/***/ }),

/***/ "data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 viewBox=%270 0 24 24%27%3E%3Cpath fill=%27%23fff%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M22 2L2 22%27/%3E%3Cpath fill=%27none%27 stroke=%27%23fff%27 stroke-linecap=%27square%27 stroke-miterlimit=%2750%27 stroke-width=%272%27 d=%27M2 2l20 20%27/%3E%3C/svg%3E\";\n\n//# sourceURL=webpack://webpack_start/data:image/svg+xml,%253Csvg_xmlns=%2527http://www.w3.org/2000/svg%2527_viewBox=%25270_0_24_24%2527%253E%253Cpath_fill=%2527%2523fff%2527_stroke=%2527%2523fff%2527_stroke-linecap=%2527square%2527_stroke-miterlimit=%252750%2527_stroke-width=%25272%2527_d=%2527M22_2L2_22%2527/%253E%253Cpath_fill=%2527none%2527_stroke=%2527%2523fff%2527_stroke-linecap=%2527square%2527_stroke-miterlimit=%252750%2527_stroke-width=%25272%2527_d=%2527M2_2l20_20%2527/%253E%253C/svg%253E?");

/***/ }),

/***/ "data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

"use strict";
eval("module.exports = \"data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E\";\n\n//# sourceURL=webpack://webpack_start/data:image/svg+xml;charset=US-ASCII,%253Csvg%2520xmlns%253D%2522http%253A%252F%252Fwww.w3.org%252F2000%252Fsvg%2522%2520width%253D%2522292.4%2522%2520height%253D%2522292.4%2522%253E%253Cpath%2520fill%253D%2522%2523007CB2%2522%2520d%253D%2522M287%252069.4a17.6%252017.6%25200%25200%25200-13-5.4H18.4c-5%25200-9.3%25201.8-12.9%25205.4A17.6%252017.6%25200%25200%25200%25200%252082.2c0%25205%25201.8%25209.3%25205.4%252012.9l128%2520127.9c3.6%25203.6%25207.8%25205.4%252012.8%25205.4s9.2-1.8%252012.8-5.4L287%252095c3.5-3.5%25205.4-7.8%25205.4-12.8%25200-5-1.9-9.2-5.5-12.8z%2522%252F%253E%253C%252Fsvg%253E?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			if (cachedModule.error !== undefined) throw cachedModule.error;
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		try {
/******/ 			var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 			__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 			module = execOptions.module;
/******/ 			execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 		} catch(e) {
/******/ 			module.error = e;
/******/ 			throw e;
/******/ 		}
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("da2d19ce57d742a38636")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "webpack_start:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises;
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		// eslint-disable-next-line no-unused-vars
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId) {
/******/ 				return trackBlockingPromise(require.e(chunkId));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				//inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results);
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 					blockingPromises.push(promise);
/******/ 					waitForBlockingPromises(function () {
/******/ 						return setStatus("ready");
/******/ 					});
/******/ 					return promise;
/******/ 				case "prepare":
/******/ 					blockingPromises.push(promise);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises.length === 0) return fn();
/******/ 			var blocker = blockingPromises;
/******/ 			blockingPromises = [];
/******/ 			return Promise.all(blocker).then(function () {
/******/ 				return waitForBlockingPromises(fn);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle");
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						blockingPromises = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							},
/******/ 							[])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								} else {
/******/ 									return setStatus("ready").then(function () {
/******/ 										return updatedModules;
/******/ 									});
/******/ 								}
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error("apply() is only allowed in ready status");
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 			results.forEach(function (result) {
/******/ 				if (result.apply) {
/******/ 					var modules = result.apply(reportError);
/******/ 					if (modules) {
/******/ 						for (var i = 0; i < modules.length; i++) {
/******/ 							outdatedModules.push(modules[i]);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 			});
/******/ 		
/******/ 			return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 				// handle errors in accept handlers and self accepted module load
/******/ 				if (error) {
/******/ 					return setStatus("fail").then(function () {
/******/ 						throw error;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				if (queuedInvalidatedModules) {
/******/ 					return internalApply(options).then(function (list) {
/******/ 						outdatedModules.forEach(function (moduleId) {
/******/ 							if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 						});
/******/ 						return list;
/******/ 					});
/******/ 				}
/******/ 		
/******/ 				return setStatus("idle").then(function () {
/******/ 					return outdatedModules;
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId) {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdatewebpack_start"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					/** @type {TODO} */
/******/ 					var result;
/******/ 					if (newModuleFactory) {
/******/ 						result = getAffectedModuleEffects(moduleId);
/******/ 					} else {
/******/ 						result = {
/******/ 							type: "disposed",
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									try {
/******/ 										callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// Load self accepted modules
/******/ 					for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 						var item = outdatedSelfAcceptedModules[o];
/******/ 						var moduleId = item.module;
/******/ 						try {
/******/ 							item.require(moduleId);
/******/ 						} catch (err) {
/******/ 							if (typeof item.errorHandler === "function") {
/******/ 								try {
/******/ 									item.errorHandler(err, {
/******/ 										moduleId: moduleId,
/******/ 										module: __webpack_require__.c[moduleId]
/******/ 									});
/******/ 								} catch (err2) {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-error-handler-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err2,
/******/ 											originalError: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err2);
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							} else {
/******/ 								if (options.onErrored) {
/******/ 									options.onErrored({
/******/ 										type: "self-accept-errored",
/******/ 										moduleId: moduleId,
/******/ 										error: err
/******/ 									});
/******/ 								}
/******/ 								if (!options.ignoreErrored) {
/******/ 									reportError(err);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					return outdatedModules;
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						!__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						__webpack_require__.o(installedChunks, chunkId) &&
/******/ 						installedChunks[chunkId] !== undefined
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;