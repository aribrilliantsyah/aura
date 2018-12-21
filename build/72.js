webpackJsonp([72],{

/***/ 1080:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailTransaksiPage; });
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
 * Generated class for the DetailTransaksiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailTransaksiPage = (function () {
    function DetailTransaksiPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    DetailTransaksiPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DetailTransaksiPage');
    };
    DetailTransaksiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-detail-transaksi',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/detail-transaksi/detail-transaksi.html"*/'<!--\n  Generated template for the DetailTransaksiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar box-shadow>\n    <ion-title>Detail Transaksi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n	<ion-item-divider text-capitalize no-margin no-lines header-title ion-affix>\n		<span float-left><h6>Informasi Transaksi</h6></span><span float-right></span>\n	</ion-item-divider>\n\n	<ion-list>\n	  <ion-item no-lines style="margin-bottom: 11px">\n\n		<ion-card padding style="border-radius:5px;margin-bottom:3px;">\n		    <!-- Title -->\n		    <h2 item-title>TR.008.009.001</h2>\n		    <!-- Subtitle -->\n		    <h3 item-subtitle>Dr.Juliansyah</h3>\n		    <!-- Details Item-->\n		    <span span-medium style="margin-top:15px" float-right>08-08-2018 18:09</span>\n		    <ion-badge color="danger" float-left style="margin-top:10px">Done</ion-badge>\n		</ion-card>\n	  </ion-item>\n	</ion-list>\n\n	<ion-item-divider text-capitalize no-margin no-lines header-title ion-affix>\n		<span float-left><h6>Detail Transaksi</h6></span><span float-right></span>\n	</ion-item-divider>\n\n	<ion-list>\n	  <ion-item no-lines style="margin-bottom: 11px" *ngFor="let number of [0,1,2,3,4]">\n\n		<ion-card padding style="border-radius:5px;margin-bottom:3px;">\n		    <!-- Title -->\n		    <h2 item-title style="margin-bottom: 5px;">Perawataan</h2>\n		    <h6 ion-text span-small style="margin-bottom: 5px;">Jumlah : 3 </h6>\n		    <!-- Details Item-->\n		    <h3 ion-text class="price" style="margin-bottom: 5px;">Total : {{ 10000000 | currency:\'Rp.\':true:\'1.0-0\'}}</h3>\n		</ion-card>\n	  </ion-item>\n	</ion-list>\n\n	<ion-item-divider text-capitalize no-margin no-lines header-title ion-affix>\n		<span float-left><h6>Informasi Pembayaran</h6></span><span float-right></span>\n	</ion-item-divider>\n\n	<ion-list>\n	  <ion-item no-lines style="margin-bottom: 11px">\n\n		<ion-card padding style="border-radius:5px;margin-bottom:3px;">\n		    <h3 item-title style="margin-bottom: 5px;">Status Pembayaran</h3>\n		    <h6 item-subtitle style="margin-bottom: 10px;"> Done</h6>\n\n		    <h3 item-title style="margin-bottom: 5px;">Total Pembayaran</h3>\n		    <h6 item-subtitle> {{ 50000000 | currency:\'Rp.\':true:\'1.0-0\'}} </h6>\n\n		</ion-card>\n	  </ion-item>\n	</ion-list>\n</ion-content>\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/detail-transaksi/detail-transaksi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], DetailTransaksiPage);
    return DetailTransaksiPage;
}());

//# sourceMappingURL=detail-transaksi.js.map

/***/ }),

/***/ 809:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailTransaksiPageModule", function() { return DetailTransaksiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detail_transaksi__ = __webpack_require__(1080);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DetailTransaksiPageModule = (function () {
    function DetailTransaksiPageModule() {
    }
    DetailTransaksiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__detail_transaksi__["a" /* DetailTransaksiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__detail_transaksi__["a" /* DetailTransaksiPage */]),
            ],
        })
    ], DetailTransaksiPageModule);
    return DetailTransaksiPageModule;
}());

//# sourceMappingURL=detail-transaksi.module.js.map

/***/ })

});
//# sourceMappingURL=72.js.map