webpackJsonp([134],{

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalServiceProvider; });
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


var ModalServiceProvider = (function () {
    function ModalServiceProvider(modalCtrl) {
        this.modalCtrl = modalCtrl;
    }
    ModalServiceProvider.prototype.presentModal = function (page, data) {
        return this.modalCtrl.create(page, data);
    };
    ModalServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ModalController"]])
    ], ModalServiceProvider);
    return ModalServiceProvider;
}());

//# sourceMappingURL=modal-service.js.map

/***/ }),

/***/ 198:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppSettings; });
var AppSettings = Object.freeze({
    "IS_FIREBASE_ENABLED": false,
    "SHOW_START_WIZARD": false,
    "SUBSCRIBE": false,
    "TOAST": {
        "duration": 1000,
        "position": "buttom"
    },
    "FIREBASE_CONFIG": {
        apiKey: "AIzaSyDwtd8nQF5tR5sym5FQ3gS-eKKciS9zZYU",
        authDomain: "orange-theme-ios-12.firebaseapp.com",
        databaseURL: "https://orange-theme-ios-12.firebaseio.com",
        projectId: "orange-theme-ios-12",
        storageBucket: "orange-theme-ios-12.appspot.com",
        messagingSenderId: "118710261188"
    },
    "MAP_KEY": {
        "apiKey": 'AIzaSyA4-GoZzOqYTvxMe52YQZch5JaCFN6ACLg'
    }
});
//# sourceMappingURL=app-settings.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_service_modal_service__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AuthServiceProvider = (function () {
    function AuthServiceProvider(http, events, app, modal, storage) {
        this.http = http;
        this.events = events;
        this.app = app;
        this.modal = modal;
        this.storage = storage;
        // private baseUrl: string = "http://clinic-api.apk";
        this.baseUrl = "http://clinic-apiv2.apk";
        this.authUrl = this.baseUrl + "/v1/auth/login";
        console.log('Auth Providers');
        this.navCtrl = app.getActiveNav();
    }
    //send user
    AuthServiceProvider.prototype.AuthUser = function (user) {
        this.dumpUser = user;
        var formData = new FormData();
        formData.append('username', user.username.replace(/\D/g, ''));
        formData.append('password', user.password);
        return this.http.post(this.authUrl, formData)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    //middleware
    AuthServiceProvider.prototype.AuthCheck = function (token) {
        var _this = this;
        this.storage.get('user').then(function (user) {
            if (token == undefined && user == undefined) {
                _this.events.publish('user:redirect', null, null);
            }
        });
    };
    AuthServiceProvider.prototype.setUser = function (token, data) {
        console.log('User Loged!');
        //storage set
        this.storage.set('auth:status', true);
        this.storage.set('token', token);
        this.storage.set('user:profile', data);
        //events set
        this.events.publish('user:profile', data);
        this.events.publish('auth:status', true);
    };
    AuthServiceProvider.prototype.logOut = function () {
        console.log('User Not Loged!');
        //storage set
        this.storage.set('auth:status', false);
        this.storage.set('token', null);
        this.storage.set('user:profile', null);
        //events set
        this.events.publish('user:profile', null);
        this.events.publish('auth:status', false);
    };
    AuthServiceProvider.prototype.autoLogin = function (user) {
        var _this = this;
        this.storage.set('user', user);
        var formData = new FormData();
        formData.append('username', user.username);
        formData.append('password', user.password);
        return this.http.post(this.authUrl, formData)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError)
            .subscribe(function (data) { return _this.setUser(data.token, data.data); }, function (error) { return _this.logOut(); });
    };
    AuthServiceProvider.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    AuthServiceProvider.prototype.extractData = function (response) {
        return response.json();
    };
    AuthServiceProvider.prototype.logData = function (response) {
        console.log(response);
    };
    AuthServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_10__modal_service_modal_service__["a" /* ModalServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], AuthServiceProvider);
    return AuthServiceProvider;
}());

//# sourceMappingURL=auth-service.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashProvider; });
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

var FlashProvider = (function () {
    function FlashProvider() {
    }
    FlashProvider.prototype.show = function (message, duration, type) {
    };
    FlashProvider.prototype.hide = function () {
    };
    FlashProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], FlashProvider);
    return FlashProvider;
}());

//# sourceMappingURL=flash.js.map

/***/ }),

/***/ 214:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 214;

/***/ }),

/***/ 257:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../components/action-sheet/layout-1/action-sheet-layout-1.module": [
		739,
		46
	],
	"../components/action-sheet/layout-2/action-sheet-layout-2.module": [
		740,
		45
	],
	"../components/action-sheet/layout-3/action-sheet-layout-3.module": [
		741,
		133
	],
	"../components/check-box/layout-1/check-box-layout-1.module": [
		742,
		132
	],
	"../components/check-box/layout-2/check-box-layout-2.module": [
		743,
		131
	],
	"../components/check-box/layout-3/check-box-layout-3.module": [
		744,
		130
	],
	"../components/full-screen-gallery/full-screen-gallery.module": [
		745,
		129
	],
	"../components/image-gallery/layout-1/image-gallery-layout-1.module": [
		746,
		128
	],
	"../components/image-gallery/layout-2/image-gallery-layout-2.module": [
		747,
		127
	],
	"../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module": [
		748,
		126
	],
	"../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module": [
		749,
		125
	],
	"../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module": [
		750,
		124
	],
	"../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module": [
		751,
		123
	],
	"../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module": [
		752,
		122
	],
	"../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module": [
		753,
		121
	],
	"../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module": [
		754,
		120
	],
	"../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module": [
		755,
		119
	],
	"../components/list-view/expandable/layout-1/expandable-layout-1.module": [
		756,
		118
	],
	"../components/list-view/expandable/layout-2/expandable-layout-2.module": [
		757,
		117
	],
	"../components/list-view/expandable/layout-3/expandable-layout-3.module": [
		758,
		116
	],
	"../components/list-view/google-card/layout-1/google-card-layout-1.module": [
		759,
		115
	],
	"../components/list-view/google-card/layout-2/google-card-layout-2.module": [
		760,
		114
	],
	"../components/list-view/google-card/layout-3/google-card-layout-3.module": [
		761,
		113
	],
	"../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module": [
		762,
		7
	],
	"../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module": [
		763,
		6
	],
	"../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module": [
		764,
		5
	],
	"../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module": [
		765,
		112
	],
	"../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module": [
		766,
		111
	],
	"../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module": [
		767,
		110
	],
	"../components/login/layout-1/login-layout-1.module": [
		736,
		109
	],
	"../components/login/layout-2/login-layout-2.module": [
		768,
		108
	],
	"../components/maps/layout-1/maps-layout-1.module": [
		769,
		10
	],
	"../components/maps/layout-2/maps-layout-2.module": [
		770,
		12
	],
	"../components/maps/layout-3/maps-layout-3.module": [
		771,
		11
	],
	"../components/parallax/layout-1/parallax-layout-1.module": [
		772,
		44
	],
	"../components/parallax/layout-2/parallax-layout-2.module": [
		773,
		43
	],
	"../components/parallax/layout-3/parallax-layout-3.module": [
		774,
		42
	],
	"../components/parallax/layout-4/parallax-layout-4.module": [
		775,
		41
	],
	"../components/qrcode/layout-1/qrcode-layout-1.module": [
		776,
		107
	],
	"../components/radio-button/layout-1/radio-button-layout-1.module": [
		777,
		106
	],
	"../components/radio-button/layout-2/radio-button-layout-2.module": [
		778,
		105
	],
	"../components/radio-button/layout-3/radio-button-layout-3.module": [
		779,
		104
	],
	"../components/range/layout-1/range-layout-1.module": [
		780,
		103
	],
	"../components/range/layout-2/range-layout-2.module": [
		781,
		102
	],
	"../components/range/layout-3/range-layout-3.module": [
		782,
		101
	],
	"../components/range/layout-4/range-layout-4.module": [
		783,
		100
	],
	"../components/register/layout-1/register-layout-1.module": [
		784,
		99
	],
	"../components/register/layout-2/register-layout-2.module": [
		785,
		98
	],
	"../components/search-bar/layout-1/search-bar-layout-1.module": [
		786,
		97
	],
	"../components/search-bar/layout-2/search-bar-layout-2.module": [
		787,
		96
	],
	"../components/search-bar/layout-3/search-bar-layout-3.module": [
		788,
		95
	],
	"../components/select/layout-1/select-layout-1.module": [
		789,
		94
	],
	"../components/select/layout-2/select-layout-2.module": [
		790,
		93
	],
	"../components/select/layout-3/select-layout-3.module": [
		791,
		92
	],
	"../components/select/layout-4/select-layout-4.module": [
		792,
		91
	],
	"../components/select/layout-5/select-layout-5.module": [
		793,
		90
	],
	"../components/select/layout-6/select-layout-6.module": [
		794,
		89
	],
	"../components/spinner/spinner.module": [
		795,
		88
	],
	"../components/splash-screen/layout-1/splash-screen-layout-1.module": [
		796,
		87
	],
	"../components/splash-screen/layout-2/splash-screen-layout-2.module": [
		797,
		86
	],
	"../components/splash-screen/layout-3/splash-screen-layout-3.module": [
		798,
		85
	],
	"../components/sub-image-gallery/layout-1/sub-image-gallery-layout-1.module": [
		799,
		84
	],
	"../components/sub-image-gallery/layout-2/sub-image-gallery-layout-2.module": [
		737,
		83
	],
	"../components/tabs/layout-1/tabs-layout-1.module": [
		800,
		82
	],
	"../components/tabs/layout-2/tabs-layout-2.module": [
		801,
		81
	],
	"../components/tabs/layout-3/tabs-layout-3.module": [
		802,
		80
	],
	"../components/toggle/layout-1/toggle-layout-1.module": [
		803,
		79
	],
	"../components/toggle/layout-2/toggle-layout-2.module": [
		804,
		78
	],
	"../components/toggle/layout-3/toggle-layout-3.module": [
		805,
		77
	],
	"../components/wizard/layout-1/wizard-layout-1.module": [
		738,
		76
	],
	"../components/wizard/layout-2/wizard-layout-2.module": [
		806,
		75
	],
	"../components/wizard/layout-3/wizard-layout-3.module": [
		807,
		74
	],
	"../pages/detail-photo/detail-photo.module": [
		808,
		73
	],
	"../pages/detail-transaksi/detail-transaksi.module": [
		809,
		72
	],
	"../pages/edit-profile/edit-profile.module": [
		869,
		71
	],
	"../pages/history-reservasi/history-reservasi.module": [
		810,
		4
	],
	"../pages/history-transaksi/history-transaksi.module": [
		811,
		3
	],
	"../pages/home/home.module": [
		812,
		40
	],
	"../pages/index-profile/index-profile.module": [
		813,
		2
	],
	"../pages/intro-page/intro-page.module": [
		814,
		34
	],
	"../pages/item-details-action-sheet/item-details-action-sheet.module": [
		815,
		17
	],
	"../pages/item-details-appearance-animation/item-details-appearance-animation.module": [
		816,
		14
	],
	"../pages/item-details-check-box/item-details-check-box.module": [
		817,
		29
	],
	"../pages/item-details-drag-and-drop/item-details-drag-and-drop.module": [
		818,
		27
	],
	"../pages/item-details-expandable/item-details-expandable.module": [
		819,
		26
	],
	"../pages/item-details-full-screen-gallery/item-details-full-screen-gallery.module": [
		820,
		38
	],
	"../pages/item-details-google-card/item-details-google-card.module": [
		821,
		25
	],
	"../pages/item-details-image-gallery/item-details-image-gallery.module": [
		822,
		28
	],
	"../pages/item-details-login/item-details-login.module": [
		823,
		33
	],
	"../pages/item-details-maps/item-details-maps.module": [
		824,
		8
	],
	"../pages/item-details-parallax/item-details-parallax.module": [
		825,
		15
	],
	"../pages/item-details-qrcode/item-details-qrcode.module": [
		826,
		37
	],
	"../pages/item-details-radio-button/item-details-radio-button.module": [
		827,
		23
	],
	"../pages/item-details-range/item-details-range.module": [
		828,
		16
	],
	"../pages/item-details-register/item-details-register.module": [
		829,
		32
	],
	"../pages/item-details-search-bar/item-details-search-bar.module": [
		830,
		22
	],
	"../pages/item-details-select/item-details-select.module": [
		831,
		13
	],
	"../pages/item-details-spinner/item-details-spinner.module": [
		832,
		36
	],
	"../pages/item-details-splash-screen/item-details-splash-screen.module": [
		833,
		21
	],
	"../pages/item-details-sticky-list-header/item-details-sticky-list-header.module": [
		834,
		0
	],
	"../pages/item-details-sub-image-gallery/item-details-sub-image-gallery.module": [
		835,
		31
	],
	"../pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module": [
		836,
		24
	],
	"../pages/item-details-tabs/item-details-tabs.module": [
		837,
		20
	],
	"../pages/item-details-text-view/item-details-text-view.module": [
		838,
		70
	],
	"../pages/item-details-toggle/item-details-toggle.module": [
		839,
		19
	],
	"../pages/item-details-wizard/item-details-wizard.module": [
		840,
		18
	],
	"../pages/item-details/item-details.module": [
		841,
		69
	],
	"../pages/items/items.module": [
		868,
		9
	],
	"../pages/list-reservasi/list-reservasi.module": [
		842,
		68
	],
	"../pages/login/login.module": [
		843,
		35
	],
	"../pages/modal-reservasi/modal-reservasi.module": [
		844,
		67
	],
	"../pages/news-feed-details/news-feed-details.module": [
		845,
		39
	],
	"../pages/otp-verification/otp-verification.module": [
		846,
		61
	],
	"../pages/photo-profile/photo-profile.module": [
		847,
		66
	],
	"../pages/provider/provider.module": [
		848,
		65
	],
	"../pages/register/register.module": [
		849,
		64
	],
	"../pages/reservasi/reservasi.module": [
		850,
		1
	],
	"../pages/serial-number/serial-number.module": [
		851,
		63
	],
	"../pages/super-tab-reservasi/super-tab-reservasi.module": [
		852,
		62
	],
	"../pages/tab-page-1/tab-page-1.module": [
		853,
		60
	],
	"../pages/tab-page-10/tab-page-10.module": [
		854,
		59
	],
	"../pages/tab-page-11/tab-page-11.module": [
		855,
		58
	],
	"../pages/tab-page-12/tab-page-12.module": [
		856,
		57
	],
	"../pages/tab-page-13/tab-page-13.module": [
		857,
		56
	],
	"../pages/tab-page-14/tab-page-14.module": [
		858,
		55
	],
	"../pages/tab-page-2/tab-page-2.module": [
		859,
		54
	],
	"../pages/tab-page-3/tab-page-3.module": [
		860,
		53
	],
	"../pages/tab-page-4/tab-page-4.module": [
		861,
		52
	],
	"../pages/tab-page-5/tab-page-5.module": [
		862,
		51
	],
	"../pages/tab-page-6/tab-page-6.module": [
		863,
		50
	],
	"../pages/tab-page-7/tab-page-7.module": [
		864,
		49
	],
	"../pages/tab-page-8/tab-page-8.module": [
		865,
		48
	],
	"../pages/tab-page-9/tab-page-9.module": [
		866,
		47
	],
	"../pages/tabs-reservasi/tabs-reservasi.module": [
		867,
		30
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 257;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 384:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TimeBarComponent; });
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

