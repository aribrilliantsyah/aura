webpackJsonp([9],{

/***/ 1142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_HttpService__ = __webpack_require__(1143);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_validation__ = __webpack_require__(1144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_mail_chimp_service__ = __webpack_require__(1145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__ = __webpack_require__(535);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_check_box_service__ = __webpack_require__(1146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_text_view_service__ = __webpack_require__(1147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_spinner_service__ = __webpack_require__(1148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_splash_screen_service__ = __webpack_require__(1149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_search_bar_service__ = __webpack_require__(1150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_wizard_service__ = __webpack_require__(1151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_tabs_service__ = __webpack_require__(876);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_login_service__ = __webpack_require__(1152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_register_service__ = __webpack_require__(1153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_list_view_service__ = __webpack_require__(1154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_list_view_expandable_service__ = __webpack_require__(1155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_list_view_drag_and_drop_service__ = __webpack_require__(1156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_list_view_swipe_to_dismiss_service__ = __webpack_require__(1157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_list_view_appearance_animation_service__ = __webpack_require__(1158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_list_view_google_card_service__ = __webpack_require__(1159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_list_view_sticky_list_header_service__ = __webpack_require__(1160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_parallax_service__ = __webpack_require__(1161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_image_gallery_service__ = __webpack_require__(1162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__services_maps_service__ = __webpack_require__(1163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__services_qrcode_service__ = __webpack_require__(1164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_radio_button_service__ = __webpack_require__(1165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_range_service__ = __webpack_require__(1166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_toggle_service__ = __webpack_require__(1167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__services_select_service__ = __webpack_require__(1168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_action_sheet_service__ = __webpack_require__(1169);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

































var ItemsPage = (function () {
    var ItemsPage = ItemsPage_1 = 
    // services: array
    function ItemsPage(navCtrl, textViewService, spinnerService, imageGalleryService, searchBarService, checkBoxService, parallaxService, wizardService, tabsService, listViewService, listViewExpandableService, listViewDragAndDropService, listViewSwipeToDismissService, listViewAppearanceAnimationService, listViewGoogleCardsService, listViewStickyListHeaderService, loginService, registerService, splashScreenService, httpService, validationService, mailChimpService, mapsService, qRCodeService, radioButtonService, rangeService, toggleService, selectService, actionSheetService, alertCtrl, ga, navParams) {
        this.navCtrl = navCtrl;
        this.textViewService = textViewService;
        this.spinnerService = spinnerService;
        this.imageGalleryService = imageGalleryService;
        this.searchBarService = searchBarService;
        this.checkBoxService = checkBoxService;
        this.parallaxService = parallaxService;
        this.wizardService = wizardService;
        this.tabsService = tabsService;
        this.listViewService = listViewService;
        this.listViewExpandableService = listViewExpandableService;
        this.listViewDragAndDropService = listViewDragAndDropService;
        this.listViewSwipeToDismissService = listViewSwipeToDismissService;
        this.listViewAppearanceAnimationService = listViewAppearanceAnimationService;
        this.listViewGoogleCardsService = listViewGoogleCardsService;
        this.listViewStickyListHeaderService = listViewStickyListHeaderService;
        this.loginService = loginService;
        this.registerService = registerService;
        this.splashScreenService = splashScreenService;
        this.httpService = httpService;
        this.validationService = validationService;
        this.mailChimpService = mailChimpService;
        this.mapsService = mapsService;
        this.qRCodeService = qRCodeService;
        this.radioButtonService = radioButtonService;
        this.rangeService = rangeService;
        this.toggleService = toggleService;
        this.selectService = selectService;
        this.actionSheetService = actionSheetService;
        this.alertCtrl = alertCtrl;
        this.ga = ga;
        this.listServices = {};
        this.setGoogleAnalytics();
        this.listServices = {
            'checkBoxes': this.checkBoxService,
            'login': this.loginService,
            'register': this.registerService,
            'imageGallery': this.imageGalleryService,
            'textViews': this.textViewService,
            'spinner': this.spinnerService,
            'parallax': this.parallaxService,
            'wizard': this.wizardService,
            'searchBars': this.searchBarService,
            'tabs': this.tabsService,
            'listViews': this.listViewService,
            'expandable': this.listViewExpandableService,
            'dragAndDrop': this.listViewDragAndDropService,
            'swipeToDismiss': this.listViewSwipeToDismissService,
            'appearanceAnimation': this.listViewAppearanceAnimationService,
            'googleCards': this.listViewGoogleCardsService,
            'stickyListHeader': this.listViewStickyListHeaderService,
            'splashScreens': this.splashScreenService,
            'maps': this.mapsService,
            'qrcode': this.qRCodeService,
            'radioButton': this.radioButtonService,
            'range': this.rangeService,
            'toggle': this.toggleService,
            'select': this.selectService,
            'actionSheet': this.actionSheetService
        };
        this.componentName = navParams.get('componentName');
        this.service = this.listServices[this.componentName];
        if (this.service) {
            this.pages = this.service.getAllThemes();
            this.title = this.service.getTitle();
            this.eventTrackView(this.title);
        }
        else {
            navCtrl.setRoot("HomePage");
            return;
        }
    };
    ItemsPage.prototype.selectPageForOpen = function (value) {
        var page;
        switch (value) {
            case "spinner":
                page = "ItemDetailsPageSpinner";
                break;
            case "textViews":
                page = "ItemDetailsPageTextView";
                break;
            case "splashScreens":
                page = "ItemDetailsPageSplashScreen";
                break;
            case "searchBars":
                page = "ItemDetailsPageSearchBar";
                break;
            case "checkBoxes":
                page = "ItemDetailsPageCheckBox";
                break;
            case "wizard":
                page = "ItemDetailsPageWizard";
                break;
            case "tabs":
                page = "ItemDetailsPageTabs";
                break;
            case "login":
                page = "ItemDetailsPageLogin";
                break;
            case "register":
                page = "ItemDetailsPageRegister";
                break;
            case "expandable":
                page = "ItemDetailsPageExpandable";
                break;
            case "swipeToDismiss":
                page = "ItemDetailsPageSwipeToDismiss";
                break;
            case "dragAndDrop":
                page = "ItemDetailsPageDragAndDrop";
                break;
            case "appearanceAnimation":
                page = "ItemDetailsPageAppearanceAnimation";
                break;
            case "googleCards":
                page = "ItemDetailsPageGoogleCard";
                break;
            case "stickyListHeader":
                page = "ItemDetailsPageStickyListHeader";
                break;
            case "parallax":
                page = "ItemDetailsPageParallax";
                break;
            case "maps":
                page = "ItemDetailsPageMaps";
                break;
            case "imageGallery":
                page = "ItemDetailsPageImageGallery";
                break;
            case "qrcode":
                page = "ItemDetailsPageQRCode";
                break;
            case "radioButton":
                page = "ItemDetailsPageRadioButton";
                break;
            case "range":
                page = "ItemDetailsPageRange";
                break;
            case "toggle":
                page = "ItemDetailsPageToggle";
                break;
            case "select":
                page = "ItemDetailsPageSelect";
                break;
            case "actionSheet":
                page = "ItemDetailsPageActionSheet";
                break;
            default:
                page = "ItemDetailsPage";
        }
        return page;
    };
    ItemsPage.prototype.openPage = function (page) {
        if (__WEBPACK_IMPORTED_MODULE_6__services_app_settings__["a" /* AppSettings */].SUBSCRIBE) {
            if (this.mailChimpService.showMailChimpForm()) {
                this.mailChimpService.setMailChimpForm(false);
                this.showPrompt();
            }
            else {
                this.navigation(page);
            }
        }
        else {
            this.navigation(page);
        }
    };
    ItemsPage.prototype.navigation = function (page) {
        if (page.listView) {
            this.navCtrl.push(ItemsPage_1, {
                componentName: page.theme
            });
        }
        else {
            this.navCtrl.push(this.selectPageForOpen(this.componentName), {
                service: this.service,
                page: page
            });
        }
    };
    ItemsPage.prototype.showPrompt = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'STAY TUNED FOR NEW <br> THEMES AND FREEBIES',
            message: "SUBSCRIBE TO <br> OUR NEWSLETTER",
            inputs: [
                {
                    name: 'email',
                    placeholder: 'Your e-mail'
                },
            ],
            buttons: [
                {
                    text: 'Cancel'
                },
                {
                    text: 'Send',
                    handler: function (data) {
                        if (data) {
                            if (_this.validationService.isMail(data.email)) {
                                _this.httpService.sendData(data.email).subscribe(function (data) {
                                    _this.mailChimpService.hideMailChimp();
                                }, function (err) {
                                    alert(err);
                                }, null);
                            }
                            else {
                                return false;
                            }
                        }
                        else {
                            return false;
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    ;
    ItemsPage.prototype.setGoogleAnalytics = function () {
        var _this = this;
        if (window.location.hostname != "localhost") {
            this.ga.startTrackerWithId("UA-35500609-14").then(function () {
                _this.ga.trackEvent("active", "user", "click");
            });
        }
        else {
            // console.log("Start Tracker");
        }
    };
    ItemsPage.prototype.eventTrackView = function (event) {
        if (window.location.hostname != "localhost") {
            this.ga.trackView(event, "Items", false);
            this.ga.trackEvent("openPage", event, "click");
        }
        else {
            console.log("event:" + event);
        }
    };
    ItemsPage = ItemsPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/items/items.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <div buy>\n\n      <ion-title>{{title}}</ion-title>\n\n    </div>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content no-padding>\n\n  <ion-list no-padding no-margin sub-menu no-lines *ngIf="pages.length">\n\n    <button ion-item item-title paddinge-left border *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n    </button>\n\n  </ion-list>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/items/items.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__services_mail_chimp_service__["a" /* MailChimpService */], __WEBPACK_IMPORTED_MODULE_8__services_text_view_service__["a" /* TextViewService */], __WEBPACK_IMPORTED_MODULE_9__services_spinner_service__["a" /* SpinnerService */],
                __WEBPACK_IMPORTED_MODULE_10__services_splash_screen_service__["a" /* SplashScreenService */], __WEBPACK_IMPORTED_MODULE_14__services_login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_15__services_register_service__["a" /* RegisterService */],
                __WEBPACK_IMPORTED_MODULE_11__services_search_bar_service__["a" /* SearchBarService */], __WEBPACK_IMPORTED_MODULE_7__services_check_box_service__["a" /* CheckBoxService */], __WEBPACK_IMPORTED_MODULE_12__services_wizard_service__["a" /* WizardService */], __WEBPACK_IMPORTED_MODULE_13__services_tabs_service__["a" /* TabsService */], __WEBPACK_IMPORTED_MODULE_23__services_parallax_service__["a" /* ParallaxService */],
                __WEBPACK_IMPORTED_MODULE_16__services_list_view_service__["a" /* ListViewService */], __WEBPACK_IMPORTED_MODULE_17__services_list_view_expandable_service__["a" /* ListViewExpandableService */], __WEBPACK_IMPORTED_MODULE_18__services_list_view_drag_and_drop_service__["a" /* ListViewDragAndDropService */], __WEBPACK_IMPORTED_MODULE_24__services_image_gallery_service__["a" /* ImageGalleryService */],
                __WEBPACK_IMPORTED_MODULE_19__services_list_view_swipe_to_dismiss_service__["a" /* ListViewSwipeToDismissService */], __WEBPACK_IMPORTED_MODULE_21__services_list_view_google_card_service__["a" /* ListViewGoogleCardsService */], __WEBPACK_IMPORTED_MODULE_20__services_list_view_appearance_animation_service__["a" /* ListViewAppearanceAnimationService */], __WEBPACK_IMPORTED_MODULE_22__services_list_view_sticky_list_header_service__["a" /* ListViewStickyListHeaderService */],
                __WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */], __WEBPACK_IMPORTED_MODULE_3__services_validation__["a" /* ValidationService */], __WEBPACK_IMPORTED_MODULE_25__services_maps_service__["a" /* MapsService */], __WEBPACK_IMPORTED_MODULE_26__services_qrcode_service__["a" /* QRCodeService */], __WEBPACK_IMPORTED_MODULE_27__services_radio_button_service__["a" /* RadioButtonService */], __WEBPACK_IMPORTED_MODULE_28__services_range_service__["a" /* RangeService */],
                __WEBPACK_IMPORTED_MODULE_29__services_toggle_service__["a" /* ToggleService */], __WEBPACK_IMPORTED_MODULE_30__services_select_service__["a" /* SelectService */], __WEBPACK_IMPORTED_MODULE_31__services_action_sheet_service__["a" /* ActionSheetService */]
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_8__services_text_view_service__["a" /* TextViewService */],
            __WEBPACK_IMPORTED_MODULE_9__services_spinner_service__["a" /* SpinnerService */],
            __WEBPACK_IMPORTED_MODULE_24__services_image_gallery_service__["a" /* ImageGalleryService */],
            __WEBPACK_IMPORTED_MODULE_11__services_search_bar_service__["a" /* SearchBarService */],
            __WEBPACK_IMPORTED_MODULE_7__services_check_box_service__["a" /* CheckBoxService */],
            __WEBPACK_IMPORTED_MODULE_23__services_parallax_service__["a" /* ParallaxService */],
            __WEBPACK_IMPORTED_MODULE_12__services_wizard_service__["a" /* WizardService */],
            __WEBPACK_IMPORTED_MODULE_13__services_tabs_service__["a" /* TabsService */],
            __WEBPACK_IMPORTED_MODULE_16__services_list_view_service__["a" /* ListViewService */],
            __WEBPACK_IMPORTED_MODULE_17__services_list_view_expandable_service__["a" /* ListViewExpandableService */],
            __WEBPACK_IMPORTED_MODULE_18__services_list_view_drag_and_drop_service__["a" /* ListViewDragAndDropService */],
            __WEBPACK_IMPORTED_MODULE_19__services_list_view_swipe_to_dismiss_service__["a" /* ListViewSwipeToDismissService */],
            __WEBPACK_IMPORTED_MODULE_20__services_list_view_appearance_animation_service__["a" /* ListViewAppearanceAnimationService */],
            __WEBPACK_IMPORTED_MODULE_21__services_list_view_google_card_service__["a" /* ListViewGoogleCardsService */],
            __WEBPACK_IMPORTED_MODULE_22__services_list_view_sticky_list_header_service__["a" /* ListViewStickyListHeaderService */],
            __WEBPACK_IMPORTED_MODULE_14__services_login_service__["a" /* LoginService */],
            __WEBPACK_IMPORTED_MODULE_15__services_register_service__["a" /* RegisterService */],
            __WEBPACK_IMPORTED_MODULE_10__services_splash_screen_service__["a" /* SplashScreenService */],
            __WEBPACK_IMPORTED_MODULE_2__services_HttpService__["a" /* HttpService */],
            __WEBPACK_IMPORTED_MODULE_3__services_validation__["a" /* ValidationService */],
            __WEBPACK_IMPORTED_MODULE_4__services_mail_chimp_service__["a" /* MailChimpService */],
            __WEBPACK_IMPORTED_MODULE_25__services_maps_service__["a" /* MapsService */],
            __WEBPACK_IMPORTED_MODULE_26__services_qrcode_service__["a" /* QRCodeService */],
            __WEBPACK_IMPORTED_MODULE_27__services_radio_button_service__["a" /* RadioButtonService */],
            __WEBPACK_IMPORTED_MODULE_28__services_range_service__["a" /* RangeService */],
            __WEBPACK_IMPORTED_MODULE_29__services_toggle_service__["a" /* ToggleService */],
            __WEBPACK_IMPORTED_MODULE_30__services_select_service__["a" /* SelectService */],
            __WEBPACK_IMPORTED_MODULE_31__services_action_sheet_service__["a" /* ActionSheetService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["AlertController"],
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_analytics__["a" /* GoogleAnalytics */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"]])
    ], ItemsPage);
    return ItemsPage;
    var ItemsPage_1;
}());

//# sourceMappingURL=items.js.map

/***/ }),

/***/ 1143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/**
 * Created by DRAGAN on 3/22/2017.
 */


var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    Object.defineProperty(HttpService, "parameters", {
        get: function () {
            return [[__WEBPACK_IMPORTED_MODULE_0__angular_http__["b" /* Http */]]];
        },
        enumerable: true,
        configurable: true
    });
    HttpService.prototype.sendData = function (email) {
        var url = "http://facebook.us14.list-manage.com/subscribe/post-json?u=2c0f7baa8dc004a62ff3922e3&id=456928d791&EMAIL=" + encodeURI(email) + "&b_2c0f7baa8dc004a62ff3922e3_456928d791";
        var response = this.http.get(url).map(function (res) { return res.json(); });
        return response;
    };
    return HttpService;
}());

//# sourceMappingURL=HttpService.js.map

/***/ }),

/***/ 1144:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ValidationService; });
/**
 * Created by DRAGAN on 3/22/2017.
 */
var ValidationService = (function () {
    function ValidationService() {
    }
    ValidationService.prototype.isMail = function (email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    };
    return ValidationService;
}());

//# sourceMappingURL=validation.js.map

/***/ }),

/***/ 1145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MailChimpService; });
var MailChimpService = (function () {
    function MailChimpService() {
    }
    MailChimpService.prototype.showMailChimpForm = function () {
        var mailChimp = localStorage.getItem("mailChimp") == "true";
        var mailChimpLocal = localStorage.getItem("mailChimpLocal") == "true";
        if (mailChimp) {
            return false;
        }
        else {
            return mailChimpLocal;
        }
    };
    MailChimpService.prototype.setMailChimpForm = function (isVisible) {
        localStorage.setItem("mailChimpLocal", isVisible + "");
    };
    MailChimpService.prototype.hideMailChimp = function () {
        localStorage.setItem("mailChimp", "true");
    };
    return MailChimpService;
}());

//# sourceMappingURL=mail-chimp-service.js.map

/***/ }),

/***/ 1146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CheckBoxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CheckBoxService = (function () {
    function CheckBoxService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'checkBoxes'; };
        this.getTitle = function () { return 'Check Boxes'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple", "theme": "layout1" },
                { "title": "With Avatar", "theme": "layout2" },
                { "title": "With Details", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onButton: function (item) {
                    that.toastCtrl.presentToast(item.title);
                }
            };
        };
        // CHECK PAGE - Simple data
        this.getDataForLayout1 = function () {
            return {
                "title": "Contacts",
                "items": [
                    {
                        "id": 1,
                        "title": "plegros@gmail.com",
                        "isChecked": false
                    },
                    {
                        "id": 2,
                        "title": "fyundt@gmail.com",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "godfrey.von@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 3,
                        "title": "joey.feil@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 5,
                        "title": "yframi@yahoo.com",
                        "isChecked": true
                    },
                    {
                        "id": 6,
                        "title": "ytillman@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "leola.kerluke@yahoo.com",
                        "isChecked": true
                    },
                    {
                        "id": 8,
                        "title": "ignacio20@yahoo.com",
                        "isChecked": true
                    },
                    {
                        "id": 9,
                        "title": "travis34@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 10,
                        "title": "sauer.brenna@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 11,
                        "title": "michelle27@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 12,
                        "title": "ludie56@gmail.com",
                        "isChecked": true
                    },
                    {
                        "id": 13,
                        "title": "luisa.hauck@yahoo.com",
                        "isChecked": true
                    }
                ]
            };
        };
        // CHECK PAGE - With Avatar data
        this.getDataForLayout2 = function () {
            return {
                "title": "Followers",
                "items": [
                    {
                        "id": 1,
                        "title": "Isabel Anguiano",
                        "subtitle": "@isabel",
                        "isChecked": false,
                        "image": "assets/images/avatar/11.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Luna Adorno",
                        "subtitle": "@luna",
                        "isChecked": false,
                        "image": "assets/images/avatar/10.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Abbie Kelly",
                        "subtitle": "@abbie",
                        "isChecked": true,
                        "image": "assets/images/avatar/9.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Silvia Salvador",
                        "subtitle": "@silvia",
                        "isChecked": true,
                        "image": "assets/images/avatar/14.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Teresa Puga",
                        "subtitle": "@teresa",
                        "isChecked": true,
                        "image": "assets/images/avatar/13.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Tara Saunders",
                        "subtitle": "@tara34",
                        "isChecked": true,
                        "image": "assets/images/avatar/12.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Lisa Chapman",
                        "subtitle": "@lisa957",
                        "isChecked": true,
                        "image": "assets/images/avatar/17.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Evie Stevens",
                        "subtitle": "@evie957",
                        "isChecked": true,
                        "image": "assets/images/avatar/16.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Eva Tapia",
                        "subtitle": "@eva",
                        "isChecked": true,
                        "image": "assets/images/avatar/15.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Julia Requena",
                        "subtitle": "@julia",
                        "isChecked": true,
                        "image": "assets/images/avatar/18.jpg"
                    }
                ]
            };
        };
        // CHECK PAGE - With Details data
        this.getDataForLayout3 = function () {
            return {
                "title": "Companies",
                "items": [
                    {
                        "id": 1,
                        "title": "New York",
                        "subtitle": "United States",
                        "isChecked": true,
                        "detail": "General Electric"
                    },
                    {
                        "id": 2,
                        "title": "Maranello",
                        "subtitle": "Italy",
                        "isChecked": false,
                        "detail": "Ferrari"
                    },
                    {
                        "id": 3,
                        "title": "Boston",
                        "subtitle": "United States",
                        "isChecked": false,
                        "detail": "Gillette"
                    },
                    {
                        "id": 4,
                        "title": "Munich",
                        "subtitle": "Germany",
                        "isChecked": true,
                        "detail": "Siemens AG"
                    },
                    {
                        "id": 5,
                        "title": "Seul",
                        "subtitle": "South Korea",
                        "isChecked": true,
                        "detail": "Hyundai"
                    },
                    {
                        "id": 6,
                        "title": "Herzogenaurach",
                        "subtitle": "Germany",
                        "isChecked": true,
                        "detail": "Adidas"
                    },
                    {
                        "id": 7,
                        "title": "Redwood City",
                        "subtitle": "United States",
                        "isChecked": true,
                        "detail": "Oracle Corporation"
                    },
                    {
                        "id": 8,
                        "title": "Amsterdam",
                        "subtitle": "Netherlands",
                        "isChecked": true,
                        "detail": "Heineken Brewery"
                    },
                    {
                        "id": 9,
                        "title": "Tokyo",
                        "subtitle": "Japan",
                        "isChecked": true,
                        "detail": "Canon"
                    },
                    {
                        "id": 10,
                        "title": "London",
                        "subtitle": "United Kingdom",
                        "isChecked": true,
                        "detail": "Vodafone"
                    },
                    {
                        "id": 11,
                        "title": "Florence",
                        "subtitle": "Italy",
                        "isChecked": true,
                        "detail": "Gucci"
                    }
                ]
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
    CheckBoxService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('checkBoxes/' + item.theme)
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
    CheckBoxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], CheckBoxService);
    return CheckBoxService;
}());

//# sourceMappingURL=check-box-service.js.map

/***/ }),

/***/ 1147:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextViewService; });
var TextViewService = (function () {
    function TextViewService() {
        var _this = this;
        this.getId = function () { return 'textViews'; };
        this.getTitle = function () { return 'Typo + small components'; };
        this.getAllThemes = function () {
            return [
                { "title": "All", "theme": "all" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getDataForAll = function () {
            return [];
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
        };
    }
    TextViewService.prototype.load = function (url) {
        return null;
    };
    ;
    return TextViewService;
}());

//# sourceMappingURL=text-view-service.js.map

/***/ }),

/***/ 1148:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpinnerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SpinnerService = (function () {
    function SpinnerService(loadingService) {
        var _this = this;
        this.loadingService = loadingService;
        this.getId = function () { return 'spinners'; };
        this.getTitle = function () { return 'Spinners'; };
        this.getAllThemes = function () {
            return [
                { "title": "All", "theme": "all" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        // SPINNER - data
        this.getDataForAll = function () {
            return [
                { "icon": "tail-spin" },
                { "icon": "oval" },
                { "icon": "audio" },
                { "icon": "bars" },
                { "icon": "hearts" },
                { "icon": "three-dots" },
                { "icon": "puff" },
                { "icon": "grid" },
                { "icon": "ball-triangle" },
                { "icon": "circles" }
            ];
        };
        this.prepareParams = function (item) {
            return {
                spinner: true,
                title: item.title,
                data: _this.getDataForAll(),
                events: _this.getEventsForTheme(item)
            };
        };
    }
    SpinnerService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            that.loadingService.hide();
            observer.next(_this.getDataForAll());
            observer.complete();
        });
    };
    SpinnerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__loading_service__["a" /* LoadingService */]])
    ], SpinnerService);
    return SpinnerService;
}());

//# sourceMappingURL=spinner-service.js.map

/***/ }),

/***/ 1149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SplashScreenService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SplashScreenService = (function () {
    function SplashScreenService(loadingService) {
        var _this = this;
        this.loadingService = loadingService;
        this.getId = function () { return 'splashScreens'; };
        this.getTitle = function () { return 'Splash screens'; };
        this.getAllThemes = function () {
            return [
                { "title": "Animation Logo + Ken Burns", "theme": "layout1" },
                { "title": "Logo + fade in + Ken Burns", "theme": "layout2" },
                { "title": "Logo + Title + Ken Burns", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // SPLASH-SCREEN - Animation Logo + Ken Burns data
        this.getDataForLayout1 = function () {
            return {
                "duration": 10000,
                "backgroundImage": "assets/images/background/39.jpg",
                "logo": "assets/images/logo/2.png",
                "title": ""
            };
        };
        // SPLASH-SCREEN - Logo + fade in + Ken Burns data
        this.getDataForLayout2 = function () {
            return {
                "duration": 10000,
                "backgroundImage": "assets/images/background/28.jpg",
                "logo": "assets/images/logo/2.png",
                "title": ""
            };
        };
        // SPLASH-SCREEN - Logo + Title + Ken Burns data
        this.getDataForLayout3 = function () {
            return {
                "duration": 10000,
                "backgroundImage": "assets/images/background/29.jpg",
                "logo": "assets/images/logo/2.png",
                "title": "Welcome to the moon"
            };
        };
        this.getEventsForTheme = function (menuItem, navCtrl) {
            return {
                "onRedirect": function () {
                    navCtrl.pop();
                }
            };
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
        this.prepareParams = function (item, navCtrl) {
            var result = {
                title: item.title,
                data: [],
                events: _this.getEventsForTheme(item, navCtrl)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
    }
    SplashScreenService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            that.loadingService.hide();
            observer.next(_this.getDataForTheme(item));
            observer.complete();
        });
    };
    SplashScreenService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__loading_service__["a" /* LoadingService */]])
    ], SplashScreenService);
    return SplashScreenService;
}());

//# sourceMappingURL=splash-screen-service.js.map

/***/ }),

/***/ 1150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchBarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchBarService = (function () {
    function SearchBarService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'searchBars'; };
        this.getTitle = function () { return 'Search bars'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple", "theme": "layout1" },
                { "title": "Field + header", "theme": "layout2" },
                { "title": "Field + header 2", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // SEARCH - Simple data
        this.getDataForLayout1 = function () {
            return {
                "headerTitle": "Simple",
                "items": [
                    {
                        "title": "Friends",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/background/1.jpg"
                    },
                    {
                        "title": "Enemies",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/background/2.jpg"
                    },
                    {
                        "title": "Neutral",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/background/3.jpg"
                    },
                    {
                        "title": "Family",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/background/4.jpg"
                    },
                    {
                        "title": "Guests",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/background/5.jpg"
                    },
                    {
                        "title": "Students",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/background/6.jpg"
                    },
                    {
                        "title": "Friends",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/background/7.jpg"
                    },
                    {
                        "title": "Enemies",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/background/8.jpg"
                    },
                    {
                        "title": "Neutral",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/background/9.jpg"
                    }
                ]
            };
        };
        // SEARCH - Field + header data
        this.getDataForLayout2 = function () {
            return {
                "headerTitle": "Field + header",
                "title": "Just type",
                "headerImage": "assets/images/background/1.jpg",
                "items": [
                    {
                        "title": "iPhone 8",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/images/avatar/1.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "500+",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/images/avatar/2.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "Watch Black",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/images/avatar/3.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "Canon Photoaparat",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/images/avatar/4.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "50mm",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/images/avatar/5.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "Nikon Photoaparat",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/images/avatar/6.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "Sony PS 4",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/images/avatar/7.jpg",
                        "button": "BUY"
                    },
                    {
                        "title": "Watch New",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "avatar": "assets/images/avatar/8.jpg",
                        "button": "BUY"
                    }
                ]
            };
        };
        // SEARCH - Field + header 2 data
        this.getDataForLayout3 = function () {
            return {
                "headerTitle": "Field + header 2",
                "title": "Search Friends",
                "items": [
                    {
                        "id": 1,
                        "title": "Justine Robinson",
                        "subtitle": "@justine",
                        "detail": "Berlin",
                        "avatar": "assets/images/avatar/22.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Ruben Escribano",
                        "subtitle": "@ruben",
                        "detail": "Casablanca",
                        "avatar": "assets/images/avatar/23.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Abbie Wilson",
                        "subtitle": "@abbie453",
                        "detail": "Cape Town",
                        "avatar": "assets/images/avatar/24.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Laura Sarabia",
                        "subtitle": "@laura",
                        "detail": "New Taipei City",
                        "avatar": "assets/images/avatar/19.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Lizzie Rose",
                        "subtitle": "@lizzie",
                        "detail": "Jakarta",
                        "avatar": "assets/images/avatar/20.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Fernando Villegas",
                        "subtitle": "@fernando",
                        "detail": "São Paulo",
                        "avatar": "assets/images/avatar/21.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Theresa Stewart",
                        "subtitle": "@theresa",
                        "detail": "Guangzhou",
                        "avatar": "assets/images/avatar/16.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Helena Scott",
                        "subtitle": "@helena44",
                        "detail": "Shanghai",
                        "avatar": "assets/images/avatar/17.jpg"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onTextChange': function (text) {
                    that.toastCtrl.presentToast(text);
                },
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
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
    SearchBarService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('searchBars/' + item.theme)
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
    SearchBarService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], SearchBarService);
    return SearchBarService;
}());

//# sourceMappingURL=search-bar-service.js.map

/***/ }),

/***/ 1151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WizardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var WizardService = (function () {
    function WizardService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'wizard'; };
        this.getTitle = function () { return 'Wizard'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple + image", "theme": "layout1" },
                { "title": "Big image", "theme": "layout2" },
                { "title": "Big Image + Text", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // WIZARD - Simple + image data
        this.getDataForLayout1 = function () {
            return {
                "btnPrev": "Previous",
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "backgroundImage": "assets/images/background/28.jpg",
                        "logo": "assets/images/logo/1.png",
                        "title": "Aenean feugiat ipsum eget porttitor auctor",
                        "subtitle": "Donec finibus est ac augue feugiat pretium",
                        "description": "Duis gravida, tellus eget condimentum vestibulum, massa metus gravida mauris, elementum sodales nunc tellus ut ligula"
                    },
                    {
                        "backgroundImage": "assets/images/background/29.jpg",
                        "logo": "assets/images/logo/1.png",
                        "title": "Sed sollicitudin tortor id bibendum sollicitudin",
                        "subtitle": "Integer vel mi euismod, egestas neque in, tincidunt tellus",
                        "description": "Donec tincidunt odio eget ante bibendum, eget dapibus mauris hendrerit"
                    },
                    {
                        "backgroundImage": "assets/images/background/30.jpg",
                        "logo": "assets/images/logo/1.png",
                        "title": "In ac tortor in risus commodo molestie",
                        "subtitle": "Pellentesque porttitor turpis eget metus dignissim sollicitudin",
                        "description": "Ut iaculis scelerisque mauris sit amet interdum"
                    }
                ]
            };
        };
        // WIZARD - Big image data
        this.getDataForLayout2 = function () {
            return {
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "welcome": "Welcome",
                        "backgroundImage": "assets/images/background/32.jpg",
                        "title": "Welcome to our new iOS theme",
                        "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "welcome": "Welcome",
                        "backgroundImage": "assets/images/background/26.jpg",
                        "title": "Welcome to our new iOS theme",
                        "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "welcome": "Welcome",
                        "backgroundImage": "assets/images/background/25.jpg",
                        "title": "Welcome to our new iOS theme",
                        "description": "Text for Fragment Example 3 Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    }
                ]
            };
        };
        // WIZARD - Big Image + Text
        this.getDataForLayout3 = function () {
            return {
                "btnNext": "Next",
                "btnFinish": "Finish",
                "items": [
                    {
                        "backgroundImage": "assets/images/background/30.jpg",
                        "subtitle": "Cosmologist Stephen Hawking",
                        "title": "Happy Anniversary, Juno! NASA Probe Marks 1 Year at Jupiter."
                    },
                    {
                        "backgroundImage": "assets/images/background/27.jpg",
                        "subtitle": "Bennu is an asteroid",
                        "title": "Colorful Clouds on Jupiter by Juno"
                    },
                    {
                        "backgroundImage": "assets/images/background/31.jpg",
                        "subtitle": "Light elements clumpeds",
                        "title": "Best Space Stories of The Week!"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onFinish': function (event) {
                    that.toastCtrl.presentToast("Finish");
                }
            };
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
    }
    WizardService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('wizard/' + item.theme)
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
    ;
    WizardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], WizardService);
    return WizardService;
}());

