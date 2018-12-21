webpackJsonp([68],{

/***/ 1114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListReservasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_reservasi_service_reservasi_service__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_service_loading_service__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_toast_service_toast_service__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_modal_service_modal_service__ = __webpack_require__(121);
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
 * Generated class for the ListReservasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ListReservasiPage = (function () {
    function ListReservasiPage(navCtrl, navParams, auth, loading, toast, modal, reservasiProv, events) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.auth = auth;
        this.loading = loading;
        this.toast = toast;
        this.modal = modal;
        this.reservasiProv = reservasiProv;
        this.events = events;
        this.count = 0;
        this.errorsCount = 0;
        this.undo = function (slidingItem) {
            slidingItem.close();
        };
        this.delete = function (item) {
            var index = _this
                .time
                .indexOf(item);
            // if (index > -1) {     this.list_reservasi.splice(index, 1);
            _this.count = 0;
            var loader = _this
                .loading
                .show('Please Wait ....');
            loader
                .present()
                .then(function () {
                _this
                    .reservasiProv
                    .reservasiCancel(_this.token, item.uid, item.unit_usaha_id)
                    .subscribe(function (data) { return console.log('cancel :', data); }, function (error) { return _this.requestError(loader); }, function () {
                    _this.requestDone(loader),
                        _this.get_list_time(_this.token);
                });
            });
        };
    }
    ListReservasiPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad ListReservasiPage');
        this.navBar.backButtonClick = function (e) {
            // todo something
            _this
                .navCtrl
                .setRoot('SuperTabReservasiPage');
        };
        this.data = this
            .navParams
            .get('data');
        this.token = this
            .navParams
            .get('token');
        this.dateParam = this
            .navParams
            .get('dateParam');
        var feedback = this
            .navParams
            .get('feedback');
        if (feedback) {
            this
                .toast
                .show(feedback);
        }
        if (this.token) {
            this.get_list_time(this.token);
        }
        else {
            this
                .navCtrl
                .setRoot('ReservasiPage');
        }
    };
    ListReservasiPage.prototype.ionViewWillLeave = function () {
        console.log('balik');
        this
            .events
            .publish('back:reservasi', true);
    };
    ListReservasiPage.prototype.get_list_time = function (token) {
        var _this = this;
        var loader = this
            .loading
            .show('Please Wait ....');
        loader
            .present()
            .then(function () {
            _this.count = 0;
            _this
                .reservasiProv
                .get_list_time(token, _this.dateParam)
                .subscribe(function (data) {
                _this.time = data,
                    console.log('wew', data);
            }, function (error) { return _this.requestError(loader); }, function () { return _this.requestDone(loader); });
        });
    };
    ListReservasiPage.prototype.requestDone = function (loader) {
        this.count++;
        if (this.count == 1) {
            loader.dismiss();
        }
    };
    ListReservasiPage.prototype.requestError = function (loader) {
        var _this = this;
        this.errorsCount++;
        console.log(this.errorsCount);
        if (this.errorsCount >= 1) {
            loader
                .dismiss()
                .then(function () {
                _this
                    .toast
                    .show('Server Busy, Please try again');
            });
        }
    };
    ListReservasiPage.prototype.doit = function (reservasi) {
        var _this = this;
        var modal = this
            .modal
            .presentModal('ModalReservasiPage', {
            title: reservasi.user == 1
                ? 'Tambah'
                : 'Ubah',
            data: {
                date: (reservasi.date != undefined
                    ? reservasi.date
                    : ''),
                time: (reservasi.time != undefined
                    ? reservasi.time
                    : ''),
                uid: (reservasi.uid != null
                    ? reservasi.uid
                    : ''),
                unit_usaha_id: (this.data.unit_usaha_id != undefined
                    ? this.data.unit_usaha_id
                    : '')
            },
            token: this.token,
            dateParam: this.dateParam
        });
        modal.onDidDismiss(function (data) {
            console.log('phew', data);
            _this.get_list_time(data.token);
            _this
                .toast
                .show(data.feedback);
        });
        modal.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Navbar"])
    ], ListReservasiPage.prototype, "navBar", void 0);
    ListReservasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({ selector: 'page-list-reservasi',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/list-reservasi/list-reservasi.html"*/'<ion-header>\n\n  <ion-navbar box-shadow>\n    <ion-title>List Reservasi</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <!--Theme Swipe To Dismiss - Small item + header-->\n    <ion-grid no-padding *ngIf="time != undefined && time.length > 0 else second">\n      <ion-row *ngIf="time != null">\n        <ion-col col-12>\n          <!-- Content -->\n          <ion-list no-margin padding>\n            <ion-item-sliding *ngFor="let t of time" #slidingItem>\n              <ion-item [ngClass]="{\'status_1\': t.user == 1}" (click)="doit(t)">\n                <!-- Title -->\n                <span></span>\n                <h2 item-title style="margin-top: 5px">{{t.time}}</h2>\n                <!-- Subtitle -->\n                <h3 item-subtitle class="subtitle">{{t.pasien}} Pasien Lainnya</h3>\n              </ion-item>\n              <ion-item-options *ngIf="t.user == 1">\n                <!-- Button -->\n                <button ion-button text-capitalize (click)="delete(t)" *ngIf="t.user == 1">\n                  cancel\n                </button>\n              </ion-item-options>\n            </ion-item-sliding>\n          </ion-list>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-content>\n\n<ng-template #second>\n    \n</ng-template>\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/list-reservasi/list-reservasi.html"*/ }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_service_loading_service__["a" /* LoadingServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_modal_service_modal_service__["a" /* ModalServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_reservasi_service_reservasi_service__["a" /* ReservasiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], ListReservasiPage);
    return ListReservasiPage;
}());

//# sourceMappingURL=list-reservasi.js.map

/***/ }),

/***/ 842:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListReservasiPageModule", function() { return ListReservasiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__list_reservasi__ = __webpack_require__(1114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ListReservasiPageModule = (function () {
    function ListReservasiPageModule() {
    }
    ListReservasiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__list_reservasi__["a" /* ListReservasiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__list_reservasi__["a" /* ListReservasiPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */]
            ],
        })
    ], ListReservasiPageModule);
    return ListReservasiPageModule;
}());

//# sourceMappingURL=list-reservasi.module.js.map

/***/ })

});
//# sourceMappingURL=68.js.map