var TimeBarComponent = (function () {
    function TimeBarComponent(renderer, element) {
        this.renderer = renderer;
        this.element = element;
    }
    TimeBarComponent.prototype.startTimer = function (time) {
        var _this = this;
        this.renderer.setStyle(this.element.nativeElement.children[0], 'transition', 'width ' + time + 'ms linear');
        setTimeout(function () {
            _this.renderer.setStyle(_this.element.nativeElement.children[0], 'width', '0%');
        }, 0);
    };
    TimeBarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'time-bar',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/components/time-bar/time-bar.html"*/'<div class="time-bar"></div>'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/components/time-bar/time-bar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer2"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]])
    ], TimeBarComponent);
    return TimeBarComponent;
}());

//# sourceMappingURL=time-bar.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_settings__ = __webpack_require__(198);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ToastService = (function () {
    function ToastService(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastService.prototype.presentToast = function (message) {
        var toastItem = __WEBPACK_IMPORTED_MODULE_2__app_settings__["a" /* AppSettings */].TOAST;
        toastItem["message"] = message;
        var toast = this.toastCtrl.create(toastItem);
        toast.present();
    };
    ToastService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["ToastController"]])
    ], ToastService);
    return ToastService;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoadingService = (function () {
    function LoadingService(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingService.prototype.show = function () {
        this.loading = this.loadingCtrl.create({
            content: 'Please wait...'
        });
        this.loading.present();
    };
    LoadingService.prototype.hide = function () {
        this.loading.dismiss();
    };
    LoadingService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["LoadingController"]])
    ], LoadingService);
    return LoadingService;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 500:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingServiceProvider; });
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


var LoadingServiceProvider = (function () {
    function LoadingServiceProvider(loadingCtrl) {
        this.loadingCtrl = loadingCtrl;
    }
    LoadingServiceProvider.prototype.show = function (message) {
        return this.loadingCtrl.create({
            content: message,
            cssClass: 'custom-loading',
        });
    };
    LoadingServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["LoadingController"]])
    ], LoadingServiceProvider);
    return LoadingServiceProvider;
}());

//# sourceMappingURL=loading-service.js.map

/***/ }),

/***/ 501:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToastServiceProvider; });
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


var ToastServiceProvider = (function () {
    function ToastServiceProvider(toastCtrl) {
        this.toastCtrl = toastCtrl;
    }
    ToastServiceProvider.prototype.show = function (message, duration) {
        if (duration === void 0) { duration = 3000; }
        return this.toastCtrl
            .create({
            message: message,
            duration: duration,
        })
            .present();
    };
    ToastServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ToastController"]])
    ], ToastServiceProvider);
    return ToastServiceProvider;
}());

//# sourceMappingURL=toast-service.js.map

/***/ }),

/***/ 517:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProfileServiceProvider = (function () {
    function ProfileServiceProvider(http) {
        this.http = http;
        // private baseUrl: string = "http://clinic-api.apk";
        this.baseUrl = "http://clinic-apiv2.apk";
        this.profileUrl = this.baseUrl + "/v1/profile";
        this.photoUrl = this.baseUrl + "/v1/profile/foto";
        this.verifyUrl = this.baseUrl + "/v1/verify";
        console.log('Hello ProfileServiceProvider Provider');
    }
    ProfileServiceProvider.prototype.profileInfo = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.profileUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    ProfileServiceProvider.prototype.saveProfile = function (profile, token) {
        // console.log('tempat lahir id', profile.tempat_lahir_id)
        var formData = new FormData();
        formData.append('unit_usaha_id', profile.unit_usaha_id);
        formData.append('title_id', profile.title_id);
        formData.append('nama', profile.nama);
        formData.append('jenis_kelamin', profile.jenis_kelamin);
        formData.append('kewarganegaraan', profile.kewarganegaraan);
        formData.append('alamat', profile.alamat);
        formData.append('provinsi_id', profile.provinsi_id);
        formData.append('kabupaten_id', profile.kabupaten_id);
        formData.append('kecamatan_id', profile.kecamatan_id);
        formData.append('kelurahan_id', profile.kelurahan_id);
        formData.append('kodepos', profile.kodepos);
        formData.append('identitas_id', profile.identitas_id);
        formData.append('no_identitas', profile.no_identitas);
        formData.append('no_telepon_1', profile.no_telepon_1);
        formData.append('no_telepon_2', profile.no_telepon_2);
        formData.append('tempat_lahir_id', profile.tempat_lahir_id);
        formData.append('tgl_lahir', profile.tgl_lahir);
        formData.append('gol_darah_id', profile.gol_darah_id);
        formData.append('agama_id', profile.agama_id);
        formData.append('status_kawin_id', profile.status_kawin_id);
        formData.append('pendidikan_id', profile.pendidikan_id);
        formData.append('pekerjaan_id', profile.pekerjaan_id);
        formData.append('suku', profile.suku);
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(formData);
        return this.http.post(this.profileUrl, formData, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    ProfileServiceProvider.prototype.photoPostUrl = function () {
        return this.photoUrl;
    };
    ProfileServiceProvider.prototype.deleteFoto = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(this.photoUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    ProfileServiceProvider.prototype.verifyAccount = function (serial, token) {
        var formData = new FormData();
        formData.append('serial_number', serial);
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(formData);
        return this.http.post(this.verifyUrl, formData, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    ProfileServiceProvider.prototype.headers = function (token) {
        this.token = "Bearer " + token;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
        return headers;
    };
    ProfileServiceProvider.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    ProfileServiceProvider.prototype.extractData = function (response) {
        return response.json();
    };
    ProfileServiceProvider.prototype.logData = function (response) {
        console.log(response);
    };
    ProfileServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ProfileServiceProvider);
    return ProfileServiceProvider;
}());

//# sourceMappingURL=profile-service.js.map

/***/ }),

/***/ 518:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile__ = __webpack_require__(581);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__list_reservasi_list_reservasi__ = __webpack_require__(582);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__ = __webpack_require__(583);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__flash_flash__ = __webpack_require__(584);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__time_bar_time_bar__ = __webpack_require__(384);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    ComponentsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_3__list_reservasi_list_reservasi__["a" /* ListReservasiComponent */],
                __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__flash_flash__["a" /* FlashComponent */],
                __WEBPACK_IMPORTED_MODULE_6__time_bar_time_bar__["a" /* TimeBarComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__user_profile_user_profile__["a" /* UserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_3__list_reservasi_list_reservasi__["a" /* ListReservasiComponent */],
                __WEBPACK_IMPORTED_MODULE_4__notifications_notifications__["a" /* NotificationsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__flash_flash__["a" /* FlashComponent */],
                __WEBPACK_IMPORTED_MODULE_6__time_bar_time_bar__["a" /* TimeBarComponent */]
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 519:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertServiceProvider; });
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