//# sourceMappingURL=wizard-service.js.map

/***/ }),

/***/ 1152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginService = (function () {
    function LoginService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'login'; };
        this.getTitle = function () { return 'Login pages'; };
        this.getAllThemes = function () {
            return [
                { "title": "Login + logo 1", "theme": "layout1" },
                { "title": "Login + logo 2", "theme": "layout2" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // LOGIN - Login + logo 1 data
        this.getDataForLayout1 = function () {
            return {
                "background": "assets/images/background/39.jpg",
                "username": "Enter your username",
                "password": "Enter your password",
                "labelUsername": "USERNAME",
                "labelPassword": "PASSWORD",
                "register": "Register now!",
                "forgotPassword": "Forgot password?",
                "login": "Login",
                "subtitle": "Welcome",
                "title": "Login to your account",
                "skip": "Skip",
                "logo": "assets/images/logo/1.png",
                "errorUser": "Field can't be empty",
                "errorPassword": "Field can't be empty"
            };
        };
        // LOGIN - Login + logo 2 data
        this.getDataForLayout2 = function () {
            return {
                "background": "assets/images/background/28.jpg",
                "forgotPassword": "Forgot password?",
                "subtitle": "Welcome",
                "labelUsername": "USERNAME",
                "labelPassword": "PASSWORD",
                "title": "Login to your account",
                "username": "Enter your username",
                "password": "Enter your password",
                "register": "Register",
                "login": "Login",
                "skip": "Skip",
                "logo": "assets/images/logo/1.png",
                "errorUser": "Field can't be empty",
                "errorPassword": "Field can't be empty"
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onLogin: function (params) {
                    that.toastCtrl.presentToast('onLogin');
                },
                onForgot: function () {
                    that.toastCtrl.presentToast('onForgot');
                },
                onRegister: function (params) {
                    that.toastCtrl.presentToast('onRegister');
                },
                onSkip: function (params) {
                    that.toastCtrl.presentToast('onSkip');
                },
                onFacebook: function (params) {
                    that.toastCtrl.presentToast('onFacebook');
                },
                onTwitter: function (params) {
                    that.toastCtrl.presentToast('onTwitter');
                },
                onGoogle: function (params) {
                    that.toastCtrl.presentToast('onGoogle');
                },
                onPinterest: function (params) {
                    that.toastCtrl.presentToast('onPinterest');
                },
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
    LoginService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('login/' + item.theme)
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
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], LoginService);
    return LoginService;
}());

//# sourceMappingURL=login-service.js.map

/***/ }),

