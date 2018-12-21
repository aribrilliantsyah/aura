webpackJsonp([35,109],{

/***/ 1002:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginLayout1; });
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

var LoginLayout1 = (function () {
    function LoginLayout1() {
        var _this = this;
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        this.onEvent = function (event) {
            if (event == "onLogin" && !_this.validate()) {
                return;
            }
            if (_this.events[event]) {
                _this.events[event]({
                    'username': _this.username,
                    'password': _this.password
                });
            }
        };
    }
    LoginLayout1.prototype.validate = function () {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.username || this.username.length == 0) {
            this.isUsernameValid = false;
        }
        if (!this.password || this.password.length == 0) {
            this.isPasswordValid = false;
        }
        return this.isPasswordValid && this.isUsernameValid;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginLayout1.prototype, "data", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], LoginLayout1.prototype, "events", void 0);
    LoginLayout1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'login-layout-1',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/components/login/layout-1/login.html"*/'<!-- Themes Login + logo 1 -->\n\n<ion-content has-header *ngIf="data != null" background-size [ngStyle]="{\'background-image\': \'url(\' + data.background + \')\'}">\n\n  <ion-grid no-padding *ngIf="data != null">\n\n    <ion-row padding-horizontal>\n\n      <ion-col align-self-start col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <button ion-button button-clear text-capitalize clear float-left (click)="onEvent(\'onSkip\')">{{data.skip}}</button>\n\n        <button ion-button button-clear text-capitalize clear float-right (click)="onEvent(\'onForgot\')">{{data.forgotPassword}}</button>\n\n      <!-- </ion-col>\n\n      <ion-col align-items-start col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6> -->\n\n        <ion-item transparent margin-top padding-top transparent>\n\n          <!---Logo-->\n\n          <img box-shadow item-start [src]="data.logo">\n\n          <!---Logo Subtitle-->\n\n          <h2 login-subtitle>{{data.subtitle}}</h2>\n\n          <!---Logo Title-->\n\n          <h1 ion-text login-title no-margin text-wrap>{{data.title}}</h1>\n\n        </ion-item>\n\n        <!---Input field username-->\n\n        <ion-item margin-top transparent>\n\n          <ion-label stacked>{{data.labelUsername}}</ion-label>\n\n          <ion-input required type="text" placeholder="{{data.username}}" [(ngModel)]="username"></ion-input>\n\n          <ion-label error-field no-margin *ngIf="!isUsernameValid">{{data.errorUser}}</ion-label>\n\n        </ion-item>\n\n        <!---Input field password-->\n\n        <ion-item transparent>\n\n          <ion-label stacked>{{data.labelPassword}}</ion-label>\n\n          <ion-input required type="password" placeholder="{{data.password}}" [(ngModel)]="password"></ion-input>\n\n          <ion-label error-field no-margin *ngIf="!isPasswordValid">{{data.errorPassword}}</ion-label>\n\n        </ion-item>\n\n      </ion-col>\n\n      <!---Share Section-->\n\n      <ion-col align-self-end bottom-form col-12 col-sm-12 col-md-12 offset-lg-3 col-lg-6 offset-xl-3 col-xl-6>\n\n        <!---Login button-->\n\n        <button ion-button default-button full text-uppercase box-shadow (click)="onEvent(\'onLogin\')">{{data.login}}</button>\n\n        <!---Facebook button-->\n\n        <button ion-button default-button full text-uppercase icon-end box-shadow (click)="onEvent(\'onFacebook\')">\n\n          Login with\n\n            <i icon-small class="icon icon-facebook"></i>\n\n        </button>\n\n        <div description text-center>\n\n          <p>Don\'t have account? <a text-capitalize (click)="onEvent(\'onRegister\')">{{data.register}}</a></p>\n\n        </div>\n\n      </ion-col>\n\n      <!---End Share Section-->\n\n    </ion-row>\n\n  </ion-grid>\n\n</ion-content>\n\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/components/login/layout-1/login.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], LoginLayout1);
    return LoginLayout1;
}());