/*
  Generated class for the AlertServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var AlertServiceProvider = (function () {
    function AlertServiceProvider(alertCtrl) {
        this.alertCtrl = alertCtrl;
        console.log('Hello AlertServiceProvider Provider');
    }
    AlertServiceProvider.prototype.presentAlert = function (title, subTitle, buttons) {
        var alert = this.alertCtrl.create({
            title: title,
            subTitle: subTitle,
            buttons: [buttons]
        });
        alert.present();
    };
    AlertServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"]])
    ], AlertServiceProvider);
    return AlertServiceProvider;
}());

//# sourceMappingURL=alert-service.js.map

/***/ }),

/***/ 520:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReservasiServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/*
  Generated class for the ReservasiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ReservasiServiceProvider = (function () {
    function ReservasiServiceProvider(http) {
        this.http = http;
        // private baseUrl: string = "http://clinic-api.apk";
        this.baseUrl = "http://clinic-apiv2.apk";
        this.ionCalendarUrl = this.baseUrl + "/v1/reservasi/ionic_calendar";
        this.reservasiByDateUrl = this.baseUrl + "/v1/reservasi/date";
        this.baseReservasiUrl = this.baseUrl + "/v1/reservasi";
        this.ongoingBaseUrl = this.baseUrl + "/v1/reservasi/ongoing";
        this.timeUrl = this.baseUrl + "/v1/reservasi/time";
        console.log('Hello ReservasiServiceProvider Provider');
    }
    ReservasiServiceProvider.prototype.saveReservasi = function (reservasi, token, uid) {
        console.log('d', reservasi.tanggal);
        var tanggal = __WEBPACK_IMPORTED_MODULE_3_moment__(reservasi.tanggal, 'DD/MM/YYYY').format('YYYY-MM-DD');
        var t = __WEBPACK_IMPORTED_MODULE_3_moment__(reservasi.waktu, 'HH:mm:ss').format('HH:mm');
        var waktu = reservasi.waktu ? t : '';
        console.log('waktu', t);
        var formData = new FormData();
        formData.append('tanggal', tanggal);
        formData.append('waktu', waktu);
        formData.append('unit_usaha_id', reservasi.unit_usaha_id);
        formData.append('layanan_id', reservasi.layanan_id);
        formData.append('dokter_id', reservasi.dokter_id);
        formData.append('reminder_1', reservasi.reminder_1_id);
        formData.append('reminder_2', reservasi.reminder_2_id);
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        console.log(formData);
        if (uid == null) {
            this.reservasiUrl = "" + this.baseReservasiUrl;
        }
        else {
            this.reservasiUrl = this.baseReservasiUrl + "/" + uid;
        }
        return this.http.post(this.reservasiUrl, formData, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    ReservasiServiceProvider.prototype.reservasiCancel = function (token, uid, unit_usaha_id) {
        var formData = new FormData();
        formData.append('unit_usaha_id', unit_usaha_id);
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.baseReservasiUrl + "/" + uid + "/cancel";
        return this.http.post(url, formData, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    ReservasiServiceProvider.prototype.ionCalendar = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.ionCalendarUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    ReservasiServiceProvider.prototype.get_list_byDate = function (token, tanggal) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.reservasiByDateUrl + "?tanggal=" + tanggal;
        return this.http.get(url, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    ReservasiServiceProvider.prototype.get_reserv_by_uid = function (token, uid) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var url = this.baseReservasiUrl + "/" + uid;
        return this.http.get(url, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    ReservasiServiceProvider.prototype.get_history_reservasi = function (token, from, to, page) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (from && to) {
            var dari = __WEBPACK_IMPORTED_MODULE_3_moment__(from).format('YYYY-MM-DD');
            var sampai = __WEBPACK_IMPORTED_MODULE_3_moment__(to).format('YYYY-MM-DD');
            var historyReservasi = this.baseReservasiUrl + "?tanggal_dari=" + dari + "&tanggal_sampai=" + sampai + "&page=" + page;
        }
        else {
            var historyReservasi = this.baseReservasiUrl + "?page=" + page;
        }
        return this.http.get(historyReservasi, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    ReservasiServiceProvider.prototype.get_list_on_going = function (token, page) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var date = new Date();
        var month = date.getMonth() + 1;
        var year = date.getFullYear();
        var ongoingUrl = this.ongoingBaseUrl + "?tahun=" + year + "&bulan=" + month + "&page=" + page;
        return this.http.get(ongoingUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    ReservasiServiceProvider.prototype.get_list_time = function (token, date) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.timeUrl + "?date=" + date, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    ReservasiServiceProvider.prototype.headers = function (token) {
        this.token = "Bearer " + token;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        // headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
        return headers;
    };
    ReservasiServiceProvider.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    ReservasiServiceProvider.prototype.extractData = function (response) {
        return response.json();
    };
    ReservasiServiceProvider.prototype.logData = function (response) {
        console.log(response);
    };
    ReservasiServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], ReservasiServiceProvider);
    return ReservasiServiceProvider;
}());

//# sourceMappingURL=reservasi-service.js.map

/***/ }),

/***/ 522:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MasterServiceProvider = (function () {
    function MasterServiceProvider(http) {
        this.http = http;
        // private baseUrl: string = "http://clinic-api.apk";
        this.baseUrl = "http://clinic-apiv2.apk";
        this.agamaUrl = this.baseUrl + "/v1/agama";
        this.tempatUrl = this.baseUrl + "/v1/tempat_lahir";
        this.titleUrl = this.baseUrl + "/v1/title";
        this.darahUrl = this.baseUrl + "/v1/gol_darah";
        this.identitasUrl = this.baseUrl + "/v1/identitas";
        this.pendidikanUrl = this.baseUrl + "/v1/pendidikan";
        this.pekerjaanUrl = this.baseUrl + "/v1/pekerjaan";
        this.status_kawinUrl = this.baseUrl + "/v1/status_kawin";
        this.unit_usahaUrl = this.baseUrl + "/v1/unit_usaha";
        this.dokterUrl = this.baseUrl + "/v1/dokter";
        this.reminderUrl = this.baseUrl + "/v1/reminder";
        this.layananUrl2 = this.baseUrl + "/v1/list_layanan_by_unit_usaha";
        this.dokterUrl2 = this.baseUrl + "/v1/list_dokter_by_layanan";
        //without auth
        this.noAuth = this.baseUrl + "/v1/without_auth";
        this.titleUrl2 = this.noAuth + "/title";
        this.identitasUrl2 = this.noAuth + "/identitas";
        this.tempatUrl2 = this.noAuth + "/tempat_lahir";
        console.log('Master');
    }
    MasterServiceProvider.prototype.get_list_tempat_lahir = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.tempatUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_list_unit_usaha = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.unit_usahaUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_list_agama = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.agamaUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_list_golDarah = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.darahUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_list_status_kawin = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.status_kawinUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_list_pendidikan = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.pendidikanUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_list_pekerjaan = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.pekerjaanUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_list_title = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.titleUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_list_identitas = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.identitasUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_title_2 = function () {
        return this.http.get(this.titleUrl2)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_identitas_2 = function () {
        return this.http.get(this.identitasUrl2)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_tempat_2 = function () {
        return this.http.get(this.tempatUrl2)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_list_dokter = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.dokterUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_layanan_by_unit_usaha = function (token, id) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.layananUrl2 + "/" + id, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_dokter_by_layanan = function (token, id) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.dokterUrl2 + "/" + id, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.get_reminder = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("" + this.reminderUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterServiceProvider.prototype.headers = function (token) {
        this.token = "Bearer " + token;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
        return headers;
    };
    MasterServiceProvider.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    MasterServiceProvider.prototype.extractData = function (response) {
        return response.json();
    };
    MasterServiceProvider.prototype.logData = function (response) {
        console.log(response);
    };
    MasterServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], MasterServiceProvider);
    return MasterServiceProvider;
}());

//# sourceMappingURL=master-service.js.map

/***/ }),

/***/ 524:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewsServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var NewsServiceProvider = (function () {
    function NewsServiceProvider(http) {
        this.http = http;
        // private baseUrl: string = "http://clinic-api.apk";
        this.baseUrl = "http://clinic-apiv2.apk";
        this.newsUrl = this.baseUrl + "/v1/news";
    }
    NewsServiceProvider.prototype.get_all_news = function (page) {
        return this.http.get(this.newsUrl + "?=" + page)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    NewsServiceProvider.prototype.get_by_uid = function (uid) {
        return this.http.get(this.newsUrl + "/" + uid)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    NewsServiceProvider.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    NewsServiceProvider.prototype.extractData = function (response) {
        return response.json();
    };
    NewsServiceProvider.prototype.logData = function (response) {
        console.log(response);
    };
    NewsServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], NewsServiceProvider);
    return NewsServiceProvider;
}());