/***/ 1153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterService = (function () {
    function RegisterService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'register'; };
        this.getTitle = function () { return 'Register pages'; };
        this.getAllThemes = function () {
            return [
                { "title": "Register + logo", "theme": "layout1" },
                { "title": "Register + image", "theme": "layout2" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //Register + logo data
        this.getDataForLayout1 = function () {
            return {
                "toolbarTitle": "Register + logo",
                "logo": "assets/images/logo/1.png",
                "register": "register",
                "title": "Register your new account",
                "background": "assets/images/background/29.jpg",
                "username": "Enter your username",
                "city": "Your home town",
                "country": "Where are you from?",
                "password": "Enter your password",
                "email": "Your e-mail address",
                "skip": "Skip",
                "lableUsername": "USERNAME",
                "lablePassword": "PASSWORD",
                "lableEmail": "E-MAIL",
                "lableCountry": "COUNTRY",
                "lableCity": "CITY",
                "errorUser": "Field can't be empty",
                "errorPassword": "Field can't be empty",
                "errorEmail": "Invalid email address",
                "errorCountry": "Field can't be empty",
                "errorCity": "Field can't be empty"
            };
        };
        //Register + image data
        this.getDataForLayout2 = function () {
            return {
                "toolbarTitle": "Register + image",
                "title": "Register",
                "background": "assets/images/background/2.jpg",
                "username": "Enter your username",
                "city": "Your home town",
                "country": "Where are you from?",
                "password": "Enter your password",
                "email": "Your e-mail address",
                "register": "register",
                "lableUsername": "USERNAME",
                "lablePassword": "PASSWORD",
                "lableEmail": "E-MAIL",
                "lableCountry": "COUNTRY",
                "lableCity": "CITY",
                "errorUser": "Field can't be empty",
                "errorPassword": "Field can't be empty",
                "errorEmail": "Invalid email address",
                "errorCountry": "Field can't be empty",
                "errorCity": "Field can't be empty"
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                onRegister: function (params) {
                    that.toastCtrl.presentToast('onRegister');
                },
                onSkip: function (params) {
                    that.toastCtrl.presentToast('onSkip');
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
    RegisterService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('register/' + item.theme)
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
    RegisterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], RegisterService);
    return RegisterService;
}());

//# sourceMappingURL=register-service.js.map

/***/ }),

/***/ 1154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewService; });
var ListViewService = (function () {
    function ListViewService() {
        var _this = this;
        this.getId = function () { return 'listViews'; };
        this.getTitle = function () { return 'List views'; };
        this.getAllThemes = function () {
            return [
                { "title": "Expandable", "theme": "expandable", "listView": true },
                { "title": "Drag&Drop", "theme": "dragAndDrop", "listView": true },
                { "title": "Swipe-to-dismiss", "theme": "swipeToDismiss", "listView": true },
                { "title": "Appearance animations", "theme": "appearanceAnimation", "listView": true },
                { "title": "Google Cards", "theme": "googleCards", "listView": true },
                { "title": "Sticky List Header", "theme": "stickyListHeader", "listView": true },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return [];
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
        };
        this.prepareParams = function (item) {
            return {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
        };
    }
    ListViewService.prototype.load = function (url) {
        return null;
    };
    ;
    return ListViewService;
}());

//# sourceMappingURL=list-view-service.js.map

/***/ }),

