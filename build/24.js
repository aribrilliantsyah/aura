webpackJsonp([24,110,111,112],{

/***/ 1031:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout1; });
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


var SwipeToDismissLayout1 = (function () {
    function SwipeToDismissLayout1() {
        var _this = this;
        this.undo = function (slidingItem) {
            slidingItem.close();
        };
        this.delete = function (item) {
            var index = _this.data.items.indexOf(item);
            if (index > -1) {
                _this.data.items.splice(index, 1);
            }
        };
    }
    SwipeToDismissLayout1.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout1.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], SwipeToDismissLayout1.prototype, "content", void 0);
    SwipeToDismissLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'swipe-to-dismiss-layout-1',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss.html"*/'<!--Theme Swipe To Dismiss - Small item + header-->\n\n<ion-content>\n\n  <ion-grid no-padding>\n\n    <ion-row *ngIf="data != null">\n\n      <ion-col col-12>\n\n        <!--Header Small item + header-->\n\n        <ion-list-header no-margin header-section no-lines box-shadow padding-left>\n\n          <!--Header Big Title-->\n\n          <h1 header-title text-capitalize>{{data.header}}</h1>\n\n          <ion-item no-lines>\n\n            <!-- Title -->\n\n            <h2 item-title text-capitalize margin-top text-wrap>{{data.title}}</h2>\n\n            <!-- Subtitle -->\n\n            <p item-subtitle no-margin text-wrap>{{data.subtitle}}</p>\n\n            <button item-end ion-button default-button (click)="onEvent(\'onButtonGetClick\', \'\', $event)">{{data.button}}</button>\n\n          </ion-item>\n\n        </ion-list-header>\n\n        <!-- Content -->\n\n        <ion-list no-margin>\n\n          <ion-item-sliding *ngFor="let item of data.items" #slidingItem>\n\n            <ion-item border no-lines (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n              <!-- Title -->\n\n              <h2 item-title>{{item.title}}</h2>\n\n              <!-- Subtitle -->\n\n              <h3 item-subtitle>{{item.subtitle}}</h3>\n\n              <!-- Details Item-->\n\n              <span span-medium>{{item.time}}</span>\n\n            </ion-item>\n\n            <!--Action Button-->\n\n            <ion-item-options text-center no-lines>\n\n              <button no-padding ion-button button-icon transparent>\n\n                <ion-icon no-padding icon-large name="{{item.icon}}"></ion-icon>\n\n              </button >\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwipeToDismissLayout1);
    return SwipeToDismissLayout1;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-1.js.map

/***/ }),

/***/ 1032:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout2; });
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


var SwipeToDismissLayout2 = (function () {
    function SwipeToDismissLayout2() {
        var _this = this;
        this.undo = function (slidingItem) {
            slidingItem.close();
        };
        this.delete = function (item) {
            var index = _this.data.items.indexOf(item);
            if (index > -1) {
                _this.data.items.splice(index, 1);
            }
        };
    }
    SwipeToDismissLayout2.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout2.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout2.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], SwipeToDismissLayout2.prototype, "content", void 0);
    SwipeToDismissLayout2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'swipe-to-dismiss-layout-2',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss.html"*/'<!-- Themes Swipe To Dismiss - Products + CTA -->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <ion-col col-12>\n\n        <!-- Header top Swipe To Dismiss Products + CTA -->\n\n        <ion-list-header box-shadow no-lines header-section no-margin>\n\n          <!-- Big Title Swipe To Dismiss Products + CTA -->\n\n          <h1 header-title text-capitalize>{{data.header}}</h1>\n\n        </ion-list-header>\n\n        <!-- Content -->\n\n        <ion-list no-margin>\n\n          <ion-item-sliding *ngFor="let item of data.items" #slidingItem>\n\n            <ion-item border no-lines (click)="onEvent(\'onItemClick\', item.title, $event)">\n\n              <!-- Images -->\n\n              <ion-thumbnail item-start>\n\n                <img box-shadow src="{{item.image}}">\n\n              </ion-thumbnail>\n\n              <!-- Title -->\n\n              <h2 item-title>{{item.title}}</h2>\n\n              <!-- Subtitle -->\n\n              <p item-subtitle text-wrap>{{item.subtitle}}</p>\n\n              <!-- Badge -->\n\n              <ion-badge badge-light>{{item.ionBadge}}</ion-badge>\n\n            </ion-item>\n\n            <!--Action Button-->\n\n            <ion-item-options no-lines>\n\n              <!-- Button -->\n\n              <button ion-button text-capitalize (click)="delete(item)">\n\n              {{item.delate}}\n\n            </button>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwipeToDismissLayout2);
    return SwipeToDismissLayout2;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-2.js.map

/***/ }),

