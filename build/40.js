webpackJsonp([40],{

/***/ 1083:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_news_service_news_service__ = __webpack_require__(524);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_profile_service_profile_service__ = __webpack_require__(517);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_loading_service_loading_service__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__ = __webpack_require__(501);
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
 * Generated class for the ReservasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, profileService, auth, loading, toast, NewsProv, storage, app) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.profileService = profileService;
        this.auth = auth;
        this.loading = loading;
        this.toast = toast;
        this.NewsProv = NewsProv;
        this.storage = storage;
        this.app = app;
        this.headerImage = "";
        this.count = 0;
        this.errorsCount = 0;
        this.page = 1;
        this.NewsFeed = [];
        this.promo = [
            {
                'img': 'assets/icon/contoh_promo.png',
            },
            {
                'img': 'assets/icon/contoh_promo.png',
            },
            {
                'img': 'assets/icon/contoh_promo_2.png',
            },
            {
                'img': 'assets/icon/contoh_promo.png',
            },
            {
                'img': 'assets/icon/contoh_promo.png',
            }
        ];
        this.storage.get('user:profile').then(function (profile) {
            _this.profile = profile;
        });
    }
    HomePage.prototype.reload = function (refresher) {
        this.page = 1;
        this.NewsFeed = [];
        this.loadList('');
        setTimeout(function () {
            console.log('Async operation has ended');
            refresher.complete();
        }, 2000);
    };
    HomePage.prototype.ionViewDidEnter = function () {
        this.page = 1;
        this.NewsFeed = [];
        this.loadList('');
    };
    HomePage.prototype.loadList = function (infiniteScroll) {
        var _this = this;
        this.NewsProv.get_all_news(this.page).subscribe(function (data) {
            _this.NewsFeed = _this.NewsFeed.concat(data['data']);
            _this.maxPage = data.totalPage;
        }, function (error) { return console.log('error mz wk: press "F"'); }, function () { return ''; });
        if (infiniteScroll) {
            infiniteScroll.complete();
            console.log('page', this.page, 'max', this.maxPage);
        }
    };
    HomePage.prototype.loadMore = function (infiniteScroll) {
        var _this = this;
        setTimeout(function () {
            _this.page++;
            _this.loadList(infiniteScroll);
        }, 500);
        if (this.page >= this.maxPage) {
            infiniteScroll.enable(false);
        }
    };
    HomePage.prototype.detail = function (uid) {
        this.navCtrl.push('NewsFeedDetailsPage', {
            'uid': uid,
        });
    };
    //effect
    HomePage.prototype.ngOnChanges = function (changes) {
        if (changes.data && changes.data.currentValue) {
            this.headerImage = changes.data.currentValue.headerImage;
        }
        this.subscribeToIonScroll();
    };
    HomePage.prototype.ngAfterViewInit = function () {
        this.subscribeToIonScroll();
    };
    HomePage.prototype.ngAfterViewChecked = function () {
        this.subscribeToIonScroll();
    };
    HomePage.prototype.isClassActive = function () {
        return this.active;
    };
    HomePage.prototype.subscribeToIonScroll = function () {
        var _this = this;
        if (this.content != null && this.content.ionScroll != null) {
            this.content.ionScroll.subscribe(function (d) {
                if (d.scrollTop < 100) {
                    _this.active = false;
                    return;
                }
                _this.active = true;
            });
        }
    };
    HomePage.prototype.referenceTo = function (page) {
        if (page == 'ReservasiPage') {
            if (this.profile) {
                // auth to page
                if (this.profile.pasien_id == -1) {
                    // Not Verified
                }
                else if (this.profile.pasien_id > 0) {
                    // verified by clinic
                }
            }
            else {
                // non auth
            }
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["Content"])
    ], HomePage.prototype, "content", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/home/home.html"*/'<!--- Theme Parallax - New list -->\n\n<ion-header>\n\n  <ion-navbar transparent [ngClass]="{\'active\':isClassActive()}">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title></ion-title>\n\n    <!-- notif -->\n\n    <ion-buttons end>\n\n      <button ion-button clear icon-only>\n\n        <ion-icon name="notifications" class="bar-button-notif">\n\n          <notifications></notifications>\n\n        </ion-icon>\n\n      </button>\n\n    </ion-buttons>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content elastic-header>\n\n<div container-home>\n\n\n\n</div>\n\n  <div row-home>\n\n    <div header-home>\n\n      <p getting-text *ngIf="profile">Hi <span user-name>{{profile.nama}}</span></p>\n\n      <span getting-text-2>Welcome to</span>\n\n      <span getting-text-3>AURA DERMATOLOGY</span>\n\n      <img [src]="\'assets/images/background/header_home.jpg\'">\n\n    </div>\n\n  </div>\n\n  <div row-two>\n\n    <div plugin-container>\n\n      <div title-plugin>\n\n        <span title-left *ngIf="profile">AURA Points</span>\n\n        <span title-right *ngIf="profile">{{profile.points}} pts</span>\n\n        <span title-left *ngIf="! profile">Login Terlebih Dahulu</span>\n\n      </div>\n\n      <div shortcut-menu>\n\n        <div item>\n\n          <button class="ripple"><img [src]="\'assets/icon/reservasi.png\'"></button>\n\n          <span text>Reservasi</span>\n\n        </div>\n\n        <div item>\n\n          <button class="ripple"><img [src]="\'assets/icon/promo.png\'"></button>\n\n          <span text>Promo</span>\n\n        </div>\n\n        <div item>\n\n          <button class="ripple"><img [src]="\'assets/icon/treatment.png\'"></button>\n\n          <span text>Treatment</span>\n\n        </div>\n\n      </div>\n\n    </div>\n\n  </div>\n\n  <div row-three>\n\n    <div slider-content>\n\n      <button slider-button class="ripple">\n\n        Ongoing Promos\n\n        <ion-icon name="ios-arrow-forward-outline"></ion-icon>\n\n      </button>\n\n    </div>\n\n    <ion-slides [pager]="true" [loop]="true" [autoplay]="3000" [autoplayDisableOnInteraction]="false">\n\n      <ion-slide *ngFor="let item of promo">\n\n        <img [src]="item.img">\n\n      </ion-slide>\n\n    </ion-slides>\n\n  </div>\n\n  <div row-four>\n\n    <div news-feed *ngFor="let new of NewsFeed" class="ripple">\n\n      <img cover [src]="new.main_image">\n\n      <div content>\n\n        <span title>{{new.title}}</span>\n\n        <p spoiler>{{new.spoiler}}</p>\n\n      </div>\n\n    </div>\n\n  </div>\n\n</ion-content>'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_4__providers_profile_service_profile_service__["a" /* ProfileServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_loading_service_loading_service__["a" /* LoadingServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_0__providers_news_service_news_service__["a" /* NewsServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
            __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["App"]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 812:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home__ = __webpack_require__(1083);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_elastic_header_elastic_header_module__ = __webpack_require__(875);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_components_module__ = __webpack_require__(518);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomePageModule = (function () {
    function HomePageModule() {
    }
    HomePageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__home__["a" /* HomePage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_elastic_header_elastic_header_module__["a" /* ElasticHeaderModule */],
                __WEBPACK_IMPORTED_MODULE_4__components_components_module__["a" /* ComponentsModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ 875:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeaderModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__elastic_header__ = __webpack_require__(877);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var ElasticHeaderModule = (function () {
    function ElasticHeaderModule() {
    }
    ElasticHeaderModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_1__elastic_header__["a" /* ElasticHeader */],
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_1__elastic_header__["a" /* ElasticHeader */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ElasticHeaderModule);
    return ElasticHeaderModule;
}());

