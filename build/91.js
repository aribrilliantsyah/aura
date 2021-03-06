webpackJsonp([91],{

/***/ 1058:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectLayout4; });
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

var SelectLayout4 = (function () {
    function SelectLayout4() {
        var _this = this;
        this.onEvent = function (event, item) {
            if (_this.events[event]) {
                _this.events[event](item);
            }
        };
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('data'),
        __metadata("design:type", Object)
    ], SelectLayout4.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])('events'),
        __metadata("design:type", Object)
    ], SelectLayout4.prototype, "events", void 0);
    SelectLayout4 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'select-layout-4',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/components/select/layout-4/select.html"*/'<ion-item border *ngIf="data != null">\n\n    <ion-label>{{data.title}}</ion-label>\n\n    <ion-select interface="popover" [(ngModel)]="data.selectedItemMonth" multiple="false">\n\n        <ion-option *ngFor="let item of data.itemsMonth; let i= index" [value]="item.id">{{item.title}}</ion-option>\n\n    </ion-select>\n\n\n\n    <ion-select interface="popover" [(ngModel)]="data.selectedItemYear" [multiple]="false">\n\n        <ion-option *ngFor="let item of data.itemsYears; let i= index" [value]="item.id">{{item.title}}</ion-option>\n\n    </ion-select>\n\n</ion-item>\n\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/components/select/layout-4/select.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], SelectLayout4);
    return SelectLayout4;
}());

//# sourceMappingURL=select-layout-4.js.map

/***/ }),

/***/ 792:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectLayout4Module", function() { return SelectLayout4Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__select_layout_4__ = __webpack_require__(1058);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SelectLayout4Module = (function () {
    function SelectLayout4Module() {
    }
    SelectLayout4Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_4__["a" /* SelectLayout4 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__select_layout_4__["a" /* SelectLayout4 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__select_layout_4__["a" /* SelectLayout4 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], SelectLayout4Module);
    return SelectLayout4Module;
}());

//# sourceMappingURL=select-layout-4.module.js.map

/***/ })

});
//# sourceMappingURL=91.js.map