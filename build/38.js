webpackJsonp([38,129],{

/***/ 1011:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FullScreenGallery; });
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


var FullScreenGallery = (function () {
    function FullScreenGallery(navCtrl, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.isLocked = false;
        this.onEvent = function (event, item, e) {
            if (e) {
                e.stopPropagation();
            }
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
        this.onDoubleClick = function (e, slides) {
            _this.isLocked = !_this.isLocked;
            slides.lockSwipes(_this.isLocked);
        };
        this.sliderOptions = {
            pager: true
        };
    }
    FullScreenGallery.prototype.ionViewDidLoad = function () {
        this.sliderOptions = {
            pager: true,
            loop: true,
            zoom: true,
            initialSlide: this.data.index
        };
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FullScreenGallery.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], FullScreenGallery.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('slider'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Slides"])
    ], FullScreenGallery.prototype, "slider", void 0);
    FullScreenGallery = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'full-screen-gallery',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/components/full-screen-gallery/full-screen-gallery.html"*/'<!--Screen Gallery-->\n\n<ion-slides #slider pager="true" zoom="true" [initialSlide]="data.index">\n\n    <ion-slide *ngFor="let item of data.items;">\n\n        <img [src]="item.image" />\n\n    </ion-slide>\n\n</ion-slides>'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/components/full-screen-gallery/full-screen-gallery.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], FullScreenGallery);
    return FullScreenGallery;
}());

//# sourceMappingURL=full-screen-gallery.js.map

/***/ }),

/***/ 1092:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPageFullScreenGallery; });
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


var ItemDetailsPageFullScreenGallery = (function () {
    function ItemDetailsPageFullScreenGallery(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.params = {};
        var index = navParams.get('index');
        this.params = { data: {} };
        if (navParams.get('group')) {
            this.params.data.items = navParams.get('group');
            this.params.data.fullscreen = "FullScreenGallery";
            this.params.data.index = index;
        }
        else {
            navCtrl.setRoot("HomePage");
        }
    }
    ItemDetailsPageFullScreenGallery = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/item-details-full-screen-gallery/item-details-full-screen-gallery.html"*/'<!--Full gallery component-->\n\n<ion-header>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>Images</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    <full-screen-gallery [data]="params.data"></full-screen-gallery>\n\n</ion-content>'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/item-details-full-screen-gallery/item-details-full-screen-gallery.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ItemDetailsPageFullScreenGallery);
    return ItemDetailsPageFullScreenGallery;
}());

//# sourceMappingURL=item-details-full-screen-gallery.js.map

/***/ }),

/***/ 745:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FullScreenGalleryModule", function() { return FullScreenGalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__full_screen_gallery__ = __webpack_require__(1011);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var FullScreenGalleryModule = (function () {
    function FullScreenGalleryModule() {
    }
    FullScreenGalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__full_screen_gallery__["a" /* FullScreenGallery */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__full_screen_gallery__["a" /* FullScreenGallery */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__full_screen_gallery__["a" /* FullScreenGallery */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], FullScreenGalleryModule);
    return FullScreenGalleryModule;
}());

//# sourceMappingURL=full-screen-gallery.module.js.map

/***/ }),

/***/ 820:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageFullScreenGalleryModule", function() { return ItemDetailsPageFullScreenGalleryModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_full_screen_gallery__ = __webpack_require__(1092);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_full_screen_gallery_full_screen_gallery_module__ = __webpack_require__(745);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ItemDetailsPageFullScreenGalleryModule = (function () {
    function ItemDetailsPageFullScreenGalleryModule() {
    }
    ItemDetailsPageFullScreenGalleryModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_details_full_screen_gallery__["a" /* ItemDetailsPageFullScreenGallery */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__item_details_full_screen_gallery__["a" /* ItemDetailsPageFullScreenGallery */]),
                __WEBPACK_IMPORTED_MODULE_3__components_full_screen_gallery_full_screen_gallery_module__["FullScreenGalleryModule"]
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__item_details_full_screen_gallery__["a" /* ItemDetailsPageFullScreenGallery */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsPageFullScreenGalleryModule);
    return ItemDetailsPageFullScreenGalleryModule;
}());

//# sourceMappingURL=item-details-full-screen-gallery.module.js.map

/***/ })

});
//# sourceMappingURL=38.js.map