//# sourceMappingURL=news-service.js.map

/***/ }),

/***/ 525:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__modal_service_modal_service__ = __webpack_require__(121);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var RegisterServiceProvider = (function () {
    function RegisterServiceProvider(http, events, app, modal, storage) {
        this.http = http;
        this.events = events;
        this.app = app;
        this.modal = modal;
        this.storage = storage;
        // private baseUrl: string = "http://clinic-api.apk";
        this.baseUrl = "http://clinic-apiv2.apk";
        this.regisUrl = this.baseUrl + "/v1/register";
        console.log('Register Providers');
        this.navCtrl = app.getActiveNav();
    }
    //register
    RegisterServiceProvider.prototype.register = function (register) {
        var formData = new FormData();
        formData.append('nama', register.nama);
        formData.append('no_hp', register.no_hp.replace(/\D/g, ''));
        formData.append('email', register.email);
        formData.append('password', register.password);
        formData.append('password_confirmation', register.password_confirmation);
        formData.append('jenis_kelamin', register.jenis_kelamin);
        formData.append('title', register.title);
        formData.append('tgl_lahir', register.tgl_lahir);
        formData.append('tempat_lahir_id', register.tempat_lahir_id);
        formData.append('identitas_id', register.identitas_id);
        formData.append('no_identitas', register.no_identitas);
        return this.http.post(this.regisUrl, formData)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    RegisterServiceProvider.prototype.verificationOtp = function (otpCode) {
        this.verifyOtpUrl = this.baseUrl + "/v1/otp/verification?otp_code=" + otpCode.replace(/\D/g, '');
        return this.http.get(this.verifyOtpUrl)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    RegisterServiceProvider.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    RegisterServiceProvider.prototype.extractData = function (response) {
        return response.json();
    };
    RegisterServiceProvider.prototype.logData = function (response) {
        console.log(response);
    };
    RegisterServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_9_ionic_angular__["App"],
            __WEBPACK_IMPORTED_MODULE_10__modal_service_modal_service__["a" /* ModalServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */]])
    ], RegisterServiceProvider);
    return RegisterServiceProvider;
}());

//# sourceMappingURL=register-service.js.map

/***/ }),

/***/ 529:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(73);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LocalStorageServiceProvider = (function () {
    function LocalStorageServiceProvider(storage) {
        this.storage = storage;
        console.log('LocalStorageServiceProvider');
    }
    LocalStorageServiceProvider.prototype.saveTolocal = function (name, data) {
        this.storage.set(name, data);
    };
    LocalStorageServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */]])
    ], LocalStorageServiceProvider);
    return LocalStorageServiceProvider;
}());

//# sourceMappingURL=local-storage-service.js.map

/***/ }),

/***/ 536:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MasterWilayahServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_toPromise__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








/*
  Generated class for the ProfileServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MasterWilayahServiceProvider = (function () {
    function MasterWilayahServiceProvider(http) {
        this.http = http;
        // private baseUrl: string = "http://clinic-api.apk";
        this.baseUrl = "http://clinic-apiv2.apk";
        this.provinsiUrl = this.baseUrl + "/v1/provinsi";
        this.kabupatenUrl = this.baseUrl + "/v1/kabupaten";
        this.kecamatanUrl = this.baseUrl + "/v1/kecamatan";
        this.kelurahanUrl = this.baseUrl + "/v1/kelurahan";
        console.log('Master Wilayah');
    }
    MasterWilayahServiceProvider.prototype.get_list_provinsi = function (token) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get("" + this.provinsiUrl, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterWilayahServiceProvider.prototype.get_list_kabupaten = function (token, id) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.kabupatenUrl + "/" + id, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterWilayahServiceProvider.prototype.get_list_kecamatan = function (token, id) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.kecamatanUrl + "/" + id, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterWilayahServiceProvider.prototype.get_list_kelurahan = function (token, id) {
        var headers = this.headers(token);
        var options = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(this.kelurahanUrl + "/" + id, options)
            .do(this.logData)
            .map(this.extractData)
            .do(this.logData)
            .catch(this.handleError);
    };
    MasterWilayahServiceProvider.prototype.headers = function (token) {
        this.token = "Bearer " + token;
        var headers = new __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', this.token);
        return headers;
    };
    MasterWilayahServiceProvider.prototype.handleError = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    MasterWilayahServiceProvider.prototype.extractData = function (response) {
        return response.json();
    };
    MasterWilayahServiceProvider.prototype.logData = function (response) {
        console.log(response);
    };
    MasterWilayahServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]])
    ], MasterWilayahServiceProvider);
    return MasterWilayahServiceProvider;
}());

//# sourceMappingURL=master-wilayah-services.js.map

/***/ }),

/***/ 537:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web_animations_js_web_animations_min__ = __webpack_require__(538);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_web_animations_js_web_animations_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_web_animations_js_web_animations_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(539);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_module__ = __webpack_require__(545);



Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 545:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(683);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_components_module__ = __webpack_require__(518);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__ = __webpack_require__(685);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__ = __webpack_require__(726);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_loading_service__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__ = __webpack_require__(528);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_analytics__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_menu_service_menu_service__ = __webpack_require__(731);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_toast_service_toast_service__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_loading_service_loading_service__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_profile_service_profile_service__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable__ = __webpack_require__(526);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__providers_master_service_master_service__ = __webpack_require__(522);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__providers_master_service_master_wilayah_services__ = __webpack_require__(536);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__providers_modal_service_modal_service__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__providers_alert_service_alert_service__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_local_storage_service_local_storage_service__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_reservasi_service_reservasi_service__ = __webpack_require__(520);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__providers_ConfigUrl__ = __webpack_require__(734);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_brmasker_ionic_3__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__ionic_native_file__ = __webpack_require__(530);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_transfer__ = __webpack_require__(531);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_path__ = __webpack_require__(532);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ionic_native_camera__ = __webpack_require__(533);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ionic_native_photo_viewer__ = __webpack_require__(527);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__ionic_native_network__ = __webpack_require__(735);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__providers_register_service_register_service__ = __webpack_require__(525);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ionic_native_screen_orientation__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41_ionic2_super_tabs__ = __webpack_require__(534);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__providers_news_service_news_service__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__providers_flash_flash__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

































//native











