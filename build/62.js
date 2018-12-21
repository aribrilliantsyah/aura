webpackJsonp([62],{

/***/ 1126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SuperTabReservasiPage; });
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


/**
 * Generated class for the SuperTabReservasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SuperTabReservasiPage = (function () {
    function SuperTabReservasiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.pages = [
            { pageName: 'ReservasiPage', title: 'Reservation', icon: 'ios-calendar-outline', id: 'reservationTab' },
            { pageName: 'HistoryReservasiPage', title: 'History', icon: 'ios-time-outline', id: 'historyTab' },
        ];
        this.selectedTab = 0;
    }
    SuperTabReservasiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SuperTabReservasiPage');
    };
    SuperTabReservasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-super-tab-reservasi',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/super-tab-reservasi/super-tab-reservasi.html"*/'<ion-header header-ios>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>{{ pages[selectedTab].title }}</ion-title>\n    <!-- notif -->\n    <ion-buttons end>\n      <button ion-button clear icon-only>\n        <ion-icon name="notifications" class="bar-button-notif">\n          <notifications></notifications>\n        </ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <super-tabs tabsPlacement="top" toolbarBackground="white" toolbarColor="light" indicatorColor="light">\n    <super-tab *ngFor="let page of pages" [root]="page.pageName" [icon]="page.icon" [id]="page.id"></super-tab>\n  </super-tabs>\n\n</ion-content>'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/super-tab-reservasi/super-tab-reservasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], SuperTabReservasiPage);
    return SuperTabReservasiPage;
}());

//# sourceMappingURL=super-tab-reservasi.js.map

/***/ }),

/***/ 852:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperTabReservasiPageModule", function() { return SuperTabReservasiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__super_tab_reservasi__ = __webpack_require__(1126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var SuperTabReservasiPageModule = (function () {
    function SuperTabReservasiPageModule() {
    }
    SuperTabReservasiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__super_tab_reservasi__["a" /* SuperTabReservasiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__super_tab_reservasi__["a" /* SuperTabReservasiPage */]),
                __WEBPACK_IMPORTED_MODULE_3_ionic2_super_tabs__["a" /* SuperTabsModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], SuperTabReservasiPageModule);
    return SuperTabReservasiPageModule;
}());

//# sourceMappingURL=super-tab-reservasi.module.js.map

/***/ })

});
//# sourceMappingURL=62.js.map