/***/ 1033:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SwipeToDismissLayout3; });
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


var SwipeToDismissLayout3 = (function () {
    function SwipeToDismissLayout3() {
        var _this = this;
        this.undo = function (slidingItem) {
            slidingItem.close();
        };
        this.delete = function (item) {
            var index = _this.data.items.indexOf(item);
            if (index > -1) {
                _this.data.items.splice(index, 1);
            }
        };
    }
    SwipeToDismissLayout3.prototype.onEvent = function (event, item, e) {
        if (this.events[event]) {
            this.events[event](item);
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout3.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], SwipeToDismissLayout3.prototype, "events", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], SwipeToDismissLayout3.prototype, "content", void 0);
    SwipeToDismissLayout3 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'swipe-to-dismiss-layout-3',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss.html"*/'<!-- Themes Swipe To Dismiss - Full width image -->\n\n<ion-content>\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row>\n\n      <ion-col col-12 align-self-end>\n\n        <ion-list padding no-margin>\n\n          <ion-item-sliding margin-bottom *ngFor="let item of data.items" #slidingItem>\n\n            <ion-item no-lines background-size (click)="onEvent(\'onItemClick\', item.title, $event)" [ngStyle]="{\'background-image\': \'url(\' + item.image + \')\'}">\n\n              <div title-block>\n\n                <!-- Subtitle -->\n\n                <p card-subtitle>{{item.subtitle}}</p>\n\n                <!-- Title -->\n\n                <h1 card-title text-wrap>{{item.title}}</h1>\n\n              </div>\n\n            </ion-item>\n\n            <!---Action Button-->\n\n            <ion-item-options>\n\n              <button ion-button text-capitalize transparent (click)="delete(item)">\n\n              {{item.delate}}\n\n            </button>\n\n            </ion-item-options>\n\n          </ion-item-sliding>\n\n        </ion-list>\n\n      </ion-col>\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SwipeToDismissLayout3);
    return SwipeToDismissLayout3;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-3.js.map

/***/ }),

/***/ 1108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemDetailsPageSwipeToDismiss; });
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


var ItemDetailsPageSwipeToDismiss = (function () {
    function ItemDetailsPageSwipeToDismiss(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.params = {};
        // If we navigated to this page, we will have an item available as a nav param
        this.page = navParams.get('page');
        this.service = navParams.get('service');
        if (this.service) {
            this.params = this.service.prepareParams(this.page, navCtrl);
            this.params.data = this.service.load(this.page);
        }
        else {
            navCtrl.setRoot("HomePage");
        }
    }
    ItemDetailsPageSwipeToDismiss = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.html"*/'<!--SwipeToDismiss component-->\n\n<ion-header box-shadow>\n\n    <ion-navbar>\n\n        <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n        <ion-title>{{params.title}}</ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n<!--Content-->\n\n\n\n<!--PAGE SWIPE TO DISMISS - Small item + header-->\n\n<swipe-to-dismiss-layout-1 has-header *ngIf="params.swipeToDismissLayout1" [data]="params.data | async" [events]="params.events">\n\n</swipe-to-dismiss-layout-1>\n\n\n\n<!--PAGE SWIPE TO DISMISS - Products + CTA-->\n\n<swipe-to-dismiss-layout-2 has-header *ngIf="params.swipeToDismissLayout2" [data]="params.data | async" [events]="params.events">\n\n</swipe-to-dismiss-layout-2>\n\n\n\n<!--PAGE SWIPE TO DISMISS - Full width image-->\n\n<swipe-to-dismiss-layout-3 has-header *ngIf="params.swipeToDismissLayout3" [data]="params.data | async" [events]="params.events">\n\n</swipe-to-dismiss-layout-3>\n\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ItemDetailsPageSwipeToDismiss);
    return ItemDetailsPageSwipeToDismiss;
}());