/***/ 1155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewExpandableService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewExpandableService = (function () {
    function ListViewExpandableService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'expandable'; };
        this.getTitle = function () { return 'Expandable'; };
        this.getAllThemes = function () {
            return [
                { "title": "List big image", "theme": "layout1" },
                { "title": "Full image with CTA", "theme": "layout2" },
                { "title": "Filters products", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // EXPANDABLE -  List big image data
        this.getDataForLayout1 = function () {
            return {
                "header": "Catalogue",
                "items": [
                    {
                        "id": 1,
                        "title": "Nikon",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/0.jpg",
                        "expandItems": [
                            {
                                "id": 1,
                                "title": "Sony PC",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/7.jpg",
                                "details": "$399.99"
                            },
                            {
                                "id": 2,
                                "title": "Nikon Photoaparat",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/6.jpg",
                                "details": "$2058.99"
                            },
                            {
                                "id": 3,
                                "title": "Objective",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/5.jpg",
                                "details": "$89.99"
                            },
                            {
                                "id": 4,
                                "title": "Canon Photoaparat",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/4.jpg",
                                "details": "$1999.99"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "500+",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/2.jpg",
                        "expandItems": [
                            {
                                "id": 1,
                                "title": "Watch black",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/3.jpg",
                                "details": "$99.99"
                            },
                            {
                                "id": 2,
                                "title": "Sony PC",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/7.jpg",
                                "details": "$499.99"
                            },
                            {
                                "id": 3,
                                "title": "iPhone 8 Plus",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/1.jpg",
                                "details": "$1199.99"
                            },
                            {
                                "id": 4,
                                "title": "Canon Photoaparat",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/0.jpg",
                                "details": "$798.99"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Canon Photoaparat",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/4.jpg",
                        "expandItems": [
                            {
                                "id": 1,
                                "title": "500+",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/2.jpg",
                                "details": "$589.99"
                            },
                            {
                                "id": 2,
                                "title": "Nikon Photoaparat",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/4.jpg",
                                "details": "$799.99"
                            },
                            {
                                "id": 3,
                                "title": "Objective",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/6.jpg",
                                "details": "$99.99"
                            },
                            {
                                "id": 4,
                                "title": "Sony PC",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/7.jpg",
                                "details": "$599.99"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "iPhone 8 Plus",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/1.jpg",
                        "expandItems": [
                            {
                                "id": 1,
                                "title": "Canon Photoaparat",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/4.jpg",
                                "details": "$412.99"
                            },
                            {
                                "id": 2,
                                "title": "Watch black",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/3.jpg",
                                "details": "$657.99"
                            },
                            {
                                "id": 3,
                                "title": "50mm",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/5.jpg",
                                "details": "$58.99"
                            },
                            {
                                "id": 4,
                                "title": "Sony PC",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/7.jpg",
                                "details": "$856.99"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "50mm",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/5.jpg",
                        "expandItems": [
                            {
                                "id": 1,
                                "title": "Nikon",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/6.jpg",
                                "details": "$999.99"
                            },
                            {
                                "id": 2,
                                "title": "Watch black",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/3.jpg",
                                "details": "$299.99"
                            },
                            {
                                "id": 3,
                                "title": "Sony PC",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/7.jpg",
                                "details": "$658.99"
                            },
                            {
                                "id": 4,
                                "title": "500+",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/2.jpg",
                                "details": "$158.99"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Nikon Photoaparat",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                        "image": "assets/images/avatar/6.jpg",
                        "expandItems": [
                            {
                                "id": 1,
                                "title": "iPhone 8 Plus",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/1.jpg",
                                "details": "$1008.99"
                            },
                            {
                                "id": 2,
                                "title": "50mm",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/5.jpg",
                                "details": "$258.99"
                            },
                            {
                                "id": 3,
                                "title": "500+",
                                "description": "Lorem ipsum.",
                                "image": "assets/images/avatar/2.jpg",
                                "details": "$628.99"
                            },
                            {
                                "id": 4,
                                "title": "Sony PC",
                                "description": "Lorem ipsum",
                                "image": "assets/images/avatar/7.jpg",
                                "details": "$580.99"
                            }
                        ]
                    }
                ]
            };
        };
        // EXPANDABLE - Full image with CTA data
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Open Air Concerts",
                        "subtitle": "Monday, 15th Oct. 2018",
                        "backgroundImage": "assets/images/background/11.jpg",
                        "icon": "ios-arrow-dropright",
                        "iconText": "Watch now",
                        "expandItems": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    },
                    {
                        "id": 2,
                        "title": "Concert Summer",
                        "subtitle": "Wendsday, 21st Oct. 2018",
                        "backgroundImage": "assets/images/background/14.jpg",
                        "icon": "ios-arrow-dropright",
                        "iconText": "Watch now",
                        "expandItems": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    },
                    {
                        "id": 3,
                        "title": "Summer Open Air Festival",
                        "subtitle": "Wendsday, 21st Oct. 2018",
                        "backgroundImage": "assets/images/background/13.jpg",
                        "icon": "ios-arrow-dropright",
                        "iconText": "Watch now",
                        "expandItems": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    },
                    {
                        "id": 4,
                        "title": "Classic Open Air",
                        "subtitle": "Wendsday, 21st Oct. 2018",
                        "backgroundImage": "assets/images/background/10.jpg",
                        "icon": "ios-arrow-dropright",
                        "iconText": "Watch now",
                        "expandItems": {
                            "iconsStars": [
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": true,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                },
                                {
                                    "isActive": false,
                                    "iconActive": "icon-star",
                                    "iconInactive": "icon-star-outline"
                                }
                            ],
                            "reviews": "4.12 (78 reviews)",
                            "title": "Lorem ipsum dolor sit amet",
                            "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                        }
                    }
                ]
            };
        };
        // EXPANDABLE - Filters products
        this.getDataForLayout3 = function () {
            return {
                "header": "Popular Car",
                "button": "CHOOSE",
                "items": [
                    {
                        "id": 1,
                        "title": "Tesla Model S",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Toyota RAV4",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Audi Q5",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "BMW 3 Series",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Audi Q7",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Subaru Impreza",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "BMW X5",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "title": "Hyundai Tucson",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 9,
                        "title": "Lexus RX 350",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 10,
                        "title": "Jeep Wrangler",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    },
                    {
                        "id": 11,
                        "title": "Subaru Outback",
                        "icon": "icon-chevron-right",
                        "expandItems": [
                            {
                                "title": "year",
                                "isChecked": "true"
                            },
                            {
                                "title": "price",
                                "isChecked": "true"
                            },
                            {
                                "title": "fuel",
                                "isChecked": "false"
                            },
                            {
                                "title": "color",
                                "isChecked": "false"
                            },
                            {
                                "title": "horse power",
                                "isChecked": "false"
                            }
                        ]
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onRates': function (index) {
                    that.toastCtrl.presentToast("Rates " + (index + 1));
                },
                'onCheckBoxClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onButtonClick': function (item) {
                    that.toastCtrl.presentToast("Refine");
                }
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ListViewExpandableService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/expandable/' + item.theme)
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
    ListViewExpandableService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewExpandableService);
    return ListViewExpandableService;
}());

//# sourceMappingURL=list-view-expandable-service.js.map

/***/ }),

/***/ 1156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewDragAndDropService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewDragAndDropService = (function () {
    function ListViewDragAndDropService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'dragAndDrop'; };
        this.getTitle = function () { return 'Drag and Drop'; };
        this.getAllThemes = function () {
            return [
                { "title": "Small item + header", "theme": "layout1" },
                { "title": "Products + CTA header", "theme": "layout2" },
                { "title": "Medium item with avatar", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // DRAGEN AND DROP - Small item + header data
        this.getDataForLayout1 = function () {
            return {
                "header": "Restaurants",
                "items": [
                    {
                        "id": 1,
                        "title": "Rainforest Cafe",
                        "subtitle": "New York City",
                        "textIcon": "7186 km"
                    },
                    {
                        "id": 2,
                        "title": "Big Boy",
                        "subtitle": "Los Angeles",
                        "textIcon": "2281 km"
                    },
                    {
                        "id": 3,
                        "title": "California Pizza Kitchen",
                        "subtitle": "Beijing",
                        "textIcon": "1748 km"
                    },
                    {
                        "id": 4,
                        "title": "Cheese Burger in Paradise",
                        "subtitle": "Delhi",
                        "textIcon": "3450 km"
                    },
                    {
                        "id": 5,
                        "title": "T.G.I. Friday's",
                        "subtitle": "Shanghai",
                        "textIcon": "7374 km"
                    },
                    {
                        "id": 6,
                        "title": "Heart Attack Grill",
                        "subtitle": "Paris",
                        "textIcon": "6070 km"
                    },
                    {
                        "id": 7,
                        "title": "Heart Attack Grill",
                        "subtitle": "Istanbul",
                        "textIcon": "8158 km"
                    },
                    {
                        "id": 8,
                        "title": "Dick's Last Resort",
                        "subtitle": "Tokyo",
                        "textIcon": "292 km"
                    },
                    {
                        "id": 9,
                        "title": "Steak 'n Shake",
                        "subtitle": "Guangzhou",
                        "textIcon": "9231 km"
                    },
                    {
                        "id": 10,
                        "title": "Bluepoint Sage Cafe",
                        "subtitle": "Mumbai",
                        "textIcon": "9972 km"
                    },
                    {
                        "id": 11,
                        "title": "Ground Round",
                        "subtitle": "Moscow",
                        "textIcon": "9720 km"
                    },
                    {
                        "id": 12,
                        "title": "Waffle House",
                        "subtitle": "São Paulo",
                        "textIcon": "988 km"
                    },
                    {
                        "id": 13,
                        "title": "Quaker Steak & Lube",
                        "subtitle": "Shenzhen",
                        "textIcon": "1000 km"
                    },
                    {
                        "id": 14,
                        "title": "Boston Pizza",
                        "subtitle": "Boston",
                        "textIcon": "2565 km"
                    }
                ]
            };
        };
        // DRAGEN AND DROP - Products + CTA header data
        this.getDataForLayout2 = function () {
            return {
                "header": "Cart",
                "title": "Make order now!",
                "subtitle": "Reorder list by your wish.",
                "button": "Get",
                "items": [
                    {
                        "id": 1,
                        "title": "500+",
                        "subtitle": "20% Off",
                        "image": "assets/images/avatar/2.jpg",
                        "price": "$199.99"
                    },
                    {
                        "id": 2,
                        "title": "iWatch black",
                        "subtitle": "15% Off",
                        "image": "assets/images/avatar/3.jpg",
                        "price": "$295.99"
                    },
                    {
                        "id": 3,
                        "title": "Nikon Photoaparat",
                        "subtitle": "22% Off",
                        "image": "assets/images/avatar/6.jpg",
                        "price": "$1032.99"
                    },
                    {
                        "id": 4,
                        "title": "Canon Photoaparat",
                        "subtitle": "10% Off",
                        "image": "assets/images/avatar/0.jpg",
                        "price": "$1269.99"
                    },
                    {
                        "id": 5,
                        "title": "50mm",
                        "subtitle": "12% Off",
                        "image": "assets/images/avatar/5.jpg",
                        "price": "$34.99"
                    },
                    {
                        "id": 6,
                        "title": "Sony PS",
                        "subtitle": "14% Off",
                        "image": "assets/images/avatar/7.jpg",
                        "price": "$499.99"
                    },
                ]
            };
        };
        // DRAGEN AND DROP - Medium item with avatar data
        this.getDataForLayout3 = function () {
            return {
                "header": "List friends",
                "items": [
                    {
                        "id": 1,
                        "title": "Erica Romaguera",
                        "subtitle": "@erica",
                        "image": "assets/images/avatar/13.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Nia Gutkowski",
                        "subtitle": "@nia234",
                        "image": "assets/images/avatar/14.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Camila Hintz",
                        "subtitle": "@camila",
                        "image": "assets/images/avatar/15.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Anna Yost",
                        "subtitle": "@anna",
                        "image": "assets/images/avatar/16.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Georgianna Baumbach",
                        "subtitle": "@georgianna",
                        "image": "assets/images/avatar/17.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Jaqueline Stehr",
                        "subtitle": "@jaqueline",
                        "image": "assets/images/avatar/18.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Naomi Mante",
                        "subtitle": "@naomi",
                        "image": "assets/images/avatar/19.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Amaya Abshire",
                        "subtitle": "@amaya",
                        "image": "assets/images/avatar/20.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Rickie Glover",
                        "subtitle": "@rickie",
                        "image": "assets/images/avatar/21.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Antone Mayert",
                        "subtitle": "@antone",
                        "image": "assets/images/avatar/22.jpg"
                    },
                    {
                        "id": 11,
                        "title": "Alison Streich",
                        "subtitle": "@alison",
                        "image": "assets/images/avatar/23.jpg"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onProceed': function (item) {
                    that.toastCtrl.presentToast("Proceed");
                },
                'onButtonGetClick': function (item) {
                    that.toastCtrl.presentToast("Confirm");
                },
                'onButtonClick': function (item) {
                    that.toastCtrl.presentToast("Confirm");
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
    ListViewDragAndDropService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/dragAndDrop/' + item.theme)
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
    ListViewDragAndDropService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewDragAndDropService);
    return ListViewDragAndDropService;
}());

//# sourceMappingURL=list-view-drag-and-drop-service.js.map

/***/ }),

/***/ 1157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewSwipeToDismissService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewSwipeToDismissService = (function () {
    function ListViewSwipeToDismissService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'swipeToDismiss'; };
        this.getTitle = function () { return 'Swipe to dismiss'; };
        this.getAllThemes = function () {
            return [
                { "title": "Small item + header", "theme": "layout1" },
                { "title": "Products + CTA", "theme": "layout2" },
                { "title": "Full width image", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // SWIPE TO DISMISS - Small item + header data
        this.getDataForLayout1 = function () {
            return {
                "header": "Inbox",
                "title": "8 new mesages",
                "subtitle": "Mark all messages as read.",
                "button": "ok",
                "items": [
                    {
                        "id": 1,
                        "title": "Yasmine Hassan",
                        "subtitle": "AIGA Design Conference",
                        "time": "6min ago",
                        "icon": "ios-information-circle-outline"
                    },
                    {
                        "id": 2,
                        "title": "Adam Wolters",
                        "subtitle": "An Event Apart",
                        "time": "58min ago",
                        "icon": "ios-information-circle-outline"
                    },
                    {
                        "id": 3,
                        "title": "Livia Koning",
                        "subtitle": "Core 77 Conference",
                        "time": "12min ago",
                        "icon": "ios-information-circle-outline"
                    },
                    {
                        "id": 4,
                        "title": "Fatima Hussein",
                        "subtitle": "London Design Festival",
                        "time": "23min ago",
                        "icon": "ios-information-circle-outline"
                    },
                    {
                        "id": 5,
                        "title": "Lars Sambo",
                        "subtitle": "NeoCon",
                        "time": "43min ago",
                        "icon": "ios-information-circle-outline"
                    },
                    {
                        "id": 6,
                        "title": "Kyan Zhou",
                        "subtitle": "New York Times Cities for Tomorrow",
                        "time": "62min ago",
                        "icon": "ios-information-circle-outline"
                    },
                    {
                        "id": 7,
                        "title": "Amina Mohan",
                        "subtitle": "Salone del Mobile Milano",
                        "time": "81min ago",
                        "icon": "ios-information-circle-outline"
                    },
                    {
                        "id": 8,
                        "title": "Emir van der Velden",
                        "subtitle": "Creative Mornings",
                        "time": "98min ago",
                        "icon": "ios-information-circle-outline"
                    }
                ]
            };
        };
        // SWIPE TO DISMISS - Products + CTA data
        this.getDataForLayout2 = function () {
            return {
                "header": "Followings",
                "items": [
                    {
                        "id": 1,
                        "title": "Isabel Anguiano",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/9.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 2,
                        "title": "Iria Mascareñas",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/10.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 3,
                        "title": "Maria Cardenas",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/11.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 4,
                        "title": "Silvia Salvador",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/12.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 5,
                        "title": "Marina Vidal",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur.",
                        "image": "assets/images/avatar/13.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 6,
                        "title": "Sara Alcántarl",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/14.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    },
                    {
                        "id": 7,
                        "title": "Gabriela Reyes",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur",
                        "image": "assets/images/avatar/15.jpg",
                        "ionBadge": "Follow",
                        "delate": "Delete"
                    }
                ]
            };
        };
        // SWIPE TO DISMISS - Full width image data
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Acoustic Guitars",
                        "subtitle": "Pre-sale",
                        "image": "assets/images/background/10.jpg",
                        "delate": "Delete"
                    },
                    {
                        "id": 2,
                        "title": "Bass guitar",
                        "subtitle": "Order now!",
                        "image": "assets/images/background/13.jpg",
                        "delate": "Delete"
                    },
                    {
                        "id": 3,
                        "title": "Classical guitar",
                        "subtitle": "Pre-sale",
                        "image": "assets/images/background/15.jpg",
                        "delate": "Delete"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onDelete': function (item) {
                    that.toastCtrl.presentToast("Delete " + item.title);
                },
                'onButtonGetClick': function (item) {
                    that.toastCtrl.presentToast("Like");
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
    ListViewSwipeToDismissService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/swipeToDismiss/' + item.theme)
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
    ListViewSwipeToDismissService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewSwipeToDismissService);
    return ListViewSwipeToDismissService;
}());

//# sourceMappingURL=list-view-swipe-to-dismiss-service.js.map

/***/ }),

/***/ 1158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewAppearanceAnimationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewAppearanceAnimationService = (function () {
    function ListViewAppearanceAnimationService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'appearanceAnimations'; };
        this.getTitle = function () { return 'Appearance animations'; };
        this.getAllThemes = function () {
            return [
                { "title": "Fade in left", "theme": "layout1" },
                { "title": "Fade in right", "theme": "layout2" },
                { "title": "Fade in down", "theme": "layout3" },
                { "title": "Fade in", "theme": "layout4" },
                { "title": "Zoom in", "theme": "layout5" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this.getAnimationData();
        };
        // APPEARANCE ANIMATIONS - Fade in left, Fade in right, Fade in down, Fade in, Zoom in
        this.getAnimationData = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Theresa Mason",
                        "image": "assets/images/avatar/24.jpg",
                        "favorite": true
                    },
                    {
                        "id": 2,
                        "title": "Lucas Schultz",
                        "image": "assets/images/avatar/23.jpg",
                        "favorite": false
                    },
                    {
                        "id": 3,
                        "title": "Ray Clarke",
                        "image": "assets/images/avatar/22.jpg",
                        "favorite": true
                    },
                    {
                        "id": 4,
                        "title": "Dimitri Abernathy",
                        "image": "assets/images/avatar/21.jpg",
                        "favorite": false
                    },
                    {
                        "id": 5,
                        "title": "Rosie Harrison",
                        "image": "assets/images/avatar/20.jpg",
                        "favorite": false
                    },
                    {
                        "id": 6,
                        "title": "Camila Hintz",
                        "image": "assets/images/avatar/19.jpg",
                        "favorite": true
                    },
                    {
                        "id": 7,
                        "title": "Ines Daniel",
                        "image": "assets/images/avatar/18.jpg",
                        "favorite": false
                    },
                    {
                        "id": 8,
                        "title": "Fiona Edwards",
                        "image": "assets/images/avatar/16.jpg",
                        "favorite": true
                    },
                    {
                        "id": 9,
                        "title": "Ella Emmerich",
                        "image": "assets/images/avatar/15.jpg",
                        "favorite": true
                    },
                    {
                        "id": 10,
                        "title": "Elisa Schroeder",
                        "image": "assets/images/avatar/14.jpg",
                        "favorite": true
                    },
                    {
                        "id": 11,
                        "title": "Naomi Mante",
                        "image": "assets/images/avatar/13.jpg",
                        "favorite": false
                    },
                    {
                        "id": 12,
                        "title": "Olivia Stevens",
                        "image": "assets/images/avatar/12.jpg",
                        "favorite": false
                    },
                    {
                        "id": 13,
                        "title": "Salma Bayer",
                        "image": "assets/images/avatar/11.jpg",
                        "favorite": false
                    },
                    {
                        "id": 14,
                        "title": "Eldora Mills",
                        "image": "assets/images/avatar/10.jpg",
                        "favorite": false
                    },
                    {
                        "id": 15,
                        "title": "Ella Richardson",
                        "image": "assets/images/avatar/9.jpg",
                        "favorite": false
                    },
                    {
                        "id": 16,
                        "title": "Jennifer Reid",
                        "image": "assets/images/avatar/17.jpg",
                        "favorite": false
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onFavorite': function (item) {
                    item.favorite = !item.favorite;
                },
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
    ListViewAppearanceAnimationService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/appearanceAnimations/' + item.theme)
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
    ListViewAppearanceAnimationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewAppearanceAnimationService);
    return ListViewAppearanceAnimationService;
}());

//# sourceMappingURL=list-view-appearance-animation-service.js.map

/***/ }),

/***/ 1159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewGoogleCardsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewGoogleCardsService = (function () {
    function ListViewGoogleCardsService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'googleCards'; };
        this.getTitle = function () { return 'Google Cards'; };
        this.getAllThemes = function () {
            return [
                { "title": "Full image cards", "theme": "layout1" },
                { "title": "Styled cards 2", "theme": "layout2" },
                { "title": "Styled cards", "theme": "layout3" }
            ];
        };
        // GOOGLE CARD - Full image cards data
        this.getDataForLayout1 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Free Ride",
                        "backgroundImage": "assets/images/background/2.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 2,
                        "title": "Bridge Tour",
                        "backgroundImage": "assets/images/background/5.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 3,
                        "title": "Sea Tour",
                        "backgroundImage": "assets/images/background/21.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 4,
                        "title": "Main Stage Event",
                        "backgroundImage": "assets/images/background/7.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 5,
                        "title": "Classic Open Air",
                        "backgroundImage": "assets/images/background/11.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 6,
                        "title": "Concert Summer",
                        "backgroundImage": "assets/images/background/14.jpg",
                        "description": "LCras odio felis, blandit sit amet mi nec, euismod mattis tellus."
                    },
                    {
                        "id": 7,
                        "title": "Open Air Concerts",
                        "backgroundImage": "assets/images/background/10.jpg",
                        "description": "Cras odio felis, blandit sit amet mi nec, euismod mattis tellus.."
                    }
                ]
            };
        };
        // GOOGLE CARD - Styled cards 2 data
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Digital Watch",
                        "subtitle": "Category: Watch",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                        "image": "assets/images/background/6.jpg",
                        "price": "$144.50",
                        "button": "Buy",
                        "shareIcon": "more"
                    },
                    {
                        "id": 2,
                        "title": "Android Watch",
                        "subtitle": "Category: Watch",
                        "description": "Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words",
                        "image": "assets/images/background/9.jpg",
                        "price": "$130.99",
                        "button": "Buy",
                        "shareIcon": "more"
                    },
                    {
                        "id": 3,
                        "title": "Acoustic Guitars",
                        "subtitle": "Category: Guitars",
                        "description": "Icero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum",
                        "image": "assets/images/background/10.jpg",
                        "price": "$354.05",
                        "button": "Buy",
                        "shareIcon": "more"
                    },
                    {
                        "id": 4,
                        "title": "Bass guitar",
                        "subtitle": "Category: Guitars",
                        "description": "Here are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form",
                        "image": "assets/images/background/13.jpg",
                        "price": "$338.99",
                        "button": "Buy",
                        "shareIcon": "more"
                    },
                    {
                        "id": 5,
                        "title": "Classical guitar",
                        "subtitle": "Category: Guitars",
                        "description": "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC",
                        "image": "assets/images/background/15.jpg",
                        "price": "$109.60",
                        "button": "Buy",
                        "shareIcon": "more"
                    }
                ]
            };
        };
        // GOOGLE CARD - Styled cards data
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "category": "best offer",
                        "image": "assets/images/background/11.jpg",
                        "title": "Free Ride Tour",
                        "subtitle": "West Avenue, NYC",
                        "button": "$135.99"
                    },
                    {
                        "id": 2,
                        "category": "main event",
                        "image": "assets/images/background/14.jpg",
                        "title": "Open Air Concert",
                        "subtitle": "Hyde Park, London",
                        "button": "$312.99"
                    },
                    {
                        "id": 3,
                        "category": "Best Tourt",
                        "image": "assets/images/background/21.jpg",
                        "title": "Sea ture",
                        "subtitle": "Guilin, Kweilin",
                        "button": "$213.45"
                    },
                    {
                        "id": 4,
                        "category": "Mountain",
                        "image": "assets/images/background/7.jpg",
                        "title": "Mountain Trout",
                        "subtitle": "Mountain Trout Camp",
                        "button": "$338.60"
                    },
                    {
                        "id": 5,
                        "category": "Bridge Tour",
                        "image": "assets/images/background/5.jpg",
                        "title": "Bridge Tour",
                        "subtitle": "BridgeClimb, Sydney",
                        "button": "$410.85"
                    },
                    {
                        "id": 6,
                        "category": "best events",
                        "image": "assets/images/background/2.jpg",
                        "title": "Main Stage Event",
                        "subtitle": "Hyde Park, London ",
                        "button": "$516.55"
                    }
                ]
            };
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
                },
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
    ListViewGoogleCardsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/googleCards/' + item.theme)
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
    ListViewGoogleCardsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewGoogleCardsService);
    return ListViewGoogleCardsService;
}());

