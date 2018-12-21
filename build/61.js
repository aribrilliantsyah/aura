webpackJsonp([61],{

/***/ 1119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpVerificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_service_register_service__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_service_loading_service__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__ = __webpack_require__(519);
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
 * Generated class for the OtpVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OtpVerificationPage = (function () {
    function OtpVerificationPage(navCtrl, navParams, registerService, toast, alert, loading, viewCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registerService = registerService;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.viewCtrl = viewCtrl;
        this.otp = '';
        this.status = true;
    }
    OtpVerificationPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad OtpVerificationPage');
        this.viewCtrl.showBackButton(false);
    };
    OtpVerificationPage.prototype.verify = function () {
        var _this = this;
        var loader = this.loading.show('loading ....');
        loader.present().then(function () {
            _this.registerService.verificationOtp(_this.otp).subscribe(function (data) { return _this.verifySuccess(data, loader); }, function (error) { return _this.verifyError(error, loader); }, function () { return _this.saveDone(); });
        });
    };
    OtpVerificationPage.prototype.saveDone = function () {
    };
    OtpVerificationPage.prototype.verifyError = function (error, l) {
        var _this = this;
        console.log(error);
        l.dismiss().then(function () {
            if (error.status == 422) {
                _this.alert.presentAlert(null, _this.feedbackText(error.json()), 'Close');
            }
            else if (error.status == 400) {
                _this.alert.presentAlert(null, JSON.parse(error._body).error, 'Close');
            }
            else {
                _this.toast.show('Server Error');
            }
        });
    };
    OtpVerificationPage.prototype.verifySuccess = function (data, l) {
        var _this = this;
        l.dismiss().then(function () {
            _this.navCtrl.setRoot('LoginPage');
        });
    };
    OtpVerificationPage.prototype.feedbackText = function (error) {
        var feedbackError = '<ion-list>';
        for (var key in error) {
            for (var i = 0; i < error[key].length; i++) {
                feedbackError += '<ion-item> - ' + error[key][i] + '</ion-item><br><br>';
            }
        }
        feedbackError += '</ion-list>';
        return feedbackError;
    };
    OtpVerificationPage.prototype.onKey = function (event) {
        console.log('event', event.target.value.replace(/\D/g, '').length);
        var length_otp = event.target.value.replace(/\D/g, '').length;
        if (length_otp == 5) {
            this.status = false;
        }
        if (length_otp < 5) {
            this.status = true;
        }
    };
    OtpVerificationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-otp-verification',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/otp-verification/otp-verification.html"*/'<!--\n  Generated template for the OtpVerificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>OTP Verification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n	<p>Tunggu sms yg berisi kode , lalu masukan kode otp yang berjumlah 5  digit.</p>\n	<ion-input type="text" placeholder="0-0-0-0-0" [brmasker]="{mask:\'0-0-0-0-0\', len:9, type:\'num\'}" [(ngModel)]="otp" (keyup)="onKey($event)"></ion-input>\n	<br>\n	<button class="button" (click)="verify()" [disabled]="status">Verifikasi</button>\n</ion-content>\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/otp-verification/otp-verification.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_register_service_register_service__["a" /* RegisterServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_service_loading_service__["a" /* LoadingServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"]])
    ], OtpVerificationPage);
    return OtpVerificationPage;
}());

//# sourceMappingURL=otp-verification.js.map

/***/ }),

/***/ 1120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NumberOnlyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NumberOnlyDirective = (function () {
    function NumberOnlyDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^-?[0-9]+(\.[0-9]*){0,1}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-'];
    }
    NumberOnlyDirective.prototype.onKeyDown = function (event) {
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [KeyboardEvent]),
        __metadata("design:returntype", void 0)
    ], NumberOnlyDirective.prototype, "onKeyDown", null);
    NumberOnlyDirective = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[myNumberOnly]'
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], NumberOnlyDirective);
    return NumberOnlyDirective;
}());

//# sourceMappingURL=number.directive.js.map

/***/ }),

/***/ 846:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpVerificationPageModule", function() { return OtpVerificationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__otp_verification__ = __webpack_require__(1119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__directives_number_directive__ = __webpack_require__(1120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_brmasker_ionic_3__ = __webpack_require__(521);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OtpVerificationPageModule = (function () {
    function OtpVerificationPageModule() {
    }
    OtpVerificationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__otp_verification__["a" /* OtpVerificationPage */],
                __WEBPACK_IMPORTED_MODULE_3__directives_number_directive__["a" /* NumberOnlyDirective */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__otp_verification__["a" /* OtpVerificationPage */]),
                __WEBPACK_IMPORTED_MODULE_4_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
        })
    ], OtpVerificationPageModule);
    return OtpVerificationPageModule;
}());

//# sourceMappingURL=otp-verification.module.js.map

/***/ })

});
//# sourceMappingURL=61.js.map