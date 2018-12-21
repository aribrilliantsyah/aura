webpackJsonp([54],{

/***/ 1133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabPage2; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_tabs_service__ = __webpack_require__(876);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabPage2 = (function () {
    function TabPage2(tabsService, toastCtrl) {
        var _this = this;
        this.tabsService = tabsService;
        this.toastCtrl = toastCtrl;
        this.tabsService.load("tab2").subscribe(function (snapshot) {
            _this.params = snapshot;
        });
    }
    TabPage2.prototype.ngOnChanges = function (changes) {
        this.params = changes['data'].currentValue;
    };
    TabPage2.prototype.onItemClick = function (item) {
        this.toastCtrl.presentToast("Folow");
    };
    TabPage2 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/tab-page-2/tab-page-2.html"*/'<!--- Settings TAB lauout-2 -->\n\n<ion-content>\n\n  <ion-list-header box-shadow header-section no-lines padding-horizontal no-margin *ngIf="params != null">\n\n      <h1 header-title text-capitalize>{{params.header}}</h1>\n\n  </ion-list-header>\n\n    <ion-list tabPage2 *ngIf="params != null">\n\n        <ion-item border no-lines *ngFor="let item of params.items; let i = index;" (click)="onItemClick(item)">\n\n            <ion-avatar item-start>\n\n                <img [src]="item.avatar" />\n\n            </ion-avatar>\n\n            <h2 item-title>{{item.title}}</h2>\n\n            <h3 item-subtitle text-wrap>{{item.subtitle}}</h3>\n\n            <button text-capitalize button-follow ion-button item-end>{{item.follow}}</button>\n\n        </ion-item>\n\n    </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/tab-page-2/tab-page-2.html"*/,
            providers: [__WEBPACK_IMPORTED_MODULE_2__services_tabs_service__["a" /* TabsService */], __WEBPACK_IMPORTED_MODULE_1__services_toast_service__["a" /* ToastService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_tabs_service__["a" /* TabsService */], __WEBPACK_IMPORTED_MODULE_1__services_toast_service__["a" /* ToastService */]])
    ], TabPage2);
    return TabPage2;
}());

//# sourceMappingURL=tab-page-2.js.map

/***/ }),

/***/ 859:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TabPage2Module", function() { return TabPage2Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_page_2__ = __webpack_require__(1133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var TabPage2Module = (function () {
    function TabPage2Module() {
    }
    TabPage2Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__tab_page_2__["a" /* TabPage2 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__tab_page_2__["a" /* TabPage2 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__tab_page_2__["a" /* TabPage2 */]
            ]
        })
    ], TabPage2Module);
    return TabPage2Module;
}());

//# sourceMappingURL=tab-page-2.module.js.map

/***/ }),