//# sourceMappingURL=elastic-header.module.js.map

/***/ }),

/***/ 877:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ElasticHeader; });
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

var ElasticHeader = (function () {
    function ElasticHeader(element, renderer) {
        this.element = element;
        this.renderer = renderer;
    }
    ElasticHeader.prototype.ngOnInit = function () {
        var _this = this;
        this.scrollerHandle = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = this.scrollerHandle.firstElementChild;
        this.headerHeight = this.scrollerHandle.clientHeight;
        this.ticking = false;
        this.renderer.setElementStyle(this.header, 'webkitTransformOrigin', 'center bottom');
        window.addEventListener('resize', function () {
            _this.headerHeight = _this.scrollerHandle.clientHeight;
        }, false);
        this.scrollerHandle.addEventListener('scroll', function () {
            if (!_this.ticking) {
                window.requestAnimationFrame(function () {
                    _this.updateElasticHeader();
                });
            }
            _this.ticking = true;
        });
    };
    ElasticHeader.prototype.updateElasticHeader = function () {
        this.scrollTop = this.scrollerHandle.scrollTop;
        if (this.scrollTop >= 0) {
            this.translateAmt = this.scrollTop / 2;
            this.scaleAmt = 1;
        }
        else {
            this.translateAmt = 0;
            this.scaleAmt = -this.scrollTop / this.headerHeight + 1;
        }
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,' + this.translateAmt + 'px,0) scale(' + this.scaleAmt + ',' + this.scaleAmt + ')');
        this.ticking = false;
    };
    ElasticHeader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Directive"])({
            selector: '[elastic-header]'
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ElementRef"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["Renderer"]) === "function" && _b || Object])
    ], ElasticHeader);
    return ElasticHeader;
    var _a, _b;
}());

//# sourceMappingURL=elastic-header.js.map

/***/ })

});
//# sourceMappingURL=40.js.map