//# sourceMappingURL=item-details-swipe-to-dismiss.js.map

/***/ }),

/***/ 765:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDismissLayout1Module", function() { return SwipeToDismissLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__ = __webpack_require__(1031);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwipeToDismissLayout1Module = (function () {
    function SwipeToDismissLayout1Module() {
    }
    SwipeToDismissLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__["a" /* SwipeToDismissLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__["a" /* SwipeToDismissLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_1__["a" /* SwipeToDismissLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SwipeToDismissLayout1Module);
    return SwipeToDismissLayout1Module;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-1.module.js.map

/***/ }),

/***/ 766:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDismissLayout2Module", function() { return SwipeToDismissLayout2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__ = __webpack_require__(1032);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwipeToDismissLayout2Module = (function () {
    function SwipeToDismissLayout2Module() {
    }
    SwipeToDismissLayout2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_2__["a" /* SwipeToDismissLayout2 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SwipeToDismissLayout2Module);
    return SwipeToDismissLayout2Module;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-2.module.js.map

/***/ }),

/***/ 767:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SwipeToDismissLayout3Module", function() { return SwipeToDismissLayout3Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_3__ = __webpack_require__(1033);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SwipeToDismissLayout3Module = (function () {
    function SwipeToDismissLayout3Module() {
    }
    SwipeToDismissLayout3Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_3__["a" /* SwipeToDismissLayout3 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_3__["a" /* SwipeToDismissLayout3 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__swipe_to_dismiss_layout_3__["a" /* SwipeToDismissLayout3 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SwipeToDismissLayout3Module);
    return SwipeToDismissLayout3Module;
}());

//# sourceMappingURL=swipe-to-dismiss-layout-3.module.js.map

/***/ }),

/***/ 836:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemDetailsPageSwipeToDismissModule", function() { return ItemDetailsPageSwipeToDismissModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__item_details_swipe_to_dismiss__ = __webpack_require__(1108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_list_view_swipe_to_dismiss_layout_1_swipe_to_dismiss_layout_1_module__ = __webpack_require__(765);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_list_view_swipe_to_dismiss_layout_2_swipe_to_dismiss_layout_2_module__ = __webpack_require__(766);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_list_view_swipe_to_dismiss_layout_3_swipe_to_dismiss_layout_3_module__ = __webpack_require__(767);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ItemDetailsPageSwipeToDismissModule = (function () {
    function ItemDetailsPageSwipeToDismissModule() {
    }
    ItemDetailsPageSwipeToDismissModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__item_details_swipe_to_dismiss__["a" /* ItemDetailsPageSwipeToDismiss */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__item_details_swipe_to_dismiss__["a" /* ItemDetailsPageSwipeToDismiss */]),
                __WEBPACK_IMPORTED_MODULE_3__components_list_view_swipe_to_dismiss_layout_1_swipe_to_dismiss_layout_1_module__["SwipeToDismissLayout1Module"], __WEBPACK_IMPORTED_MODULE_4__components_list_view_swipe_to_dismiss_layout_2_swipe_to_dismiss_layout_2_module__["SwipeToDismissLayout2Module"], __WEBPACK_IMPORTED_MODULE_5__components_list_view_swipe_to_dismiss_layout_3_swipe_to_dismiss_layout_3_module__["SwipeToDismissLayout3Module"]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemDetailsPageSwipeToDismissModule);
    return ItemDetailsPageSwipeToDismissModule;
}());

//# sourceMappingURL=item-details-swipe-to-dismiss.module.js.map

/***/ })

});
//# sourceMappingURL=24.js.map