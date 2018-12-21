webpackJsonp([67],{

/***/ 1117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalReservasiPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_master_service_master_service__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_reservasi_service_reservasi_service__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_service_loading_service__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_toast_service_toast_service__ = __webpack_require__(501);
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
 * Generated class for the ModalReservasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ModalReservasiPage = (function () {
    function ModalReservasiPage(navCtrl, navParams, viewCtrl, master, reservProv, loading, alert, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.viewCtrl = viewCtrl;
        this.master = master;
        this.reservProv = reservProv;
        this.loading = loading;
        this.alert = alert;
        this.toast = toast;
        this.reservasi = {
            id: null,
            uid: null,
            tanggal: null,
            waktu: null,
            no_reservasi: null,
            unit_usaha_id: null,
            unit_usaha: null,
            layanan_id: null,
            layanan: null,
            dokter_id: null,
            dokter: null,
            pasien_id: null,
            pasien: null,
            status: null,
            reminder_1_id: null,
            reminder_2_id: null,
            reminder_1: null,
            reminder_2: null,
            pasien_no_rekam_medis: null,
        };
    }
    ModalReservasiPage.prototype.ionViewWillLoad = function () {
        var _this = this;
        this.data = this.navParams.get('data');
        this.token = this.navParams.get('token');
        this.dateParam = this.navParams.get('dateParam');
        console.log('param', this.data);
        if (this.token) {
            this.master.get_list_unit_usaha(this.token).subscribe(function (data) { return _this.list_unit_usaha = data.data; });
            this.master.get_reminder(this.token).subscribe(function (data) { return _this.list_reminder = data.data; });
        }
        if (this.data.uid) {
            this.reservProv.get_reserv_by_uid(this.token, this.data.uid).subscribe(function (data) {
                console.log('ini', data.data);
                _this.reservasi = data.data,
                    _this.set_clinic(_this.reservasi.unit_usaha_id);
            }, function (error) {
                console.log('error', error);
            }, function () { return console.log('Request Done'); });
        }
        else {
            this.reservasi.uid = (this.data.uid != undefined ? this.data.uid : undefined);
            this.reservasi.tanggal = (this.data.date != undefined ? this.data.date : '');
            this.reservasi.waktu = (this.data.time != undefined ? this.data.time : '');
            this.reservasi.unit_usaha_id = (this.data.unit_usaha_id != undefined ? this.data.unit_usaha_id : '');
        }
    };
    ModalReservasiPage.prototype.save = function () {
        var _this = this;
        var loader = this.loading.show('loading ....');
        loader.present().then(function () {
            _this.reservProv.saveReservasi(_this.reservasi, _this.token, _this.data.uid).subscribe(function (data) { return _this.saveSuccess(data, loader); }, function (error) { return _this.saveError(error, loader); }, function () { return _this.saveDone(); });
        });
    };
    ModalReservasiPage.prototype.saveDone = function () {
    };
    ModalReservasiPage.prototype.saveError = function (error, l) {
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
    ModalReservasiPage.prototype.saveSuccess = function (data, l) {
        var _this = this;
        l.dismiss().then(function () {
            _this.viewCtrl.dismiss({
                data: _this.reservasi,
                token: _this.token,
                dateParam: _this.dateParam,
                feedback: 'Berhasil !!!',
            });
        });
    };
    ModalReservasiPage.prototype.feedbackText = function (error) {
        var feedbackError = '<ion-list>';
        for (var key in error) {
            for (var i = 0; i < error[key].length; i++) {
                feedbackError += '<ion-item> - ' + error[key][i] + '</ion-item><br><br>';
            }
        }
        feedbackError += '</ion-list>';
        return feedbackError;
    };
    ModalReservasiPage.prototype.closeModal = function () {
        this.viewCtrl.dismiss({
            token: this.token,
            dateParam: this.dateParam,
        });
    };
    ModalReservasiPage.prototype.set_clinic = function (id) {
        var _this = this;
        this.master.get_layanan_by_unit_usaha(this.token, id).subscribe(function (data) { return _this.list_layanan = data.data; }, function (error) { return console.log(error); }, function () { return _this.set_layanan(_this.reservasi.layanan_id); });
    };
    ModalReservasiPage.prototype.set_layanan = function (id) {
        var _this = this;
        this.master.get_dokter_by_layanan(this.token, id).subscribe(function (data) { return _this.list_dokter = data.data; }, function (error) { return console.log(error); }, function () { return console.log('Layanan Set.'); });
    };
    ModalReservasiPage.prototype.change_clinic = function (id) {
        var _this = this;
        this.reservasi.layanan_id = null;
        this.reservasi.dokter_id = null;
        this.list_layanan = undefined;
        this.list_dokter = undefined;
        this.master.get_layanan_by_unit_usaha(this.token, id).subscribe(function (data) { return _this.list_layanan = data.data; }, function (error) { return console.log(error); }, function () { return console.log('klinik changed.'); });
    };
    ModalReservasiPage.prototype.change_layanan = function (id) {
        var _this = this;
        this.reservasi.dokter_id = null;
        this.list_dokter = undefined;
        this.master.get_dokter_by_layanan(this.token, id).subscribe(function (data) { return _this.list_dokter = data.data; }, function (error) { return console.log(error); }, function () { return console.log('Layanan changed.'); });
    };
    ModalReservasiPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-modal-reservasi',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/modal-reservasi/modal-reservasi.html"*/'<!--\n  Generated template for the ModalReservasiPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>{{(data != undefined) ? data.title:\'-\'}} Reservasi</ion-title>\n    <ion-buttons end>\n  	  <button ion-button (click)="closeModal()"><ion-icon name="md-close"></ion-icon></button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content background-size>\n\n  <ion-grid>\n    <ion-row padding-horizontal align-items-start>\n      <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n      	<ion-list *ngIf="reservasi != undefined">\n\n					<ion-item transparent no-lines>\n	          <ion-label stacked>Tanggal</ion-label>\n	          <ion-input [(ngModel)]="reservasi.tanggal" readonly="true"></ion-input>\n	        </ion-item>\n\n	        <ion-item transparent no-lines>\n	          <ion-label stacked>Waktu</ion-label>\n	          <ion-input [(ngModel)]="reservasi.waktu" readonly="true"></ion-input>\n	        </ion-item>\n\n	        <ion-item transparent *ngIf="list_unit_usaha != undefined">\n						<ion-label stacked>Klinik</ion-label>\n						<ion-select [(ngModel)]="reservasi.unit_usaha_id" (ionChange)="change_clinic($event)">\n							<ion-option *ngFor="let unit_usaha of list_unit_usaha" value="{{unit_usaha.id}}">{{unit_usaha.nama}}</ion-option>\n						</ion-select>\n						<ion-label error-field no-margin></ion-label>\n					</ion-item>\n\n					<ion-item transparent>\n						<ion-label stacked>Layanan</ion-label>\n						<ion-select [(ngModel)]="reservasi.layanan_id" (ionChange)="change_layanan($event)">\n							<ng-container *ngIf="list_layanan != undefined">\n								<ion-option *ngFor="let layanan of list_layanan" value="{{layanan.id}}">{{layanan.nama}}</ion-option>\n							</ng-container>\n						</ion-select>\n						<ion-label error-field no-margin></ion-label>\n					</ion-item>\n\n					<ion-item transparent>\n						<ion-label stacked>Dokter</ion-label>\n						<ion-select [(ngModel)]="reservasi.dokter_id">\n							<ng-container *ngIf="list_dokter != undefined">\n								<ion-option *ngFor="let dokter of list_dokter" value="{{dokter.id}}">{{dokter.nama}}</ion-option>\n							</ng-container>\n						</ion-select>\n						<ion-label error-field no-margin></ion-label>\n					</ion-item>\n\n					<ion-item transparent *ngIf="list_reminder != undefined">\n						<ion-label stacked>Pengingat</ion-label>\n						<ion-select [(ngModel)]="reservasi.reminder_1_id">\n							<ion-option *ngFor="let reminder of list_reminder" value="{{reminder.id}}">{{reminder.nama}}</ion-option>\n						</ion-select>\n						<ion-label error-field no-margin></ion-label>\n					</ion-item>\n\n					<ion-item transparent *ngIf="list_reminder != undefined">\n						<ion-label stacked>Pengingat 2</ion-label>\n						<ion-select [(ngModel)]="reservasi.reminder_2_id">\n							<ion-option *ngFor="let reminder of list_reminder" value="{{reminder.id}}">{{reminder.nama}}</ion-option>\n						</ion-select>\n						<ion-label error-field no-margin></ion-label>\n					</ion-item>\n\n\n	        <!-- <ion-item transparent>\n	          <ion-label stacked>Deskripsi</ion-label>\n	          <ion-textarea placeholder="Enter a description" [(ngModel)]="model.desc" ></ion-textarea>\n	        </ion-item> -->\n	        <!---Login button-->\n			<!---Facebook button-->\n		</ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab right bottom>\n    <button ion-fab (click)="save()">\n      <ion-icon name="md-checkmark"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/modal-reservasi/modal-reservasi.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_2__providers_master_service_master_service__["a" /* MasterServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_reservasi_service_reservasi_service__["a" /* ReservasiServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_service_loading_service__["a" /* LoadingServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_toast_service_toast_service__["a" /* ToastServiceProvider */]])
    ], ModalReservasiPage);
    return ModalReservasiPage;
}());

//# sourceMappingURL=modal-reservasi.js.map

/***/ }),

/***/ 844:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalReservasiPageModule", function() { return ModalReservasiPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modal_reservasi__ = __webpack_require__(1117);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ModalReservasiPageModule = (function () {
    function ModalReservasiPageModule() {
    }
    ModalReservasiPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__modal_reservasi__["a" /* ModalReservasiPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__modal_reservasi__["a" /* ModalReservasiPage */]),
            ],
        })
    ], ModalReservasiPageModule);
    return ModalReservasiPageModule;
}());

//# sourceMappingURL=modal-reservasi.module.js.map

/***/ })

});
//# sourceMappingURL=67.js.map