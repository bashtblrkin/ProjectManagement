(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\batur\Desktop\ProjectManagement\CleintApp\projectmanagement\src\main.ts */"zUnb");


/***/ }),

/***/ "0h24":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/main-layout/main-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: MainLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainLayoutComponent", function() { return MainLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _validators_confirmed_validators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../validators/confirmed.validators */ "KK3z");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");








function MainLayoutComponent_div_24_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_24_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0451\u043D \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_24_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u0430\u043D\u043D\u044B\u0439 email \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainLayoutComponent_div_24_small_1_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainLayoutComponent_div_24_small_2_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainLayoutComponent_div_24_small_3_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formRegistration.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formRegistration.get("email").errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formRegistration.get("email").errors.uniqEmail);
} }
function MainLayoutComponent_div_29_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_29_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainLayoutComponent_div_29_small_1_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainLayoutComponent_div_29_small_2_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formRegistration.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.formRegistration.get("password").errors.minlength);
} }
function MainLayoutComponent_div_34_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_34_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u0438 \u043D\u0435 \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u044E\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_34_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainLayoutComponent_div_34_small_1_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainLayoutComponent_div_34_small_2_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainLayoutComponent_div_34_small_3_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formRegistration.get("passwordConfirm").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formRegistration.get("passwordConfirm").errors.mustMatch);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formRegistration.get("passwordConfirm").errors.minlength);
} }
function MainLayoutComponent_div_39_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainLayoutComponent_div_39_small_1_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formRegistration.get("fio").errors.required);
} }
function MainLayoutComponent_div_57_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_57_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0451\u043D \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_57_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0414\u0430\u043D\u043D\u044B\u0439 email \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_57_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainLayoutComponent_div_57_small_1_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainLayoutComponent_div_57_small_2_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainLayoutComponent_div_57_small_3_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formLogin.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formLogin.get("email").errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formLogin.get("email").errors.uniqEmail);
} }
function MainLayoutComponent_div_62_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_62_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u0430\u0440\u043E\u043B\u044C \u0434\u043E\u043B\u0436\u0435\u043D \u0441\u043E\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u043C\u0438\u043D\u0438\u043C\u0443\u043C 6 \u0441\u0438\u043C\u0432\u043E\u043B\u043E\u0432");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_62_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0451\u043D \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 \u043F\u0430\u0440\u043E\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function MainLayoutComponent_div_62_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MainLayoutComponent_div_62_small_1_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MainLayoutComponent_div_62_small_2_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, MainLayoutComponent_div_62_small_3_Template, 2, 0, "small", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.formLogin.get("password").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.formLogin.get("password").errors.minlength);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.formLogin.get("password").errors.incorrectPas);
} }
const _c0 = function (a0) { return { open: a0 }; };
const _c1 = function (a0) { return { invalid: a0 }; };
class MainLayoutComponent {
    constructor(formBuilder, authService, router) {
        this.formBuilder = formBuilder;
        this.authService = authService;
        this.router = router;
        this.openRegistrationModal = false;
        this.submitted = false;
        this.openSignInModal = false;
    }
    ngOnInit() {
        this.formRegistration = this.formBuilder.group({
            email: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
                ]],
            password: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
                ]],
            passwordConfirm: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
                ]],
            fio: ['', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required
                ]]
        }, {
            validator: _validators_confirmed_validators__WEBPACK_IMPORTED_MODULE_2__["ConfirmedValidators"].MustMatch('password', 'passwordConfirm')
        });
        this.formLogin = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email
            ]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(6)
            ])
        });
    }
    submit() {
        this.submitted = true;
        if (this.formRegistration.invalid) {
            return;
        }
        const account = {
            email: this.formRegistration.value.email,
            password: this.formRegistration.value.password,
            fio: this.formRegistration.value.fio
        };
        this.authService.register(account)
            .subscribe(response => {
            this.formRegistration.reset();
            this.submitted = false;
            console.log(response);
        }, error => {
            if (error.error === "Email exists") {
                this.formRegistration.get('email').setErrors({
                    uniqEmail: true
                });
                this.submitted = false;
            }
        });
    }
    submitLogin() {
        this.submitted = true;
        if (this.formLogin.invalid) {
            return;
        }
        this.authService.login(this.formLogin.value.email, this.formLogin.value.password)
            .subscribe(res => {
            this.submitted = false;
            this.router.navigate(['user', 'projects']);
        }, error => {
            if (error.error === "Email not found") {
                this.formLogin.get('email').setErrors({
                    uniqEmail: true
                });
            }
            if (error.status === 401) {
                this.formLogin.get('password').setErrors({
                    incorrectPas: true
                });
                console.log(error.status);
            }
            this.submitted = false;
        });
    }
}
MainLayoutComponent.ɵfac = function MainLayoutComponent_Factory(t) { return new (t || MainLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MainLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainLayoutComponent, selectors: [["app-main-layout"]], decls: 66, vars: 40, consts: [[1, "header"], [1, "header_text"], [1, "header-buttons"], [1, "header-button", 3, "click"], [1, "mycontainer"], [1, "modal", 3, "ngClass", "mousedown"], [1, "modal-dialog"], [1, "modal-content", 3, "mousedown"], [1, "modal-header"], ["title", "Close", 1, "close", 3, "click"], [1, "modal-body"], [3, "formGroup", "ngSubmit"], [1, "form-control", 3, "ngClass"], ["for", "email", 1, "modal-body_label"], ["type", "text", "id", "email", "formControlName", "email", 1, "modal-body_input"], ["class", "validation", 4, "ngIf"], ["for", "password", 1, "modal-body_label"], ["type", "password", "id", "password", "formControlName", "password", 1, "modal-body_input"], ["for", "passwordTrue", 1, "modal-body_label"], ["type", "password", "id", "passwordTrue", "formControlName", "passwordConfirm", 1, "modal-body_input"], ["for", "fio", 1, "modal-body_label"], ["type", "text", "id", "fio", "formControlName", "fio", 1, "modal-body_input"], [1, "modal-body_wrap"], ["type", "submit", 1, "modal-body_button", 3, "ngClass", "disabled"], ["for", "emailLogin", 1, "modal-body_label"], ["type", "text", "id", "emailLogin", "formControlName", "email", 1, "modal-body_input"], ["for", "passwordLogin", 1, "modal-body_label"], ["type", "password", "id", "passwordLogin", "formControlName", "password", 1, "modal-body_input"], [1, "validation"], [4, "ngIf"]], template: function MainLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_Template_button_click_4_listener() { return ctx.openRegistrationModal = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_Template_button_click_6_listener() { return ctx.openSignInModal = true; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0412\u043E\u0439\u0442\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MainLayoutComponent_Template_div_mousedown_10_listener() { return ctx.openRegistrationModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MainLayoutComponent_Template_div_mousedown_12_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0420\u0435\u0433\u0438\u0441\u0442\u0440\u0430\u0446\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_16_listener() { return ctx.openRegistrationModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MainLayoutComponent_Template_form_ngSubmit_19_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MainLayoutComponent_div_24_Template, 4, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "input", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, MainLayoutComponent_div_29_Template, 3, 2, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u041F\u043E\u0432\u0442\u043E\u0440\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "input", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MainLayoutComponent_div_34_Template, 4, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0424\u0418\u041E:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "input", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](39, MainLayoutComponent_div_39_Template, 2, 1, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MainLayoutComponent_Template_div_mousedown_43_listener() { return ctx.openSignInModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("mousedown", function MainLayoutComponent_Template_div_mousedown_45_listener($event) { return $event.stopPropagation(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "\u0412\u0445\u043E\u0434");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MainLayoutComponent_Template_a_click_49_listener() { return ctx.openSignInModal = false; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "\u00D7");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "form", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function MainLayoutComponent_Template_form_ngSubmit_52_listener() { return ctx.submitLogin(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "label", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](56, "input", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, MainLayoutComponent_div_57_Template, 4, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "label", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043F\u0430\u0440\u043E\u043B\u044C:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "input", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](62, MainLayoutComponent_div_62_Template, 4, 3, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "div", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "\u0412\u043E\u0439\u0442\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c0, ctx.openRegistrationModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formRegistration);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c1, ctx.formRegistration.get("email").touched && ctx.formRegistration.get("email").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistration.get("email").touched && ctx.formRegistration.get("email").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c1, ctx.formRegistration.get("password").touched && ctx.formRegistration.get("password").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistration.get("password").touched && ctx.formRegistration.get("password").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c1, ctx.formRegistration.get("passwordConfirm").touched && ctx.formRegistration.get("passwordConfirm").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistration.get("passwordConfirm").touched && ctx.formRegistration.get("passwordConfirm").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c1, ctx.formRegistration.get("fio").touched && ctx.formRegistration.get("fio").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formRegistration.get("fio").touched && ctx.formRegistration.get("fio").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c1, ctx.formRegistration.invalid || ctx.submitted))("disabled", ctx.formRegistration.invalid || ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx.openSignInModal));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formLogin);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c1, ctx.formLogin.get("email").touched && ctx.formLogin.get("email").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formLogin.get("email").touched && ctx.formLogin.get("email").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c1, ctx.formLogin.get("password").touched && ctx.formLogin.get("password").invalid));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.formLogin.get("password").touched && ctx.formLogin.get("password").invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c1, ctx.formLogin.invalid || ctx.submitted))("disabled", ctx.formLogin.invalid || ctx.submitted);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: [".header[_ngcontent-%COMP%] {\n  margin: 30px 20px;\n  display: flex;\n  justify-content: space-between;\n  background-color: #FFF;\n  height: 102px;\n  align-items: center;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n}\n.header_text[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 36px;\n  color: #4A5BF4;\n  margin: auto 100px;\n}\n.header-buttons[_ngcontent-%COMP%] {\n  padding: 0 20px;\n  display: flex;\n}\n.header-button[_ngcontent-%COMP%] {\n  margin: 0 10px;\n  width: 163px;\n  height: 38px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n}\n.header-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n.modal[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.5);\n  z-index: 1000;\n  opacity: 0;\n  pointer-events: none;\n  transition: opacity 200ms ease-in;\n}\n.modal.open[_ngcontent-%COMP%] {\n  opacity: 1;\n  pointer-events: auto;\n}\n.modal-dialog[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.modal-content[_ngcontent-%COMP%] {\n  width: 500px;\n  max-height: 600px;\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  border-radius: 10px;\n}\n.modal-header[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  position: relative;\n  text-align: center;\n}\n.modal-header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 24px;\n}\n.modal-body[_ngcontent-%COMP%] {\n  padding: 10px 20px;\n}\n.modal-body_label[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: block;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n.modal-body_input[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid var(--button-color);\n  box-sizing: border-box;\n  border-radius: 25px;\n  height: 40px;\n  width: 100%;\n  font-size: 18px;\n  padding: 0 10px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n.modal-body_input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.modal-body_wrap[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n.modal-body_button[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 38px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n}\n.modal-body_button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n.modal-body_button.invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: default;\n}\n.form-control.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: red;\n}\n.close[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -5px;\n  right: 5px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 28px;\n  color: #898383;\n}\n.close[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n.validation[_ngcontent-%COMP%] {\n  color: red;\n}\n.mycontainer[_ngcontent-%COMP%] {\n  max-width: 1400px;\n  margin: auto;\n  overflow: hidden;\n  padding: 0 2rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHNCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtBQUNGO0FBQUU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxhQUFBO0FBRUo7QUFBRTtFQUNFLGNBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFFSjtBQURJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFHTjtBQUVBO0VBQ0UsZUFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSw4QkFBQTtFQUNBLGFBQUE7RUFDQSxVQUFBO0VBQ0Esb0JBQUE7RUFDQSxpQ0FBQTtBQUNGO0FBQUU7RUFDRSxVQUFBO0VBQ0Esb0JBQUE7QUFFSjtBQUFFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQUVKO0FBQUU7RUFDRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0FBRUo7QUFBRTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FBRUo7QUFESTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFHTjtBQUFFO0VBQ0Usa0JBQUE7QUFFSjtBQURJO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdOO0FBREk7RUFDRSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUdOO0FBRk07RUFDRSxhQUFBO0FBSVI7QUFESTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7QUFHTjtBQURJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBR047QUFGTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBSVI7QUFGTTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBSVI7QUFJSTtFQUNFLGlCQUFBO0FBRE47QUFNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUhGO0FBSUU7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUZKO0FBTUE7RUFDRSxVQUFBO0FBSEY7QUFNQTtFQUNFLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUhGIiwiZmlsZSI6Im1haW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlciB7XHJcbiAgbWFyZ2luOiAzMHB4IDIwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcclxuICBoZWlnaHQ6IDEwMnB4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAmX3RleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gICAgY29sb3I6ICM0QTVCRjQ7XHJcbiAgICBtYXJnaW46IGF1dG8gMTAwcHg7XHJcbiAgfVxyXG4gICYtYnV0dG9ucyB7XHJcbiAgICBwYWRkaW5nOiAwIDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gIH1cclxuICAmLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW46IDAgMTBweDtcclxuICAgIHdpZHRoOiAxNjNweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4ubW9kYWx7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIGJvdHRvbTogMDtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsMCwwLDAuNSk7XHJcbiAgei1pbmRleDogMTAwMDtcclxuICBvcGFjaXR5OiAwO1xyXG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMjAwbXMgZWFzZS1pbjtcclxuICAmLm9wZW4ge1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xyXG4gIH1cclxuICAmLWRpYWxvZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gICYtY29udGVudCB7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG4gICYtaGVhZGVyIHtcclxuICAgIHBhZGRpbmc6IDEwcHggMDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGgzIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtYm9keSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XHJcbiAgICAmX2xhYmVsIHtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgJl9pbnB1dCB7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAmOmZvY3VzIHtcclxuICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmX3dyYXAge1xyXG4gICAgICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG4gICAgJl9idXR0b24ge1xyXG4gICAgICB3aWR0aDogMjUwcHg7XHJcbiAgICAgIGhlaWdodDogMzhweDtcclxuICAgICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICAgICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAmOmhvdmVyIHtcclxuICAgICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICB9XHJcbiAgICAgICYuaW52YWxpZCB7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICYuaW52YWxpZCB7XHJcbiAgICBpbnB1dCB7XHJcbiAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmNsb3NlIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiAtNXB4O1xyXG4gIHJpZ2h0OiA1cHg7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAyOHB4O1xyXG4gIGNvbG9yOiAjODk4MzgzO1xyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgb3BhY2l0eTogMC44O1xyXG4gIH1cclxufVxyXG5cclxuLnZhbGlkYXRpb24ge1xyXG4gIGNvbG9yOiByZWQ7XHJcbn1cclxuXHJcbi5teWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAxNDAwcHg7XHJcbiAgbWFyZ2luOiBhdXRvO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgcGFkZGluZzogMCAycmVtO1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-layout',
                templateUrl: './main-layout.component.html',
                styleUrls: ['./main-layout.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "10g0":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/datasearch.service.ts ***!
  \*******************************************************/
/*! exports provided: DatasearchService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatasearchService", function() { return DatasearchService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class DatasearchService {
    constructor() {
        this.searchStr = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.updateUserLayout = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
DatasearchService.ɵfac = function DatasearchService_Factory(t) { return new (t || DatasearchService)(); };
DatasearchService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DatasearchService, factory: DatasearchService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DatasearchService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "16xu":
/*!******************************************************************!*\
  !*** ./src/app/optimization-page/optimization-page.component.ts ***!
  \******************************************************************/
/*! exports provided: OptimizationPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizationPageComponent", function() { return OptimizationPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_optimization_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/optimization.service */ "fW7f");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");






function OptimizationPageComponent_input_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 20);
} }
function OptimizationPageComponent_div_16_input_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 23);
} if (rf & 2) {
    const col_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", col_r13);
} }
function OptimizationPageComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, OptimizationPageComponent_div_16_input_2_Template, 1, 1, "input", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const row_r10 = ctx.$implicit;
    const i_r11 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "answer.", i_r11, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", row_r10["controls"]);
} }
function OptimizationPageComponent_input_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "input", 24);
} if (rf & 2) {
    const priority_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", priority_r14);
} }
function OptimizationPageComponent_select_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Max");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Min");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const direction_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", direction_r15);
} }
function OptimizationPageComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0441\u0435 \u043F\u043E\u043B\u044F \u0444\u043E\u0440\u043C\u044B \u0434\u043E\u043B\u0436\u043D\u044B \u0431\u044B\u0442\u044C \u0437\u0430\u043F\u043E\u043B\u043D\u0435\u043D\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OptimizationPageComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044B \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F (\u043C\u0430\u043A\u0441\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0438 \u043C\u0438\u043D\u0438\u043C\u0430\u043B\u044C\u043D\u043E\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u0432 \u0441\u0442\u043E\u043B\u0431\u0446\u0430\u0445 \u043D\u0435 \u0434\u043E\u043B\u0436\u043D\u043E \u0441\u043E\u0432\u043F\u0430\u0434\u0430\u0442\u044C)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OptimizationPageComponent_div_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u044B \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0435 \u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F (\u0437\u043D\u0430\u0447\u0435\u043D\u0438\u044F \u043C\u0430\u0442\u0440\u0438\u0446\u044B \u0438 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442\u043E\u0432 \u043C\u043E\u0433\u0443\u0442\u044C \u0431\u044B\u0442\u044C \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0438\u0441\u043B\u0430\u043C\u0438)");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function OptimizationPageComponent_div_26_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const answer_r17 = ctx.$implicit;
    const idx_r18 = ctx.index;
    const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](idx_r18 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](answer_r17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r16.answerArrayNumber[idx_r18], "%");
} }
function OptimizationPageComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0420\u0435\u0439\u0442\u0438\u043D\u0433:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "table", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041D\u043E\u043C\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u042D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u044F");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, OptimizationPageComponent_div_26_tr_14_Template, 7, 3, "tr", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r7.answerArrayName);
} }
const _c0 = function (a0) { return { invalid: a0 }; };
class OptimizationPageComponent {
    constructor(optimizationService) {
        this.optimizationService = optimizationService;
        this.rows = 2;
        this.columns = 2;
        this.countColumns = [];
        this.answerArrayNumber = [];
        this.submitted = false;
        this.answergetted = false;
        this.error = false;
        this.secondError = false;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            matrix: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]),
            direction: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([])
        });
        this.updateMatrix();
    }
    updateMatrix() {
        this.countColumns = [];
        if (this.columns < 2) {
            this.columns = 2;
        }
        if (this.columns > 5) {
            this.columns = 5;
        }
        if (this.rows < 2) {
            this.rows = 2;
        }
        for (let i = 0; i < this.columns; i++) {
            this.countColumns.push(i);
        }
        this.form.controls['matrix'].clear();
        this.form.controls['direction'].clear();
        this.form.controls['priority'].clear();
        for (let i = 0; i < this.rows; i++) {
            this.form.controls['matrix'].push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArray"]([]));
            for (let j = 0; j < this.columns; j++) {
                this.form.controls['matrix'].at(i).push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
            }
        }
        for (let i = 0; i < this.columns; i++) {
            this.form.controls['priority'].push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
            this.form.controls['direction'].push(new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]));
        }
    }
    getMatrixControls(form) {
        return this.form.get('matrix').controls;
    }
    getPriorityControls(form) {
        return this.form.get('priority').controls;
    }
    getDirectionControls(form) {
        return this.form.get('direction').controls;
    }
    getAnswer() {
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        this.error = false;
        this.secondError = false;
        this.answergetted = false;
        const optimizationTask = {
            width: this.columns,
            height: this.rows,
            Data: this.form.controls['matrix'].value,
            Weight: this.form.controls['priority'].value,
            Direction: this.form.controls['direction'].value
        };
        this.optimizationService.GetAnswerCombinedObjectiveFunction(optimizationTask).subscribe(res => {
            let answerObj = {};
            for (let i = 0; i < this.rows; i++) {
                answerObj[document.getElementById(`answer.${i}`).value] = res.answerArr[i];
            }
            console.log(answerObj);
            if (res.dir === 'min') {
                this.answerArrayName = Object.keys(answerObj).sort((a, b) => answerObj[a] - answerObj[b]);
            }
            if (res.dir === 'max') {
                this.answerArrayName = Object.keys(answerObj).sort((a, b) => answerObj[b] - answerObj[a]);
            }
            for (let i = 0; i < this.rows; i++) {
                this.answerArrayNumber[i] = answerObj[this.answerArrayName[i]];
            }
            console.log(this.answerArrayNumber);
            let min = this.answerArrayNumber[0];
            for (let i = 1; i < this.rows; i++) {
                if (this.answerArrayNumber[i] < min) {
                    min = this.answerArrayNumber[i];
                }
            }
            min = Math.abs(min);
            console.log(min);
            for (let i = 0; i < this.rows; i++) {
                this.answerArrayNumber[i] = ((this.answerArrayNumber[i] + min) * 100) + 1;
            }
            let max = this.answerArrayNumber[0];
            for (let i = 1; i < this.rows; i++) {
                if (this.answerArrayNumber[i] > max) {
                    max = this.answerArrayNumber[i];
                }
            }
            min = this.answerArrayNumber[0];
            for (let i = 1; i < this.rows; i++) {
                if (this.answerArrayNumber[i] < min) {
                    min = this.answerArrayNumber[i];
                }
            }
            const delta = 100 / max;
            console.log(delta);
            if (res.dir === 'min') {
                for (let i = 0; i < this.rows; i++) {
                    if (this.answerArrayNumber[i] == min) {
                        this.answerArrayNumber[i] = 100;
                    }
                    else if (this.answerArrayNumber[i] == max) {
                        this.answerArrayNumber[i] = 0;
                    }
                    else {
                        this.answerArrayNumber[i] = Math.trunc(100 - this.answerArrayNumber[i] * delta);
                    }
                }
            }
            if (res.dir === 'max') {
                for (let i = 0; i < this.rows; i++) {
                    if (this.answerArrayNumber[i] == max) {
                        this.answerArrayNumber[i] = 100;
                    }
                    else if (this.answerArrayNumber[i] == min) {
                        this.answerArrayNumber[i] = 0;
                    }
                    else {
                        this.answerArrayNumber[i] = Math.trunc(this.answerArrayNumber[i] * delta);
                    }
                }
            }
            this.submitted = false;
            this.answergetted = true;
        }, error => {
            if (error.error === "Invalid values") {
                this.error = true;
            }
            else {
                this.secondError = true;
            }
            this.submitted = false;
        });
    }
}
OptimizationPageComponent.ɵfac = function OptimizationPageComponent_Factory(t) { return new (t || OptimizationPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_optimization_service__WEBPACK_IMPORTED_MODULE_2__["OptimizationService"])); };
OptimizationPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OptimizationPageComponent, selectors: [["app-optimization-page"]], decls: 27, vars: 15, consts: [[1, "mycontainer"], [1, "wrap"], [1, "question"], [1, "options"], [1, "options-wrap"], ["for", "alternative"], ["type", "text", "id", "alternative", 3, "ngModel", "ngModelChange"], ["for", "criteria"], ["type", "text", "id", "criteria", 3, "ngModel", "ngModelChange"], [1, "matrix"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "matrix-criteria-wrap"], ["type", "text", "class", "matrix-criteria", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0439", 4, "ngFor", "ngForOf"], [4, "ngFor", "ngForOf"], ["type", "text", "class", "matrix-priority", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u044C", 3, "formControl", 4, "ngFor", "ngForOf"], ["class", "matrix-direction", 3, "formControl", 4, "ngFor", "ngForOf"], ["type", "submit", 1, "form-button", 3, "ngClass", "disabled"], ["class", "invalid-text", 4, "ngIf"], [4, "ngIf"], ["class", "answer", 4, "ngIf"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0439", 1, "matrix-criteria"], ["type", "text", "placeholder", "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0440\u0435\u0448\u0435\u043D\u0438\u044F", 1, "matrix-rows", 3, "id"], ["class", "matrix-data", 3, "formControl", 4, "ngFor", "ngForOf"], [1, "matrix-data", 3, "formControl"], ["type", "text", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0430\u0436\u043D\u043E\u0441\u0442\u044C", 1, "matrix-priority", 3, "formControl"], [1, "matrix-direction", 3, "formControl"], ["value", "1"], ["value", "0"], [1, "invalid-text"], [1, "answer"], [1, "table-responsive"], [1, "table", "table-bordered"]], template: function OptimizationPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442\u0438\u0432\u043D\u044B\u0445 \u0440\u0435\u0448\u0435\u043D\u0438\u0439 (\u0441\u0442\u0440\u043E\u043A\u0438):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimizationPageComponent_Template_input_ngModelChange_7_listener($event) { return ctx.rows = $event; })("ngModelChange", function OptimizationPageComponent_Template_input_ngModelChange_7_listener() { return ctx.updateMatrix(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u043E \u043A\u0440\u0438\u0442\u0435\u0440\u0438\u0435\u0432 \u043E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u0438 (\u0441\u0442\u043E\u043B\u0431\u0446\u044B):");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function OptimizationPageComponent_Template_input_ngModelChange_11_listener($event) { return ctx.columns = $event; })("ngModelChange", function OptimizationPageComponent_Template_input_ngModelChange_11_listener() { return ctx.updateMatrix(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "form", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function OptimizationPageComponent_Template_form_ngSubmit_13_listener() { return ctx.getAnswer(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, OptimizationPageComponent_input_15_Template, 1, 0, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, OptimizationPageComponent_div_16_Template, 3, 2, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, OptimizationPageComponent_input_18_Template, 1, 1, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, OptimizationPageComponent_select_20_Template, 5, 1, "select", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "\u041F\u043E\u043B\u0443\u0447\u0438\u0442\u044C \u0440\u0435\u0448\u0435\u043D\u0438\u0435 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, OptimizationPageComponent_div_23_Template, 2, 0, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, OptimizationPageComponent_div_24_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, OptimizationPageComponent_div_25_Template, 2, 0, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, OptimizationPageComponent_div_26_Template, 15, 1, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.rows);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.columns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.countColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getMatrixControls(ctx.form));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getPriorityControls(ctx.form));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.getDirectionControls(ctx.form));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.form.invalid || ctx.submitted))("disabled", ctx.form.invalid || ctx.submitted);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.form.invalid);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.secondError);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.answergetted);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], styles: [".wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #FFFFFF;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 20px;\n  margin: 0 10px;\n  display: flex;\n  flex-direction: column;\n}\n\n.options[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n.options-wrap[_ngcontent-%COMP%] {\n  margin: 10px 0;\n}\n\n.options[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  margin-right: 10px;\n}\n\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: rgba(196, 196, 196, 0.27);\n  border-radius: 15px;\n  border: none;\n  height: 40px;\n  padding: 5px 10px;\n  width: 50px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n}\n\n.options[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.matrix[_ngcontent-%COMP%] {\n  margin: 10px 10px;\n}\n\n.matrix-criteria[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 30px;\n  margin-right: 10px;\n  border-radius: 15px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  padding: 5px 10px;\n}\n\n.matrix-criteria-wrap[_ngcontent-%COMP%] {\n  margin-left: 240px;\n}\n\n.matrix-criteria[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.matrix-priority[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 30px;\n  margin: 10px 0;\n  margin-right: 10px;\n  border-radius: 15px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  padding: 5px 10px;\n}\n\n.matrix-priority-wrap[_ngcontent-%COMP%] {\n  margin-left: 240px;\n}\n\n.matrix-priority[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.matrix-direction[_ngcontent-%COMP%] {\n  width: 200px;\n  height: 30px;\n  margin: 10px 0;\n  margin-right: 10px;\n  border-radius: 15px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  padding: 5px 10px;\n}\n\n.matrix-direction[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.matrix-rows[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  border-radius: 15px;\n  height: 30px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  padding: 5px 10px;\n  width: 200px;\n}\n\n.matrix-rows[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.matrix-data[_ngcontent-%COMP%] {\n  background: rgba(196, 196, 196, 0.27);\n  border-radius: 15px;\n  border: none;\n  height: 40px;\n  padding: 5px 10px;\n  width: 100px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n  margin: 5px 53px;\n}\n\n.matrix-data[_ngcontent-%COMP%]::placeholder {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n}\n\n.matrix-data[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form-button[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 38px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.form-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.form-button.invalid[_ngcontent-%COMP%] {\n  opacity: 0.2;\n  cursor: default;\n  background: red;\n}\n\n.invalid-text[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.green[_ngcontent-%COMP%] {\n  background: greenyellow;\n}\n\n.answer[_ngcontent-%COMP%] {\n  display: flex;\n  width: 1000px;\n}\n\n.answer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 76vw;\n  border-collapse: collapse;\n}\n\ntbody[_ngcontent-%COMP%] {\n  width: 76vw;\n}\n\nthead[_ngcontent-%COMP%] {\n  width: 76vw;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 76vw;\n  margin-top: 40px;\n}\n\nth[_ngcontent-%COMP%] {\n  width: 76vw;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  padding: 20px;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-top: none;\n}\n\nth[_ngcontent-%COMP%]:first-child {\n  border-left: none;\n  border-top: none;\n}\n\nth[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\ntr[_ngcontent-%COMP%] {\n  width: 76vw;\n  word-break: break-all;\n}\n\ntd[_ngcontent-%COMP%] {\n  word-break: break-all;\n  padding: 15px;\n  border: 2px solid rgba(0, 0, 0, 0.32);\n  border-bottom: none;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid rgba(0, 0, 0, 0);\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  .table-responsive-sm[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .table-responsive-md[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  .table-responsive-md[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  .table-responsive-lg[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  .table-responsive-xl[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n  border: 0;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border-top: 2px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.table-bordered[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 2px;\n}\n\n.task-name[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: var(--button-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXG9wdGltaXphdGlvbi1wYWdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUFFO0VBQ0UsY0FBQTtBQUVKOztBQUFFO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRUo7O0FBREk7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR047O0FBREk7RUFDRSxhQUFBO0FBR047O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQURFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR0o7O0FBRkk7RUFDRSxrQkFBQTtBQUlOOztBQUZJO0VBQ0UsYUFBQTtBQUlOOztBQURFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQUdKOztBQUZJO0VBQ0Usa0JBQUE7QUFJTjs7QUFGSTtFQUNFLGFBQUE7QUFJTjs7QUFERTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7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QTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLHlCQUFBO0FBQ0Y7O0FBRUE7O0VBRUUseUJBQUE7QUFDRjs7QUFFQTs7RUFFRSx3QkFBQTtBQUNGOztBQUdFO0VBQ0UsZUFBQTtFQUNBLHFDQUFBO0FBQUoiLCJmaWxlIjoib3B0aW1pemF0aW9uLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLm9wdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAmLXdyYXAge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgfVxyXG4gIGxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDE5NiwgMTk2LCAxOTYsIDAuMjcpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLm1hdHJpeCB7XHJcbiAgbWFyZ2luOiAxMHB4IDEwcHg7XHJcbiAgJi1jcml0ZXJpYSB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICYtd3JhcCB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAyNDBweDtcclxuICAgIH1cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLXByaW9yaXR5IHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogNXB4IDEwcHg7XHJcbiAgICAmLXdyYXAge1xyXG4gICAgICBtYXJnaW4tbGVmdDogMjQwcHg7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgJi1kaXJlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAmLXJvd3Mge1xyXG4gICAgbWFyZ2luOiAwIDIwcHg7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gIH1cclxuICAmLWRhdGEge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjI3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgbWFyZ2luOiA1cHggNTNweDtcclxuICAgICY6OnBsYWNlaG9sZGVyIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICB9XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuLmZvcm0ge1xyXG4gICYtYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAmLmludmFsaWQge1xyXG4gICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgICAgYmFja2dyb3VuZDogcmVkO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG5cclxuLmludmFsaWQtdGV4dCB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbn1cclxuXHJcbi5ncmVlbiB7XHJcbiAgYmFja2dyb3VuZDogZ3JlZW55ZWxsb3c7XHJcbn1cclxuXHJcbi5hbnN3ZXIge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMDBweDtcclxuICBoMiB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxuICB9XHJcbn1cclxuXHJcbnRhYmxlIHtcclxuICB3aWR0aDogNzZ2dztcclxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xyXG59XHJcblxyXG50Ym9keSB7XHJcbiAgd2lkdGg6IDc2dnc7XHJcbn1cclxuXHJcbnRoZWFkIHtcclxuICB3aWR0aDogNzZ2dztcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICB3aWR0aDogNzZ2dztcclxuICBtYXJnaW4tdG9wOiA0MHB4O1xyXG59XHJcblxyXG50aCB7XHJcbiAgd2lkdGg6IDc2dnc7XHJcbiAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxuICAgIGJvcmRlci10b3A6IG5vbmU7XHJcbiAgfVxyXG4gICY6bGFzdC1jaGlsZCB7XHJcbiAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgfVxyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjIwKTtcclxuICBib3JkZXItdG9wOiBub25lO1xyXG59XHJcblxyXG50ciB7XHJcbiAgd2lkdGg6IDc2dnc7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG59XHJcblxyXG50ZCB7XHJcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjMyKTtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDApO1xyXG4gIH1cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUtc20ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxuICB9XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUtc20gPiAudGFibGUtYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUtbWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxuICB9XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUtbWQgPiAudGFibGUtYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUtbGcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxuICB9XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUtbGcgPiAudGFibGUtYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG4gIC50YWJsZS1yZXNwb25zaXZlLXhsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbiAgfVxyXG4gIC50YWJsZS1yZXNwb25zaXZlLXhsID4gLnRhYmxlLWJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4udGFibGUgdGJvZHkgKyB0Ym9keSB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZSAudGFibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlLWJvcmRlcmVkIHRoLFxyXG4udGFibGUtYm9yZGVyZWQgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0aCxcclxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi50YXNrLW5hbWUge1xyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptimizationPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-optimization-page',
                templateUrl: './optimization-page.component.html',
                styleUrls: ['./optimization-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_optimization_service__WEBPACK_IMPORTED_MODULE_2__["OptimizationService"] }]; }, null); })();


/***/ }),

/***/ "487a":
/*!******************************************************!*\
  !*** ./src/app/shared/services/gant.task.service.ts ***!
  \******************************************************/
/*! exports provided: GantTaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GantTaskService", function() { return GantTaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_injection_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-injection-tokens */ "cT/4");





class GantTaskService {
    constructor(http, apiUrl) {
        this.http = http;
        this.apiUrl = apiUrl;
    }
    get(id) {
        return this.http.get(`${this.apiUrl}api/tasks/project/gant`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        })
            .toPromise();
    }
}
GantTaskService.ɵfac = function GantTaskService_Factory(t) { return new (t || GantTaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_injection_tokens__WEBPACK_IMPORTED_MODULE_2__["RESOURCE_API_URL"])); };
GantTaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GantTaskService, factory: GantTaskService.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GantTaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_app_injection_tokens__WEBPACK_IMPORTED_MODULE_2__["RESOURCE_API_URL"]]
            }] }]; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    authApi: 'http://localhost:5000/',
    projectManagementApi: 'http://localhost:56299/',
    tokenWhiteListedDomains: ['localhost:56299']
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "F1my":
/*!**************************************************!*\
  !*** ./src/app/home-page/home-page.component.ts ***!
  \**************************************************/
/*! exports provided: HomePageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageComponent", function() { return HomePageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class HomePageComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomePageComponent.ɵfac = function HomePageComponent_Factory(t) { return new (t || HomePageComponent)(); };
HomePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomePageComponent, selectors: [["app-home-page"]], decls: 35, vars: 0, consts: [[1, "wrap"], [1, "card-row"], [1, "card"], [1, "card-text"], ["src", "./assets/img/command%20work.jpg", "alt", "", 1, "card-img"], ["src", "./assets/img/relationships%20command.jpg", "alt", "", 1, "card-img"], ["src", "./assets/img/data%20transfer.png", "alt", "", 1, "card-img"], ["src", "./assets/img/high%20result.jpg", "alt", "", 1, "card-img"]], template: function HomePageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0421\u0435\u0440\u0432\u0438\u0441 \u0434\u043B\u044F \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u0438 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0430 \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u043E\u0432\u044B\u0448\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u043A\u043E\u043C\u0430\u043D\u0434\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0418\u0441\u043F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u043D\u0438\u0435 \u0441\u0435\u0440\u0432\u0438\u0441\u0430 \u0434\u043B\u044F \u0443\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438 \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u0432\u0430\u0448\u0438\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u043A\u0430\u043C \u043F\u043E\u0432\u044B\u0448\u0430\u0442\u044C \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0438 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0442\u044C \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0441 \u043A\u043E\u043B\u043B\u0435\u0433\u0430\u043C\u0438.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0423\u043B\u0443\u0447\u0448\u0430\u0439\u0442\u0435 \u0432\u0437\u0430\u0438\u043C\u043E\u0434\u0435\u0439\u0441\u0442\u0432\u0438\u0435 \u0432\u043D\u0443\u0442\u0440\u0438 \u043A\u043E\u043C\u0430\u043D\u0434\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u041F\u0440\u0435\u0434\u043E\u0441\u0442\u0430\u0432\u044C\u0442\u0435 \u043A\u043E\u043C\u0430\u043D\u0434\u0430\u043C \u0432\u043E\u0437\u043C\u043E\u0436\u043D\u043E\u0441\u0442\u044C \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0441\u043E\u0432\u043C\u0435\u0441\u0442\u043D\u043E\u0439 \u0440\u0430\u0431\u043E\u0442\u044B \u043C\u0435\u0436\u0434\u0443 \u043E\u0442\u0434\u0435\u043B\u0430\u043C\u0438 \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u0443\u044E \u0430\u0432\u0442\u043E\u043C\u0430\u0442\u0438\u0437\u0430\u0446\u0438\u044E \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u043E\u0432.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "\u0420\u0430\u0431\u043E\u0442\u0430\u0439\u0442\u0435 \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u043E\u0442\u0434\u0435\u043B\u0430\u043C\u0438 \u0432\u0430\u0448\u0435\u0439 \u043E\u0440\u0433\u0430\u043D\u0438\u0437\u0430\u0446\u0438\u0438 \u0432 \u0440\u0435\u0436\u0438\u043C\u0435 \u0440\u0435\u0430\u043B\u044C\u043D\u043E\u0433\u043E \u0432\u0440\u0435\u043C\u0435\u043D\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0421\u0430\u043C\u043E\u0435 \u0433\u043B\u0430\u0432\u043D\u043E\u0435 \u2013 \u0438\u043D\u0444\u043E\u0440\u043C\u0430\u0446\u0438\u0435\u0439 \u043C\u043E\u0436\u043D\u043E \u043F\u043E\u0434\u0435\u043B\u0438\u0442\u044C\u0441\u044F \u0441\u043E \u0432\u0441\u0435\u043C\u0438 \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430\u043C\u0438 \u0432 \u043B\u044E\u0431\u043E\u0435 \u0432\u0440\u0435\u043C\u044F.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "\u0414\u043E\u0441\u0442\u0438\u0433\u0430\u0439\u0442\u0435 \u0432\u044B\u0441\u043E\u043A\u0438\u0445 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u043E\u0432");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u041F\u043E\u0432\u044B\u0448\u0430\u0439\u0442\u0435 \u043F\u0440\u043E\u0434\u0443\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0438 \u044D\u0444\u0444\u0435\u043A\u0442\u0438\u0432\u043D\u043E\u0441\u0442\u044C \u0440\u0430\u0431\u043E\u0442\u044B \u043A\u043E\u043C\u0430\u043D\u0434\u044B \u043D\u0430 \u0432\u0441\u0435\u0445 \u0443\u0440\u043E\u0432\u043D\u044F\u0445 \u043F\u043E \u0432\u0441\u0435\u043C \u0437\u0430\u0434\u0430\u0447\u0430\u043C \u0438 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrap[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  flex-wrap: wrap;\n  padding: 40px 0;\n  background: #FFFFFF;\n  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  margin: 30px 0;\n}\n\nh1[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 40px;\n  text-align: center;\n  margin-bottom: 40px;\n}\n\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid #6892FF;\n  box-sizing: border-box;\n  border-radius: 20px;\n  padding: 20px 30px;\n  max-height: 200px;\n  max-width: 550px;\n  margin: 30px 30px;\n}\n\n.card-row[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 20px;\n}\n\n.card-text[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 16px;\n}\n\n.card-img[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  width: 120px;\n  height: 120px;\n  margin: 10px 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUNBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFERTtFQUNFLGFBQUE7QUFHSjs7QUFERTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFERTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFHSjs7QUFERTtFQUNFLG9CQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxpQkFBQTtBQUdKIiwiZmlsZSI6ImhvbWUtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgcGFkZGluZzogNDBweCAwO1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDRweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW46IDMwcHggMDtcclxufVxyXG5oMSB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgIzY4OTJGRjtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIG1heC1oZWlnaHQ6IDIwMHB4O1xyXG4gIG1heC13aWR0aDogNTUwcHg7XHJcbiAgbWFyZ2luOiAzMHB4IDMwcHg7XHJcbiAgJi1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICB9XHJcbiAgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gIH1cclxuICAmLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG4gICYtaW1nIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgd2lkdGg6IDEyMHB4O1xyXG4gICAgaGVpZ2h0OiAxMjBweDtcclxuICAgIG1hcmdpbjogMTBweCAxMHB4O1xyXG4gIH1cclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomePageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home-page',
                templateUrl: './home-page.component.html',
                styleUrls: ['./home-page.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Gp1u":
/*!**************************************************!*\
  !*** ./src/app/shared/pipes/searchTasks.pipe.ts ***!
  \**************************************************/
/*! exports provided: SearchTasksPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchTasksPipe", function() { return SearchTasksPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchTasksPipe {
    transform(tasks, search = '') {
        if (!search.trim()) {
            return tasks;
        }
        return tasks.filter(tasks => {
            return tasks.name.toLowerCase().includes(search.toLowerCase());
        });
    }
}
SearchTasksPipe.ɵfac = function SearchTasksPipe_Factory(t) { return new (t || SearchTasksPipe)(); };
SearchTasksPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchTasks", type: SearchTasksPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchTasksPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'searchTasks'
            }]
    }], null, null); })();


/***/ }),

/***/ "IYfF":
/*!*************************************************!*\
  !*** ./src/app/shared/services/auth.service.ts ***!
  \*************************************************/
/*! exports provided: ACCESS_TOKEN_KEY, AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ACCESS_TOKEN_KEY", function() { return ACCESS_TOKEN_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _app_injection_tokens__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../app-injection-tokens */ "cT/4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









const ACCESS_TOKEN_KEY = 'projectmanagement_access_token';
class AuthService {
    constructor(http, apiUrl, jwtHelper, router) {
        this.http = http;
        this.apiUrl = apiUrl;
        this.jwtHelper = jwtHelper;
        this.router = router;
    }
    register(account) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].authApi}api/auth/create`, account)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])((error) => Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(error)));
    }
    login(email, password) {
        return this.http.post(`${this.apiUrl}api/auth/login`, {
            email, password
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(token => {
            localStorage.setItem(ACCESS_TOKEN_KEY, token.access_token);
        }));
    }
    isAuthenticated() {
        var token = localStorage.getItem(ACCESS_TOKEN_KEY);
        return token && !this.jwtHelper.isTokenExpired(token);
    }
    logout() {
        localStorage.removeItem(ACCESS_TOKEN_KEY);
        this.router.navigate(['']);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_injection_tokens__WEBPACK_IMPORTED_MODULE_4__["AUTH_API_URL"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_app_injection_tokens__WEBPACK_IMPORTED_MODULE_4__["AUTH_API_URL"]]
            }] }, { type: _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_6__["JwtHelperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }]; }, null); })();


/***/ }),

/***/ "KK3z":
/*!***********************************************************!*\
  !*** ./src/app/shared/validators/confirmed.validators.ts ***!
  \***********************************************************/
/*! exports provided: ConfirmedValidators */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmedValidators", function() { return ConfirmedValidators; });
class ConfirmedValidators {
    constructor() {
    }
    static MustMatch(controlName, matchingControlName) {
        return (formGroup) => {
            const control = formGroup.controls[controlName];
            const matchingControl = formGroup.controls[matchingControlName];
            if (matchingControl.errors && !matchingControl.errors.mustMatch) {
                return;
            }
            if (control.value !== matchingControl.value) {
                matchingControl.setErrors({ mustMatch: true });
            }
            else {
                matchingControl.setErrors(null);
            }
        };
    }
}


/***/ }),

/***/ "OlFX":
/*!****************************************************!*\
  !*** ./src/app/tasks-page/tasks-page.component.ts ***!
  \****************************************************/
/*! exports provided: TasksPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksPageComponent", function() { return TasksPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/task.service */ "ev4g");
/* harmony import */ var _shared_services_datasearch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/datasearch.service */ "10g0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pipes */ "aEDk");
/* harmony import */ var _shared_pipes_searchProjectTasks_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/pipes/searchProjectTasks.pipe */ "VyhZ");









const _c0 = function (a0, a1) { return { important: a0, "never-mind": a1 }; };
const _c1 = function (a2) { return ["/user", "task", a2]; };
const _c2 = function (a0, a1, a2) { return { pending: a0, process: a1, done: a2 }; };
function TasksPageComponent_div_4_div_1_tr_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const currenttask_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](17, _c0, currenttask_r5.priority === "\u0412\u0430\u0436\u043D\u043E", currenttask_r5.priority === "\u041D\u0435\u0432\u0430\u0436\u043D\u043E"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](20, _c1, currenttask_r5.taskId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currenttask_r5.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](5, 7, currenttask_r5.start_date, "d MMM , y, HH:mm:ss", null, "ru"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](8, 12, currenttask_r5.end_date, "d MMM , y, HH:mm:ss", null, "ru"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](22, _c2, currenttask_r5.status === "\u0412 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0438", currenttask_r5.status === "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435", currenttask_r5.status === "\u0413\u043E\u0442\u043E\u0432\u043E"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](currenttask_r5.status);
} }
function TasksPageComponent_div_4_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-expansion-panel", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-expansion-panel-header");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-panel-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0430\u0431\u043E\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u041A\u043E\u043D\u0435\u0446 \u0440\u0430\u0431\u043E\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0421\u0442\u0430\u0442\u0443\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, TasksPageComponent_div_4_div_1_tr_19_Template, 11, 26, "tr", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("expanded", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r3[0]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", task_r3[1]);
} }
function TasksPageComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TasksPageComponent_div_4_div_1_Template, 20, 3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "pairs");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "groupBy");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "SearchProjectTasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tasks_r1 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 6, tasks_r1, ctx_r0.searchStr), "project")));
} }
class TasksPageComponent {
    constructor(taskService, dataSearchService) {
        this.taskService = taskService;
        this.dataSearchService = dataSearchService;
        this.searchStr = '';
    }
    ngOnInit() {
        this.tasks$ = this.taskService.getTasksByUser();
        this.dataSearchService.searchStr.subscribe(str => {
            this.searchStr = str;
        });
    }
}
TasksPageComponent.ɵfac = function TasksPageComponent_Factory(t) { return new (t || TasksPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_datasearch_service__WEBPACK_IMPORTED_MODULE_2__["DatasearchService"])); };
TasksPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TasksPageComponent, selectors: [["app-tasks-page"]], decls: 6, vars: 3, consts: [[1, "mycontainer"], [1, "wrap"], [4, "ngIf"], ["class", "project", 4, "ngFor", "ngForOf"], [1, "project"], [1, "accord", 3, "expanded"], [1, "project-title"], [1, "table-responsive"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "task-name", 3, "ngClass", "routerLink"], [3, "ngClass"]], template: function TasksPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041C\u043E\u0438 \u0437\u0430\u0434\u0430\u0447\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TasksPageComponent_div_4_Template, 5, 9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 1, ctx.tasks$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_4__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["AsyncPipe"], ngx_pipes__WEBPACK_IMPORTED_MODULE_6__["PairsPipe"], ngx_pipes__WEBPACK_IMPORTED_MODULE_6__["GroupByPipe"], _shared_pipes_searchProjectTasks_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchProjectTasksPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"]], styles: [".wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #FFFFFF;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 20px;\n  margin: 0 10px;\n}\n\n.project-title[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 76vw;\n  border-collapse: collapse;\n}\n\ntbody[_ngcontent-%COMP%] {\n  width: 76vw;\n}\n\nthead[_ngcontent-%COMP%] {\n  width: 76vw;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 76vw;\n  margin-top: 40px;\n}\n\nth[_ngcontent-%COMP%] {\n  width: 76vw;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  padding: 20px;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-top: none;\n}\n\nth[_ngcontent-%COMP%]:first-child {\n  border-left: none;\n  border-top: none;\n}\n\nth[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\ntr[_ngcontent-%COMP%] {\n  width: 76vw;\n  word-break: break-all;\n}\n\ntd[_ngcontent-%COMP%] {\n  word-break: break-all;\n  padding: 15px;\n  border: 2px solid rgba(0, 0, 0, 0.32);\n  border-bottom: none;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid rgba(0, 0, 0, 0);\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  .table-responsive-sm[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .table-responsive-md[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  .table-responsive-md[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  .table-responsive-lg[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  .table-responsive-xl[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n  border: 0;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border-top: 2px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.table-bordered[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 2px;\n}\n\n.important[_ngcontent-%COMP%] {\n  border-left: 6px solid red !important;\n}\n\n.never-mind[_ngcontent-%COMP%] {\n  border-left: 6px solid var(--button-color) !important;\n}\n\n.pending[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: rgba(74, 91, 244, 0.6);\n}\n\n.process[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: rgba(255, 0, 0, 0.6);\n}\n\n.done[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: rgba(0, 255, 100, 0.5);\n}\n\n.task-name[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: var(--button-color);\n}\n\n.accord[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhc2tzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsMENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQUNGOztBQUdFO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQUFKOztBQUlBO0VBQ0ksK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBQURKOztBQUlBO0VBQ0UsV0FBQTtFQUNBLHlCQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0FBREY7O0FBSUE7RUFDRSxXQUFBO0VBQ0EsZ0JBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFRQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG9DQUFBO0VBQ0EsZ0JBQUE7QUFSRjs7QUFMRTtFQUNFLGlCQUFBO0VBQ0EsZ0JBQUE7QUFPSjs7QUFMRTtFQUNFLGtCQUFBO0FBT0o7O0FBSUE7RUFDRSxXQUFBO0VBQ0EscUJBQUE7QUFERjs7QUFJQTtFQUNFLHFCQUFBO0VBQ0EsYUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREY7O0FBRUU7RUFDRSx1Q0FBQTtBQUFKOztBQUVFO0VBQ0Usa0JBQUE7QUFBSjs7QUFJQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGlDQUFBO0lBQ0EsNENBQUE7RUFERjs7RUFHQTtJQUNFLFNBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUNBQUE7SUFDQSw0Q0FBQTtFQURGOztFQUdBO0lBQ0UsU0FBQTtFQUFGO0FBQ0Y7O0FBR0E7RUFDRTtJQUNFLGNBQUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQ0FBQTtJQUNBLDRDQUFBO0VBREY7O0VBR0E7SUFDRSxTQUFBO0VBQUY7QUFDRjs7QUFHQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGlDQUFBO0lBQ0EsNENBQUE7RUFERjs7RUFHQTtJQUNFLFNBQUE7RUFBRjtBQUNGOztBQUdBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGlDQUFBO0VBQ0EsNENBQUE7QUFERjs7QUFJQTtFQUNFLFNBQUE7QUFERjs7QUFJQTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBOztFQUVFLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSw2QkFBQTtBQURGOztBQUlBO0VBQ0Usc0JBQUE7RUFDQSxnQ0FBQTtBQURGOztBQUlBO0VBQ0UsNkJBQUE7QUFERjs7QUFJQTtFQUNFLHNCQUFBO0FBREY7O0FBSUE7RUFDRSx5QkFBQTtBQURGOztBQUlBOztFQUVFLHlCQUFBO0FBREY7O0FBSUE7O0VBRUUsd0JBQUE7QUFERjs7QUFJQTtFQUNFLHFDQUFBO0FBREY7O0FBSUE7RUFDRSxxREFBQTtBQURGOztBQUlBO0VBQ0UsY0FBQTtFQUNBLHdDQUFBO0FBREY7O0FBSUE7RUFDRSxjQUFBO0VBQ0Esc0NBQUE7QUFERjs7QUFJQTtFQUNFLGNBQUE7RUFDQSx3Q0FBQTtBQURGOztBQUtFO0VBQ0UsZUFBQTtFQUNBLHFDQUFBO0FBRko7O0FBTUE7RUFDRSxtQkFBQTtBQUhGIiwiZmlsZSI6InRhc2tzLXBhZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIud3JhcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweCAyMHB4O1xyXG4gIG1hcmdpbjogMCAxMHB4O1xyXG59XHJcblxyXG4ucHJvamVjdCB7XHJcbiAgJi10aXRsZSB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbn1cclxuXHJcbmgyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAyNHB4O1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDc2dnc7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudGJvZHkge1xyXG4gIHdpZHRoOiA3NnZ3O1xyXG59XHJcblxyXG50aGVhZCB7XHJcbiAgd2lkdGg6IDc2dnc7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDc2dnc7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxudGgge1xyXG4gIHdpZHRoOiA3NnZ3O1xyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gIH1cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMCk7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxudHIge1xyXG4gIHdpZHRoOiA3NnZ3O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxudGQge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zMik7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICB9XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA1NzUuOThweCkge1xyXG4gIC50YWJsZS1yZXNwb25zaXZlLXNtIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbiAgfVxyXG4gIC50YWJsZS1yZXNwb25zaXZlLXNtID4gLnRhYmxlLWJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjcuOThweCkge1xyXG4gIC50YWJsZS1yZXNwb25zaXZlLW1kIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbiAgfVxyXG4gIC50YWJsZS1yZXNwb25zaXZlLW1kID4gLnRhYmxlLWJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTEuOThweCkge1xyXG4gIC50YWJsZS1yZXNwb25zaXZlLWxnIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbiAgfVxyXG4gIC50YWJsZS1yZXNwb25zaXZlLWxnID4gLnRhYmxlLWJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTk5Ljk4cHgpIHtcclxuICAudGFibGUtcmVzcG9uc2l2ZS14bCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3cteDogYXV0bztcclxuICAgIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAgIC1tcy1vdmVyZmxvdy1zdHlsZTogLW1zLWF1dG9oaWRpbmctc2Nyb2xsYmFyO1xyXG4gIH1cclxuICAudGFibGUtcmVzcG9uc2l2ZS14bCA+IC50YWJsZS1ib3JkZXJlZCB7XHJcbiAgICBib3JkZXI6IDA7XHJcbiAgfVxyXG59XHJcblxyXG4udGFibGUtcmVzcG9uc2l2ZSB7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3cteDogYXV0bztcclxuICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlID4gLnRhYmxlLWJvcmRlcmVkIHtcclxuICBib3JkZXI6IDA7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDFyZW07XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbn1cclxuXHJcbi50YWJsZSB0aCxcclxuLnRhYmxlIHRkIHtcclxuICBwYWRkaW5nOiAwLjc1cmVtO1xyXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XHJcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZSB0aGVhZCB0aCB7XHJcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlIHRib2R5ICsgdGJvZHkge1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4udGFibGUgLnRhYmxlIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGFibGUtYm9yZGVyZWQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZCB0aCxcclxuLnRhYmxlLWJvcmRlcmVkIHRkIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4udGFibGUtYm9yZGVyZWQgdGhlYWQgdGgsXHJcbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0ZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMnB4O1xyXG59XHJcblxyXG4uaW1wb3J0YW50IHtcclxuICBib3JkZXItbGVmdDogNnB4IHNvbGlkIHJlZCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmV2ZXItbWluZCB7XHJcbiAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCB2YXIoLS1idXR0b24tY29sb3IpICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wZW5kaW5nIHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDc0LCA5MSwgMjQ0LCAwLjYpO1xyXG59XHJcblxyXG4ucHJvY2VzcyB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDAsIDAsIDAuNik7XHJcbn1cclxuXHJcbi5kb25lIHtcclxuICBjb2xvcjogI0ZGRkZGRjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDI1NSwgMTAwLCAwLjUpO1xyXG59XHJcblxyXG4udGFzay1uYW1lIHtcclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgfVxyXG59XHJcblxyXG4uYWNjb3JkIHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TasksPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-tasks-page',
                templateUrl: './tasks-page.component.html',
                styleUrls: ['./tasks-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"] }, { type: _shared_services_datasearch_service__WEBPACK_IMPORTED_MODULE_2__["DatasearchService"] }]; }, null); })();


/***/ }),

/***/ "P1m1":
/*!**********************************************************!*\
  !*** ./src/app/gant-projects/gant-projects.component.ts ***!
  \**********************************************************/
/*! exports provided: GantProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GantProjectsComponent", function() { return GantProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/project.service */ "zSYW");
/* harmony import */ var _shared_services_datasearch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/datasearch.service */ "10g0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_searchProjects_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/pipes/searchProjects.pipe */ "XkuR");







function GantProjectsComponent_div_0_div_1_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const avatar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", avatar_r8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function GantProjectsComponent_div_0_div_1_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GantProjectsComponent_div_0_div_1_div_10_div_1_Template, 2, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r9 < 2);
} }
function GantProjectsComponent_div_0_div_1_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", project_r5.users_avatar.length - 2, "");
} }
const _c0 = function (a0, a1, a2) { return { manager: a0, director: a1, user: a2 }; };
function GantProjectsComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, GantProjectsComponent_div_0_div_1_div_10_Template, 2, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, GantProjectsComponent_div_0_div_1_div_11_Template, 3, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("routerLink", project_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](7, _c0, project_r5.role === "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440", project_r5.role === "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440", project_r5.role === "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r5.users_avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r5.users_avatar.length > 3);
} }
function GantProjectsComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GantProjectsComponent_div_0_div_1_Template, 12, 11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "searchProjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const projects_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, projects_r3, ctx_r0.searchStr));
} }
function GantProjectsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
} }
class GantProjectsComponent {
    constructor(projectService, dataSearchService, router) {
        this.projectService = projectService;
        this.dataSearchService = dataSearchService;
        this.router = router;
        this.searchStr = '';
    }
    ngOnInit() {
        this.minProject$ = this.projectService.getProjects();
        this.dataSearchService.searchStr.subscribe(str => {
            this.searchStr = str;
        });
    }
}
GantProjectsComponent.ɵfac = function GantProjectsComponent_Factory(t) { return new (t || GantProjectsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_datasearch_service__WEBPACK_IMPORTED_MODULE_2__["DatasearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
GantProjectsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GantProjectsComponent, selectors: [["app-gant-projects"]], decls: 4, vars: 4, consts: [["class", "mycontainer", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "mycontainer"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], [1, "card-text"], [1, "wrap"], [1, "card-role", 3, "ngClass"], [1, "card-role_text"], [1, "user-list"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["alt", "", 1, "user-avatar", 3, "src"], [1, "avatar-text"]], template: function GantProjectsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, GantProjectsComponent_div_0_Template, 3, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, GantProjectsComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.minProject$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _shared_pipes_searchProjects_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchProjectsPipe"]], styles: [".card[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow: hidden;\n  width: 19vw;\n  background: #FFFFFF;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 20px;\n  display: inline-block;\n  margin: 10px 12px;\n  transition: all 0.2s ease-in-out;\n}\n.card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: translate(-5px, -5px);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 20px;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-role[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 10px;\n  margin-right: 30px;\n}\n.card-role_text[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.card-newproject[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 10px 12px;\n  transition: all 0.2s ease-in-out;\n  width: 19vw;\n  height: 300px;\n}\n.card-newproject[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: translate(-5px, -5px);\n}\n.card-newproject-img[_ngcontent-%COMP%] {\n  max-width: 90px;\n  max-height: 90px;\n  margin-bottom: 10px;\n  opacity: 0.4;\n}\n.card-newproject[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n.manager[_ngcontent-%COMP%] {\n  background: rgba(13, 222, 34, 0.16);\n  color: #0DDE22;\n}\n.user[_ngcontent-%COMP%] {\n  background: rgba(244, 74, 74, 0.16);\n  color: #F44A4A;\n}\n.user-list[_ngcontent-%COMP%] {\n  display: flex;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 3px solid #FFFFFF;\n  border-radius: 50%;\n}\n.wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.avatar-text[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  border: 3px solid #FFFFFF;\n  background-color: red;\n  opacity: 0.6;\n  color: #FFFFFF;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.director[_ngcontent-%COMP%] {\n  background: rgba(74, 91, 244, 0.16);\n  color: #4A5BF4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGdhbnQtcHJvamVjdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FBQ0o7QUFFRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQURKO0FBSUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUdJO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRE47QUFNRTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUpKO0FBTUk7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7QUFKTjtBQU9JO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBTE47QUFRSTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFOTjtBQVlBO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0FBVEY7QUFZQTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtBQVRGO0FBV0U7RUFDRSxhQUFBO0FBVEo7QUFhRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVhKO0FBY0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFYRjtBQWNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFYRjtBQWNBO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0FBWEYiLCJmaWxlIjoiZ2FudC1wcm9qZWN0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDE5dnc7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3gtc2hhZG93OiAwIDRweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMTBweCAxMnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC01cHgpO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAmLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuXHJcbiAgJi1yb2xlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgJl90ZXh0IHtcclxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1uZXdwcm9qZWN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAxMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB3aWR0aDogMTl2dztcclxuICAgIGhlaWdodDogMzAwcHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTVweCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDkwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5tYW5hZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCAyMjIsIDM0LCAwLjE2KTtcclxuICBjb2xvcjogIzBEREUyMjtcclxufVxyXG5cclxuLnVzZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCA3NCwgNzQsIDAuMTYpO1xyXG4gIGNvbG9yOiAjRjQ0QTRBO1xyXG5cclxuICAmLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgfVxyXG5cclxuICAmLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcbi53cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdmF0YXItdGV4dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRpcmVjdG9yIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCA5MSwgMjQ0LCAwLjE2KTtcclxuICBjb2xvcjogIzRBNUJGNDtcclxufVxyXG5cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GantProjectsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-gant-projects',
                templateUrl: './gant-projects.component.html',
                styleUrls: ['./gant-projects.component.scss']
            }]
    }], function () { return [{ type: _shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }, { type: _shared_services_datasearch_service__WEBPACK_IMPORTED_MODULE_2__["DatasearchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "QWAX":
/*!**********************************************************************!*\
  !*** ./src/app/create-project-page/create-project-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: CreateProjectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateProjectPageComponent", function() { return CreateProjectPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/project.service */ "zSYW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");







function CreateProjectPageComponent_form_2_div_7_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProjectPageComponent_form_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateProjectPageComponent_form_2_div_7_small_1_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.form.get("name").errors.required);
} }
function CreateProjectPageComponent_form_2_div_13_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateProjectPageComponent_form_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateProjectPageComponent_form_2_div_13_small_1_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.form.get("description").errors.required);
} }
const _c0 = function (a0) { return { invalid: a0 }; };
function CreateProjectPageComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateProjectPageComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.createProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateProjectPageComponent_form_2_div_7_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043A\u0440\u0430\u0442\u043A\u043E\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateProjectPageComponent_form_2_div_13_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r0.form.get("name").touched && ctx_r0.form.get("name").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("name").touched && ctx_r0.form.get("name").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx_r0.form.get("description").touched && ctx_r0.form.get("description").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.form.get("description").touched && ctx_r0.form.get("description").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx_r0.form.invalid || ctx_r0.submitted))("disabled", ctx_r0.form.invalid || ctx_r0.submitted);
} }
const _c1 = function () { return ["/user", "projects"]; };
function CreateProjectPageComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u041F\u0440\u043E\u0435\u043A\u0442 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
class CreateProjectPageComponent {
    constructor(projectService) {
        this.projectService = projectService;
        this.submitted = false;
        this.created = false;
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    createProject() {
        this.submitted = true;
        if (this.form.invalid) {
            return;
        }
        const project = {
            name: this.form.value.name,
            description: this.form.value.description,
            created_at: new Date()
        };
        this.projectService.createProject(project).subscribe(res => {
            this.submitted = false;
            this.form.reset();
            this.created = true;
        });
    }
}
CreateProjectPageComponent.ɵfac = function CreateProjectPageComponent_Factory(t) { return new (t || CreateProjectPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"])); };
CreateProjectPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateProjectPageComponent, selectors: [["app-create-project-page"]], decls: 5, vars: 2, consts: [[1, "mycontainer"], [1, "form-wrap"], ["class", "form", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], ["projectcreated", ""], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-control", 3, "ngClass"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-input"], ["class", "validation", 4, "ngIf"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", 1, "form-textarea"], [1, "form-button-wrap"], ["type", "submit", 1, "form-button", 3, "ngClass", "disabled"], [1, "validation"], [4, "ngIf"], [1, "created"], ["src", "assets/img/icons/success.svg", "alt", ""], [3, "routerLink"]], template: function CreateProjectPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateProjectPageComponent_form_2_Template, 17, 13, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateProjectPageComponent_ng_template_3_Template, 6, 2, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.created)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".form-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  width: 500px;\n  min-height: 300px;\n  padding: 20px 30px;\n}\n\n.form-control.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form-control.invalid[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: block;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid var(--button-color);\n  box-sizing: border-box;\n  border-radius: 25px;\n  height: 40px;\n  width: 100%;\n  font-size: 16px;\n  padding: 0 10px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form-textarea[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid var(--button-color);\n  box-sizing: border-box;\n  border-radius: 25px;\n  height: 200px;\n  width: 100%;\n  font-size: 16px;\n  padding: 10px 10px;\n  resize: none;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form-button[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 38px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.form-button-wrap[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n\n.form-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.form-button.invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: default;\n}\n\n.validation[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.created[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #FFFFFF;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 30px;\n}\n\n.created[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n}\n\n.created[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  margin: 10px 0;\n}\n\n.created[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 5px 20px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.created[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZS1wcm9qZWN0LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQVdFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBUkY7O0FBUE07RUFDRSxpQkFBQTtBQVNSOztBQVBNO0VBQ0UsaUJBQUE7QUFTUjs7QUFHRTtFQUNFLGtCQUFBO0FBREo7O0FBR0U7RUFDRSxnQkFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBREo7O0FBR0U7RUFDRSxjQUFBO0VBQ0EscUNBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUVJO0VBQ0UsYUFBQTtBQUFOOztBQUdFO0VBQ0UsY0FBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQURKOztBQUVJO0VBQ0UsYUFBQTtBQUFOOztBQUdFO0VBTUUsWUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBTko7O0FBUkk7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBVU47O0FBRUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUFOOztBQUVJO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFBTjs7QUFJQTtFQUNFLFVBQUE7QUFERjs7QUFHQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUFGOztBQUNFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFDSjs7QUFDRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0o7O0FBQ0U7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUFJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFFTiIsImZpbGUiOiJjcmVhdGUtcHJvamVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZvcm0td3JhcCB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4uZm9ybSB7XHJcbiAgJi1jb250cm9sIHtcclxuICAgICYuaW52YWxpZCB7XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgICB0ZXh0YXJlYSB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgJi1sYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgJi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgJi10ZXh0YXJlYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gICYtYnV0dG9uIHtcclxuICAgICYtd3JhcCB7XHJcbiAgICAgIHBhZGRpbmc6IDIwcHggMDtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDM4cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgJi5pbnZhbGlkIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4udmFsaWRhdGlvbiB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4uY3JlYXRlZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateProjectPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-project-page',
                templateUrl: './create-project-page.component.html',
                styleUrls: ['./create-project-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_project_service__WEBPACK_IMPORTED_MODULE_2__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 1, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "TZ0A":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/dataupdate.service.ts ***!
  \*******************************************************/
/*! exports provided: DataupdateService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataupdateService", function() { return DataupdateService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class DataupdateService {
    constructor() {
        this.updateUserLayout = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
    }
}
DataupdateService.ɵfac = function DataupdateService_Factory(t) { return new (t || DataupdateService)(); };
DataupdateService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataupdateService, factory: DataupdateService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataupdateService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "VyhZ":
/*!*********************************************************!*\
  !*** ./src/app/shared/pipes/searchProjectTasks.pipe.ts ***!
  \*********************************************************/
/*! exports provided: SearchProjectTasksPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProjectTasksPipe", function() { return SearchProjectTasksPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchProjectTasksPipe {
    transform(tasks, search = '') {
        if (!search.trim()) {
            return tasks;
        }
        return tasks.filter(tasks => {
            return tasks.project.toLowerCase().includes(search.toLowerCase());
        });
    }
}
SearchProjectTasksPipe.ɵfac = function SearchProjectTasksPipe_Factory(t) { return new (t || SearchProjectTasksPipe)(); };
SearchProjectTasksPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "SearchProjectTasks", type: SearchProjectTasksPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchProjectTasksPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'SearchProjectTasks'
            }]
    }], null, null); })();


/***/ }),

/***/ "XkuR":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/searchProjects.pipe.ts ***!
  \*****************************************************/
/*! exports provided: SearchProjectsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProjectsPipe", function() { return SearchProjectsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SearchProjectsPipe {
    transform(projects, search = '') {
        if (!search.trim()) {
            return projects;
        }
        return projects.filter(projects => {
            return projects.title.toLowerCase().includes(search.toLowerCase());
        });
    }
}
SearchProjectsPipe.ɵfac = function SearchProjectsPipe_Factory(t) { return new (t || SearchProjectsPipe)(); };
SearchProjectsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "searchProjects", type: SearchProjectsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchProjectsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'searchProjects'
            }]
    }], null, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: tokenGetter, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenGetter", function() { return tokenGetter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/main-layout/main-layout.component */ "0h24");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_injection_tokens__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-injection-tokens */ "cT/4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../environments/environment */ "AytR");
/* harmony import */ var _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @auth0/angular-jwt */ "Nm8O");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/auth.service */ "IYfF");
/* harmony import */ var _shared_components_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/components/user-layout/user-layout.component */ "r4JW");
/* harmony import */ var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./projects-page/projects-page.component */ "nDjA");
/* harmony import */ var _shared_pipes_searchProjects_pipe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./shared/pipes/searchProjects.pipe */ "XkuR");
/* harmony import */ var _shared_pipes_searchTasks_pipe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/pipes/searchTasks.pipe */ "Gp1u");
/* harmony import */ var _create_project_page_create_project_page_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./create-project-page/create-project-page.component */ "QWAX");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _project_page_project_page_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./project-page/project-page.component */ "hHkm");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/common/locales/ru */ "wq8c");
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angularx-flatpickr */ "UBqL");
/* harmony import */ var _create_task_page_create_task_page_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./create-task-page/create-task-page.component */ "z8I2");
/* harmony import */ var _task_page_task_page_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./task-page/task-page.component */ "usR5");
/* harmony import */ var _tasks_page_tasks_page_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./tasks-page/tasks-page.component */ "OlFX");
/* harmony import */ var ngx_pipes__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-pipes */ "aEDk");
/* harmony import */ var _shared_pipes_searchProjectTasks_pipe__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./shared/pipes/searchProjectTasks.pipe */ "VyhZ");
/* harmony import */ var _account_page_account_page_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./account-page/account-page.component */ "rXff");
/* harmony import */ var alife_file_to_base64__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! alife-file-to-base64 */ "3IV0");
/* harmony import */ var _update_account_page_update_account_page_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./update-account-page/update-account-page.component */ "qQvj");
/* harmony import */ var _gant_chart_gant_chart_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./gant-chart/gant-chart.component */ "bC53");
/* harmony import */ var _gant_projects_gant_projects_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./gant-projects/gant-projects.component */ "P1m1");
/* harmony import */ var _optimization_page_optimization_page_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./optimization-page/optimization-page.component */ "16xu");





































function tokenGetter() {
    return localStorage.getItem(_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_12__["ACCESS_TOKEN_KEY"]);
}
Object(_angular_common__WEBPACK_IMPORTED_MODULE_20__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_21___default.a, 'ru');
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [{
            provide: _app_injection_tokens__WEBPACK_IMPORTED_MODULE_9__["AUTH_API_URL"],
            useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].authApi
        },
        {
            provide: _app_injection_tokens__WEBPACK_IMPORTED_MODULE_9__["RESOURCE_API_URL"],
            useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].projectManagementApi
        }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"].forRoot({
                config: {
                    tokenGetter,
                    allowedDomains: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].tokenWhiteListedDomains
                }
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            angularx_flatpickr__WEBPACK_IMPORTED_MODULE_22__["FlatpickrModule"].forRoot(),
            ngx_pipes__WEBPACK_IMPORTED_MODULE_26__["NgPipesModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
            alife_file_to_base64__WEBPACK_IMPORTED_MODULE_29__["AlifeFileToBase64Module"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__["MainLayoutComponent"],
        _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
        _shared_components_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_13__["UserLayoutComponent"],
        _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsPageComponent"],
        _shared_pipes_searchProjects_pipe__WEBPACK_IMPORTED_MODULE_15__["SearchProjectsPipe"],
        _create_project_page_create_project_page_component__WEBPACK_IMPORTED_MODULE_17__["CreateProjectPageComponent"],
        _project_page_project_page_component__WEBPACK_IMPORTED_MODULE_19__["ProjectPageComponent"],
        _create_task_page_create_task_page_component__WEBPACK_IMPORTED_MODULE_23__["CreateTaskPageComponent"],
        _task_page_task_page_component__WEBPACK_IMPORTED_MODULE_24__["TaskPageComponent"],
        _shared_pipes_searchTasks_pipe__WEBPACK_IMPORTED_MODULE_16__["SearchTasksPipe"],
        _tasks_page_tasks_page_component__WEBPACK_IMPORTED_MODULE_25__["TasksPageComponent"],
        _shared_pipes_searchProjectTasks_pipe__WEBPACK_IMPORTED_MODULE_27__["SearchProjectTasksPipe"],
        _account_page_account_page_component__WEBPACK_IMPORTED_MODULE_28__["AccountPageComponent"],
        _update_account_page_update_account_page_component__WEBPACK_IMPORTED_MODULE_30__["UpdateAccountPageComponent"],
        _gant_chart_gant_chart_component__WEBPACK_IMPORTED_MODULE_31__["GantChartComponent"],
        _gant_projects_gant_projects_component__WEBPACK_IMPORTED_MODULE_32__["GantProjectsComponent"],
        _optimization_page_optimization_page_component__WEBPACK_IMPORTED_MODULE_33__["OptimizationPageComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_22__["FlatpickrModule"], ngx_pipes__WEBPACK_IMPORTED_MODULE_26__["NgPipesModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
        alife_file_to_base64__WEBPACK_IMPORTED_MODULE_29__["AlifeFileToBase64Module"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_4__["MainLayoutComponent"],
                    _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_5__["HomePageComponent"],
                    _shared_components_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_13__["UserLayoutComponent"],
                    _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_14__["ProjectsPageComponent"],
                    _shared_pipes_searchProjects_pipe__WEBPACK_IMPORTED_MODULE_15__["SearchProjectsPipe"],
                    _create_project_page_create_project_page_component__WEBPACK_IMPORTED_MODULE_17__["CreateProjectPageComponent"],
                    _project_page_project_page_component__WEBPACK_IMPORTED_MODULE_19__["ProjectPageComponent"],
                    _create_task_page_create_task_page_component__WEBPACK_IMPORTED_MODULE_23__["CreateTaskPageComponent"],
                    _task_page_task_page_component__WEBPACK_IMPORTED_MODULE_24__["TaskPageComponent"],
                    _shared_pipes_searchTasks_pipe__WEBPACK_IMPORTED_MODULE_16__["SearchTasksPipe"],
                    _tasks_page_tasks_page_component__WEBPACK_IMPORTED_MODULE_25__["TasksPageComponent"],
                    _shared_pipes_searchProjectTasks_pipe__WEBPACK_IMPORTED_MODULE_27__["SearchProjectTasksPipe"],
                    _account_page_account_page_component__WEBPACK_IMPORTED_MODULE_28__["AccountPageComponent"],
                    _update_account_page_update_account_page_component__WEBPACK_IMPORTED_MODULE_30__["UpdateAccountPageComponent"],
                    _gant_chart_gant_chart_component__WEBPACK_IMPORTED_MODULE_31__["GantChartComponent"],
                    _gant_projects_gant_projects_component__WEBPACK_IMPORTED_MODULE_32__["GantProjectsComponent"],
                    _optimization_page_optimization_page_component__WEBPACK_IMPORTED_MODULE_33__["OptimizationPageComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _auth0_angular_jwt__WEBPACK_IMPORTED_MODULE_11__["JwtModule"].forRoot({
                        config: {
                            tokenGetter,
                            allowedDomains: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].tokenWhiteListedDomains
                        }
                    }),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                    angularx_flatpickr__WEBPACK_IMPORTED_MODULE_22__["FlatpickrModule"].forRoot(),
                    ngx_pipes__WEBPACK_IMPORTED_MODULE_26__["NgPipesModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_7__["MatExpansionModule"],
                    alife_file_to_base64__WEBPACK_IMPORTED_MODULE_29__["AlifeFileToBase64Module"]
                ],
                providers: [{
                        provide: _app_injection_tokens__WEBPACK_IMPORTED_MODULE_9__["AUTH_API_URL"],
                        useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].authApi
                    },
                    {
                        provide: _app_injection_tokens__WEBPACK_IMPORTED_MODULE_9__["RESOURCE_API_URL"],
                        useValue: _environments_environment__WEBPACK_IMPORTED_MODULE_10__["environment"].projectManagementApi
                    }],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bC53":
/*!****************************************************!*\
  !*** ./src/app/gant-chart/gant-chart.component.ts ***!
  \****************************************************/
/*! exports provided: GantChartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GantChartComponent", function() { return GantChartComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! dhtmlx-gantt */ "a/tU");
/* harmony import */ var dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _shared_services_gant_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/gant.task.service */ "487a");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");







const _c0 = ["ganttHere"];
class GantChartComponent {
    constructor(taskService, route) {
        this.taskService = taskService;
        this.route = route;
    }
    ngOnInit() {
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.readonly = true;
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.select_task = false;
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.xml_date = "%Y-%m-%d %H:%i";
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.grid_width = 400;
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].i18n.setLocale("ru");
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].config.columns = [
            { name: "text", label: "Задача", align: "center", width: 200 },
            { name: "start_date", label: "Начало", align: "center", width: 100 },
            { name: "end_date", label: "Конец", align: "center", width: 100 }
        ];
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].init(this.ganttContainer.nativeElement);
        Promise.all([this.taskService.get(this.route.snapshot.params['id'])])
            .then(([data]) => {
            dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].parse({ data });
        });
    }
    ngOnDestroy() {
        dhtmlx_gantt__WEBPACK_IMPORTED_MODULE_1__["gantt"].clearAll();
    }
}
GantChartComponent.ɵfac = function GantChartComponent_Factory(t) { return new (t || GantChartComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_gant_task_service__WEBPACK_IMPORTED_MODULE_2__["GantTaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
GantChartComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GantChartComponent, selectors: [["app-gant-chart"]], viewQuery: function GantChartComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.ganttContainer = _t.first);
    } }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_shared_services_gant_task_service__WEBPACK_IMPORTED_MODULE_2__["GantTaskService"]])], decls: 4, vars: 0, consts: [[1, "mycontainer"], [1, "gant-wrap"], [1, "gantt-chart"], ["ganttHere", ""]], template: function GantChartComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".gridHoverStyle,.gridSelection,.timelineSelection{background-color:#fff3a1}.gantt_grid_scale .gantt_grid_head_cell{color:#a6a6a6;border-top:none!important;border-right:none!important}.gantt_grid_data .gantt_cell{border-right:none;color:#454545}.gantt_task_link .gantt_link_arrow_right{border-width:6px;margin-top:-3px}.gantt_task_link .gantt_link_arrow_left{border-width:6px;margin-left:-6px;margin-top:-3px}.gantt_task_link .gantt_link_arrow_down,.gantt_task_link .gantt_link_arrow_up{border-width:6px}.gantt_task_line .gantt_task_progress_drag{bottom:-4px;height:10px;margin-left:-8px;width:16px}.chartHeaderBg{background-color:#fff}.gantt_task .gantt_task_scale .gantt_scale_cell{color:#a6a6a6;border-right:1px solid #ebebeb}.gantt_row.gantt_project,.gantt_row.odd.gantt_project{background-color:#edffef}.gantt_task_row.gantt_project,.gantt_task_row.odd.gantt_project{background-color:#f5fff6}.gantt_task_line.gantt_project{background-color:#65c16f;border:1px solid #3c9445}.gantt_task_line.gantt_project .gantt_task_progress{background-color:#46ad51}.buttonBg{background:#fff}.gantt_cal_light .gantt_btn_set{margin:5px 10px}.gantt_btn_set.gantt_cancel_btn_set{background:#fff;color:#454545;border:1px solid #cecece}.gantt_btn_set.gantt_save_btn_set{background:#3db9d3;text-shadow:0 -1px 0 #248a9f;color:#fff}.gantt_btn_set.gantt_delete_btn_set{text-shadow:0 -1px 0 #6f6f6f;background:#ec8e00;text-shadow:0 -1px 0 #a60;color:#fff}.gantt_cal_light_wide{padding-left:0!important;padding-right:0!important}.gantt_cal_light_wide .gantt_cal_larea{border-left:none!important;border-right:none!important}.gantt_popup_button.gantt_ok_button{background:#3db9d3;text-shadow:0 -1px 0 #248a9f;color:#fff;font-weight:700;border-width:0}.gantt_popup_button.gantt_cancel_button{font-weight:700;color:#454544}.gantt_popup_title{background-color:#fff}.gantt_popup_shadow{box-shadow:3px 3px 3px rgba(0,0,0,.07)}.gantt_qi_big_icon.icon_edit{color:#454545;background:#fff}.gantt_qi_big_icon.icon_delete{text-shadow:0 -1px 0 #a60;background:#ec8e00;color:#fff;border-width:0}.gantt_tooltip{box-shadow:3px 3px 3px rgba(0,0,0,.07);border-left:1px solid rgba(0,0,0,.07);border-top:1px solid rgba(0,0,0,.07);font-size:8pt;color:#454545}.gantt_container,.gantt_tooltip{background-color:#fff;font-family:Arial}.gantt_container{font-size:13px;border:1px solid #cecece;position:relative;white-space:nowrap;overflow-x:hidden;overflow-y:hidden}.gantt_touch_active{overscroll-behavior:none}.gantt_task_scroll{overflow-x:scroll}.gantt_grid,.gantt_task{position:relative;overflow-x:hidden;overflow-y:hidden;display:inline-block;vertical-align:top}.gantt_grid_scale,.gantt_task_scale{color:#6b6b6b;font-size:12px;border-bottom:1px solid #cecece;box-sizing:border-box}.gantt_grid_scale,.gantt_task_scale,.gantt_task_vscroll{background-color:#fff}.gantt_scale_line{box-sizing:border-box;-moz-box-sizing:border-box;border-top:1px solid #cecece}.gantt_scale_line:first-child{border-top:none}.gantt_grid_head_cell{display:inline-block;vertical-align:top;border-right:1px solid #cecece;text-align:center;position:relative;cursor:default;height:100%;box-sizing:border-box;-moz-box-sizing:border-box;line-height:33px;-webkit-user-select:none;user-select:none;overflow:hidden}.gantt_scale_line{clear:both}.gantt_grid_data{width:100%;overflow:hidden;position:relative}.gantt_row{position:relative;-webkit-user-select:none;-moz-user-select:none;-moz-user-select:-moz-none}.gantt_add,.gantt_grid_head_add{width:100%;height:100%;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NTQ3MjMyMENDNkI0MTFFMjk4MTI5QTg3MDhFNDVDQTkiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NTQ3MjMyMERDNkI0MTFFMjk4MTI5QTg3MDhFNDVDQTkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1NDcyMzIwQUM2QjQxMUUyOTgxMjlBODcwOEU0NUNBOSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1NDcyMzIwQkM2QjQxMUUyOTgxMjlBODcwOEU0NUNBOSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PshZT8UAAABbSURBVHjaYrTdeZmBEsCER+4wEP+H4sPkGGCDg020ARR7gb4GIAcYDKMDdPnDyAbYkGG5DVW9cIQMvUdBBAuUY4vDz8iAcZinA2zgCHqAYQMseAywJcYFAAEGAM+UFGuohFczAAAAAElFTkSuQmCC);background-position:50%;background-repeat:no-repeat;cursor:pointer;position:relative;-moz-opacity:.3;opacity:.3}.gantt_grid_head_cell.gantt_grid_head_add{-moz-opacity:.6;opacity:.6;top:0}.gantt_grid_head_cell.gantt_grid_head_add:hover{-moz-opacity:1;opacity:1}.gantt_grid_data .gantt_row.odd:hover,.gantt_grid_data .gantt_row:hover{background-color:#fff3a1}.gantt_grid_data .gantt_row.odd:hover .gantt_add,.gantt_grid_data .gantt_row:hover .gantt_add{-moz-opacity:1;opacity:1}.gantt_row,.gantt_task_row{border-bottom:1px solid #ebebeb;background-color:#fff}.gantt_row.odd,.gantt_task_row.odd{background-color:#fff}.gantt_cell,.gantt_grid_head_cell,.gantt_row,.gantt_scale_cell,.gantt_task_cell,.gantt_task_row{box-sizing:border-box;-moz-box-sizing:border-box}.gantt_grid_head_cell,.gantt_scale_cell{line-height:inherit}.gantt_grid_scale .gantt_grid_column_resize_wrap{cursor:col-resize;position:absolute;width:13px;margin-left:-7px}.gantt_grid_column_resize_wrap .gantt_grid_column_resize{background-color:#cecece;height:100%;width:1px;margin:0 auto}.gantt_task_grid_row_resize_wrap{cursor:row-resize;position:absolute;height:13px;margin-top:-7px;left:0;width:100%}.gantt_task_grid_row_resize_wrap .gantt_task_grid_row_resize{background-color:#ebebeb;top:6px;height:1px;width:100%;margin:0 auto;position:relative}.gantt_drag_marker.gantt_grid_resize_area,.gantt_drag_marker.gantt_row_grid_resize_area{background-color:hsla(0,0%,91%,.5);height:100%;width:100%;box-sizing:border-box}.gantt_drag_marker.gantt_grid_resize_area{border-left:1px solid #cecece;border-right:1px solid #cecece}.gantt_drag_marker.gantt_row_grid_resize_area{border-top:1px solid #cecece;border-bottom:1px solid #cecece;pointer-events:none}.gantt_row{display:flex}.gantt_row>div{flex-shrink:0;flex-grow:0}.gantt_cell{vertical-align:top;border-right:1px solid #ebebeb;padding-left:6px;padding-right:6px;height:100%;overflow:hidden;white-space:nowrap;font-size:13px}.gantt_cell_tree{display:flex;flex-wrap:nowrap}.gantt_grid_data .gantt_last_cell,.gantt_grid_scale .gantt_last_cell,.gantt_task .gantt_task_scale .gantt_scale_cell.gantt_last_cell,.gantt_task_bg .gantt_last_cell{border-right-width:0}.gantt_task .gantt_task_scale .gantt_scale_cell.gantt_last_cell{border-right-width:1px}.gantt_task_bg{overflow:hidden}.gantt_scale_cell{display:inline-block;white-space:nowrap;overflow:hidden;border-right:1px solid #cecece;text-align:center;height:100%}.gantt_task_cell{display:inline-block;height:100%;border-right:1px solid #ebebeb}.gantt_layout_cell.gantt_ver_scroll{width:0;background-color:transparent;height:1px;overflow-x:hidden;overflow-y:scroll;position:absolute;right:0;z-index:1}.gantt_ver_scroll>div{width:1px;height:1px}.gantt_hor_scroll{height:0;background-color:transparent;width:100%;clear:both;overflow-x:scroll;overflow-y:hidden}.gantt_layout_cell .gantt_hor_scroll{position:absolute}.gantt_hor_scroll>div{width:5000px;height:1px}.gantt_tree_icon,.gantt_tree_indent{flex-grow:0;flex-shrink:0}.gantt_tree_indent{width:15px;height:100%}.gantt_tree_content,.gantt_tree_icon{vertical-align:top}.gantt_tree_icon{width:28px;height:100%;background-repeat:no-repeat;background-position:50%}.gantt_tree_content{height:100%;white-space:nowrap;min-width:0}.gantt_tree_icon.gantt_open{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAArklEQVQ4T2NkoBJgpJI5DEPAoFOnTv0/c+YMQR+bmJgwmJmZwX2E4bVp06b9j4yMZODg4MBp2I8fPxiWL1/OkJWVNUAGcXJyMnz//h3uQrJdRLFBIAPQAchlJLsIFuCMjIwM////B5sJMoRkg2CuIdtrQcHBDOxsbHBfCQgIMHz48AHO//nrF8O6tWsJR7+7uzsDIxMTznT0/98/hp07d+I3iGopm2DewKFg8OV+AJWkfRMrTobLAAAAAElFTkSuQmCC);width:18px;cursor:pointer}.gantt_tree_icon.gantt_close{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAkUlEQVQ4T2NkoBJgpJI5DEPAoFOnTv0/c+YMQR+bmJgwmJmZwX2E4bVp06b9j4yMZODg4MBp2I8fPxiWL1/OkJWVNeIN4uTkxAin79+/M5AcRtgCHGQIyQbhijaiDQoKDmZgZ2PDGf0/f/1iWLd2LeHod3d3Z2BkYsJp0P9//xh27tyJ3yCqpWyCeQOHgsGX+wEZpW4T5LCxKwAAAABJRU5ErkJggg==);width:18px;cursor:pointer}.gantt_tree_icon.gantt_blank{width:18px}.gantt_tree_icon.gantt_folder_open{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAs0lEQVQ4T62T0Q2EIBBEpQlzuaaMsQoqooqLsSljbMLLmMxmUXBR4U+Qt7Mzi2sqLVeJ00SgEMKWAnvvzYLyAyHfT5sU2fXDJSwCAXK8MI0/UTkva7IIFJsg3NSwnKdFoKtAWOQ1CN7CEqeTotE5L7QyJhmBcklZM4ZgTiAr3iOU3kD93ppO5SkMjB1EeXdBWoSkRql3YeIRe+cGvktS056JR9wsmeBUkujCfNXWCPC8GugPqn5ii/hV+FoAAAAASUVORK5CYII=)}.gantt_tree_icon.gantt_folder_closed{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAfElEQVQ4T2NkoBJgpJI5DCgGTZ8+/T82gzMzMwlaCFcAM0RKQgyrI/0Dg/EahmIQyBB0DRvXr4W78tmLV1gtAbmYoEEgnciG4QpTogzCFyEwSyg2CBS2oCAZNQh3cA+hMAJ5AlcKxuVBlOgnNgVjMwyUrQjmamKLGaoZBAAOTFyLnFFW4wAAAABJRU5ErkJggg==)}.gantt_tree_icon.gantt_file{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAYAAABWzo5XAAAAeElEQVQ4T2NkoBJgRDZn+vTp/wmZm5mZiaIHph7DICkJMUJmMfgHBmMYhtUgbAo3rl+L4lp0NUQbBPI2umuRDaPIIFAYwAyjv0HoMQALM5JdhG4QLMxGDcKdyIdoGIE89OzFK4KZF5Rl8EY/QROQFGA1iBQD0NUCAJVjcxO0naAQAAAAAElFTkSuQmCC)}.gantt_grid_head_cell .gantt_sort{position:absolute;right:5px;top:8px;width:7px;height:13px;background-repeat:no-repeat;background-position:50%}.gantt_grid_head_cell .gantt_sort.gantt_asc{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAANCAYAAABlyXS1AAAARUlEQVR4nGNgQAKGxib/GbABkIS7b8B/DAUwCRiGK0CXwFBAb1DfP/U/LszwHwi2X7qFgUEArBtdAVwCBmAKMCSQFSDzAWXXaOHsXeqkAAAAAElFTkSuQmCC)}.gantt_grid_head_cell .gantt_sort.gantt_desc{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAANCAYAAABlyXS1AAAARUlEQVR42mNgQAL1/VP/M2ADIIntF2/9x1AAlrh0C47hCmA60DFYwX88gIFGwNDY5D8uDFbg7hvwHx2jmIBTAlkB0e4BAEjlaNtBWJPnAAAAAElFTkSuQmCC)}.gantt_inserted,.gantt_updated{font-weight:700}.gantt_deleted{text-decoration:line-through}.gantt_invalid{background-color:#ffe0e0}.gantt_error{color:red}.gantt_status{right:1px;padding:5px 10px;background:hsla(0,0%,61%,.1);position:absolute;top:1px;transition:opacity .2s;opacity:0}.gantt_status.gantt_status_visible{opacity:1}#gantt_ajax_dots span{transition:opacity .2s;background-repeat:no-repeat;opacity:0}#gantt_ajax_dots span.gantt_dot_visible{opacity:1}.gantt_column_drag_marker{border:1px solid #cecece;opacity:.8}.gantt_grid_head_cell_dragged{border:1px solid #cecece;opacity:.3}.gantt_grid_target_marker{position:absolute;top:0;width:2px;height:100%;background-color:#ffa011;transform:translateX(-1px)}.gantt_grid_target_marker:after,.gantt_grid_target_marker:before{display:block;content:\"\";position:absolute;left:-5px;width:0;height:0;border:6px solid transparent}.gantt_grid_target_marker:before{border-top-color:#ffa011}.gantt_grid_target_marker:after{bottom:0;border-bottom-color:#ffa011}.gantt_message_area{position:fixed;right:5px;width:250px;z-index:1000}.gantt-info{min-width:120px;padding:4px 4px 4px 20px;font-family:Arial;z-index:10000;margin:5px;margin-bottom:10px;transition:all .5s ease}.gantt-info.hidden{height:0;padding:0;border-width:0;margin:0;overflow:hidden}.gantt_modal_box{overflow:hidden;display:inline-block;min-width:250px;width:250px;text-align:center;position:fixed;z-index:20000;box-shadow:3px 3px 3px rgba(0,0,0,.07);font-family:Arial;border-radius:6px;border:1px solid #cecece;background:#fff}.gantt_popup_title{border-top-left-radius:6px;border-top-right-radius:6px;border-width:0}.gantt_button,.gantt_popup_button{border:1px solid #cecece;height:30px;line-height:30px;display:inline-block;margin:0 5px;border-radius:4px;background:#fff}.gantt-info,.gantt_button,.gantt_popup_button{user-select:none;-webkit-user-select:none;-moz-user-select:-moz-none;cursor:pointer}.gantt_popup_text{overflow:hidden}.gantt_popup_controls{border-radius:6px;padding:10px}.gantt_popup_button{min-width:100px}div.dhx_modal_cover{background-color:#000;cursor:default;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=20);opacity:.2;position:fixed;z-index:19999;left:0;top:0;width:100%;height:100%;border:none;zoom:1}.gantt-info img,.gantt_modal_box img{float:left;margin-right:20px}.gantt-alert-error,.gantt-confirm-error{border:1px solid red}.gantt_button input,.gantt_popup_button div{border-radius:4px;font-size:14px;box-sizing:content-box;padding:0;margin:0;vertical-align:top}.gantt_popup_title{border-bottom:1px solid #cecece;height:40px;line-height:40px;font-size:20px}.gantt_popup_text{margin:15px 15px 5px;font-size:14px;color:#000;min-height:30px;border-radius:6px}.gantt-error,.gantt-info{font-size:14px;color:#000;box-shadow:3px 3px 3px rgba(0,0,0,.07);padding:0;background-color:#fff;border-radius:3px;border:1px solid #fff}.gantt-info div{padding:5px 10px;background-color:#fff;border-radius:3px;border:1px solid #cecece}.gantt-error{background-color:#d81b1b;border:1px solid #ff3c3c}.gantt-error div{background-color:#d81b1b;border:1px solid #940000;color:#fff}.gantt-warning{background-color:#ff9000;border:1px solid #ffa633}.gantt-warning div{background-color:#ff9000;border:1px solid #b36500;color:#fff}.gantt_data_area div,.gantt_grid div{-ms-touch-action:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.gantt_data_area{position:relative;overflow-x:hidden;overflow-y:hidden;-webkit-user-select:none;user-select:none}.gantt_links_area{position:absolute;left:0;top:0}.gantt_side_content,.gantt_task_content,.gantt_task_progress{line-height:inherit;overflow:hidden;height:100%}.gantt_task_content{font-size:12px;color:#fff;width:100%;top:0;cursor:pointer;position:absolute;white-space:nowrap;text-align:center}.gantt_task_progress{text-align:center;z-index:0;background:#299cb4}.gantt_task_progress_wrapper{border-radius:inherit;position:relative;width:100%;height:100%;overflow:hidden}.gantt_task_line{border-radius:2px;position:absolute;box-sizing:border-box;background-color:#3db9d3;border:1px solid #2898b0;-webkit-user-select:none;-moz-user-select:none;-moz-user-select:-moz-none}.gantt_task_line.gantt_drag_move div{cursor:move}.gantt_touch_move,.gantt_touch_progress .gantt_touch_resize{transform:scale(1.02,1.1);transform-origin:50%}.gantt_touch_progress .gantt_task_progress_drag,.gantt_touch_resize .gantt_task_drag{transform:scaleY(1.3);transform-origin:50%}.gantt_side_content{position:absolute;white-space:nowrap;color:#6e6e6e;top:0;font-size:11px}.gantt_side_content.gantt_left{right:100%;padding-right:20px}.gantt_side_content.gantt_right{left:100%;padding-left:20px}.gantt_side_content.gantt_link_crossing{bottom:8.75px;top:auto}.gantt_link_arrow,.gantt_task_link .gantt_line_wrapper{position:absolute;cursor:pointer}.gantt_line_wrapper div{background-color:#ffa011}.gantt_task_link:hover .gantt_line_wrapper div{box-shadow:0 0 5px 0 #ffa011}.gantt_task_link div.gantt_link_arrow{background-color:transparent;border-style:solid;width:0;height:0}.gantt_link_control{position:absolute;width:20px;top:0}.gantt_link_control div{display:none;cursor:pointer;box-sizing:border-box;position:relative;top:50%;margin-top:-7.5px;vertical-align:middle;border:1px solid #929292;border-radius:6.5px;height:13px;width:13px;background-color:#f0f0f0}.gantt_link_control.task_right div.gantt_link_point{margin-left:7px}.gantt_link_control div:hover{background-color:#fff}.gantt_link_control.task_left{left:-20px}.gantt_link_control.task_right{right:-20px}.gantt_link_target .gantt_link_control div,.gantt_task_line.gantt_drag_move .gantt_link_control div,.gantt_task_line.gantt_drag_move .gantt_task_drag,.gantt_task_line.gantt_drag_move .gantt_task_progress_drag,.gantt_task_line.gantt_drag_progress .gantt_link_control div,.gantt_task_line.gantt_drag_progress .gantt_task_drag,.gantt_task_line.gantt_drag_progress .gantt_task_progress_drag,.gantt_task_line.gantt_drag_resize .gantt_link_control div,.gantt_task_line.gantt_drag_resize .gantt_task_drag,.gantt_task_line.gantt_drag_resize .gantt_task_progress_drag,.gantt_task_line.gantt_selected .gantt_link_control div,.gantt_task_line.gantt_selected .gantt_task_drag,.gantt_task_line.gantt_selected .gantt_task_progress_drag,.gantt_task_line:hover .gantt_link_control div,.gantt_task_line:hover .gantt_task_drag,.gantt_task_line:hover .gantt_task_progress_drag{display:block}.gantt_link_source,.gantt_link_target{box-shadow:0 0 3px #3db9d3}.gantt_link_target.link_finish_allow,.gantt_link_target.link_start_allow{box-shadow:0 0 3px #ffbf5e}.gantt_link_target.link_finish_deny,.gantt_link_target.link_start_deny{box-shadow:0 0 3px #e87e7b}.link_finish_allow .gantt_link_control.task_end_date div,.link_start_allow .gantt_link_control.task_start_date div{background-color:#ffbf5e;border-color:#ffa011}.link_finish_deny .gantt_link_control.task_end_date div,.link_start_deny .gantt_link_control.task_start_date div{background-color:#e87e7b;border-color:#dd3e3a}.gantt_link_arrow_right{border-width:4px 0 4px 6px;border-top-color:transparent!important;border-right-color:transparent!important;border-bottom-color:transparent!important;border-left-color:#ffa011}.gantt_link_arrow_left{border-width:4px 6px 4px 0;margin-top:-1px;border-top-color:transparent!important;border-right-color:#ffa011;border-bottom-color:transparent!important;border-left-color:transparent!important}.gantt_link_arrow_up{border-width:0 4px 6px;border-color:transparent transparent #ffa011;border-top-color:transparent!important;border-right-color:transparent!important;border-bottom-color:#ffa011;border-left-color:transparent!important}.gantt_link_arrow_down{border-width:4px 6px 0 4px;border-top-color:#ffa011;border-right-color:transparent!important;border-bottom-color:transparent!important;border-left-color:transparent!important}.gantt_task_drag,.gantt_task_progress_drag{cursor:ew-resize;display:none;position:absolute}.gantt_task_drag.task_right{cursor:e-resize}.gantt_task_drag.task_left{cursor:w-resize}.gantt_task_drag{height:100%;width:8px;z-index:1;top:-1px}.gantt_task_drag.task_left{left:-7px}.gantt_task_drag.task_right{right:-7px}.gantt_task_progress_drag{height:8px;width:8px;bottom:-4px;margin-left:-4px;background-position:bottom;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MkY3Rjk0RUVDMkYzMTFFMkI1OThEQTA3ODU0OTkzMEEiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MkY3Rjk0RUZDMkYzMTFFMkI1OThEQTA3ODU0OTkzMEEiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyRjdGOTRFQ0MyRjMxMUUyQjU5OERBMDc4NTQ5OTMwQSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyRjdGOTRFREMyRjMxMUUyQjU5OERBMDc4NTQ5OTMwQSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PobPBzIAAADkSURBVHjaYpk2bRoDDsAExL1QdjEQ/8OmiAWHZk4gXqymqhQM4ty6fU8OSMUA8XdiDBAB4k0a6iqWRga6EKcwMQXduHlnL5DpB8Rv0J2JDFSA+JiOtgZcMwiA2CAxkBxUDVYDLEAKgIpV9XQ0MZwFEgPJAZnHoWpRDAgC4n2W5saiQKfjClQGkBxQDciL+6B6wAbkA/EqJwdrTkUFOQZCAKQGpBbIXA3SCzJggo+XK7OEuBgDsQCkFqgHrBfsBT5eHgZSAUwP2IBfv36TbABMDygdtK1Zv6UESLORaAbIhG6AAAMAKN8wE24DXWcAAAAASUVORK5CYII=);background-repeat:no-repeat;z-index:1}.gantt_task_progress_drag:hover{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAALCAYAAAB24g05AAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAs0lEQVQoz6WMPW7CQBgFJxZaiZ60qcgdwjVMmzu8gpwhDULabXyBdHAGuzRHivQiQZovigS2+Jtu95t5T03TMITtCtjEc5VSOgx5k5F4CnxJWgKUUl5sv6eUvk/daiCeAe1fDCCpBtq4jQ/YngO9pMWpGH99OOcDtt8ifmWEuO3D/R+wXQOdpGcuIGkGdNFQ2RawlTTlSsLd2RY55+O95JyPFQ/y8MAE+CylfADpxvYHWP8CXj+JR4wdKHYAAAAASUVORK5CYII=)}.gantt_link_tooltip{box-shadow:3px 3px 3px #888;background-color:#fff;border-left:1px dotted #cecece;border-top:1px dotted #cecece;font-family:Tahoma;font-size:8pt;color:#444;padding:6px;line-height:20px}.gantt_link_direction{height:0;border:0 none #ffa011;border-bottom-style:dashed;border-bottom-width:2px;transform-origin:0 0;-ms-transform-origin:0 0;-webkit-transform-origin:0 0;z-index:2;margin-left:1px;position:absolute}.gantt_grid_data .gantt_row.gantt_selected,.gantt_grid_data .gantt_row.odd.gantt_selected,.gantt_task_row.gantt_selected{background-color:#fff3a1}.gantt_task_row.gantt_selected .gantt_task_cell{border-right-color:#ffec6e}.gantt_task_line.gantt_selected{box-shadow:0 0 5px #299cb4}.gantt_task_line.gantt_project.gantt_selected{box-shadow:0 0 5px #46ad51}.gantt_task_line.gantt_milestone{visibility:hidden;background-color:#d33daf;border:0 solid #61164f;box-sizing:content-box;-moz-box-sizing:content-box}.gantt_task_line.gantt_milestone div{visibility:visible}.gantt_task_line.gantt_milestone .gantt_task_content{background:inherit;border:inherit;border-width:1px;border-radius:inherit;box-sizing:border-box;-moz-box-sizing:border-box;transform:rotate(45deg)}.gantt_task_line.gantt_task_inline_color{border-color:#999}.gantt_task_line.gantt_task_inline_color .gantt_task_progress{background-color:#363636;opacity:.2}.gantt_task_line.gantt_task_inline_color.gantt_project.gantt_selected,.gantt_task_line.gantt_task_inline_color.gantt_selected{box-shadow:0 0 5px #999}.gantt_task_link.gantt_link_inline_color:hover .gantt_line_wrapper div{box-shadow:0 0 5px 0 #999}.gantt_critical_task{background-color:#e63030;border-color:#9d3a3a}.gantt_critical_task .gantt_task_progress{background-color:rgba(0,0,0,.4)}.gantt_critical_link .gantt_line_wrapper>div{background-color:#e63030}.gantt_critical_link .gantt_link_arrow{border-color:#e63030}.gantt_btn_set:focus,.gantt_cell:focus,.gantt_grid_head_cell:focus,.gantt_popup_button:focus,.gantt_qi_big_icon:focus,.gantt_row:focus{box-shadow:inset 0 0 1px 1px #4d90fe}.gantt_split_parent,.gantt_split_subproject{opacity:.1;pointer-events:none}.gantt_rollup_child .gantt_link_control,.gantt_rollup_child:hover .gantt_link_control{display:none}.gantt_unselectable,.gantt_unselectable div{-webkit-user-select:none;-moz-user-select:none;-moz-user-select:-moz-none}.gantt_cal_light{-webkit-tap-highlight-color:transparent;background:#fff;border-radius:6px;font-family:Arial;font-size:13px;border:1px solid #cecece;color:#6b6b6b;font-size:12px;position:absolute;z-index:10001;width:550px;height:250px;box-shadow:3px 3px 3px rgba(0,0,0,.07)}.gantt_cal_light_wide{width:650px}.gantt_cal_light select{font-family:Arial;border:1px solid #cecece;font-size:13px;padding:2px;margin:0}.gantt_cal_ltitle{padding:7px 10px;overflow:hidden;-webkit-border-top-left-radius:6px;-webkit-border-bottom-left-radius:0;-webkit-border-top-right-radius:6px;-webkit-border-bottom-right-radius:0;-moz-border-radius-topleft:6px;-moz-border-radius-bottomleft:0;-moz-border-radius-topright:6px;-moz-border-radius-bottomright:0;border-top-left-radius:6px;border-bottom-left-radius:0;border-top-right-radius:6px;border-bottom-right-radius:0}.gantt_cal_ltitle,.gantt_cal_ltitle span{white-space:nowrap}.gantt_cal_lsection{color:#727272;font-weight:700;padding:12px 0 5px 10px}.gantt_cal_lsection .gantt_fullday{float:right;margin-right:5px;font-size:12px;font-weight:400;line-height:20px;vertical-align:top;cursor:pointer}.gantt_cal_lsection{font-size:13px}.gantt_cal_ltext{padding:2px 10px;overflow:hidden}.gantt_cal_ltext textarea{overflow-y:auto;overflow-x:hidden;font-family:Arial;font-size:13px;box-sizing:border-box;border:1px solid #cecece;height:100%;width:100%;outline:none!important;resize:none}.gantt_section_constraint [data-constraint-time-select]{margin-left:20px}.gantt_time{font-weight:700}.gantt_cal_light .gantt_title{padding-left:10px}.gantt_cal_larea{border:1px solid #cecece;border-left:none;border-right:none;background-color:#fff;overflow:hidden;height:1px}.gantt_btn_set{margin:10px 7px 5px 10px;padding:5px 15px 5px 10px;float:left;border-radius:4px;border:0 solid #cecece;height:32px;font-weight:700;background:#fff;box-sizing:border-box;cursor:pointer}.gantt_hidden{display:none}.gantt_btn_set div{float:left;font-size:13px;height:22px;line-height:22px;background-repeat:no-repeat;vertical-align:middle}.gantt_save_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTk1OUU5RDFDMzA0MTFFMkExMUZBQTdDNDAzOUE5RjMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTk1OUU5RDJDMzA0MTFFMkExMUZBQTdDNDAzOUE5RjMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxOTU5RTlDRkMzMDQxMUUyQTExRkFBN0M0MDM5QTlGMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxOTU5RTlEMEMzMDQxMUUyQTExRkFBN0M0MDM5QTlGMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PjDroXYAAAEXSURBVHjaYvz//z8DJYCRUgPIAUxAbAnEHiAHMIBcQCwGaRYXF3e6evXqoffv39/dv38/CymaGSUkJBzv3LlzCsj///fv3wdAihkkIQnEvkAshU8zLy+v7a1bt06ANP/79+87kDIAy505cybq06dPr3p7ezuwGQLTfOPGjWP/ESAZLg8kPKBO+g01RBJNszWyZqC6uSgWgIg/f/4shxnS2dnZBjMEqNkSFGBImi8CKTYMA4BYCGjIczRDHC5dunQQSfN7IKWI4UUkjjdMMdCwnw8ePLjwHxV4Yw1gZA5Q47z/2EELzhhCE+ABGvIQWSeQvwcU38QaAML2wHj+C/X3MyAlijeB4ZBoBOIPQGxJKIVSnBsBAgwABddBclWfcZUAAAAASUVORK5CYII=);margin-top:2px;width:21px}.gantt_cancel_btn{margin-top:2px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MDkzMDA3MzlDMzA0MTFFMjg2QTVFMzFEQzgwRkJERDYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MDkzMDA3M0FDMzA0MTFFMjg2QTVFMzFEQzgwRkJERDYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowOTMwMDczN0MzMDQxMUUyODZBNUUzMURDODBGQkRENiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDowOTMwMDczOEMzMDQxMUUyODZBNUUzMURDODBGQkRENiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmYuYOUAAAEdSURBVHjaYvz//z8DJYAFXWDlypU8QKoIiD2A2AwqfAqIdwBxX3h4+Bdk9YzILgBqtgdS84FYEYeF94E4EWjIQZgAE5LmQCB1AKoZZKMPEAtAMYh9GSp3AKjWD8UFQAEhIPshEIOc3wHENUBb/qJ57SyQMoJyPwKxElDNO1gYFEE17wMKVmIJlzNQzeegrjaA6qmBecEbSvfh0GwMxGeBhoPoemQ9MAO0kEIbl2YTqPAFKK2IbMB3AjabYIkRZmQD7kNpMyI0G0PpO8gGbIUFJj7NQDk2INWIrIcJKfBAKcwJqvkcDs0TgFgXGo19KCkRmpDWQdWDEk0NUoCBoq0FqhkE/IEWbKJKUmZEz43QzFSKIzN1481M5ACAAAMAlfl/lCwRpagAAAAASUVORK5CYII=);width:20px}.gantt_delete_btn{background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjFENzI3NUNDMzA0MTFFMjhBNjJGQTc3MUIyQzYzNEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjFENzI3NURDMzA0MTFFMjhBNjJGQTc3MUIyQzYzNEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMUQ3Mjc1QUMzMDQxMUUyOEE2MkZBNzcxQjJDNjM0RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMUQ3Mjc1QkMzMDQxMUUyOEE2MkZBNzcxQjJDNjM0RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmUD0gAAAABvSURBVHjaYvz//z8DIyMjAxYQicReji4J0ofKQNP8HwmgGQbXB8IsWGwDSSwDuioKjY9uBthVjFAXYHUGAQA2kYmBUoAUBpGk0LAwgBvwH+YX4mkwptgLowYMRgOITUyYKRFIN/wnDjQgJySAAAMApryKzL8wjfUAAAAASUVORK5CYII=);margin-top:2px;width:20px}.gantt_cal_cover{width:100%;height:100%;position:fixed;z-index:10000;top:0;left:0;background-color:#000;opacity:.1;filter:progid:DXImageTransform.Microsoft.Alpha(opacity=10)}.gantt_custom_button{padding:0 3px;font-family:Arial;font-size:13px;font-weight:400;margin-right:10px;margin-top:-5px;cursor:pointer;float:right;height:21px;width:90px;border:1px solid #cecece;text-align:center;border-radius:4px}.gantt_custom_button div{cursor:pointer;float:none;height:21px;line-height:21px;vertical-align:middle}.gantt_custom_button div:first-child{display:none}.gantt_cal_light_wide{width:580px;padding:2px 4px}.gantt_cal_light_wide .gantt_cal_larea{box-sizing:border-box;border:1px solid #cecece}.gantt_cal_light_wide .gantt_cal_lsection{border:0;float:left;text-align:right;width:80px;height:20px;padding:5px 10px 0 0}.gantt_cal_light_wide .gantt_wrap_section{position:relative;padding:10px 0;overflow:hidden;border-bottom:1px solid #ebebeb}.gantt_cal_light_wide .gantt_section_time{overflow:hidden;padding-top:2px!important;padding-right:0;height:20px!important}.gantt_cal_light_wide .gantt_cal_ltext{padding-right:0}.gantt_cal_light_wide .gantt_cal_larea{padding:0 10px;width:100%}.gantt_cal_light_wide .gantt_section_time{background:transparent}.gantt_cal_light_wide .gantt_cal_checkbox label{padding-left:0}.gantt_cal_light_wide .gantt_cal_lsection .gantt_fullday{float:none;margin-right:0;font-weight:700;cursor:pointer}.gantt_cal_light_wide .gantt_custom_button{position:absolute;top:0;right:0;margin-top:2px}.gantt_cal_light_wide .gantt_repeat_right{margin-right:55px}.gantt_cal_light_wide.gantt_cal_light_full{width:738px}.gantt_cal_wide_checkbox input{margin-top:8px;margin-left:14px}.gantt_cal_light input{font-size:13px}.gantt_section_time{background-color:#fff;white-space:nowrap;padding:2px 10px 5px;padding-top:2px!important}.gantt_section_time .gantt_time_selects{float:left;height:25px}.gantt_section_time .gantt_time_selects select{height:23px;padding:2px;border:1px solid #cecece}.gantt_duration{width:100px;height:23px;float:left;white-space:nowrap;margin-left:20px;line-height:23px}.gantt_duration .gantt_duration_dec,.gantt_duration .gantt_duration_inc,.gantt_duration .gantt_duration_value{box-sizing:border-box;text-align:center;vertical-align:top;height:100%;border:1px solid #cecece}.gantt_duration .gantt_duration_value{width:40px;padding:3px 4px;border-left-width:0;border-right-width:0}.gantt_duration .gantt_duration_value.gantt_duration_value_formatted{width:70px}.gantt_duration .gantt_duration_dec,.gantt_duration .gantt_duration_inc{width:20px;padding:1px;padding-bottom:1px;background:#fff}.gantt_duration .gantt_duration_dec{-moz-border-top-left-radius:4px;-moz-border-bottom-left-radius:4px;-webkit-border-top-left-radius:4px;-webkit-border-bottom-left-radius:4px;border-top-left-radius:4px;border-bottom-left-radius:4px}.gantt_duration .gantt_duration_inc{margin-right:4px;-moz-border-top-right-radius:4px;-moz-border-bottom-right-radius:4px;-webkit-border-top-right-radius:4px;-webkit-border-bottom-right-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:4px}.gantt_resources{max-height:150px;height:auto;overflow-y:auto}.gantt_resource_row{display:block;padding:10px 0;border-bottom:1px solid #ebebeb;cursor:pointer}.gantt_resource_row input[type=checkbox]:not(:checked),.gantt_resource_row input[type=checkbox]:not(:checked)~div{opacity:.5}.gantt_resource_toggle{vertical-align:middle}.gantt_resources_filter .gantt_resources_filter_input{padding:1px 2px;box-sizing:border-box}.gantt_resources_filter .switch_unsetted{vertical-align:middle}.gantt_resource_cell{display:inline-block}.gantt_resource_cell.gantt_resource_cell_checkbox{width:24px;max-width:24px;min-width:24px;vertical-align:middle}.gantt_resource_cell.gantt_resource_cell_label{width:40%;max-width:40%;vertical-align:middle}.gantt_resource_cell.gantt_resource_cell_value{width:30%;max-width:30%;vertical-align:middle}.gantt_resource_cell.gantt_resource_cell_value input,.gantt_resource_cell.gantt_resource_cell_value select{width:80%;vertical-align:middle;padding:1px 2px;box-sizing:border-box}.gantt_resource_cell.gantt_resource_cell_unit{width:10%;max-width:10%;vertical-align:middle}.gantt_resource_early_value{opacity:.8;font-size:.9em}.gantt_cal_quick_info{border:1px solid #cecece;border-radius:6px;position:absolute;z-index:300;box-shadow:3px 3px 3px rgba(0,0,0,.07);background-color:#fff;width:300px;transition:left .5s ease,right .5s;-moz-transition:left .5s ease,right .5s;-webkit-transition:left .5s ease,right .5s;-o-transition:left .5s ease,right .5s}.gantt_no_animate{transition:none;-moz-transition:none;-webkit-transition:none;-o-transition:none}.gantt_cal_quick_info.gantt_qi_left .gantt_qi_big_icon{float:right}.gantt_cal_qi_title{-webkit-border-top-left-radius:6px;-webkit-border-bottom-left-radius:0;-webkit-border-top-right-radius:6px;-webkit-border-bottom-right-radius:0;-moz-border-radius-topleft:6px;-moz-border-radius-bottomleft:0;-moz-border-radius-topright:6px;-moz-border-radius-bottomright:0;border-top-left-radius:6px;border-bottom-left-radius:0;border-top-right-radius:6px;border-bottom-right-radius:0;padding:5px 0 8px 12px;color:#454545;background-color:#fff;border-bottom:1px solid #cecece}.gantt_cal_qi_tdate{font-size:14px;font-weight:700}.gantt_cal_qi_tcontent{font-size:13px}.gantt_cal_qi_content{padding:16px 8px;font-size:13px;color:#454545;overflow:hidden}.gantt_cal_qi_controls{-webkit-border-top-left-radius:0;-webkit-border-bottom-left-radius:6px;-webkit-border-top-right-radius:0;-webkit-border-bottom-right-radius:6px;-moz-border-radius-topleft:0;-moz-border-radius-bottomleft:6px;-moz-border-radius-topright:0;-moz-border-radius-bottomright:6px;border-top-left-radius:0;border-bottom-left-radius:6px;border-top-right-radius:0;border-bottom-right-radius:6px;padding-left:7px}.gantt_cal_qi_controls .gantt_menu_icon{margin-top:6px;background-repeat:no-repeat}.gantt_cal_qi_controls .gantt_menu_icon.icon_edit{width:20px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAAB3RJTUUH3QYFCjI5ZQj5bAAAAFNJREFUOMvt0zEOACAIA0DkwTymH8bJTRTKZGJXyaWEKPKTCQAH4Ls37cItcDUzsxHNDLZNhCq7Gt1wh9ErV7EjyGAhyGLphlnsClWuS32rn0czAV+vNGrM/LBtAAAAAElFTkSuQmCC)}.gantt_cal_qi_controls .gantt_menu_icon.icon_delete{width:20px;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MjFENzI3NUNDMzA0MTFFMjhBNjJGQTc3MUIyQzYzNEYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MjFENzI3NURDMzA0MTFFMjhBNjJGQTc3MUIyQzYzNEYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoyMUQ3Mjc1QUMzMDQxMUUyOEE2MkZBNzcxQjJDNjM0RiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoyMUQ3Mjc1QkMzMDQxMUUyOEE2MkZBNzcxQjJDNjM0RiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmUD0gAAAABvSURBVHjaYvz//z8DIyMjAxYQicReji4J0ofKQNP8HwmgGQbXB8IsWGwDSSwDuioKjY9uBthVjFAXYHUGAQA2kYmBUoAUBpGk0LAwgBvwH+YX4mkwptgLowYMRgOITUyYKRFIN/wnDjQgJySAAAMApryKzL8wjfUAAAAASUVORK5CYII=)}.gantt_qi_big_icon{font-size:13px;border-radius:4px;font-weight:700;background:#fff;margin:5px 9px 8px 0;min-width:60px;line-height:32px;vertical-align:middle;padding:0 10px 0 5px;cursor:pointer;border:1px solid #cecece}.gantt_cal_qi_controls div{float:left;height:32px;text-align:center;line-height:32px}.gantt_tooltip{padding:10px;position:absolute;z-index:50;white-space:nowrap}.gantt_resource_marker{position:absolute;text-align:center;font-size:14px;color:#fff}.gantt_resource_marker_ok{background:rgba(78,208,134,.75)}.gantt_resource_marker_overtime{background:hsla(0,100%,76%,.69)}.gantt_histogram_label{width:100%;height:100%;position:absolute;z-index:1;font-weight:700;font-size:13px}.gantt_histogram_fill{background-color:rgba(41,157,180,.2);width:100%;position:absolute;bottom:0}.gantt_histogram_hor_bar{height:1px;margin-top:-1px}.gantt_histogram_hor_bar,.gantt_histogram_vert_bar{position:absolute;background:#299db4;margin-left:-1px}.gantt_histogram_vert_bar{width:1px}.gantt_histogram_cell{position:absolute;text-align:center;font-size:13px;color:#000}.gantt_marker{height:100%;width:2px;top:0;position:absolute;text-align:center;background-color:rgba(255,0,0,.4);box-sizing:border-box}.gantt_marker .gantt_marker_content{padding:5px;background:inherit;color:#fff;position:absolute;font-size:12px;line-height:12px;opacity:.8}.gantt_marker_area{position:absolute;top:0;left:0}.gantt_grid_editor_placeholder{position:absolute}.gantt_grid_editor_placeholder>div,.gantt_grid_editor_placeholder input,.gantt_grid_editor_placeholder select{width:100%;height:100%;box-sizing:border-box}.gantt_row_placeholder div{opacity:.5}.gantt_row_placeholder .gantt_add,.gantt_row_placeholder .gantt_file{display:none}.gantt_drag_marker.gantt_grid_dnd_marker{background-color:transparent;transition:all .1s ease}.gantt_grid_dnd_marker_line{height:4px;width:100%;background-color:#3498db}.gantt_grid_dnd_marker_line:before{background:#fff;width:12px;height:12px;box-sizing:border-box;border:3px solid #3498db;border-radius:6px;content:\"\";line-height:1px;display:block;position:absolute;margin-left:-11px;margin-top:-4px;pointer-events:none}.gantt_grid_dnd_marker_folder{height:100%;width:100%;position:absolute;pointer-events:none;box-sizing:border-box;box-shadow:inset 0 0 0 2px #3f98db;background:transparent}.gantt_overlay_area{display:none}.gantt_overlay,.gantt_overlay_area{position:absolute;height:inherit;width:inherit;top:0;left:0}.gantt_click_drag_rect{position:absolute;left:0;top:0;outline:1px solid #3f98db;background-color:rgba(52,152,219,.3)}.gantt_timeline_move_available,.gantt_timeline_move_available *{cursor:move}.gantt_rtl .gantt_grid{text-align:right}.gantt_rtl .gantt_cell,.gantt_rtl .gantt_row{flex-direction:row-reverse}.gantt_layout_content{width:100%;overflow:auto;box-sizing:border-box}.gantt_layout_cell{position:relative;box-sizing:border-box}.gantt_layout_cell>.gantt_layout_header{background:#33aae8;color:#fff;font-size:17px;padding:5px 10px;box-sizing:border-box}.gantt_layout_header.collapsed_x{background:#a9a9a9}.gantt_layout_header.collapsed_x .gantt_header_arrow:before{content:\"\\21E7\"}.gantt_layout_header.collapsed_y{background:#a9a9a9}.gantt_layout_header.collapsed_y .gantt_header_arrow:before{content:\"\\21E9\"}.gantt_layout_header{cursor:pointer}.gantt_layout_header .gantt_header_arrow{float:right;text-align:right}.gantt_layout_header .gantt_header_arrow:before{content:\"\\21E6\"}.gantt_layout_header.vertical .gantt_header_arrow:before{content:\"\\21E7\"}.gantt_layout_outer_scroll_vertical .gantt_layout_content{overflow-y:hidden}.gantt_layout_outer_scroll_horizontal .gantt_layout_content{overflow-x:hidden}.gantt_layout_x>.gantt_layout_cell{display:inline-block;vertical-align:top}.gantt_layout_x{white-space:nowrap}.gantt_resizing{opacity:.7;background:#f2f2f2}.gantt_layout_cell_border_right.gantt_resizer{overflow:visible;border-right:0}.gantt_resizer{cursor:e-resize;position:relative}.gantt_resizer_y{cursor:n-resize}.gantt_resizer_stick{background:#33aae8;z-index:9999;position:absolute;top:0;width:100%}.gantt_resizer_x .gantt_resizer_x{position:absolute;width:20px;height:100%;margin-left:-10px;top:0;left:0;z-index:1}.gantt_resizer_y .gantt_resizer_y{position:absolute;height:20px;width:100%;top:-10px;left:0;z-index:1}.gantt_resizer_error{background:#cd5c5c!important}.gantt_layout_cell_border_left{border-left:1px solid #cecece}.gantt_layout_cell_border_right{border-right:1px solid #cecece}.gantt_layout_cell_border_top{border-top:1px solid #cecece}.gantt_layout_cell_border_bottom{border-bottom:1px solid #cecece}.gantt_layout_cell_border_transparent{border-color:transparent}.gantt_window{position:absolute;top:50%;left:50%;z-index:999999999;background:#fff}.gantt_window_content{position:relative}.gantt_window_content_header{background:#39c;color:#fff;height:33px;padding:10px 10px 0;border-bottom:2px solid #fff;position:relative}.gantt_window_content_header_text{padding-left:10%}.gantt_window_content_header_buttons{position:absolute;top:10px;right:10px}.gantt_window_content_header_buttons:hover{color:#000;cursor:pointer}.gantt_window_content_resizer{position:absolute;width:15px;height:15px;bottom:0;line-height:15px;right:-1px;text-align:center;background-image:url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAMAAAAMCGV4AAAABlBMVEUAAAAAAAClZ7nPAAAAAXRSTlMAQObYZgAAABZJREFUeAFjIAUwUshlpJDLSIhLGAAACQ4AFk79JaMAAAAASUVORK5CYII=);cursor:nw-resize;z-index:999}.gantt_window_content_frame{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.1);z-index:9999}.gantt_window_drag{cursor:pointer!important}.gantt_window_resizing{overflow:visible}.gantt_window_resizing_body{overflow:hidden!important}.gantt_window_modal{background:rgba(0,0,0,.1);z-index:9999;top:0;left:0;width:100%;height:100%;position:fixed}.gantt_cal_light,.gantt_cal_quick_info,.gantt_container,.gantt_message_area,.gantt_modal_box,.gantt_tooltip{text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.gantt_noselect{-webkit-user-select:none;user-select:none}.gantt_noselect .gantt_grid_data .gantt_row.odd:hover,.gantt_noselect .gantt_grid_data .gantt_row:hover{background-color:unset}.gantt_drag_marker{position:absolute;top:-1000px;left:-1000px;font-family:Arial;font-size:13px;z-index:1;white-space:nowrap}.gantt_drag_marker .gantt_tree_icon.gantt_blank,.gantt_drag_marker .gantt_tree_icon.gantt_close,.gantt_drag_marker .gantt_tree_icon.gantt_open,.gantt_drag_marker .gantt_tree_indent{display:none}.gantt_drag_marker,.gantt_drag_marker .gantt_row.odd{background-color:#fff}.gantt_drag_marker .gantt_row{border-left:1px solid #d2d2d2;border-top:1px solid #d2d2d2}.gantt_drag_marker .gantt_cell{border-color:#d2d2d2}.gantt_row.gantt_over,.gantt_task_row.gantt_over{background-color:#0070fe}.gantt_row.gantt_transparent .gantt_cell{opacity:.7}.gantt_task_row.gantt_transparent{background-color:#f8fdfd}.gantt_popup_button.gantt_delete_button{background:#3db9d3;text-shadow:0 -1px 0 #248a9f;color:#fff;font-weight:700;border-width:0}.gantt_container_resize_watcher{background:transparent;width:100%;height:100%;position:absolute;top:0;left:0;z-index:-1;pointer-events:none;border:0;box-sizing:border-box;opacity:0}.gantt-chart {\n  position: relative;\n  width: 100%;\n  height: 600px;\n}.gant-wrap {\n  width: 100%;\n  height: 100%;\n  background: #FFFFFF;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 20px;\n  margin: 0 10px;\n}.gantt_grid_head_text {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9kaHRtbHgtZ2FudHQvY29kZWJhc2UvZGh0bWx4Z2FudHQuY3NzIiwiLi5cXC4uXFwuLlxcZ2FudC1jaGFydC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxrREFBa0Qsd0JBQXdCLENBQUMsd0NBQXdDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQywyQkFBMkIsQ0FBQyw2QkFBNkIsaUJBQWlCLENBQUMsYUFBYSxDQUFDLHlDQUF5QyxnQkFBZ0IsQ0FBQyxlQUFlLENBQUMsd0NBQXdDLGdCQUFnQixDQUFDLGdCQUFnQixDQUFDLGVBQWUsQ0FBQyw4RUFBOEUsZ0JBQWdCLENBQUMsMkNBQTJDLFdBQVcsQ0FBQyxXQUFXLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGVBQWUscUJBQXFCLENBQUMsZ0RBQWdELGFBQWEsQ0FBQyw4QkFBOEIsQ0FBQyxzREFBc0Qsd0JBQXdCLENBQUMsZ0VBQWdFLHdCQUF3QixDQUFDLCtCQUErQix3QkFBd0IsQ0FBQyx3QkFBd0IsQ0FBQyxvREFBb0Qsd0JBQXdCLENBQUMsVUFBVSxlQUFlLENBQUMsZ0NBQWdDLGVBQWUsQ0FBQyxvQ0FBb0MsZUFBZSxDQUFDLGFBQWEsQ0FBQyx3QkFBd0IsQ0FBQyxrQ0FBa0Msa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLG9DQUFvQyw0QkFBNEIsQ0FBQyxrQkFBa0IsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsc0JBQXNCLHdCQUF3QixDQUFDLHlCQUF5QixDQUFDLHVDQUF1QywwQkFBMEIsQ0FBQywyQkFBMkIsQ0FBQyxvQ0FBb0Msa0JBQWtCLENBQUMsNEJBQTRCLENBQUMsVUFBVSxDQUFDLGVBQWUsQ0FBQyxjQUFjLENBQUMsd0NBQXdDLGVBQWUsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLHFCQUFxQixDQUFDLG9CQUFvQixzQ0FBc0MsQ0FBQyw2QkFBNkIsYUFBYSxDQUFDLGVBQWUsQ0FBQywrQkFB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QUMsaUJBQWlCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsbUJBQW1CLENBQUMsUUFBUSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsQ0NDOWk0QztFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFDRixDQUNBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLDBDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFRixDQUFBO0VBQ0UsWUFBQTtBQUdGIiwiZmlsZSI6ImdhbnQtY2hhcnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZ3JpZEhvdmVyU3R5bGUsLmdyaWRTZWxlY3Rpb24sLnRpbWVsaW5lU2VsZWN0aW9ue2JhY2tncm91bmQtY29sb3I6I2ZmZjNhMX0uZ2FudHRfZ3JpZF9zY2FsZSAuZ2FudHRfZ3JpZF9oZWFkX2NlbGx7Y29sb3I6I2E2YTZhNjtib3JkZXItdG9wOm5vbmUhaW1wb3J0YW50O2JvcmRlci1yaWdodDpub25lIWltcG9ydGFudH0uZ2FudHRfZ3JpZF9kYXRhIC5nYW50dF9jZWxse2JvcmRlci1yaWdodDpub25lO2NvbG9yOiM0NTQ1NDV9LmdhbnR0X3Rhc2tfbGluayAuZ2FudHRfbGlua19hcnJvd19yaWdodHtib3JkZXItd2lkdGg6NnB4O21hcmdpbi10b3A6LTNweH0uZ2FudHRfdGFza19saW5rIC5nYW50dF9saW5rX2Fycm93X2xlZnR7Ym9yZGVyLXdpZHRoOjZweDttYXJnaW4tbGVmdDotNnB4O21hcmdpbi10b3A6LTNweH0uZ2FudHRfdGFza19saW5rIC5nYW50dF9saW5rX2Fycm93X2Rvd24sLmdhbnR0X3Rhc2tfbGluayAuZ2FudHRfbGlua19hcnJvd191cHtib3JkZXItd2lkdGg6NnB4fS5nYW50dF90YXNrX2xpbmUgLmdhbnR0X3Rhc2tfcHJvZ3Jlc3NfZHJhZ3tib3R0b206LTRweDtoZWlnaHQ6MTBweDttYXJnaW4tbGVmdDotOHB4O3dpZHRoOjE2cHh9LmNoYXJ0SGVhZGVyQmd7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5nYW50dF90YXNrIC5nYW50dF90YXNrX3NjYWxlIC5nYW50dF9zY2FsZV9jZWxse2NvbG9yOiNhNmE2YTY7Ym9yZGVyLXJpZ2h0OjFweCBzb2xpZCAjZWJlYmVifS5nYW50dF9yb3cuZ2FudHRfcHJvamVjdCwuZ2FudHRfcm93Lm9kZC5nYW50dF9wcm9qZWN0e2JhY2tncm91bmQtY29sb3I6I2VkZmZlZn0uZ2FudHRfdGFza19yb3cuZ2FudHRfcHJvamVjdCwuZ2FudHRfdGFza19yb3cub2RkLmdhbnR0X3Byb2plY3R7YmFja2dyb3VuZC1jb2xvcjojZjVmZmY2fS5nYW50dF90YXNrX2xpbmUuZ2FudHRfcHJvamVjdHtiYWNrZ3JvdW5kLWNvbG9yOiM2NWMxNmY7Ym9yZGVyOjFweCBzb2xpZCAjM2M5NDQ1fS5nYW50dF90YXNrX2xpbmUuZ2FudHRfcHJvamVjdCAuZ2FudHRfdGFza19wcm9ncmVzc3tiYWNrZ3JvdW5kLWNvbG9yOiM0NmFkNTF9LmJ1dHRvbkJne2JhY2tncm91bmQ6I2ZmZn0uZ2FudHRfY2FsX2xpZ2h0IC5nYW50dF9idG5fc2V0e21hcmdpbjo1cHggMTBweH0uZ2FudHRfYnRuX3NldC5nYW50dF9jYW5jZWxfYnRuX3NldHtiYWNrZ3JvdW5kOiNmZmY7Y29sb3I6IzQ1NDU0NTtib3JkZXI6MXB4IHNvbGlkICNjZWNlY2V9LmdhbnR0X2J0bl9zZXQuZ2FudHRfc2F2ZV9idG5fc2V0e2JhY2tncm91bmQ6IzNkYjlkMzt0ZXh0LXNoYWRvdzowIC0xcHggMCAjMjQ4YTlmO2NvbG9yOiNmZmZ9LmdhbnR0X2J0bl9zZXQuZ2FudHRfZGVsZXRlX2J0bl9zZXR7dGV4dC1zaGFkb3c6MCAtMXB4IDAgIzZmNmY2ZjtiYWNrZ3JvdW5kOiNlYzhlMDA7dGV4dC1zaGFkb3c6MCAtMXB4IDAgI2E2MDtjb2xvcjojZmZmfS5nYW50dF9jYWxfbGlnaHRfd2lkZXtwYWRkaW5nLWxlZnQ6MCFpbXBvcnRhbnQ7cGFkZGluZy1yaWdodDowIWltcG9ydGFudH0uZ2FudHRfY2FsX2xpZ2h0X3dpZGUgLmdhbnR0X2NhbF9sYXJlYXtib3JkZXItbGVmdDpub25lIWltcG9ydGFudDtib3JkZXItcmlnaHQ6bm9uZSFpbXBvcnRhbnR9LmdhbnR0X3BvcHVwX2J1dHRvbi5nYW50dF9va19idXR0b257YmFja2dyb3VuZDojM2RiOWQzO3RleHQtc2hhZG93OjAgLTFweCAwICMyNDhhOWY7Y29sb3I6I2ZmZjtmb250LXdlaWdodDo3MDA7Ym9yZGVyLXdpZHRoOjB9LmdhbnR0X3BvcHVwX2J1dHRvbi5nYW50dF9jYW5jZWxfYnV0dG9ue2ZvbnQtd2VpZ2h0OjcwMDtjb2xvcjojNDU0NTQ0fS5nYW50dF9wb3B1cF90aXRsZXtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmdhbnR0X3BvcHVwX3NoYWRvd3tib3gtc2hhZG93OjNweCAzcHggM3B4IHJnYmEoMCwwLDAsLjA3KX0uZ2FudHRfcWlfYmlnX2ljb24uaWNvbl9lZGl0e2NvbG9yOiM0NTQ1NDU7YmFja2dyb3VuZDojZmZmfS5nYW50dF9xaV9iaWdfaWNvbi5pY29uX2RlbGV0ZXt0ZXh0LXNoYWRvdzowIC0xcHggMCAjYTYwO2JhY2tncm91bmQ6I2VjOGUwMDtjb2xvcjojZmZmO2JvcmRlci13aWR0aDowfS5nYW50dF90b29sdGlwe2JveC1zaGFkb3c6M3B4IDNweCAzcHggcmdiYSgwLDAsMCwuMDcpO2JvcmRlci1sZWZ0OjFweCBzb2xpZCByZ2JhKDAsMCwwLC4wNyk7Ym9yZGVyLXRvcDoxcHggc29saWQgcmdiYSgwLDAsMCwuMDcpO2ZvbnQtc2l6ZTo4cHQ7Y29sb3I6IzQ1NDU0NX0uZ2FudHRfY29udGFpbmVyLC5nYW50dF90b29sdGlwe2JhY2tncm91bmQtY29sb3I6I2ZmZjtmb250LWZhbWlseTpBcmlhbH0uZ2FudHRfY29udGFpbmVye2ZvbnQtc2l6ZToxM3B4O2JvcmRlcjoxcHggc29saWQgI2NlY2VjZTtwb3NpdGlvbjpyZWxhdGl2ZTt3aGl0ZS1zcGFjZTpub3dyYXA7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTpoaWRkZW59LmdhbnR0X3RvdWNoX2FjdGl2ZXtvdmVyc2Nyb2xsLWJlaGF2aW9yOm5vbmV9LmdhbnR0X3Rhc2tfc2Nyb2xse292ZXJmbG93LXg6c2Nyb2xsfS5nYW50dF9ncmlkLC5nYW50dF90YXNre3Bvc2l0aW9uOnJlbGF0aXZlO292ZXJmbG93LXg6aGlkZGVuO292ZXJmbG93LXk6aGlkZGVuO2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOnRvcH0uZ2FudHRfZ3JpZF9zY2FsZSwuZ2FudHRfdGFza19zY2FsZXtjb2xvcjojNmI2YjZiO2ZvbnQtc2l6ZToxMnB4O2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNjZWNlY2U7Ym94LXNpemluZzpib3JkZXItYm94fS5nYW50dF9ncmlkX3NjYWxlLC5nYW50dF90YXNrX3NjYWxlLC5nYW50dF90YXNrX3ZzY3JvbGx7YmFja2dyb3VuZC1jb2xvcjojZmZmfS5nYW50dF9zY2FsZV9saW5le2JveC1zaXppbmc6Ym9yZGVyLWJveDstbW96LWJveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXItdG9wOjFweCBzb2xpZCAjY2VjZWNlfS5nYW50dF9zY2FsZV9saW5lOmZpcnN0LWNoaWxke2JvcmRlci10b3A6bm9uZX0uZ2FudHRfZ3JpZF9oZWFkX2NlbGx7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wO2JvcmRlci1yaWdodDoxcHggc29saWQgI2NlY2VjZTt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjpyZWxhdGl2ZTtjdXJzb3I6ZGVmYXVsdDtoZWlnaHQ6MTAwJTtib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7bGluZS1oZWlnaHQ6MzNweDstbW96LXVzZXItc2VsZWN0Oi1tb3otbm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZTtvdmVyZmxvdzpoaWRkZW59LmdhbnR0X3NjYWxlX2xpbmV7Y2xlYXI6Ym90aH0uZ2FudHRfZ3JpZF9kYXRhe3dpZHRoOjEwMCU7b3ZlcmZsb3c6aGlkZGVuO3Bvc2l0aW9uOnJlbGF0aXZlfS5nYW50dF9yb3d7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Oi1tb3otbm9uZX0uZ2FudHRfYWRkLC5nYW50dF9ncmlkX2hlYWRfYWRke3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5SnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU15MWpNREV4SURZMkxqRTBOVFkyTVN3Z01qQXhNaTh3TWk4d05pMHhORG8xTmpveU55QWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROaUFvVjJsdVpHOTNjeWtpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TlRRM01qTXlNRU5ETmtJME1URkZNams0TVRJNVFUZzNNRGhGTkRWRFFUa2lJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZOVFEzTWpNeU1FUkROa0kwTVRGRk1qazRNVEk1UVRnM01EaEZORFZEUVRraVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEbzFORGN5TXpJd1FVTTJRalF4TVVVeU9UZ3hNamxCT0Rjd09FVTBOVU5CT1NJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRvMU5EY3lNekl3UWtNMlFqUXhNVVV5T1RneE1qbEJPRGN3T0VVME5VTkJPU0l2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUHNoWlQ4VUFBQUJiU1VSQlZIamFZclRkZVptQkVzQ0VSKzR3RVArSDRzUGtHR0NEZzAyMEFSUjdnYjRHSUFjWURLTURkUG5EeUFiWWtHRzVEVlc5Y0lRTXZVZEJCQXVVWTR2RHo4aUFjWmluQTJ6Z0NIcUFZUU1zZUF5d0pjWUZBQUVHQU0rVUZHdW9oRmN6QUFBQUFFbEZUa1N1UW1DQyk7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCU7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O2N1cnNvcjpwb2ludGVyO3Bvc2l0aW9uOnJlbGF0aXZlOy1tb3otb3BhY2l0eTouMztvcGFjaXR5Oi4zfS5nYW50dF9ncmlkX2hlYWRfY2VsbC5nYW50dF9ncmlkX2hlYWRfYWRkey1tb3otb3BhY2l0eTouNjtvcGFjaXR5Oi42O3RvcDowfS5nYW50dF9ncmlkX2hlYWRfY2VsbC5nYW50dF9ncmlkX2hlYWRfYWRkOmhvdmVyey1tb3otb3BhY2l0eToxO29wYWNpdHk6MX0uZ2FudHRfZ3JpZF9kYXRhIC5nYW50dF9yb3cub2RkOmhvdmVyLC5nYW50dF9ncmlkX2RhdGEgLmdhbnR0X3Jvdzpob3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiNmZmYzYTF9LmdhbnR0X2dyaWRfZGF0YSAuZ2FudHRfcm93Lm9kZDpob3ZlciAuZ2FudHRfYWRkLC5nYW50dF9ncmlkX2RhdGEgLmdhbnR0X3Jvdzpob3ZlciAuZ2FudHRfYWRkey1tb3otb3BhY2l0eToxO29wYWNpdHk6MX0uZ2FudHRfcm93LC5nYW50dF90YXNrX3Jvd3tib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWJlYmViO2JhY2tncm91bmQtY29sb3I6I2ZmZn0uZ2FudHRfcm93Lm9kZCwuZ2FudHRfdGFza19yb3cub2Rke2JhY2tncm91bmQtY29sb3I6I2ZmZn0uZ2FudHRfY2VsbCwuZ2FudHRfZ3JpZF9oZWFkX2NlbGwsLmdhbnR0X3JvdywuZ2FudHRfc2NhbGVfY2VsbCwuZ2FudHRfdGFza19jZWxsLC5nYW50dF90YXNrX3Jvd3tib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3h9LmdhbnR0X2dyaWRfaGVhZF9jZWxsLC5nYW50dF9zY2FsZV9jZWxse2xpbmUtaGVpZ2h0OmluaGVyaXR9LmdhbnR0X2dyaWRfc2NhbGUgLmdhbnR0X2dyaWRfY29sdW1uX3Jlc2l6ZV93cmFwe2N1cnNvcjpjb2wtcmVzaXplO3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjEzcHg7bWFyZ2luLWxlZnQ6LTdweH0uZ2FudHRfZ3JpZF9jb2x1bW5fcmVzaXplX3dyYXAgLmdhbnR0X2dyaWRfY29sdW1uX3Jlc2l6ZXtiYWNrZ3JvdW5kLWNvbG9yOiNjZWNlY2U7aGVpZ2h0OjEwMCU7d2lkdGg6MXB4O21hcmdpbjowIGF1dG99LmdhbnR0X3Rhc2tfZ3JpZF9yb3dfcmVzaXplX3dyYXB7Y3Vyc29yOnJvdy1yZXNpemU7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjEzcHg7bWFyZ2luLXRvcDotN3B4O2xlZnQ6MDt3aWR0aDoxMDAlfS5nYW50dF90YXNrX2dyaWRfcm93X3Jlc2l6ZV93cmFwIC5nYW50dF90YXNrX2dyaWRfcm93X3Jlc2l6ZXtiYWNrZ3JvdW5kLWNvbG9yOiNlYmViZWI7dG9wOjZweDtoZWlnaHQ6MXB4O3dpZHRoOjEwMCU7bWFyZ2luOjAgYXV0bztwb3NpdGlvbjpyZWxhdGl2ZX0uZ2FudHRfZHJhZ19tYXJrZXIuZ2FudHRfZ3JpZF9yZXNpemVfYXJlYSwuZ2FudHRfZHJhZ19tYXJrZXIuZ2FudHRfcm93X2dyaWRfcmVzaXplX2FyZWF7YmFja2dyb3VuZC1jb2xvcjpoc2xhKDAsMCUsOTElLC41KTtoZWlnaHQ6MTAwJTt3aWR0aDoxMDAlO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uZ2FudHRfZHJhZ19tYXJrZXIuZ2FudHRfZ3JpZF9yZXNpemVfYXJlYXtib3JkZXItbGVmdDoxcHggc29saWQgI2NlY2VjZTtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNjZWNlY2V9LmdhbnR0X2RyYWdfbWFya2VyLmdhbnR0X3Jvd19ncmlkX3Jlc2l6ZV9hcmVhe2JvcmRlci10b3A6MXB4IHNvbGlkICNjZWNlY2U7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NlY2VjZTtwb2ludGVyLWV2ZW50czpub25lfS5nYW50dF9yb3d7ZGlzcGxheTpmbGV4fS5nYW50dF9yb3c+ZGl2e2ZsZXgtc2hyaW5rOjA7ZmxleC1ncm93OjB9LmdhbnR0X2NlbGx7dmVydGljYWwtYWxpZ246dG9wO2JvcmRlci1yaWdodDoxcHggc29saWQgI2ViZWJlYjtwYWRkaW5nLWxlZnQ6NnB4O3BhZGRpbmctcmlnaHQ6NnB4O2hlaWdodDoxMDAlO292ZXJmbG93OmhpZGRlbjt3aGl0ZS1zcGFjZTpub3dyYXA7Zm9udC1zaXplOjEzcHh9LmdhbnR0X2NlbGxfdHJlZXtkaXNwbGF5OmZsZXg7ZmxleC13cmFwOm5vd3JhcH0uZ2FudHRfZ3JpZF9kYXRhIC5nYW50dF9sYXN0X2NlbGwsLmdhbnR0X2dyaWRfc2NhbGUgLmdhbnR0X2xhc3RfY2VsbCwuZ2FudHRfdGFzayAuZ2FudHRfdGFza19zY2FsZSAuZ2FudHRfc2NhbGVfY2VsbC5nYW50dF9sYXN0X2NlbGwsLmdhbnR0X3Rhc2tfYmcgLmdhbnR0X2xhc3RfY2VsbHtib3JkZXItcmlnaHQtd2lkdGg6MH0uZ2FudHRfdGFzayAuZ2FudHRfdGFza19zY2FsZSAuZ2FudHRfc2NhbGVfY2VsbC5nYW50dF9sYXN0X2NlbGx7Ym9yZGVyLXJpZ2h0LXdpZHRoOjFweH0uZ2FudHRfdGFza19iZ3tvdmVyZmxvdzpoaWRkZW59LmdhbnR0X3NjYWxlX2NlbGx7ZGlzcGxheTppbmxpbmUtYmxvY2s7d2hpdGUtc3BhY2U6bm93cmFwO292ZXJmbG93OmhpZGRlbjtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNjZWNlY2U7dGV4dC1hbGlnbjpjZW50ZXI7aGVpZ2h0OjEwMCV9LmdhbnR0X3Rhc2tfY2VsbHtkaXNwbGF5OmlubGluZS1ibG9jaztoZWlnaHQ6MTAwJTtib3JkZXItcmlnaHQ6MXB4IHNvbGlkICNlYmViZWJ9LmdhbnR0X2xheW91dF9jZWxsLmdhbnR0X3Zlcl9zY3JvbGx7d2lkdGg6MDtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2hlaWdodDoxcHg7b3ZlcmZsb3cteDpoaWRkZW47b3ZlcmZsb3cteTpzY3JvbGw7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6MDt6LWluZGV4OjF9LmdhbnR0X3Zlcl9zY3JvbGw+ZGl2e3dpZHRoOjFweDtoZWlnaHQ6MXB4fS5nYW50dF9ob3Jfc2Nyb2xse2hlaWdodDowO2JhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7d2lkdGg6MTAwJTtjbGVhcjpib3RoO292ZXJmbG93LXg6c2Nyb2xsO292ZXJmbG93LXk6aGlkZGVufS5nYW50dF9sYXlvdXRfY2VsbCAuZ2FudHRfaG9yX3Njcm9sbHtwb3NpdGlvbjphYnNvbHV0ZX0uZ2FudHRfaG9yX3Njcm9sbD5kaXZ7d2lkdGg6NTAwMHB4O2hlaWdodDoxcHh9LmdhbnR0X3RyZWVfaWNvbiwuZ2FudHRfdHJlZV9pbmRlbnR7ZmxleC1ncm93OjA7ZmxleC1zaHJpbms6MH0uZ2FudHRfdHJlZV9pbmRlbnR7d2lkdGg6MTVweDtoZWlnaHQ6MTAwJX0uZ2FudHRfdHJlZV9jb250ZW50LC5nYW50dF90cmVlX2ljb257dmVydGljYWwtYWxpZ246dG9wfS5nYW50dF90cmVlX2ljb257d2lkdGg6MjhweDtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7YmFja2dyb3VuZC1wb3NpdGlvbjo1MCV9LmdhbnR0X3RyZWVfY29udGVudHtoZWlnaHQ6MTAwJTt3aGl0ZS1zcGFjZTpub3dyYXA7bWluLXdpZHRoOjB9LmdhbnR0X3RyZWVfaWNvbi5nYW50dF9vcGVue2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQklBQUFBU0NBWUFBQUJXem81WEFBQUFya2xFUVZRNFQyTmtvQkpncEpJNURFUEFvRk9uVHYwL2MrWU1RUitibUpnd21KbVp3WDJFNGJWcDA2YjlqNHlNWk9EZzRNQnAySThmUHhpV0wxL09rSldWTlVBR2NYSnlNbnovL2gzdVFySmRSTEZCSUFQUUFjaGxKTHNJRnVDTWpJd00vLy8vQjVzSk1vUmtnMkN1SWR0clFjSEJET3hzYkhCZkNRZ0lNSHo0OEFITy8vbnJGOE82dFdzSlI3Kzd1enNESXhNVHpuVDAvOTgvaHAwN2QrSTNpR29wbTJEZXdLRmc4T1YrQUpXa2ZSTXJUb2JMQUFBQUFFbEZUa1N1UW1DQyk7d2lkdGg6MThweDtjdXJzb3I6cG9pbnRlcn0uZ2FudHRfdHJlZV9pY29uLmdhbnR0X2Nsb3Nle2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQklBQUFBU0NBWUFBQUJXem81WEFBQUFrVWxFUVZRNFQyTmtvQkpncEpJNURFUEFvRk9uVHYwL2MrWU1RUitibUpnd21KbVp3WDJFNGJWcDA2YjlqNHlNWk9EZzRNQnAySThmUHhpV0wxL09rSldWTmVJTjR1VGt4QWluNzkrL001QWNSdGdDSEdRSXlRYmhpamFpRFFvS0RtWmdaMlBER2YwL2YvMWlXTGQyTGVIb2QzZDNaMkJrWXNKcDBQOS8veGgyN3R5SjN5Q3FwV3lDZVFPSGdzR1grd0VacFc0VDVMQ3hLd0FBQUFCSlJVNUVya0pnZ2c9PSk7d2lkdGg6MThweDtjdXJzb3I6cG9pbnRlcn0uZ2FudHRfdHJlZV9pY29uLmdhbnR0X2JsYW5re3dpZHRoOjE4cHh9LmdhbnR0X3RyZWVfaWNvbi5nYW50dF9mb2xkZXJfb3BlbntiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJJQUFBQVNDQVlBQUFCV3pvNVhBQUFBczBsRVFWUTRUNjJUMFEyRUlCQkVwUWx6dWFhTXNRb3Fvb3FMc1NsamJNTExtTXhtVVhCUjRVK1F0N016aTJzcUxWZUowMFNnRU1LV0FudnZ6WUx5QXlIZlQ1c1UyZlhESlN3Q0FYSzhNSTAvVVRrdmE3SUlGSnNnM05Td25LZEZvS3RBV09RMUNON0NFcWVUb3RFNUw3UXlKaG1CY2tsWk00WmdUaUFyM2lPVTNrRDkzcHBPNVNrTWpCMUVlWGRCV29Ta1JxbDNZZUlSZStjR3ZrdFMwNTZKUjl3c21lQlVrdWpDZk5YV0NQQzhHdWdQcW41aWkvaFYrRm9BQUFBQVNVVk9SSzVDWUlJPSl9LmdhbnR0X3RyZWVfaWNvbi5nYW50dF9mb2xkZXJfY2xvc2Vke2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQklBQUFBU0NBWUFBQUJXem81WEFBQUFmRWxFUVZRNFQyTmtvQkpncEpJNURDZ0dUWjgrL1Q4Mmd6TXpNd2xhQ0ZjQU0wUktRZ3lySS8wRGcvRWFobUlReUJCMERSdlhyNFc3OHRtTFYxZ3RBYm1Zb0VFZ25jaUc0UXBUb2d6Q0Z5RXdTeWcyQ0JTMm9DQVpOUWgzY0EraE1BSjVBbGNLeHVWQmxPZ25OZ1ZqTXd5VXJRam1hbUtMR2FvWkJBQU9URnlMbkZGVzR3QUFBQUJKUlU1RXJrSmdnZz09KX0uZ2FudHRfdHJlZV9pY29uLmdhbnR0X2ZpbGV7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCSUFBQUFTQ0FZQUFBQld6bzVYQUFBQWVFbEVRVlE0VDJOa29CSmdSRFpuK3ZUcC93bVptNW1aaWFJSHBoN0RJQ2tKTVVKbU1mZ0hCbU1ZaHRVZ2JBbzNybCtMNGxwME5VUWJCUEkydW11UkRhUElJRkFZd0F5anYwSG9NUUFMTTVKZGhHNFFMTXhHRGNLZHlJZG9HSUU4OU96Rks0S1pGNVJsOEVZL1FST1FGR0ExaUJRRDBOVUNBSlZqY3hPMG5hQVFBQUFBQUVsRlRrU3VRbUNDKX0uZ2FudHRfZ3JpZF9oZWFkX2NlbGwgLmdhbnR0X3NvcnR7cG9zaXRpb246YWJzb2x1dGU7cmlnaHQ6NXB4O3RvcDo4cHg7d2lkdGg6N3B4O2hlaWdodDoxM3B4O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtiYWNrZ3JvdW5kLXBvc2l0aW9uOjUwJX0uZ2FudHRfZ3JpZF9oZWFkX2NlbGwgLmdhbnR0X3NvcnQuZ2FudHRfYXNje2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBTkNBWUFBQUJseVhTMUFBQUFSVWxFUVZSNG5HTmdRQUtHeGliL0diQUJrSVM3YjhCL0RBVXdDUmlHSzBDWHdGQkFiMURmUC9VL0xzendId2kyWDdxRmdVRUFyQnRkQVZ3Q0JtQUtNQ1NRRlNEekFXWFhhT0hzWGVxa0FBQUFBRWxGVGtTdVFtQ0MpfS5nYW50dF9ncmlkX2hlYWRfY2VsbCAuZ2FudHRfc29ydC5nYW50dF9kZXNje2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQWNBQUFBTkNBWUFBQUJseVhTMUFBQUFSVWxFUVZSNDJtTmdRQUwxL1ZQL00yQURJSW50RjIvOXgxQUFscmgwQzQ3aENtQTYwREZZd1g4OGdJRkd3TkRZNUQ4dURGYmc3aHZ3SHgyam1JQlRBbGtCMGU0QkFFamxhTnRCV0pQbkFBQUFBRWxGVGtTdVFtQ0MpfS5nYW50dF9pbnNlcnRlZCwuZ2FudHRfdXBkYXRlZHtmb250LXdlaWdodDo3MDB9LmdhbnR0X2RlbGV0ZWR7dGV4dC1kZWNvcmF0aW9uOmxpbmUtdGhyb3VnaH0uZ2FudHRfaW52YWxpZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmUwZTB9LmdhbnR0X2Vycm9ye2NvbG9yOnJlZH0uZ2FudHRfc3RhdHVze3JpZ2h0OjFweDtwYWRkaW5nOjVweCAxMHB4O2JhY2tncm91bmQ6aHNsYSgwLDAlLDYxJSwuMSk7cG9zaXRpb246YWJzb2x1dGU7dG9wOjFweDt0cmFuc2l0aW9uOm9wYWNpdHkgLjJzO29wYWNpdHk6MH0uZ2FudHRfc3RhdHVzLmdhbnR0X3N0YXR1c192aXNpYmxle29wYWNpdHk6MX0jZ2FudHRfYWpheF9kb3RzIHNwYW57dHJhbnNpdGlvbjpvcGFjaXR5IC4ycztiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7b3BhY2l0eTowfSNnYW50dF9hamF4X2RvdHMgc3Bhbi5nYW50dF9kb3RfdmlzaWJsZXtvcGFjaXR5OjF9LmdhbnR0X2NvbHVtbl9kcmFnX21hcmtlcntib3JkZXI6MXB4IHNvbGlkICNjZWNlY2U7b3BhY2l0eTouOH0uZ2FudHRfZ3JpZF9oZWFkX2NlbGxfZHJhZ2dlZHtib3JkZXI6MXB4IHNvbGlkICNjZWNlY2U7b3BhY2l0eTouM30uZ2FudHRfZ3JpZF90YXJnZXRfbWFya2Vye3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOjJweDtoZWlnaHQ6MTAwJTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmEwMTE7dHJhbnNmb3JtOnRyYW5zbGF0ZVgoLTFweCl9LmdhbnR0X2dyaWRfdGFyZ2V0X21hcmtlcjphZnRlciwuZ2FudHRfZ3JpZF90YXJnZXRfbWFya2VyOmJlZm9yZXtkaXNwbGF5OmJsb2NrO2NvbnRlbnQ6XCJcIjtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0Oi01cHg7d2lkdGg6MDtoZWlnaHQ6MDtib3JkZXI6NnB4IHNvbGlkIHRyYW5zcGFyZW50fS5nYW50dF9ncmlkX3RhcmdldF9tYXJrZXI6YmVmb3Jle2JvcmRlci10b3AtY29sb3I6I2ZmYTAxMX0uZ2FudHRfZ3JpZF90YXJnZXRfbWFya2VyOmFmdGVye2JvdHRvbTowO2JvcmRlci1ib3R0b20tY29sb3I6I2ZmYTAxMX0uZ2FudHRfbWVzc2FnZV9hcmVhe3Bvc2l0aW9uOmZpeGVkO3JpZ2h0OjVweDt3aWR0aDoyNTBweDt6LWluZGV4OjEwMDB9LmdhbnR0LWluZm97bWluLXdpZHRoOjEyMHB4O3BhZGRpbmc6NHB4IDRweCA0cHggMjBweDtmb250LWZhbWlseTpBcmlhbDt6LWluZGV4OjEwMDAwO21hcmdpbjo1cHg7bWFyZ2luLWJvdHRvbToxMHB4O3RyYW5zaXRpb246YWxsIC41cyBlYXNlfS5nYW50dC1pbmZvLmhpZGRlbntoZWlnaHQ6MDtwYWRkaW5nOjA7Ym9yZGVyLXdpZHRoOjA7bWFyZ2luOjA7b3ZlcmZsb3c6aGlkZGVufS5nYW50dF9tb2RhbF9ib3h7b3ZlcmZsb3c6aGlkZGVuO2Rpc3BsYXk6aW5saW5lLWJsb2NrO21pbi13aWR0aDoyNTBweDt3aWR0aDoyNTBweDt0ZXh0LWFsaWduOmNlbnRlcjtwb3NpdGlvbjpmaXhlZDt6LWluZGV4OjIwMDAwO2JveC1zaGFkb3c6M3B4IDNweCAzcHggcmdiYSgwLDAsMCwuMDcpO2ZvbnQtZmFtaWx5OkFyaWFsO2JvcmRlci1yYWRpdXM6NnB4O2JvcmRlcjoxcHggc29saWQgI2NlY2VjZTtiYWNrZ3JvdW5kOiNmZmZ9LmdhbnR0X3BvcHVwX3RpdGxle2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NnB4O2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjZweDtib3JkZXItd2lkdGg6MH0uZ2FudHRfYnV0dG9uLC5nYW50dF9wb3B1cF9idXR0b257Ym9yZGVyOjFweCBzb2xpZCAjY2VjZWNlO2hlaWdodDozMHB4O2xpbmUtaGVpZ2h0OjMwcHg7ZGlzcGxheTppbmxpbmUtYmxvY2s7bWFyZ2luOjAgNXB4O2JvcmRlci1yYWRpdXM6NHB4O2JhY2tncm91bmQ6I2ZmZn0uZ2FudHQtaW5mbywuZ2FudHRfYnV0dG9uLC5nYW50dF9wb3B1cF9idXR0b257dXNlci1zZWxlY3Q6bm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1vei11c2VyLXNlbGVjdDotbW96LW5vbmU7Y3Vyc29yOnBvaW50ZXJ9LmdhbnR0X3BvcHVwX3RleHR7b3ZlcmZsb3c6aGlkZGVufS5nYW50dF9wb3B1cF9jb250cm9sc3tib3JkZXItcmFkaXVzOjZweDtwYWRkaW5nOjEwcHh9LmdhbnR0X3BvcHVwX2J1dHRvbnttaW4td2lkdGg6MTAwcHh9ZGl2LmRoeF9tb2RhbF9jb3ZlcntiYWNrZ3JvdW5kLWNvbG9yOiMwMDA7Y3Vyc29yOmRlZmF1bHQ7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5BbHBoYShvcGFjaXR5PTIwKTtvcGFjaXR5Oi4yO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTk5OTk7bGVmdDowO3RvcDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym9yZGVyOm5vbmU7em9vbToxfS5nYW50dC1pbmZvIGltZywuZ2FudHRfbW9kYWxfYm94IGltZ3tmbG9hdDpsZWZ0O21hcmdpbi1yaWdodDoyMHB4fS5nYW50dC1hbGVydC1lcnJvciwuZ2FudHQtY29uZmlybS1lcnJvcntib3JkZXI6MXB4IHNvbGlkIHJlZH0uZ2FudHRfYnV0dG9uIGlucHV0LC5nYW50dF9wb3B1cF9idXR0b24gZGl2e2JvcmRlci1yYWRpdXM6NHB4O2ZvbnQtc2l6ZToxNHB4O2JveC1zaXppbmc6Y29udGVudC1ib3g7cGFkZGluZzowO21hcmdpbjowO3ZlcnRpY2FsLWFsaWduOnRvcH0uZ2FudHRfcG9wdXBfdGl0bGV7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NlY2VjZTtoZWlnaHQ6NDBweDtsaW5lLWhlaWdodDo0MHB4O2ZvbnQtc2l6ZToyMHB4fS5nYW50dF9wb3B1cF90ZXh0e21hcmdpbjoxNXB4IDE1cHggNXB4O2ZvbnQtc2l6ZToxNHB4O2NvbG9yOiMwMDA7bWluLWhlaWdodDozMHB4O2JvcmRlci1yYWRpdXM6NnB4fS5nYW50dC1lcnJvciwuZ2FudHQtaW5mb3tmb250LXNpemU6MTRweDtjb2xvcjojMDAwO2JveC1zaGFkb3c6M3B4IDNweCAzcHggcmdiYSgwLDAsMCwuMDcpO3BhZGRpbmc6MDtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLXJhZGl1czozcHg7Ym9yZGVyOjFweCBzb2xpZCAjZmZmfS5nYW50dC1pbmZvIGRpdntwYWRkaW5nOjVweCAxMHB4O2JhY2tncm91bmQtY29sb3I6I2ZmZjtib3JkZXItcmFkaXVzOjNweDtib3JkZXI6MXB4IHNvbGlkICNjZWNlY2V9LmdhbnR0LWVycm9ye2JhY2tncm91bmQtY29sb3I6I2Q4MWIxYjtib3JkZXI6MXB4IHNvbGlkICNmZjNjM2N9LmdhbnR0LWVycm9yIGRpdntiYWNrZ3JvdW5kLWNvbG9yOiNkODFiMWI7Ym9yZGVyOjFweCBzb2xpZCAjOTQwMDAwO2NvbG9yOiNmZmZ9LmdhbnR0LXdhcm5pbmd7YmFja2dyb3VuZC1jb2xvcjojZmY5MDAwO2JvcmRlcjoxcHggc29saWQgI2ZmYTYzM30uZ2FudHQtd2FybmluZyBkaXZ7YmFja2dyb3VuZC1jb2xvcjojZmY5MDAwO2JvcmRlcjoxcHggc29saWQgI2IzNjUwMDtjb2xvcjojZmZmfS5nYW50dF9kYXRhX2FyZWEgZGl2LC5nYW50dF9ncmlkIGRpdnstbXMtdG91Y2gtYWN0aW9uOm5vbmU7LXdlYmtpdC10YXAtaGlnaGxpZ2h0LWNvbG9yOnJnYmEoMCwwLDAsMCl9LmdhbnR0X2RhdGFfYXJlYXtwb3NpdGlvbjpyZWxhdGl2ZTtvdmVyZmxvdy14OmhpZGRlbjtvdmVyZmxvdy15OmhpZGRlbjstbW96LXVzZXItc2VsZWN0Oi1tb3otbm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uZ2FudHRfbGlua3NfYXJlYXtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjB9LmdhbnR0X3NpZGVfY29udGVudCwuZ2FudHRfdGFza19jb250ZW50LC5nYW50dF90YXNrX3Byb2dyZXNze2xpbmUtaGVpZ2h0OmluaGVyaXQ7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDoxMDAlfS5nYW50dF90YXNrX2NvbnRlbnR7Zm9udC1zaXplOjEycHg7Y29sb3I6I2ZmZjt3aWR0aDoxMDAlO3RvcDowO2N1cnNvcjpwb2ludGVyO3Bvc2l0aW9uOmFic29sdXRlO3doaXRlLXNwYWNlOm5vd3JhcDt0ZXh0LWFsaWduOmNlbnRlcn0uZ2FudHRfdGFza19wcm9ncmVzc3t0ZXh0LWFsaWduOmNlbnRlcjt6LWluZGV4OjA7YmFja2dyb3VuZDojMjk5Y2I0fS5nYW50dF90YXNrX3Byb2dyZXNzX3dyYXBwZXJ7Ym9yZGVyLXJhZGl1czppbmhlcml0O3Bvc2l0aW9uOnJlbGF0aXZlO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7b3ZlcmZsb3c6aGlkZGVufS5nYW50dF90YXNrX2xpbmV7Ym9yZGVyLXJhZGl1czoycHg7cG9zaXRpb246YWJzb2x1dGU7Ym94LXNpemluZzpib3JkZXItYm94O2JhY2tncm91bmQtY29sb3I6IzNkYjlkMztib3JkZXI6MXB4IHNvbGlkICMyODk4YjA7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Oi1tb3otbm9uZX0uZ2FudHRfdGFza19saW5lLmdhbnR0X2RyYWdfbW92ZSBkaXZ7Y3Vyc29yOm1vdmV9LmdhbnR0X3RvdWNoX21vdmUsLmdhbnR0X3RvdWNoX3Byb2dyZXNzIC5nYW50dF90b3VjaF9yZXNpemV7dHJhbnNmb3JtOnNjYWxlKDEuMDIsMS4xKTt0cmFuc2Zvcm0tb3JpZ2luOjUwJX0uZ2FudHRfdG91Y2hfcHJvZ3Jlc3MgLmdhbnR0X3Rhc2tfcHJvZ3Jlc3NfZHJhZywuZ2FudHRfdG91Y2hfcmVzaXplIC5nYW50dF90YXNrX2RyYWd7dHJhbnNmb3JtOnNjYWxlWSgxLjMpO3RyYW5zZm9ybS1vcmlnaW46NTAlfS5nYW50dF9zaWRlX2NvbnRlbnR7cG9zaXRpb246YWJzb2x1dGU7d2hpdGUtc3BhY2U6bm93cmFwO2NvbG9yOiM2ZTZlNmU7dG9wOjA7Zm9udC1zaXplOjExcHh9LmdhbnR0X3NpZGVfY29udGVudC5nYW50dF9sZWZ0e3JpZ2h0OjEwMCU7cGFkZGluZy1yaWdodDoyMHB4fS5nYW50dF9zaWRlX2NvbnRlbnQuZ2FudHRfcmlnaHR7bGVmdDoxMDAlO3BhZGRpbmctbGVmdDoyMHB4fS5nYW50dF9zaWRlX2NvbnRlbnQuZ2FudHRfbGlua19jcm9zc2luZ3tib3R0b206OC43NXB4O3RvcDphdXRvfS5nYW50dF9saW5rX2Fycm93LC5nYW50dF90YXNrX2xpbmsgLmdhbnR0X2xpbmVfd3JhcHBlcntwb3NpdGlvbjphYnNvbHV0ZTtjdXJzb3I6cG9pbnRlcn0uZ2FudHRfbGluZV93cmFwcGVyIGRpdntiYWNrZ3JvdW5kLWNvbG9yOiNmZmEwMTF9LmdhbnR0X3Rhc2tfbGluazpob3ZlciAuZ2FudHRfbGluZV93cmFwcGVyIGRpdntib3gtc2hhZG93OjAgMCA1cHggMCAjZmZhMDExfS5nYW50dF90YXNrX2xpbmsgZGl2LmdhbnR0X2xpbmtfYXJyb3d7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDtib3JkZXItc3R5bGU6c29saWQ7d2lkdGg6MDtoZWlnaHQ6MH0uZ2FudHRfbGlua19jb250cm9se3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjIwcHg7dG9wOjB9LmdhbnR0X2xpbmtfY29udHJvbCBkaXZ7ZGlzcGxheTpub25lO2N1cnNvcjpwb2ludGVyO2JveC1zaXppbmc6Ym9yZGVyLWJveDtwb3NpdGlvbjpyZWxhdGl2ZTt0b3A6NTAlO21hcmdpbi10b3A6LTcuNXB4O3ZlcnRpY2FsLWFsaWduOm1pZGRsZTtib3JkZXI6MXB4IHNvbGlkICM5MjkyOTI7Ym9yZGVyLXJhZGl1czo2LjVweDtoZWlnaHQ6MTNweDt3aWR0aDoxM3B4O2JhY2tncm91bmQtY29sb3I6I2YwZjBmMH0uZ2FudHRfbGlua19jb250cm9sLnRhc2tfcmlnaHQgZGl2LmdhbnR0X2xpbmtfcG9pbnR7bWFyZ2luLWxlZnQ6N3B4fS5nYW50dF9saW5rX2NvbnRyb2wgZGl2OmhvdmVye2JhY2tncm91bmQtY29sb3I6I2ZmZn0uZ2FudHRfbGlua19jb250cm9sLnRhc2tfbGVmdHtsZWZ0Oi0yMHB4fS5nYW50dF9saW5rX2NvbnRyb2wudGFza19yaWdodHtyaWdodDotMjBweH0uZ2FudHRfbGlua190YXJnZXQgLmdhbnR0X2xpbmtfY29udHJvbCBkaXYsLmdhbnR0X3Rhc2tfbGluZS5nYW50dF9kcmFnX21vdmUgLmdhbnR0X2xpbmtfY29udHJvbCBkaXYsLmdhbnR0X3Rhc2tfbGluZS5nYW50dF9kcmFnX21vdmUgLmdhbnR0X3Rhc2tfZHJhZywuZ2FudHRfdGFza19saW5lLmdhbnR0X2RyYWdfbW92ZSAuZ2FudHRfdGFza19wcm9ncmVzc19kcmFnLC5nYW50dF90YXNrX2xpbmUuZ2FudHRfZHJhZ19wcm9ncmVzcyAuZ2FudHRfbGlua19jb250cm9sIGRpdiwuZ2FudHRfdGFza19saW5lLmdhbnR0X2RyYWdfcHJvZ3Jlc3MgLmdhbnR0X3Rhc2tfZHJhZywuZ2FudHRfdGFza19saW5lLmdhbnR0X2RyYWdfcHJvZ3Jlc3MgLmdhbnR0X3Rhc2tfcHJvZ3Jlc3NfZHJhZywuZ2FudHRfdGFza19saW5lLmdhbnR0X2RyYWdfcmVzaXplIC5nYW50dF9saW5rX2NvbnRyb2wgZGl2LC5nYW50dF90YXNrX2xpbmUuZ2FudHRfZHJhZ19yZXNpemUgLmdhbnR0X3Rhc2tfZHJhZywuZ2FudHRfdGFza19saW5lLmdhbnR0X2RyYWdfcmVzaXplIC5nYW50dF90YXNrX3Byb2dyZXNzX2RyYWcsLmdhbnR0X3Rhc2tfbGluZS5nYW50dF9zZWxlY3RlZCAuZ2FudHRfbGlua19jb250cm9sIGRpdiwuZ2FudHRfdGFza19saW5lLmdhbnR0X3NlbGVjdGVkIC5nYW50dF90YXNrX2RyYWcsLmdhbnR0X3Rhc2tfbGluZS5nYW50dF9zZWxlY3RlZCAuZ2FudHRfdGFza19wcm9ncmVzc19kcmFnLC5nYW50dF90YXNrX2xpbmU6aG92ZXIgLmdhbnR0X2xpbmtfY29udHJvbCBkaXYsLmdhbnR0X3Rhc2tfbGluZTpob3ZlciAuZ2FudHRfdGFza19kcmFnLC5nYW50dF90YXNrX2xpbmU6aG92ZXIgLmdhbnR0X3Rhc2tfcHJvZ3Jlc3NfZHJhZ3tkaXNwbGF5OmJsb2NrfS5nYW50dF9saW5rX3NvdXJjZSwuZ2FudHRfbGlua190YXJnZXR7Ym94LXNoYWRvdzowIDAgM3B4ICMzZGI5ZDN9LmdhbnR0X2xpbmtfdGFyZ2V0LmxpbmtfZmluaXNoX2FsbG93LC5nYW50dF9saW5rX3RhcmdldC5saW5rX3N0YXJ0X2FsbG93e2JveC1zaGFkb3c6MCAwIDNweCAjZmZiZjVlfS5nYW50dF9saW5rX3RhcmdldC5saW5rX2ZpbmlzaF9kZW55LC5nYW50dF9saW5rX3RhcmdldC5saW5rX3N0YXJ0X2Rlbnl7Ym94LXNoYWRvdzowIDAgM3B4ICNlODdlN2J9LmxpbmtfZmluaXNoX2FsbG93IC5nYW50dF9saW5rX2NvbnRyb2wudGFza19lbmRfZGF0ZSBkaXYsLmxpbmtfc3RhcnRfYWxsb3cgLmdhbnR0X2xpbmtfY29udHJvbC50YXNrX3N0YXJ0X2RhdGUgZGl2e2JhY2tncm91bmQtY29sb3I6I2ZmYmY1ZTtib3JkZXItY29sb3I6I2ZmYTAxMX0ubGlua19maW5pc2hfZGVueSAuZ2FudHRfbGlua19jb250cm9sLnRhc2tfZW5kX2RhdGUgZGl2LC5saW5rX3N0YXJ0X2RlbnkgLmdhbnR0X2xpbmtfY29udHJvbC50YXNrX3N0YXJ0X2RhdGUgZGl2e2JhY2tncm91bmQtY29sb3I6I2U4N2U3Yjtib3JkZXItY29sb3I6I2RkM2UzYX0uZ2FudHRfbGlua19hcnJvd19yaWdodHtib3JkZXItd2lkdGg6NHB4IDAgNHB4IDZweDtib3JkZXItdG9wLWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtib3JkZXItcmlnaHQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O2JvcmRlci1ib3R0b20tY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50O2JvcmRlci1sZWZ0LWNvbG9yOiNmZmEwMTF9LmdhbnR0X2xpbmtfYXJyb3dfbGVmdHtib3JkZXItd2lkdGg6NHB4IDZweCA0cHggMDttYXJnaW4tdG9wOi0xcHg7Ym9yZGVyLXRvcC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Ym9yZGVyLXJpZ2h0LWNvbG9yOiNmZmEwMTE7Ym9yZGVyLWJvdHRvbS1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Ym9yZGVyLWxlZnQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50fS5nYW50dF9saW5rX2Fycm93X3Vwe2JvcmRlci13aWR0aDowIDRweCA2cHg7Ym9yZGVyLWNvbG9yOnRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmEwMTE7Ym9yZGVyLXRvcC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Ym9yZGVyLXJpZ2h0LWNvbG9yOnRyYW5zcGFyZW50IWltcG9ydGFudDtib3JkZXItYm90dG9tLWNvbG9yOiNmZmEwMTE7Ym9yZGVyLWxlZnQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50fS5nYW50dF9saW5rX2Fycm93X2Rvd257Ym9yZGVyLXdpZHRoOjRweCA2cHggMCA0cHg7Ym9yZGVyLXRvcC1jb2xvcjojZmZhMDExO2JvcmRlci1yaWdodC1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Ym9yZGVyLWJvdHRvbS1jb2xvcjp0cmFuc3BhcmVudCFpbXBvcnRhbnQ7Ym9yZGVyLWxlZnQtY29sb3I6dHJhbnNwYXJlbnQhaW1wb3J0YW50fS5nYW50dF90YXNrX2RyYWcsLmdhbnR0X3Rhc2tfcHJvZ3Jlc3NfZHJhZ3tjdXJzb3I6ZXctcmVzaXplO2Rpc3BsYXk6bm9uZTtwb3NpdGlvbjphYnNvbHV0ZX0uZ2FudHRfdGFza19kcmFnLnRhc2tfcmlnaHR7Y3Vyc29yOmUtcmVzaXplfS5nYW50dF90YXNrX2RyYWcudGFza19sZWZ0e2N1cnNvcjp3LXJlc2l6ZX0uZ2FudHRfdGFza19kcmFne2hlaWdodDoxMDAlO3dpZHRoOjhweDt6LWluZGV4OjE7dG9wOi0xcHh9LmdhbnR0X3Rhc2tfZHJhZy50YXNrX2xlZnR7bGVmdDotN3B4fS5nYW50dF90YXNrX2RyYWcudGFza19yaWdodHtyaWdodDotN3B4fS5nYW50dF90YXNrX3Byb2dyZXNzX2RyYWd7aGVpZ2h0OjhweDt3aWR0aDo4cHg7Ym90dG9tOi00cHg7bWFyZ2luLWxlZnQ6LTRweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmJvdHRvbTtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQUxDQVlBQUFCMjRnMDVBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlKcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5pQW9WMmx1Wkc5M2N5a2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNa1kzUmprMFJVVkRNa1l6TVRGRk1rSTFPVGhFUVRBM09EVTBPVGt6TUVFaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk1rWTNSamswUlVaRE1rWXpNVEZGTWtJMU9UaEVRVEEzT0RVME9Ua3pNRUVpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRveVJqZEdPVFJGUTBNeVJqTXhNVVV5UWpVNU9FUkJNRGM0TlRRNU9UTXdRU0lnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG95UmpkR09UUkZSRU15UmpNeE1VVXlRalU1T0VSQk1EYzROVFE1T1RNd1FTSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9Qb2JQQnpJQUFBRGtTVVJCVkhqYVlwazJiUm9ERHNBRXhMMVFkakVRLzhPbWlBV0haazRnWHF5bXFoUU00dHk2ZlU4T1NNVUE4WGRpREJBQjRrMGE2aXFXUmdhNkVLY3dNUVhkdUhsbkw1RHBCOFJ2MEoySkRGU0ErSmlPdGdaY013aUEyQ0F4a0J4VURWWURMRUFLZ0lwVjlYUTBNWndGRWdQSkFabkhvV3BSREFnQzRuMlc1c2FpUUtmakNsUUdrQnhRRGNpTCs2QjZ3QWJrQS9FcUp3ZHJUa1VGT1FaQ0FLUUdwQmJJWEEzU0N6SmdnbytYSzdPRXVCZ0RzUUNrRnFnSHJCZnNCVDVlSGdaU0FVd1AySUJmdjM2VGJBQk1EeWdkdEsxWnY2VUVTTE9SYUFiSWhHNkFBQU1BS044d0UyNERYV2NBQUFBQVNVVk9SSzVDWUlJPSk7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O3otaW5kZXg6MX0uZ2FudHRfdGFza19wcm9ncmVzc19kcmFnOmhvdmVye2JhY2tncm91bmQtaW1hZ2U6dXJsKGRhdGE6aW1hZ2UvcG5nO2Jhc2U2NCxpVkJPUncwS0dnb0FBQUFOU1VoRVVnQUFBQkFBQUFBTENBWUFBQUIyNGcwNUFBQUFCbUpMUjBRQS93RC9BUCtndmFlVEFBQUFDWEJJV1hNQUFBc1RBQUFMRXdFQW1wd1lBQUFBczBsRVFWUW96NldNUFc3Q1FCZ0ZKeFphaVo2MHFjZ2R3alZNbXp1OGdwd2hEVUxhYlh5QmRIQUd1elJIaXZRaVFab3ZpZ1MyK0p0dTk1dDVUMDNUTUlUdEN0akVjNVZTT2d4NWs1RjRDbnhKV2dLVVVsNXN2NmVVdmsvZGFpQ2VBZTFmRENDcEJ0cTRqUS9ZbmdPOXBNV3BHSDk5T09jRHR0OGlmbVdFdU8zRC9SK3dYUU9kcEdjdUlHa0dkTkZRMlJhd2xUVGxTc0xkMlJZNTUrTzk1SnlQRlEveThNQUUrQ3lsZkFEcHh2WUhXUDhDWGorSlI0d2RLSFlBQUFBQVNVVk9SSzVDWUlJPSl9LmdhbnR0X2xpbmtfdG9vbHRpcHtib3gtc2hhZG93OjNweCAzcHggM3B4ICM4ODg7YmFja2dyb3VuZC1jb2xvcjojZmZmO2JvcmRlci1sZWZ0OjFweCBkb3R0ZWQgI2NlY2VjZTtib3JkZXItdG9wOjFweCBkb3R0ZWQgI2NlY2VjZTtmb250LWZhbWlseTpUYWhvbWE7Zm9udC1zaXplOjhwdDtjb2xvcjojNDQ0O3BhZGRpbmc6NnB4O2xpbmUtaGVpZ2h0OjIwcHh9LmdhbnR0X2xpbmtfZGlyZWN0aW9ue2hlaWdodDowO2JvcmRlcjowIG5vbmUgI2ZmYTAxMTtib3JkZXItYm90dG9tLXN0eWxlOmRhc2hlZDtib3JkZXItYm90dG9tLXdpZHRoOjJweDt0cmFuc2Zvcm0tb3JpZ2luOjAgMDstbXMtdHJhbnNmb3JtLW9yaWdpbjowIDA7LXdlYmtpdC10cmFuc2Zvcm0tb3JpZ2luOjAgMDt6LWluZGV4OjI7bWFyZ2luLWxlZnQ6MXB4O3Bvc2l0aW9uOmFic29sdXRlfS5nYW50dF9ncmlkX2RhdGEgLmdhbnR0X3Jvdy5nYW50dF9zZWxlY3RlZCwuZ2FudHRfZ3JpZF9kYXRhIC5nYW50dF9yb3cub2RkLmdhbnR0X3NlbGVjdGVkLC5nYW50dF90YXNrX3Jvdy5nYW50dF9zZWxlY3RlZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmYzYTF9LmdhbnR0X3Rhc2tfcm93LmdhbnR0X3NlbGVjdGVkIC5nYW50dF90YXNrX2NlbGx7Ym9yZGVyLXJpZ2h0LWNvbG9yOiNmZmVjNmV9LmdhbnR0X3Rhc2tfbGluZS5nYW50dF9zZWxlY3RlZHtib3gtc2hhZG93OjAgMCA1cHggIzI5OWNiNH0uZ2FudHRfdGFza19saW5lLmdhbnR0X3Byb2plY3QuZ2FudHRfc2VsZWN0ZWR7Ym94LXNoYWRvdzowIDAgNXB4ICM0NmFkNTF9LmdhbnR0X3Rhc2tfbGluZS5nYW50dF9taWxlc3RvbmV7dmlzaWJpbGl0eTpoaWRkZW47YmFja2dyb3VuZC1jb2xvcjojZDMzZGFmO2JvcmRlcjowIHNvbGlkICM2MTE2NGY7Ym94LXNpemluZzpjb250ZW50LWJveDstbW96LWJveC1zaXppbmc6Y29udGVudC1ib3h9LmdhbnR0X3Rhc2tfbGluZS5nYW50dF9taWxlc3RvbmUgZGl2e3Zpc2liaWxpdHk6dmlzaWJsZX0uZ2FudHRfdGFza19saW5lLmdhbnR0X21pbGVzdG9uZSAuZ2FudHRfdGFza19jb250ZW50e2JhY2tncm91bmQ6aW5oZXJpdDtib3JkZXI6aW5oZXJpdDtib3JkZXItd2lkdGg6MXB4O2JvcmRlci1yYWRpdXM6aW5oZXJpdDtib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7dHJhbnNmb3JtOnJvdGF0ZSg0NWRlZyl9LmdhbnR0X3Rhc2tfbGluZS5nYW50dF90YXNrX2lubGluZV9jb2xvcntib3JkZXItY29sb3I6Izk5OX0uZ2FudHRfdGFza19saW5lLmdhbnR0X3Rhc2tfaW5saW5lX2NvbG9yIC5nYW50dF90YXNrX3Byb2dyZXNze2JhY2tncm91bmQtY29sb3I6IzM2MzYzNjtvcGFjaXR5Oi4yfS5nYW50dF90YXNrX2xpbmUuZ2FudHRfdGFza19pbmxpbmVfY29sb3IuZ2FudHRfcHJvamVjdC5nYW50dF9zZWxlY3RlZCwuZ2FudHRfdGFza19saW5lLmdhbnR0X3Rhc2tfaW5saW5lX2NvbG9yLmdhbnR0X3NlbGVjdGVke2JveC1zaGFkb3c6MCAwIDVweCAjOTk5fS5nYW50dF90YXNrX2xpbmsuZ2FudHRfbGlua19pbmxpbmVfY29sb3I6aG92ZXIgLmdhbnR0X2xpbmVfd3JhcHBlciBkaXZ7Ym94LXNoYWRvdzowIDAgNXB4IDAgIzk5OX0uZ2FudHRfY3JpdGljYWxfdGFza3tiYWNrZ3JvdW5kLWNvbG9yOiNlNjMwMzA7Ym9yZGVyLWNvbG9yOiM5ZDNhM2F9LmdhbnR0X2NyaXRpY2FsX3Rhc2sgLmdhbnR0X3Rhc2tfcHJvZ3Jlc3N7YmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwwLC40KX0uZ2FudHRfY3JpdGljYWxfbGluayAuZ2FudHRfbGluZV93cmFwcGVyPmRpdntiYWNrZ3JvdW5kLWNvbG9yOiNlNjMwMzB9LmdhbnR0X2NyaXRpY2FsX2xpbmsgLmdhbnR0X2xpbmtfYXJyb3d7Ym9yZGVyLWNvbG9yOiNlNjMwMzB9LmdhbnR0X2J0bl9zZXQ6Zm9jdXMsLmdhbnR0X2NlbGw6Zm9jdXMsLmdhbnR0X2dyaWRfaGVhZF9jZWxsOmZvY3VzLC5nYW50dF9wb3B1cF9idXR0b246Zm9jdXMsLmdhbnR0X3FpX2JpZ19pY29uOmZvY3VzLC5nYW50dF9yb3c6Zm9jdXN7Ym94LXNoYWRvdzppbnNldCAwIDAgMXB4IDFweCAjNGQ5MGZlfS5nYW50dF9zcGxpdF9wYXJlbnQsLmdhbnR0X3NwbGl0X3N1YnByb2plY3R7b3BhY2l0eTouMTtwb2ludGVyLWV2ZW50czpub25lfS5nYW50dF9yb2xsdXBfY2hpbGQgLmdhbnR0X2xpbmtfY29udHJvbCwuZ2FudHRfcm9sbHVwX2NoaWxkOmhvdmVyIC5nYW50dF9saW5rX2NvbnRyb2x7ZGlzcGxheTpub25lfS5nYW50dF91bnNlbGVjdGFibGUsLmdhbnR0X3Vuc2VsZWN0YWJsZSBkaXZ7LXdlYmtpdC11c2VyLXNlbGVjdDpub25lOy1tb3otdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Oi1tb3otbm9uZX0uZ2FudHRfY2FsX2xpZ2h0ey13ZWJraXQtdGFwLWhpZ2hsaWdodC1jb2xvcjp0cmFuc3BhcmVudDtiYWNrZ3JvdW5kOiNmZmY7Ym9yZGVyLXJhZGl1czo2cHg7Zm9udC1mYW1pbHk6QXJpYWw7Zm9udC1zaXplOjEzcHg7Ym9yZGVyOjFweCBzb2xpZCAjY2VjZWNlO2NvbG9yOiM2YjZiNmI7Zm9udC1zaXplOjEycHg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDoxMDAwMTt3aWR0aDo1NTBweDtoZWlnaHQ6MjUwcHg7Ym94LXNoYWRvdzozcHggM3B4IDNweCByZ2JhKDAsMCwwLC4wNyl9LmdhbnR0X2NhbF9saWdodF93aWRle3dpZHRoOjY1MHB4fS5nYW50dF9jYWxfbGlnaHQgc2VsZWN0e2ZvbnQtZmFtaWx5OkFyaWFsO2JvcmRlcjoxcHggc29saWQgI2NlY2VjZTtmb250LXNpemU6MTNweDtwYWRkaW5nOjJweDttYXJnaW46MH0uZ2FudHRfY2FsX2x0aXRsZXtwYWRkaW5nOjdweCAxMHB4O292ZXJmbG93OmhpZGRlbjstd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6NnB4Oy13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowOy13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6NnB4Oy13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MDstbW96LWJvcmRlci1yYWRpdXMtdG9wbGVmdDo2cHg7LW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbWxlZnQ6MDstbW96LWJvcmRlci1yYWRpdXMtdG9wcmlnaHQ6NnB4Oy1tb3otYm9yZGVyLXJhZGl1cy1ib3R0b21yaWdodDowO2JvcmRlci10b3AtbGVmdC1yYWRpdXM6NnB4O2JvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6MDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo2cHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6MH0uZ2FudHRfY2FsX2x0aXRsZSwuZ2FudHRfY2FsX2x0aXRsZSBzcGFue3doaXRlLXNwYWNlOm5vd3JhcH0uZ2FudHRfY2FsX2xzZWN0aW9ue2NvbG9yOiM3MjcyNzI7Zm9udC13ZWlnaHQ6NzAwO3BhZGRpbmc6MTJweCAwIDVweCAxMHB4fS5nYW50dF9jYWxfbHNlY3Rpb24gLmdhbnR0X2Z1bGxkYXl7ZmxvYXQ6cmlnaHQ7bWFyZ2luLXJpZ2h0OjVweDtmb250LXNpemU6MTJweDtmb250LXdlaWdodDo0MDA7bGluZS1oZWlnaHQ6MjBweDt2ZXJ0aWNhbC1hbGlnbjp0b3A7Y3Vyc29yOnBvaW50ZXJ9LmdhbnR0X2NhbF9sc2VjdGlvbntmb250LXNpemU6MTNweH0uZ2FudHRfY2FsX2x0ZXh0e3BhZGRpbmc6MnB4IDEwcHg7b3ZlcmZsb3c6aGlkZGVufS5nYW50dF9jYWxfbHRleHQgdGV4dGFyZWF7b3ZlcmZsb3cteTphdXRvO292ZXJmbG93LXg6aGlkZGVuO2ZvbnQtZmFtaWx5OkFyaWFsO2ZvbnQtc2l6ZToxM3B4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6MXB4IHNvbGlkICNjZWNlY2U7aGVpZ2h0OjEwMCU7d2lkdGg6MTAwJTtvdXRsaW5lOm5vbmUhaW1wb3J0YW50O3Jlc2l6ZTpub25lfS5nYW50dF9zZWN0aW9uX2NvbnN0cmFpbnQgW2RhdGEtY29uc3RyYWludC10aW1lLXNlbGVjdF17bWFyZ2luLWxlZnQ6MjBweH0uZ2FudHRfdGltZXtmb250LXdlaWdodDo3MDB9LmdhbnR0X2NhbF9saWdodCAuZ2FudHRfdGl0bGV7cGFkZGluZy1sZWZ0OjEwcHh9LmdhbnR0X2NhbF9sYXJlYXtib3JkZXI6MXB4IHNvbGlkICNjZWNlY2U7Ym9yZGVyLWxlZnQ6bm9uZTtib3JkZXItcmlnaHQ6bm9uZTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7b3ZlcmZsb3c6aGlkZGVuO2hlaWdodDoxcHh9LmdhbnR0X2J0bl9zZXR7bWFyZ2luOjEwcHggN3B4IDVweCAxMHB4O3BhZGRpbmc6NXB4IDE1cHggNXB4IDEwcHg7ZmxvYXQ6bGVmdDtib3JkZXItcmFkaXVzOjRweDtib3JkZXI6MCBzb2xpZCAjY2VjZWNlO2hlaWdodDozMnB4O2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kOiNmZmY7Ym94LXNpemluZzpib3JkZXItYm94O2N1cnNvcjpwb2ludGVyfS5nYW50dF9oaWRkZW57ZGlzcGxheTpub25lfS5nYW50dF9idG5fc2V0IGRpdntmbG9hdDpsZWZ0O2ZvbnQtc2l6ZToxM3B4O2hlaWdodDoyMnB4O2xpbmUtaGVpZ2h0OjIycHg7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0O3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZ2FudHRfc2F2ZV9idG57YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5SnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU15MWpNREV4SURZMkxqRTBOVFkyTVN3Z01qQXhNaTh3TWk4d05pMHhORG8xTmpveU55QWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROaUFvVjJsdVpHOTNjeWtpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TVRrMU9VVTVSREZETXpBME1URkZNa0V4TVVaQlFUZEROREF6T1VFNVJqTWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZNVGsxT1VVNVJESkRNekEwTVRGRk1rRXhNVVpCUVRkRE5EQXpPVUU1UmpNaVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEb3hPVFU1UlRsRFJrTXpNRFF4TVVVeVFURXhSa0ZCTjBNME1ETTVRVGxHTXlJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRveE9UVTVSVGxFTUVNek1EUXhNVVV5UVRFeFJrRkJOME0wTURNNVFUbEdNeUl2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUGpEcm9YWUFBQUVYU1VSQlZIamFZdnovL3o4REpZQ1JVZ1BJQVV4QWJBbkVIaUFITUlCY1FDd0dhUllYRjNlNmV2WHFvZmZ2MzkvZHYzOC9DeW1hR1NVa0pCenYzTGx6Q3NqLy8vZnYzd2RBaWhra0lRbkV2a0FzaFU4ekx5K3Y3YTFidDA2QU5QLzc5Kzg3a0RJQXk1MDVjeWJxMDZkUHIzcDdlenV3R1FMVGZPUEdqV1AvRVNBWkxnOGtQS0JPK2cwMVJCSk5zeld5WnFDNnVTZ1dnSWcvZi80c2h4blMyZG5aQmpNRXFOa1NGR0JJbWk4Q0tUWU1BNEJZQ0dqSWN6UkRIQzVkdW5RUVNmTjdJS1dJNFVVa2pqZE1NZEN3bnc4ZVBMandIeFY0WXcxZ1pBNVE0N3ovMkVFTHpoaENFK0FCR3ZJUVdTZVF2d2NVMzhRYUFNTDJ3SGorQy9YM015QWxpamVCNFpCb0JPSVBRR3hKS0lWU25Cc0JBZ3dBQmRkQmNsV2ZjWlVBQUFBQVNVVk9SSzVDWUlJPSk7bWFyZ2luLXRvcDoycHg7d2lkdGg6MjFweH0uZ2FudHRfY2FuY2VsX2J0bnttYXJnaW4tdG9wOjJweDtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlKcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5pQW9WMmx1Wkc5M2N5a2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNRGt6TURBM016bERNekEwTVRGRk1qZzJRVFZGTXpGRVF6Z3dSa0pFUkRZaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk1Ea3pNREEzTTBGRE16QTBNVEZGTWpnMlFUVkZNekZFUXpnd1JrSkVSRFlpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRvd09UTXdNRGN6TjBNek1EUXhNVVV5T0RaQk5VVXpNVVJET0RCR1FrUkVOaUlnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG93T1RNd01EY3pPRU16TURReE1VVXlPRFpCTlVVek1VUkRPREJHUWtSRU5pSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QbVl1WU9VQUFBRWRTVVJCVkhqYVl2ei8vejhESllBRlhXRGx5cFU4UUtvSWlEMkEyQXdxZkFxSWR3QnhYM2g0K0JkazlZeklMZ0JxdGdkUzg0RllFWWVGOTRFNEVXaklRWmdBRTVMbVFDQjFBS29aWktNUEVBdEFNWWg5R1NwM0FLaldEOFVGUUFFaElQc2hFSU9jM3dIRU5VQmIvcUo1N1N5UU1vSnlQd0t4RWxETk8xZ1lGRUUxN3dNS1ZtSUpsek5RemVlZ3JqYUE2cW1CZWNFYlN2ZmgwR3dNeEdlQmhvUG9lbVE5TUFPMGtFSWJsMllUcVBBRktLMkliTUIzQWphYllJa1JabVFEN2tOcE15STBHMFBwTzhnR2JJVUZKajdOUURrMklOV0lySWNKS2ZCQUtjd0pxdmtjRHMwVGdGZ1hHbzE5S0NrUm1wRFdRZFdERWswTlVvQ0JvcTBGcWhrRS9JRVdiS0pLVW1aRXo0M1F6RlNLSXpOMTQ4MU01QUNBQUFNQWxmbC9sQ3dScGFnQUFBQUFTVVZPUks1Q1lJST0pO3dpZHRoOjIwcHh9LmdhbnR0X2RlbGV0ZV9idG57YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFCQUFBQUFRQ0FZQUFBQWY4LzloQUFBQUdYUkZXSFJUYjJaMGQyRnlaUUJCWkc5aVpTQkpiV0ZuWlZKbFlXUjVjY2xsUEFBQUF5SnBWRmgwV0UxTU9tTnZiUzVoWkc5aVpTNTRiWEFBQUFBQUFEdy9lSEJoWTJ0bGRDQmlaV2RwYmowaTc3dS9JaUJwWkQwaVZ6Vk5NRTF3UTJWb2FVaDZjbVZUZWs1VVkzcHJZemxrSWo4K0lEeDRPbmh0Y0cxbGRHRWdlRzFzYm5NNmVEMGlZV1J2WW1VNmJuTTZiV1YwWVM4aUlIZzZlRzF3ZEdzOUlrRmtiMkpsSUZoTlVDQkRiM0psSURVdU15MWpNREV4SURZMkxqRTBOVFkyTVN3Z01qQXhNaTh3TWk4d05pMHhORG8xTmpveU55QWdJQ0FnSUNBZ0lqNGdQSEprWmpwU1JFWWdlRzFzYm5NNmNtUm1QU0pvZEhSd09pOHZkM2QzTG5jekxtOXlaeTh4T1RrNUx6QXlMekl5TFhKa1ppMXplVzUwWVhndGJuTWpJajRnUEhKa1pqcEVaWE5qY21sd2RHbHZiaUJ5WkdZNllXSnZkWFE5SWlJZ2VHMXNibk02ZUcxd1BTSm9kSFJ3T2k4dmJuTXVZV1J2WW1VdVkyOXRMM2hoY0M4eExqQXZJaUI0Yld4dWN6cDRiWEJOVFQwaWFIUjBjRG92TDI1ekxtRmtiMkpsTG1OdmJTOTRZWEF2TVM0d0wyMXRMeUlnZUcxc2JuTTZjM1JTWldZOUltaDBkSEE2THk5dWN5NWhaRzlpWlM1amIyMHZlR0Z3THpFdU1DOXpWSGx3WlM5U1pYTnZkWEpqWlZKbFppTWlJSGh0Y0RwRGNtVmhkRzl5Vkc5dmJEMGlRV1J2WW1VZ1VHaHZkRzl6YUc5d0lFTlROaUFvVjJsdVpHOTNjeWtpSUhodGNFMU5Pa2x1YzNSaGJtTmxTVVE5SW5odGNDNXBhV1E2TWpGRU56STNOVU5ETXpBME1URkZNamhCTmpKR1FUYzNNVUl5UXpZek5FWWlJSGh0Y0UxTk9rUnZZM1Z0Wlc1MFNVUTlJbmh0Y0M1a2FXUTZNakZFTnpJM05VUkRNekEwTVRGRk1qaEJOakpHUVRjM01VSXlRell6TkVZaVBpQThlRzF3VFUwNlJHVnlhWFpsWkVaeWIyMGdjM1JTWldZNmFXNXpkR0Z1WTJWSlJEMGllRzF3TG1scFpEb3lNVVEzTWpjMVFVTXpNRFF4TVVVeU9FRTJNa1pCTnpjeFFqSkROak0wUmlJZ2MzUlNaV1k2Wkc5amRXMWxiblJKUkQwaWVHMXdMbVJwWkRveU1VUTNNamMxUWtNek1EUXhNVVV5T0VFMk1rWkJOemN4UWpKRE5qTTBSaUl2UGlBOEwzSmtaanBFWlhOamNtbHdkR2x2Ymo0Z1BDOXlaR1k2VWtSR1BpQThMM2c2ZUcxd2JXVjBZVDRnUEQ5NGNHRmphMlYwSUdWdVpEMGljaUkvUG1VRDBnQUFBQUJ2U1VSQlZIamFZdnovL3o4REl5TWpBeFlRaWNSZWppNEowb2ZLUU5QOEh3bWdHUWJYQjhJc1dHd0RTU3dEdWlvS2pZOXVCdGhWakZBWFlIVUdBUUEya1ltQlVvQVVCcEdrMExBd2dCdndIK1lYNG1rd3B0Z0xvd1lNUmdPSVRVeVlLUkZJTi93bkRqUWdKeVNBQUFNQXByeUt6TDh3amZVQUFBQUFTVVZPUks1Q1lJST0pO21hcmdpbi10b3A6MnB4O3dpZHRoOjIwcHh9LmdhbnR0X2NhbF9jb3Zlcnt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmZpeGVkO3otaW5kZXg6MTAwMDA7dG9wOjA7bGVmdDowO2JhY2tncm91bmQtY29sb3I6IzAwMDtvcGFjaXR5Oi4xO2ZpbHRlcjpwcm9naWQ6RFhJbWFnZVRyYW5zZm9ybS5NaWNyb3NvZnQuQWxwaGEob3BhY2l0eT0xMCl9LmdhbnR0X2N1c3RvbV9idXR0b257cGFkZGluZzowIDNweDtmb250LWZhbWlseTpBcmlhbDtmb250LXNpemU6MTNweDtmb250LXdlaWdodDo0MDA7bWFyZ2luLXJpZ2h0OjEwcHg7bWFyZ2luLXRvcDotNXB4O2N1cnNvcjpwb2ludGVyO2Zsb2F0OnJpZ2h0O2hlaWdodDoyMXB4O3dpZHRoOjkwcHg7Ym9yZGVyOjFweCBzb2xpZCAjY2VjZWNlO3RleHQtYWxpZ246Y2VudGVyO2JvcmRlci1yYWRpdXM6NHB4fS5nYW50dF9jdXN0b21fYnV0dG9uIGRpdntjdXJzb3I6cG9pbnRlcjtmbG9hdDpub25lO2hlaWdodDoyMXB4O2xpbmUtaGVpZ2h0OjIxcHg7dmVydGljYWwtYWxpZ246bWlkZGxlfS5nYW50dF9jdXN0b21fYnV0dG9uIGRpdjpmaXJzdC1jaGlsZHtkaXNwbGF5Om5vbmV9LmdhbnR0X2NhbF9saWdodF93aWRle3dpZHRoOjU4MHB4O3BhZGRpbmc6MnB4IDRweH0uZ2FudHRfY2FsX2xpZ2h0X3dpZGUgLmdhbnR0X2NhbF9sYXJlYXtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym9yZGVyOjFweCBzb2xpZCAjY2VjZWNlfS5nYW50dF9jYWxfbGlnaHRfd2lkZSAuZ2FudHRfY2FsX2xzZWN0aW9ue2JvcmRlcjowO2Zsb2F0OmxlZnQ7dGV4dC1hbGlnbjpyaWdodDt3aWR0aDo4MHB4O2hlaWdodDoyMHB4O3BhZGRpbmc6NXB4IDEwcHggMCAwfS5nYW50dF9jYWxfbGlnaHRfd2lkZSAuZ2FudHRfd3JhcF9zZWN0aW9ue3Bvc2l0aW9uOnJlbGF0aXZlO3BhZGRpbmc6MTBweCAwO292ZXJmbG93OmhpZGRlbjtib3JkZXItYm90dG9tOjFweCBzb2xpZCAjZWJlYmVifS5nYW50dF9jYWxfbGlnaHRfd2lkZSAuZ2FudHRfc2VjdGlvbl90aW1le292ZXJmbG93OmhpZGRlbjtwYWRkaW5nLXRvcDoycHghaW1wb3J0YW50O3BhZGRpbmctcmlnaHQ6MDtoZWlnaHQ6MjBweCFpbXBvcnRhbnR9LmdhbnR0X2NhbF9saWdodF93aWRlIC5nYW50dF9jYWxfbHRleHR7cGFkZGluZy1yaWdodDowfS5nYW50dF9jYWxfbGlnaHRfd2lkZSAuZ2FudHRfY2FsX2xhcmVhe3BhZGRpbmc6MCAxMHB4O3dpZHRoOjEwMCV9LmdhbnR0X2NhbF9saWdodF93aWRlIC5nYW50dF9zZWN0aW9uX3RpbWV7YmFja2dyb3VuZDp0cmFuc3BhcmVudH0uZ2FudHRfY2FsX2xpZ2h0X3dpZGUgLmdhbnR0X2NhbF9jaGVja2JveCBsYWJlbHtwYWRkaW5nLWxlZnQ6MH0uZ2FudHRfY2FsX2xpZ2h0X3dpZGUgLmdhbnR0X2NhbF9sc2VjdGlvbiAuZ2FudHRfZnVsbGRheXtmbG9hdDpub25lO21hcmdpbi1yaWdodDowO2ZvbnQtd2VpZ2h0OjcwMDtjdXJzb3I6cG9pbnRlcn0uZ2FudHRfY2FsX2xpZ2h0X3dpZGUgLmdhbnR0X2N1c3RvbV9idXR0b257cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7cmlnaHQ6MDttYXJnaW4tdG9wOjJweH0uZ2FudHRfY2FsX2xpZ2h0X3dpZGUgLmdhbnR0X3JlcGVhdF9yaWdodHttYXJnaW4tcmlnaHQ6NTVweH0uZ2FudHRfY2FsX2xpZ2h0X3dpZGUuZ2FudHRfY2FsX2xpZ2h0X2Z1bGx7d2lkdGg6NzM4cHh9LmdhbnR0X2NhbF93aWRlX2NoZWNrYm94IGlucHV0e21hcmdpbi10b3A6OHB4O21hcmdpbi1sZWZ0OjE0cHh9LmdhbnR0X2NhbF9saWdodCBpbnB1dHtmb250LXNpemU6MTNweH0uZ2FudHRfc2VjdGlvbl90aW1le2JhY2tncm91bmQtY29sb3I6I2ZmZjt3aGl0ZS1zcGFjZTpub3dyYXA7cGFkZGluZzoycHggMTBweCA1cHg7cGFkZGluZy10b3A6MnB4IWltcG9ydGFudH0uZ2FudHRfc2VjdGlvbl90aW1lIC5nYW50dF90aW1lX3NlbGVjdHN7ZmxvYXQ6bGVmdDtoZWlnaHQ6MjVweH0uZ2FudHRfc2VjdGlvbl90aW1lIC5nYW50dF90aW1lX3NlbGVjdHMgc2VsZWN0e2hlaWdodDoyM3B4O3BhZGRpbmc6MnB4O2JvcmRlcjoxcHggc29saWQgI2NlY2VjZX0uZ2FudHRfZHVyYXRpb257d2lkdGg6MTAwcHg7aGVpZ2h0OjIzcHg7ZmxvYXQ6bGVmdDt3aGl0ZS1zcGFjZTpub3dyYXA7bWFyZ2luLWxlZnQ6MjBweDtsaW5lLWhlaWdodDoyM3B4fS5nYW50dF9kdXJhdGlvbiAuZ2FudHRfZHVyYXRpb25fZGVjLC5nYW50dF9kdXJhdGlvbiAuZ2FudHRfZHVyYXRpb25faW5jLC5nYW50dF9kdXJhdGlvbiAuZ2FudHRfZHVyYXRpb25fdmFsdWV7Ym94LXNpemluZzpib3JkZXItYm94O3RleHQtYWxpZ246Y2VudGVyO3ZlcnRpY2FsLWFsaWduOnRvcDtoZWlnaHQ6MTAwJTtib3JkZXI6MXB4IHNvbGlkICNjZWNlY2V9LmdhbnR0X2R1cmF0aW9uIC5nYW50dF9kdXJhdGlvbl92YWx1ZXt3aWR0aDo0MHB4O3BhZGRpbmc6M3B4IDRweDtib3JkZXItbGVmdC13aWR0aDowO2JvcmRlci1yaWdodC13aWR0aDowfS5nYW50dF9kdXJhdGlvbiAuZ2FudHRfZHVyYXRpb25fdmFsdWUuZ2FudHRfZHVyYXRpb25fdmFsdWVfZm9ybWF0dGVke3dpZHRoOjcwcHh9LmdhbnR0X2R1cmF0aW9uIC5nYW50dF9kdXJhdGlvbl9kZWMsLmdhbnR0X2R1cmF0aW9uIC5nYW50dF9kdXJhdGlvbl9pbmN7d2lkdGg6MjBweDtwYWRkaW5nOjFweDtwYWRkaW5nLWJvdHRvbToxcHg7YmFja2dyb3VuZDojZmZmfS5nYW50dF9kdXJhdGlvbiAuZ2FudHRfZHVyYXRpb25fZGVjey1tb3otYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHg7LW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjRweDstd2Via2l0LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6NHB4Oy13ZWJraXQtYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo0cHh9LmdhbnR0X2R1cmF0aW9uIC5nYW50dF9kdXJhdGlvbl9pbmN7bWFyZ2luLXJpZ2h0OjRweDstbW96LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDstbW96LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDstd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjRweDstd2Via2l0LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOjRweDtib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo0cHg7Ym9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6NHB4fS5nYW50dF9yZXNvdXJjZXN7bWF4LWhlaWdodDoxNTBweDtoZWlnaHQ6YXV0bztvdmVyZmxvdy15OmF1dG99LmdhbnR0X3Jlc291cmNlX3Jvd3tkaXNwbGF5OmJsb2NrO3BhZGRpbmc6MTBweCAwO2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNlYmViZWI7Y3Vyc29yOnBvaW50ZXJ9LmdhbnR0X3Jlc291cmNlX3JvdyBpbnB1dFt0eXBlPWNoZWNrYm94XTpub3QoOmNoZWNrZWQpLC5nYW50dF9yZXNvdXJjZV9yb3cgaW5wdXRbdHlwZT1jaGVja2JveF06bm90KDpjaGVja2VkKX5kaXZ7b3BhY2l0eTouNX0uZ2FudHRfcmVzb3VyY2VfdG9nZ2xle3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZ2FudHRfcmVzb3VyY2VzX2ZpbHRlciAuZ2FudHRfcmVzb3VyY2VzX2ZpbHRlcl9pbnB1dHtwYWRkaW5nOjFweCAycHg7Ym94LXNpemluZzpib3JkZXItYm94fS5nYW50dF9yZXNvdXJjZXNfZmlsdGVyIC5zd2l0Y2hfdW5zZXR0ZWR7dmVydGljYWwtYWxpZ246bWlkZGxlfS5nYW50dF9yZXNvdXJjZV9jZWxse2Rpc3BsYXk6aW5saW5lLWJsb2NrfS5nYW50dF9yZXNvdXJjZV9jZWxsLmdhbnR0X3Jlc291cmNlX2NlbGxfY2hlY2tib3h7d2lkdGg6MjRweDttYXgtd2lkdGg6MjRweDttaW4td2lkdGg6MjRweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmdhbnR0X3Jlc291cmNlX2NlbGwuZ2FudHRfcmVzb3VyY2VfY2VsbF9sYWJlbHt3aWR0aDo0MCU7bWF4LXdpZHRoOjQwJTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmdhbnR0X3Jlc291cmNlX2NlbGwuZ2FudHRfcmVzb3VyY2VfY2VsbF92YWx1ZXt3aWR0aDozMCU7bWF4LXdpZHRoOjMwJTt2ZXJ0aWNhbC1hbGlnbjptaWRkbGV9LmdhbnR0X3Jlc291cmNlX2NlbGwuZ2FudHRfcmVzb3VyY2VfY2VsbF92YWx1ZSBpbnB1dCwuZ2FudHRfcmVzb3VyY2VfY2VsbC5nYW50dF9yZXNvdXJjZV9jZWxsX3ZhbHVlIHNlbGVjdHt3aWR0aDo4MCU7dmVydGljYWwtYWxpZ246bWlkZGxlO3BhZGRpbmc6MXB4IDJweDtib3gtc2l6aW5nOmJvcmRlci1ib3h9LmdhbnR0X3Jlc291cmNlX2NlbGwuZ2FudHRfcmVzb3VyY2VfY2VsbF91bml0e3dpZHRoOjEwJTttYXgtd2lkdGg6MTAlO3ZlcnRpY2FsLWFsaWduOm1pZGRsZX0uZ2FudHRfcmVzb3VyY2VfZWFybHlfdmFsdWV7b3BhY2l0eTouODtmb250LXNpemU6LjllbX0uZ2FudHRfY2FsX3F1aWNrX2luZm97Ym9yZGVyOjFweCBzb2xpZCAjY2VjZWNlO2JvcmRlci1yYWRpdXM6NnB4O3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MzAwO2JveC1zaGFkb3c6M3B4IDNweCAzcHggcmdiYSgwLDAsMCwuMDcpO2JhY2tncm91bmQtY29sb3I6I2ZmZjt3aWR0aDozMDBweDt0cmFuc2l0aW9uOmxlZnQgLjVzIGVhc2UscmlnaHQgLjVzOy1tb3otdHJhbnNpdGlvbjpsZWZ0IC41cyBlYXNlLHJpZ2h0IC41czstd2Via2l0LXRyYW5zaXRpb246bGVmdCAuNXMgZWFzZSxyaWdodCAuNXM7LW8tdHJhbnNpdGlvbjpsZWZ0IC41cyBlYXNlLHJpZ2h0IC41c30uZ2FudHRfbm9fYW5pbWF0ZXt0cmFuc2l0aW9uOm5vbmU7LW1vei10cmFuc2l0aW9uOm5vbmU7LXdlYmtpdC10cmFuc2l0aW9uOm5vbmU7LW8tdHJhbnNpdGlvbjpub25lfS5nYW50dF9jYWxfcXVpY2tfaW5mby5nYW50dF9xaV9sZWZ0IC5nYW50dF9xaV9iaWdfaWNvbntmbG9hdDpyaWdodH0uZ2FudHRfY2FsX3FpX3RpdGxley13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czo2cHg7LXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjA7LXdlYmtpdC1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czo2cHg7LXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowOy1tb3otYm9yZGVyLXJhZGl1cy10b3BsZWZ0OjZweDstbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDowOy1tb3otYm9yZGVyLXJhZGl1cy10b3ByaWdodDo2cHg7LW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OjA7Ym9yZGVyLXRvcC1sZWZ0LXJhZGl1czo2cHg7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czowO2JvcmRlci10b3AtcmlnaHQtcmFkaXVzOjZweDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czowO3BhZGRpbmc6NXB4IDAgOHB4IDEycHg7Y29sb3I6IzQ1NDU0NTtiYWNrZ3JvdW5kLWNvbG9yOiNmZmY7Ym9yZGVyLWJvdHRvbToxcHggc29saWQgI2NlY2VjZX0uZ2FudHRfY2FsX3FpX3RkYXRle2ZvbnQtc2l6ZToxNHB4O2ZvbnQtd2VpZ2h0OjcwMH0uZ2FudHRfY2FsX3FpX3Rjb250ZW50e2ZvbnQtc2l6ZToxM3B4fS5nYW50dF9jYWxfcWlfY29udGVudHtwYWRkaW5nOjE2cHggOHB4O2ZvbnQtc2l6ZToxM3B4O2NvbG9yOiM0NTQ1NDU7b3ZlcmZsb3c6aGlkZGVufS5nYW50dF9jYWxfcWlfY29udHJvbHN7LXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7LXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOjZweDstd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOjA7LXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo2cHg7LW1vei1ib3JkZXItcmFkaXVzLXRvcGxlZnQ6MDstbW96LWJvcmRlci1yYWRpdXMtYm90dG9tbGVmdDo2cHg7LW1vei1ib3JkZXItcmFkaXVzLXRvcHJpZ2h0OjA7LW1vei1ib3JkZXItcmFkaXVzLWJvdHRvbXJpZ2h0OjZweDtib3JkZXItdG9wLWxlZnQtcmFkaXVzOjA7Ym9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czo2cHg7Ym9yZGVyLXRvcC1yaWdodC1yYWRpdXM6MDtib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czo2cHg7cGFkZGluZy1sZWZ0OjdweH0uZ2FudHRfY2FsX3FpX2NvbnRyb2xzIC5nYW50dF9tZW51X2ljb257bWFyZ2luLXRvcDo2cHg7YmFja2dyb3VuZC1yZXBlYXQ6bm8tcmVwZWF0fS5nYW50dF9jYWxfcWlfY29udHJvbHMgLmdhbnR0X21lbnVfaWNvbi5pY29uX2VkaXR7d2lkdGg6MjBweDtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJRQUFBQVVDQVlBQUFDTmlSME5BQUFBQm1KTFIwUUEvd0QvQVArZ3ZhZVRBQUFBQ1hCSVdYTUFBQTdFQUFBT3hBR1ZLdzRiQUFBQUIzUkpUVVVIM1FZRkNqSTVaUWo1YkFBQUFGTkpSRUZVT012dDB6RU9BQ0FJQTBEa3dUeW1IOGJKVFJUS1pHSlh5YVdFS1BLVENRQUg0THMzN2NJdGNEVXpzeEhORExaTmhDcTdHdDF3aDlFclY3RWp5R0FoeUdMcGhsbnNDbFd1UzMycm4wY3pBVit2TkdyTS9MQnRBQUFBQUVsRlRrU3VRbUNDKX0uZ2FudHRfY2FsX3FpX2NvbnRyb2xzIC5nYW50dF9tZW51X2ljb24uaWNvbl9kZWxldGV7d2lkdGg6MjBweDtiYWNrZ3JvdW5kLWltYWdlOnVybChkYXRhOmltYWdlL3BuZztiYXNlNjQsaVZCT1J3MEtHZ29BQUFBTlNVaEVVZ0FBQUJBQUFBQVFDQVlBQUFBZjgvOWhBQUFBR1hSRldIUlRiMlowZDJGeVpRQkJaRzlpWlNCSmJXRm5aVkpsWVdSNWNjbGxQQUFBQXlKcFZGaDBXRTFNT21OdmJTNWhaRzlpWlM1NGJYQUFBQUFBQUR3L2VIQmhZMnRsZENCaVpXZHBiajBpNzd1L0lpQnBaRDBpVnpWTk1FMXdRMlZvYVVoNmNtVlRlazVVWTNwcll6bGtJajgrSUR4NE9uaHRjRzFsZEdFZ2VHMXNibk02ZUQwaVlXUnZZbVU2Ym5NNmJXVjBZUzhpSUhnNmVHMXdkR3M5SWtGa2IySmxJRmhOVUNCRGIzSmxJRFV1TXkxak1ERXhJRFkyTGpFME5UWTJNU3dnTWpBeE1pOHdNaTh3TmkweE5EbzFOam95TnlBZ0lDQWdJQ0FnSWo0Z1BISmtaanBTUkVZZ2VHMXNibk02Y21SbVBTSm9kSFJ3T2k4dmQzZDNMbmN6TG05eVp5OHhPVGs1THpBeUx6SXlMWEprWmkxemVXNTBZWGd0Ym5NaklqNGdQSEprWmpwRVpYTmpjbWx3ZEdsdmJpQnlaR1k2WVdKdmRYUTlJaUlnZUcxc2JuTTZlRzF3UFNKb2RIUndPaTh2Ym5NdVlXUnZZbVV1WTI5dEwzaGhjQzh4TGpBdklpQjRiV3h1Y3pwNGJYQk5UVDBpYUhSMGNEb3ZMMjV6TG1Ga2IySmxMbU52YlM5NFlYQXZNUzR3TDIxdEx5SWdlRzFzYm5NNmMzUlNaV1k5SW1oMGRIQTZMeTl1Y3k1aFpHOWlaUzVqYjIwdmVHRndMekV1TUM5elZIbHdaUzlTWlhOdmRYSmpaVkpsWmlNaUlIaHRjRHBEY21WaGRHOXlWRzl2YkQwaVFXUnZZbVVnVUdodmRHOXphRzl3SUVOVE5pQW9WMmx1Wkc5M2N5a2lJSGh0Y0UxTk9rbHVjM1JoYm1ObFNVUTlJbmh0Y0M1cGFXUTZNakZFTnpJM05VTkRNekEwTVRGRk1qaEJOakpHUVRjM01VSXlRell6TkVZaUlIaHRjRTFOT2tSdlkzVnRaVzUwU1VROUluaHRjQzVrYVdRNk1qRkVOekkzTlVSRE16QTBNVEZGTWpoQk5qSkdRVGMzTVVJeVF6WXpORVlpUGlBOGVHMXdUVTA2UkdWeWFYWmxaRVp5YjIwZ2MzUlNaV1k2YVc1emRHRnVZMlZKUkQwaWVHMXdMbWxwWkRveU1VUTNNamMxUVVNek1EUXhNVVV5T0VFMk1rWkJOemN4UWpKRE5qTTBSaUlnYzNSU1pXWTZaRzlqZFcxbGJuUkpSRDBpZUcxd0xtUnBaRG95TVVRM01qYzFRa016TURReE1VVXlPRUUyTWtaQk56Y3hRakpETmpNMFJpSXZQaUE4TDNKa1pqcEVaWE5qY21sd2RHbHZiajRnUEM5eVpHWTZVa1JHUGlBOEwzZzZlRzF3YldWMFlUNGdQRDk0Y0dGamEyVjBJR1Z1WkQwaWNpSS9QbVVEMGdBQUFBQnZTVVJCVkhqYVl2ei8vejhESXlNakF4WVFpY1Jlamk0SjBvZktRTlA4SHdtZ0dRYlhCOElzV0d3RFNTd0R1aW9Lalk5dUJ0aFZqRkFYWUhVR0FRQTJrWW1CVW9BVUJwR2swTEF3Z0J2d0grWVg0bWt3cHRnTG93WU1SZ09JVFV5WUtSRklOL3duRGpRZ0p5U0FBQU1BcHJ5S3pMOHdqZlVBQUFBQVNVVk9SSzVDWUlJPSl9LmdhbnR0X3FpX2JpZ19pY29ue2ZvbnQtc2l6ZToxM3B4O2JvcmRlci1yYWRpdXM6NHB4O2ZvbnQtd2VpZ2h0OjcwMDtiYWNrZ3JvdW5kOiNmZmY7bWFyZ2luOjVweCA5cHggOHB4IDA7bWluLXdpZHRoOjYwcHg7bGluZS1oZWlnaHQ6MzJweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7cGFkZGluZzowIDEwcHggMCA1cHg7Y3Vyc29yOnBvaW50ZXI7Ym9yZGVyOjFweCBzb2xpZCAjY2VjZWNlfS5nYW50dF9jYWxfcWlfY29udHJvbHMgZGl2e2Zsb2F0OmxlZnQ7aGVpZ2h0OjMycHg7dGV4dC1hbGlnbjpjZW50ZXI7bGluZS1oZWlnaHQ6MzJweH0uZ2FudHRfdG9vbHRpcHtwYWRkaW5nOjEwcHg7cG9zaXRpb246YWJzb2x1dGU7ei1pbmRleDo1MDt3aGl0ZS1zcGFjZTpub3dyYXB9LmdhbnR0X3Jlc291cmNlX21hcmtlcntwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjtmb250LXNpemU6MTRweDtjb2xvcjojZmZmfS5nYW50dF9yZXNvdXJjZV9tYXJrZXJfb2t7YmFja2dyb3VuZDpyZ2JhKDc4LDIwOCwxMzQsLjc1KX0uZ2FudHRfcmVzb3VyY2VfbWFya2VyX292ZXJ0aW1le2JhY2tncm91bmQ6aHNsYSgwLDEwMCUsNzYlLC42OSl9LmdhbnR0X2hpc3RvZ3JhbV9sYWJlbHt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO3otaW5kZXg6MTtmb250LXdlaWdodDo3MDA7Zm9udC1zaXplOjEzcHh9LmdhbnR0X2hpc3RvZ3JhbV9maWxse2JhY2tncm91bmQtY29sb3I6cmdiYSg0MSwxNTcsMTgwLC4yKTt3aWR0aDoxMDAlO3Bvc2l0aW9uOmFic29sdXRlO2JvdHRvbTowfS5nYW50dF9oaXN0b2dyYW1faG9yX2JhcntoZWlnaHQ6MXB4O21hcmdpbi10b3A6LTFweH0uZ2FudHRfaGlzdG9ncmFtX2hvcl9iYXIsLmdhbnR0X2hpc3RvZ3JhbV92ZXJ0X2Jhcntwb3NpdGlvbjphYnNvbHV0ZTtiYWNrZ3JvdW5kOiMyOTlkYjQ7bWFyZ2luLWxlZnQ6LTFweH0uZ2FudHRfaGlzdG9ncmFtX3ZlcnRfYmFye3dpZHRoOjFweH0uZ2FudHRfaGlzdG9ncmFtX2NlbGx7cG9zaXRpb246YWJzb2x1dGU7dGV4dC1hbGlnbjpjZW50ZXI7Zm9udC1zaXplOjEzcHg7Y29sb3I6IzAwMH0uZ2FudHRfbWFya2Vye2hlaWdodDoxMDAlO3dpZHRoOjJweDt0b3A6MDtwb3NpdGlvbjphYnNvbHV0ZTt0ZXh0LWFsaWduOmNlbnRlcjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoMjU1LDAsMCwuNCk7Ym94LXNpemluZzpib3JkZXItYm94fS5nYW50dF9tYXJrZXIgLmdhbnR0X21hcmtlcl9jb250ZW50e3BhZGRpbmc6NXB4O2JhY2tncm91bmQ6aW5oZXJpdDtjb2xvcjojZmZmO3Bvc2l0aW9uOmFic29sdXRlO2ZvbnQtc2l6ZToxMnB4O2xpbmUtaGVpZ2h0OjEycHg7b3BhY2l0eTouOH0uZ2FudHRfbWFya2VyX2FyZWF7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowfS5nYW50dF9ncmlkX2VkaXRvcl9wbGFjZWhvbGRlcntwb3NpdGlvbjphYnNvbHV0ZX0uZ2FudHRfZ3JpZF9lZGl0b3JfcGxhY2Vob2xkZXI+ZGl2LC5nYW50dF9ncmlkX2VkaXRvcl9wbGFjZWhvbGRlciBpbnB1dCwuZ2FudHRfZ3JpZF9lZGl0b3JfcGxhY2Vob2xkZXIgc2VsZWN0e3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7Ym94LXNpemluZzpib3JkZXItYm94fS5nYW50dF9yb3dfcGxhY2Vob2xkZXIgZGl2e29wYWNpdHk6LjV9LmdhbnR0X3Jvd19wbGFjZWhvbGRlciAuZ2FudHRfYWRkLC5nYW50dF9yb3dfcGxhY2Vob2xkZXIgLmdhbnR0X2ZpbGV7ZGlzcGxheTpub25lfS5nYW50dF9kcmFnX21hcmtlci5nYW50dF9ncmlkX2RuZF9tYXJrZXJ7YmFja2dyb3VuZC1jb2xvcjp0cmFuc3BhcmVudDt0cmFuc2l0aW9uOmFsbCAuMXMgZWFzZX0uZ2FudHRfZ3JpZF9kbmRfbWFya2VyX2xpbmV7aGVpZ2h0OjRweDt3aWR0aDoxMDAlO2JhY2tncm91bmQtY29sb3I6IzM0OThkYn0uZ2FudHRfZ3JpZF9kbmRfbWFya2VyX2xpbmU6YmVmb3Jle2JhY2tncm91bmQ6I2ZmZjt3aWR0aDoxMnB4O2hlaWdodDoxMnB4O2JveC1zaXppbmc6Ym9yZGVyLWJveDtib3JkZXI6M3B4IHNvbGlkICMzNDk4ZGI7Ym9yZGVyLXJhZGl1czo2cHg7Y29udGVudDpcIlwiO2xpbmUtaGVpZ2h0OjFweDtkaXNwbGF5OmJsb2NrO3Bvc2l0aW9uOmFic29sdXRlO21hcmdpbi1sZWZ0Oi0xMXB4O21hcmdpbi10b3A6LTRweDtwb2ludGVyLWV2ZW50czpub25lfS5nYW50dF9ncmlkX2RuZF9tYXJrZXJfZm9sZGVye2hlaWdodDoxMDAlO3dpZHRoOjEwMCU7cG9zaXRpb246YWJzb2x1dGU7cG9pbnRlci1ldmVudHM6bm9uZTtib3gtc2l6aW5nOmJvcmRlci1ib3g7Ym94LXNoYWRvdzppbnNldCAwIDAgMCAycHggIzNmOThkYjtiYWNrZ3JvdW5kOnRyYW5zcGFyZW50fS5nYW50dF9vdmVybGF5X2FyZWF7ZGlzcGxheTpub25lfS5nYW50dF9vdmVybGF5LC5nYW50dF9vdmVybGF5X2FyZWF7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OmluaGVyaXQ7d2lkdGg6aW5oZXJpdDt0b3A6MDtsZWZ0OjB9LmdhbnR0X2NsaWNrX2RyYWdfcmVjdHtwb3NpdGlvbjphYnNvbHV0ZTtsZWZ0OjA7dG9wOjA7b3V0bGluZToxcHggc29saWQgIzNmOThkYjtiYWNrZ3JvdW5kLWNvbG9yOnJnYmEoNTIsMTUyLDIxOSwuMyl9LmdhbnR0X3RpbWVsaW5lX21vdmVfYXZhaWxhYmxlLC5nYW50dF90aW1lbGluZV9tb3ZlX2F2YWlsYWJsZSAqe2N1cnNvcjptb3ZlfS5nYW50dF9ydGwgLmdhbnR0X2dyaWR7dGV4dC1hbGlnbjpyaWdodH0uZ2FudHRfcnRsIC5nYW50dF9jZWxsLC5nYW50dF9ydGwgLmdhbnR0X3Jvd3tmbGV4LWRpcmVjdGlvbjpyb3ctcmV2ZXJzZX0uZ2FudHRfbGF5b3V0X2NvbnRlbnR7d2lkdGg6MTAwJTtvdmVyZmxvdzphdXRvO2JveC1zaXppbmc6Ym9yZGVyLWJveH0uZ2FudHRfbGF5b3V0X2NlbGx7cG9zaXRpb246cmVsYXRpdmU7Ym94LXNpemluZzpib3JkZXItYm94fS5nYW50dF9sYXlvdXRfY2VsbD4uZ2FudHRfbGF5b3V0X2hlYWRlcntiYWNrZ3JvdW5kOiMzM2FhZTg7Y29sb3I6I2ZmZjtmb250LXNpemU6MTdweDtwYWRkaW5nOjVweCAxMHB4O2JveC1zaXppbmc6Ym9yZGVyLWJveH0uZ2FudHRfbGF5b3V0X2hlYWRlci5jb2xsYXBzZWRfeHtiYWNrZ3JvdW5kOiNhOWE5YTl9LmdhbnR0X2xheW91dF9oZWFkZXIuY29sbGFwc2VkX3ggLmdhbnR0X2hlYWRlcl9hcnJvdzpiZWZvcmV7Y29udGVudDpcIlxcMjFFN1wifS5nYW50dF9sYXlvdXRfaGVhZGVyLmNvbGxhcHNlZF95e2JhY2tncm91bmQ6I2E5YTlhOX0uZ2FudHRfbGF5b3V0X2hlYWRlci5jb2xsYXBzZWRfeSAuZ2FudHRfaGVhZGVyX2Fycm93OmJlZm9yZXtjb250ZW50OlwiXFwyMUU5XCJ9LmdhbnR0X2xheW91dF9oZWFkZXJ7Y3Vyc29yOnBvaW50ZXJ9LmdhbnR0X2xheW91dF9oZWFkZXIgLmdhbnR0X2hlYWRlcl9hcnJvd3tmbG9hdDpyaWdodDt0ZXh0LWFsaWduOnJpZ2h0fS5nYW50dF9sYXlvdXRfaGVhZGVyIC5nYW50dF9oZWFkZXJfYXJyb3c6YmVmb3Jle2NvbnRlbnQ6XCJcXDIxRTZcIn0uZ2FudHRfbGF5b3V0X2hlYWRlci52ZXJ0aWNhbCAuZ2FudHRfaGVhZGVyX2Fycm93OmJlZm9yZXtjb250ZW50OlwiXFwyMUU3XCJ9LmdhbnR0X2xheW91dF9vdXRlcl9zY3JvbGxfdmVydGljYWwgLmdhbnR0X2xheW91dF9jb250ZW50e292ZXJmbG93LXk6aGlkZGVufS5nYW50dF9sYXlvdXRfb3V0ZXJfc2Nyb2xsX2hvcml6b250YWwgLmdhbnR0X2xheW91dF9jb250ZW50e292ZXJmbG93LXg6aGlkZGVufS5nYW50dF9sYXlvdXRfeD4uZ2FudHRfbGF5b3V0X2NlbGx7ZGlzcGxheTppbmxpbmUtYmxvY2s7dmVydGljYWwtYWxpZ246dG9wfS5nYW50dF9sYXlvdXRfeHt3aGl0ZS1zcGFjZTpub3dyYXB9LmdhbnR0X3Jlc2l6aW5ne29wYWNpdHk6Ljc7YmFja2dyb3VuZDojZjJmMmYyfS5nYW50dF9sYXlvdXRfY2VsbF9ib3JkZXJfcmlnaHQuZ2FudHRfcmVzaXplcntvdmVyZmxvdzp2aXNpYmxlO2JvcmRlci1yaWdodDowfS5nYW50dF9yZXNpemVye2N1cnNvcjplLXJlc2l6ZTtwb3NpdGlvbjpyZWxhdGl2ZX0uZ2FudHRfcmVzaXplcl95e2N1cnNvcjpuLXJlc2l6ZX0uZ2FudHRfcmVzaXplcl9zdGlja3tiYWNrZ3JvdW5kOiMzM2FhZTg7ei1pbmRleDo5OTk5O3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO3dpZHRoOjEwMCV9LmdhbnR0X3Jlc2l6ZXJfeCAuZ2FudHRfcmVzaXplcl94e3Bvc2l0aW9uOmFic29sdXRlO3dpZHRoOjIwcHg7aGVpZ2h0OjEwMCU7bWFyZ2luLWxlZnQ6LTEwcHg7dG9wOjA7bGVmdDowO3otaW5kZXg6MX0uZ2FudHRfcmVzaXplcl95IC5nYW50dF9yZXNpemVyX3l7cG9zaXRpb246YWJzb2x1dGU7aGVpZ2h0OjIwcHg7d2lkdGg6MTAwJTt0b3A6LTEwcHg7bGVmdDowO3otaW5kZXg6MX0uZ2FudHRfcmVzaXplcl9lcnJvcntiYWNrZ3JvdW5kOiNjZDVjNWMhaW1wb3J0YW50fS5nYW50dF9sYXlvdXRfY2VsbF9ib3JkZXJfbGVmdHtib3JkZXItbGVmdDoxcHggc29saWQgI2NlY2VjZX0uZ2FudHRfbGF5b3V0X2NlbGxfYm9yZGVyX3JpZ2h0e2JvcmRlci1yaWdodDoxcHggc29saWQgI2NlY2VjZX0uZ2FudHRfbGF5b3V0X2NlbGxfYm9yZGVyX3RvcHtib3JkZXItdG9wOjFweCBzb2xpZCAjY2VjZWNlfS5nYW50dF9sYXlvdXRfY2VsbF9ib3JkZXJfYm90dG9te2JvcmRlci1ib3R0b206MXB4IHNvbGlkICNjZWNlY2V9LmdhbnR0X2xheW91dF9jZWxsX2JvcmRlcl90cmFuc3BhcmVudHtib3JkZXItY29sb3I6dHJhbnNwYXJlbnR9LmdhbnR0X3dpbmRvd3twb3NpdGlvbjphYnNvbHV0ZTt0b3A6NTAlO2xlZnQ6NTAlO3otaW5kZXg6OTk5OTk5OTk5O2JhY2tncm91bmQ6I2ZmZn0uZ2FudHRfd2luZG93X2NvbnRlbnR7cG9zaXRpb246cmVsYXRpdmV9LmdhbnR0X3dpbmRvd19jb250ZW50X2hlYWRlcntiYWNrZ3JvdW5kOiMzOWM7Y29sb3I6I2ZmZjtoZWlnaHQ6MzNweDtwYWRkaW5nOjEwcHggMTBweCAwO2JvcmRlci1ib3R0b206MnB4IHNvbGlkICNmZmY7cG9zaXRpb246cmVsYXRpdmV9LmdhbnR0X3dpbmRvd19jb250ZW50X2hlYWRlcl90ZXh0e3BhZGRpbmctbGVmdDoxMCV9LmdhbnR0X3dpbmRvd19jb250ZW50X2hlYWRlcl9idXR0b25ze3Bvc2l0aW9uOmFic29sdXRlO3RvcDoxMHB4O3JpZ2h0OjEwcHh9LmdhbnR0X3dpbmRvd19jb250ZW50X2hlYWRlcl9idXR0b25zOmhvdmVye2NvbG9yOiMwMDA7Y3Vyc29yOnBvaW50ZXJ9LmdhbnR0X3dpbmRvd19jb250ZW50X3Jlc2l6ZXJ7cG9zaXRpb246YWJzb2x1dGU7d2lkdGg6MTVweDtoZWlnaHQ6MTVweDtib3R0b206MDtsaW5lLWhlaWdodDoxNXB4O3JpZ2h0Oi0xcHg7dGV4dC1hbGlnbjpjZW50ZXI7YmFja2dyb3VuZC1pbWFnZTp1cmwoZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFBOEFBQUFQQ0FNQUFBQU1DR1Y0QUFBQUJsQk1WRVVBQUFBQUFBQ2xaN25QQUFBQUFYUlNUbE1BUU9iWVpnQUFBQlpKUkVGVWVBRmpJQVV3VXNobHBKRExTSWhMR0FBQUNRNEFGazc5SmFNQUFBQUFTVVZPUks1Q1lJST0pO2N1cnNvcjpudy1yZXNpemU7ei1pbmRleDo5OTl9LmdhbnR0X3dpbmRvd19jb250ZW50X2ZyYW1le3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2xlZnQ6MDt3aWR0aDoxMDAlO2hlaWdodDoxMDAlO2JhY2tncm91bmQ6cmdiYSgwLDAsMCwuMSk7ei1pbmRleDo5OTk5fS5nYW50dF93aW5kb3dfZHJhZ3tjdXJzb3I6cG9pbnRlciFpbXBvcnRhbnR9LmdhbnR0X3dpbmRvd19yZXNpemluZ3tvdmVyZmxvdzp2aXNpYmxlfS5nYW50dF93aW5kb3dfcmVzaXppbmdfYm9keXtvdmVyZmxvdzpoaWRkZW4haW1wb3J0YW50fS5nYW50dF93aW5kb3dfbW9kYWx7YmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xKTt6LWluZGV4Ojk5OTk7dG9wOjA7bGVmdDowO3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246Zml4ZWR9LmdhbnR0X2NhbF9saWdodCwuZ2FudHRfY2FsX3F1aWNrX2luZm8sLmdhbnR0X2NvbnRhaW5lciwuZ2FudHRfbWVzc2FnZV9hcmVhLC5nYW50dF9tb2RhbF9ib3gsLmdhbnR0X3Rvb2x0aXB7dGV4dC1yZW5kZXJpbmc6b3B0aW1pemVMZWdpYmlsaXR5Oy13ZWJraXQtZm9udC1zbW9vdGhpbmc6YW50aWFsaWFzZWQ7LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6Z3JheXNjYWxlfS5nYW50dF9ub3NlbGVjdHstbW96LXVzZXItc2VsZWN0Oi1tb3otbm9uZTstd2Via2l0LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0uZ2FudHRfbm9zZWxlY3QgLmdhbnR0X2dyaWRfZGF0YSAuZ2FudHRfcm93Lm9kZDpob3ZlciwuZ2FudHRfbm9zZWxlY3QgLmdhbnR0X2dyaWRfZGF0YSAuZ2FudHRfcm93OmhvdmVye2JhY2tncm91bmQtY29sb3I6dW5zZXR9LmdhbnR0X2RyYWdfbWFya2Vye3Bvc2l0aW9uOmFic29sdXRlO3RvcDotMTAwMHB4O2xlZnQ6LTEwMDBweDtmb250LWZhbWlseTpBcmlhbDtmb250LXNpemU6MTNweDt6LWluZGV4OjE7d2hpdGUtc3BhY2U6bm93cmFwfS5nYW50dF9kcmFnX21hcmtlciAuZ2FudHRfdHJlZV9pY29uLmdhbnR0X2JsYW5rLC5nYW50dF9kcmFnX21hcmtlciAuZ2FudHRfdHJlZV9pY29uLmdhbnR0X2Nsb3NlLC5nYW50dF9kcmFnX21hcmtlciAuZ2FudHRfdHJlZV9pY29uLmdhbnR0X29wZW4sLmdhbnR0X2RyYWdfbWFya2VyIC5nYW50dF90cmVlX2luZGVudHtkaXNwbGF5Om5vbmV9LmdhbnR0X2RyYWdfbWFya2VyLC5nYW50dF9kcmFnX21hcmtlciAuZ2FudHRfcm93Lm9kZHtiYWNrZ3JvdW5kLWNvbG9yOiNmZmZ9LmdhbnR0X2RyYWdfbWFya2VyIC5nYW50dF9yb3d7Ym9yZGVyLWxlZnQ6MXB4IHNvbGlkICNkMmQyZDI7Ym9yZGVyLXRvcDoxcHggc29saWQgI2QyZDJkMn0uZ2FudHRfZHJhZ19tYXJrZXIgLmdhbnR0X2NlbGx7Ym9yZGVyLWNvbG9yOiNkMmQyZDJ9LmdhbnR0X3Jvdy5nYW50dF9vdmVyLC5nYW50dF90YXNrX3Jvdy5nYW50dF9vdmVye2JhY2tncm91bmQtY29sb3I6IzAwNzBmZX0uZ2FudHRfcm93LmdhbnR0X3RyYW5zcGFyZW50IC5nYW50dF9jZWxse29wYWNpdHk6Ljd9LmdhbnR0X3Rhc2tfcm93LmdhbnR0X3RyYW5zcGFyZW50e2JhY2tncm91bmQtY29sb3I6I2Y4ZmRmZH0uZ2FudHRfcG9wdXBfYnV0dG9uLmdhbnR0X2RlbGV0ZV9idXR0b257YmFja2dyb3VuZDojM2RiOWQzO3RleHQtc2hhZG93OjAgLTFweCAwICMyNDhhOWY7Y29sb3I6I2ZmZjtmb250LXdlaWdodDo3MDA7Ym9yZGVyLXdpZHRoOjB9LmdhbnR0X2NvbnRhaW5lcl9yZXNpemVfd2F0Y2hlcntiYWNrZ3JvdW5kOnRyYW5zcGFyZW50O3dpZHRoOjEwMCU7aGVpZ2h0OjEwMCU7cG9zaXRpb246YWJzb2x1dGU7dG9wOjA7bGVmdDowO3otaW5kZXg6LTE7cG9pbnRlci1ldmVudHM6bm9uZTtib3JkZXI6MDtib3gtc2l6aW5nOmJvcmRlci1ib3g7b3BhY2l0eTowfSIsIkBpbXBvcnQgXCJ+ZGh0bWx4LWdhbnR0L2NvZGViYXNlL2RodG1seGdhbnR0LmNzc1wiO1xyXG4uZ2FudHQtY2hhcnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDYwMHB4O1xyXG59XHJcbi5nYW50LXdyYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG4uZ2FudHRfZ3JpZF9oZWFkX3RleHQge1xyXG4gIHdpZHRoOiAxNTBweDtcclxufVxyXG4iXX0= */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GantChartComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
                selector: 'app-gant-chart',
                templateUrl: './gant-chart.component.html',
                styleUrls: ['./gant-chart.component.scss'],
                providers: [_shared_services_gant_task_service__WEBPACK_IMPORTED_MODULE_2__["GantTaskService"]]
            }]
    }], function () { return [{ type: _shared_services_gant_task_service__WEBPACK_IMPORTED_MODULE_2__["GantTaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, { ganttContainer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ["ganttHere", { static: true }]
        }] }); })();


/***/ }),

/***/ "cT/4":
/*!*****************************************!*\
  !*** ./src/app/app-injection-tokens.ts ***!
  \*****************************************/
/*! exports provided: AUTH_API_URL, RESOURCE_API_URL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AUTH_API_URL", function() { return AUTH_API_URL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RESOURCE_API_URL", function() { return RESOURCE_API_URL; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

const AUTH_API_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('auth api url');
const RESOURCE_API_URL = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('projectManagement api url');


/***/ }),

/***/ "cT6d":
/*!*************************************!*\
  !*** ./src/app/guard/auth.guard.ts ***!
  \*************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/auth.service */ "IYfF");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, state) {
        if (this.authService.isAuthenticated()) {
            return true;
        }
        else {
            this.authService.logout();
            return undefined;
        }
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "ev4g":
/*!*************************************************!*\
  !*** ./src/app/shared/services/task.service.ts ***!
  \*************************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_injection_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-injection-tokens */ "cT/4");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");






class TaskService {
    constructor(http, apiUrl) {
        this.http = http;
        this.apiUrl = apiUrl;
    }
    getTaskById(id) {
        return this.http.get(`${this.apiUrl}api/tasks/task`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            return response[0];
        }));
    }
    updateTaskStatus(task) {
        return this.http.put(`${this.apiUrl}api/tasks/task/update`, task);
    }
    getTasksByUser() {
        return this.http.get(`${this.apiUrl}api/tasks/user`);
    }
}
TaskService.ɵfac = function TaskService_Factory(t) { return new (t || TaskService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_injection_tokens__WEBPACK_IMPORTED_MODULE_2__["RESOURCE_API_URL"])); };
TaskService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: TaskService, factory: TaskService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_app_injection_tokens__WEBPACK_IMPORTED_MODULE_2__["RESOURCE_API_URL"]]
            }] }]; }, null); })();


/***/ }),

/***/ "fW7f":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/optimization.service.ts ***!
  \*********************************************************/
/*! exports provided: OptimizationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptimizationService", function() { return OptimizationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_injection_tokens__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../app-injection-tokens */ "cT/4");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");




class OptimizationService {
    constructor(http, apiUrl) {
        this.http = http;
        this.apiUrl = apiUrl;
    }
    GetAnswerCombinedObjectiveFunction(task) {
        return this.http.post(`${this.apiUrl}api/optimization/combinedfunction`, task);
    }
}
OptimizationService.ɵfac = function OptimizationService_Factory(t) { return new (t || OptimizationService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_injection_tokens__WEBPACK_IMPORTED_MODULE_1__["RESOURCE_API_URL"])); };
OptimizationService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: OptimizationService, factory: OptimizationService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OptimizationService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_app_injection_tokens__WEBPACK_IMPORTED_MODULE_1__["RESOURCE_API_URL"]]
            }] }]; }, null); })();


/***/ }),

/***/ "hHkm":
/*!********************************************************!*\
  !*** ./src/app/project-page/project-page.component.ts ***!
  \********************************************************/
/*! exports provided: ProjectPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectPageComponent", function() { return ProjectPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/project.service */ "zSYW");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_datasearch_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/datasearch.service */ "10g0");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_searchTasks_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/pipes/searchTasks.pipe */ "Gp1u");










const _c0 = function () { return ["create", "task"]; };
function ProjectPageComponent_div_1_div_15_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0437\u0430\u0434\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
function ProjectPageComponent_div_1_div_15_div_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectPageComponent_div_1_div_15_div_2_Template_div_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3); return ctx_r6.toggleFormAddUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C \u0443\u0447\u0430\u0441\u0442\u043D\u0438\u043A\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectPageComponent_div_1_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectPageComponent_div_1_div_15_div_1_Template, 4, 2, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectPageComponent_div_1_div_15_div_2_Template, 4, 0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.project.role === "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440" || ctx_r1.project.role === "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.project.role === "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440");
} }
function ProjectPageComponent_div_1_form_16_div_3_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectPageComponent_div_1_form_16_div_3_small_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0412\u0432\u0435\u0434\u0451\u043D \u043D\u0435\u043A\u043E\u0440\u0440\u0435\u043A\u0442\u043D\u044B\u0439 email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectPageComponent_div_1_form_16_div_3_small_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044F \u0441 \u0442\u0430\u043A\u0438\u043C email \u043D\u0435 \u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0443\u0435\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectPageComponent_div_1_form_16_div_3_small_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u0441 \u0442\u0430\u043A\u0438\u043C email \u0443\u0436\u0435 \u0443\u0447\u0430\u0441\u0442\u0432\u0443\u0435\u0442 \u0432 \u043F\u0440\u043E\u0435\u043A\u0442\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProjectPageComponent_div_1_form_16_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectPageComponent_div_1_form_16_div_3_small_1_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectPageComponent_div_1_form_16_div_3_small_2_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectPageComponent_div_1_form_16_div_3_small_3_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProjectPageComponent_div_1_form_16_div_3_small_4_Template, 2, 0, "small", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.formAddUser.get("email").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.formAddUser.get("email").errors.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.formAddUser.get("email").errors.uniqEmail);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.formAddUser.get("email").errors.alreadyExistEmail);
} }
const _c1 = function (a0) { return { invalid: a0 }; };
function ProjectPageComponent_div_1_form_16_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ProjectPageComponent_div_1_form_16_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r13.addUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ProjectPageComponent_div_1_form_16_div_3_Template, 5, 4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "select", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.formAddUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c1, ctx_r2.formAddUser.get("email").touched && ctx_r2.formAddUser.get("email").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.formAddUser.get("email").touched && ctx_r2.formAddUser.get("email").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r2.formAddUser.invalid || ctx_r2.submitted))("disabled", ctx_r2.formAddUser.invalid || ctx_r2.submitted);
} }
const _c2 = function (a0, a1) { return { important: a0, "never-mind": a1 }; };
const _c3 = function (a2) { return ["/user", "task", a2]; };
const _c4 = function (a0, a1, a2) { return { pending: a0, process: a1, done: a2 }; };
function ProjectPageComponent_div_1_div_17_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const task_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](18, _c2, task_r17.priority === "\u0412\u0430\u0436\u043D\u043E", task_r17.priority === "\u041D\u0435\u0432\u0430\u0436\u043D\u043E"))("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c3, task_r17.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r17.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](5, 8, task_r17.start_date, "d MMM , y, HH:mm:ss", null, "ru"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](8, 13, task_r17.end_date, "d MMM , y, HH:mm:ss", null, "ru"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r17.executor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](23, _c4, task_r17.status === "\u0412 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u0438", task_r17.status === "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435", task_r17.status === "\u0413\u043E\u0442\u043E\u0432\u043E"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](task_r17.status);
} }
function ProjectPageComponent_div_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u0430\u0447\u0430\u043B\u043E \u0440\u0430\u0431\u043E\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u041A\u043E\u043D\u0435\u0446 \u0440\u0430\u0431\u043E\u0442\u044B");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0418\u0441\u043F\u043E\u043B\u043D\u0438\u0442\u0435\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0421\u0442\u0430\u0442\u0443\u0441");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectPageComponent_div_1_div_17_tr_15_Template, 13, 27, "tr", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "searchTasks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tasks_r15 = ctx.ngIf;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](16, 1, tasks_r15, ctx_r3.searchStr));
} }
const _c5 = function (a3) { return ["/user", "account", "get", a3]; };
function ProjectPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440 \u043F\u0440\u043E\u0435\u043A\u0442\u0430:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ProjectPageComponent_div_1_div_15_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, ProjectPageComponent_div_1_form_16_Template, 12, 9, "form", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ProjectPageComponent_div_1_div_17_Template, 17, 4, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](18, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.project.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.project.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.project.owner_avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c5, ctx_r0.project.owner_id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0414\u0430\u0442\u0430 \u0441\u043E\u0437\u0434\u0430\u043D\u0438\u044F: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](14, 8, ctx_r0.project.created_at, "longDate", null, "ru"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.project.role != "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.openFormAddUser);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](18, 13, ctx_r0.tasks$));
} }
class ProjectPageComponent {
    constructor(projectService, route, dataSearchService) {
        this.projectService = projectService;
        this.route = route;
        this.dataSearchService = dataSearchService;
        this.submitted = false;
        this.openFormAddUser = false;
        this.searchStr = '';
    }
    ngOnInit() {
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["switchMap"])((params) => {
            return this.projectService.getProjectById(params['id']);
        })).subscribe((project) => {
            this.project = project[0];
        });
        this.tasks$ = this.projectService.getTasks(this.route.snapshot.params['id']);
        this.dataSearchService.searchStr.subscribe(str => {
            this.searchStr = str;
        });
    }
    toggleFormAddUser() {
        this.openFormAddUser = !this.openFormAddUser;
        if (!this.formAddUser) {
            this.formAddUser = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email,
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required
                ]),
                role: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('1')
            });
        }
    }
    addUser() {
        if (this.formAddUser.invalid) {
            return;
        }
        this.submitted = true;
        const userToProject = {
            email: this.formAddUser.value.email,
            ProjectId: this.route.snapshot.params['id'],
            RoleId: this.formAddUser.value.role
        };
        this.projectService.addUser(userToProject).subscribe(response => {
            this.formAddUser.reset();
            this.submitted = false;
            this.openFormAddUser = false;
        }, error => {
            if (error.error === 'EMAIL_NOT_FOUND') {
                this.formAddUser.get('email').setErrors({
                    uniqEmail: true
                });
                this.submitted = false;
            }
            if (error.error === 'USER_ALREADY_EXIST') {
                this.formAddUser.get('email').setErrors({
                    alreadyExistEmail: true
                });
                this.submitted = false;
            }
        });
    }
}
ProjectPageComponent.ɵfac = function ProjectPageComponent_Factory(t) { return new (t || ProjectPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_datasearch_service__WEBPACK_IMPORTED_MODULE_5__["DatasearchService"])); };
ProjectPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectPageComponent, selectors: [["app-project-page"]], decls: 2, vars: 1, consts: [[1, "mycontainer"], ["class", "wrap", 4, "ngIf"], [1, "wrap"], [1, "header"], [1, "header-text"], [1, "header-text_title"], [1, "header-text_description"], [1, "header-info"], [1, "header-info-director"], ["for", "director_avatar"], ["id", "director_avatar", 3, "src", "routerLink"], [1, "header-info_date"], ["class", "additive", 4, "ngIf"], ["class", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["class", "table-responsive", 4, "ngIf"], [1, "additive"], ["class", "add", 3, "routerLink", 4, "ngIf"], ["class", "add", 3, "click", 4, "ngIf"], [1, "add", 3, "routerLink"], ["src", "assets/img/plus.png", "alt", ""], [1, "add", 3, "click"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-control", 3, "ngClass"], ["type", "text", "formControlName", "email", "placeholder", "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 email"], ["class", "validation", 4, "ngIf"], [1, "form-control"], ["formControlName", "role"], ["value", "1"], ["value", "2"], ["type", "submit", 3, "ngClass", "disabled"], [1, "validation"], [4, "ngIf"], [1, "table-responsive"], [1, "table", "table-bordered"], [4, "ngFor", "ngForOf"], [1, "task-name", 3, "ngClass", "routerLink"], [3, "ngClass"]], template: function ProjectPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectPageComponent_div_1_Template, 19, 17, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.project);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"], _shared_pipes_searchTasks_pipe__WEBPACK_IMPORTED_MODULE_7__["SearchTasksPipe"]], styles: [".wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  background: #FFFFFF;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 20px;\n  margin: 0 10px;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  width: 60vw;\n}\n\n.header-text_title[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n}\n\n.header-text_description[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.header-info[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  display: flex;\n  flex-direction: column;\n}\n\n.header-info-director[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.header-info-director[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.header-info-director[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n}\n\n.header-info-director[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border: 1px solid var(--button-color);\n}\n\n.header-info_date[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.additive[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.add[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  border: 1px solid rgba(0, 0, 0, 0.09);\n  border-radius: 15px;\n  background: #EFEFEF;\n  padding: 5px 10px;\n  margin: 20px 10px;\n}\n\n.add[_ngcontent-%COMP%]:first-child {\n  margin-left: 0;\n}\n\n.add[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n\n.add[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n}\n\n.add[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 18px;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.form-control.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid var(--button-color);\n  box-sizing: border-box;\n  border-radius: 25px;\n  height: 40px;\n  width: 300px;\n  font-size: 18px;\n  padding: 0 10px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.form[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  margin: 0 0 0 20px;\n  height: 38px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  border: 1px solid var(--button-color);\n  border-radius: 10px;\n}\n\n.form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 0 20px;\n  width: 250px;\n  height: 38px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.form[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.form[_ngcontent-%COMP%]   button.invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: default;\n}\n\n.validation[_ngcontent-%COMP%] {\n  color: red;\n}\n\ntable[_ngcontent-%COMP%] {\n  width: 76vw;\n  border-collapse: collapse;\n}\n\ntbody[_ngcontent-%COMP%] {\n  width: 76vw;\n}\n\nthead[_ngcontent-%COMP%] {\n  width: 76vw;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 76vw;\n  margin-top: 40px;\n}\n\nth[_ngcontent-%COMP%] {\n  width: 76vw;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  padding: 20px;\n  border: 2px solid rgba(0, 0, 0, 0.2);\n  border-top: none;\n}\n\nth[_ngcontent-%COMP%]:first-child {\n  border-left: none;\n  border-top: none;\n}\n\nth[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\ntr[_ngcontent-%COMP%] {\n  width: 76vw;\n  word-break: break-all;\n}\n\ntd[_ngcontent-%COMP%] {\n  word-break: break-all;\n  padding: 15px;\n  border: 2px solid rgba(0, 0, 0, 0.32);\n  border-bottom: none;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\ntd[_ngcontent-%COMP%]:first-child {\n  border-left: 1px solid rgba(0, 0, 0, 0);\n}\n\ntd[_ngcontent-%COMP%]:last-child {\n  border-right: none;\n}\n\n.formTask-control.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.formTask-input[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid var(--button-color);\n  box-sizing: border-box;\n  border-radius: 25px;\n  height: 25px;\n  width: 250px;\n  font-size: 18px;\n  padding: 0 10px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.formTask-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.formTask-input.special[_ngcontent-%COMP%] {\n  width: 200px;\n}\n\n.formTask-input.invalid[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n\n.formTask[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%] {\n  height: 25px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  border: 1px solid var(--button-color);\n  border-radius: 10px;\n  width: 160px;\n}\n\n.formTask[_ngcontent-%COMP%]   .select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.formTask[_ngcontent-%COMP%]   .select.priority[_ngcontent-%COMP%] {\n  width: 160px;\n}\n\n.formTask[_ngcontent-%COMP%]   .select.invalid[_ngcontent-%COMP%] {\n  border: 2px solid red;\n}\n\n.formTask[_ngcontent-%COMP%]   .button-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.formTask[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 20px auto;\n  width: 250px;\n  height: 38px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.formTask[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.formTask[_ngcontent-%COMP%]   button.invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: default;\n}\n\n.important[_ngcontent-%COMP%] {\n  border-left: 6px solid red !important;\n}\n\n.never-mind[_ngcontent-%COMP%] {\n  border-left: 6px solid var(--button-color) !important;\n}\n\n.pending[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: rgba(74, 91, 244, 0.6);\n}\n\n.process[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: rgba(255, 0, 0, 0.6);\n}\n\n.done[_ngcontent-%COMP%] {\n  color: #FFFFFF;\n  background-color: rgba(0, 255, 100, 0.5);\n}\n\n@media (max-width: 575.98px) {\n  .table-responsive-sm[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  .table-responsive-sm[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n\n@media (max-width: 767.98px) {\n  .table-responsive-md[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  .table-responsive-md[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n\n@media (max-width: 991.98px) {\n  .table-responsive-lg[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  .table-responsive-lg[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n\n@media (max-width: 1199.98px) {\n  .table-responsive-xl[_ngcontent-%COMP%] {\n    display: block;\n    width: 100%;\n    overflow-x: auto;\n    -webkit-overflow-scrolling: touch;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n  }\n\n  .table-responsive-xl[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n    border: 0;\n  }\n}\n\n.table-responsive[_ngcontent-%COMP%] {\n  display: block;\n  width: 100%;\n  overflow-x: auto;\n  -webkit-overflow-scrolling: touch;\n  -ms-overflow-style: -ms-autohiding-scrollbar;\n}\n\n.table-responsive[_ngcontent-%COMP%]    > .table-bordered[_ngcontent-%COMP%] {\n  border: 0;\n}\n\n.table[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 1rem;\n  background-color: transparent;\n}\n\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.75rem;\n  vertical-align: top;\n  border-top: 1px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\n  vertical-align: bottom;\n  border-bottom: 2px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]    + tbody[_ngcontent-%COMP%] {\n  border-top: 2px solid #dee2e6;\n}\n\n.table[_ngcontent-%COMP%]   .table[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n\n.table-bordered[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border: 1px solid #dee2e6;\n}\n\n.table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table-bordered[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  border-bottom-width: 2px;\n}\n\n.task-name[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  background-color: var(--button-color);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2plY3QtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxXQUFBO0FBQ0o7O0FBQUk7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRU47O0FBQUk7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRU47O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUFJO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVOOztBQURNO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdSOztBQURNO0VBS0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBRFI7O0FBTlE7RUFDRSxlQUFBO0VBQ0EscUNBQUE7QUFRVjs7QUFBSTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFFTjs7QUFHQTtFQUNFLGFBQUE7QUFBRjs7QUFHQTtFQUlFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUFIRjs7QUFORTtFQUNFLGNBQUE7QUFRSjs7QUFDRTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBQ0o7O0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0FBQ0o7O0FBQ0U7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBR0E7RUFDRSxhQUFBO0FBQUY7O0FBR007RUFD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QUE7SUFDQSxXQUFBO0lBQ0EsZ0JBQUE7SUFDQSxpQ0FBQTtJQUNBLDRDQUFBO0VBWEY7O0VBYUE7SUFDRSxTQUFBO0VBVkY7QUFDRjs7QUFhQTtFQUNFO0lBQ0UsY0FBQTtJQUNBLFdBQUE7SUFDQSxnQkFBQTtJQUNBLGlDQUFBO0lBQ0EsNENBQUE7RUFYRjs7RUFhQTtJQUNFLFNBQUE7RUFWRjtBQUNGOztBQWFBO0VBQ0U7SUFDRSxjQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0EsaUNBQUE7SUFDQSw0Q0FBQTtFQVhGOztFQWFBO0lBQ0UsU0FBQTtFQVZGO0FBQ0Y7O0FBYUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUNBQUE7RUFDQSw0Q0FBQTtBQVhGOztBQWNBO0VBQ0UsU0FBQTtBQVhGOztBQWNBO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBWEY7O0FBY0E7O0VBRUUsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLDZCQUFBO0FBWEY7O0FBY0E7RUFDRSxzQkFBQTtFQUNBLGdDQUFBO0FBWEY7O0FBY0E7RUFDRSw2QkFBQTtBQVhGOztBQWNBO0VBQ0Usc0JBQUE7QUFYRjs7QUFjQTtFQUNFLHlCQUFBO0FBWEY7O0FBY0E7O0VBRUUseUJBQUE7QUFYRjs7QUFjQTs7RUFFRSx3QkFBQTtBQVhGOztBQWVFO0VBQ0UsZUFBQTtFQUNBLHFDQUFBO0FBWkoiLCJmaWxlIjoicHJvamVjdC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICBtYXJnaW46IDAgMTBweDtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgJi10ZXh0IHtcclxuICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgJl90aXRsZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgJl9kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLWluZm8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICYtZGlyZWN0b3Ige1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICAgJl9kYXRlIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uYWRkaXRpdmUge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5hZGQge1xyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgfVxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBib3JkZXI6IDFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMDkpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgYmFja2dyb3VuZDogI0VGRUZFRjtcclxuICBwYWRkaW5nOiA1cHggMTBweDtcclxuICBtYXJnaW46IDIwcHggMTBweDtcclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICB9XHJcbiAgaW1nIHtcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBwIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgJi1jb250cm9sIHtcclxuICAgICYuaW52YWxpZCB7XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICBpbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMzAwcHg7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG5cclxuICB9XHJcbiAgc2VsZWN0IHtcclxuICAgIG1hcmdpbjogMCAwIDAgMjBweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICYuaW52YWxpZCB7XHJcbiAgICAgIG9wYWNpdHk6IDE7XHJcbiAgICAgIGN1cnNvcjogZGVmYXVsdDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi52YWxpZGF0aW9uIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcblxyXG50YWJsZSB7XHJcbiAgd2lkdGg6IDc2dnc7XHJcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcclxufVxyXG5cclxudGJvZHkge1xyXG4gIHdpZHRoOiA3NnZ3O1xyXG59XHJcblxyXG50aGVhZCB7XHJcbiAgd2lkdGg6IDc2dnc7XHJcbn1cclxuXHJcbi50YWJsZSB7XHJcbiAgd2lkdGg6IDc2dnc7XHJcbiAgbWFyZ2luLXRvcDogNDBweDtcclxufVxyXG5cclxudGgge1xyXG4gIHdpZHRoOiA3NnZ3O1xyXG4gICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IG5vbmU7XHJcbiAgICBib3JkZXItdG9wOiBub25lO1xyXG4gIH1cclxuICAmOmxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xyXG4gIH1cclxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4yMCk7XHJcbiAgYm9yZGVyLXRvcDogbm9uZTtcclxufVxyXG5cclxudHIge1xyXG4gIHdpZHRoOiA3NnZ3O1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxufVxyXG5cclxudGQge1xyXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC4zMik7XHJcbiAgYm9yZGVyLWJvdHRvbTogbm9uZTtcclxuICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICAmOmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgcmdiYSgwLCAwLCAwLCAwKTtcclxuICB9XHJcbiAgJjpsYXN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogbm9uZTtcclxuICB9XHJcbn1cclxuXHJcbi5mb3JtVGFzayB7XHJcbiAgJi1jb250cm9sIHtcclxuICAgICYuaW52YWxpZCB7XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAmLnNwZWNpYWwge1xyXG4gICAgICB3aWR0aDogMjAwcHg7XHJcbiAgICB9XHJcbiAgICAmLmludmFsaWQge1xyXG4gICAgICBib3JkZXI6IDJweCBzb2xpZCByZWQ7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5zZWxlY3Qge1xyXG4gICAgaGVpZ2h0OiAyNXB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxuICAgIHdpZHRoOiAxNjBweDtcclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gICAgJi5wcmlvcml0eSB7XHJcbiAgICAgIHdpZHRoOiAxNjBweDtcclxuICAgIH1cclxuICAgICYuaW52YWxpZCB7XHJcbiAgICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIH1cclxuICB9XHJcbiAgLmJ1dHRvbi13cmFwIHtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgfVxyXG4gIGJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAmLmludmFsaWQge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uaW1wb3J0YW50IHtcclxuICAgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCByZWQgIWltcG9ydGFudDtcclxufVxyXG5cclxuLm5ldmVyLW1pbmQge1xyXG4gIGJvcmRlci1sZWZ0OiA2cHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ucGVuZGluZyB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg3NCwgOTEsIDI0NCwgMC42KTtcclxufVxyXG5cclxuLnByb2Nlc3Mge1xyXG4gIGNvbG9yOiAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAwLCAwLCAwLjYpO1xyXG59XHJcblxyXG4uZG9uZSB7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAyNTUsIDEwMCwgMC41KTtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDU3NS45OHB4KSB7XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUtc20ge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxuICB9XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUtc20gPiAudGFibGUtYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2Ny45OHB4KSB7XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUtbWQge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxuICB9XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUtbWQgPiAudGFibGUtYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MS45OHB4KSB7XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUtbGcge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICAtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XHJcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxuICB9XHJcbiAgLnRhYmxlLXJlc3BvbnNpdmUtbGcgPiAudGFibGUtYm9yZGVyZWQge1xyXG4gICAgYm9yZGVyOiAwO1xyXG4gIH1cclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDExOTkuOThweCkge1xyXG4gIC50YWJsZS1yZXNwb25zaXZlLXhsIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiAtbXMtYXV0b2hpZGluZy1zY3JvbGxiYXI7XHJcbiAgfVxyXG4gIC50YWJsZS1yZXNwb25zaXZlLXhsID4gLnRhYmxlLWJvcmRlcmVkIHtcclxuICAgIGJvcmRlcjogMDtcclxuICB9XHJcbn1cclxuXHJcbi50YWJsZS1yZXNwb25zaXZlIHtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdy14OiBhdXRvO1xyXG4gIC13ZWJraXQtb3ZlcmZsb3ctc2Nyb2xsaW5nOiB0b3VjaDtcclxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IC1tcy1hdXRvaGlkaW5nLXNjcm9sbGJhcjtcclxufVxyXG5cclxuLnRhYmxlLXJlc3BvbnNpdmUgPiAudGFibGUtYm9yZGVyZWQge1xyXG4gIGJvcmRlcjogMDtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMXJlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxufVxyXG5cclxuLnRhYmxlIHRoLFxyXG4udGFibGUgdGQge1xyXG4gIHBhZGRpbmc6IDAuNzVyZW07XHJcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcclxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlIHRoZWFkIHRoIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogYm90dG9tO1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4udGFibGUgdGJvZHkgKyB0Ym9keSB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZSAudGFibGUge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZCB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2RlZTJlNjtcclxufVxyXG5cclxuLnRhYmxlLWJvcmRlcmVkIHRoLFxyXG4udGFibGUtYm9yZGVyZWQgdGQge1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZWUyZTY7XHJcbn1cclxuXHJcbi50YWJsZS1ib3JkZXJlZCB0aGVhZCB0aCxcclxuLnRhYmxlLWJvcmRlcmVkIHRoZWFkIHRkIHtcclxuICBib3JkZXItYm90dG9tLXdpZHRoOiAycHg7XHJcbn1cclxuXHJcbi50YXNrLW5hbWUge1xyXG4gICY6aG92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project-page',
                templateUrl: './project-page.component.html',
                styleUrls: ['./project-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: _shared_services_datasearch_service__WEBPACK_IMPORTED_MODULE_5__["DatasearchService"] }]; }, null); })();


/***/ }),

/***/ "kmKP":
/*!*************************************************!*\
  !*** ./src/app/shared/services/user.service.ts ***!
  \*************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_injection_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-injection-tokens */ "cT/4");





class UserService {
    constructor(http, apiUrl) {
        this.http = http;
        this.apiUrl = apiUrl;
    }
    getUser() {
        return this.http.get(`${this.apiUrl}api/users/im`);
    }
    declOfNum(number, words) {
        return words[(number % 100 > 4 && number % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(number % 10 < 5) ? number % 10 : 5]];
    }
    updateUser(user) {
        return this.http.put(`${this.apiUrl}api/users/update`, user);
    }
    getUserById(id) {
        return this.http.get(`${this.apiUrl}api/users/user`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    }
}
UserService.ɵfac = function UserService_Factory(t) { return new (t || UserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_injection_tokens__WEBPACK_IMPORTED_MODULE_2__["RESOURCE_API_URL"])); };
UserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserService, factory: UserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_app_injection_tokens__WEBPACK_IMPORTED_MODULE_2__["RESOURCE_API_URL"]]
            }] }]; }, null); })();


/***/ }),

/***/ "nDjA":
/*!**********************************************************!*\
  !*** ./src/app/projects-page/projects-page.component.ts ***!
  \**********************************************************/
/*! exports provided: ProjectsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectsPageComponent", function() { return ProjectsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/project.service */ "zSYW");
/* harmony import */ var _shared_services_datasearch_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/datasearch.service */ "10g0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _shared_pipes_searchProjects_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/pipes/searchProjects.pipe */ "XkuR");







function ProjectsPageComponent_div_0_div_5_div_10_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const avatar_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", avatar_r8, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function ProjectsPageComponent_div_0_div_5_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ProjectsPageComponent_div_0_div_5_div_10_div_1_Template, 2, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const idx_r9 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", idx_r9 < 2);
} }
function ProjectsPageComponent_div_0_div_5_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("+", project_r5.users_avatar.length - 2, "");
} }
const _c0 = function (a2) { return ["/user", "projects", a2]; };
const _c1 = function (a0, a1, a2) { return { manager: a0, director: a1, user: a2 }; };
function ProjectsPageComponent_div_0_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ProjectsPageComponent_div_0_div_5_div_10_Template, 2, 1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ProjectsPageComponent_div_0_div_5_div_11_Template, 3, 1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const project_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, project_r5.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](9, _c1, project_r5.role === "\u041C\u0435\u043D\u0435\u0434\u0436\u0435\u0440", project_r5.role === "\u0414\u0438\u0440\u0435\u043A\u0442\u043E\u0440", project_r5.role === "\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C"));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](project_r5.role);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", project_r5.users_avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", project_r5.users_avatar.length > 3);
} }
function ProjectsPageComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProjectsPageComponent_div_0_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.navigateToNewProject(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C \u043F\u0440\u043E\u0435\u043A\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ProjectsPageComponent_div_0_div_5_Template, 12, 13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "searchProjects");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const projects_r3 = ctx.ngIf;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 1, projects_r3, ctx_r0.searchStr));
} }
function ProjectsPageComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
} }
class ProjectsPageComponent {
    constructor(projectService, dataSearchService, router) {
        this.projectService = projectService;
        this.dataSearchService = dataSearchService;
        this.router = router;
    }
    ngOnInit() {
        this.minProject$ = this.projectService.getProjects();
        this.dataSearchService.searchStr.subscribe(str => {
            this.searchStr = str;
        });
    }
    navigateToNewProject() {
        this.router.navigate(["/user", "projects", "create"]);
    }
}
ProjectsPageComponent.ɵfac = function ProjectsPageComponent_Factory(t) { return new (t || ProjectsPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_datasearch_service__WEBPACK_IMPORTED_MODULE_2__["DatasearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProjectsPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectsPageComponent, selectors: [["app-projects-page"]], decls: 4, vars: 4, consts: [["class", "mycontainer", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "mycontainer"], [1, "card-newproject", 3, "click"], ["src", "assets/img/plus.png", "alt", "", 1, "card-newproject-img"], ["class", "card", 3, "routerLink", 4, "ngFor", "ngForOf"], [1, "card", 3, "routerLink"], [1, "card-text"], [1, "wrap"], [1, "card-role", 3, "ngClass"], [1, "card-role_text"], [1, "user-list"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["alt", "", 1, "user-avatar", 3, "src"], [1, "avatar-text"]], template: function ProjectsPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ProjectsPageComponent_div_0_Template, 7, 4, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ProjectsPageComponent_ng_template_2_Template, 1, 0, "ng-template", null, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 2, ctx.minProject$))("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"], _shared_pipes_searchProjects_pipe__WEBPACK_IMPORTED_MODULE_5__["SearchProjectsPipe"]], styles: [".card[_ngcontent-%COMP%] {\n  height: 300px;\n  overflow: hidden;\n  width: 19vw;\n  background: #FFFFFF;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 20px;\n  display: inline-block;\n  margin: 10px 12px;\n  transition: all 0.2s ease-in-out;\n}\n.card[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: translate(-5px, -5px);\n}\n.card[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 24px;\n}\n.card-text[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  margin-bottom: 20px;\n  display: -webkit-box;\n  -webkit-line-clamp: 5;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.card-role[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 5px 10px;\n  margin-right: 30px;\n}\n.card-role_text[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 600;\n  font-size: 14px;\n  text-transform: uppercase;\n}\n.card-newproject[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0px 4px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 20px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  margin: 10px 12px;\n  transition: all 0.2s ease-in-out;\n  width: 19vw;\n  height: 300px;\n}\n.card-newproject[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  transform: translate(-5px, -5px);\n}\n.card-newproject-img[_ngcontent-%COMP%] {\n  max-width: 90px;\n  max-height: 90px;\n  margin-bottom: 10px;\n  opacity: 0.4;\n}\n.card-newproject[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n.manager[_ngcontent-%COMP%] {\n  background: rgba(13, 222, 34, 0.16);\n  color: #0DDE22;\n}\n.user[_ngcontent-%COMP%] {\n  background: rgba(244, 74, 74, 0.16);\n  color: #F44A4A;\n}\n.user-list[_ngcontent-%COMP%] {\n  display: flex;\n}\n.user-avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  border: 3px solid #FFFFFF;\n  border-radius: 50%;\n}\n.wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n.avatar-text[_ngcontent-%COMP%] {\n  border-radius: 50%;\n  width: 50px;\n  height: 50px;\n  border: 3px solid #FFFFFF;\n  background-color: red;\n  opacity: 0.6;\n  color: #FFFFFF;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n.director[_ngcontent-%COMP%] {\n  background: rgba(74, 91, 244, 0.16);\n  color: #4A5BF4;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHByb2plY3RzLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7QUFDRjtBQUNFO0VBQ0UsZUFBQTtFQUNBLGdDQUFBO0FBQ0o7QUFFRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFBSjtBQUdFO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxxQkFBQTtFQUNBLDRCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1QkFBQTtBQURKO0FBSUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFGSjtBQUdJO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0FBRE47QUFNRTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxXQUFBO0VBQ0EsYUFBQTtBQUpKO0FBTUk7RUFDRSxlQUFBO0VBQ0EsZ0NBQUE7QUFKTjtBQU9JO0VBQ0UsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBTE47QUFRSTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFOTjtBQVlBO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0FBVEY7QUFZQTtFQUNFLG1DQUFBO0VBQ0EsY0FBQTtBQVRGO0FBV0U7RUFDRSxhQUFBO0FBVEo7QUFhRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQVhKO0FBY0E7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7QUFYRjtBQWNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EscUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUFYRjtBQWNBO0VBQ0UsbUNBQUE7RUFDQSxjQUFBO0FBWEYiLCJmaWxlIjoicHJvamVjdHMtcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgd2lkdGg6IDE5dnc7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3gtc2hhZG93OiAwIDRweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIG1hcmdpbjogMTBweCAxMnB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG5cclxuICAmOmhvdmVyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01cHgsIC01cHgpO1xyXG4gIH1cclxuXHJcbiAgaDIge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgfVxyXG5cclxuICAmLXRleHQge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgZGlzcGxheTogLXdlYmtpdC1ib3g7XHJcbiAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDU7XHJcbiAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gIH1cclxuXHJcbiAgJi1yb2xlIHtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDVweCAxMHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG4gICAgJl90ZXh0IHtcclxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJi1uZXdwcm9qZWN0IHtcclxuICAgIGJhY2tncm91bmQ6ICNGRkZGRkY7XHJcbiAgICBib3gtc2hhZG93OiAwcHggNHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweCAxMnB4O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgICB3aWR0aDogMTl2dztcclxuICAgIGhlaWdodDogMzAwcHg7XHJcblxyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTVweCwgLTVweCk7XHJcbiAgICB9XHJcblxyXG4gICAgJi1pbWcge1xyXG4gICAgICBtYXgtd2lkdGg6IDkwcHg7XHJcbiAgICAgIG1heC1oZWlnaHQ6IDkwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgIG9wYWNpdHk6IDAuNDtcclxuICAgIH1cclxuXHJcbiAgICBoMyB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcbi5tYW5hZ2VyIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDEzLCAyMjIsIDM0LCAwLjE2KTtcclxuICBjb2xvcjogIzBEREUyMjtcclxufVxyXG5cclxuLnVzZXIge1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ0LCA3NCwgNzQsIDAuMTYpO1xyXG4gIGNvbG9yOiAjRjQ0QTRBO1xyXG5cclxuICAmLWxpc3Qge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgfVxyXG5cclxuICAmLWF2YXRhciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogNTBweDtcclxuICAgIGJvcmRlcjogM3B4IHNvbGlkICNGRkZGRkY7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgfVxyXG59XHJcbi53cmFwIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5hdmF0YXItdGV4dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIHdpZHRoOiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICBib3JkZXI6IDNweCBzb2xpZCAjRkZGRkZGO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcclxuICBvcGFjaXR5OiAwLjY7XHJcbiAgY29sb3I6ICNGRkZGRkY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmRpcmVjdG9yIHtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDc0LCA5MSwgMjQ0LCAwLjE2KTtcclxuICBjb2xvcjogIzRBNUJGNDtcclxufVxyXG5cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectsPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-projects-page',
                templateUrl: './projects-page.component.html',
                styleUrls: ['./projects-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_project_service__WEBPACK_IMPORTED_MODULE_1__["ProjectService"] }, { type: _shared_services_datasearch_service__WEBPACK_IMPORTED_MODULE_2__["DatasearchService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "qQvj":
/*!**********************************************************************!*\
  !*** ./src/app/update-account-page/update-account-page.component.ts ***!
  \**********************************************************************/
/*! exports provided: UpdateAccountPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateAccountPageComponent", function() { return UpdateAccountPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/user.service */ "kmKP");
/* harmony import */ var _shared_services_dataupdate_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/services/dataupdate.service */ "TZ0A");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var alife_file_to_base64__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! alife-file-to-base64 */ "3IV0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");









function UpdateAccountPageComponent_div_2_form_1_img_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 16);
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r4.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
const _c0 = function (a0) { return { invalid: a0 }; };
function UpdateAccountPageComponent_div_2_form_1_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateAccountPageComponent_div_2_form_1_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r5.updateAccount(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u041E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u0438\u0435 \u0434\u0430\u043D\u043D\u044B\u0445 \u0430\u043A\u043A\u0430\u0443\u043D\u0442\u0430");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043B\u0435\u0444\u043E\u043D:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, UpdateAccountPageComponent_div_2_form_1_img_13_Template, 1, 1, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u0417\u0430\u0433\u0440\u0443\u0437\u0438\u0442\u0435 \u0430\u0432\u0430\u0442\u0430\u0440:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "input", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onFileChanged", function UpdateAccountPageComponent_div_2_form_1_Template_input_onFileChanged_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r7.onFileChanges($event); })("change", function UpdateAccountPageComponent_div_2_form_1_Template_input_change_18_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.compress($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0437\u043E\u0431\u0440\u0430\u0436\u0435\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0424\u0418\u041E: ", ctx_r1.user.fio, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email: ", ctx_r1.user.email, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.avatar);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r1.submitted))("disabled", ctx_r1.submitted);
} }
const _c1 = function () { return ["/user", "account"]; };
function UpdateAccountPageComponent_div_2_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0414\u0430\u043D\u043D\u044B\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0435\u043D\u044B!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041C\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c1));
} }
function UpdateAccountPageComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UpdateAccountPageComponent_div_2_form_1_Template, 24, 8, "form", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UpdateAccountPageComponent_div_2_ng_template_2_Template, 6, 2, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.updated)("ngIfElse", _r2);
} }
class UpdateAccountPageComponent {
    constructor(userService, dataUpdateService) {
        this.userService = userService;
        this.dataUpdateService = dataUpdateService;
        this.submitted = false;
        this.avatar = '';
        this.updated = false;
        this.avatar_min = '';
    }
    ngOnInit() {
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            phone: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            avatar: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.userService.getUser().subscribe(user => {
            this.user = user;
        });
    }
    onFileChanges(event) {
        this.avatar = event[0].base64;
    }
    updateAccount() {
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        const user = {
            userId: this.user.userId,
            fio: this.user.fio,
            created_at: this.user.created_at,
            email: this.user.email,
            phone: this.form.value.phone,
            avatar: this.avatar,
            avatar_min: this.avatar_min
        };
        this.userService.updateUser(user).subscribe(user => {
            this.submitted = false;
            this.form.reset();
            this.updated = true;
            this.dataUpdateService.updateUserLayout.next();
        });
    }
    compress(event) {
        this.submitted = true;
        const width = 70;
        const height = 70;
        const fileName = event.target.files[0].name;
        const reader = new FileReader();
        reader.readAsDataURL(event.target.files[0]);
        reader.onload = event => {
            const img = new Image();
            img.src = event.target.result.toString();
            img.onload = () => {
                const elem = document.createElement('canvas');
                elem.width = width;
                elem.height = height;
                const ctx = elem.getContext('2d');
                ctx.drawImage(img, 0, 0, width, height);
                this.avatar_min = ctx.canvas.toDataURL('image/jpeg');
                this.submitted = false;
            };
        };
    }
}
UpdateAccountPageComponent.ɵfac = function UpdateAccountPageComponent_Factory(t) { return new (t || UpdateAccountPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_dataupdate_service__WEBPACK_IMPORTED_MODULE_3__["DataupdateService"])); };
UpdateAccountPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateAccountPageComponent, selectors: [["app-update-account-page"]], decls: 3, vars: 1, consts: [[1, "mycontainer"], [1, "wrap"], [4, "ngIf"], ["class", "form", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], ["userupdated", ""], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-control"], ["for", "phone", 1, "form-label"], ["type", "text", "id", "phone", "formControlName", "phone", 1, "form-input"], [1, "img-wrap"], [3, "src", 4, "ngIf"], ["for", "avatar", 1, "form-label"], [1, "form-inputfile"], ["type", "file", "id", "avatar", "accept", "image/gif, image/jpeg", "alife-file-to-base64", "", "formControlName", "avatar", 3, "onFileChanged", "change"], [1, "form-button-wrap"], ["type", "submit", 1, "form-button", 3, "ngClass", "disabled"], [3, "src"], [1, "created"], ["src", "assets/img/icons/success.svg", "alt", ""], [3, "routerLink"]], template: function UpdateAccountPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UpdateAccountPageComponent_div_2_Template, 4, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], alife_file_to_base64__WEBPACK_IMPORTED_MODULE_5__["ɵa"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], styles: [".wrap[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100%;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  width: 500px;\n  min-height: 300px;\n  padding: 20px 30px;\n}\n\n.form[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  margin: 10px 0;\n}\n\n.form-control.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form-control.invalid[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form-control[_ngcontent-%COMP%]   .img-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.form-control[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 10px auto;\n  width: 300px;\n  height: 400px;\n}\n\n.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: block;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid var(--button-color);\n  box-sizing: border-box;\n  border-radius: 25px;\n  height: 40px;\n  width: 100%;\n  font-size: 16px;\n  padding: 0 10px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form-inputfile[_ngcontent-%COMP%]   input[type=file][_ngcontent-%COMP%] {\n  display: none;\n}\n\n.form-inputfile[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  position: relative;\n  width: 230px;\n  height: 35px;\n  background: var(--button-color);\n  border-radius: 15px;\n  border: none;\n}\n\n.form-inputfile[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.form-inputfile[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: block;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  cursor: pointer;\n}\n\n.form-inputfile[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  line-height: 35px;\n  margin: 10px 10px;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.form-button[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 38px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.form-button-wrap[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n\n.form-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.form-button.invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: default;\n}\n\n.created[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #FFFFFF;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 30px;\n}\n\n.created[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n}\n\n.created[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  margin: 10px 0;\n}\n\n.created[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 5px 20px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.created[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHVwZGF0ZS1hY2NvdW50LXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QUFDRjs7QUFFQTtFQThCRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQTVCRjs7QUFSRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBVUo7O0FBTk07RUFDRSxpQkFBQTtBQVFSOztBQUxNO0VBQ0UsaUJBQUE7QUFPUjs7QUFKSTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQU1OOztBQUpJO0VBQ0UsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQU1OOztBQU1FO0VBQ0Usa0JBQUE7QUFKSjs7QUFPRTtFQUNFLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFMSjs7QUFRRTtFQUNFLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBUUk7RUFDRSxhQUFBO0FBTk47O0FBVUU7RUFFRSxhQUFBO0FBVEo7O0FBV0U7RUFDRSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBVEo7O0FBVUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQVJOOztBQVdFO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7QUFUSjs7QUFXRTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQVRKOztBQVlFO0VBTUUsWUFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBZko7O0FBQ0k7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0FBQ047O0FBV0k7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQVROOztBQVdJO0VBQ0UsVUFBQTtFQUNBLGVBQUE7QUFUTjs7QUFjQTtFQUNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRDQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVhGOztBQVlFO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFWSjs7QUFZRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBVko7O0FBWUU7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQVZKOztBQVdJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFUTiIsImZpbGUiOiJ1cGRhdGUtYWNjb3VudC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvcm0ge1xyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgJi1jb250cm9sIHtcclxuICAgICYuaW52YWxpZCB7XHJcbiAgICAgIGlucHV0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG5cclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAuaW1nLXdyYXAge1xyXG4gICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICBtYXJnaW46IDEwcHggYXV0bztcclxuICAgICAgd2lkdGg6IDMwMHB4O1xyXG4gICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHdpZHRoOiA1MDBweDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBwYWRkaW5nOiAyMHB4IDMwcHg7XHJcblxyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gICYtbGFiZWwge1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgfVxyXG5cclxuICAmLWlucHV0IHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgaGVpZ2h0OiA0MHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuXHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICYtaW5wdXRmaWxlIGlucHV0W3R5cGU9XCJmaWxlXCJdXHJcbiAge1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbiAgJi1pbnB1dGZpbGUge1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMjMwcHg7XHJcbiAgICBoZWlnaHQ6IDM1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbiAgJi1pbnB1dGZpbGUgbGFiZWwge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG4gICYtaW5wdXRmaWxlIHNwYW4ge1xyXG4gICAgbGluZS1oZWlnaHQ6IDM1cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMTBweDtcclxuICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuXHJcbiAgJi1idXR0b24ge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAmLmludmFsaWQge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG4uY3JlYXRlZCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMzBweDtcclxuICBpbWcge1xyXG4gICAgaGVpZ2h0OiA4MHB4O1xyXG4gICAgd2lkdGg6IDgwcHg7XHJcbiAgfVxyXG4gIHAge1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICB9XHJcbiAgYSB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA1cHggMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICY6aG92ZXIge1xyXG4gICAgICBvcGFjaXR5OiAwLjg7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcblxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateAccountPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-account-page',
                templateUrl: './update-account-page.component.html',
                styleUrls: ['./update-account-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _shared_services_dataupdate_service__WEBPACK_IMPORTED_MODULE_3__["DataupdateService"] }]; }, null); })();


/***/ }),

/***/ "r4JW":
/*!************************************************************************!*\
  !*** ./src/app/shared/components/user-layout/user-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: UserLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLayoutComponent", function() { return UserLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_datasearch_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/datasearch.service */ "10g0");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user.service */ "kmKP");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "IYfF");
/* harmony import */ var _services_dataupdate_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/dataupdate.service */ "TZ0A");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function () { return ["/user", "account", "update"]; };
function UserLayoutComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0420\u0435\u0434\u0430\u043A\u0442\u0438\u0440\u043E\u0432\u0430\u043D\u0438\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLayoutComponent_div_28_Template_li_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.logout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u044B\u0439\u0442\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
} }
const _c1 = function () { return ["/user", "account"]; };
function UserLayoutComponent_img_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "img", 22);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r1.user.avatar_min, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c1));
} }
class UserLayoutComponent {
    constructor(dataSearchService, userService, authService, dataUpdateService) {
        this.dataSearchService = dataSearchService;
        this.userService = userService;
        this.authService = authService;
        this.dataUpdateService = dataUpdateService;
        this.openSettings = false;
    }
    set searchStr(searchStr) {
        this.dataSearchService.searchStr.next(searchStr);
    }
    ngOnInit() {
        this.getUserData();
        this.dataUpdateService.updateUserLayout.subscribe(u => {
            this.getUserData();
        });
    }
    getUserData() {
        this.userService.getUser().subscribe(user => {
            this.user = user;
        });
    }
    logout() {
        this.authService.logout();
    }
}
UserLayoutComponent.ɵfac = function UserLayoutComponent_Factory(t) { return new (t || UserLayoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_datasearch_service__WEBPACK_IMPORTED_MODULE_1__["DatasearchService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_dataupdate_service__WEBPACK_IMPORTED_MODULE_4__["DataupdateService"])); };
UserLayoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserLayoutComponent, selectors: [["app-user-layout"]], decls: 32, vars: 3, consts: [[1, "wrap"], [1, "nav"], ["routerLink", "/user/projects", "routerLinkActive", "open", 1, "nav-item"], ["src", "./assets/img/icons/project.png"], ["routerLink", "/user/tasks", "routerLinkActive", "open", 1, "nav-item"], ["src", "./assets/img/icons/tasks.png"], ["routerLink", "/user/gant/projects", "routerLinkActive", "open", 1, "nav-item"], ["src", "./assets/img/icons/diagram.png"], ["routerLink", "/user/optimization", "routerLinkActive", "open", 1, "nav-item"], ["src", "./assets/img/icons/optimization.png"], [1, "div"], [1, "user-panel"], [1, "input-wrap"], ["type", "text", "placeholder", "\u041F\u043E\u0438\u0441\u043A", 3, "ngModel", "ngModelChange"], [1, "content-wrap"], [3, "click"], ["class", "settings-menu", 4, "ngIf"], ["class", "avatar", 3, "src", "routerLink", 4, "ngIf"], [1, "user-components"], [1, "settings-menu"], [1, "settings-menu_item", 3, "routerLink"], [1, "settings-menu_item", 3, "click"], [1, "avatar", 3, "src", "routerLink"]], template: function UserLayoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0423\u043F\u0440\u0430\u0432\u043B\u0435\u043D\u0438\u0435 \u043F\u0440\u043E\u0435\u043A\u0442\u0430\u043C\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u041F\u0440\u043E\u0435\u043A\u0442\u044B");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "\u041C\u043E\u0438 \u0437\u0430\u0434\u0430\u0447\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0414\u0438\u0430\u0433\u0440\u0430\u043C\u043C\u0430 \u0433\u0430\u043D\u0442\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "a");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "\u041E\u043F\u0442\u0438\u043C\u0438\u0437\u0430\u0446\u0438\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UserLayoutComponent_Template_input_ngModelChange_24_listener($event) { return ctx.searchStr = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserLayoutComponent_Template_a_click_26_listener() { return ctx.openSettings = !ctx.openSettings; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "\u041C\u043E\u0439 \u0430\u043A\u043A\u0430\u0443\u043D\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, UserLayoutComponent_div_28_Template, 6, 2, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, UserLayoutComponent_img_29_Template, 1, 3, "img", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.searchStr);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.openSettings);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterOutlet"]], styles: [".wrap[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.nav[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  height: 95vh;\n  width: 300px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  margin: 30px 30px;\n  align-items: center;\n}\n\n.nav[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  cursor: pointer;\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.nav-item.open[_ngcontent-%COMP%] {\n  border-right: 5px solid var(--button-color);\n  background: linear-gradient(269.91deg, #4A5BF4 -39.4%, rgba(196, 196, 196, 0) 82.44%);\n}\n\n.nav-item[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n}\n\n.nav-item[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-left: 30px;\n  margin-right: 10px;\n  height: 30px;\n  width: 30px;\n}\n\nh2[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  margin: 30px 0;\n}\n\n.user-panel[_ngcontent-%COMP%] {\n  height: 60px;\n  width: 80vw;\n  background-color: #FFFFFF;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  margin: 30px 20px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 5px 50px;\n}\n\n.user-panel[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.user-panel[_ngcontent-%COMP%]   .input-wrap[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  content: \"\";\n  background-image: url(/assets/img/icons/loupe.svg);\n  background-size: 100%;\n  width: 20px;\n  height: 20px;\n}\n\n.user-panel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  background: rgba(196, 196, 196, 0.27);\n  border-radius: 20px;\n  border: none;\n  height: 40px;\n  padding: 5px 40px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 16px;\n}\n\n.user-panel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]::placeholder {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 300;\n  font-size: 16px;\n}\n\n.user-panel[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.user-panel[_ngcontent-%COMP%]   .content-wrap[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n\n.user-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 400;\n  font-size: 18px;\n  margin-right: 20px;\n  position: relative;\n}\n\n.user-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.user-panel[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:before {\n  position: absolute;\n  top: 4px;\n  left: -25px;\n  content: \"\";\n  background-image: url(/assets/img/icons/settings.svg);\n  background-size: 100%;\n  width: 20px;\n  height: 20px;\n}\n\n.user-panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  border-radius: 100px;\n  width: 50px;\n  height: 50px;\n}\n\n.user-panel[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  border: 1px solid var(--button-color);\n  cursor: pointer;\n}\n\n.user-components[_ngcontent-%COMP%] {\n  margin: 30px 10px;\n  width: 81vw;\n  height: 85vh;\n}\n\n.settings-menu[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 65px;\n  left: -20px;\n  background-color: #FFFFFF;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 10px 20px;\n}\n\n.settings-menu_item[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  opacity: 0.8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdXNlci1sYXlvdXQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFBRTtFQUNFLFdBQUE7QUFFSjs7QUFBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBRUo7O0FBREk7RUFDRSxZQUFBO0FBR047O0FBREk7RUFDRSwyQ0FBQTtFQUNBLHFGQUFBO0FBR047O0FBREk7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR047O0FBREk7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7QUFHTjs7QUFFQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUFFO0VBQ0Usa0JBQUE7QUFFSjs7QUFESTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0Esa0RBQUE7RUFDQSxxQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBR047O0FBQUU7RUFDRSxxQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFFSjs7QUFESTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFHTjs7QUFESTtFQUNFLGFBQUE7QUFHTjs7QUFBRTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBRUo7O0FBQUU7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUVKOztBQURJO0VBQ0UsZUFBQTtBQUdOOztBQURJO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7RUFDQSxxREFBQTtFQUNBLHFCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFHTjs7QUFBRTtFQUNFLG9CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUFFSjs7QUFESTtFQUNFLHFDQUFBO0VBQ0EsZUFBQTtBQUdOOztBQUVBO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBQ0Y7O0FBRUk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQUFOIiwiZmlsZSI6InVzZXItbGF5b3V0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbi5uYXYge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDk1dmg7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBtYXJnaW46IDMwcHggMzBweDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHVsIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuICAmLWl0ZW0ge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgfVxyXG4gICAgJi5vcGVuIHtcclxuICAgICAgYm9yZGVyLXJpZ2h0OiA1cHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICAgICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDI2OS45MWRlZywgIzRBNUJGNCAtMzkuNCUsIHJnYmEoMTk2LCAxOTYsIDE5NiwgMCkgODIuNDQlKTtcclxuICAgIH1cclxuICAgIGEge1xyXG4gICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgIGhlaWdodDogMzBweDtcclxuICAgICAgd2lkdGg6IDMwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5oMiB7XHJcbiAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgbWFyZ2luOiAzMHB4IDA7XHJcbn1cclxuXHJcbi51c2VyLXBhbmVsIHtcclxuICBoZWlnaHQ6IDYwcHg7XHJcbiAgd2lkdGg6IDgwdnc7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIG1hcmdpbjogMzBweCAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgcGFkZGluZzogNXB4IDUwcHg7XHJcbiAgLmlucHV0LXdyYXAge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpiZWZvcmUge1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHRvcDogMTBweDtcclxuICAgICAgbGVmdDogMTBweDtcclxuICAgICAgY29udGVudDogXCJcIjtcclxuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC9hc3NldHMvaW1nL2ljb25zL2xvdXBlLnN2Zyk7XHJcbiAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcclxuICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgIGhlaWdodDogMjBweDtcclxuICAgIH1cclxuICB9XHJcbiAgaW5wdXQge1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgxOTYsIDE5NiwgMTk2LCAwLjI3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHggNDBweDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgJjo6cGxhY2Vob2xkZXIge1xyXG4gICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuICAgICY6Zm9jdXMge1xyXG4gICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxuICAuY29udGVudC13cmFwIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIH1cclxuICBhIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICY6YmVmb3JlIHtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB0b3A6IDRweDtcclxuICAgICAgbGVmdDogLTI1cHg7XHJcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XHJcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgvYXNzZXRzL2ltZy9pY29ucy9zZXR0aW5ncy5zdmcpO1xyXG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XHJcbiAgICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICB9XHJcbiAgfVxyXG4gIGltZyB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxuICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi51c2VyLWNvbXBvbmVudHMge1xyXG4gIG1hcmdpbjogMzBweCAxMHB4O1xyXG4gIHdpZHRoOiA4MXZ3O1xyXG4gIGhlaWdodDogODV2aDtcclxufVxyXG5cclxuLnNldHRpbmdzLW1lbnUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDY1cHg7XHJcbiAgbGVmdDogLTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRkZGRjtcclxuICBib3gtc2hhZG93OiAwcHggNXB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHggMjBweDtcclxuICAmX2l0ZW0ge1xyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserLayoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-layout',
                templateUrl: './user-layout.component.html',
                styleUrls: ['./user-layout.component.scss']
            }]
    }], function () { return [{ type: _services_datasearch_service__WEBPACK_IMPORTED_MODULE_1__["DatasearchService"] }, { type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"] }, { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }, { type: _services_dataupdate_service__WEBPACK_IMPORTED_MODULE_4__["DataupdateService"] }]; }, null); })();


/***/ }),

/***/ "rXff":
/*!********************************************************!*\
  !*** ./src/app/account-page/account-page.component.ts ***!
  \********************************************************/
/*! exports provided: AccountPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountPageComponent", function() { return AccountPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/services/user.service */ "kmKP");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");





function AccountPageComponent_div_1_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0422\u0435\u043B\u0435\u0444\u043E\u043D: ", ctx_r3.user.phone, "");
} }
function AccountPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, AccountPageComponent_div_1_p_9_Template, 2, 1, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.fio);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.user.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u041F\u043E\u043B\u044C\u0437\u043E\u0432\u0430\u0442\u0435\u043B\u044C \u043D\u0430 \u0441\u0430\u0439\u0442\u0435: ", ctx_r0.daysPassed + " " + ctx_r0.daysStr, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.user.phone);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.user.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
function AccountPageComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
} }
class AccountPageComponent {
    constructor(userService, route) {
        this.userService = userService;
        this.route = route;
    }
    ngOnInit() {
        if (this.route.snapshot.params['id']) {
            this.userService.getUserById(this.route.snapshot.params['id']).subscribe(user => {
                this.user = user;
                const currentData = new Date();
                this.daysPassed = Math.floor((Date.parse(currentData.toString()) - Date.parse(this.user.created_at)) / 86400000);
                this.daysStr = this.userService.declOfNum(this.daysPassed, ['день', 'дня', 'дней']);
            });
        }
        else {
            this.userService.getUser().subscribe(user => {
                this.user = user;
                const currentData = new Date();
                this.daysPassed = Math.floor((Date.parse(currentData.toString()) - Date.parse(this.user.created_at)) / 86400000);
                this.daysStr = this.userService.declOfNum(this.daysPassed, ['день', 'дня', 'дней']);
            });
        }
    }
}
AccountPageComponent.ɵfac = function AccountPageComponent_Factory(t) { return new (t || AccountPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"])); };
AccountPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AccountPageComponent, selectors: [["app-account-page"]], decls: 4, vars: 2, consts: [[1, "mycontainer"], ["class", "wrap", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "wrap"], [1, "header"], [1, "header-text"], [1, "header-text_title"], [1, "header-text_description"], [1, "header-info_date"], ["class", "header-text_phone", 4, "ngIf"], [1, "header-info"], [1, "header-info-director"], ["id", "director_avatar", 3, "src"], [1, "header-text_phone"]], template: function AccountPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AccountPageComponent_div_1_Template, 13, 5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AccountPageComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.user)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]], styles: [".wrap[_ngcontent-%COMP%] {\n  width: 40vw;\n  height: 100%;\n  background: #FFFFFF;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 20px;\n  margin: 0 auto;\n}\n\n.header[_ngcontent-%COMP%] {\n  display: flex;\n}\n\n.header-text[_ngcontent-%COMP%] {\n  width: 60vw;\n}\n\n.header-text_title[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n}\n\n.header-text_description[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.header-text_phone[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.header-info[_ngcontent-%COMP%] {\n  margin-left: 40px;\n  display: flex;\n  flex-direction: column;\n}\n\n.header-info-director[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: flex-start;\n  align-items: center;\n  margin-bottom: 20px;\n}\n\n.header-info-director[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.header-info-director[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin: 0 20px;\n  width: 300px;\n  height: 400px;\n}\n\n.header-info_date[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGFjY291bnQtcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0FBQ0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0U7RUFDRSxXQUFBO0FBQ0o7O0FBQUk7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBRU47O0FBQUk7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRU47O0FBQUk7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRU47O0FBQ0U7RUFDRSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUFJO0VBQ0UsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQUVOOztBQURNO0VBQ0UsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUdSOztBQURNO0VBQ0UsY0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FBR1I7O0FBQUk7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRU4iLCJmaWxlIjoiYWNjb3VudC1wYWdlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXAge1xyXG4gIHdpZHRoOiA0MHZ3O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAjRkZGRkZGO1xyXG4gIGJveC1zaGFkb3c6IDAgNHB4IDI1cHggcmdiYSgwLCAwLCAwLCAwLjI1KTtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuXHJcbiAgJi10ZXh0IHtcclxuICAgIHdpZHRoOiA2MHZ3O1xyXG4gICAgJl90aXRsZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICAgICAgZm9udC1zaXplOiAyNHB4O1xyXG4gICAgfVxyXG4gICAgJl9kZXNjcmlwdGlvbiB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gICAgJl9waG9uZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgfVxyXG4gIH1cclxuICAmLWluZm8ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICYtZGlyZWN0b3Ige1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICAgIGxhYmVsIHtcclxuICAgICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgfVxyXG4gICAgICBpbWcge1xyXG4gICAgICAgIG1hcmdpbjogMCAyMHB4O1xyXG4gICAgICAgIHdpZHRoOiAzMDBweDtcclxuICAgICAgICBoZWlnaHQ6IDQwMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmX2RhdGUge1xyXG4gICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AccountPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-account-page',
                templateUrl: './account-page.component.html',
                styleUrls: ['./account-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "usR5":
/*!**************************************************!*\
  !*** ./src/app/task-page/task-page.component.ts ***!
  \**************************************************/
/*! exports provided: TaskPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskPageComponent", function() { return TaskPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/services/task.service */ "ev4g");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");







function TaskPageComponent_div_1_p_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0421\u0442\u0430\u0442\u0443\u0441: ", ctx_r3.task.status, "");
} }
function TaskPageComponent_div_1_form_23_div_9_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function TaskPageComponent_div_1_form_23_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskPageComponent_div_1_form_23_div_9_small_1_Template, 2, 0, "small", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.form.get("status").errors.required);
} }
const _c0 = function (a0) { return { invalid: a0 }; };
function TaskPageComponent_div_1_form_23_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function TaskPageComponent_div_1_form_23_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r8.updateStatus(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0418\u0437\u043C\u0435\u043D\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 \u0437\u0430\u0434\u0430\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0412 \u043F\u0440\u043E\u0446\u0435\u0441\u0441\u0435");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "option", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u0413\u043E\u0442\u043E\u0432\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TaskPageComponent_div_1_form_23_div_9_Template, 2, 1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u041E\u0431\u043D\u043E\u0432\u0438\u0442\u044C \u0441\u0442\u0430\u0442\u0443\u0441 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r4.form);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx_r4.form.get("status").touched && ctx_r4.form.get("status").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.form.get("status").touched && ctx_r4.form.get("status").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx_r4.form.invalid || ctx_r4.submitted))("disabled", ctx_r4.form.invalid || ctx_r4.submitted);
} }
function TaskPageComponent_div_1_p_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u0421\u0442\u0430\u0442\u0443\u0441 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u043E\u0431\u043D\u043E\u0432\u043B\u0451\u043D");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a3) { return ["/user", "account", "get", a3]; };
function TaskPageComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TaskPageComponent_div_1_Template_button_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.goBack(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u041D\u0430\u0437\u0430\u0434");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0418\u0441\u043F\u043E\u043B\u044C\u043D\u0438\u0442\u0435\u043B\u044C: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, TaskPageComponent_div_1_p_22_Template, 2, 1, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, TaskPageComponent_div_1_form_23_Template, 12, 9, "form", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, TaskPageComponent_div_1_p_24_Template, 2, 0, "p", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0414\u0430\u0442\u0430 \u043D\u0430\u0447\u0430\u043B\u0430 \u0440\u0430\u0431\u043E\u0442\u044B: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](11, 11, ctx_r0.task.start_date, "d MMM , y, HH:mm:ss", null, "ru"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("\u0414\u0430\u0442\u0430 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0440\u0430\u0431\u043E\u0442\u044B: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind4"](14, 16, ctx_r0.task.end_date, "d MMM , y, HH:mm:ss", null, "ru"), "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx_r0.task.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c1, ctx_r0.task.executorId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c1, ctx_r0.task.executorId));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.task.executor);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r0.task.mytask);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.task.mytask && !ctx_r0.update);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.update);
} }
function TaskPageComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "\u0418\u0434\u0451\u0442 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0430...");
} }
class TaskPageComponent {
    constructor(taskService, route, location) {
        this.taskService = taskService;
        this.route = route;
        this.location = location;
        this.submitted = false;
        this.update = false;
    }
    ngOnInit() {
        this.taskService.getTaskById(this.route.snapshot.params['id']).subscribe((task) => {
            this.task = task;
            if (this.task.mytask) {
                this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
                    status: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('1', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
                });
            }
        });
    }
    goBack() {
        this.location.back();
    }
    updateStatus() {
        console.log(this.form.value);
        if (this.form.invalid) {
            return;
        }
        this.submitted = true;
        const task = {
            id: this.route.snapshot.params['id'],
            status: this.form.value.status
        };
        this.taskService.updateTaskStatus(task).subscribe(resp => {
            this.submitted = false;
            this.update = true;
            console.log(resp);
        });
    }
}
TaskPageComponent.ɵfac = function TaskPageComponent_Factory(t) { return new (t || TaskPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"])); };
TaskPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaskPageComponent, selectors: [["app-task-page"]], decls: 4, vars: 2, consts: [[1, "mycontainer"], ["class", "wrap", 4, "ngIf", "ngIfElse"], ["loading", ""], [1, "wrap"], [1, "task"], [1, "task-header"], [1, "task-header_button", 3, "click"], [1, "task-description"], [1, "task-start_date"], [1, "task_end_date"], [1, "task-executor"], ["alt", "", 3, "routerLink", "src"], [1, "task-executor_fio", 3, "routerLink"], [1, "task-status"], [4, "ngIf"], ["class", "form", 3, "formGroup", "ngSubmit", 4, "ngIf"], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-control", 3, "ngClass"], ["for", "status", 1, "form-label"], ["formControlName", "status", "id", "status"], ["value", "1"], ["value", "2"], ["class", "validation", 4, "ngIf"], ["type", "submit", 1, "form-button", 3, "ngClass", "disabled"], [1, "validation"]], template: function TaskPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TaskPageComponent_div_1_Template, 25, 25, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TaskPageComponent_ng_template_2_Template, 1, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.task)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]], styles: [".wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.task[_ngcontent-%COMP%] {\n  background: #FFFFFF;\n  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 20px;\n  margin: 0 10px;\n  width: 50vw;\n}\n\n.task-header[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.task-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: 500;\n  font-size: 24px;\n}\n\n.task-header_button[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 38px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.task-header_button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.task[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 10px 0;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.task-executor[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin: 10px 0;\n}\n\n.task-executor[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n\n.task-executor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 70px;\n  height: 70px;\n  border-radius: 50%;\n  margin-right: 10px;\n}\n\n.task-executor[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  border: 1px solid var(--button-color);\n}\n\n.task-executor_fio[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.form-control.invalid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 30px;\n  width: 150px;\n  margin-left: 10px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  border: 1px solid var(--button-color);\n  border-radius: 10px;\n}\n\n.form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form-button[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  width: 250px;\n  height: 38px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.form-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.form-button.invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: default;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXHRhc2stcGFnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7RUFDQSwwQ0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtBQUNGOztBQUFFO0VBQ0UsYUFBQTtFQUNBLDhCQUFBO0FBRUo7O0FBREk7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBR047O0FBREk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFHTjs7QUFGTTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBSVI7O0FBQUU7RUFDRSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQUVKOztBQUFFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQUVKOztBQURJO0VBQ0Usa0JBQUE7QUFHTjs7QUFESTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtBQUdOOztBQUZNO0VBQ0UsZUFBQTtFQUNBLHFDQUFBO0FBSVI7O0FBQU07RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQUVSOztBQU9NO0VBQ0UsaUJBQUE7QUFKUjs7QUFRRTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFRRTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQU5KOztBQU9JO0VBQ0UsYUFBQTtBQUxOOztBQVFFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFOSjs7QUFRSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBTk47O0FBU0k7RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQVBOIiwiZmlsZSI6InRhc2stcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi53cmFwIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGFzayB7XHJcbiAgYmFja2dyb3VuZDogI0ZGRkZGRjtcclxuICBib3gtc2hhZG93OiAwIDRweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICBwYWRkaW5nOiAyMHB4IDIwcHg7XHJcbiAgbWFyZ2luOiAwIDEwcHg7XHJcbiAgd2lkdGg6IDUwdnc7XHJcbiAgJi1oZWFkZXIge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIGgyIHtcclxuICAgICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICB9XHJcbiAgICAmX2J1dHRvbiB7XHJcbiAgICAgIHdpZHRoOiAyNTBweDtcclxuICAgICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgIGNvbG9yOiAjRkZGRkZGO1xyXG4gICAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgcCB7XHJcbiAgICBtYXJnaW46IDEwcHggMDtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICAmLWV4ZWN1dG9yIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMHB4IDA7XHJcbiAgICBwIHtcclxuICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xyXG4gICAgfVxyXG4gICAgaW1nIHtcclxuICAgICAgd2lkdGg6IDcwcHg7XHJcbiAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1idXR0b24tY29sb3IpO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgICAmX2ZpbyB7XHJcbiAgICAgICY6aG92ZXIge1xyXG4gICAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi5mb3JtIHtcclxuICAmLWNvbnRyb2wge1xyXG4gICAgJi5pbnZhbGlkIHtcclxuICAgICAgc2VsZWN0IHtcclxuICAgICAgICBib3JkZXItY29sb3I6IHJlZDtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxuICAmLWxhYmVsIHtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuICBzZWxlY3Qge1xyXG4gICAgaGVpZ2h0OiAzMHB4O1xyXG4gICAgd2lkdGg6IDE1MHB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgIH1cclxuICAmLWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgaGVpZ2h0OiAzOHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgJi5pbnZhbGlkIHtcclxuICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaskPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-task-page',
                templateUrl: './task-page.component.html',
                styleUrls: ['./task-page.component.scss']
            }]
    }], function () { return [{ type: _shared_services_task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shared/components/main-layout/main-layout.component */ "0h24");
/* harmony import */ var _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-page/home-page.component */ "F1my");
/* harmony import */ var _shared_components_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/components/user-layout/user-layout.component */ "r4JW");
/* harmony import */ var _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projects-page/projects-page.component */ "nDjA");
/* harmony import */ var _guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guard/auth.guard */ "cT6d");
/* harmony import */ var _create_project_page_create_project_page_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./create-project-page/create-project-page.component */ "QWAX");
/* harmony import */ var _project_page_project_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./project-page/project-page.component */ "hHkm");
/* harmony import */ var _create_task_page_create_task_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./create-task-page/create-task-page.component */ "z8I2");
/* harmony import */ var _task_page_task_page_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./task-page/task-page.component */ "usR5");
/* harmony import */ var _tasks_page_tasks_page_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tasks-page/tasks-page.component */ "OlFX");
/* harmony import */ var _account_page_account_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./account-page/account-page.component */ "rXff");
/* harmony import */ var _update_account_page_update_account_page_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./update-account-page/update-account-page.component */ "qQvj");
/* harmony import */ var _gant_projects_gant_projects_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./gant-projects/gant-projects.component */ "P1m1");
/* harmony import */ var _gant_chart_gant_chart_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./gant-chart/gant-chart.component */ "bC53");
/* harmony import */ var _optimization_page_optimization_page_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./optimization-page/optimization-page.component */ "16xu");



















const routes = [
    {
        path: '', component: _shared_components_main_layout_main_layout_component__WEBPACK_IMPORTED_MODULE_2__["MainLayoutComponent"], children: [
            { path: '', redirectTo: '/', pathMatch: 'full' },
            { path: '', component: _home_page_home_page_component__WEBPACK_IMPORTED_MODULE_3__["HomePageComponent"] },
        ]
    },
    {
        path: 'user', component: _shared_components_user_layout_user_layout_component__WEBPACK_IMPORTED_MODULE_4__["UserLayoutComponent"], children: [
            { path: '', redirectTo: 'projects', pathMatch: 'full' },
            { path: 'projects', component: _projects_page_projects_page_component__WEBPACK_IMPORTED_MODULE_5__["ProjectsPageComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'projects/create', component: _create_project_page_create_project_page_component__WEBPACK_IMPORTED_MODULE_7__["CreateProjectPageComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'projects/:id', component: _project_page_project_page_component__WEBPACK_IMPORTED_MODULE_8__["ProjectPageComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'projects/:id/create/task', component: _create_task_page_create_task_page_component__WEBPACK_IMPORTED_MODULE_9__["CreateTaskPageComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'task/:id', component: _task_page_task_page_component__WEBPACK_IMPORTED_MODULE_10__["TaskPageComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'tasks', component: _tasks_page_tasks_page_component__WEBPACK_IMPORTED_MODULE_11__["TasksPageComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'account', component: _account_page_account_page_component__WEBPACK_IMPORTED_MODULE_12__["AccountPageComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'account/get/:id', component: _account_page_account_page_component__WEBPACK_IMPORTED_MODULE_12__["AccountPageComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'account/update', component: _update_account_page_update_account_page_component__WEBPACK_IMPORTED_MODULE_13__["UpdateAccountPageComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'gant/projects', component: _gant_projects_gant_projects_component__WEBPACK_IMPORTED_MODULE_14__["GantProjectsComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'gant/projects/:id', component: _gant_chart_gant_chart_component__WEBPACK_IMPORTED_MODULE_15__["GantChartComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'optimization', component: _optimization_page_optimization_page_component__WEBPACK_IMPORTED_MODULE_16__["OptimizationPageComponent"], canActivate: [_guard_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] }
        ]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
            })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
                        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"]
                    })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "z8I2":
/*!****************************************************************!*\
  !*** ./src/app/create-task-page/create-task-page.component.ts ***!
  \****************************************************************/
/*! exports provided: CreateTaskPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateTaskPageComponent", function() { return CreateTaskPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var flatpickr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatpickr */ "X2Dv");
/* harmony import */ var flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flatpickr/dist/l10n/ru */ "b/zg");
/* harmony import */ var flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_project_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/services/project.service */ "zSYW");
/* harmony import */ var angularx_flatpickr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angularx-flatpickr */ "UBqL");











function CreateTaskPageComponent_form_2_div_7_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateTaskPageComponent_form_2_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateTaskPageComponent_form_2_div_7_small_1_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r3.formAddTask.get("name").errors.required);
} }
function CreateTaskPageComponent_form_2_div_13_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateTaskPageComponent_form_2_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateTaskPageComponent_form_2_div_13_small_1_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r4.formAddTask.get("description").errors.required);
} }
function CreateTaskPageComponent_form_2_div_18_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateTaskPageComponent_form_2_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateTaskPageComponent_form_2_div_18_small_1_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r5.formAddTask.get("start_date").errors.required);
} }
function CreateTaskPageComponent_form_2_div_23_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateTaskPageComponent_form_2_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateTaskPageComponent_form_2_div_23_small_1_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r6.formAddTask.get("end_date").errors.required);
} }
function CreateTaskPageComponent_form_2_select_27_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("value", user_r16.userId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r16.fio);
} }
function CreateTaskPageComponent_form_2_select_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateTaskPageComponent_form_2_select_27_option_1_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const users_r14 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", users_r14);
} }
function CreateTaskPageComponent_form_2_div_29_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateTaskPageComponent_form_2_div_29_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateTaskPageComponent_form_2_div_29_small_1_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r8.formAddTask.get("executor").errors.required);
} }
function CreateTaskPageComponent_form_2_div_38_small_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " \u041F\u043E\u043B\u0435 \u043D\u0435 \u043C\u043E\u0436\u0435\u0442 \u0431\u044B\u0442\u044C \u043F\u0443\u0441\u0442\u044B\u043C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateTaskPageComponent_form_2_div_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateTaskPageComponent_form_2_div_38_small_1_Template, 2, 0, "small", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r9.formAddTask.get("priority").errors.required);
} }
const _c0 = function (a0) { return { invalid: a0 }; };
function CreateTaskPageComponent_form_2_Template(rf, ctx) { if (rf & 1) {
    const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateTaskPageComponent_form_2_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r20); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.addTask(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u0421\u043E\u0437\u0434\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u0447\u0438");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, CreateTaskPageComponent_form_2_div_7_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u043E\u043F\u0438\u0441\u0430\u043D\u0438\u0435 \u0437\u0430\u0434\u0430\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "textarea", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, CreateTaskPageComponent_form_2_div_13_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043D\u0430\u0447\u0430\u043B\u0430 \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, CreateTaskPageComponent_form_2_div_18_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0434\u0430\u0442\u0443 \u043E\u043A\u043E\u043D\u0447\u0430\u043D\u0438\u044F \u0432\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u0438\u044F \u0437\u0430\u0434\u0430\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](23, CreateTaskPageComponent_form_2_div_23_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0438\u0441\u043F\u043E\u043B\u044C\u043D\u0438\u0442\u0435\u043B\u044F \u0437\u0430\u0434\u0430\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CreateTaskPageComponent_form_2_select_27_Template, 2, 1, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](28, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, CreateTaskPageComponent_form_2_div_29_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "label", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u043F\u0440\u0438\u043E\u0440\u0438\u0442\u0435\u0442 \u0437\u0430\u0434\u0430\u043D\u0438\u044F:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "select", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "option", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "\u0412\u0430\u0436\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "\u041D\u0435\u0432\u0430\u0436\u043D\u043E");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, CreateTaskPageComponent_form_2_div_38_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "\u0421\u043E\u0437\u0434\u0430\u0442\u044C ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.formAddTask);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx_r0.formAddTask.get("name").touched && ctx_r0.formAddTask.get("name").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddTask.get("name").touched && ctx_r0.formAddTask.get("name").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx_r0.formAddTask.get("description").touched && ctx_r0.formAddTask.get("description").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddTask.get("description").touched && ctx_r0.formAddTask.get("description").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx_r0.formAddTask.get("start_date").touched && ctx_r0.formAddTask.get("start_date").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](32, _c0, ctx_r0.formAddTask.get("start_date").touched && ctx_r0.formAddTask.get("start_date").invalid))("convertModelValue", true)("enableTime", true)("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddTask.get("start_date").touched && ctx_r0.formAddTask.get("start_date").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](34, _c0, ctx_r0.formAddTask.get("end_date").touched && ctx_r0.formAddTask.get("end_date").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](36, _c0, ctx_r0.formAddTask.get("end_date").touched && ctx_r0.formAddTask.get("end_date").invalid))("convertModelValue", true)("enableTime", true)("options", ctx_r0.options);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddTask.get("end_date").touched && ctx_r0.formAddTask.get("end_date").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](38, _c0, ctx_r0.formAddTask.get("executor").touched && ctx_r0.formAddTask.get("executor").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](28, 24, ctx_r0.usersOfProject$));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddTask.get("executor").touched && ctx_r0.formAddTask.get("executor").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](40, _c0, ctx_r0.formAddTask.get("priority").touched && ctx_r0.formAddTask.get("priority").invalid));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.formAddTask.get("priority").touched && ctx_r0.formAddTask.get("priority").invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](42, _c0, ctx_r0.formAddTask.invalid || ctx_r0.submitted))("disabled", ctx_r0.formAddTask.invalid || ctx_r0.submitted);
} }
const _c1 = function (a2) { return ["/user", "projects", a2]; };
function CreateTaskPageComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u0417\u0430\u0434\u0430\u043D\u0438\u0435 \u0443\u0441\u043F\u0435\u0448\u043D\u043E \u0441\u043E\u0437\u0434\u0430\u043D\u043E!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041D\u0430\u0437\u0430\u0434 \u043A \u043F\u0440\u043E\u0435\u043A\u0442\u0443");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](1, _c1, ctx_r2.route.snapshot.params["id"]));
} }
function flatpickrFactory() {
    flatpickr__WEBPACK_IMPORTED_MODULE_3__["default"].localize(flatpickr_dist_l10n_ru__WEBPACK_IMPORTED_MODULE_4__["Russian"]);
    return flatpickr__WEBPACK_IMPORTED_MODULE_3__["default"];
}
class CreateTaskPageComponent {
    constructor(route, projectService) {
        this.route = route;
        this.projectService = projectService;
        this.submitted = false;
        this.created = false;
        this.options = {
            enable: [
                {
                    from: '2019-04-01',
                    to: '2025-05-01'
                }
            ]
        };
    }
    ngOnInit() {
        this.usersOfProject$ = this.projectService.getUsersOfProject(this.route.snapshot.params['id']);
        this.formAddTask = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            start_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            end_date: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            executor: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            priority: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
        flatpickrFactory();
    }
    addTask() {
        if (this.formAddTask.invalid) {
            return;
        }
        this.submitted = true;
        const task = {
            UserId: this.formAddTask.value.executor,
            name: this.formAddTask.value.name,
            description: this.formAddTask.value.description,
            start_date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.formAddTask.value.start_date, 'yyyy-MM-dd HH:mm:ss', 'ru'),
            end_date: Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["formatDate"])(this.formAddTask.value.end_date, 'yyyy-MM-dd HH:mm:ss', 'ru'),
            PriorityId: this.formAddTask.value.priority,
            ProjectId: this.route.snapshot.params['id']
        };
        this.projectService.addTask(task).subscribe(res => {
            this.formAddTask.reset();
            this.submitted = false;
            this.created = true;
        });
    }
}
CreateTaskPageComponent.ɵfac = function CreateTaskPageComponent_Factory(t) { return new (t || CreateTaskPageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"])); };
CreateTaskPageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateTaskPageComponent, selectors: [["app-create-task-page"]], decls: 5, vars: 2, consts: [[1, "mycontainer"], [1, "form-wrap"], ["class", "form", 3, "formGroup", "ngSubmit", 4, "ngIf", "ngIfElse"], ["taskcreated", ""], [1, "form", 3, "formGroup", "ngSubmit"], [1, "form-control", 3, "ngClass"], ["for", "name", 1, "form-label"], ["type", "text", "id", "name", "formControlName", "name", 1, "form-input"], ["class", "validation", 4, "ngIf"], ["for", "description", 1, "form-label"], ["id", "description", "formControlName", "description", 1, "form-textarea"], ["for", "start_date", 1, "form-label"], ["id", "start_date", "type", "text", "mwlFlatpickr", "", "dateFormat", "Y-m-d H:i", "formControlName", "start_date", 1, "form-input", 3, "ngClass", "convertModelValue", "enableTime", "options"], ["for", "end_date", 1, "form-label"], ["id", "end_date", "type", "text", "mwlFlatpickr", "", "dateFormat", "Y-m-d H:i", "formControlName", "end_date", 1, "form-input", 3, "ngClass", "convertModelValue", "enableTime", "options"], ["for", "executor", 1, "form-label"], ["formControlName", "executor", "id", "executor", 4, "ngIf"], ["for", "priority", 1, "form-label"], ["formControlName", "priority", "id", "priority"], ["value", "1"], ["value", "2"], [1, "form-button-wrap"], ["type", "submit", 1, "form-button", 3, "ngClass", "disabled"], [1, "validation"], [4, "ngIf"], ["formControlName", "executor", "id", "executor"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"], [1, "created"], ["src", "assets/img/icons/success.svg", "alt", ""], [3, "routerLink"]], template: function CreateTaskPageComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, CreateTaskPageComponent_form_2_Template, 42, 44, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, CreateTaskPageComponent_ng_template_3_Template, 6, 3, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.created)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], angularx_flatpickr__WEBPACK_IMPORTED_MODULE_7__["FlatpickrDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]], styles: [".form-wrap[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n}\n\n.form[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background-color: #FFFFFF;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  width: 500px;\n  min-height: 300px;\n  padding: 20px 30px;\n}\n\n.form-control.invalid[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form-control.invalid[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form-control.invalid[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  border-color: red;\n}\n\n.form[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  text-align: center;\n}\n\n.form-label[_ngcontent-%COMP%] {\n  margin-top: 20px;\n  display: block;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.form-input[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid var(--button-color);\n  box-sizing: border-box;\n  border-radius: 25px;\n  height: 40px;\n  width: 100%;\n  font-size: 16px;\n  padding: 0 10px;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.form-input[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form-textarea[_ngcontent-%COMP%] {\n  display: block;\n  border: 1px solid var(--button-color);\n  box-sizing: border-box;\n  border-radius: 25px;\n  height: 200px;\n  width: 100%;\n  font-size: 16px;\n  padding: 10px 10px;\n  resize: none;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n}\n\n.form-textarea[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  height: 40px;\n  width: 100%;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  border: 1px solid var(--button-color);\n  border-radius: 10px;\n}\n\n.form[_ngcontent-%COMP%]   select[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.form-button[_ngcontent-%COMP%] {\n  width: 250px;\n  height: 38px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: bold;\n  font-size: 18px;\n}\n\n.form-button-wrap[_ngcontent-%COMP%] {\n  padding: 20px 0;\n  display: flex;\n  justify-content: center;\n}\n\n.form-button[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n\n.form-button.invalid[_ngcontent-%COMP%] {\n  opacity: 1;\n  cursor: default;\n}\n\n.validation[_ngcontent-%COMP%] {\n  color: red;\n}\n\n.created[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #FFFFFF;\n  box-shadow: 0px 5px 25px rgba(0, 0, 0, 0.25);\n  border-radius: 15px;\n  padding: 20px 30px;\n}\n\n.created[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 80px;\n  width: 80px;\n}\n\n.created[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n  margin: 10px 0;\n}\n\n.created[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  text-decoration: none;\n  padding: 5px 20px;\n  background: var(--button-color);\n  border-radius: 25px;\n  border: none;\n  color: #FFFFFF;\n  font-family: Roboto, sans-serif;\n  font-style: normal;\n  font-weight: normal;\n  font-size: 18px;\n}\n\n.created[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXGNyZWF0ZS10YXNrLXBhZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsdUJBQUE7QUFDRjs7QUFDQTtFQWNFLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNENBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBWEY7O0FBUE07RUFDRSxpQkFBQTtBQVNSOztBQVBNO0VBQ0UsaUJBQUE7QUFTUjs7QUFQTTtFQUNFLGlCQUFBO0FBU1I7O0FBR0U7RUFDRSxrQkFBQTtBQURKOztBQUdFO0VBQ0UsZ0JBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQURKOztBQUdFO0VBQ0UsY0FBQTtFQUNBLHFDQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFFSTtFQUNFLGFBQUE7QUFBTjs7QUFHRTtFQUNFLGNBQUE7RUFDQSxxQ0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFFSTtFQUNFLGFBQUE7QUFBTjs7QUFHRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUFESjs7QUFFSTtFQUNFLGFBQUE7QUFBTjs7QUFHRTtFQU1FLFlBQUE7RUFDQSxZQUFBO0VBQ0EsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsK0JBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQU5KOztBQVJJO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtBQVVOOztBQUVJO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFBTjs7QUFFSTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBQU47O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBR0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0Q0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFBRjs7QUFDRTtFQUNFLFlBQUE7RUFDQSxXQUFBO0FBQ0o7O0FBQ0U7RUFDRSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtBQUNKOztBQUNFO0VBQ0UscUJBQUE7RUFDQSxpQkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtFQUNBLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFBSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBRU4iLCJmaWxlIjoiY3JlYXRlLXRhc2stcGFnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLXdyYXAge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuLmZvcm0ge1xyXG4gICYtY29udHJvbCB7XHJcbiAgICAmLmludmFsaWQge1xyXG4gICAgICBpbnB1dCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgICAgdGV4dGFyZWEge1xyXG4gICAgICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG4gICAgICB9XHJcbiAgICAgIHNlbGVjdCB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiByZWQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XHJcbiAgYm94LXNoYWRvdzogMHB4IDVweCAyNXB4IHJnYmEoMCwgMCwgMCwgMC4yNSk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICB3aWR0aDogNTAwcHg7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGgyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgJi1sYWJlbCB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbiAgJi1pbnB1dCB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGhlaWdodDogNDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgcGFkZGluZzogMCAxMHB4O1xyXG4gICAgZm9udC1mYW1pbHk6IFJvYm90bywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgJi10ZXh0YXJlYSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIHBhZGRpbmc6IDEwcHggMTBweDtcclxuICAgIHJlc2l6ZTogbm9uZTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgJjpmb2N1cyB7XHJcbiAgICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG4gIHNlbGVjdCB7XHJcbiAgICBoZWlnaHQ6IDQwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICAmOmZvY3VzIHtcclxuICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgIH1cclxuICB9XHJcbiAgJi1idXR0b24ge1xyXG4gICAgJi13cmFwIHtcclxuICAgICAgcGFkZGluZzogMjBweCAwO1xyXG4gICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGhlaWdodDogMzhweDtcclxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1jb2xvcik7XHJcbiAgICBib3JkZXItcmFkaXVzOiAyNXB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6ICNGRkZGRkY7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgb3BhY2l0eTogMC44O1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgICAmLmludmFsaWQge1xyXG4gICAgICBvcGFjaXR5OiAxO1xyXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbi52YWxpZGF0aW9uIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbi5jcmVhdGVkIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xyXG4gIGJveC1zaGFkb3c6IDBweCA1cHggMjVweCByZ2JhKDAsIDAsIDAsIDAuMjUpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgcGFkZGluZzogMjBweCAzMHB4O1xyXG4gIGltZyB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogODBweDtcclxuICB9XHJcbiAgcCB7XHJcbiAgICBmb250LWZhbWlseTogUm9ib3RvLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIG1hcmdpbjogMTBweCAwO1xyXG4gIH1cclxuICBhIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHBhZGRpbmc6IDVweCAyMHB4O1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYnV0dG9uLWNvbG9yKTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDI1cHg7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICBjb2xvcjogI0ZGRkZGRjtcclxuICAgIGZvbnQtZmFtaWx5OiBSb2JvdG8sIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgJjpob3ZlciB7XHJcbiAgICAgIG9wYWNpdHk6IDAuODtcclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbn1cclxuXHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateTaskPageComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-task-page',
                templateUrl: './create-task-page.component.html',
                styleUrls: ['./create-task-page.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"] }, { type: _shared_services_project_service__WEBPACK_IMPORTED_MODULE_6__["ProjectService"] }]; }, null); })();


/***/ }),

/***/ "zSYW":
/*!****************************************************!*\
  !*** ./src/app/shared/services/project.service.ts ***!
  \****************************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_injection_tokens__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../app-injection-tokens */ "cT/4");





class ProjectService {
    constructor(http, apiUrl) {
        this.http = http;
        this.apiUrl = apiUrl;
    }
    getProjects() {
        return this.http.get(`${this.apiUrl}api/projects`);
    }
    createProject(project) {
        return this.http.post(`${this.apiUrl}api/projects/create`, project);
    }
    getProjectById(id) {
        return this.http.get(`${this.apiUrl}api/projects/project`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    }
    addUser(userToProject) {
        return this.http.post(`${this.apiUrl}api/projects/adduser`, userToProject);
    }
    getUsersOfProject(id) {
        return this.http.get(`${this.apiUrl}api/projects/getusers`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    }
    addTask(task) {
        return this.http.post(`${this.apiUrl}api/tasks/create`, task);
    }
    getTasks(id) {
        return this.http.get(`${this.apiUrl}api/tasks/project`, {
            params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('id', id)
        });
    }
}
ProjectService.ɵfac = function ProjectService_Factory(t) { return new (t || ProjectService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_app_injection_tokens__WEBPACK_IMPORTED_MODULE_2__["RESOURCE_API_URL"])); };
ProjectService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ProjectService, factory: ProjectService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: undefined, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
                args: [_app_injection_tokens__WEBPACK_IMPORTED_MODULE_2__["RESOURCE_API_URL"]]
            }] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map