var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicModule"].forRoot(__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */], { statusbarPadding: true }, {
                    links: [
                        { loadChildren: '../components/action-sheet/layout-1/action-sheet-layout-1.module#ActionSheetLayout1Module', name: 'ActionSheetLayout1', segment: 'action-sheet-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/action-sheet/layout-2/action-sheet-layout-2.module#ActionSheetLayout2Module', name: 'ActionSheetLayout2', segment: 'action-sheet-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/action-sheet/layout-3/action-sheet-layout-3.module#ActionSheetLayout3Module', name: 'ActionSheetLayout3', segment: 'action-sheet-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-1/check-box-layout-1.module#CheckBoxLayout1Module', name: 'CheckBoxLayout1', segment: 'check-box-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-2/check-box-layout-2.module#CheckBoxLayout2Module', name: 'CheckBoxLayout2', segment: 'check-box-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/check-box/layout-3/check-box-layout-3.module#CheckBoxLayout3Module', name: 'CheckBoxLayout3', segment: 'check-box-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/full-screen-gallery/full-screen-gallery.module#FullScreenGalleryModule', name: 'FullScreenGallery', segment: 'full-screen-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-1/image-gallery-layout-1.module#ImageGalleryLayout1Module', name: 'ImageGalleryLayout1', segment: 'image-gallery-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/image-gallery/layout-2/image-gallery-layout-2.module#ImageGalleryLayout2Module', name: 'ImageGalleryLayout2', segment: 'image-gallery-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-1/appearance-animation-layout-1.module#AppearanceAnimationLayout1Module', name: 'AppearanceAnimationLayout1', segment: 'appearance-animation-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-2/appearance-animation-layout-2.module#AppearanceAnimationLayout2Module', name: 'AppearanceAnimationLayout2', segment: 'appearance-animation-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-3/appearance-animation-layout-3.module#AppearanceAnimationLayout3Module', name: 'AppearanceAnimationLayout3', segment: 'appearance-animation-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-4/appearance-animation-layout-4.module#AppearanceAnimationLayout4Module', name: 'AppearanceAnimationLayout4', segment: 'appearance-animation-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/appearance-animation/layout-5/appearance-animation-layout-5.module#AppearanceAnimationLayout5Module', name: 'AppearanceAnimationLayout5', segment: 'appearance-animation-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-1/drag-and-drop-layout-1.module#DragAndDropLayout1Module', name: 'DragAndDropLayout1', segment: 'drag-and-drop-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-2/drag-and-drop-layout-2.module#DragAndDropLayout2Module', name: 'DragAndDropLayout2', segment: 'drag-and-drop-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/drag-and-drop/layout-3/drag-and-drop-layout-3.module#DragAndDropLayout3Module', name: 'DragAndDropLayout3', segment: 'drag-and-drop-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-1/expandable-layout-1.module#ExpandableLayout1Module', name: 'ExpandableLayout1', segment: 'expandable-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-2/expandable-layout-2.module#ExpandableLayout2Module', name: 'ExpandableLayout2', segment: 'expandable-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/expandable/layout-3/expandable-layout-3.module#ExpandableLayout3Module', name: 'ExpandableLayout3', segment: 'expandable-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-1/google-card-layout-1.module#GoogleCardLayout1Module', name: 'GoogleCardLayout1', segment: 'google-card-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-2/google-card-layout-2.module#GoogleCardLayout2Module', name: 'GoogleCardLayout2', segment: 'google-card-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/google-card/layout-3/google-card-layout-3.module#GoogleCardLayout3Module', name: 'GoogleCardLayout3', segment: 'google-card-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-1/sticky-list-header-layout-1.module#StickyListHeaderLayout1Module', name: 'StickyListHeaderLayout1', segment: 'sticky-list-header-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-2/sticky-list-header-layout-2.module#StickyListHeaderLayout2Module', name: 'StickyListHeaderLayout2', segment: 'sticky-list-header-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/sticky-list-header/layout-3/sticky-list-header-layout-3.module#StickyListHeaderLayout3Module', name: 'StickyListHeaderLayout3', segment: 'sticky-list-header-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-1/swipe-to-dismiss-layout-1.module#SwipeToDismissLayout1Module', name: 'SwipeToDismissLayout1', segment: 'swipe-to-dismiss-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-2/swipe-to-dismiss-layout-2.module#SwipeToDismissLayout2Module', name: 'SwipeToDismissLayout2', segment: 'swipe-to-dismiss-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/list-view/swipe-to-dismiss/layout-3/swipe-to-dismiss-layout-3.module#SwipeToDismissLayout3Module', name: 'SwipeToDismissLayout3', segment: 'swipe-to-dismiss-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-1/login-layout-1.module#LoginLayout1Module', name: 'LoginLayout1', segment: 'login-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/login/layout-2/login-layout-2.module#LoginLayout2Module', name: 'LoginLayout2', segment: 'login-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-1/maps-layout-1.module#MapsLayout1Module', name: 'MapsLayout1', segment: 'maps-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-2/maps-layout-2.module#MapsLayout2Module', name: 'MapsLayout2', segment: 'maps-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/maps/layout-3/maps-layout-3.module#MapsLayout3Module', name: 'MapsLayout3', segment: 'maps-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-1/parallax-layout-1.module#ParallaxLayout1Module', name: 'ParallaxLayout1', segment: 'parallax-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-2/parallax-layout-2.module#ParallaxLayout2Module', name: 'ParallaxLayout2', segment: 'parallax-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-3/parallax-layout-3.module#ParallaxLayout3Module', name: 'ParallaxLayout3', segment: 'parallax-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/parallax/layout-4/parallax-layout-4.module#ParallaxLayout4Module', name: 'ParallaxLayout4', segment: 'parallax-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/qrcode/layout-1/qrcode-layout-1.module#QRcodeLayout1Module', name: 'QRcodeLayout1', segment: 'qrcode-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-1/radio-button-layout-1.module#RadioButtonLayout1Module', name: 'RadioButtonLayout1', segment: 'radio-button-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-2/radio-button-layout-2.module#RadioButtonLayout2Module', name: 'RadioButtonLayout2', segment: 'radio-button-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/radio-button/layout-3/radio-button-layout-3.module#RadioButtonLayout3Module', name: 'RadioButtonLayout3', segment: 'radio-button-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-1/range-layout-1.module#RangeLayout1Module', name: 'RangeLayout1', segment: 'range-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-2/range-layout-2.module#RangeLayout2Module', name: 'RangeLayout2', segment: 'range-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-3/range-layout-3.module#RangeLayout3Module', name: 'RangeLayout3', segment: 'range-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/range/layout-4/range-layout-4.module#RangeLayout4Module', name: 'RangeLayout4', segment: 'range-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-1/register-layout-1.module#RegisterLayout1Module', name: 'RegisterLayout1', segment: 'register-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/register/layout-2/register-layout-2.module#RegisterLayout2Module', name: 'RegisterLayout2', segment: 'register-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-1/search-bar-layout-1.module#SearchBarLayout1Module', name: 'SearchBarLayout1', segment: 'search-bar-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-2/search-bar-layout-2.module#SearchBarLayout2Module', name: 'SearchBarLayout2', segment: 'search-bar-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/search-bar/layout-3/search-bar-layout-3.module#SearchBarLayout3Module', name: 'SearchBarLayout3', segment: 'search-bar-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-1/select-layout-1.module#SelectLayout1Module', name: 'SelectLayout1', segment: 'select-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-2/select-layout-2.module#SelectLayout2Module', name: 'SelectLayout2', segment: 'select-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-3/select-layout-3.module#SelectLayout3Module', name: 'SelectLayout3', segment: 'select-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-4/select-layout-4.module#SelectLayout4Module', name: 'SelectLayout4', segment: 'select-layout-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-5/select-layout-5.module#SelectLayout5Module', name: 'SelectLayout5', segment: 'select-layout-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/select/layout-6/select-layout-6.module#SelectLayout6Module', name: 'SelectLayout6', segment: 'select-layout-6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/spinner/spinner.module#SpinnerModule', name: 'Spinner', segment: 'spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-1/splash-screen-layout-1.module#SplashScreenLayout1Module', name: 'SplashScreenLayout1', segment: 'splash-screen-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-2/splash-screen-layout-2.module#SplashScreenLayout2Module', name: 'SplashScreenLayout2', segment: 'splash-screen-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/splash-screen/layout-3/splash-screen-layout-3.module#SplashScreenLayout3Module', name: 'SplashScreenLayout3', segment: 'splash-screen-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/sub-image-gallery/layout-1/sub-image-gallery-layout-1.module#SubImageGalleryLayout1Module', name: 'SubImageGalleryLayout1', segment: 'sub-image-gallery-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/sub-image-gallery/layout-2/sub-image-gallery-layout-2.module#SubImageGalleryLayout2Module', name: 'SubImageGalleryLayout2', segment: 'sub-image-gallery-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-1/tabs-layout-1.module#TabsLayout1Module', name: 'TabsLayout1', segment: 'tabs-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-2/tabs-layout-2.module#TabsLayout2Module', name: 'TabsLayout2', segment: 'tabs-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/tabs/layout-3/tabs-layout-3.module#TabsLayout3Module', name: 'TabsLayout3', segment: 'tabs-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-1/toggle-layout-1.module#ToggleLayout1Module', name: 'ToggleLayout1', segment: 'toggle-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-2/toggle-layout-2.module#ToggleLayout2Module', name: 'ToggleLayout2', segment: 'toggle-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/toggle/layout-3/toggle-layout-3.module#ToggleLayout3Module', name: 'ToggleLayout3', segment: 'toggle-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-1/wizard-layout-1.module#WizardLayout1Module', name: 'WizardLayout1', segment: 'wizard-layout-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-2/wizard-layout-2.module#WizardLayout2Module', name: 'WizardLayout2', segment: 'wizard-layout-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../components/wizard/layout-3/wizard-layout-3.module#WizardLayout3Module', name: 'WizardLayout3', segment: 'wizard-layout-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-photo/detail-photo.module#DetailPhotoPageModule', name: 'DetailPhotoPage', segment: 'detail-photo', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/detail-transaksi/detail-transaksi.module#DetailTransaksiPageModule', name: 'DetailTransaksiPage', segment: 'detail-transaksi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history-reservasi/history-reservasi.module#HistoryReservasiPageModule', name: 'HistoryReservasiPage', segment: 'history-reservasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/history-transaksi/history-transaksi.module#HistoryTransaksiPageModule', name: 'HistoryTransaksiPage', segment: 'history-transaksi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/home/home.module#HomePageModule', name: 'HomePage', segment: 'home', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/index-profile/index-profile.module#IndexProfilePageModule', name: 'IndexProfilePage', segment: 'index-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/intro-page/intro-page.module#IntroPageModule', name: 'IntroPage', segment: 'intro-page', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-action-sheet/item-details-action-sheet.module#ItemDetailsPageActionSheetModule', name: 'ItemDetailsPageActionSheet', segment: 'item-details-action-sheet', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-appearance-animation/item-details-appearance-animation.module#ItemDetailsPageAppearanceAnimationModule', name: 'ItemDetailsPageAppearanceAnimation', segment: 'item-details-appearance-animation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-check-box/item-details-check-box.module#ItemDetailsPageCheckBoxModule', name: 'ItemDetailsPageCheckBox', segment: 'item-details-check-box', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-drag-and-drop/item-details-drag-and-drop.module#ItemDetailsPageDragAndDropModule', name: 'ItemDetailsPageDragAndDrop', segment: 'item-details-drag-and-drop', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-expandable/item-details-expandable.module#ItemDetailsPageExpandableModule', name: 'ItemDetailsPageExpandable', segment: 'item-details-expandable', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-full-screen-gallery/item-details-full-screen-gallery.module#ItemDetailsPageFullScreenGalleryModule', name: 'ItemDetailsPageFullScreenGallery', segment: 'item-details-full-screen-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-google-card/item-details-google-card.module#ItemDetailsPageGoogleCardModule', name: 'ItemDetailsPageGoogleCard', segment: 'item-details-google-card', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-image-gallery/item-details-image-gallery.module#ItemDetailsPageImageGalleryModule', name: 'ItemDetailsPageImageGallery', segment: 'item-details-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-login/item-details-login.module#ItemDetailsPageLoginModule', name: 'ItemDetailsPageLogin', segment: 'item-details-login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-maps/item-details-maps.module#ItemDetailsPageMapsModule', name: 'ItemDetailsPageMaps', segment: 'item-details-maps', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-parallax/item-details-parallax.module#ItemDetailsPageParallaxModule', name: 'ItemDetailsPageParallax', segment: 'item-details-parallax', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-qrcode/item-details-qrcode.module#ItemDetailsPageQRCodeModule', name: 'ItemDetailsPageQRCode', segment: 'item-details-qrcode', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-radio-button/item-details-radio-button.module#ItemDetailsPageRadioButtonModule', name: 'ItemDetailsPageRadioButton', segment: 'item-details-radio-button', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-range/item-details-range.module#ItemDetailsPageRangeModule', name: 'ItemDetailsPageRange', segment: 'item-details-range', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-register/item-details-register.module#ItemDetailsPageRegisterModule', name: 'ItemDetailsPageRegister', segment: 'item-details-register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-search-bar/item-details-search-bar.module#ItemDetailsPageSearchBarModule', name: 'ItemDetailsPageSearchBar', segment: 'item-details-search-bar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-select/item-details-select.module#ItemDetailsPageSelectModule', name: 'ItemDetailsPageSelect', segment: 'item-details-select', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-spinner/item-details-spinner.module#ItemDetailsPageSpinnerModule', name: 'ItemDetailsPageSpinner', segment: 'item-details-spinner', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-splash-screen/item-details-splash-screen.module#ItemDetailsPageSplashScreenModule', name: 'ItemDetailsPageSplashScreen', segment: 'item-details-splash-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-sticky-list-header/item-details-sticky-list-header.module#ItemDetailsPageStickyListHeaderModule', name: 'ItemDetailsPageStickyListHeader', segment: 'item-details-sticky-list-header', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-sub-image-gallery/item-details-sub-image-gallery.module#ItemDetailsPageSubImageGalleryModule', name: 'ItemDetailsPageSubImageGallery', segment: 'item-details-sub-image-gallery', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-swipe-to-dismiss/item-details-swipe-to-dismiss.module#ItemDetailsPageSwipeToDismissModule', name: 'ItemDetailsPageSwipeToDismiss', segment: 'item-details-swipe-to-dismiss', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-tabs/item-details-tabs.module#ItemDetailsPageTabsModule', name: 'ItemDetailsPageTabs', segment: 'item-details-tabs', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-text-view/item-details-text-view.module#ItemDetailsPageTextViewModule', name: 'ItemDetailsPageTextView', segment: 'item-details-text-view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-toggle/item-details-toggle.module#ItemDetailsPageToggleModule', name: 'ItemDetailsPageToggle', segment: 'item-details-toggle', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details-wizard/item-details-wizard.module#ItemDetailsPageWizardModule', name: 'ItemDetailsPageWizard', segment: 'item-details-wizard', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/item-details/item-details.module#ItemDetailsPageModule', name: 'ItemDetailsPage', segment: 'item-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/list-reservasi/list-reservasi.module#ListReservasiPageModule', name: 'ListReservasiPage', segment: 'list-reservasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/modal-reservasi/modal-reservasi.module#ModalReservasiPageModule', name: 'ModalReservasiPage', segment: 'modal-reservasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/news-feed-details/news-feed-details.module#NewsFeedDetailsPageModule', name: 'NewsFeedDetailsPage', segment: 'news-feed-details', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/otp-verification/otp-verification.module#OtpVerificationPageModule', name: 'OtpVerificationPage', segment: 'otp-verification', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/photo-profile/photo-profile.module#PhotoProfilePageModule', name: 'PhotoProfilePage', segment: 'photo-profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/provider/provider.module#ProviderPageModule', name: 'ProviderPage', segment: 'provider', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/reservasi/reservasi.module#ReservasiPageModule', name: 'ReservasiPage', segment: 'reservasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/serial-number/serial-number.module#SerialNumberPageModule', name: 'SerialNumberPage', segment: 'serial-number', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/super-tab-reservasi/super-tab-reservasi.module#SuperTabReservasiPageModule', name: 'SuperTabReservasiPage', segment: 'super-tab-reservasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-1/tab-page-1.module#TabPage1Module', name: 'TabPage1', segment: 'tab-page-1', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-10/tab-page-10.module#TabPage10Module', name: 'TabPage10', segment: 'tab-page-10', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-11/tab-page-11.module#TabPage11Module', name: 'TabPage11', segment: 'tab-page-11', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-12/tab-page-12.module#TabPage12Module', name: 'TabPage12', segment: 'tab-page-12', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-13/tab-page-13.module#TabPage13Module', name: 'TabPage13', segment: 'tab-page-13', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-14/tab-page-14.module#TabPage14Module', name: 'TabPage14', segment: 'tab-page-14', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-2/tab-page-2.module#TabPage2Module', name: 'TabPage2', segment: 'tab-page-2', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-3/tab-page-3.module#TabPage3Module', name: 'TabPage3', segment: 'tab-page-3', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-4/tab-page-4.module#TabPage4Module', name: 'TabPage4', segment: 'tab-page-4', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-5/tab-page-5.module#TabPage5Module', name: 'TabPage5', segment: 'tab-page-5', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-6/tab-page-6.module#TabPage6Module', name: 'TabPage6', segment: 'tab-page-6', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-7/tab-page-7.module#TabPage7Module', name: 'TabPage7', segment: 'tab-page-7', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-8/tab-page-8.module#TabPage8Module', name: 'TabPage8', segment: 'tab-page-8', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tab-page-9/tab-page-9.module#TabPage9Module', name: 'TabPage9', segment: 'tab-page-9', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/tabs-reservasi/tabs-reservasi.module#TabsReservasiPageModule', name: 'TabsReservasiPage', segment: 'tabs-reservasi', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/items/items.module#ItemsPageModule', name: 'ItemsPage', segment: 'items', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/edit-profile/edit-profile.module#EditProfilePageModule', name: 'EditProfilePage', segment: 'edit-profile', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_11__services_app_settings__["a" /* AppSettings */].FIREBASE_CONFIG),
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_database__["b" /* AngularFireDatabaseModule */], __WEBPACK_IMPORTED_MODULE_10_angularfire2_auth__["a" /* AngularFireAuthModule */], __WEBPACK_IMPORTED_MODULE_9_angularfire2_firestore__["a" /* AngularFirestoreModule */],
                __WEBPACK_IMPORTED_MODULE_23_ionic_select_searchable__["SelectSearchableModule"],
                __WEBPACK_IMPORTED_MODULE_28__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_32_brmasker_ionic_3__["a" /* BrMaskerModule */],
                __WEBPACK_IMPORTED_MODULE_41_ionic2_super_tabs__["a" /* SuperTabsModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_6__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicApp"]],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* MyApp */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]],
            providers: [
                __WEBPACK_IMPORTED_MODULE_16__ionic_native_barcode_scanner__["a" /* BarcodeScanner */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_12__services_toast_service__["a" /* ToastService */], __WEBPACK_IMPORTED_MODULE_13__services_loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_17__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
                //native
                __WEBPACK_IMPORTED_MODULE_33__ionic_native_file__["a" /* File */],
                __WEBPACK_IMPORTED_MODULE_34__ionic_native_transfer__["a" /* Transfer */],
                __WEBPACK_IMPORTED_MODULE_36__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_35__ionic_native_file_path__["a" /* FilePath */],
                __WEBPACK_IMPORTED_MODULE_37__ionic_native_photo_viewer__["a" /* PhotoViewer */],
                __WEBPACK_IMPORTED_MODULE_38__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_40__ionic_native_screen_orientation__["a" /* ScreenOrientation */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicErrorHandler"] },
                __WEBPACK_IMPORTED_MODULE_18__providers_menu_service_menu_service__["a" /* MenuServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_19__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_22__providers_profile_service_profile_service__["a" /* ProfileServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_20__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_13__services_loading_service__["a" /* LoadingService */],
                __WEBPACK_IMPORTED_MODULE_21__providers_loading_service_loading_service__["a" /* LoadingServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_24__providers_master_service_master_service__["a" /* MasterServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_25__providers_master_service_master_wilayah_services__["a" /* MasterWilayahServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_modal_service_modal_service__["a" /* ModalServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_26__providers_modal_service_modal_service__["a" /* ModalServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_27__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_29__providers_local_storage_service_local_storage_service__["a" /* LocalStorageServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_30__providers_reservasi_service_reservasi_service__["a" /* ReservasiServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_31__providers_ConfigUrl__["a" /* ConfigUrl */],
                __WEBPACK_IMPORTED_MODULE_39__providers_register_service_register_service__["a" /* RegisterServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_42__providers_news_service_news_service__["a" /* NewsServiceProvider */],
                __WEBPACK_IMPORTED_MODULE_43__providers_flash_flash__["a" /* FlashProvider */],
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 580:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 261,
	"./af.js": 261,
	"./ar": 262,
	"./ar-dz": 263,
	"./ar-dz.js": 263,
	"./ar-kw": 264,
	"./ar-kw.js": 264,
	"./ar-ly": 265,
	"./ar-ly.js": 265,
	"./ar-ma": 266,
	"./ar-ma.js": 266,
	"./ar-sa": 267,
	"./ar-sa.js": 267,
	"./ar-tn": 268,
	"./ar-tn.js": 268,
	"./ar.js": 262,
	"./az": 269,
	"./az.js": 269,
	"./be": 270,
	"./be.js": 270,
	"./bg": 271,
	"./bg.js": 271,
	"./bm": 272,
	"./bm.js": 272,
	"./bn": 273,
	"./bn.js": 273,
	"./bo": 274,
	"./bo.js": 274,
	"./br": 275,
	"./br.js": 275,
	"./bs": 276,
	"./bs.js": 276,
	"./ca": 277,
	"./ca.js": 277,
	"./cs": 278,
	"./cs.js": 278,
	"./cv": 279,
	"./cv.js": 279,
	"./cy": 280,
	"./cy.js": 280,
	"./da": 281,
	"./da.js": 281,
	"./de": 282,
	"./de-at": 283,
	"./de-at.js": 283,
	"./de-ch": 284,
	"./de-ch.js": 284,
	"./de.js": 282,
	"./dv": 285,
	"./dv.js": 285,
	"./el": 286,
	"./el.js": 286,
	"./en-au": 287,
	"./en-au.js": 287,
	"./en-ca": 288,
	"./en-ca.js": 288,
	"./en-gb": 289,
	"./en-gb.js": 289,
	"./en-ie": 290,
	"./en-ie.js": 290,
	"./en-il": 291,
	"./en-il.js": 291,
	"./en-nz": 292,
	"./en-nz.js": 292,
	"./eo": 293,
	"./eo.js": 293,
	"./es": 294,
	"./es-do": 295,
	"./es-do.js": 295,
	"./es-us": 296,
	"./es-us.js": 296,
	"./es.js": 294,
	"./et": 297,
	"./et.js": 297,
	"./eu": 298,
	"./eu.js": 298,
	"./fa": 299,
	"./fa.js": 299,
	"./fi": 300,
	"./fi.js": 300,
	"./fo": 301,
	"./fo.js": 301,
	"./fr": 302,
	"./fr-ca": 303,
	"./fr-ca.js": 303,
	"./fr-ch": 304,
	"./fr-ch.js": 304,
	"./fr.js": 302,
	"./fy": 305,
	"./fy.js": 305,
	"./gd": 306,
	"./gd.js": 306,
	"./gl": 307,
	"./gl.js": 307,
	"./gom-latn": 308,
	"./gom-latn.js": 308,
	"./gu": 309,
	"./gu.js": 309,
	"./he": 310,
	"./he.js": 310,
	"./hi": 311,
	"./hi.js": 311,
	"./hr": 312,
	"./hr.js": 312,
	"./hu": 313,
	"./hu.js": 313,
	"./hy-am": 314,
	"./hy-am.js": 314,
	"./id": 315,
	"./id.js": 315,
	"./is": 316,
	"./is.js": 316,
	"./it": 317,
	"./it.js": 317,
	"./ja": 318,
	"./ja.js": 318,
	"./jv": 319,
	"./jv.js": 319,
	"./ka": 320,
	"./ka.js": 320,
	"./kk": 321,
	"./kk.js": 321,
	"./km": 322,
	"./km.js": 322,
	"./kn": 323,
	"./kn.js": 323,
	"./ko": 324,
	"./ko.js": 324,
	"./ky": 325,
	"./ky.js": 325,
	"./lb": 326,
	"./lb.js": 326,
	"./lo": 327,
	"./lo.js": 327,
	"./lt": 328,
	"./lt.js": 328,
	"./lv": 329,
	"./lv.js": 329,
	"./me": 330,
	"./me.js": 330,
	"./mi": 331,
	"./mi.js": 331,
	"./mk": 332,
	"./mk.js": 332,
	"./ml": 333,
	"./ml.js": 333,
	"./mn": 334,
	"./mn.js": 334,
	"./mr": 335,
	"./mr.js": 335,
	"./ms": 336,
	"./ms-my": 337,
	"./ms-my.js": 337,
	"./ms.js": 336,
	"./mt": 338,
	"./mt.js": 338,
	"./my": 339,
	"./my.js": 339,
	"./nb": 340,
	"./nb.js": 340,
	"./ne": 341,
	"./ne.js": 341,
	"./nl": 342,
	"./nl-be": 343,
	"./nl-be.js": 343,
	"./nl.js": 342,
	"./nn": 344,
	"./nn.js": 344,
	"./pa-in": 345,
	"./pa-in.js": 345,
	"./pl": 346,
	"./pl.js": 346,
	"./pt": 347,
	"./pt-br": 348,
	"./pt-br.js": 348,
	"./pt.js": 347,
	"./ro": 349,
	"./ro.js": 349,
	"./ru": 350,
	"./ru.js": 350,
	"./sd": 351,
	"./sd.js": 351,
	"./se": 352,
	"./se.js": 352,
	"./si": 353,
	"./si.js": 353,
	"./sk": 354,
	"./sk.js": 354,
	"./sl": 355,
	"./sl.js": 355,
	"./sq": 356,
	"./sq.js": 356,
	"./sr": 357,
	"./sr-cyrl": 358,
	"./sr-cyrl.js": 358,
	"./sr.js": 357,
	"./ss": 359,
	"./ss.js": 359,
	"./sv": 360,
	"./sv.js": 360,
	"./sw": 361,
	"./sw.js": 361,
	"./ta": 362,
	"./ta.js": 362,
	"./te": 363,
	"./te.js": 363,
	"./tet": 364,
	"./tet.js": 364,
	"./tg": 365,
	"./tg.js": 365,
	"./th": 366,
	"./th.js": 366,
	"./tl-ph": 367,
	"./tl-ph.js": 367,
	"./tlh": 368,
	"./tlh.js": 368,
	"./tr": 369,
	"./tr.js": 369,
	"./tzl": 370,
	"./tzl.js": 370,
	"./tzm": 371,
	"./tzm-latn": 372,
	"./tzm-latn.js": 372,
	"./tzm.js": 371,
	"./ug-cn": 373,
	"./ug-cn.js": 373,
	"./uk": 374,
	"./uk.js": 374,
	"./ur": 375,
	"./ur.js": 375,
	"./uz": 376,
	"./uz-latn": 377,
	"./uz-latn.js": 377,
	"./uz.js": 376,
	"./vi": 378,
	"./vi.js": 378,
	"./x-pseudo": 379,
	"./x-pseudo.js": 379,
	"./yo": 380,
	"./yo.js": 380,
	"./zh-cn": 381,
	"./zh-cn.js": 381,
	"./zh-hk": 382,
	"./zh-hk.js": 382,
	"./zh-tw": 383,
	"./zh-tw.js": 383
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 580;

/***/ }),

/***/ 581:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProfileComponent; });
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

