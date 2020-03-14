(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");




class AppComponent {
    constructor() {
        this.title = 'mozoon';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 11, vars: 0, consts: [["role", "banner", 1, "toolbar"], ["aria-label", "Mosaad on twitter", "target", "_blank", "rel", "noopener", "href", "https://twitter.com/AlThukairM", "title", "Twitter"], ["id", "twitter-logo", "height", "24", "data-name", "Logo", "xmlns", "http://www.w3.org/2000/svg", "viewBox", "0 0 400 400"], ["width", "400", "height", "400", "fill", "none"], ["d", "M153.62,301.59c94.34,0,145.94-78.16,145.94-145.94,0-2.22,0-4.43-.15-6.63A104.36,104.36,0,0,0,325,122.47a102.38,102.38,0,0,1-29.46,8.07,51.47,51.47,0,0,0,22.55-28.37,102.79,102.79,0,0,1-32.57,12.45,51.34,51.34,0,0,0-87.41,46.78A145.62,145.62,0,0,1,92.4,107.81a51.33,51.33,0,0,0,15.88,68.47A50.91,50.91,0,0,1,85,169.86c0,.21,0,.43,0,.65a51.31,51.31,0,0,0,41.15,50.28,51.21,51.21,0,0,1-23.16.88,51.35,51.35,0,0,0,47.92,35.62,102.92,102.92,0,0,1-63.7,22A104.41,104.41,0,0,1,75,278.55a145.21,145.21,0,0,0,78.62,23", "fill", "#fff"], [1, "spacer"], [1, "title"], [1, "content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceSVG"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "svg", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "rect", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "path", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnamespaceHTML"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0645\u064E\u0648\u0632\u0648\u0646");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-editor");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "app-feedback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_editor_editor_component__WEBPACK_IMPORTED_MODULE_1__["EditorComponent"], _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_2__["FeedbackComponent"]], styles: [".toolbar[_ngcontent-%COMP%] {\n    position: absolute;\n    margin: 0px;\n    top: 0;\n    left: 0;\n    right: 0;\n    height: 60px;\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-align: center;\n            align-items: center;\n    background-color: #BC8F8F;\n    color: white;\n    font-weight: 600;\n    font-family: 'Aref Ruqaa', serif;\n    font-size: 24px;\n}\n\n.toolbar[_ngcontent-%COMP%]   title[_ngcontent-%COMP%] {\n    width: 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%] {\n    height: 40px;\n    margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #twitter-logo[_ngcontent-%COMP%]:hover {\n    opacity: 0.8;\n}\n\n.title[_ngcontent-%COMP%] {\n    margin: 16px;\n}\n\n.spacer[_ngcontent-%COMP%] {\n    -webkit-box-flex: 1;\n            flex-grow: 1;\n}\n\n.content[_ngcontent-%COMP%] {\n    position: relative;\n    top: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLE1BQU07SUFDTixPQUFPO0lBQ1AsUUFBUTtJQUNSLFlBQVk7SUFDWixvQkFBYTtJQUFiLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLGdDQUFnQztJQUNoQyxlQUFlO0FBQ25COztBQUVBO0lBQ0ksV0FBVztBQUNmOztBQUVBO0lBQ0ksWUFBWTtJQUNaLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksWUFBWTtBQUNoQjs7QUFFQTtJQUNJLG1CQUFZO1lBQVosWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50b29sYmFyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjQkM4RjhGO1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXdlaWdodDogNjAwO1xuICAgIGZvbnQtZmFtaWx5OiAnQXJlZiBSdXFhYScsIHNlcmlmO1xuICAgIGZvbnQtc2l6ZTogMjRweDtcbn1cblxuLnRvb2xiYXIgdGl0bGUge1xuICAgIHdpZHRoOiAxNnB4O1xufVxuXG4udG9vbGJhciAjdHdpdHRlci1sb2dvIHtcbiAgICBoZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICN0d2l0dGVyLWxvZ286aG92ZXIge1xuICAgIG9wYWNpdHk6IDAuODtcbn1cblxuLnRpdGxlIHtcbiAgICBtYXJnaW46IDE2cHg7XG59XG5cbi5zcGFjZXIge1xuICAgIGZsZXgtZ3JvdzogMTtcbn1cblxuLmNvbnRlbnQge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB0b3A6IDY0cHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./feedback/feedback.component */ "./src/app/feedback/feedback.component.ts");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _editor_editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"],
        _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _editor_editor_component__WEBPACK_IMPORTED_MODULE_3__["EditorComponent"],
                    _feedback_feedback_component__WEBPACK_IMPORTED_MODULE_7__["FeedbackComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/editor/editor.component.ts":
/*!********************************************!*\
  !*** ./src/app/editor/editor.component.ts ***!
  \********************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _verifier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../verifier.service */ "./src/app/verifier.service.ts");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/bidi */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");







class EditorComponent {
    constructor(verifierService) {
        this.verifierService = verifierService;
    }
    ngOnInit() {
    }
    submit(poem) {
        var result = this.verifierService.verify(poem);
        console.log(result);
    }
}
EditorComponent.ɵfac = function EditorComponent_Factory(t) { return new (t || EditorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_verifier_service__WEBPACK_IMPORTED_MODULE_1__["VerifierService"])); };
EditorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditorComponent, selectors: [["app-editor"]], decls: 31, vars: 0, consts: [[1, "container"], ["dir", "rtl", 1, "instructions"], ["href", "https://tahadz.com/mishkal/index", "target", "_blank"], ["dir", "rtl", 1, "input"], ["matInput", "", "poem.value", "", 2, "padding-top", "40px", "align", "center"], ["poem", ""], ["mat-raised-button", "", "color", "primary", 1, "button", 3, "click"]], template: function EditorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\n- \u0627\u0641\u0635\u0644 \u0627\u0644\u0634\u0637\u0631\u064A\u0646 \u0628\u0640 ***. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\n- ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0634\u0643\u0651\u0644");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0627\u0644\u0628\u064A\u062A \u0627\u0644\u0645\u064F\u062F\u062E\u0644. \u0627\u0644\u0623\u062D\u0631\u0641 \u063A\u064A\u0631 \u0627\u0644\u0645\u0634\u0643\u0644\u0629 \u0633\u062A\u0639\u062A\u0628\u0631 \u0633\u0627\u0643\u0646\u0629. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\n- \u0644\u0627 \u062A\u0634\u0643\u0644: \u0647\u0630\u0627\u060C \u0647\u0630\u0647\u060C \u0647\u0630\u0627\u0646\u060C \u0647\u0624\u0644\u0627\u0621\u060C \u0630\u0644\u0643\u060C \u0623\u0648\u0644\u0626\u0643\u060C \u0627\u0644\u0644\u0647\u060C \u0627\u0644\u0631\u062D\u0645\u0646\u060C \u0625\u0644\u0647\u060C \u0644\u0643\u0646\u060C \u0637\u0647.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\n- \u0644\u0627 \u062A\u0634\u0643\u0644 \u0627\u0644 \u0627\u0644\u062A\u0639\u0631\u064A\u0641.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\n- \u0644\u0627 \u062A\u0634\u0643\u0644 \u0623\u0644\u0641 \u0627\u0644\u0645\u062F.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\n- \u062D\u0631\u0648\u0641 \u0627\u0644\u0639\u0637\u0641 \u062A\u064F\u0641\u0635\u0644 \u0628\u0645\u0633\u0627\u0641\u0629 \u0639\u0646 \u0627\u0644 \u0627\u0644\u062A\u0639\u0631\u064A\u0641.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\n- \u0627\u0644\u0634\u062F\u0629 \u0644\u0627\u064A\u0648\u0636\u0639 \u0645\u0639\u0647\u0627 \u062A\u0634\u0643\u064A\u0644 \u0622\u062E\u0631.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "\n- \u062A\u0646\u0648\u064A\u0646 \u0627\u0644\u0641\u062A\u062D \u064A\u0648\u0636\u0639 \u0639\u0644\u0649 \u0627\u0644\u062D\u0631\u0641 \u0642\u0628\u0644 \u0627\u0644\u0623\u0644\u0641.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "\n- \u0623\u0634\u0628\u0639 \u0647\u0627\u0621 \u0627\u0644\u063A\u0627\u0626\u0628 \u0625\u0646 \u0644\u0645 \u064A\u062A\u0645 \u0627\u0644\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0628\u062D\u0631 \u0627\u0644\u0628\u064A\u062A \u0641\u064A \u0627\u0644\u0645\u0631\u0629 \u0627\u0644\u0623\u0648\u0644\u0649 (\u0631\u0623\u064A\u062A\u0647\u064F -> \u0631\u0623\u064A\u062A\u0647\u064F\u0648).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "\n- \u0644\u0627 \u062A\u0643\u062A\u0628 \u0648\u0627\u0648 \u0639\u0645\u0631\u0648 \u0648\u0644\u0627 \u0623\u0644\u0641 \u0648\u0627\u0648 \u0627\u0644\u062C\u0645\u0627\u0639\u0629.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "\n- \u0627\u0644\u0645\u0648\u0642\u0639 \u062D\u0627\u0644\u064A\u064B\u0627 \u0644\u0627\u064A\u062A\u0639\u0631\u0641 \u0639\u0644\u0649 \u0627\u0644\u0623\u0628\u064A\u0627\u062A \u0627\u0644\u0645\u0635\u0631\u0651\u0639\u0629.\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "textarea", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditorComponent_Template_button_click_29_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](28); return ctx.submit(_r8.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u062A\u062D\u0642\u0651\u0642");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_2__["Dir"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButton"]], styles: [".container[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n}\n\n.input[_ngcontent-%COMP%] {\n    text-align: center;\n    width: 90%;\n    font-size: 16px;\n}\n\n.button[_ngcontent-%COMP%] {\n    font-size: 16px;\n}\n\n.instructions[_ngcontent-%COMP%] {\n    text-align: right;\n    font-size: 16px;\n}\n\n@media (min-width:700px){\n    .input[_ngcontent-%COMP%] {\n        text-align: center;\n        width: 66%;\n        font-size: 32px;\n    }\n\n    .button[_ngcontent-%COMP%] {\n        padding: 12px 24px;\n        font-size: 24px;\n    }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7SUFDYiw0QkFBc0I7SUFBdEIsNkJBQXNCO1lBQXRCLHNCQUFzQjtJQUN0Qix5QkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25COztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsVUFBVTtRQUNWLGVBQWU7SUFDbkI7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZWRpdG9yL2VkaXRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uaW5wdXQge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB3aWR0aDogOTAlO1xuICAgIGZvbnQtc2l6ZTogMTZweDtcbn1cblxuLmJ1dHRvbiB7XG4gICAgZm9udC1zaXplOiAxNnB4O1xufVxuXG4uaW5zdHJ1Y3Rpb25zIHtcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICBmb250LXNpemU6IDE2cHg7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOjcwMHB4KXtcbiAgICAuaW5wdXQge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHdpZHRoOiA2NiU7XG4gICAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB9XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgICAgcGFkZGluZzogMTJweCAyNHB4O1xuICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-editor',
                templateUrl: './editor.component.html',
                styleUrls: ['./editor.component.css']
            }]
    }], function () { return [{ type: _verifier_service__WEBPACK_IMPORTED_MODULE_1__["VerifierService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feedback/feedback.component.ts":
/*!************************************************!*\
  !*** ./src/app/feedback/feedback.component.ts ***!
  \************************************************/
/*! exports provided: FeedbackComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedbackComponent", function() { return FeedbackComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _verifier_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../verifier.service */ "./src/app/verifier.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




const _c0 = function (a0) { return { "color": a0 }; };
class FeedbackComponent {
    constructor(verifierService) {
        this.verifierService = verifierService;
        this.verifierService.receivedFilter.subscribe((param) => {
            this.feedback = param;
            this.feedback_text = param.بحر;
            this.is_mozoon = param.موزون;
        });
    }
    ngOnInit() {
    }
}
FeedbackComponent.ɵfac = function FeedbackComponent_Factory(t) { return new (t || FeedbackComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_verifier_service__WEBPACK_IMPORTED_MODULE_1__["VerifierService"])); };
FeedbackComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FeedbackComponent, selectors: [["app-feedback"]], decls: 3, vars: 4, consts: [[1, "container"], [2, "padding", "32px", 3, "ngStyle"]], template: function FeedbackComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx.is_mozoon ? "green" : "red"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.feedback_text);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgStyle"]], styles: [".container[_ngcontent-%COMP%] {\n    display: -webkit-box;\n    display: flex;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n            flex-direction: column;\n    -webkit-box-align: center;\n            align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmVlZGJhY2svZmVlZGJhY2suY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG9CQUFhO0lBQWIsYUFBYTtJQUNiLDRCQUFzQjtJQUF0Qiw2QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLHlCQUFtQjtZQUFuQixtQkFBbUI7QUFDdkIiLCJmaWxlIjoic3JjL2FwcC9mZWVkYmFjay9mZWVkYmFjay5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FeedbackComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-feedback',
                templateUrl: './feedback.component.html',
                styleUrls: ['./feedback.component.css']
            }]
    }], function () { return [{ type: _verifier_service__WEBPACK_IMPORTED_MODULE_1__["VerifierService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/feedback/feedback.ts":
/*!**************************************!*\
  !*** ./src/app/feedback/feedback.ts ***!
  \**************************************/
/*! exports provided: Feedback */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feedback", function() { return Feedback; });
class Feedback {
}


/***/ }),

/***/ "./src/app/verifier.service.ts":
/*!*************************************!*\
  !*** ./src/app/verifier.service.ts ***!
  \*************************************/
/*! exports provided: VerifierService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VerifierService", function() { return VerifierService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _feedback_feedback__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./feedback/feedback */ "./src/app/feedback/feedback.ts");



class VerifierService {
    constructor() {
        this.hidden_aleph = new Map();
        this.الحروف_الشمسية = ['ت', 'ث', 'د', 'ذ', 'ر', 'ز', 'س', 'ش', 'ص', 'ض', 'ط', 'ظ', 'ن'];
        this.الحروف_القمرية = ['أ', 'إ', 'ب', 'ج', 'ح', 'خ', 'ع', 'غ', 'ف', 'ق', 'ك', 'م', 'ه', 'و', 'ل', 'ي'];
        this.shaddah = 'ّ';
        this.sokoon = 'ْ';
        this.تنوين_فتح = 'ً';
        this.تنوين_كسر = 'ٍ';
        this.تنوين_ضم = 'ٌ';
        this.نون_ساكنة = 'نْ';
        this.فتحة = 'َ';
        this.ضمة = 'ُ';
        this.كسرة = 'ِ';
        this.مد = 'آ';
        this.tanween = ['ً', 'ٍ', 'ٌ'];
        this.فعولن = '11010';
        this.فاعلن = '10110';
        this.مفاعيلن = '1101010';
        this.مفاعلتن = '1101110';
        this.مفاعلْتن = '1101010';
        this.متفاعلن = '1110110';
        this.متْفاعلن = '1010110';
        this.مفاعلن = '110110';
        this.متفاعلاتن = '111011010';
        this.متفاعلان = '11101100';
        this.فعلاتن = '111010';
        this.مستفعلن = '1010110';
        this.مستفعل = '101011';
        this.متفعل = '11011';
        this.متفعلن = '110110';
        this.مفتعلن = '101110';
        this.متعلن = '11110';
        this.فاعلاتن = '1011010';
        this.فاعلان = '101100';
        this.مفعولات = '1010101';
        this.فاعلات = '101101';
        this.فعولات = '110101';
        this.فعلات = '11101';
        this.فعولُ = '1101';
        this.فعولْ = '1100';
        this.فعْلن = '1010';
        this.فعِلن = '1110';
        this.فعْل = '101';
        this.فعَل = '110';
        this.مفاعيل = '110101';
        this.مستفعلان = '10101100';
        this.مفعولن = '101010';
        this.مفعولان = '1010100';
        this.فعولان = '110100';
        this.فاعلاتان = '10110100';
        this.مفعول = '10101';
        this.receivedFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hidden_aleph.set("هذا", "هَاذَا");
        this.hidden_aleph.set("هذه", "هَاذِهِ");
        this.hidden_aleph.set("هذان", "هَاذَانِ");
        this.hidden_aleph.set("هؤلاء", "هَاؤُلَاءِ");
        this.hidden_aleph.set("ذلك", "ذَالِكَ");
        this.hidden_aleph.set("أولئك", "أُلَائِكَ");
        this.hidden_aleph.set("الله", "اللَاهُ");
        this.hidden_aleph.set("الرحمن", "اررَحمَانِ");
        this.hidden_aleph.set("إله", "إِلَاهِ");
        this.hidden_aleph.set("لكن", "لَاكِن");
        this.hidden_aleph.set("طه", "طَاهَ");
    }
    //assumptions:
    //  -poem is a one-liner
    //  -أسماء الإشارة غير مشكلة
    //  - ال التعريف غير مشكلة
    //  - حروف العطف تُفصل بمسافة عن بداية الكلمة
    //  - الشدة لايوضع معها تشكيل آخر
    //  - تنوين الفتح على الحرف قبل الألف
    //  - ألف المد لاتشكل
    //  - ضمير الغائب مشبع
    //TODO: support full poems
    verify(poem) {
        var retval = new _feedback_feedback__WEBPACK_IMPORTED_MODULE_1__["Feedback"]();
        //كتابة عروضية
        //TODO remove extraneous spaces
        var أشطر = poem.split('***');
        var صدر = this.arood_writing(أشطر[0].trim());
        //if(!أشطر[1]) {return; }//TODO دعم البيت المشطور
        var عجز;
        if (أشطر[1]) {
            عجز = this.arood_writing(أشطر[1].trim());
        }
        var sadr_in_bits = this.convert_to_bits(صدر);
        retval.تقطيع = sadr_in_bits;
        var ajz_in_bits;
        if (عجز) {
            ajz_in_bits = this.convert_to_bits(عجز);
            retval.تقطيع += ' *** ' + ajz_in_bits;
        }
        retval.تقطيع.split("").reverse().join("");
        retval.موزون = true;
        //compare with بحور
        if (this.الطويل(sadr_in_bits, ajz_in_bits)) { //1
            console.log('البحر الطويل');
            retval.بحر = 'البحر الطويل';
        }
        if (this.المتقارب(sadr_in_bits, ajz_in_bits)) { //2
            console.log('البحر المتقارب');
            retval.بحر = 'البحر المتقارب';
        }
        if (this.البسيط(sadr_in_bits, ajz_in_bits)) { //3
            console.log('البحر البسيط');
            retval.بحر = 'البحر البسيط';
        }
        if (this.الرجز(sadr_in_bits, ajz_in_bits)) { //4
            console.log('بحر الرجز');
            retval.بحر = 'بحر الرجز';
        }
        if (this.السريع(sadr_in_bits, ajz_in_bits)) { //5
            console.log('البحر السريع');
            retval.بحر = 'البحر السريع';
        }
        if (this.المنسرح(sadr_in_bits, ajz_in_bits)) { //6
            console.log('البحر المنسرح');
            retval.بحر = 'البحر المنسرح';
        }
        if (this.الكامل(sadr_in_bits, ajz_in_bits)) { //7
            console.log('البحر الكامل');
            retval.بحر = 'البحر الكامل';
        }
        if (this.الوافر(sadr_in_bits, ajz_in_bits)) { //8
            console.log('البحر الوافر');
            retval.بحر = 'البحر الوافر';
        }
        if (this.المديد(sadr_in_bits, ajz_in_bits)) { //9
            console.log('البحر المديد');
            retval.بحر = 'البحر المديد';
        }
        if (this.الرمل(sadr_in_bits, ajz_in_bits)) { //10
            console.log('بحر الرمل');
            retval.بحر = 'بحر الرمل';
        }
        if (this.الخفيف(sadr_in_bits, ajz_in_bits)) { //11
            console.log('البحر الخفيف');
            retval.بحر = 'البحر الخفيف';
        }
        //قد يختلط الهزج بمجزوء الوافر
        if (this.الهزج(sadr_in_bits, ajz_in_bits)) { //12
            console.log('بحر الهزج');
            retval.بحر = 'بحر الهزج';
        }
        if (this.المضارع(sadr_in_bits, ajz_in_bits)) { //13
            console.log('البحر المضارع');
            retval.بحر = 'البحر المضارع';
        }
        if (this.المقتضب(sadr_in_bits, ajz_in_bits)) { //14
            console.log('البحر المقتضب');
            retval.بحر = 'البحر المقتضب';
        }
        if (this.المجتث(sadr_in_bits, ajz_in_bits)) { //15
            console.log('البحر المجتث');
            retval.بحر = 'البحر المجتث';
        }
        if (this.المتدارك(sadr_in_bits, ajz_in_bits)) { //16
            console.log('البحر المتدارك');
            retval.بحر = 'البحر المتدارك';
        }
        if (!retval.بحر) {
            retval.موزون = false;
            retval.بحر = VerifierService.NOT_MOZOON;
        }
        this.receivedFilter.emit(retval);
    }
    //TODO: حذف واو عمرو وألف الجماعة
    //TODO: أنا يجب أن تكتب أَنَ
    //TODO: إشباع هاء ضمير الغائب
    arood_writing(poem) {
        var words = poem.split(' ');
        var arood_words = '';
        for (var i = 0; i < words.length; i++) {
            var w1 = this.arood_word(arood_words, words[i], i == 0, i == words.length - 1);
            arood_words = w1;
        }
        return arood_words;
    }
    //TODO: حروف الجر والعطف والتشبيه التي تتصل مع ال التعريف
    arood_word(prev_word, word, first_word, last_word) {
        //check for hidden alephs:
        var possibility = this.hidden_aleph.get(word);
        //حذف ألف الوصل لو كانت في غير موضع قطع (بداية البيت)
        if (possibility) {
            word = possibility;
        }
        //remove non-spoken characters..
        var startingIndex = 0;
        if (word.startsWith('ال')) {
            //startingIndex = 1;
            if (word[2] == this.sokoon) {
                //remove it
                word = this.replaceAt(word, 2, '');
            }
            if (this.الحروف_الشمسية.includes(word[2])) {
                //if shamsy letter has shaddah, remove it and replace it by random harakah
                if (word[3] == this.shaddah) {
                    word = this.replaceAt(word, 3, this.فتحة);
                }
                word = this.replaceAt(word, 1, word[2] + this.sokoon);
            }
            else if (this.الحروف_القمرية.includes(word[2])) {
                //do nothing
            }
            //remove الألف الساكنة
        }
        if (word.startsWith('ا')) {
            if (!first_word) {
                word = word.substr(1);
            }
            else {
                word = this.replaceAt(word, 0, 'أَ');
            }
        }
        //go through characters one by one and check for tanween and شدة
        for (var j = startingIndex; j < word.length; j += 2) {
            var i = j + 1;
            //assume sokoon
            if (i == word.length || ( //if no sokoon at last letter
            word[i] !== this.sokoon &&
                word[i] !== this.فتحة &&
                word[i] !== this.ضمة &&
                word[i] !== this.كسرة &&
                word[i] !== this.تنوين_كسر &&
                word[i] !== this.تنوين_فتح &&
                word[i] !== this.تنوين_ضم &&
                word[i] !== this.shaddah)) {
                word = this.replaceAt(word, i - 1, word[i - 1] + this.sokoon);
                continue;
            }
            if (word[i - 1] == this.مد) {
                word = this.replaceAt(word, i - 1, 'أَاْ');
                i += 2;
                continue;
            }
            //replace shaddah
            if (word[i] == this.shaddah) {
                word = this.replaceAt(word, i - 1, word[i - 1] + this.sokoon);
                word = this.replaceAt(word, i + 1, word[i - 1] + this.فتحة);
                i += 2;
                if (word[i + 1] == this.ضمة ||
                    word[i + 1] == this.فتحة ||
                    word[i + 1] == this.كسرة ||
                    word[i + 1] == this.sokoon) {
                    //remove it
                    word = this.replaceAt(word, i + 1, '');
                }
            }
            //add tanween
            if (word[i] == this.تنوين_فتح) {
                //TODO check tanween is before last for sure, and is not a mistake
                word = this.replaceAt(word, i + 1, this.نون_ساكنة);
                word = this.replaceAt(word, i, this.فتحة);
                i += 2;
            }
            else if (word[i] == this.تنوين_ضم) {
                word = this.replaceAt(word, i, this.نون_ساكنة);
                word = this.replaceAt(word, i - 1, word[i - 1] + this.ضمة);
                i += 2;
            }
            else if (word[i] == this.تنوين_كسر) {
                word = this.replaceAt(word, i, this.نون_ساكنة);
                word = this.replaceAt(word, i - 1, word[i - 1] + this.كسرة);
                i += 2;
            }
            //ألف المد
        }
        //التقاء ساكنين
        if (word[1] == this.sokoon && prev_word[prev_word.length - 1] == this.sokoon) {
            prev_word = this.replaceAt(prev_word, prev_word.length - 1, '');
            prev_word = this.replaceAt(prev_word, prev_word.length - 1, '');
        }
        //إشباع حركة العروض والضرب
        //TODO: exceptions? like
        //إذا الشعب يومًا أراد الحياةَ
        if (last_word) {
            if (word[word.length - 1] == this.فتحة ||
                word[word.length - 1] == this.ضمة ||
                word[word.length - 1] == this.كسرة) {
                word = word + 'وْ'; // random letter at end of word
            }
        }
        return prev_word + word;
    }
    convert_to_bits(shatr) {
        var result = '';
        for (var i = 1; i < shatr.length; i += 2) {
            if (shatr[i] !== this.sokoon) {
                result += '1';
            }
            else {
                result += '0';
            }
        }
        console.log(shatr, result);
        return result;
    }
    //TODO: التصريع هو أن يكون العرض والضروب على وزن واحد في أول بيت من القصيدة..
    //وهو يدخل على البحور كلها
    الطويل(صدر, عجز) {
        // TODO: البيت المصرع من الممكن أن ينتهي بـ مفاعيلن في العروض
        var sadr_reg = new RegExp('^(' + this.فعولن + '|' + this.فعولُ + '|' + this.فعْلن + '|' + this.فعْل + ')' + //فعلن وفعل قبيحات
            '(' + this.مفاعيلن + '|' + this.مفاعلن + '|' + this.مفاعيل + ')' +
            '(' + this.فعولن + '|' + this.فعولُ + ')' + (this.مفاعلن) + '$');
        var ajz_reg = new RegExp('^(' + this.فعولن + '|' + this.فعولُ + '|' + this.فعْلن + '|' + this.فعْل + ')' + //فعلن وفعل قبيحات
            '(' + this.مفاعيلن + '|' + this.مفاعلن + '|' + this.مفاعيل + ')' +
            '(' + this.فعولن + '|' + this.فعولُ + ')' +
            '(' + this.مفاعلن + '|' + this.مفاعيلن + '|' + this.فعولن + ')$');
        if (sadr_reg.test(صدر) && ajz_reg.test(عجز)) {
            return true;
        }
        return false;
    }
    المتقارب(صدر, عجز) {
        var sadr_tam_reg = new RegExp('^(' + this.فعولن + '|' + this.فعولُ + '|' + this.فعْلن + '|' + this.فعْل + ')' +
            '(' + this.فعولن + '|' + this.فعولُ + ')' +
            '(' + this.فعولن + '|' + this.فعولُ + ')' +
            '(' + this.فعولن + '|' + this.فعولُ + '|' + this.فعَل + ')$');
        var ajz_tam_reg = new RegExp('^(' + this.فعولن + '|' + this.فعولُ + ')' +
            '(' + this.فعولن + '|' + this.فعولُ + ')' +
            '(' + this.فعولن + '|' + this.فعولُ + ')' +
            '(' + this.فعولن + '|' + this.فعولْ + '|' + this.فعَل + '|' + '10' + ')$'); //فَع
        var sadr_majzoo_reg = new RegExp('^(' + this.فعولن + '|' + this.فعولُ + '|' + this.فعْلن + '|' + this.فعْل + ')' +
            '(' + this.فعولن + '|' + this.فعولُ + ')' +
            '(' + this.فعَل + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.فعولن + '|' + this.فعولُ + ')' +
            '(' + this.فعولن + '|' + this.فعولُ + ')' +
            '(' + this.فعَل + '|' + '10' + ')$'); //فَع
        if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
            console.log('tam');
            return true;
        }
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('majzoo');
            return true;
        }
        return false;
    }
    البسيط(صدر, عجز) {
        //الجوازات:
        //مستفعلن -> متفعلن : حسن إذا لحقه في أول الصدر وأول العجز.. قليل وغير مستحسن في غيره
        //مستفعلن -> مفتعلن: وهو قليل ويسمى الطي
        // مستفعلن -> متعلن: نادر جدا، وقبيح جدا، ويسمى الخبل
        //فاعلن -> فعلن: وهو حسن
        var sadr_tam_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.فعِلن + ')$');
        var ajz_tam_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.فعِلن + '|' + this.فعْلن + ')$');
        var sadr_majzoo_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.مفتعلن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.مستفعلان + '|' + this.مفعولن + ')$');
        var sadr_majzoo_reg2 = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + /*'|' +this.فعولُ + */ ')' +
            '(' + this.مفعولن + /*'|' +this.فعولُ + '|' + this.فعَل + */ ')$');
        var ajz_majzoo_reg2 = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + /*'|' +this.فعولُ + */ ')' +
            '(' + this.مفعولن + ')$');
        var sadr_majzoo_reg3 = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
            '(' + this.فعولن + ')$');
        var ajz_majzoo_reg3 = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
            '(' + this.فعولن + ')$');
        if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
            console.log('tam');
            return true;
        }
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('majzoo1');
            return true;
        }
        if (sadr_majzoo_reg2.test(صدر) && ajz_majzoo_reg2.test(عجز)) {
            console.log('majzoo2');
            return true;
        }
        if (sadr_majzoo_reg3.test(صدر) && ajz_majzoo_reg3.test(عجز)) {
            console.log('majzoo3');
            return true;
        }
        return false;
    }
    الرجز(صدر, عجز) {
        //مستفعلن -> متعلن: وهو قبيح
        //مفعولن -> فعولن: ضرب التام المقطوع فقط
        var sadr_tam_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');
        var ajz_tam_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.مفعولن + '|' + this.فعولن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');
        var sadr_majzoo_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');
        var sadr_mashtoor_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');
        var sadr_manhook_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متعلن + '|' + this.متفعلن + '|' + this.مفتعلن + ')$');
        if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
            console.log('tam');
            return true;
        }
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('majzoo');
            return true;
        }
        if (sadr_mashtoor_reg.test(صدر) && !عجز) {
            console.log('مشطور');
            return true;
        }
        if (sadr_manhook_reg.test(صدر) && !عجز) {
            console.log('منهوك');
            return true;
        }
        return false;
    }
    السريع(صدر, عجز) {
        //مستفعلن -> متعلن: وهو قبيح
        //مفعولان -< فعولان
        var sadr_tam_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')$');
        var ajz_tam_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.فاعلان + '|' + this.فاعلن + '|' + this.فعْلن + ')$');
        var sadr_tam_reg2 = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.فعِلن + ')$');
        var ajz_tam_reg2 = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.فعِلن + ')$');
        var sadr_mashtoor_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.مفعولان + '|' + this.فعولان + '|' + this.مفعولن + '|' + this.فعولن + ')$');
        if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
            console.log('tam');
            return true;
        }
        if (sadr_tam_reg2.test(صدر) && ajz_tam_reg2.test(عجز)) {
            console.log('tam2');
            return true;
        }
        if (sadr_mashtoor_reg.test(صدر) && !عجز) {
            console.log('مشطور');
            return true;
        }
        return false;
    }
    المنسرح(صدر, عجز) {
        //مستفعلن -> متعلن: وهو قبيح
        //مفعولات -> فعولات وهو قبيح
        //مفعولات -> فعلات وهو قبيح جدا!
        var sadr_tam_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.مفعولات + '|' + this.فاعلات + '|' + this.فعولات + '|' + this.فعلات + ')' +
            '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')$');
        var ajz_tam_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.مفعولات + '|' + this.فاعلات + '|' + this.فعولات + '|' + this.فعلات + ')' +
            '(' + this.مفعولن + '|' + this.فعولن + '|' + this.مفتعلن + ')$');
        var sadr_manhook_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.مفتعلن + '|' + this.متعلن + ')' +
            '(' + this.مفعولان + '|' + this.فعولان + '|' + this.مفعولن + '|' + this.فعولن + ')$');
        if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
            console.log('tam');
            return true;
        }
        if (sadr_manhook_reg.test(صدر) && !عجز) {
            console.log('منهوك');
            return true;
        }
        return false;
    }
    الكامل(صدر, عجز) {
        //فعلاتن: هذا الضرب يجوز موافقة العروض له في البيت المصرع وقد يلحق أحدهما أو كليهما الإضمار، وهو تسكين الثاني المتحرك. 
        //متفاعلن -> مفاعلن، ليس بالحسن
        //متفاعلن -> مفتعلن وهو قبيح جدا
        var sadr_tam_reg = new RegExp('^(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')$');
        var ajz_tam_reg = new RegExp('^(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.فعلاتن + '|' + this.فعْلن + '|' + this.مفتعلن + ')$');
        var sadr_tam_reg2 = new RegExp('^(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
            '(' + this.فعِلن + ')$');
        var ajz_tam_reg2 = new RegExp('^(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
            '(' + this.فعِلن + '|' + this.فعْلن + ')$');
        var sadr_majzoo_reg = new RegExp('^(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + ')' +
            '(' + this.متفاعلن + '|' + this.متْفاعلن + '|' + this.مفاعلن + '|' + this.مفتعلن + '|' + this.متفاعلاتن + '|' + this.متفاعلان + '|' + this.فعلاتن + ')$');
        if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
            console.log('tam');
            return true;
        }
        if (sadr_tam_reg2.test(صدر) && ajz_tam_reg2.test(عجز)) {
            console.log('tam');
            return true;
        }
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('مجزوء');
            return true;
        }
        return false;
    }
    الوافر(صدر, عجز) {
        //مفاعلتن -> مفاعلن: نادر وقبيح
        //مفاعلتن ->     مُفاعيلٌ: زحاف نادر وقبيح
        //مفاعلتن -> مفتعلن: وهو زحاف نادر وقبيح
        var sadr_tam_reg = new RegExp('^(' + this.مفاعلتن + '|' + this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
            '(' + this.مفاعلتن + '|' + this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
            '(' + this.فعولن + ')$');
        var ajz_tam_reg = new RegExp('^(' + this.مفاعلتن + '|' + this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
            '(' + this.مفاعلتن + '|' + this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
            '(' + this.فعولن + ')$');
        var sadr_majzoo_reg = new RegExp('^(' + this.مفاعلتن + '|' + this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
            '(' + this.مفاعلتن + '|' + this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.مفاعلتن + '|' + this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')' +
            '(' + this.مفاعلتن + '|' + this.مفاعلْتن + '|' + this.مفاعلن + '|' + this.مفاعيل + '|' + this.مفتعلن + '|' + this.مفعولن + ')$');
        if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
            console.log('تام');
            return true;
        }
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('مجزوء');
            return true;
        }
        return false;
    }
    المديد(صدر, عجز) {
        //فاعلاتن -> فعلات: زحاف قبيح
        //فاعلاتن -> فعلات: نادر وقبيح جدا
        var sadr_majzoo_reg = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلاتن + '|' + this.فعلاتن + '|' + this.فاعلات + '|' + this.فعلات + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلاتن + '|' + this.فعلاتن + ')$');
        var sadr_majzoo_reg2 = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلن + ')$');
        var ajz_majzoo_reg2 = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلان + '|' + this.فاعلن + '|' + this.فعْلن + ')$');
        var sadr_majzoo_reg3 = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
            '(' + this.فعِلن + ')$');
        var ajz_majzoo_reg3 = new RegExp('^(' + this.فاعلاتن + '|' + this.فاعلات + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')' +
            '(' + this.فعِلن + '|' + this.فعْلن + ')$');
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('مجزوء');
            return true;
        }
        if (sadr_majzoo_reg2.test(صدر) && ajz_majzoo_reg2.test(عجز)) {
            console.log('مجزوء');
            return true;
        }
        if (sadr_majzoo_reg3.test(صدر) && ajz_majzoo_reg3.test(عجز)) {
            console.log('مجزوء');
            return true;
        }
        return false;
    }
    الرمل(صدر, عجز) {
        var sadr_tam_reg = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
            '(' + this.فاعلاتن + '|' + this.فعلاتن + '|' + this.فاعلات + '|' + this.فعلات + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')$');
        var ajz_tam_reg = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
            '(' + this.فاعلاتن + '|' + this.فعِلن + '|' + this.فعلاتن + '|' + this.فاعلات + '|' + this.فعلات + ')' +
            '(' + this.فاعلاتن + '|' + this.فاعلان + '|' + this.فاعلن + '|' + this.فعلاتن + '|' + this.فعلات + '|' + this.فعِلن + ')$'); //check
        var sadr_majzoo_reg = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
            '(' + this.فاعلاتن + '|' + this.فعِلن + '|' + this.فعلات + '|' + this.فعلاتن + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلات + '|' + this.فاعلات + '|' + this.فعلاتن + ')' +
            '(' + this.فاعلاتان + '|' + this.فاعلاتن + '|' + this.فاعلن + '|' + this.فعلاتن + '|' + this.فعلات + '|' + this.فعلاتن + '|' + this.فعِلن + ')$');
        if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
            console.log('تام');
            return true;
        }
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('مجزوء');
            return true;
        }
        return false;
    }
    /*
        var sadr_tam_reg : RegExp = new RegExp('^()'+
                                              '()'+
                                              '()$');
    */
    الخفيف(صدر, عجز) {
        //فاعلاتن -> فاعلاتُ: يقع في الحشو والعروض وهو نادر مستكره
        //مستفعلن -> مستفعل: قبيح ونادر
        //مستفعلن -> متفعل: قبيح جدا
        var sadr_tam_reg = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلاتن + ')' +
            '(' + this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن + ')' +
            '(' + this.فاعلاتن + '|' + this.فعلاتن + ')$');
        var ajz_tam_reg = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلاتن + ')' +
            '(' + this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن + ')' +
            '(' + this.فاعلاتن + '|' + this.فعلاتن + '|' + this.مفعولن + '|' + this.فاعلن + '|' + this.فعِلن + ')$');
        var sadr_tam_reg2 = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلاتن + ')' +
            '(' + this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')$');
        var ajz_tam_reg2 = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلاتن + ')' +
            '(' + this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن + ')' +
            '(' + this.فاعلن + '|' + this.فعِلن + ')$');
        var sadr_majzoo_reg = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلاتن + ')' +
            '(' + this.مستفعلن + '|' + this.متفعل + '|' + this.مستفعل + '|' + this.متفعلن + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.فاعلاتن + '|' + this.فعلاتن + ')' +
            '(' + this.مستفعلن + '|' + this.متفعلن + '|' + this.فعولن + ')$');
        if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
            console.log('تام');
            return true;
        }
        if (sadr_tam_reg2.test(صدر) && ajz_tam_reg2.test(عجز)) {
            console.log('تام');
            return true;
        }
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('مجزوء');
            return true;
        }
        return false;
    }
    الهزج(صدر, عجز) {
        //مفاعيلن > مفاعلن وهو نادر وقبيح
        //
        var sadr_majzoo_reg = new RegExp('^(' + this.مفاعيلن + '|' + this.مفاعلن + '|' + this.مفاعيل + ')' +
            '(' + this.مفاعيلن + '|' + this.مفاعلن + '|' + this.مفاعيل + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.مفاعيلن + '|' + this.مفاعلن + '|' + this.مفاعيل + ')' +
            '(' + this.مفاعيلن + '|' + this.فعولن + ')$');
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('مجزوء');
            return true;
        }
        return false;
    }
    المضارع(صدر, عجز) {
        var sadr_majzoo_reg = new RegExp('^(' + this.مفاعيل + '|' + this.فاعلن + '|' + this.مفعول + ')' +
            '(' + this.فاعلاتن + '|' + this.فاعلات + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.مفاعيل + '|' + this.فاعلن + '|' + this.مفعول + ')' +
            '(' + this.فاعلاتن + ')$');
        var sadr_majzoo_reg2 = new RegExp('^(' + this.مفاعلن + '|' + this.فاعلن + '|' + this.مفعول + ')' +
            '(' + this.فاعلاتن + '|' + this.فاعلات + ')$');
        var ajz_majzoo_reg2 = new RegExp('^(' + this.مفاعلن + '|' + this.فاعلن + '|' + this.مفعول + ')' +
            '(' + this.فاعلاتن + ')$');
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('مجزوء');
            return true;
        }
        if (sadr_majzoo_reg2.test(صدر) && ajz_majzoo_reg2.test(عجز)) {
            console.log('مجزوء');
            return true;
        }
        return false;
    }
    المجتث(صدر, عجز) {
        var sadr_majzoo_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متفعل + '|' + this.متفعلن + '|' + this.مستفعل + ')' +
            '(' + this.فاعلاتن + '|' + this.فعلاتن + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.مستفعلن + '|' + this.متفعل + '|' + this.متفعلن + '|' + this.مستفعل + ')' +
            '(' + this.فاعلاتن + '|' + this.فعلاتن + '|' + this.مفعولن + ')$');
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('مجزوء');
            return true;
        }
        return false;
    }
    المقتضب(صدر, عجز) {
        var sadr_majzoo_reg = new RegExp('^(' + this.فاعلات + '|' + this.مفاعيل + ')' +
            '(' + this.مفتعلن + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.فاعلات + '|' + this.مفاعيل + ')' +
            '(' + this.مفتعلن + ')$');
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('مجزوء');
            return true;
        }
        return false;
    }
    المتدارك(صدر, عجز) {
        var sadr_tam_reg = new RegExp('^(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')$');
        var ajz_tam_reg = new RegExp('^(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')$');
        var sadr_majzoo_reg = new RegExp('^(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')$');
        var ajz_majzoo_reg = new RegExp('^(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + ')' +
            '(' + this.فاعلن + '|' + this.فعْلن + '|' + this.فعِلن + '|' + this.فاعلان + '|' + this.فعلاتن + ')$');
        if (sadr_tam_reg.test(صدر) && ajz_tam_reg.test(عجز)) {
            console.log('tam');
            return true;
        }
        if (sadr_majzoo_reg.test(صدر) && ajz_majzoo_reg.test(عجز)) {
            console.log('majzoo1');
            return true;
        }
        return false;
    }
    replaceAt(w, index, replacement) {
        return w.substr(0, index) + replacement + w.substr(index + 1);
    }
}
VerifierService.NOT_MOZOON = 'البيت الذي أدخلته غير موزون';
VerifierService.ɵfac = function VerifierService_Factory(t) { return new (t || VerifierService)(); };
VerifierService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: VerifierService, factory: VerifierService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VerifierService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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
    production: false
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/AlThukairM/Programming/mozoon/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map