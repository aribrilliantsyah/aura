webpackJsonp([63],{

/***/ 1125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SerialNumberPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_profile_service_profile_service__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_service_loading_service__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_storage__ = __webpack_require__(73);
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
 * Generated class for the SerialNumberPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SerialNumberPage = (function () {
    function SerialNumberPage(navCtrl, navParams, profile, toast, alert, loading, storage, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profile = profile;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.storage = storage;
        this.events = events;
        this.status = true;
        this.serial = '';
        //middleware Auth 
        //this.auth.AuthCheck(this.token) 
    }
    SerialNumberPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('token').then(function (token) {
            if (token != undefined || token != null) {
                _this.token = token;
                console.log('ini w', token);
            }
        });
    };
    SerialNumberPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SerialNumberPage');
    };
    SerialNumberPage.prototype.onKey = function (event) {
        var length_otp = event.target.value.length;
        if (length_otp == 8) {
            this.status = false;
        }
        if (length_otp < 8) {
            this.status = true;
        }
    };
    SerialNumberPage.prototype.verify = function () {
        var _this = this;
        var loader = this.loading.show('loading ....');
        loader.present().then(function () {
            _this.profile.verifyAccount(_this.serial, _this.token).subscribe(function (data) { return _this.verifySuccess(data, loader); }, function (error) { return _this.verifyError(error, loader); }, function () { return _this.saveDone(); });
        });
    };
    SerialNumberPage.prototype.saveDone = function () {
    };
    SerialNumberPage.prototype.verifyError = function (error, l) {
        var _this = this;
        console.log(error);
        l.dismiss().then(function () {
            if (error.status == 422) {
                _this.alert.presentAlert(null, _this.feedbackText(error.json()), 'Close');
            }
            else if (error.status == 400) {
                _this.toast.show(error.json().error);
            }
            else {
                _this.toast.show('Server Error');
            }
        });
    };
    SerialNumberPage.prototype.verifySuccess = function (data, l) {
        var _this = this;
        l.dismiss().then(function () {
            //update
            _this.profile.profileInfo(_this.token).subscribe(function (data) { return _this.events.publish('user:profile', data.data); }, function (error) { return console.log(error); });
            _this.navCtrl.setRoot('HomePage');
        });
    };
    SerialNumberPage.prototype.feedbackText = function (error) {
        var feedbackError = '<ion-list>';
        for (var key in error) {
            for (var i = 0; i < error[key].length; i++) {
                feedbackError += '<ion-item> - ' + error[key][i] + '</ion-item><br><br>';
            }
        }
        feedbackError += '</ion-list>';
        return feedbackError;
    };
    SerialNumberPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-serial-number',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/serial-number/serial-number.html"*/'<!--\n  Generated template for the SerialNumberPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Kode Klinik</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<p>Silahkan kunjungi Klinik ****.Untuk mendapatkan serial number.</p>\n	<p>Masukan 8 digit serial number di bawah ini.</p>\n	<ion-input type="text" placeholder="_ _ _ _ _ _ _ _" max="8" [brmasker]="{mask:\'00000000\', len:8}" (keyup)="onKey($event)" [(ngModel)]="serial"></ion-input>\n	<br>\n	<button class="button" (click)="verify()" [disabled]="status">Aktivasi</button>\n</ion-content>\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/serial-number/serial-number.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_profile_service_profile_service__["a" /* ProfileServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_service_loading_service__["a" /* LoadingServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"]])
    ], SerialNumberPage);
    return SerialNumberPage;
}());

//# sourceMappingURL=serial-number.js.map

/***/ }),

/***/ 851:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SerialNumberPageModule", function() { return SerialNumberPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__serial_number__ = __webpack_require__(1125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(521);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SerialNumberPageModule = (function () {
    function SerialNumberPageModule() {
    }
    SerialNumberPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__serial_number__["a" /* SerialNumberPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__serial_number__["a" /* SerialNumberPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
        })
    ], SerialNumberPageModule);
    return SerialNumberPageModule;
}());

//# sourceMappingURL=serial-number.module.js.map

/***/ })

});
//# sourceMappingURL=63.js.map