/**
 * Generated class for the UserProfileComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var UserProfileComponent = (function () {
    function UserProfileComponent() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], UserProfileComponent.prototype, "profile", void 0);
    UserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'user-profile',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/components/user-profile/user-profile.html"*/'<ng-container *ngIf="profile != undefined && profile.pasien_id > -1">\n  <ion-item-divider box-shadow text-capitalize no-margin no-lines header-title ion-affix>Klinik\n  </ion-item-divider>\n  <ion-item border no-lines>\n    <h2 item-title>{{(profile != undefined) ? profile.unit_usaha:\'-\'}}</h2>\n  </ion-item>\n  <ion-item-divider box-shadow text-capitalize no-margin no-lines header-title ion-affix>No.RM\n  </ion-item-divider>\n  <ion-item border no-lines>\n    <h2 item-title>{{(profile != undefined) ? profile.no_rekam_medis:\'-\'}}</h2>\n  </ion-item>\n</ng-container>\n\n<ion-item-divider box-shadow text-capitalize no-margin no-lines header-title ion-affix>Profile Lengkap\n</ion-item-divider>\n<ion-item border no-lines>\n  <h2 item-title>Tempat Lahir</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.tempat_lahir:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Tanggal Lahir</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.tgl_lahir:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Jenis Kelamin</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.jenis_kelamin_label:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Agama</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.agama:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Kewarganegaraan</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.kewarganegaraan_label:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>No.Identitas </h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.identitas:\'-\'}} : {{(profile != undefined) ? profile.no_identitas:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Nomer HP</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.no_telepon_1:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Nomer Telepon</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.no_telepon_2: \'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Golongan Darah</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.gol_darah: \'-\'}}</h3>\n</ion-item>\n<ion-item-divider box-shadow text-capitalize no-margin no-lines header-title ion-affix>Alamat Lengkap\n</ion-item-divider>\n<ion-item border no-lines>\n  <h2 item-title>Alamat</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.alamat:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Kelurahaan/Kota</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.kelurahan:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Kecamatan</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.kecamatan:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Kabupaten</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.kabupaten:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Provinsi</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.provinsi:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Kode Pos</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.kodepos:\'-\'}}</h3>\n</ion-item>\n<ion-item-divider box-shadow text-capitalize no-margin no-lines header-title ion-affix>Informasi Lainnya\n</ion-item-divider>\n<ion-item border no-lines>\n  <h2 item-title>Umur</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.umur:\'-\'}} Th</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Pendidikan</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.pendidikan:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Pekerjaan</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.pekerjaan:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Status Kawin</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.status_kawin:\'-\'}}</h3>\n</ion-item>\n<ion-item border no-lines>\n  <h2 item-title>Suku</h2>\n  <h3 item-subtitle text-wrap>{{(profile != undefined) ? profile.suku:\'-\'}}</h3>\n</ion-item>\n\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/components/user-profile/user-profile.html"*/
        })
    ], UserProfileComponent);
    return UserProfileComponent;
}());