//# sourceMappingURL=list-view-google-card-service.js.map

/***/ }),

/***/ 1160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListViewStickyListHeaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ListViewStickyListHeaderService = (function () {
    function ListViewStickyListHeaderService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'stickyListHeader'; };
        this.getTitle = function () { return 'Sticky List header'; };
        this.getAllThemes = function () {
            return [
                { "title": "Basic", "theme": "layout1" },
                { "title": "Product", "theme": "layout2" },
                { "title": "Post", "theme": "layout3" }
            ];
        };
        // STICKY LIST HEADER - Basic data
        this.getDataForLayout1 = function () {
            return {
                "items": [
                    {
                        "groupName": "Jazz",
                        "items": [
                            {
                                "id": 1,
                                "title": "Iria Mascareñas",
                                "image": "assets/images/avatar/24.jpg",
                                "price": "$58.99",
                                "subtitle": "58 songs"
                            },
                            {
                                "id": 2,
                                "title": "Isaac Alvarado",
                                "image": "assets/images/avatar/23.jpg",
                                "price": "$116.99",
                                "subtitle": "158 songs"
                            },
                            {
                                "id": 3,
                                "title": "Joan Alemán",
                                "image": "assets/images/avatar/22.jpg",
                                "price": "$8.29",
                                "subtitle": "18 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Pop",
                        "items": [
                            {
                                "id": 1,
                                "title": "Liam Hughes",
                                "image": "assets/images/avatar/21.jpg",
                                "price": "$13.95",
                                "subtitle": "18 songs"
                            },
                            {
                                "id": 2,
                                "title": "Yasmine Hassan",
                                "image": "assets/images/avatar/20.jpg",
                                "price": "$3.89",
                                "subtitle": "13 songs"
                            },
                            {
                                "id": 3,
                                "title": "Fatima Hussein",
                                "image": "assets/images/avatar/19.jpg",
                                "price": "$45.06",
                                "subtitle": "58 songs"
                            },
                            {
                                "id": 4,
                                "title": "Mia Vegt",
                                "image": "assets/images/avatar/18.jpg",
                                "price": "$56.66",
                                "subtitle": "34 songs"
                            },
                            {
                                "id": 5,
                                "title": "Amina Mohan",
                                "image": "assets/images/avatar/17.jpg",
                                "price": "$6.78",
                                "subtitle": "43 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Rock",
                        "items": [
                            {
                                "id": 1,
                                "title": "Jéssica Baptista",
                                "image": "assets/images/avatar/16.jpg",
                                "price": "$13.99",
                                "subtitle": "53 songs"
                            },
                            {
                                "id": 2,
                                "title": "Ana Rodrigues",
                                "image": "assets/images/avatar/15.jpg",
                                "price": "$19.99",
                                "subtitle": "31 songs"
                            },
                            {
                                "id": 3,
                                "title": "Diana Oliveira",
                                "image": "assets/images/avatar/14.jpg",
                                "price": "$7.99",
                                "subtitle": "23 songs"
                            },
                            {
                                "id": 4,
                                "title": "Ariana Barros",
                                "image": "assets/images/avatar/13.jpg",
                                "price": "$45.99",
                                "subtitle": "45 songs"
                            },
                            {
                                "id": 5,
                                "title": "Bárbara Lima",
                                "image": "assets/images/avatar/12.jpg",
                                "price": "$39.75",
                                "subtitle": "64 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Pop and Rock",
                        "items": [
                            {
                                "id": 1,
                                "title": "Theresa Mason",
                                "image": "assets/images/avatar/11.jpg",
                                "price": "$34.59",
                                "subtitle": "67 songs"
                            },
                            {
                                "id": 2,
                                "title": "Samantha Kennedy",
                                "image": "assets/images/avatar/10.jpg",
                                "price": "$44.99",
                                "subtitle": "40 songs"
                            },
                            {
                                "id": 3,
                                "title": "Alice Kelly",
                                "image": "assets/images/avatar/9.jpg",
                                "price": "$89.45",
                                "subtitle": "74 songs"
                            },
                            {
                                "id": 4,
                                "title": "Caitlin Wilkinson",
                                "image": "assets/images/avatar/24.jpg",
                                "price": "$3.10",
                                "subtitle": "80 songs"
                            }
                        ]
                    },
                    {
                        "groupName": "Bluz",
                        "items": [
                            {
                                "id": 1,
                                "title": "Lisa Bennett",
                                "image": "assets/images/avatar/20.jpg",
                                "price": "$7.99",
                                "subtitle": "85 songs"
                            },
                            {
                                "id": 2,
                                "title": "Jennifer Robertson",
                                "image": "assets/images/avatar/19.jpg",
                                "price": "$77.39",
                                "subtitle": "180 songs"
                            },
                            {
                                "id": 3,
                                "title": "Amanda Smith",
                                "image": "assets/images/avatar/16.jpg",
                                "price": "$10.99",
                                "subtitle": "10 songs"
                            },
                            {
                                "id": 4,
                                "title": "Eileen Owen",
                                "image": "assets/images/avatar/15.jpg",
                                "price": "$75.95",
                                "subtitle": "120 songs"
                            }
                        ]
                    }
                ]
            };
        };
        // STICKY LIST HEADER - Product data
        this.getDataForLayout2 = function () {
            return {
                "items": [
                    {
                        "groupName": "Shirts",
                        "items": [
                            {
                                "id": 1,
                                "image1": "assets/images/background/34.jpg",
                                "image2": "assets/images/avatar/11.jpg",
                                "image3": "assets/images/avatar/12.jpg",
                                "image4": "assets/images/avatar/13.jpg",
                                "image5": "assets/images/avatar/14.jpg",
                                "image6": "assets/images/avatar/15.jpg",
                                "image7": "assets/images/avatar/16.jpg",
                                "price": "$33.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "image1": "assets/images/background/3.jpg",
                                "image2": "assets/images/avatar/17.jpg",
                                "image3": "assets/images/avatar/19.jpg",
                                "image4": "assets/images/avatar/20.jpg",
                                "image5": "assets/images/avatar/21.jpg",
                                "image6": "assets/images/avatar/22.jpg",
                                "image7": "assets/images/avatar/23.jpg",
                                "price": "$28.17",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    },
                    {
                        "groupName": "Shoes",
                        "items": [
                            {
                                "id": 1,
                                "image1": "assets/images/background/36.jpg",
                                "image2": "assets/images/avatar/18.jpg",
                                "image3": "assets/images/avatar/19.jpg",
                                "image4": "assets/images/avatar/16.jpg",
                                "image5": "assets/images/avatar/17.jpg",
                                "image6": "assets/images/avatar/22.jpg",
                                "image7": "assets/images/avatar/23.jpg",
                                "price": "$31.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "image1": "assets/images/background/16.jpg",
                                "image2": "assets/images/avatar/18.jpg",
                                "image3": "assets/images/avatar/16.jpg",
                                "image4": "assets/images/avatar/15.jpg",
                                "image5": "assets/images/avatar/19.jpg",
                                "image6": "assets/images/avatar/21.jpg",
                                "image7": "assets/images/avatar/24.jpg",
                                "price": "$25.69",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 3,
                                "image1": "assets/images/background/37.jpg",
                                "image2": "assets/images/avatar/17.jpg",
                                "image3": "assets/images/avatar/18.jpg",
                                "image4": "assets/images/avatar/19.jpg",
                                "image5": "assets/images/avatar/15.jpg",
                                "image6": "assets/images/avatar/21.jpg",
                                "image7": "assets/images/avatar/20.jpg",
                                "price": "$13.66",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    },
                    {
                        "groupName": "Jacket",
                        "items": [
                            {
                                "id": 1,
                                "image1": "assets/images/background/38.jpg",
                                "image2": "assets/images/avatar/18.jpg",
                                "image3": "assets/images/avatar/17.jpg",
                                "image4": "assets/images/avatar/16.jpg",
                                "image5": "assets/images/avatar/15.jpg",
                                "image6": "assets/images/avatar/22.jpg",
                                "image7": "assets/images/avatar/23.jpg",
                                "price": "$17.89",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "image1": "assets/images/background/34.jpg",
                                "image2": "assets/images/avatar/11.jpg",
                                "image3": "assets/images/avatar/12.jpg",
                                "image4": "assets/images/avatar/13.jpg",
                                "image5": "assets/images/avatar/19.jpg",
                                "image6": "assets/images/avatar/18.jpg",
                                "image7": "assets/images/avatar/10.jpg",
                                "price": "$55.01",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 3,
                                "image1": "assets/images/background/35.jpg",
                                "image2": "assets/images/avatar/17.jpg",
                                "image3": "assets/images/avatar/18.jpg",
                                "image4": "assets/images/avatar/19.jpg",
                                "image5": "assets/images/avatar/15.jpg",
                                "image6": "assets/images/avatar/12.jpg",
                                "image7": "assets/images/avatar/13.jpg",
                                "price": "$14.45",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    },
                    {
                        "groupName": "T-Shirt",
                        "items": [
                            {
                                "id": 1,
                                "image1": "assets/images/background/36.jpg",
                                "image2": "assets/images/avatar/15.jpg",
                                "image3": "assets/images/avatar/16.jpg",
                                "image4": "assets/images/avatar/17.jpg",
                                "image5": "assets/images/avatar/18.jpg",
                                "image6": "assets/images/avatar/20.jpg",
                                "image7": "assets/images/avatar/23.jpg",
                                "price": "$17.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            },
                            {
                                "id": 2,
                                "image1": "assets/images/background/34.jpg",
                                "image2": "assets/images/avatar/19.jpg",
                                "image3": "assets/images/avatar/20.jpg",
                                "image4": "assets/images/avatar/21.jpg",
                                "image5": "assets/images/avatar/22.jpg",
                                "image6": "assets/images/avatar/23.jpg",
                                "image7": "assets/images/avatar/24.jpg",
                                "price": "$44.99",
                                "buy": "buy",
                                "subtitle": "Free shipping"
                            }
                        ]
                    }
                ]
            };
        };
        // STICKY LIST HEADER - Post data
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "groupName": "Yesterday",
                        "dateTime": "January 19, 2018.",
                        "items": [
                            {
                                "id": 1,
                                "name": "Adeline O'Reilly",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/9.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            },
                            {
                                "id": 2,
                                "name": "Valentina Fritsch",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/10.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            }
                        ]
                    },
                    {
                        "groupName": "Today",
                        "dateTime": "June 26, 2018.",
                        "items": [
                            {
                                "id": 1,
                                "name": "Reanna Langosh",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/11.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            },
                            {
                                "id": 2,
                                "name": "Theresia Bechtelar",
                                "title": "Lorem ipsum dolor sit amet.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/12.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            }
                        ]
                    },
                    {
                        "groupName": "tomorrow",
                        "dateTime": "August 07, 2018.",
                        "items": [
                            {
                                "id": 1,
                                "name": "Jena Lesch",
                                "title": "Lorem ipsum dolor sit amet, consectetur.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/13.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            },
                            {
                                "id": 2,
                                "name": "Yesenia Beer",
                                "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
                                "shareIcon": "more",
                                "image": "assets/images/avatar/14.jpg",
                                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe nderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
                            }
                        ]
                    }
                ]
            };
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onProceed': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onBuy': function (item) {
                    that.toastCtrl.presentToast(item);
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast(item);
                },
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
    ListViewStickyListHeaderService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('listView/stickyListHeader/' + item.theme)
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
    ListViewStickyListHeaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ListViewStickyListHeaderService);
    return ListViewStickyListHeaderService;
}());

//# sourceMappingURL=list-view-sticky-list-header-service.js.map

/***/ }),

/***/ 1161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ParallaxService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ParallaxService = (function () {
    function ParallaxService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'parallax'; };
        this.getTitle = function () { return 'Parallax'; };
        this.getAllThemes = function () {
            return [
                { "title": "News List", "theme": "layout1" },
                { "title": "Profile", "theme": "layout2" },
                { "title": "Product", "theme": "layout3" },
                { "title": "News", "theme": "layout4" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // PARALLAX - News List data
        this.getDataForLayout1 = function () {
            return {
                "headerTitle": "Showbiz",
                "headerImage": "assets/images/background/9.jpg",
                "title": "Engage real-time",
                "subtitle": "Startup Pitches",
                "items": [
                    {
                        "id": 1,
                        "title": "Victoria Simpson",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/images/avatar/9.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 2,
                        "title": "Samantha Reynolds",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/images/avatar/10.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 3,
                        "title": "Stacey Harris",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/images/avatar/11.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 4,
                        "title": "Jacqueline Guyon",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/images/avatar/12.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 5,
                        "title": "Mia Langevoort",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/images/avatar/13.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 6,
                        "title": "Amy Simsek",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/images/avatar/14.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 7,
                        "title": "Charlotte Sital",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/images/avatar/15.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 8,
                        "title": "Iria Padrón",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/images/avatar/16.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 9,
                        "title": "Laura Sarabia",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/images/avatar/17.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 10,
                        "title": "Alexia Bañuelos",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/images/avatar/18.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 11,
                        "title": "Erika Quiroz",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/images/avatar/19.jpg",
                        "imageAlt": "avatar",
                        "button": "Read"
                    },
                    {
                        "id": 12,
                        "title": "Emma Banda",
                        "subtitle": "Aenean pretium nunc vel rhoncus.",
                        "image": "assets/images/avatar/20.jpg",
                        "imageAlt": "Presque Isle Harbor",
                        "button": "Read"
                    }
                ]
            };
        };
        // PARALLAX - Profile data
        this.getDataForLayout2 = function () {
            return {
                "headerTitle": "Profile",
                "headerImage": "assets/images/background/40.jpg",
                "avatar": "assets/images/avatar/22.jpg",
                "title": "Bruce Wilkerson",
                "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
                "items": [
                    {
                        "id": 1,
                        "avatar": "assets/images/avatar/16.jpg",
                        "title": "Abbie Kelly",
                        "subtitle": "@abbie",
                        "button": "Follow"
                    },
                    {
                        "id": 2,
                        "avatar": "assets/images/avatar/17.jpg",
                        "title": "Luna Adorno",
                        "subtitle": "@luna",
                        "button": "Follow"
                    },
                    {
                        "id": 3,
                        "avatar": "assets/images/avatar/18.jpg",
                        "title": "Tara Saunders",
                        "subtitle": "@tara",
                        "button": "Follow"
                    },
                    {
                        "id": 4,
                        "avatar": "assets/images/avatar/19.jpg",
                        "title": "Amy Lee",
                        "subtitle": "@amy",
                        "button": "Follow"
                    },
                    {
                        "id": 5,
                        "avatar": "assets/images/avatar/20.jpg",
                        "title": "Silvia Salvador",
                        "subtitle": "@silvia",
                        "button": "Follow"
                    },
                    {
                        "id": 6,
                        "avatar": "assets/images/avatar/15.jpg",
                        "title": "Patrick Wright",
                        "subtitle": "@patrick",
                        "button": "Follow"
                    },
                    {
                        "id": 7,
                        "avatar": "assets/images/avatar/22.jpg",
                        "title": "Gabriel Mascareñas",
                        "subtitle": "@gabriel",
                        "button": "Follow"
                    },
                    {
                        "id": 8,
                        "avatar": "assets/images/avatar/14.jpg",
                        "title": "Sofia Clarke",
                        "subtitle": "@stephen",
                        "button": "Follow"
                    },
                    {
                        "id": 9,
                        "avatar": "assets/images/avatar/21.jpg",
                        "title": "Milenko Draganic",
                        "subtitle": "@milenko",
                        "button": "Follow"
                    },
                    {
                        "id": 10,
                        "avatar": "assets/images/avatar/23.jpg",
                        "title": "Danijel Bilic",
                        "subtitle": "@danijel",
                        "button": "Follow"
                    }
                ]
            };
        };
        // PARALLAX - Product data
        this.getDataForLayout3 = function () {
            return {
                "headerTitle": "Product",
                "headerImage": "assets/images/background/9.jpg",
                "shareIcon": "more",
                "items": [
                    {
                        "id": 1,
                        "category": "NEW OFFER",
                        "title": "Super & Black",
                        "titleDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy",
                        "subtitle": "Available Now",
                        "button": "$63.99",
                        "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "productDescriptions": [
                            {
                                "id": 1,
                                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry."
                            },
                            {
                                "id": 2,
                                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            },
                            {
                                "id": 3,
                                "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            },
                            {
                                "id": 4,
                                "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            }
                        ]
                    }
                ]
            };
        };
        // PARALLAX - News data
        this.getDataForLayout4 = function () {
            return {
                "headerTitle": "News",
                "headerImage": "assets/images/background/5.jpg",
                "title": "Infinit bridge made in China.",
                "subtitle": "by Myrtle Stiedemann",
                "category": "ENGINEERING",
                "avatar": "assets/images/avatar/24.jpg",
                "shareIcon": "more",
                "items": [
                    {
                        "id": 1,
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 2,
                        "title": "Lorem ipsum dolor sit amet",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 3,
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                    },
                    {
                        "id": 4,
                        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onProceed': function (item) {
                    that.toastCtrl.presentToast("onProceed");
                },
                'onShare': function (item) {
                    that.toastCtrl.presentToast("Share");
                },
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
            };
        };
        this.prepareParams = function (item) {
            var result = {
                title: item.title,
                data: _this.getDataForTheme(item),
                events: _this.getEventsForTheme(item)
            };
            result[_this.getShowItemId(item)] = true;
            return result;
        };
        this.getShowItemId = function (item) {
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ParallaxService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('parallax/' + item.theme)
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
    ParallaxService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ParallaxService);
    return ParallaxService;
}());

//# sourceMappingURL=parallax-service.js.map

/***/ }),

/***/ 1162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageGalleryService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ImageGalleryService = (function () {
    function ImageGalleryService(af, loadingService) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.getId = function () { return 'imageGallery'; };
        this.getTitle = function () { return 'Image Gallery'; };
        this.getAllThemes = function () {
            return [
                { "title": "Full gallery 1", "theme": "layout1" },
                { "title": "Thumb grid", "theme": "subcategory" },
                { "title": "Full gallery 2", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // IMAGES-GALLARY - Full gallery 1 data
        this.getDataForLayout1 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Bass Guitar",
                        "image": "assets/images/gallery/full-gallery-content-1/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-1/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-1/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-1/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-1/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-1/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-1/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-1/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-1/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/full-gallery-content-1/9.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/full-gallery-content-1/3.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/full-gallery-content-1/4.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/full-gallery-content-1/6.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/full-gallery-content-1/8.jpg"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "Bridge",
                        "image": "assets/images/gallery/full-gallery-content-2/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-2/2.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-2/3.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-2/4.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-2/5.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-2/6.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-2/7.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-2/8.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-2/9.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/full-gallery-content-2/1.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/full-gallery-content-2/3.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/full-gallery-content-2/5.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/full-gallery-content-2/7.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/full-gallery-content-2/9.jpg"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Camera",
                        "image": "assets/images/gallery/full-gallery-content-3/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-3/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-3/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-3/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-3/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-3/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-3/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-3/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-3/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/full-gallery-content-3/9.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/full-gallery-content-3/10.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/full-gallery-content-3/11.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/full-gallery-content-3/12.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/full-gallery-content-3/13.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/full-gallery-content-3/14.jpg"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Guitar",
                        "image": "assets/images/gallery/full-gallery-content-4/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-4/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-4/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-4/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-4/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-4/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-4/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-4/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-4/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/full-gallery-content-4/9.jpg"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Party",
                        "image": "assets/images/gallery/full-gallery-content-5/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-5/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-5/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-5/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-5/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-5/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-5/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-5/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-5/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/full-gallery-content-5/9.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/full-gallery-content-5/1.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/full-gallery-content-5/3.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/full-gallery-content-5/5.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/full-gallery-content-5/6.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/full-gallery-content-5/7.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/images/gallery/full-gallery-content-5/8.jpg"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "preamps",
                        "image": "assets/images/gallery/full-gallery-content-6/0.jpg",
                        "favorite": true,
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-6/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-6/10.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-6/2.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-6/3.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-6/4.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-6/5.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-6/6.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-6/7.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/full-gallery-content-6/8.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/full-gallery-content-6/9.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/full-gallery-content-6/10.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/full-gallery-content-6/3.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/full-gallery-content-6/2.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/full-gallery-content-6/4.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/images/gallery/full-gallery-content-6/5.jpg"
                            },
                            {
                                "id": 16,
                                "image": "assets/images/gallery/full-gallery-content-6/6.jpg"
                            },
                            {
                                "id": 17,
                                "image": "assets/images/gallery/full-gallery-content-6/1.jpg"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Watch",
                        "image": "assets/images/gallery/full-gallery-content-7/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-7/3.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-7/5.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-7/4.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-7/2.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-7/1.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-7/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-7/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-7/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/full-gallery-content-7/9.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/full-gallery-content-7/0.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/full-gallery-content-7/1.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/full-gallery-content-7/3.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/full-gallery-content-7/6.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/full-gallery-content-7/9.jpg"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "title": "Travel",
                        "image": "assets/images/gallery/full-gallery-content-8/0.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-8/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-8/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-8/12.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-8/13.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-8/16.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-8/15.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-8/5.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-8/16.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/full-gallery-content-8/11.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/full-gallery-content-8/12.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/full-gallery-content-8/10.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/full-gallery-content-8/3.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/full-gallery-content-8/2.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/full-gallery-content-8/4.jpg"
                            },
                            {
                                "id": 15,
                                "image": "assets/images/gallery/full-gallery-content-8/5.jpg"
                            }
                        ]
                    }
                ]
            };
        };
        // IMAGES-GALLARY - Thumb grid data
        this.getDataForSubcategory = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "image": "assets/images/gallery/thumb-grid/1.jpg"
                    },
                    {
                        "id": 2,
                        "image": "assets/images/gallery/thumb-grid/2.jpg"
                    },
                    {
                        "id": 3,
                        "image": "assets/images/gallery/thumb-grid/3.jpg"
                    },
                    {
                        "id": 4,
                        "image": "assets/images/gallery/thumb-grid/4.jpg"
                    },
                    {
                        "id": 5,
                        "image": "assets/images/gallery/thumb-grid/5.jpg"
                    },
                    {
                        "id": 6,
                        "image": "assets/images/gallery/thumb-grid/6.jpg"
                    },
                    {
                        "id": 7,
                        "image": "assets/images/gallery/thumb-grid/7.jpg"
                    },
                    {
                        "id": 8,
                        "image": "assets/images/gallery/thumb-grid/8.jpg"
                    },
                    {
                        "id": 9,
                        "image": "assets/images/gallery/thumb-grid/9.jpg"
                    },
                    {
                        "id": 10,
                        "image": "assets/images/gallery/thumb-grid/10.jpg"
                    },
                    {
                        "id": 11,
                        "image": "assets/images/gallery/thumb-grid/11.jpg"
                    },
                    {
                        "id": 12,
                        "image": "assets/images/gallery/thumb-grid/12.jpg"
                    },
                    {
                        "id": 13,
                        "image": "assets/images/gallery/thumb-grid/13.jpg"
                    },
                    {
                        "id": 14,
                        "image": "assets/images/gallery/thumb-grid/14.jpg"
                    },
                    {
                        "id": 15,
                        "image": "assets/images/gallery/thumb-grid/15.jpg"
                    },
                    {
                        "id": 16,
                        "image": "assets/images/gallery/thumb-grid/16.jpg"
                    }
                ]
            };
        };
        // IMAGES-GALLARY - Full gallery 2 data
        this.getDataForLayout3 = function () {
            return {
                "items": [
                    {
                        "id": 1,
                        "title": "Amps",
                        "subtitle": "Friday, August 07, 2017",
                        "image": "assets/images/gallery/full-gallery-content-1/10.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-1/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-1/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-1/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-1/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-1/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-1/6.jpg"
                            }
                        ]
                    },
                    {
                        "id": 2,
                        "title": "laptops",
                        "subtitle": "Wednesday, July 05, 2017",
                        "image": "assets/images/gallery/full-gallery-content-2/10.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-2/2.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-2/4.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-2/6.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-2/8.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-2/10.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-2/9.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-2/1.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-2/3.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/full-gallery-content-2/5.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/full-gallery-content-2/7.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/full-gallery-content-2/10.jpg"
                            },
                            {
                                "id": 12,
                                "image": "assets/images/gallery/full-gallery-content-2/9.jpg"
                            },
                            {
                                "id": 13,
                                "image": "assets/images/gallery/full-gallery-content-2/8.jpg"
                            },
                            {
                                "id": 14,
                                "image": "assets/images/gallery/full-gallery-content-2/7.jpg"
                            }
                        ]
                    },
                    {
                        "id": 3,
                        "title": "Watch",
                        "subtitle": "Sunday, October 08, 2016",
                        "image": "assets/images/gallery/full-gallery-content-3/1.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-3/8.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-3/7.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-3/6.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-3/5.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-3/4.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-3/3.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-3/2.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-3/1.jpg"
                            }
                        ]
                    },
                    {
                        "id": 4,
                        "title": "Sony PC",
                        "subtitle": "Monday, June 26, 2017",
                        "image": "assets/images/gallery/full-gallery-content-4/1.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-4/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-4/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-4/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-4/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-4/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-4/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-4/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-4/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/full-gallery-content-4/9.jpg"
                            }
                        ]
                    },
                    {
                        "id": 5,
                        "title": "Smart Watch",
                        "subtitle": "Thursday, May 19, 2016",
                        "image": "assets/images/gallery/full-gallery-content-5/1.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-5/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-5/9.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-5/8.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-5/7.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-5/6.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-5/5.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-5/4.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-5/3.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/full-gallery-content-5/2.jpg"
                            },
                            {
                                "id": 10,
                                "image": "assets/images/gallery/full-gallery-content-5/1.jpg"
                            },
                            {
                                "id": 11,
                                "image": "assets/images/gallery/full-gallery-content-5/0.jpg"
                            }
                        ]
                    },
                    {
                        "id": 6,
                        "title": "Usb",
                        "subtitle": "Monday, September 01, 2016",
                        "image": "assets/images/gallery/full-gallery-content-6/10.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-6/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-6/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-6/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-6/4.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-6/5.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-6/6.jpg"
                            }
                        ]
                    },
                    {
                        "id": 7,
                        "title": "Canon Photoaparat",
                        "subtitle": "Tuesday, September 05, 2016",
                        "image": "assets/images/gallery/full-gallery-content-7/7.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-7/0.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-7/2.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-7/3.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-7/5.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-7/6.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-7/7.jpg"
                            }
                        ]
                    },
                    {
                        "id": 8,
                        "title": "laptops",
                        "subtitle": "Saturday, April 25, 2016",
                        "image": "assets/images/gallery/full-gallery-content-8/12.jpg",
                        "items": [
                            {
                                "id": 1,
                                "image": "assets/images/gallery/full-gallery-content-8/1.jpg"
                            },
                            {
                                "id": 2,
                                "image": "assets/images/gallery/full-gallery-content-8/3.jpg"
                            },
                            {
                                "id": 3,
                                "image": "assets/images/gallery/full-gallery-content-8/2.jpg"
                            },
                            {
                                "id": 4,
                                "image": "assets/images/gallery/full-gallery-content-8/5.jpg"
                            },
                            {
                                "id": 5,
                                "image": "assets/images/gallery/full-gallery-content-8/4.jpg"
                            },
                            {
                                "id": 6,
                                "image": "assets/images/gallery/full-gallery-content-8/6.jpg"
                            },
                            {
                                "id": 7,
                                "image": "assets/images/gallery/full-gallery-content-8/7.jpg"
                            },
                            {
                                "id": 8,
                                "image": "assets/images/gallery/full-gallery-content-8/8.jpg"
                            },
                            {
                                "id": 9,
                                "image": "assets/images/gallery/full-gallery-content-8/10.jpg"
                            }
                        ]
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
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
            console.log(_this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1));
            return _this.getId() + item.theme.charAt(0).toUpperCase() + "" + item.theme.slice(1);
        };
    }
    ImageGalleryService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('imageGallery/' + item.theme)
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
    ImageGalleryService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_4__loading_service__["a" /* LoadingService */]])
    ], ImageGalleryService);
    return ImageGalleryService;
}());