//# sourceMappingURL=login-layout-1.js.map

/***/ }),

/***/ 1115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_loading_service_loading_service__ = __webpack_require__(500);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__ = __webpack_require__(501);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__ = __webpack_require__(519);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_local_storage_service_local_storage_service__ = __webpack_require__(529);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_flash_flash__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, loading, auth, viewCtrl, toast, alert, local, flashProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loading = loading;
        this.auth = auth;
        this.viewCtrl = viewCtrl;
        this.toast = toast;
        this.alert = alert;
        this.local = local;
        this.flashProvider = flashProvider;
        this.user = {
            username: '',
            password: '',
        };
        this.mask = [/[0]/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/, ' ', /\d/, /\d/, /\d/, /\d/];
        this.isUsernameValid = true;
        this.isPasswordValid = true;
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('LoginPage');
    };
    LoginPage.prototype.onLogin = function () {
        var _this = this;
        if (this.validate()) {
            var loader_1 = this.loading.show('loading ....');
            loader_1.present().then(function () {
                _this.auth.AuthUser(_this.user).subscribe(function (data) { return _this.getSuccess(data, loader_1); }, function (error) { return _this.getError(error, loader_1); });
            });
        }
    };
    LoginPage.prototype.getError = function (error, l) {
        var _this = this;
        l.dismiss().then(function () {
            if (error.status == 422) {
                _this.alert.presentAlert(null, error.json().error, 'ok');
            }
            else if (error.status == 400) {
                _this.flashProvider.show(error.json().error, 3500, 'danger');
            }
            else {
                _this.toast.show('Server Error');
            }
        });
    };
    LoginPage.prototype.getSuccess = function (data, l) {
        var _this = this;
        l.dismiss().then(function () {
            console.log('success');
            _this.auth.setUser(data.token, data.data);
            _this.local.saveTolocal('user', {
                username: _this.user.username.replace(/\D/g, ''),
                password: _this.user.password,
            });
            _this.navCtrl.setRoot('HomePage');
        });
    };
    LoginPage.prototype.validate = function () {
        this.isUsernameValid = true;
        this.isPasswordValid = true;
        if (!this.user.username || this.user.username.length == 0) {
            this.isUsernameValid = false;
        }
        if (!this.user.password || this.user.password.length == 0) {
            this.isPasswordValid = false;
        }
        return this.isPasswordValid && this.isUsernameValid;
    };
    LoginPage.prototype.register = function () {
        this.navCtrl.push('RegisterPage');
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/login/login.html"*/'<!--Fist Screen-->\n<!-- <ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon class="icon-menu" name="menu"></ion-icon>\n    </button>\n    <div buy>\n      <ion-title>Login</ion-title>\n    </div>\n  </ion-navbar>\n</ion-header> -->\n<!--Fist Screen Content-->\n<!-- Themes Login + logo 1 -->\n<ion-content [ngStyle]="{\'background-image\': \'url(assets/images/background/bg_login.png)\'}" background-size>\n  <!-- <div>\n    <img [src]="\'assets/images/background/bullet.png\'" bullet-top rotateimg180>\n  </div> -->\n  <div row-login>\n    <!-- <div login-top>\n      <img [src]="\'assets/images/background/bullet.png\'" rotateimg180>\n    </div> -->\n    <div login-container>\n      <div login-top>\n        <img [src]="\'assets/images/background/bullet.png\'" rotateimg180 bullet-top>\n        <img [src]="\'assets/images/background/daun.png\'" daun-top>\n        <img [src]="\'assets/images/logo/aura.png\'" logo-aura>\n      </div>\n      <div login-item>\n\n        <div group>\n            <ion-input type="tel" [(ngModel)]="user.username" placeholder="Phone Number" [textMask]="{mask: mask}"></ion-input>\n        </div>\n        <div error-container>\n          <span text-error *ngIf="! isUsernameValid">Phone Number is required</span>\n        </div>\n        <div group>\n          <ion-input [(ngModel)]="user.password" type="password" placeholder="Password"></ion-input>\n        </div>\n        <div error-container>\n          <span text-error *ngIf="! isPasswordValid">Password is required</span>\n        </div>\n        <button (click)="onLogin()" class="ripple">LOGIN</button>\n        <p>Don\'t have account? <a (click)="register()">Register</a></p>\n        <p><a href="#">Forgot Password</a></p>\n      </div>\n      <div login-bottom>\n        <img [src]="\'assets/images/background/bullet.png\'" bullet-bottom>\n        <img [src]="\'assets/images/background/daun.png\'" rotateimg180 daun-bottom>\n        <img [src]="\'assets/images/background/bg_login_2.png\'" logo-addon>\n      </div>\n      <!-- <div logo-imedis>\n        <img [src]="\'assets/images/logo/imedis.png\'">\n      </div> -->\n    </div>\n    \n    <!-- <img [src]="\'assets/images/background/daun.png\'" daun-bottom>\n    <img [src]="\'assets/images/background/bullet.png\'" bullet-bottom> -->\n  </div>\n</ion-content>\n\n\n'/*ion-inline-end:"/home/ari/Repos/Ionic/ClinicMobile/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavController"],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["NavParams"],
            __WEBPACK_IMPORTED_MODULE_2__providers_loading_service_loading_service__["a" /* LoadingServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_3__providers_auth_service_auth_service__["a" /* AuthServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["ViewController"],
            __WEBPACK_IMPORTED_MODULE_4__providers_toast_service_toast_service__["a" /* ToastServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_5__providers_alert_service_alert_service__["a" /* AlertServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_6__providers_local_storage_service_local_storage_service__["a" /* LocalStorageServiceProvider */],
            __WEBPACK_IMPORTED_MODULE_7__providers_flash_flash__["a" /* FlashProvider */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 1116:
/***/ (function(module, exports, __webpack_require__) {

! function (e, t) {
	 true ? module.exports = t(__webpack_require__(0), __webpack_require__(28)) : "function" == typeof define && define.amd ? define(["@angular/core", "@angular/forms"], t) : "object" == typeof exports ? exports.ionic2InputMask = t(require("@angular/core"), require("@angular/forms")) : e.ionic2InputMask = t(e.ng.core, e.ng.forms)
}(this, function (e, t) {
	return function (e) {
		function t(n) {
			if (r[n]) return r[n].exports;
			var o = r[n] = {
				exports: {},
				id: n,
				loaded: !1
			};
			return e[n].call(o.exports, o, o.exports, t), o.loaded = !0, o.exports
		}
		var r = {};
		return t.m = e, t.c = r, t.p = "", t(0)
	}([function (e, t, r) {
		"use strict";
		var n = this && this.__decorate || function (e, t, r, n) {
			var o, i = arguments.length,
				a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
			if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
			else
				for (var u = e.length - 1; u >= 0; u--)(o = e[u]) && (a = (i < 3 ? o(a) : i > 3 ? o(t, r, a) : o(t, r)) || a);
			return i > 3 && a && Object.defineProperty(t, r, a), a
		},
			o = this && this.__metadata || function (e, t) {
				if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
			},
			i = r(6),
			a = r(7),
			u = r(5),
			s = function () {
				function e(e) {
					this.element = e, this.textMaskConfig = {
						mask: "",
						guide: !0,
						placeholderChar: "_",
						pipe: void 0,
						keepCharPositions: !1,
						onReject: void 0,
						onAccept: void 0
					}, this.formControl = new a.FormControl
				}
				return e.prototype.ngAfterViewInit = function () {
					var e = this;
					this.inputElement = this.element.nativeElement.children[0], this.textMaskInputElement = u["default"](Object.assign({
						inputElement: this.inputElement
					}, this.textMaskConfig)), setTimeout(function () {
						return e.onInput()
					})
				}, e.prototype.writeValue = function (e) {
					this.textMaskInputElement.update(e), this.formControl.setValue(e)
				}, e.prototype.registerOnChange = function (e) {
					this.formControl.valueChanges.subscribe(e)
				}, e.prototype.registerOnTouched = function () { }, e.prototype.onInput = function () {
					this.textMaskInputElement.update(), this.writeValue(this.inputElement.value)
				}, n([i.Input("textMask"), o("design:type", Object)], e.prototype, "textMaskConfig", void 0), e = n([i.Directive({
					host: {
						"(input)": "onInput()"
					},
					selector: "ion-input[textMask]",
					providers: [{
						provide: a.NG_VALUE_ACCESSOR,
						useExisting: e,
						multi: !0
					}]
				}), o("design:paramtypes", [i.ElementRef])], e)
			}();
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t["default"] = s, t.Directive = s
	}, function (e, t) {
		"use strict";
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.placeholderChar = "_"
	}, function (e, t, r) {
		"use strict";

		function n() {
			var e = arguments.length <= 0 || void 0 === arguments[0] ? s : arguments[0],
				t = arguments.length <= 1 || void 0 === arguments[1] ? u.placeholderChar : arguments[1];
			if (e.indexOf(t) !== -1) throw new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.\n\n" + ("The placeholder character that was received is: " + JSON.stringify(t) + "\n\n") + ("The mask that was received is: " + JSON.stringify(e)));
			return e.map(function (e) {
				return e instanceof RegExp ? t : e
			}).join("")
		}

		function o(e) {
			return "string" == typeof e || e instanceof String
		}

		function i(e) {
			return e && void 0 === e.length && !isNaN(e)
		}

		function a(e) {
			for (var t = [], r = void 0; r = e.indexOf(l), r !== -1;) t.push(r), e.splice(r, 1);
			return {
				maskWithoutCaretTraps: e,
				indexes: t
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t.convertMaskToPlaceholder = n, t.isString = o, t.isNumber = i, t.processCaretTraps = a;
		var u = r(1),
			s = [],
			l = "[]"
	}, function (e, t) {
		"use strict";

		function r(e) {
			var t = e.previousConformedValue,
				r = void 0 === t ? o : t,
				i = e.currentCaretPosition,
				a = void 0 === i ? 0 : i,
				u = e.conformedValue,
				s = e.rawValue,
				l = e.placeholderChar,
				f = e.placeholder,
				c = e.indexesOfPipedChars,
				d = void 0 === c ? n : c,
				p = e.caretTrapIndexes,
				h = void 0 === p ? n : p;
			if (0 === a) return 0;
			var v = s.length,
				m = r.length,
				g = f.length,
				C = u.length,
				y = v - m,
				b = y > 0,
				x = 0 === m,
				k = y > 1 && !b && !x;
			if (k) return a;
			var O = b && (r === u || u === f),
				j = 0;
			if (O ? j = a - y : ! function () {
				for (var e = u.toLowerCase(), t = s.toLowerCase(), r = t.substr(0, a).split(o), n = r.filter(function (t) {
					return e.indexOf(t) !== -1
				}), i = n[n.length - 1], c = d.map(function (t) {
					return e[t]
				}), p = c.filter(function (e) {
					return e === i
				}).length, h = n.filter(function (e) {
					return e === i
				}).length, v = f.substr(0, f.indexOf(l)).split(o).filter(function (e, t) {
					return e === i && s[t] !== e
				}).length, m = v + h + p, g = 0, y = 0; y < C; y++) {
					var b = e[y];
					if (j = y + 1, b === i && g++ , g >= m) break
				}
			}(), b) {
				for (var P = j, M = j; M <= g; M++)
					if (f[M] === l && (P = M), f[M] === l || h.indexOf(M) !== -1 || M === g) return P
			} else
				for (var V = j; V >= 0; V--)
					if (f[V - 1] === l || h.indexOf(V) !== -1 || 0 === V) return V
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t["default"] = r;
		var n = [],
			o = ""
	}, function (e, t, r) {
		"use strict";

		function n() {
			var e = arguments.length <= 0 || void 0 === arguments[0] ? a : arguments[0],
				t = arguments.length <= 1 || void 0 === arguments[1] ? a : arguments[1],
				r = arguments.length <= 2 || void 0 === arguments[2] ? {} : arguments[2],
				n = r.guide,
				u = void 0 === n || n,
				s = r.previousConformedValue,
				l = void 0 === s ? a : s,
				f = r.placeholderChar,
				c = void 0 === f ? i.placeholderChar : f,
				d = r.placeholder,
				p = void 0 === d ? (0, o.convertMaskToPlaceholder)(t, c) : d,
				h = r.currentCaretPosition,
				v = r.keepCharPositions,
				m = u === !1 && void 0 !== l,
				g = e.length,
				C = l.length,
				y = p.length,
				b = t.length,
				x = g - C,
				k = x > 0,
				O = h + (k ? -x : 0),
				j = O + Math.abs(x);
			if (v === !0 && !k) {
				for (var P = a, M = O; M < j; M++) p[M] === c && (P += c);
				e = e.slice(0, O) + P + e.slice(O, g)
			}
			for (var V = e.split(a).map(function (e, t) {
				return {
					"char": e,
					isNew: t >= O && t < j
				}
			}), _ = g - 1; _ >= 0; _--) {
				var w = V[_]["char"];
				if (w !== c) {
					var E = _ >= O && C === b;
					w === p[E ? _ - x : _] && V.splice(_, 1)
				}
			}
			var T = a,
				R = !1;
			e: for (var S = 0; S < y; S++) {
				var I = p[S];
				if (I === c) {
					if (V.length > 0)
						for (; V.length > 0;) {
							var N = V.shift(),
								A = N["char"],
								q = N.isNew;
							if (A === c && m !== !0) {
								T += c;
								continue e
							}
							if (t[S].test(A)) {
								if (v === !0 && q !== !1 && l !== a && u !== !1 && k) {
									for (var D = V.length, J = null, L = 0; L < D; L++) {
										var W = V[L];
										if (W["char"] !== c && W.isNew === !1) break;
										if (W["char"] === c) {
											J = L;
											break
										}
									}
									null !== J ? (T += A, V.splice(J, 1)) : S--
								} else T += A;
								continue e
							}
							R = !0
						}
					m === !1 && (T += p.substr(S, y));
					break
				}
				T += I
			}
			if (m && k === !1) {
				for (var F = null, G = 0; G < T.length; G++) p[G] === c && (F = G);
				T = null !== F ? T.substr(0, F + 1) : a
			}
			return {
				conformedValue: T,
				meta: {
					someCharsRejected: R
				}
			}
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		}), t["default"] = n;
		var o = r(2),
			i = r(1),
			a = ""
	}, function (e, t, r) {
		"use strict";

		function n(e) {
			return e && e.__esModule ? e : {
				"default": e
			}
		}

		function o(e) {
			var t = e.inputElement,
				r = e.mask,
				n = e.guide,
				o = e.pipe,
				l = e.placeholderChar,
				c = void 0 === l ? h.placeholderChar : l,
				C = e.onAccept,
				y = e.onReject,
				b = e.keepCharPositions,
				x = void 0 !== b && b;
			"object" === ("undefined" == typeof r ? "undefined" : s(r)) && void 0 !== r.pipe && void 0 !== r.mask && (o = r.pipe, r = r.mask);
			var k = {
				previousConformedValue: g
			},
				O = void 0,
				j = void 0;
			return r instanceof Array && (O = (0, p.convertMaskToPlaceholder)(r, c)), t.placeholder === g && t.setAttribute(v, O), {
				state: k,
				update: function () {
					var e = arguments.length <= 0 || void 0 === arguments[0] ? t.value : arguments[0];
					if (e !== k.previousConformedValue) {
						var l = a(e),
							h = t.selectionStart,
							v = k.previousConformedValue,
							b = void 0;
						if (("undefined" == typeof r ? "undefined" : s(r)) === m) {
							j = r(l, {
								currentCaretPosition: h,
								previousConformedValue: v,
								placeholderChar: c
							});
							var P = (0, p.processCaretTraps)(j),
								M = P.maskWithoutCaretTraps,
								V = P.indexes;
							j = M, b = V, O = (0, p.convertMaskToPlaceholder)(j, c)
						} else j = r;
						var _ = {
							previousConformedValue: v,
							guide: n,
							placeholderChar: c,
							pipe: o,
							placeholder: O,
							currentCaretPosition: h,
							keepCharPositions: x
						},
							w = (0, d["default"])(l, j, _),
							E = w.conformedValue,
							T = w.meta.someCharsRejected,
							R = ("undefined" == typeof o ? "undefined" : s(o)) === m,
							S = {};
						R && (S = o(E, u({
							rawValue: l
						}, _)), S === !1 ? S = {
							value: v,
							rejected: !0
						} : (0, p.isString)(S) && (S = {
							value: S
						}));
						var I = R ? S.value : E,
							N = (0, f["default"])({
								previousConformedValue: v,
								conformedValue: I,
								placeholder: O,
								rawValue: l,
								currentCaretPosition: h,
								placeholderChar: c,
								indexesOfPipedChars: S.indexesOfPipedChars,
								caretTrapIndexes: b
							}),
							A = I === O && 0 === N,
							q = A ? g : I;
						t.value = q, i(t, N), k.previousConformedValue = q, ("undefined" == typeof C ? "undefined" : s(C)) === m && q !== v && C();
						var D = l.length < v.length;
						("undefined" == typeof y ? "undefined" : s(y)) === m && (T || S.rejected) && D === !1 && y({
							conformedValue: I,
							pipeRejection: S.rejected,
							maskRejection: T
						})
					}
				}
			}
		}

		function i(e, t) {
			document.activeElement === e && e.setSelectionRange(t, t, C)
		}

		function a(e) {
			if ((0, p.isString)(e)) return e;
			if ((0, p.isNumber)(e)) return String(e);
			if (void 0 === e || null === e) return g;
			throw new Error("The 'value' provided to Text Mask needs to be a string or a number. The value received was:\n\n " + JSON.stringify(e))
		}
		Object.defineProperty(t, "__esModule", {
			value: !0
		});
		var u = Object.assign || function (e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		},
			s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
				return typeof e
			} : function (e) {
				return e && "function" == typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
			};
		t["default"] = o;
		var l = r(3),
			f = n(l),
			c = r(4),
			d = n(c),
			p = r(2),
			h = r(1),
			v = "placeholder",
			m = "function",
			g = "",
			C = "none"
	}, function (t, r) {
		t.exports = e
	}, function (e, r) {
		e.exports = t
	}])
});

/***/ }),

/***/ 736:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayout1Module", function() { return LoginLayout1Module; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_layout_1__ = __webpack_require__(1002);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginLayout1Module = (function () {
    function LoginLayout1Module() {
    }
    LoginLayout1Module = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__login_layout_1__["a" /* LoginLayout1 */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginLayout1Module);
    return LoginLayout1Module;
}());

//# sourceMappingURL=login-layout-1.module.js.map

/***/ }),

/***/ 843:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(1115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_login_layout_1_login_layout_1_module__ = __webpack_require__(736);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_brmasker_ionic_3__ = __webpack_require__(521);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic3_input_mask__ = __webpack_require__(1116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic3_input_mask___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ionic3_input_mask__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    LoginPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_5_ionic3_input_mask__["Directive"]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["IonicPageModule"].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
                __WEBPACK_IMPORTED_MODULE_3__components_login_layout_1_login_layout_1_module__["LoginLayout1Module"],
                __WEBPACK_IMPORTED_MODULE_4_brmasker_ionic_3__["a" /* BrMaskerModule */]
            ],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        })
    ], LoginPageModule);
    return LoginPageModule;
}());

//# sourceMappingURL=login.module.js.map

/***/ })

});
//# sourceMappingURL=35.js.map