//# sourceMappingURL=user-profile.js.map

/***/ }),

/***/ 582:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListReservasiComponent; });
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


var ListReservasiComponent = (function () {
    function ListReservasiComponent() {
        var _this = this;
        this.undo = function (slidingItem) {
            slidingItem.close();
        };
        this.delete = function (item) {
            var index = _this.data.indexOf(item);
            if (index > -1) {
                _this.data.splice(index, 1);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ListReservasiComponent.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["Content"])
    ], ListReservasiComponent.prototype, "content", void 0);
    ListReservasiComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'list-reservasi',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/components/list-reservasi/list-reservasi.html"*/'<!--Theme Swipe To Dismiss - Small item + header-->\n<ion-content>\n  <ion-grid no-padding>\n    <ion-row *ngIf="data != null">\n      <ion-col col-12>\n        <!--Header Small item + header-->\n        <ion-list-header no-margin header-section no-lines box-shadow padding-left>\n          <!--Header Big Title-->\n          <h1 header-title text-capitalize></h1>\n        </ion-list-header>\n        <!-- Content -->\n        <ion-list no-margin padding no-lines>\n          <ion-item-sliding *ngFor="let item of data" #slidingItem no-lines padding>\n            <ion-item border no-lines>\n              <!-- Title -->\n              <h2 item-title margin-top>{{item.unit_usaha}}</h2>\n              <!-- Subtitle -->\n              <h3 item-subtitle>{{item.no_reservasi}}</h3>\n              <!-- Details Item-->\n              <span span-medium>{{item.tanggal}} {{item.waktu}}</span>\n              <ion-badge id="notifications-badge" color="danger">{{item.status}}</ion-badge>\n            </ion-item>\n            <!--Action Button-->\n            <ion-item-options no-lines>\n              <!-- Button -->\n              <button ion-button text-capitalize (click)="delete(item)">\n                <ion-icon no-padding icon-large name="ios-trash"></ion-icon>\n              </button>\n            </ion-item-options>\n          </ion-item-sliding>\n        </ion-list>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/components/list-reservasi/list-reservasi.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], ListReservasiComponent);
    return ListReservasiComponent;
}());

//# sourceMappingURL=list-reservasi.js.map

/***/ }),

/***/ 583:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotificationsComponent; });
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

/**
 * Generated class for the NotificationsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var NotificationsComponent = (function () {
    function NotificationsComponent() {
        console.log('Hello NotificationsComponent Component');
        this.text = 'Hello World';
    }
    NotificationsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'notifications',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/components/notifications/notifications.html"*/'<span id="notifications-badge">5</span>\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/components/notifications/notifications.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], NotificationsComponent);
    return NotificationsComponent;
}());

//# sourceMappingURL=notifications.js.map

/***/ }),