//# sourceMappingURL=image-gallery-service.js.map

/***/ }),

/***/ 1163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MapsService = (function () {
    function MapsService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'maps'; };
        this.getTitle = function () { return 'Maps'; };
        this.getAllThemes = function () {
            return [
                { "title": "GMAPS + Location  Details", "theme": "layout1" },
                { "title": "GMAPS + About Us", "theme": "layout2" },
                { "title": "Full Screen View", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        //GMAPS + Location  Details data
        this.getDataForLayout1 = function () {
            return {
                "headerTitle": "GMAPS + Location  Details",
                "title": "Best Restaurants for Power Lunches",
                "reviews": "4.12 (78 reviews)",
                "contentTitle": "The iconic restaurant that has defined the term power lunch since 1959 is the one and only Four Seasons.",
                "contentDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
                "icon": "checkmark-circle",
                "location": "Design street, New York, USA",
                "time": "8:00 to 16:00 working days",
                "phone": "33 222 11",
                "webSite": "www.csform.com",
                "email": "dev@csform.com",
                "iconsStars": [
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": true
                    },
                    {
                        "iconActive": "icon-star",
                        "iconInactive": "icon-star-outline",
                        "isActive": false
                    }
                ],
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        //GMAPS + About Us data
        this.getDataForLayout2 = function () {
            return {
                "headerTitle": "GMAPS + About Us",
                "title": "Creative Studio Form",
                "titleDescription": "Design & Development agency",
                "contentTitle": "About us",
                "contentDescription": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus semper elit platea; Velit aptent euismod pede euismod facilisis? In ultrices venenatis mauris. Consequat gravida pretium ligula lectus; Lacus natoque elit elit: Imperdiet cursus fermentum suspendisse; Cum iaculis venenatis!",
                "icon": "checkmark-circle",
                "location": "Design street, New York, USA",
                "time": "8:00 to 16:00 working days",
                "phone": "33 222 11",
                "webSite": "www.csform.com",
                "email": "dev@csform.com",
                "titleMap": "Here we are :",
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        //Full Screen View data
        this.getDataForLayout3 = function () {
            return {
                "title": "Your location",
                "headerTitle": "Full Screen View",
                "map": {
                    "lat": 40.712562,
                    "lng": -74.005911,
                    "zoom": 15,
                    "mapTypeControl": true,
                    "streetViewControl": true
                }
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onRates': function (index) {
                    that.toastCtrl.presentToast("Rates " + (index + 1));
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
    MapsService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('maps/' + item.theme)
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
    MapsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], MapsService);
    return MapsService;
}());

//# sourceMappingURL=maps-service.js.map

/***/ }),

/***/ 1164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QRCodeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var QRCodeService = (function () {
    function QRCodeService(loadingService, toastCtrl) {
        var _this = this;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'qrcode'; };
        this.getTitle = function () { return 'QRCode'; };
        this.getAllThemes = function () {
            return [
                { "title": "Layout 1", "theme": "layout1" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return {};
        };
        this.getEventsForTheme = function (menuItem) {
            return {};
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
    QRCodeService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            that.loadingService.hide();
            observer.next(_this.getDataForTheme(item));
            observer.complete();
        });
    };
    QRCodeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_2__toast_service__["a" /* ToastService */]])
    ], QRCodeService);
    return QRCodeService;
}());