/***/ 876:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_service__ = __webpack_require__(489);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toast_service__ = __webpack_require__(487);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsService = (function () {
    function TabsService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'tabs'; };
        this.getTitle = function () { return 'Tabs'; };
        this.getAllThemes = function () {
            return [
                { "title": "Footer tab - text", "theme": "layout1" },
                { "title": "Footer tab - icons", "theme": "layout2" },
                { "title": "Header tab - text", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.charAt(0).toUpperCase() +
                menuItem.slice(1)]();
        };
        /** Settings Tabs Footer tab - text  **/
        this.getDataForTab1 = function () {
            return {
                "header": "List Frends",
                "items": [
                    {
                        "title": "Theresa Mason",
                        "subtitle": "@theresa.mason",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/24.jpg"
                    },
                    {
                        "title": "Edward Chapman",
                        "subtitle": "@edward.chapman",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/23.jpg"
                    },
                    {
                        "title": "Liam Hughes",
                        "subtitle": "@liam.hughes",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/22.jpg"
                    },
                    {
                        "title": "Thomas Bonnet",
                        "subtitle": "@thomas.bonnet",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/21.jpg"
                    },
                    {
                        "title": "Caitlin Wilkinson",
                        "subtitle": "@caitlin.wilkinson",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/20.jpg"
                    },
                    {
                        "title": "Isabelle Barthelemy",
                        "subtitle": "@isabelle.barthelemy",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/19.jpg"
                    },
                    {
                        "title": "Samantha Kennedy",
                        "subtitle": "@samantha.ennedy",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/18.jpg"
                    }
                ]
            };
        };
        this.getDataForTab2 = function () {
            return {
                "header": "List Frends",
                "items": [
                    {
                        "title": "Isabel Villar",
                        "subtitle": "@isabel.villar",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/17.jpg"
                    },
                    {
                        "title": "Silvia Salvador",
                        "subtitle": "@silvia.salvador",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/16.jpg"
                    },
                    {
                        "title": "Marguerite Thibault",
                        "subtitle": "@marguerite.thibault",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/15.jpg"
                    },
                    {
                        "title": "Marianne Maillet",
                        "subtitle": "@marianne.maillet",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/14.jpg"
                    },
                    {
                        "title": "Julie Martins",
                        "subtitle": "@julie.martins",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/13.jpg"
                    },
                    {
                        "title": "Sofia Zepeda",
                        "subtitle": "@sofia.zepeda",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/12.jpg"
                    },
                    {
                        "title": "Nathalie Voisin",
                        "subtitle": "@nathalie.voisin",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/11.jpg"
                    }
                ]
            };
        };
        this.getDataForTab3 = function () {
            return {
                "header": "List Frends",
                "items": [
                    {
                        "title": "Anne Lesage",
                        "subtitle": "@anne.lesage",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/10.jpg"
                    },
                    {
                        "title": "Vera Mertens",
                        "subtitle": "@vera.mertens",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/9.jpg"
                    },
                    {
                        "title": "Lilli Sauter",
                        "subtitle": "@lilli.sauter",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/24.jpg"
                    },
                    {
                        "title": "Friedhelm Hagen",
                        "subtitle": "@friedhelm.hagen",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/22.jpg"
                    },
                    {
                        "title": "Catrin Seidl",
                        "subtitle": "@catrin.seidl",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/20.jpg"
                    },
                    {
                        "title": "Juliette Ferreira",
                        "subtitle": "@juliette.ferreira",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/18.jpg"
                    },
                    {
                        "title": "Lucia Christ",
                        "subtitle": "@lucia.christ",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/16.jpg"
                    }
                ]
            };
        };
        this.getDataForTab4 = function () {
            return {
                "header": "List Frends",
                "items": [
                    {
                        "title": "Jacqueline Guyon",
                        "subtitle": "@jacqueline.guyon",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/14.jpg"
                    },
                    {
                        "title": "Alice Vieira",
                        "subtitle": "@alice.vieira",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/12.jpg"
                    },
                    {
                        "title": "Marine Aubry",
                        "subtitle": "@marine.aubry",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/10.jpg"
                    },
                    {
                        "title": "Ana Rodrigues",
                        "subtitle": "@ana.rodrigues",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/9.jpg"
                    }
                ]
            };
        };
        this.getDataForTab5 = function () {
            return {
                "header": "List Frends",
                "items": [
                    {
                        "title": "Ana Rodrigues",
                        "subtitle": "@ana.rodrigues",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/11.jpg"
                    },
                    {
                        "title": "Diana Oliveira",
                        "subtitle": "@diana.oliveira",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/13.jpg"
                    },
                    {
                        "title": "Tatiana Abreu",
                        "subtitle": "@tatiana.abreu",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/15.jpg"
                    },
                    {
                        "title": "Sofia Zepeda",
                        "subtitle": "@sofia.zepeda",
                        "follow": "follow",
                        "avatar": "assets/images/avatar/17.jpg"
                    }
                ]
            };
        };
        /** Settings Tabs Footer tab - icons  **/
        this.getDataForTab6 = function () {
            return {
                "headerTitle": "News",
                "items": [
                    {
                        "price": "$13.66",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/1.jpg"
                    },
                    {
                        "price": "$32.06",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/2.jpg"
                    },
                    {
                        "price": "$45.66",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/3.jpg"
                    },
                    {
                        "price": "$13.69",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/4.jpg"
                    },
                    {
                        "price": "$3.66",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/6.jpg"
                    },
                ]
            };
        };
        this.getDataForTab7 = function () {
            return {
                "headerTitle": "News",
                "items": [
                    {
                        "price": "$40.66",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/6.jpg"
                    },
                    {
                        "price": "$46.60",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/7.jpg"
                    },
                    {
                        "price": "$13.05",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/8.jpg"
                    },
                    {
                        "price": "$22.56",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/9.jpg"
                    },
                    {
                        "price": "$23.22",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/10.jpg"
                    },
                ]
            };
        };
        this.getDataForTab8 = function () {
            return {
                "headerTitle": "News",
                "items": [
                    {
                        "price": "$53.66",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/7.jpg"
                    },
                    {
                        "price": "$22.66",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/6.jpg"
                    },
                    {
                        "price": "$23.08",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/4.jpg"
                    },
                    {
                        "price": "$13.14",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/3.jpg"
                    },
                    {
                        "price": "$43.55",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/2.jpg"
                    },
                ]
            };
        };
        this.getDataForTab9 = function () {
            return {
                "headerTitle": "News",
                "items": [
                    {
                        "price": "$43.01",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/8.jpg"
                    },
                    {
                        "price": "$22.66",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/9.jpg"
                    },
                    {
                        "price": "$23.66",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/10.jpg"
                    },
                    {
                        "price": "$13.11",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/11.jpg"
                    },
                    {
                        "price": "$13.16",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/12.jpg"
                    },
                ]
            };
        };
        this.getDataForTab10 = function () {
            return {
                "headerTitle": "News",
                "items": [
                    {
                        "price": "$23.06",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/0.jpg"
                    },
                    {
                        "price": "$31.16",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/2.jpg"
                    },
                    {
                        "price": "$38.66",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/3.jpg"
                    },
                    {
                        "price": "$40.99",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/4.jpg"
                    },
                    {
                        "price": "$63.66",
                        "button": "Buy",
                        "shareIcon": "more",
                        "title": "Lorem ipsum dolor sit 1",
                        "subtitle": "Subtitle",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "cardImage": "assets/images/background/5.jpg"
                    },
                ]
            };
        };
        /** Settings Tabs Header tab - text  **/
        this.getDataForTab11 = function () {
            return {
                "items": [
                    {
                        "title": "Violeta Barros",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/9.jpg"
                    },
                    {
                        "title": "Ariana Barros",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/11.jpg"
                    },
                    {
                        "title": "Juliana Henriques",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "price": "get",
                        "avatar": "assets/images/avatar/13.jpg"
                    },
                    {
                        "title": "Isabel Anguiano",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/15.jpg"
                    },
                    {
                        "title": "Benedita Abreu",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/17.jpg"
                    },
                    {
                        "title": "Maria Cardenas",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/19.jpg"
                    },
                    {
                        "title": "Luis Saavedra",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/21.jpg"
                    }
                ]
            };
        };
        this.getDataForTab12 = function () {
            return {
                "items": [
                    {
                        "title": "Fernando Ortíz",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/23.jpg"
                    },
                    {
                        "title": "Nia Gutkowski",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/24.jpg"
                    },
                    {
                        "title": "Lucas Schultz",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/22.jpg"
                    },
                    {
                        "title": "Camila Hintz",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/20.jpg"
                    },
                    {
                        "title": "Silvia Correa",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/18.jpg"
                    },
                    {
                        "title": "Anna Yost",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/16.jpg"
                    },
                    {
                        "title": "Teresa Puga",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/14.jpg"
                    }
                ]
            };
        };
        this.getDataForTab13 = function () {
            return {
                "items": [
                    {
                        "title": "Eula Wolff",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/24.jpg"
                    },
                    {
                        "title": "Velda White",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/9.jpg"
                    },
                    {
                        "title": "Daniela Bustamante",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/10.jpg"
                    },
                    {
                        "title": "Patricia Flórez",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/11.jpg"
                    },
                    {
                        "title": "Viola Bauch",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/12.jpg"
                    },
                    {
                        "title": "Helena Garibay",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/13.jpg"
                    },
                    {
                        "title": "Martina Brito",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/14.jpg"
                    }
                ]
            };
        };
        this.getDataForTab14 = function () {
            return {
                "items": [
                    {
                        "title": "Aya Gaona",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/15.jpg"
                    },
                    {
                        "title": "Yasmine Hassan",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/16.jpg"
                    },
                    {
                        "title": "Livia Koning",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/17.jpg"
                    },
                    {
                        "title": "Sara Varela",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "price": "get",
                        "avatar": "assets/images/avatar/18.jpg"
                    }
                ]
            };
        };
        this.getDataForLayout1 = function () {
            return [];
        };
        this.getDataForLayout2 = function () {
            return [];
        };
        this.getDataForLayout3 = function () {
            return [];
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    TabsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('tab/' + item)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
                    observer.error([]);
                    observer.complete();
                });
            });
        }
        else {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                that.loadingService.hide();
                observer.next(_this.getDataForTheme(item));
                observer.complete();
            });
        }
    };
    TabsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_5__toast_service__["a" /* ToastService */]])
    ], TabsService);
    return TabsService;
}());

//# sourceMappingURL=tabs-service.js.map

/***/ })

});
//# sourceMappingURL=54.js.map