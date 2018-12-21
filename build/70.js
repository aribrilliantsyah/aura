webpackJsonp([70],{

/***/ 1110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPageTextView; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ItemDetailsPageTextView = (function () {
    function ItemDetailsPageTextView(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.params = {};
        // If we navigated to this page, we will have an item available as a nav param
        this.page = navParams.get('page');
        this.service = navParams.get('service');
        if (this.service) {
            this.params = this.service.prepareParams(this.page, navCtrl);
        }
        else {
            navCtrl.setRoot("HomePage");
        }
    }
    ItemDetailsPageTextView = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/item-details-text-view/item-details-text-view.html"*/'<!--Text views component-->\n\n<ion-header>\n\n  <ion-navbar box-shadow>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>ALL</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<!--- Content text exapmles  -->\n\n<ion-content padding class="default-background">\n\n  <ion-list>\n\n    <div class="title-components">Typography</div>\n\n    <h1 class="example-h1">This is example of H1 title.</h1>\n\n    <h2 class="example-h2">And this is example of H2 title/subtitle.</h2>\n\n    <h3 class="example-h3">Example of H3 subtitle is also here.</h3>\n\n    <h4 class="example-h4">And H4 subtitle example is here.</h4>\n\n    <h5 class="example-h5">H5 subtitle is like this!</h5>\n\n    <h6 class="example-h6">And H6 at the end usualy same as H6.</h6>\n\n    <p class="example-p">This is example of paragraph text.<br> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex\n\n      ea commodo consequat.</p>\n\n\n\n    <!--- SPAN EXAMPLES  -->\n\n    <div class="title-components" text-center>Span examples</div>\n\n    <div text-center><span class="compomets">Small span</span></div>\n\n    <div span-small text-center>4.84 (35 reviews)</div>\n\n    <div padding-top text-center><span class="compomets">Medium span</span></div>\n\n    <div span-medium ion-text text-center>Detail</div>\n\n    <div padding-top text-center><span class="compomets">Large span</span></div>\n\n    <div span-large text-center>$123.99</div>\n\n\n\n    <!--- BADGE EXAMPLE  -->\n\n    <div class="title-components" text-center>Badge examples</div>\n\n    <div text-center><span class="compomets">Badge light</span></div>\n\n    <div text-center><ion-badge badge-light>$3.99</ion-badge></div>\n\n    <div text-center><span class="compomets">Badge clear</span></div>\n\n    <div text-center><ion-badge badge-clear>$33.99</ion-badge></div>\n\n\n\n    <!--- BUTTON EXAMPLE  -->\n\n    <div class="title-components" text-center>Button examples</div>\n\n    <div class="block-insert" text-center>\n\n      <span class="compomets">Default</span>\n\n      <button default-button ion-button>BUTTON</button>\n\n    </div>\n\n    <div class="block-insert" text-center>\n\n      <span class="compomets">Flat</span>\n\n      <button button-clear clear ion-button>BUTTON</button>\n\n    </div>\n\n\n\n    <div class="block-insert" text-center>\n\n      <span class="compomets">Outline</span>\n\n      <button button-clear-outline outline round ion-button>BUTTON</button>\n\n    </div>\n\n\n\n    <div class="block-insert" text-center>\n\n      <span class="compomets">Follow</span>\n\n      <button button-follow ion-button>Follow</button>\n\n    </div>\n\n\n\n    <div class="block-insert" text-center>\n\n      <span class="compomets">Button Icon</span>\n\n        <button ion-button button-icon icon-start>\n\n          <ion-icon icon-small name="arrow-dropright-circle"></ion-icon>\n\n      Watch Now\n\n    </button >\n\n    </div>\n\n\n\n    <div class="block-insert" text-center>\n\n      <span class="compomets">Button Action Shit</span>\n\n      <button button-action-shit color="primary" ion-button><ion-icon name="more"></ion-icon></button>\n\n    </div>\n\n\n\n    <!--- ICON EXAMPLES  -->\n\n    <div class="title-components" text-center>Icons examples</div>\n\n\n\n    <div text-center>\n\n      <span class="compomets">Small</span>\n\n      <ion-icon icon-small>\n\n        <i class=" icon icon-heart"></i>\n\n      </ion-icon>\n\n\n\n      <ion-icon icon-small>\n\n        <i class=" icon-share-variant"></i>\n\n      </ion-icon>\n\n    </div>\n\n\n\n    <div text-center>\n\n      <span class="compomets">Medium</span>\n\n      <ion-icon icon-medium color=\'primary\'>\n\n        <i class=" icon icon-thumb-up"></i>\n\n      </ion-icon>\n\n\n\n      <ion-icon icon-medium color=\'primary\'>\n\n        <i class=" icon icon-heart"></i>\n\n      </ion-icon>\n\n\n\n      <ion-icon icon-medium color=\'primary\'>\n\n        <i class=" icon-share-variant"></i>\n\n      </ion-icon>\n\n    </div>\n\n\n\n    <div text-center>\n\n      <span class="compomets">Large</span>\n\n      <ion-icon icon-large color=\'primary\'>\n\n        <i class=" icon icon-thumb-up"></i>\n\n      </ion-icon>\n\n\n\n      <ion-icon icon-large color=\'primary\'>\n\n        <i class=" icon icon-heart"></i>\n\n      </ion-icon>\n\n\n\n      <ion-icon icon-large color=\'primary\'>\n\n        <i class=" icon-share-variant"></i>\n\n      </ion-icon>\n\n    </div>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/item-details-text-view/item-details-text-view.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ItemDetailsPageTextView);
    return ItemDetailsPageTextView;
}());

//# sourceMappingURL=item-details-text-view.js.map

/***/ }),

/***/ 838:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageTextViewModule", function() { return ItemDetailsPageTextViewModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_text_view__ = __webpack_require__(1110);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemDetailsPageTextViewModule = (function () {
    function ItemDetailsPageTextViewModule() {
    }
    ItemDetailsPageTextViewModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_details_text_view__["a" /* ItemDetailsPageTextView */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__item_details_text_view__["a" /* ItemDetailsPageTextView */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsPageTextViewModule);
    return ItemDetailsPageTextViewModule;
}());

//# sourceMappingURL=item-details-text-view.module.js.map

/***/ })

});
//# sourceMappingURL=70.js.map