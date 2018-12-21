webpackJsonp([71],{

/***/ 1170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_profile_service_profile_service__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_service_loading_service__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_master_service_master_service__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_master_service_master_wilayah_services__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_alert_service_alert_service__ = __webpack_require__(519);
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
 * Generated class for the EditProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var EditProfilePage = (function () {
    function EditProfilePage(navCtrl, navParams, profileService, auth, loading, master, wilayah, events, toast, alert) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileService = profileService;
        this.auth = auth;
        this.loading = loading;
        this.master = master;
        this.wilayah = wilayah;
        this.events = events;
        this.toast = toast;
        this.alert = alert;
        this.requestsCount = 0;
        this.errorsCount = 0;
        this.style = {
            "background-image": "url('assets/images/avatar/default-user.png')",
            "background-size": "cover",
            "background-position": "center center",
        };
        //middleware Auth 
        this.auth.AuthCheck(this.token);
    }
    EditProfilePage.prototype.ionViewDidLoad = function () {
        var _this = this;
        console.log('EditProfilePage');
        this.token = this.navParams.get('token');
        if (this.token) {
            this.loader = this.loading.show('please Wait ....');
            this.loader.present();
            this.getProfile(this.token);
        }
        else {
            this.loader = this.loading.show('please Wait ....');
            this.loader.present();
            if (this.events) {
                this.events.subscribe('user:loged', function (token, data) {
                    _this.getProfile(token);
                });
            }
        }
    };
    EditProfilePage.prototype.getProfile = function (token) {
        var _this = this;
        this.profileService.profileInfo(token).subscribe(function (data) { _this.profile = data.data, _this.addon(data.data, token); }, function (error) { return _this.requestError(); }, function () { return _this.requestDone(); });
    };
    EditProfilePage.prototype.addon = function (data, token) {
        this.getListMaster(token);
        this.tempat_lahir = {
            id: data.tempat_lahir_id,
            nama: data.tempat_lahir
        };
        this.token = token;
        this.setProvinsi(this.profile.provinsi_id);
        this.profile.tempat_lahir_id = data.tempat_lahir_id;
    };
    EditProfilePage.prototype.getListMaster = function (token) {
        var _this = this;
        this.master.get_list_tempat_lahir(token).subscribe(function (data) { return _this.list_tempat_lahir = data.data; }, function (error) { return _this.requestError(); }, function () { return _this.requestDone(); });
        this.master.get_list_agama(token).subscribe(function (data) { return _this.list_agama = data.data; }, function (error) { return _this.requestError(); }, function () { return _this.requestDone(); });
        this.master.get_list_title(token).subscribe(function (data) { return _this.list_title = data.data; }, function (error) { return _this.requestError(); }, function () { return _this.requestDone(); });
        this.master.get_list_identitas(token).subscribe(function (data) { return _this.list_identitas = data.data; }, function (error) { return _this.requestError(); }, function () { return _this.requestDone(); });
        this.master.get_list_golDarah(token).subscribe(function (data) { return _this.list_gol_darah = data.data; }, function (error) { return _this.requestError(); }, function () { return _this.requestDone(); });
        this.master.get_list_pendidikan(token).subscribe(function (data) { return _this.list_pendidikan = data.data; }, function (error) { return _this.requestError(); }, function () { return _this.requestDone(); });
        this.master.get_list_pekerjaan(token).subscribe(function (data) { return _this.list_pekerjaan = data.data; }, function (error) { return _this.requestError(); }, function () { return _this.requestDone(); });
        this.master.get_list_status_kawin(token).subscribe(function (data) { return _this.list_status_kawin = data.data; }, function (error) { return _this.requestError(); }, function () { return _this.requestDone(); });
        this.master.get_list_unit_usaha(token).subscribe(function (data) { return _this.list_unit_usaha = data.data; }, function (error) { return _this.requestError(); }, function () { return _this.requestDone(); });
        this.wilayah.get_list_provinsi(token).subscribe(function (data) { return _this.list_provinsi = data.data; }, function (error) { return _this.requestError(); }, function () { return _this.requestDone(); });
    };
    EditProfilePage.prototype.setProvinsi = function (id) {
        var _this = this;
        this.wilayah.get_list_kabupaten(this.token, id).subscribe(function (data) { return _this.list_kabupaten = data.data; }, function (error) { return _this.requestError(); }, function () { _this.setKabupaten(_this.profile.kabupaten_id), _this.requestDone(); });
    };
    EditProfilePage.prototype.setKabupaten = function (id) {
        var _this = this;
        this.wilayah.get_list_kecamatan(this.token, id).subscribe(function (data) { return _this.list_kecamatan = data.data; }, function (error) { return _this.requestError(); }, function () { _this.setKecamatan(_this.profile.kecamatan_id), _this.requestDone(); });
    };
    EditProfilePage.prototype.setKecamatan = function (id) {
        var _this = this;
        this.wilayah.get_list_kecamatan(this.token, id).subscribe(function (data) { return _this.list_kelurahan = data.data; }, function (error) { return _this.requestError(); }, function () { _this.setKelurahan(_this.profile.kelurahan_id), _this.requestDone(); });
    };
    EditProfilePage.prototype.setKelurahan = function (id) {
        console.log('master wilayah success');
    };
    EditProfilePage.prototype.requestDone = function () {
        this.requestsCount++;
        console.log(this.requestsCount);
        if (this.requestsCount == 14) {
            this.loader.dismiss();
        }
    };
    EditProfilePage.prototype.requestError = function () {
        var _this = this;
        this.errorsCount++;
        console.log(this.errorsCount);
        if (this.errorsCount >= 1) {
            this.loader.dismiss().then(function () {
                _this.toast.show('Server Busy, Please try again');
            });
        }
    };
    EditProfilePage.prototype.changeProvinsi = function (id) {
        var _this = this;
        this.profile.kabupaten_id = null;
        this.profile.kecamatan_id = null;
        this.profile.kelurahan_id = null;
        this.list_kecamatan = undefined;
        this.list_kelurahan = undefined;
        this.wilayah.get_list_kabupaten(this.token, id).subscribe(function (data) { return _this.list_kabupaten = data.data; }, function (error) { return console.log(error); }, function () { return console.log('changed provinsi'); });
    };
    EditProfilePage.prototype.changeKabupaten = function (id) {
        var _this = this;
        this.profile.kecamatan_id = null;
        this.profile.kelurahan_id = null;
        this.list_kelurahan = undefined;
        this.profile.kelurahan_id = null;
        this.wilayah.get_list_kecamatan(this.token, id).subscribe(function (data) { return _this.list_kecamatan = data.data; }, function (error) { return console.log(error); }, function () { return console.log('changed kabupaten'); });
    };
    EditProfilePage.prototype.changeKecamatan = function (id) {
        var _this = this;
        this.profile.kelurahan_id = null;
        this.wilayah.get_list_kecamatan(this.token, id).subscribe(function (data) { return _this.list_kelurahan = data.data; }, function (error) { return console.log(error); }, function () { return console.log('changed kecamatan'); });
    };
    EditProfilePage.prototype.changeKelurahan = function (id) {
        console.log('master wilayah success');
    };
    EditProfilePage.prototype.changeTempatLahir = function (event) {
        console.log(event);
        this.profile.tempat_lahir_id = event.value.id;
        this.profile.tempat_lahir = event.value.nama;
    };
    EditProfilePage.prototype.save = function () {
        var _this = this;
        console.log('data', this.profile);
        var loader = this.loading.show('loading ....');
        loader.present().then(function () {
            _this.profileService.saveProfile(_this.profile, _this.token).subscribe(function (data) { return _this.saveSuccess(data, loader); }, function (error) { return _this.saveError(error, loader); }, function () { return _this.saveDone(); });
        });
    };
    EditProfilePage.prototype.saveDone = function () {
    };
    EditProfilePage.prototype.saveError = function (error, l) {
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
    EditProfilePage.prototype.saveSuccess = function (data, l) {
        var _this = this;
        l.dismiss().then(function () {
            _this.navCtrl.setRoot('IndexProfilePage', {
                token: _this.token,
                feedback: data.message,
            });
            //update
            _this.events.publish('user:profile', _this.profile);
        });
    };
    EditProfilePage.prototype.feedbackText = function (error) {
        var feedbackError = '<ion-list>';
        for (var key in error) {
            for (var i = 0; i < error[key].length; i++) {
                feedbackError += '<ion-item> - ' + error[key][i] + '</ion-item><br><br>';
            }
        }
        feedbackError += '</ion-list>';
        return feedbackError;
    };
    EditProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-edit-profile',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/edit-profile/edit-profile.html"*/'<!-- Themes Register + Image -->\n<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Edit Profile</ion-title>\n  </ion-navbar>\n</ion-header>\n<!--Content -->\n<ion-content background-size *ngIf="profile != undefined">\n  <ion-grid>\n    <ion-row padding-horizontal align-items-start>\n      <ion-col no-padding col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n        \n        <ion-item transparent>\n          <!--Form Title-->\n          <h1 register-title text-wrap>Klinik</h1>\n        </ion-item>\n\n        <ion-item transparent *ngIf="profile != undefined && profile.pasien_id > -1">\n          <ion-label stacked>Klinik</ion-label>\n          <ion-select [(ngModel)]="profile.unit_usaha_id">\n            <ion-option *ngFor="let unit_usaha of list_unit_usaha" value="{{unit_usaha.id}}">{{unit_usaha.nama}}</ion-option>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <!--Form Title-->\n          <h1 register-title text-wrap>Profile Lengkap</h1>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Title</ion-label>\n          <ion-select [(ngModel)]="profile.title_id">\n            <ion-option *ngFor="let title of list_title" value="{{title.id}}">{{title.nama}}</ion-option>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Nama</ion-label>\n          <ion-input required placeholder="Nama" type="text" [(ngModel)]="profile.nama"></ion-input>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Agama</ion-label>\n          <ion-select [(ngModel)]="profile.agama_id">\n            <ion-option *ngFor="let agama of list_agama" value="{{agama.id}}">{{agama.nama}}</ion-option>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n            <ion-label stacked>Tempat Lahir</ion-label>\n            <select-searchable\n                item-content\n                [(ngModel)]="tempat_lahir"\n                [items]="list_tempat_lahir"\n                itemValueField="id"\n                itemTextField="nama"\n                [canSearch]="true"\n                (onChange)="changeTempatLahir($event)">\n            </select-searchable>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Tanggal Lahir</ion-label>\n          <ion-datetime displayFormat="DD/MM/YYYY" [(ngModel)]="profile.tgl_lahir"></ion-datetime>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Jenis Kelamin</ion-label>\n          <ion-select [(ngModel)]="profile.jenis_kelamin">\n            <ion-option value="1">Laki-Laki</ion-option>\n            <ion-option value="2">Perempuan</ion-option>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Kewarganegaran</ion-label>\n          <ion-select [(ngModel)]="profile.kewarganegaraan">\n            <ion-option value="1">WNI</ion-option>\n            <ion-option value="2">WNA</ion-option>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Identitas</ion-label>\n          <ion-select [(ngModel)]="profile.identitas_id">\n            <ion-option *ngFor="let identitas of list_identitas" value="{{identitas.id}}">{{identitas.nama}}</ion-option>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n        \n        <ion-item transparent>\n          <ion-label stacked>NO.Identitas</ion-label>\n          <ion-input required placeholder="NO.Identitas" type="text" [(ngModel)]="profile.no_identitas"></ion-input>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n<!--         <ion-item transparent>\n          <ion-label stacked>Nomer HP</ion-label>\n          <ion-input required placeholder="Nomer HP" type="string" [(ngModel)]="profile.no_telepon_1"></ion-input>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item> -->\n\n        <ion-item transparent>\n          <ion-label stacked>Nomer Telepon</ion-label>\n          <ion-input required placeholder="Nomer Telepon" type="string" [(ngModel)]="profile.no_telepon_2"></ion-input>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Golongan Darah</ion-label>\n          <ion-select [(ngModel)]="profile.gol_darah_id">\n            <ion-option *ngFor="let gol_darah of list_gol_darah" value="{{gol_darah.id}}">{{gol_darah.nama}}</ion-option>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <!--Form Title-->\n          <h1 register-title text-wrap>Alamat Lengkap</h1>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Alamat</ion-label>\n          <ion-input required placeholder="Alamat" type="text" [(ngModel)]="profile.alamat"></ion-input>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Provinsi</ion-label>\n          <ion-select [(ngModel)]="profile.provinsi_id" (ionChange)="changeProvinsi($event)">\n            <ion-option *ngFor="let provinsi of list_provinsi" value="{{provinsi.id}}">{{provinsi.nama}}</ion-option>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Kabupaten</ion-label>\n          <ion-select [(ngModel)]="profile.kabupaten_id" (ionChange)="changeKabupaten($event)">\n            <ng-container *ngIf="list_kabupaten != undefined">\n              <ion-option *ngFor="let kabupaten of list_kabupaten" value="{{kabupaten.id}}">{{kabupaten.nama}}</ion-option>\n            </ng-container>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Kecamatan</ion-label>\n          <ion-select [(ngModel)]="profile.kecamatan_id" (ionChange)="changeKecamatan($event)">\n            <ng-container *ngIf="list_kecamatan != undefined">\n              <ion-option *ngFor="let kecamatan of list_kecamatan" value="{{kecamatan.id}}">{{kecamatan.nama}}</ion-option>\n            </ng-container>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Kelurahan</ion-label>\n          <ion-select [(ngModel)]="profile.kelurahan_id" (ionChange)="changeKelurahan($event)">\n            <ng-container *ngIf="list_kelurahan != undefined">\n              <ion-option *ngFor="let kellist_kelurahan of list_kelurahan" value="{{kellist_kelurahan.id}}">{{kellist_kelurahan.nama}}</ion-option>\n            </ng-container>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Kode Pos</ion-label>\n          <ion-input required placeholder="Kode Pos" type="string" [(ngModel)]="profile.kodepos"></ion-input>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <!--Form Title-->\n          <h1 register-title text-wrap>Informasi Lainnya</h1>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Pendidikan</ion-label>\n          <ion-select [(ngModel)]="profile.pendidikan_id">\n            <ion-option *ngFor="let pendidikan of list_pendidikan" value="{{pendidikan.id}}">{{pendidikan.nama}}</ion-option>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Pekerjaan</ion-label>\n          <ion-select [(ngModel)]="profile.pekerjaan_id">\n            <ion-option *ngFor="let pekerjaan of list_pekerjaan" value="{{pekerjaan.id}}">{{pekerjaan.nama}}</ion-option>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Status Kawin</ion-label>\n          <ion-select [(ngModel)]="profile.status_kawin_id">\n            <ion-option *ngFor="let status_kawin of list_status_kawin" value="{{status_kawin.id}}">{{status_kawin.nama}}</ion-option>\n          </ion-select>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n\n        <ion-item transparent>\n          <ion-label stacked>Suku</ion-label>\n          <ion-input required placeholder="Suku" type="text" [(ngModel)]="profile.suku"></ion-input>\n          <ion-label error-field no-margin></ion-label>\n        </ion-item>\n      \n      </ion-col>\n    </ion-row>\n  </ion-grid>\n  <ion-fab right bottom>\n    <button ion-fab (click)="save()">\n      <ion-icon name="md-checkmark"></ion-icon>\n    </button>\n  </ion-fab>\n</ion-content>'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/edit-profile/edit-profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_3__providers_profile_service_profile_service__["a" /* ProfileServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_4__providers_loading_service_loading_service__["a" /* LoadingServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_master_service_master_service__["a" /* MasterServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_master_service_master_wilayah_services__["a" /* MasterWilayahServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_8__providers_alert_service_alert_service__["a" /* AlertServiceProvider */]])
    ], EditProfilePage);
    return EditProfilePage;
}());

//# sourceMappingURL=edit-profile.js.map

/***/ }),

/***/ 869:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProfilePageModule", function() { return EditProfilePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_profile__ = __webpack_require__(1170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_select_searchable__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ionic_select_searchable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var EditProfilePageModule = (function () {
    function EditProfilePageModule() {
    }
    EditProfilePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_profile__["a" /* EditProfilePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_4_ionic_select_searchable__["SelectSearchableModule"]
            ],
        })
    ], EditProfilePageModule);
    return EditProfilePageModule;
}());

//# sourceMappingURL=edit-profile.module.js.map

/***/ })

});
//# sourceMappingURL=71.js.map