//# sourceMappingURL=qrcode-service.js.map

/***/ }),

/***/ 1165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButtonService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RadioButtonService = (function () {
    function RadioButtonService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'radioButton'; };
        this.getTitle = function () { return 'Radio Button'; };
        this.getAllThemes = function () {
            return [
                { "title": "Simple", "theme": "layout1" },
                { "title": "With avatars", "theme": "layout2" },
                { "title": "Simple 2", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // RADION BUTTON - Simple data
        this.getDataForLayout1 = function () {
            return {
                "title": "Your country",
                "selectedItem": 3,
                "items": [
                    { "id": 1, "title": "The Gambia" },
                    { "id": 2, "title": "Ecuador" },
                    { "id": 4, "title": "Czechia" },
                    { "id": 3, "title": "Brunei" },
                    { "id": 5, "title": "Madagascar" },
                    { "id": 6, "title": "Kuwait" },
                    { "id": 7, "title": "Liechtenstein" },
                    { "id": 8, "title": "Kiribati" },
                    { "id": 9, "title": "Hungary" },
                    { "id": 10, "title": "Fiji" },
                    { "id": 11, "title": "Serbia" },
                    { "id": 12, "title": "Saint Lucia" },
                    { "id": 13, "title": "Portugal" }
                ]
            };
        };
        // RADION BUTTON - With avatars data
        this.getDataForLayout2 = function () {
            return {
                "title": "Following",
                "selectedItem": 4,
                "items": [
                    { "id": 1, "title": "Tara Saunders", "subtitle": "@tara333", "avatar": "assets/images/avatar/24.jpg" },
                    { "id": 2, "title": "Daniel Perrin", "subtitle": "@daniel", "avatar": "assets/images/avatar/23.jpg" },
                    { "id": 4, "title": "Jackson Phillips", "subtitle": "@jackson", "avatar": "assets/images/avatar/22.jpg" },
                    { "id": 3, "title": "Antoine Chevallier", "subtitle": "@antoine", "avatar": "assets/images/avatar/21.jpg" },
                    { "id": 5, "title": "Jessica White", "subtitle": "@jessica", "avatar": "assets/images/avatar/20.jpg" },
                    { "id": 6, "title": "Laetitia Duhamel", "subtitle": "@laetitia", "avatar": "assets/images/avatar/19.jpg" },
                    { "id": 7, "title": "Sylvie Rey", "subtitle": "@sylvie", "avatar": "assets/images/avatar/18.jpg" },
                    { "id": 8, "title": "Julie Lewis", "subtitle": "@julie44", "avatar": "assets/images/avatar/17.jpg" },
                    { "id": 9, "title": "Layla Chapman", "subtitle": "@layla", "avatar": "assets/images/avatar/16.jpg" },
                    { "id": 10, "title": "Charlotte Pelletier", "subtitle": "@charlotte", "avatar": "assets/images/avatar/15.jpg" }
                ]
            };
        };
        // RADION BUTTON - Simple 2 data
        this.getDataForLayout3 = function () {
            return {
                "title": "Loctions",
                "selectedItem": 4,
                "items": [
                    { "id": 1, "title": "New York City", "subtitle": "United States" },
                    { "id": 2, "title": "Paris", "subtitle": "France" },
                    { "id": 4, "title": "Istanbul", "subtitle": "Turkey" },
                    { "id": 3, "title": "Tokyo", "subtitle": "‎Japan" },
                    { "id": 5, "title": "Moscow", "subtitle": "Russia" },
                    { "id": 6, "title": "Mexico City", "subtitle": "Mexico" },
                    { "id": 7, "title": "Rio de Janeiro", "subtitle": "Brazil" },
                    { "id": 8, "title": "Berlin", "subtitle": "Germany" },
                    { "id": 9, "title": "Madrid", "subtitle": "Spain" },
                    { "id": 10, "title": "London", "subtitle": "United Kingdom" },
                    { "id": 11, "title": "Shanghai", "subtitle": "China" },
                    { "id": 12, "title": "Seoul", "subtitle": "South Korea" },
                    { "id": 13, "title": "Cairo", "subtitle": "Egypt" }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onSelect': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
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
    RadioButtonService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('radioButton/' + item.theme)
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
    RadioButtonService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], RadioButtonService);
    return RadioButtonService;
}());

//# sourceMappingURL=radio-button-service.js.map

/***/ }),

/***/ 1166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RangeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RangeService = (function () {
    function RangeService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'range'; };
        this.getTitle = function () { return 'Range'; };
        this.getAllThemes = function () {
            return [
                { "title": "All", "theme": "layout1" },
            ];
        };
        // RANGE - Basic
        this.getDataForTheme = function (menuItem) {
            return {
                "layout1": {
                    "title": "BASIC",
                    "value": 10
                },
                // RANGE - With Icon
                "layout2": {
                    "title": "WITH ICONS",
                    "iconLeft": "volume-mute",
                    "iconRight": "volume-up",
                    "min": "-200",
                    "max": "200",
                    "value": 0
                },
                // RANGE - With Predefined Steps
                "layout3": {
                    "textLeft": "A",
                    "textRight": "A",
                    "title": "WITH PREDEFINED STEPS",
                    "min": "1000",
                    "max": "2000",
                    "step": "100",
                    "value": 20
                },
                // RANGE - Two sliders
                "layout4": {
                    "title": "TWO SLIDERS",
                    "min": "1",
                    "max": "100",
                    "step": "10",
                    "value": {
                        "lower": 20,
                        "upper": 70
                    },
                    "textLeft": "1",
                    "textRight": "10"
                }
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onChange': function (item) {
                },
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
    RangeService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('ranges')
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
    ;
    RangeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], RangeService);
    return RangeService;
}());

//# sourceMappingURL=range-service.js.map

/***/ }),

