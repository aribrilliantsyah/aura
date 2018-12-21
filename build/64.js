webpackJsonp([64],{

/***/ 1123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_register_service_register_service__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_loading_service_loading_service__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_master_service_master_service__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_modal_service_modal_service__ = __webpack_require__(121);
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
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, registerService, toast, alert, loading, modal, master) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.registerService = registerService;
        this.toast = toast;
        this.alert = alert;
        this.loading = loading;
        this.modal = modal;
        this.master = master;
        this.register = {
            nama: '',
            no_hp: '',
            email: '',
            title: '',
            jenis_kelamin: '',
            password: '',
            password_confirmation: '',
            identitas_id: '',
            no_identitas: '',
            tgl_lahir: '',
            tempat_lahir_id: '',
        };
        this.tempat_lahir = {
            id: null,
            nama: null,
        };
        this.otp = false;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('ionViewDidLoad RegisterPage');
        this.master.get_title_2().subscribe(function (data) { return _this.list_title = data.data; }, function (error) { return console.log(error); }, function () { return console.log('done'); });
        this.master.get_identitas_2().subscribe(function (data) { return _this.list_identitas = data.data; }, function (error) { return console.log(error); }, function () { return console.log('done'); });
        this.master.get_tempat_2().subscribe(function (data) { return _this.list_tempat_lahir = data.data; }, function (error) { return console.log(error); }, function () { return console.log('done'); });
    };
    RegisterPage.prototype.onRegis = function () {
        var _this = this;
        console.log('data', this.register);
        var loader = this.loading.show('loading ....');
        loader.present().then(function () {
            _this.registerService.register(_this.register).subscribe(function (data) { return _this.saveSuccess(data, loader); }, function (error) { return _this.saveError(error, loader); }, function () { return _this.saveDone(); });
        });
    };
    RegisterPage.prototype.saveDone = function () {
    };
    RegisterPage.prototype.saveError = function (error, l) {
        var _this = this;
        l.dismiss().then(function () {
            if (error.status == 422) {
                _this.alert.presentAlert(null, _this.feedbackText(error.json()), 'Close');
            }
            else if (error.status == 400) {
                _this.alert.presentAlert(null, 'Bad Request', 'Close');
            }
            else {
                _this.toast.show('Server Error');
            }
        });
    };
    RegisterPage.prototype.saveSuccess = function (data, l) {
        var _this = this;
        l.dismiss().then(function () {
            _this.navCtrl.push('OtpVerificationPage');
        });
    };
    RegisterPage.prototype.feedbackText = function (error) {
        var feedbackError = '<ul class="ul-item">';
        for (var key in error) {
            for (var i = 0; i < error[key].length; i++) {
                feedbackError += '<li class="li-item">' + error[key][i] + '</li>';
            }
        }
        feedbackError += '</ul>';
        return feedbackError;
    };
    RegisterPage.prototype.open = function () {
        // let modal = this.modal.presentModal('OtpVerificationPage','');
        // modal.present();
        this.navCtrl.setRoot('LoginPage');
    };
    RegisterPage.prototype.changeTempatLahir = function (event) {
        console.log(event);
        this.register.tempat_lahir_id = event.value.id;
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-register',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content background-size>\n  <ion-grid no-padding>\n    <ion-row padding-horizontal>\n      <ion-col align-self-start col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <!---Input field username-->\n        <ion-item margin-top transparent *ngIf="list_title">\n          <ion-label stacked>Title</ion-label>\n          <ion-select [(ngModel)]="register.title">\n            <ion-option *ngFor="let title of list_title" value="{{title.id}}">{{title.nama}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item margin-top transparent>\n          <ion-label stacked>Nama</ion-label>\n          <ion-input required type="text" placeholder="Nama" [(ngModel)]="register.nama"></ion-input>\n        </ion-item>\n        <ion-item>\n          <label style="font-size: 10px;color: #fb5135 !important">Jenis Kelamin</label>\n          <ion-row>\n            <ion-col>\n              <label>                \n                <input type="radio" name="gender" value="1" [(ngModel)]="register.jenis_kelamin"/>\n                <img src="https://www.shareicon.net/download/2016/05/26/771187_man_512x512.png" style="margin:auto">\n              </label>\n            </ion-col>\n            <ion-col>\n              <label>                \n                <input type="radio" name="gender" value="0" [(ngModel)]="register.jenis_kelamin"/>\n                <img src="https://www.shareicon.net/download/2016/05/26/771201_people_512x512.png" style="margin:auto">\n              </label>\n            </ion-col>\n          </ion-row>\n        </ion-item>\n        <ion-item margin-top transparent *ngIf="list_tempat_lahir">\n            <ion-label stacked>Tempat Lahir</ion-label>\n            <select-searchable\n                item-content\n                [(ngModel)]="tempat_lahir"\n                [items]="list_tempat_lahir"\n                itemValueField="id"\n                itemTextField="nama"\n                [canSearch]="true"\n                (onChange)="changeTempatLahir($event)">\n            </select-searchable>\n        </ion-item>\n        <ion-item transparent>\n          <ion-label stacked>Tanggal Lahir</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="register.tgl_lahir"></ion-datetime>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n         <ion-item margin-top transparent *ngIf="list_title">\n          <ion-label stacked>Identitas</ion-label>\n          <ion-select [(ngModel)]="register.identitas_id">\n            <ion-option *ngFor="let identitas of list_identitas" value="{{identitas.id}}">{{identitas.nama}}</ion-option>\n          </ion-select>\n        </ion-item>\n        <ion-item margin-top transparent>\n          <ion-label stacked>No.Identitas</ion-label>\n          <ion-input required type="text" placeholder="No.Identitas" [(ngModel)]="register.no_identitas" [brmasker]="{type:\'num\', userCaracters:false}"></ion-input>\n        </ion-item>\n        <ion-item margin-top transparent>\n          <ion-label stacked>No.Hp</ion-label>\n          <ion-input type="text" placeholder="No.Hp" [(ngModel)]="register.no_hp" [brmasker]="{mask:\'000-0000-0000\', len:13, type:\'num\', userCaracters:false}" style="border-right: 2px solid red;"></ion-input>\n          <button item-right id="id_no">+62</button>\n        </ion-item>\n        <ion-item margin-top transparent>\n          <ion-label stacked>Email</ion-label>\n          <ion-input required type="text" placeholder="name@example.com" [(ngModel)]="register.email"></ion-input>\n        </ion-item>\n        <ion-item margin-top transparent>\n          <ion-label stacked>Password</ion-label>\n          <ion-input required type="password" placeholder="Password" [(ngModel)]="register.password"></ion-input>\n        </ion-item>\n        <ion-item margin-top transparent>\n          <ion-label stacked>Password Repeat</ion-label>\n          <ion-input required type="password" placeholder="Password Repeat" [(ngModel)]="register.password_confirmation"></ion-input>\n        </ion-item>\n      </ion-col>\n      <!---Share Section-->\n      <ion-col align-self-end bottom-form col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        <!---Login button-->\n        <button ion-button default-button full text-uppercase box-shadow (click)="onRegis()">Register</button>\n        <!---Facebook button-->\n        <div description text-center>\n          <p>Do have account? <a text-capitalize (click)="open()">Login</a></p>\n        </div>\n      </ion-col>\n      <!---End Share Section-->\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_register_service_register_service__["a" /* RegisterServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_loading_service_loading_service__["a" /* LoadingServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_modal_service_modal_service__["a" /* ModalServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_master_service_master_service__["a" /* MasterServiceProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 849:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterPageModule", function() { return RegisterPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__register__ = __webpack_require__(1123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_select_searchable__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var RegisterPageModule = (function () {
    function RegisterPageModule() {
    }
    RegisterPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__register__["a" /* RegisterPage */]),
                __WEBPACK_IMPORTED_MODULE_3_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], RegisterPageModule);
    return RegisterPageModule;
}());

//# sourceMappingURL=register.module.js.map

/***/ })

});
//# sourceMappingURL=64.js.map