/***/ 584:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FlashComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_flash_flash__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__time_bar_time_bar__ = __webpack_require__(384);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__(148);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FlashComponent = (function () {
    function FlashComponent(flashProvider) {
        this.flashProvider = flashProvider;
        this.active = false;
        this.message = '';
        this.activeClass = 'secondary';
        this.flashProvider.show = this.show.bind(this);
        this.flashProvider.hide = this.hide.bind(this);
    }
    Object.defineProperty(FlashComponent.prototype, "tb", {
        set: function (timeBar) {
            if (typeof (timeBar) !== 'undefined') {
                timeBar.startTimer(this.duration);
            }
        },
        enumerable: true,
        configurable: true
    });
    FlashComponent.prototype.show = function (message, duration, type) {
        var _this = this;
        this.message = message;
        this.active = true;
        this.duration = duration;
        if (type) {
            this.activeClass = type;
        }
        this.timeout = setTimeout(function () {
            _this.active = false;
        }, duration);
    };
    FlashComponent.prototype.hide = function () {
        this.active = false;
        clearTimeout(this.timeout);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2__time_bar_time_bar__["a" /* TimeBarComponent */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2__time_bar_time_bar__["a" /* TimeBarComponent */]),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__time_bar_time_bar__["a" /* TimeBarComponent */]])
    ], FlashComponent.prototype, "tb", null);
    FlashComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'flash',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/components/flash/flash.html"*/'<div (click)="hide()" @messageState *ngIf="active" class="flash-container" [ngClass]="activeClass">\n\n  <time-bar></time-bar>\n\n  <div class="message">\n    {{message}}\n  </div>\n\n  <p class="dismiss">tap to dismiss</p>\n\n</div>'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/components/flash/flash.html"*/,
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* trigger */])('messageState', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])('void => *', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ transform: 'translateY(-100%)' }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('200ms ease-out')
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])('* => void', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('200ms ease-in', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ opacity: '0' }))
                    ])
                ])
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_flash_flash__["a" /* FlashProvider */]])
    ], FlashComponent);
    return FlashComponent;
}());

//# sourceMappingURL=flash.js.map

/***/ }),

/***/ 683:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__ = __webpack_require__(474);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_menu_service__ = __webpack_require__(684);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__ = __webpack_require__(476);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, menu, splashScreen, statusBar, menuService, events, storage, authService, screenOrientation) {
        this.platform = platform;
        this.menu = menu;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.menuService = menuService;
        this.events = events;
        this.storage = storage;
        this.authService = authService;
        this.screenOrientation = screenOrientation;
        this.rootPage = "HomePage";
        this.auth = false;
        this.initializeApp();
        this.userAuth();
        this.initUser();
        //Change Color StatusBar
        this.statusBar.backgroundColorByName("white");
        //page 
        this.pages_1 = this.menuService.getGuestMenu();
        this.pages_2 = this.menuService.getClinicUserMenu();
        this.pages_3 = this.menuService.getAuthMenu();
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        if (this.platform.is('android') && this.platform.is('ios')) {
            this.screenOrientation.lock(this.screenOrientation.ORIENTATIONS.PORTRAIT);
        }
        this.platform.ready().then(function () {
            _this.statusBar.overlaysWebView(true);
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.initUser = function () {
        var _this = this;
        this.events.subscribe('user:profile', function (data) {
            if (data) {
                var timeStamp = Math.floor(Date.now());
                _this.profile = data;
                _this.foto = _this.profile.foto + "?ts=" + timeStamp;
            }
        });
        this.events.subscribe('foto:update', function (timeStamp) {
            _this.foto = _this.profile.foto + "?ts=" + timeStamp;
            console.log('foto', _this.foto);
        });
    };
    MyApp.prototype.userAuth = function () {
        var _this = this;
        this.events.subscribe('user:redirect', function () {
            console.log('Redirect to Login Page');
            _this.nav.setRoot('LoginPage');
        });
        this.events.subscribe('auth:status', function (status) {
            console.log('auth:status', status);
            if (status) {
                _this.auth = true;
            }
            else {
                _this.nav.setRoot('HomePage');
                _this.auth = false;
            }
        });
        this.storage.get('user').then(function (user) {
            if (user != undefined || user != null) {
                console.log('User Exist : ', user);
                _this.authService.autoLogin(user);
                _this.storage.get('auth:status').then(function (condition) {
                    console.log('Login status : ', condition);
                    _this.auth = condition;
                });
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        this.menu.open();
        this.nav.setRoot(page.page, {
            page: page,
        });
    };
    MyApp.prototype.toLogin = function () {
        this.nav.setRoot('LoginPage');
    };
    MyApp.prototype.toSerial = function () {
        this.nav.setRoot('SerialNumberPage');
    };
    MyApp.prototype.logOut = function () {
        this.authService.logOut();
    };
    MyApp.prototype.referencesTo = function () {
        if (this.auth) {
            if (this.profile.pasien_id == -1) {
                this.toSerial();
            }
            else {
                //point page
            }
        }
        else {
            this.toLogin();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Nav"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Nav"])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/app/app.html"*/'<!---Settings Main Header-->\n\n<ion-split-pane>\n\n  <!-- Menu Main Top -->\n\n  <ion-menu [content]="content" type="overlay">\n\n    <ion-content>\n\n      <div side-header>\n\n        <button menu><img [src]="\'assets/icon/menu.png\'" menuClose></button>\n\n        <div header>\n\n          <div header-item>\n\n            \n\n            <img [src]="\'assets/images/avatar/user.png\'" avatar *ngIf="! auth">            \n\n            <img [src]="profile.foto" avatar *ngIf="auth && profile">\n\n\n\n            <span user-name *ngIf="! auth">Welcome Back</span>\n\n            <span user-name *ngIf="auth && profile">{{profile.nama}}</span>\n\n\n\n            <div point>\n\n              <span point-icon *ngIf="auth && profile && profile.pasien_id > -1"><img [src]="\'assets/icon/point.png\'"></span>\n\n\n\n              <button point-button menuClose (click)="referencesTo()">\n\n                <span *ngIf="! auth">Belum Login</span>\n\n                <span *ngIf="auth && profile && profile.pasien_id == -1">Belum Verifikasi Kode Klinik</span>\n\n                <span *ngIf="auth && profile && profile.pasien_id > -1">{{profile.points}} points</span>\n\n                <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n              </button>\n\n            </div>\n\n\n\n          </div>\n\n        </div>\n\n      </div>\n\n\n\n      <ion-list no-margin list>\n\n        <button menuClose list-item *ngFor="let p_1 of pages_1" (click)="openPage(p_1)" class="ripple">\n\n          <ion-icon icon-list-item name="{{p_1.icon}}"></ion-icon>\n\n          {{p_1.title}}\n\n        </button>\n\n\n\n        <ng-container *ngIf="auth">\n\n          <button *ngIf="profile && profile.pasien_id == -1 else verified" menuClose list-item (click)="toSerial()" class="ripple">\n\n            <ion-icon icon-list-item name="ios-medkit-outline"></ion-icon>\n\n            Kode Aktivasi\n\n          </button>\n\n          \n\n          <ng-template #verified>\n\n            <ng-container *ngIf="profile && profile.pasien_id >= -1">\n\n              <button menuClose list-item *ngFor="let p_2 of pages_2" (click)="openPage(p_2)" class="ripple">\n\n                <ion-icon icon-list-item name="{{p_2.icon}}"></ion-icon>\n\n                {{p_2.title}}\n\n              </button>\n\n            </ng-container>\n\n          </ng-template>\n\n\n\n          <button menuClose list-item *ngFor="let p_3 of pages_3" (click)="openPage(p_3)" class="ripple">\n\n              <ion-icon icon-list-item name="{{p_3.icon}}"></ion-icon>\n\n              {{p_3.title}}\n\n          </button>\n\n\n\n        </ng-container>\n\n\n\n      </ion-list>\n\n      <ion-footer>\n\n        <ion-toolbar>\n\n          <button *ngIf="! auth" menuClose (click)="toLogin()" footer-button class="ripple">\n\n            LOGIN\n\n          </button>\n\n          <button *ngIf="auth" menuClose (click)="logOut()" footer-button class="ripple">\n\n            LOGOUT\n\n          </button>\n\n        </ion-toolbar>\n\n      </ion-footer>\n\n      <div style="text-align:center">\n\n        <!-- simple name only that assumes the \'fas\' prefix -->\n\n        <fa-icon icon="coffee"></fa-icon>\n\n        <!-- [\'fas\', \'coffee\'] is an array that indicates the [prefix, iconName] -->\n\n        <fa-icon [icon]="[\'fas\', \'coffee\']"></fa-icon>\n\n      </div>\n\n    </ion-content>\n\n  </ion-menu>\n\n  <!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n  <flash></flash>\n\n  <ion-nav [root]="rootPage" #content main swipeBackEnabled="false" main></ion-nav>\n\n</ion-split-pane>\n\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/app/app.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_5__services_menu_service__["a" /* MenuService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Platform"],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["MenuController"],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_5__services_menu_service__["a" /* MenuService */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["Events"],
            __WEBPACK_IMPORTED_MODULE_1__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_6__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_screen_orientation__["a" /* ScreenOrientation */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 684:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuService; });
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

var MenuService = (function () {
    function MenuService() {
        this.getId = function () { return 'menu'; };
        this.getAuthMenu = function () {
            return [
                { "title": "Profile", "page": "IndexProfilePage", "icon": "ios-contact-outline" },
            ];
        };
        this.getClinicUserMenu = function () {
            return [
                { "title": "Reservation", "page": "SuperTabReservasiPage", "icon": "ios-calendar-outline" },
                { "title": "History", "page": "HistoryTransaksiPage", "icon": "ios-time-outline" },
            ];
        };
        this.getGuestMenu = function () {
            return [
                { "title": "Home", "page": "HomePage", "icon": "ios-paper-outline" },
            ];
        };
        this.getAllThemes = function () {
            return [
                // { "title": "Login Page", "theme": "LoginPage", "icon": "ios-lock-outline", "listView" : false, "component": "", "singlePage":true,auth: false},
                { "title": "Profile", "theme": "IndexProfilePage", "icon": "ios-person-outline", "listView": false, "component": "", "singlePage": true, auth: true },
            ];
        };
    }
    MenuService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], MenuService);
    return MenuService;
}());

//# sourceMappingURL=menu-service.js.map

/***/ }),

/***/ 731:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuServiceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(732);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the MenuServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MenuServiceProvider = (function () {
    function MenuServiceProvider(http) {
        this.http = http;
        console.log('Hello MenuServiceProvider Provider');
    }
    MenuServiceProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MenuServiceProvider);
    return MenuServiceProvider;
}());

//# sourceMappingURL=menu-service.js.map

/***/ }),

/***/ 734:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigUrl; });
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

var ConfigUrl = (function () {
    function ConfigUrl() {
        this.getId = function () { return 'menu'; };
    }
    ConfigUrl = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], ConfigUrl);
    return ConfigUrl;
}());

//# sourceMappingURL=ConfigUrl.js.map

/***/ })

},[537]);
//# sourceMappingURL=main.js.map