/***/ 1167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToggleService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToggleService = (function () {
    function ToggleService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'toggle'; };
        this.getTitle = function () { return 'Toggle'; };
        this.getAllThemes = function () {
            return [
                { "title": "With avatars", "theme": "layout1" },
                { "title": "Simple 2", "theme": "layout2" },
                { "title": "Simple", "theme": "layout3" },
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // TOGGLE - With avatars data
        this.getDataForLayout1 = function () {
            return {
                "title": "With avatars",
                "items": [
                    {
                        "id": 0,
                        "title": "Theresa Mason",
                        "subtitle": "theresa.mason@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/9.jpg"
                    },
                    {
                        "id": 1,
                        "title": "Laetitia Duhamel",
                        "subtitle": "laetitia.duhamel@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/10.jpg"
                    },
                    {
                        "id": 2,
                        "title": "Marine Aubry",
                        "subtitle": "marine.aubry@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/11.jpg"
                    },
                    {
                        "id": 3,
                        "title": "Samantha Kennedy",
                        "subtitle": "samantha.kennedy@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/12.jpg"
                    },
                    {
                        "id": 4,
                        "title": "Juliette Blondel",
                        "subtitle": "juliette.blondel@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/13.jpg"
                    },
                    {
                        "id": 5,
                        "title": "Isabelle Pascal",
                        "subtitle": "isabelle.pascal@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/14.jpg"
                    },
                    {
                        "id": 6,
                        "title": "Valentine Roy",
                        "subtitle": "valentine.roy@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/15.jpg"
                    },
                    {
                        "id": 7,
                        "title": "Alice Kelly",
                        "subtitle": "alice.kelly@emai",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/16.jpg"
                    },
                    {
                        "id": 8,
                        "title": "Caitlin Wilkinson",
                        "subtitle": "caitlin.wilkinson@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/17.jpg"
                    },
                    {
                        "id": 9,
                        "title": "Camille Garnier",
                        "subtitle": "camille.garnier@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/18.jpg"
                    },
                    {
                        "id": 10,
                        "title": "Suzanne Petit",
                        "subtitle": "suzanne.petit@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/19.jpg"
                    },
                    {
                        "id": 11,
                        "title": "Stacey Harris",
                        "subtitle": "stacey.harris@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/20.jpg"
                    },
                    {
                        "id": 12,
                        "title": "Jamie Clark",
                        "subtitle": "jamie.clark@email",
                        "isChecked": false,
                        "avatar": "assets/images/avatar/21.jpg"
                    }
                ]
            };
        };
        // TOGGLE - Simple 2 data
        this.getDataForLayout2 = function () {
            return {
                "title": "Simple 2",
                "items": [
                    {
                        "id": 1,
                        "title": "bilic@yahoo.com",
                        "subtitle": "Daniel",
                        "isChecked": true
                    },
                    {
                        "id": 2,
                        "title": "roussel@yahoo.com",
                        "subtitle": "Manon",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "chevallier@mail.com",
                        "subtitle": "Antoine",
                        "isChecked": false
                    },
                    {
                        "id": 3,
                        "title": "laurent@gmail.com",
                        "subtitle": "Michel",
                        "isChecked": false
                    },
                    {
                        "id": 5,
                        "title": "delahaye@outlook.com",
                        "subtitle": "Laurence",
                        "isChecked": false
                    },
                    {
                        "id": 6,
                        "title": "valentin@mail.com",
                        "subtitle": "Pénélope",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "hebert@mail.com",
                        "subtitle": "Adèle",
                        "isChecked": false
                    },
                    {
                        "id": 8,
                        "title": "delattre@yahoo.com",
                        "subtitle": "Monique",
                        "isChecked": false
                    },
                    {
                        "id": 9,
                        "title": "mahe@mail.com",
                        "subtitle": "Charles",
                        "isChecked": false
                    }
                ]
            };
        };
        // TOGGLE - Simple data
        this.getDataForLayout3 = function () {
            return {
                "title": "Simple",
                "items": [
                    {
                        "id": 0,
                        "title": "United Kingdom",
                        "isChecked": true
                    },
                    {
                        "id": 1,
                        "title": "South Africa",
                        "isChecked": false
                    },
                    {
                        "id": 2,
                        "title": "Qatar",
                        "isChecked": false
                    },
                    {
                        "id": 3,
                        "title": "Philippines",
                        "isChecked": false
                    },
                    {
                        "id": 4,
                        "title": "New Zealand",
                        "isChecked": true
                    },
                    {
                        "id": 5,
                        "title": "Mongolia",
                        "isChecked": true
                    },
                    {
                        "id": 6,
                        "title": "Luxembourg",
                        "isChecked": true
                    },
                    {
                        "id": 7,
                        "title": "Jamaica",
                        "isChecked": false
                    },
                    {
                        "id": 8,
                        "title": "India",
                        "isChecked": false
                    },
                    {
                        "id": 9,
                        "title": "Grenada",
                        "isChecked": false
                    },
                    {
                        "id": 10,
                        "title": "France",
                        "isChecked": false
                    },
                    {
                        "id": 11,
                        "title": "Ecuador",
                        "isChecked": false
                    },
                    {
                        "id": 12,
                        "title": "Argentina",
                        "isChecked": false
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onSelect': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
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
    ToggleService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('toggle/' + item.theme)
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
    ToggleService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ToggleService);
    return ToggleService;
}());

//# sourceMappingURL=toggle-service.js.map

/***/ }),

/***/ 1168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SelectService = (function () {
    function SelectService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'select'; };
        this.getTitle = function () { return 'Select'; };
        this.getAllThemes = function () {
            return [
                { "title": "Single Select", "theme": "layout1" },
                { "title": "Multi Select", "theme": "layout2" }
            ];
        };
        // Select - Basic dialog data
        this.getDataForTheme = function (menuItem) {
            return {
                "title": "Select",
                "layout1": {
                    "title": "City",
                    "selectedItem": 12,
                    "header": "Basic dialog",
                    "items": [
                        {
                            "id": 12,
                            "title": "New York"
                        },
                        {
                            "id": 14,
                            "title": "Paris"
                        },
                        {
                            "id": 13,
                            "title": "Amsterdam"
                        },
                        {
                            "id": 15,
                            "title": "Gotham City"
                        }
                    ]
                },
                // Select - One touch dialog
                "layout2": {
                    "title": "Country",
                    "header": "One touch dialog",
                    "selectedItem": 22,
                    "items": [
                        {
                            "id": 22,
                            "title": "USA"
                        },
                        {
                            "id": 24,
                            "title": "France"
                        },
                        {
                            "id": 23,
                            "title": "Netherland"
                        },
                        {
                            "id": 25,
                            "title": "Gothamland"
                        }
                    ]
                },
                // Select - With Action sheet
                "layout3": {
                    "title": "Address",
                    "header": "With Action sheet",
                    "selectedItem": 31,
                    "items": [
                        {
                            "id": 31,
                            "title": "Choose address"
                        },
                        {
                            "id": 32,
                            "title": "222 Duffield Street"
                        },
                        {
                            "id": 34,
                            "title": "198 Clark Street"
                        },
                        {
                            "id": 33,
                            "title": "588 Kenmore Terrace"
                        }
                    ]
                },
                // Select - Two option select
                "layout4": {
                    "title": "Date",
                    "header": "Two option select",
                    "selectedItemMonth": 38,
                    "selectedItemYear": 50,
                    "itemsMonth": [
                        {
                            "id": 38,
                            "title": "January"
                        },
                        {
                            "id": 39,
                            "title": "February"
                        },
                        {
                            "id": 40,
                            "title": "March"
                        },
                        {
                            "id": 41,
                            "title": "April"
                        },
                        {
                            "id": 42,
                            "title": "May"
                        },
                        {
                            "id": 43,
                            "title": "June"
                        },
                        {
                            "id": 44,
                            "title": "July"
                        },
                        {
                            "id": 45,
                            "title": "August"
                        },
                        {
                            "id": 46,
                            "title": "September"
                        },
                        {
                            "id": 47,
                            "title": "October"
                        },
                        {
                            "id": 48,
                            "title": "November"
                        },
                        {
                            "id": 49,
                            "title": "December"
                        }
                    ],
                    "itemsYears": [
                        {
                            "id": 50,
                            "title": "2009"
                        },
                        {
                            "id": 51,
                            "title": "2010"
                        },
                        {
                            "id": 52,
                            "title": "2011"
                        },
                        {
                            "id": 53,
                            "title": "2012"
                        },
                        {
                            "id": 54,
                            "title": "2013"
                        },
                        {
                            "id": 55,
                            "title": "2014"
                        },
                        {
                            "id": 56,
                            "title": "2015"
                        },
                        {
                            "id": 57,
                            "title": "2016"
                        },
                        {
                            "id": 58,
                            "title": "2017"
                        }
                    ]
                },
                // Muliti Select - One touch dialog
                "layout5": {
                    "title": "Country",
                    "header": "One touch dialog",
                    "selectedItem": 22,
                    "items": [
                        {
                            "id": 22,
                            "title": "USA"
                        },
                        {
                            "id": 24,
                            "title": "France"
                        },
                        {
                            "id": 23,
                            "title": "Netherland"
                        },
                        {
                            "id": 25,
                            "title": "Gothamland"
                        }
                    ]
                },
                // Muliti Select -Two option selec
                "layout6": {
                    "title": "Date",
                    "header": "Two option select",
                    "selectedItemMonth": 38,
                    "selectedItemYear": 50,
                    "itemsMonth": [
                        {
                            "id": 38,
                            "title": "January"
                        },
                        {
                            "id": 39,
                            "title": "February"
                        },
                        {
                            "id": 40,
                            "title": "March"
                        },
                        {
                            "id": 41,
                            "title": "April"
                        },
                        {
                            "id": 42,
                            "title": "May"
                        },
                        {
                            "id": 43,
                            "title": "June"
                        },
                        {
                            "id": 44,
                            "title": "July"
                        },
                        {
                            "id": 45,
                            "title": "August"
                        },
                        {
                            "id": 46,
                            "title": "September"
                        },
                        {
                            "id": 47,
                            "title": "October"
                        },
                        {
                            "id": 48,
                            "title": "November"
                        },
                        {
                            "id": 49,
                            "title": "December"
                        }
                    ],
                    "itemsYears": [
                        {
                            "id": 50,
                            "title": "2009"
                        },
                        {
                            "id": 51,
                            "title": "2010"
                        },
                        {
                            "id": 52,
                            "title": "2011"
                        },
                        {
                            "id": 53,
                            "title": "2012"
                        },
                        {
                            "id": 54,
                            "title": "2013"
                        },
                        {
                            "id": 55,
                            "title": "2014"
                        },
                        {
                            "id": 56,
                            "title": "2015"
                        },
                        {
                            "id": 57,
                            "title": "2016"
                        },
                        {
                            "id": 58,
                            "title": "2017"
                        }
                    ]
                }
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onSelect': function (item) {
                    that.toastCtrl.presentToast(JSON.stringify(item));
                },
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
    SelectService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('select')
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
    SelectService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], SelectService);
    return SelectService;
}());

//# sourceMappingURL=select-service.js.map

/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ActionSheetService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_angularfire2_database__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_settings__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__toast_service__ = __webpack_require__(487);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__loading_service__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ActionSheetService = (function () {
    function ActionSheetService(af, loadingService, toastCtrl) {
        var _this = this;
        this.af = af;
        this.loadingService = loadingService;
        this.toastCtrl = toastCtrl;
        this.getId = function () { return 'actionSheet'; };
        this.getTitle = function () { return 'Action Sheet'; };
        this.getAllThemes = function () {
            return [
                { "title": "Basic", "theme": "layout1" },
                { "title": "News", "theme": "layout2" },
                { "title": "With Text Header", "theme": "layout3" }
            ];
        };
        this.getDataForTheme = function (menuItem) {
            return _this['getDataFor' +
                menuItem.theme.charAt(0).toUpperCase() +
                menuItem.theme.slice(1)]();
        };
        // ACTION-SHEET - Basic data
        this.getDataForLayout1 = function () {
            return {
                "headerTitle": "Basic",
                "headerImage": "assets/images/background/6.jpg",
                "shareIcon": "more",
                "actionSheet": {
                    "buttons": [
                        {
                            "text": "Mark as read",
                            "role": "destructive"
                        },
                        {
                            "text": "Follow author"
                        },
                        {
                            "text": "Read more info"
                        },
                        {
                            "text": "More from category"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "title": "Super & Black",
                        "subtitle": "Available Now",
                        "category": "NEW OFFER",
                        "button": "$63.99",
                        "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
                        "productDescriptions": [
                            {
                                "id": 1,
                                "description": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                            },
                            {
                                "id": 2,
                                "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                            },
                            {
                                "id": 3,
                                "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            },
                            {
                                "id": 4,
                                "description": "Passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum"
                            }
                        ]
                    }
                ]
            };
        };
        // ACTION-SHEET - News data
        this.getDataForLayout2 = function () {
            return {
                "headerTitle": "News",
                "headerImage": "assets/images/background/21.jpg",
                "title": "Infinit bridge made in China.",
                "subtitle": "by Victoria Kuijpers",
                "category": "ENGINEERING",
                "avatar": "assets/images/avatar/20.jpg",
                "shareIcon": "more",
                "actionSheet": {
                    "buttons": [
                        {
                            "text": "Mark as read",
                            "role": "destructive"
                        },
                        {
                            "text": "Follow author"
                        },
                        {
                            "text": "Read more info"
                        },
                        {
                            "text": "More from category"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 2,
                        "title": "Lorem ipsum dolor sit amet",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur."
                    },
                    {
                        "id": 3,
                        "title": "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
                        "subtitle": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip."
                    },
                    {
                        "id": 4,
                        "title": "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
                        "subtitle": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    }
                ]
            };
        };
        // ACTION-SHEET - With Text Header data
        this.getDataForLayout3 = function () {
            return {
                "headerTitle": "With Text Header",
                "shareIcon": "more",
                "actionSheet": {
                    "title": "Choose what to do with this card?",
                    "buttons": [
                        {
                            "text": "Mark as read",
                            "role": "destructive"
                        },
                        {
                            "text": "Follow author"
                        },
                        {
                            "text": "Read more info"
                        },
                        {
                            "text": "More from category"
                        },
                        {
                            "text": "Cancel",
                            "role": "cancel"
                        }
                    ]
                },
                "items": [
                    {
                        "id": 1,
                        "category": "best offer",
                        "image": "assets/images/background/14.jpg",
                        "title": "Free Ride Tour",
                        "subtitle": "West Avenue, NYC",
                        "button": "$35.99"
                    },
                    {
                        "id": 2,
                        "category": "main event",
                        "image": "assets/images/background/11.jpg",
                        "title": "Open Air Concert",
                        "subtitle": "Hyde Park, London",
                        "button": "$12.99"
                    },
                    {
                        "id": 3,
                        "category": "Best Tourt",
                        "image": "assets/images/background/21.jpg",
                        "title": "Sea ture",
                        "subtitle": "Guilin, Kweilin",
                        "button": "$13.45"
                    },
                    {
                        "id": 4,
                        "category": "Mountain",
                        "image": "assets/images/background/7.jpg",
                        "title": "Mountain Trout",
                        "subtitle": "SMountain Trout Camp",
                        "button": "$38.60"
                    },
                    {
                        "id": 5,
                        "category": "Bridge Tour",
                        "image": "assets/images/background/5.jpg",
                        "title": "Bridge Tour",
                        "subtitle": "BridgeClimb, Sydney",
                        "button": "$40.85"
                    },
                    {
                        "id": 6,
                        "category": "best events",
                        "image": "assets/images/background/2.jpg",
                        "title": "Main Stage Event",
                        "subtitle": "Hyde Park, London ",
                        "button": "$56.55"
                    }
                ]
            };
        };
        this.getEventsForTheme = function (menuItem) {
            var that = _this;
            return {
                'onItemClick': function (item) {
                    that.toastCtrl.presentToast(item.title);
                },
                'onItemClickActionSheet': function (item) {
                    that.toastCtrl.presentToast(item.button.text);
                },
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
    ActionSheetService.prototype.load = function (item) {
        var _this = this;
        var that = this;
        that.loadingService.show();
        if (__WEBPACK_IMPORTED_MODULE_3__app_settings__["a" /* AppSettings */].IS_FIREBASE_ENABLED) {
            return new __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"](function (observer) {
                _this.af
                    .object('actionSheet/' + item.theme)
                    .valueChanges()
                    .subscribe(function (snapshot) {
                    that.loadingService.hide();
                    observer.next(snapshot);
                    observer.complete();
                }, function (err) {
                    that.loadingService.hide();
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
    ActionSheetService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_5__loading_service__["a" /* LoadingService */], __WEBPACK_IMPORTED_MODULE_4__toast_service__["a" /* ToastService */]])
    ], ActionSheetService);
    return ActionSheetService;
}());

//# sourceMappingURL=action-sheet-service.js.map

/***/ }),

/***/ 868:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsPageModule", function() { return ItemsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__items__ = __webpack_require__(1142);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ItemsPageModule = (function () {
    function ItemsPageModule() {
    }
    ItemsPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__items__["a" /* ItemsPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__items__["a" /* ItemsPage */]),
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], ItemsPageModule);
    return ItemsPageModule;
}());

//# sourceMappingURL=items.module.js.map

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
//# sourceMappingURL=9.js.map