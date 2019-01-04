(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"buttons\">\n  <textarea [(ngModel)]=\"raw\">\n  </textarea>\n  <button (click)=\"handleUpdateRaw()\">handle raw</button>\n  <button (click)=\"generateRaw()\">generate raw</button>\n  <div class=\"filename\">\n    שם קובץ:\n    <input #val4 (change)=\"updateFileName(val4.value)\" [value]=\"filename\" list=\"filenames\">\n    <datalist id=\"filenames\">\n      <option *ngFor=\"let filename of filenames\" [value]=\"filename\"></option>\n    </datalist>\n  </div>\n  <div class=\"role\">\n    תפקיד:\n    <input #val0 (change)=\"updateRole(val0.value)\" [value]=\"collection.role\">\n  </div>\n  <div class=\"majorNeed\">\n    צורך על:\n    <input #val1 (change)=\"updateMajorNeed(val1.value)\" [value]=\"collection.majorNeed\">\n  </div>\n  <div class=\"sceneObjective\">\n    מטרת הסצנה:\n    <input #val2 (change)=\"updateSceneObjective(val2.value)\" [value]=\"collection.sceneObjective\" list=\"sceneObjectives\">\n    <datalist id=\"sceneObjectives\">\n      <option *ngFor=\"let sceneObjective of sceneObjectives\" [value]=\"sceneObjective\"></option>\n    </datalist>\n  </div>\n  <div class=\"substitution\">\n    תחליף:\n    <input #val5 (change)=\"updateSubstitution(val5.value)\" [value]=\"collection.substitution\">\n  </div>\n</div>\n\n<div class=\"header\">\n  <div class=\"obstacles\">\n    <div class=\"line\"></div>\n    מכשולים\n  </div>\n  <div class=\"scene\">\n    <div class=\"line\"></div>\n    סצנה\n  </div>\n  <div class=\"actions\">\n    <div class=\"line\"></div>\n    פעולות/כוונות\n  </div>\n  <div class=\"doings\">\n    <div class=\"line\"></div>\n    מעשים\n  </div>\n</div>\n<div class=\"scene-container\" #chunk *ngIf=\"collection\">\n  <!--<app-bit-chunk [bitChunk]=\"null\" class=\"header\"></app-bit-chunk>-->\n  <div class=\"sceneStream\" contenteditable=\"true\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" spellcheck=\"false\">\n  </div>\n  <div class=\"sceneStreamGenerated\">\n    <ng-container *ngFor=\"let roleStream of collection.roleStreams\">\n      <div class=\"bitRole bitRoleName\" contenteditable=\"false\">\n        {{roleStream.role}}\n      </div>\n      <ng-container *ngFor=\"let part of roleStream.stream\">\n        <ng-container *ngIf=\"part.constructor.name == 'Word'\">\n          <span class=\"word\">{{part.value}}</span>\n        </ng-container>\n        <ng-container *ngIf=\"part.constructor.name == 'Punctuation'\">\n          <span class=\"punctuation\">{{part.value}}</span>\n        </ng-container>\n        <ng-container *ngIf=\"part.constructor.name == 'NewLine'\">\n          <span class=\"newLine\" contenteditable=\"false\"><br></span>\n        </ng-container>\n        <ng-container *ngIf=\"part.constructor.name == 'Bit'\">\n          <span class=\"bit\" contenteditable=\"false\" [attr.data-bit-id]=\"part.bitId\"><span>/</span></span>\n        </ng-container>\n        <ng-container *ngIf=\"part.constructor.name == 'BitInnerObjectSubstitution'\">\n          <app-bit-substitution contenteditable=\"false\" [bitInnerObjectSubstitution]=\"part\" [attr.data-substitutionid]=\"part.innerObjectSubstitutionId\">\n          </app-bit-substitution>\n        </ng-container>\n      </ng-container>\n    </ng-container>\n  </div>\n  <ng-container *ngFor=\"let roleStream of collection.roleStreams\">\n    <ng-container *ngFor=\"let part of roleStream.stream\">\n      <ng-container *ngIf=\"part.constructor.name == 'Bit'\">\n        <div class=\"bitInfo\" [attr.data-bit-id]=\"part.bitId\">\n          <div class=\"marker\"></div>\n          <div class=\"obstacle\" contenteditable=\"true\" [innerHTML]=\"collection.obstacles[part.bitId] | keepHtml\">\n          </div>\n          <div class=\"action\" contenteditable=\"true\" [innerHTML]=\"collection.actions[part.bitId] | keepHtml\">\n          </div>\n          <div class=\"doing\" contenteditable=\"true\" [innerHTML]=\"collection.doings[part.bitId] | keepHtml\">\n          </div>\n        </div>\n      </ng-container>\n    </ng-container>\n  </ng-container>\n</div>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .ngx-contextmenu .dropdown-menu {\n  border: solid 1px chartreuse;\n  background-color: darkgreen;\n  padding: 0; }\n\n::ng-deep .ngx-contextmenu li {\n  display: block;\n  border-top: solid 1px chartreuse;\n  text-transform: uppercase;\n  text-align: center; }\n\n::ng-deep .ngx-contextmenu li:first-child {\n  border-top: none; }\n\n::ng-deep .ngx-contextmenu a {\n  color: chartreuse;\n  display: block;\n  padding: 0.5em 1em; }\n\n::ng-deep .ngx-contextmenu a:hover {\n  color: darkgreen;\n  background-color: chartreuse; }\n\n:host {\n  position: relative; }\n\n.buttons {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  background: white;\n  /* display: inline; */\n  width: 100%;\n  z-index: 1;\n  height: 90px; }\n\n.header {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 90px;\n  background: white;\n  /* display: inline; */\n  width: 100%;\n  z-index: 1; }\n\n.filename {\n  position: absolute;\n  top: 0;\n  right: 0;\n  direction: rtl; }\n\n.role {\n  position: absolute;\n  top: 25px;\n  right: 0;\n  direction: rtl; }\n\n.majorNeed {\n  position: absolute;\n  top: 50px;\n  right: 0;\n  direction: rtl; }\n\n.sceneObjective {\n  position: absolute;\n  top: 0;\n  right: 315px;\n  direction: rtl; }\n\n.substitution {\n  position: absolute;\n  top: 25px;\n  right: 315px;\n  direction: rtl; }\n\n.filename input,\n.role input,\n.majorNeed input,\n.substitution input,\n.sceneObjective input {\n  position: absolute;\n  right: 82px;\n  top: 0;\n  width: 215px; }\n\n.sceneObjective input {\n  width: 300px; }\n\n.sceneObjective textarea {\n  position: absolute;\n  top: 0;\n  right: 86px;\n  width: 400px;\n  height: 80px; }\n\n::ng-deep .word + .word:before {\n  content: \"\";\n  margin-right: 0.2em; }\n\n::ng-deep .word + .app-bit-substitution:before {\n  content: \"\";\n  margin-right: 0.2em; }\n\n::ng-deep .punctuation + :before {\n  content: \"\";\n  margin-right: 0.2em;\n  display: inline-block; }\n\n.header {\n  direction: rtl; }\n\n.punctuation,\n.word {\n  display: inline-block; }\n\n.obstacle,\n.obstacles {\n  right: 0;\n  width: calc(50% / 3 - 10px);\n  position: absolute; }\n\n.action,\n.actions {\n  right: calc(50% + 50% / 3);\n  width: calc(50% / 3 - 10px);\n  position: absolute; }\n\n.doing,\n.doings {\n  right: calc(50% + 50% / 3 * 2);\n  width: calc(50% / 3 - 10px);\n  position: absolute; }\n\n.line {\n  height: 100vh;\n  position: absolute;\n  right: -5px;\n  top: 0;\n  width: calc(100% + 5px);\n  border-right: 1px solid black;\n  pointer-events: none; }\n\n.header {\n  height: 1.1em;\n  border-bottom: 1px solid black; }\n\n.scene {\n  top: 0;\n  position: absolute;\n  right: calc(50% / 3);\n  width: calc(50% - 10px); }\n\n.sceneStream {\n  top: 20px;\n  position: relative;\n  left: calc(50% / 3 * 2 + 10px);\n  width: calc(50% - 75px - 10px);\n  direction: rtl;\n  outline: none;\n  line-height: 1.3; }\n\n.scene-container {\n  position: relative;\n  width: 100%; }\n\n.sceneStreamGenerated {\n  display: none; }\n\n.bitInfo {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  direction: rtl; }\n\n.bit {\n  font-size: 1.5em;\n  font-weight: bold;\n  margin-left: 2px; }\n\n.bit.asNewLinePrep {\n  margin-right: 10px; }\n\n.bitInfo {\n  min-height: 1.7em;\n  pointer-events: none; }\n\n.bitInfo > * {\n  min-height: inherit;\n  padding-top: 0.3em;\n  outline: none;\n  pointer-events: auto; }\n\n.bitInfo:not(.marked) > .marker {\n  display: none; }\n\n.bitInfo > .marker {\n  position: absolute;\n  z-index: -1;\n  pointer-events: none;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.1); }\n\n.bit.asNewLine:before {\n  content: \"\";\n  display: block; }\n\n.bit > span {\n  display: inline-block; }\n\n.sceneStream .bitRoleName {\n  margin-right: -75px;\n  width: 75px;\n  display: inline-block;\n  margin-top: 1.3em; }\n\n.sceneStream .bitRoleName:first-child {\n  padding-top: 0; }\n\n.current {\n  background: rgba(0, 0, 0, 0.3); }\n\n@media print {\n  .buttons {\n    display: none !important; }\n  ::ng-deep .bitRoleMarker {\n    display: none !important; }\n  .header {\n    position: relative;\n    top: 0; }\n  ::ng-deep app-bit-chunk {\n    border-bottom: none !important; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYzpcXG9tcmkgd29ya1xcY2h1YmJ1Y2svc3JjXFxhcHBcXGFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDZCQUE0QjtFQUM1Qiw0QkFBMkI7RUFDM0IsV0FBVSxFQUNYOztBQUNEO0VBQ0UsZUFBYztFQUNkLGlDQUFnQztFQUNoQywwQkFBeUI7RUFDekIsbUJBQWtCLEVBQ25COztBQUNEO0VBQ0UsaUJBQWUsRUFDaEI7O0FBQ0Q7RUFDRSxrQkFBZ0I7RUFDaEIsZUFBYztFQUNkLG1CQUFrQixFQUNuQjs7QUFDRDtFQUNFLGlCQUFlO0VBQ2YsNkJBQTJCLEVBQzVCOztBQUVEO0VBQ0UsbUJBQWlCLEVBQ2xCOztBQUVEO0VBQ0UseUJBQWdCO0VBQWhCLGlCQUFnQjtFQUNoQixPQUFNO0VBQ04sa0JBQWlCO0VBQ2pCLHNCQUFzQjtFQUN0QixZQUFXO0VBQ1gsV0FBVTtFQUNWLGFBQVcsRUFDWjs7QUFDRDtFQUNFLHlCQUFnQjtFQUFoQixpQkFBZ0I7RUFDaEIsVUFBUztFQUNULGtCQUFpQjtFQUNqQixzQkFBc0I7RUFDdEIsWUFBVztFQUNYLFdBQVUsRUFDWDs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sU0FBUTtFQUNSLGVBQWMsRUFDZjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsU0FBUTtFQUNSLGVBQWMsRUFDZjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsU0FBUTtFQUNSLGVBQWMsRUFDZjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sYUFBWTtFQUNaLGVBQWMsRUFDZjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixVQUFTO0VBQ1QsYUFBWTtFQUNaLGVBQWMsRUFDZjs7QUFFRDs7Ozs7RUFLRSxtQkFBa0I7RUFDbEIsWUFBVztFQUNYLE9BQUs7RUFDTCxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxhQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBa0I7RUFDbEIsT0FBTTtFQUNOLFlBQVc7RUFDWCxhQUFZO0VBQ1osYUFBWSxFQUNiOztBQUVEO0VBQ0UsWUFBVTtFQUNWLG9CQUFrQixFQUNuQjs7QUFFRDtFQUNFLFlBQVU7RUFDVixvQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxZQUFVO0VBQ1Ysb0JBQWtCO0VBQ2xCLHNCQUFvQixFQUNyQjs7QUFFRDtFQUNFLGVBQWEsRUFDZDs7QUFFRDs7RUFFRSxzQkFBb0IsRUFDckI7O0FBRUQ7O0VBRUUsU0FBTztFQUNQLDRCQUEwQjtFQUMxQixtQkFBaUIsRUFDbEI7O0FBRUQ7O0VBRUUsMkJBQXlCO0VBQ3pCLDRCQUEwQjtFQUMxQixtQkFBaUIsRUFDbEI7O0FBRUQ7O0VBRUUsK0JBQTZCO0VBQzdCLDRCQUEwQjtFQUMxQixtQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxjQUFZO0VBQ1osbUJBQWlCO0VBQ2pCLFlBQVU7RUFDVixPQUFLO0VBQ0wsd0JBQXNCO0VBQ3RCLDhCQUE0QjtFQUM1QixxQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxjQUFZO0VBQ1osK0JBQTZCLEVBQzlCOztBQUlEO0VBQ0UsT0FBSztFQUNMLG1CQUFpQjtFQUNqQixxQkFBb0I7RUFDcEIsd0JBQXVCLEVBQ3hCOztBQUNEO0VBQ0UsVUFBUTtFQUNSLG1CQUFpQjtFQUNqQiwrQkFBOEI7RUFDOUIsK0JBQThCO0VBQzlCLGVBQWE7RUFDYixjQUFZO0VBQ1osaUJBQWdCLEVBQ2pCOztBQUVEO0VBQ0UsbUJBQWlCO0VBQ2pCLFlBQVUsRUFDWDs7QUFFRDtFQUNFLGNBQVksRUFDYjs7QUFFRDtFQUNFLG1CQUFrQjtFQUNsQixPQUFNO0VBQ04sUUFBTztFQUNQLFlBQVc7RUFDWCxlQUFhLEVBQ2Q7O0FBRUQ7RUFDRSxpQkFBZ0I7RUFDaEIsa0JBQWlCO0VBQ2pCLGlCQUFnQixFQUNqQjs7QUFFRDtFQUNFLG1CQUFpQixFQUNsQjs7QUFFRDtFQUNFLGtCQUFnQjtFQUNoQixxQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxvQkFBa0I7RUFDbEIsbUJBQWtCO0VBQ2xCLGNBQVk7RUFDWixxQkFBbUIsRUFDcEI7O0FBRUQ7RUFDRSxjQUFZLEVBQ2I7O0FBRUQ7RUFDRSxtQkFBaUI7RUFDakIsWUFBVTtFQUNWLHFCQUFtQjtFQUNuQixZQUFVO0VBQ1YsYUFBVztFQUNYLFFBQU07RUFDTixPQUFLO0VBQ0wscUNBQStCLEVBQ2hDOztBQUdEO0VBQ0UsWUFBVTtFQUNWLGVBQWEsRUFDZDs7QUFFRDtFQUNFLHNCQUFvQixFQUNyQjs7QUFHRDtFQUNFLG9CQUFrQjtFQUNsQixZQUFVO0VBQ1Ysc0JBQW9CO0VBQ3BCLGtCQUFpQixFQUNsQjs7QUFFRDtFQUNFLGVBQWEsRUFDZDs7QUFFRDtFQUNFLCtCQUF5QixFQUMxQjs7QUFHRDtFQUNFO0lBQ0UseUJBQXVCLEVBQ3hCO0VBQ0Q7SUFDRSx5QkFBdUIsRUFDeEI7RUFFRDtJQUNFLG1CQUFrQjtJQUNsQixPQUFNLEVBQ1A7RUFFRDtJQUNFLCtCQUE2QixFQUM5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5uZ3gtY29udGV4dG1lbnUgLmRyb3Bkb3duLW1lbnUge1xyXG4gIGJvcmRlcjogc29saWQgMXB4IGNoYXJ0cmV1c2U7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya2dyZWVuO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuOjpuZy1kZWVwIC5uZ3gtY29udGV4dG1lbnUgbGkge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGJvcmRlci10b3A6IHNvbGlkIDFweCBjaGFydHJldXNlO1xyXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbjo6bmctZGVlcCAubmd4LWNvbnRleHRtZW51IGxpOmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItdG9wOm5vbmU7XHJcbn1cclxuOjpuZy1kZWVwIC5uZ3gtY29udGV4dG1lbnUgYSB7XHJcbiAgY29sb3I6Y2hhcnRyZXVzZTtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBwYWRkaW5nOiAwLjVlbSAxZW07XHJcbn1cclxuOjpuZy1kZWVwIC5uZ3gtY29udGV4dG1lbnUgYTpob3ZlciB7XHJcbiAgY29sb3I6ZGFya2dyZWVuO1xyXG4gIGJhY2tncm91bmQtY29sb3I6Y2hhcnRyZXVzZTtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG4uYnV0dG9ucyB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgLyogZGlzcGxheTogaW5saW5lOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgaGVpZ2h0OjkwcHg7XHJcbn1cclxuLmhlYWRlciB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDkwcHg7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgLyogZGlzcGxheTogaW5saW5lOyAqL1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5maWxlbmFtZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMDtcclxuICBkaXJlY3Rpb246IHJ0bDtcclxufVxyXG5cclxuLnJvbGUge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI1cHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuXHJcbi5tYWpvck5lZWQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwcHg7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuXHJcbi5zY2VuZU9iamVjdGl2ZSB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICByaWdodDogMzE1cHg7XHJcbiAgZGlyZWN0aW9uOiBydGw7XHJcbn1cclxuXHJcbi5zdWJzdGl0dXRpb24ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDI1cHg7XHJcbiAgcmlnaHQ6IDMxNXB4O1xyXG4gIGRpcmVjdGlvbjogcnRsO1xyXG59XHJcblxyXG4uZmlsZW5hbWUgaW5wdXQsXHJcbi5yb2xlIGlucHV0LFxyXG4ubWFqb3JOZWVkIGlucHV0LFxyXG4uc3Vic3RpdHV0aW9uIGlucHV0LFxyXG4uc2NlbmVPYmplY3RpdmUgaW5wdXQge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICByaWdodDogODJweDtcclxuICB0b3A6MDtcclxuICB3aWR0aDogMjE1cHg7XHJcbn1cclxuXHJcbi5zY2VuZU9iamVjdGl2ZSBpbnB1dCB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcblxyXG4uc2NlbmVPYmplY3RpdmUgdGV4dGFyZWEge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDg2cHg7XHJcbiAgd2lkdGg6IDQwMHB4O1xyXG4gIGhlaWdodDogODBweDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC53b3JkICsgLndvcmQ6YmVmb3JlIHtcclxuICBjb250ZW50OlwiXCI7XHJcbiAgbWFyZ2luLXJpZ2h0OjAuMmVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLndvcmQgKyAuYXBwLWJpdC1zdWJzdGl0dXRpb246YmVmb3JlIHtcclxuICBjb250ZW50OlwiXCI7XHJcbiAgbWFyZ2luLXJpZ2h0OjAuMmVtO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLnB1bmN0dWF0aW9uICsgOmJlZm9yZSB7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIG1hcmdpbi1yaWdodDowLjJlbTtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgZGlyZWN0aW9uOnJ0bDtcclxufVxyXG5cclxuLnB1bmN0dWF0aW9uLFxyXG4ud29yZCB7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5vYnN0YWNsZSxcclxuLm9ic3RhY2xlcyB7XHJcbiAgcmlnaHQ6MDtcclxuICB3aWR0aDpjYWxjKDUwJSAvIDMgLSAxMHB4KTtcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG5cclxuLmFjdGlvbixcclxuLmFjdGlvbnMge1xyXG4gIHJpZ2h0OmNhbGMoNTAlICsgNTAlIC8gMyk7XHJcbiAgd2lkdGg6Y2FsYyg1MCUgLyAzIC0gMTBweCk7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5kb2luZyxcclxuLmRvaW5ncyB7XHJcbiAgcmlnaHQ6Y2FsYyg1MCUgKyA1MCUgLyAzICogMik7XHJcbiAgd2lkdGg6Y2FsYyg1MCUgLyAzIC0gMTBweCk7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbn1cclxuXHJcbi5saW5lIHtcclxuICBoZWlnaHQ6MTAwdmg7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgcmlnaHQ6LTVweDtcclxuICB0b3A6MDtcclxuICB3aWR0aDpjYWxjKDEwMCUgKyA1cHgpO1xyXG4gIGJvcmRlci1yaWdodDoxcHggc29saWQgYmxhY2s7XHJcbiAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxufVxyXG5cclxuLmhlYWRlciB7XHJcbiAgaGVpZ2h0OjEuMWVtO1xyXG4gIGJvcmRlci1ib3R0b206MXB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG5cclxuXHJcbi5zY2VuZSB7XHJcbiAgdG9wOjA7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgcmlnaHQ6IGNhbGMoNTAlIC8gMyk7XHJcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XHJcbn1cclxuLnNjZW5lU3RyZWFtIHtcclxuICB0b3A6MjBweDtcclxuICBwb3NpdGlvbjpyZWxhdGl2ZTtcclxuICBsZWZ0OiBjYWxjKDUwJSAvIDMgKiAyICsgMTBweCk7XHJcbiAgd2lkdGg6IGNhbGMoNTAlIC0gNzVweCAtIDEwcHgpO1xyXG4gIGRpcmVjdGlvbjpydGw7XHJcbiAgb3V0bGluZTpub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjM7XHJcbn1cclxuXHJcbi5zY2VuZS1jb250YWluZXIge1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5zY2VuZVN0cmVhbUdlbmVyYXRlZCB7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG4uYml0SW5mbyB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGRpcmVjdGlvbjpydGw7XHJcbn1cclxuXHJcbi5iaXQge1xyXG4gIGZvbnQtc2l6ZTogMS41ZW07XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgbWFyZ2luLWxlZnQ6IDJweDtcclxufVxyXG5cclxuLmJpdC5hc05ld0xpbmVQcmVwIHtcclxuICBtYXJnaW4tcmlnaHQ6MTBweDtcclxufVxyXG5cclxuLmJpdEluZm8ge1xyXG4gIG1pbi1oZWlnaHQ6MS43ZW07XHJcbiAgcG9pbnRlci1ldmVudHM6bm9uZTtcclxufVxyXG5cclxuLmJpdEluZm8gPiAqIHtcclxuICBtaW4taGVpZ2h0OmluaGVyaXQ7XHJcbiAgcGFkZGluZy10b3A6IDAuM2VtO1xyXG4gIG91dGxpbmU6bm9uZTtcclxuICBwb2ludGVyLWV2ZW50czphdXRvO1xyXG59XHJcblxyXG4uYml0SW5mbzpub3QoLm1hcmtlZCkgPiAubWFya2VyIHtcclxuICBkaXNwbGF5Om5vbmU7XHJcbn1cclxuXHJcbi5iaXRJbmZvID4gLm1hcmtlciB7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgei1pbmRleDotMTtcclxuICBwb2ludGVyLWV2ZW50czpub25lO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwMCU7XHJcbiAgbGVmdDowO1xyXG4gIHRvcDowO1xyXG4gIGJhY2tncm91bmQtY29sb3I6cmdiYSgwLDAsMCwuMSk7XHJcbn1cclxuXHJcblxyXG4uYml0LmFzTmV3TGluZTpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICBkaXNwbGF5OmJsb2NrO1xyXG59XHJcblxyXG4uYml0ID4gc3BhbiB7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcblxyXG4uc2NlbmVTdHJlYW0gLmJpdFJvbGVOYW1lIHtcclxuICBtYXJnaW4tcmlnaHQ6LTc1cHg7XHJcbiAgd2lkdGg6NzVweDtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxuICBtYXJnaW4tdG9wOiAxLjNlbTtcclxufVxyXG5cclxuLnNjZW5lU3RyZWFtIC5iaXRSb2xlTmFtZTpmaXJzdC1jaGlsZCB7XHJcbiAgcGFkZGluZy10b3A6MDtcclxufVxyXG5cclxuLmN1cnJlbnQge1xyXG4gIGJhY2tncm91bmQ6cmdiYSgwLDAsMCwuMyk7XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgcHJpbnQge1xyXG4gIC5idXR0b25zIHtcclxuICAgIGRpc3BsYXk6bm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICA6Om5nLWRlZXAgLmJpdFJvbGVNYXJrZXIge1xyXG4gICAgZGlzcGxheTpub25lICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMDtcclxuICB9XHJcblxyXG4gIDo6bmctZGVlcCBhcHAtYml0LWNodW5rIHtcclxuICAgIGJvcmRlci1ib3R0b206bm9uZSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: Punctuation, Word, NewLine, BitInnerObjectSubstitution, Bit, RoleStream, Scene, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Punctuation", function() { return Punctuation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Word", function() { return Word; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewLine", function() { return NewLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitInnerObjectSubstitution", function() { return BitInnerObjectSubstitution; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Bit", function() { return Bit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleStream", function() { return RoleStream; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Scene", function() { return Scene; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var Punctuation = /** @class */ (function () {
    function Punctuation() {
    }
    return Punctuation;
}());

var Word = /** @class */ (function () {
    function Word() {
    }
    return Word;
}());

var NewLine = /** @class */ (function () {
    function NewLine() {
    }
    return NewLine;
}());

var BitInnerObjectSubstitution = /** @class */ (function () {
    function BitInnerObjectSubstitution() {
    }
    return BitInnerObjectSubstitution;
}());

var Bit = /** @class */ (function () {
    function Bit() {
    }
    return Bit;
}());

/*
export class BitLine {
  content:Array<BitWord|BitPunctuation|BitInnerObjectSubstitution>;
  first:boolean;
}
*/
var RoleStream = /** @class */ (function () {
    function RoleStream() {
    }
    return RoleStream;
}());

/*
export class BitChunk {
  chunkId:number;
}
*/
var Scene = /** @class */ (function () {
    function Scene() {
    }
    return Scene;
}());

var AppComponent = /** @class */ (function () {
    function AppComponent(cdr) {
        this.cdr = cdr;
        this.title = 'chubbuck';
        this.raw = "";
        this.role = "mati";
        this.filename = "";
        this.collection = { role: "" };
        this.retainScroll = null;
        this.filenames = [];
        this.sceneObjectives = [];
        this.processedFlag = false;
        var self = this;
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).on("resize", function () {
            setTimeout(function () {
                self.retainScroll = jquery__WEBPACK_IMPORTED_MODULE_1__("html").scrollTop();
                self.__updatePositions();
            }, 0);
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__(document).on("input", ".sceneStream", window["_"].throttle(function () {
            setTimeout(function () {
                self.retainScroll = jquery__WEBPACK_IMPORTED_MODULE_1__("html").scrollTop();
                self.__updatePositions();
            }, 0);
        }, 250));
        document.addEventListener('selectionchange', function () {
            var root = jquery__WEBPACK_IMPORTED_MODULE_1__(self.chunkElement.nativeElement);
            root.find(".current").removeClass("current");
            var current = jquery__WEBPACK_IMPORTED_MODULE_1__(window.getSelection().anchorNode).closest(".word,.newLine,.punctuation,.bitRoleName");
            current.addClass("current");
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).on("mouseenter", function (ev) {
            jquery__WEBPACK_IMPORTED_MODULE_1__(".marked").removeClass("marked");
            var bitId = jquery__WEBPACK_IMPORTED_MODULE_1__(ev.target).closest(".bitInfo,.bit").data("bit-id");
            jquery__WEBPACK_IMPORTED_MODULE_1__("[data-bit-id='" + bitId + "']").addClass("marked");
        });
        jquery__WEBPACK_IMPORTED_MODULE_1__(window).bind('keydown', function (event) {
            if (event.ctrlKey || event.metaKey) {
                switch (String.fromCharCode(event.which).toLowerCase()) {
                    case 'b':
                        event.preventDefault();
                        //alert('ctrl-b');
                        var root = jquery__WEBPACK_IMPORTED_MODULE_1__(self.chunkElement.nativeElement);
                        var current = root.find(".current").prepend("<span class='added'>///</span>");
                        self.generateRaw();
                        self.cdr.detectChanges();
                        break;
                    case 'i':
                        event.preventDefault();
                        //alert('ctrl-b');
                        var root = jquery__WEBPACK_IMPORTED_MODULE_1__(self.chunkElement.nativeElement);
                        var current = root.find(".current").prepend("<span class='added'>$$$</span>");
                        self.generateRaw();
                        self.cdr.detectChanges();
                        break;
                }
            }
        });
    }
    AppComponent.prototype.generateRaw = function () {
        this.retainScroll = jquery__WEBPACK_IMPORTED_MODULE_1__("html").scrollTop();
        var flag = false;
        var res = "";
        var root = jquery__WEBPACK_IMPORTED_MODULE_1__(this.chunkElement.nativeElement);
        /*
        root.find("app-bit-line").each(function() {
            $(this).append('<span class="bitRole bitLineEnd"></span>');
        });
        root.find(".bitRoleMarker").each(function() {
            $(this).closest("app-bit-role").prepend(this);
        });
        */
        root.find(".sceneStream").find(".bit,.newLine,.punctuation,.word,.bitRoleName,app-bit-substitution").each(function () {
            var text = "";
            if (jquery__WEBPACK_IMPORTED_MODULE_1__(this).is("app-bit-substitution")) {
                var val = jquery__WEBPACK_IMPORTED_MODULE_1__(this).find(">div").text().trim();
                if (val)
                    text = "/*SUB" + jquery__WEBPACK_IMPORTED_MODULE_1__(this).data("substitutionid") + "*/";
            }
            else if (jquery__WEBPACK_IMPORTED_MODULE_1__(this).is(".bit")) {
                text = "/*BIT" + jquery__WEBPACK_IMPORTED_MODULE_1__(this).data("bitId") + "*/";
            }
            else
                text = jquery__WEBPACK_IMPORTED_MODULE_1__(this).text().trim();
            if (jquery__WEBPACK_IMPORTED_MODULE_1__(this).is(".bitRoleName"))
                text += ":";
            if (jquery__WEBPACK_IMPORTED_MODULE_1__(this).is(".newLine"))
                text += "\n";
            res = res + " " + text;
        });
        root.find(".bitInfo .obstacle").each(function () {
            var val = jquery__WEBPACK_IMPORTED_MODULE_1__(this).html();
            if (val) {
                var chunkId = jquery__WEBPACK_IMPORTED_MODULE_1__(this).closest(".bitInfo").data("bit-id");
                res = res + "///***obstacle:" + chunkId + ":" + val + "***///";
            }
        });
        root.find(".bitInfo .action").each(function () {
            var val = jquery__WEBPACK_IMPORTED_MODULE_1__(this).html();
            if (val) {
                var chunkId = jquery__WEBPACK_IMPORTED_MODULE_1__(this).closest(".bitInfo").data("bit-id");
                res = res + "///***action:" + chunkId + ":" + val + "***///";
            }
        });
        root.find(".bitInfo .doing").each(function () {
            var val = jquery__WEBPACK_IMPORTED_MODULE_1__(this).html();
            if (val) {
                var chunkId = jquery__WEBPACK_IMPORTED_MODULE_1__(this).closest(".bitInfo").data("bit-id");
                res = res + "///***doing:" + chunkId + ":" + val + "***///";
            }
        });
        root.find("app-bit-substitution > div").each(function () {
            var val = jquery__WEBPACK_IMPORTED_MODULE_1__(this).text().trim();
            if (val) {
                var chunkId = jquery__WEBPACK_IMPORTED_MODULE_1__(this).closest("app-bit-substitution").data("substitutionid");
                res = res + "///***innerObjectSubstitution:" + chunkId + ":" + val + "***///";
            }
        });
        res = res + "///***role:0:" + this.collection.role + "***///";
        res = res + "///***majorNeed:0:" + this.collection.majorNeed + "***///";
        res = res + "///***substitution:0:" + this.collection.substitution + "***///";
        res = res + "///***sceneObjective:0:" + this.collection.sceneObjective + "***///";
        root.find(".added").remove();
        //console.log(res);
        this.__handleUpdateRaw(res, true);
    };
    AppComponent.prototype.handleUpdateRaw = function () {
        this.__handleUpdateRaw(this.raw, false);
    };
    AppComponent.prototype.updateFileName = function (v) {
        if (v && this.filename != v) {
            this.filename = v.trim();
            this.collection = { sceneObjective: null };
            this.sceneObjectives = [];
            for (var i = 0; i < localStorage.length; i++) {
                if (localStorage.key(i).match(/^collection_v2_/)) {
                    if (JSON.parse(localStorage.key(i).replace("collection_v2_", "")).filename == this.filename)
                        this.sceneObjectives.push(JSON.parse(localStorage.key(i).replace("collection_v2_", "")).sceneObject);
                }
            }
            console.log(this.sceneObjectives);
            this.updateSceneObjective("");
            this.cdr.detectChanges();
        }
    };
    AppComponent.prototype.updateRole = function (v) {
        if (v && this.collection.role != v) {
            this.collection.role = v;
            this.cdr.detectChanges();
        }
    };
    AppComponent.prototype.updateSubstitution = function (v) {
        if (v && this.collection.substitution != v) {
            this.collection.substitution = v;
            this.cdr.detectChanges();
        }
    };
    AppComponent.prototype.updateMajorNeed = function (v) {
        if (v && this.collection.majorNeed != v) {
            this.collection.majorNeed = v;
            this.cdr.detectChanges();
        }
    };
    AppComponent.prototype.updateSceneObjective = function (v) {
        if (this.collection.sceneObjective != v) {
            this.collection.sceneObjective = v;
            this.loadAndHandleUpdateRaw();
            this.collection.sceneObjective = v;
            this.cdr.detectChanges();
        }
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.filenames = [];
        for (var i = 0; i < localStorage.length; i++) {
            if (localStorage.key(i).match(/^collection_v2_/)) {
                this.filenames.push(JSON.parse(localStorage.key(i).replace("collection_v2_", "")).filename);
            }
        }
        this.filenames = this.filenames.filter(function (v, i, a) { return a.indexOf(v) === i; });
        this.cdr.detectChanges();
    };
    AppComponent.prototype.loadAndHandleUpdateRaw = function () {
        var self = this;
        function load(sceneObjective) {
            var data = localStorage.getItem(self.getCollectionName(sceneObjective));
            var text = null;
            if (data) {
                data = JSON.parse(data);
                if (data)
                    text = data[data.length - 1];
            }
            return text;
        }
        var text = load(this.collection.sceneObjective);
        if (text)
            this.__handleUpdateRaw(text, false);
        else {
            var text_1 = load("");
            if (text_1)
                this.__handleUpdateRaw(text_1, false);
            else
                this.__handleUpdateRaw("", false);
        }
    };
    AppComponent.prototype.__handleUpdateRaw = function (_text, update) {
        var globalId = 0;
        var text = "";
        var later = [];
        var lastRole = null;
        var overrideSceneObjective = !update ? this.collection.sceneObjective : null;
        _text = _text.replace(/(^[ \t]*\n)/gm, "");
        _text.split(/(\/\/\/\*\*\*(?:[\s\S]*?)\*\*\*\/\/\/)/g).forEach(function (t) {
            if (t.match(/\/\/\/\*\*\*[\s\S]*\*\*\*\/\/\//)) {
                later.push(t);
            }
            else
                text += t;
        });
        (text.match(/\/\*(BIT|SUB)([0-9]+)\*\//g) || []).forEach(function (m) {
            m = m.match(/\/\*(BIT|SUB)([0-9]+)\*\//);
            globalId = Math.max(parseInt(m[2]) + 1, globalId);
        });
        var self = this;
        var first = true;
        var roleName = this.collection.role;
        this.collection = new Scene();
        this.collection.role = roleName;
        this.collection.obstacles = {};
        this.collection.actions = {};
        this.collection.doings = {};
        this.collection.innerObjectSubstitutions = {};
        this.collection.roleStreams = [];
        var roleStream = null;
        var lines = text.split("\n");
        lines.forEach(function (line) {
            line = line.trim();
            var match = line.split(":")[0].trim();
            if (match.match(new RegExp("^" +
                "(\\/\\*(BIT|SUB)([0-9]+)\\*\\/[ ]*)?" +
                "(['א-ת]+)" +
                "$"))) {
                roleStream = new RoleStream();
                roleStream.role = match.replace(new RegExp("(\\/\\*(BIT|SUB)([0-9]+)\\*\\/[ ]*)?"), "");
                roleStream.stream = [];
                self.collection.roleStreams.push(roleStream);
                var m = match.match(new RegExp("(\\/\\*(BIT|SUB)([0-9]+)\\*\\/)"));
                line = (m ? m[1] : "") + line.split(":", 2)[1];
            }
            var parts = [];
            var __parts = line.split(new RegExp("(\\/\\*(?:BIT|SUB)(?:[0-9]+)\\*\\/)", "g"));
            __parts.forEach(function (line) {
                var _parts = line.match(new RegExp("(\\/\\*(BIT)([0-9]+)\\*\\/)" +
                    "|" +
                    "(\\/\\*(SUB)([0-9]+)\\*\\/)" +
                    "|" +
                    "([a-zA-Z0-9'\"א-ת]+)" +
                    "|" +
                    "([^a-zA-Z0-9'\"א-ת]+)", "g"));
                if (_parts)
                    _parts.forEach(function (part) {
                        function doIt(s) {
                            var m = /(.*)(\/\/\/|\$\$\$)(.*)/g.exec(s);
                            if (m) {
                                doIt(m[1]);
                                parts.push(m[2]);
                                doIt(m[3]);
                            }
                            else
                                parts.push(s);
                        }
                        var s = part;
                        doIt(s);
                    });
            });
            if (parts)
                parts.forEach(function (part) {
                    part = part.trim();
                    if (!part)
                        return;
                    var group;
                    if (group = part.match((/\/\*BIT([0-9]+)\*\//))) {
                        var bit = new Bit();
                        bit.bitId = parseInt(group[1]);
                        self.collection.obstacles[bit.bitId] = "";
                        self.collection.actions[bit.bitId] = "";
                        self.collection.doings[bit.bitId] = "";
                        roleStream.stream.push(bit);
                    }
                    else if (part == "///") {
                        var bit = new Bit();
                        bit.bitId = globalId++;
                        self.collection.obstacles[bit.bitId] = "";
                        self.collection.actions[bit.bitId] = "";
                        self.collection.doings[bit.bitId] = "";
                        roleStream.stream.push(bit);
                    }
                    else if (group = part.match((/\/\*SUB([0-9]+)\*\//))) {
                        var subsctitution = new BitInnerObjectSubstitution();
                        subsctitution.innerObjectSubstitutionId = parseInt(group[1]);
                        self.collection.innerObjectSubstitutions[subsctitution.innerObjectSubstitutionId] = "תחליף";
                        roleStream.stream.push(subsctitution);
                    }
                    else if (part == "$$$") {
                        var subsctitution = new BitInnerObjectSubstitution();
                        subsctitution.innerObjectSubstitutionId = globalId++;
                        self.collection.innerObjectSubstitutions[subsctitution.innerObjectSubstitutionId] = "תחליף";
                        roleStream.stream.push(subsctitution);
                    }
                    else if (part.match(/^[א-ת'"0-9a-z]+$/)) {
                        var word = new Word();
                        word.value = part;
                        roleStream.stream.push(word);
                    }
                    else {
                        var punctuation = new Punctuation();
                        punctuation.value = part;
                        roleStream.stream.push(punctuation);
                    }
                });
            if (roleStream.stream.length && !(roleStream.stream[roleStream.stream.length - 1] instanceof NewLine) && !(roleStream.stream[roleStream.stream.length - 1] instanceof Bit))
                roleStream.stream.push(new NewLine());
        });
        if (overrideSceneObjective)
            self.collection.sceneObjective = overrideSceneObjective;
        later.forEach(function (l) {
            var group;
            if (group = l.match(/\/\/\/\*\*\*([a-zA-Z]+):([0-9]+):([\s\S]*)\*\*\*\/\/\//)) {
                var id = parseInt(group[2]);
                switch (group[1]) {
                    case "role":
                        self.collection.role = group[3];
                        break;
                    case "substitution":
                        self.collection.substitution = group[3];
                        break;
                    case "majorNeed":
                        self.collection.majorNeed = group[3];
                        break;
                    case "sceneObjective":
                        if (!overrideSceneObjective)
                            self.collection.sceneObjective = group[3];
                        break;
                    case "innerObjectSubstitution":
                        self.collection.innerObjectSubstitutions[id] = group[3];
                        break;
                    case "obstacle":
                        self.collection.obstacles[id] = group[3];
                        break;
                    case "action":
                        self.collection.actions[id] = group[3];
                        break;
                    case "doing":
                        self.collection.doings[id] = group[3];
                        break;
                }
            }
        });
        console.log(this.collection);
        this.raw = _text;
        if (update) {
            var data = localStorage.getItem(self.getCurrentCollectionName());
            if (data)
                data = JSON.parse(data);
            if (!data)
                data = [];
            data.push(_text);
            localStorage.setItem(self.getCurrentCollectionName(), JSON.stringify(data));
        }
        this.processedFlag = false;
        //root.find(".sceneStream *")
    };
    AppComponent.prototype.ngAfterViewChecked = function () {
        if (!this.processedFlag) {
            var root = jquery__WEBPACK_IMPORTED_MODULE_1__(this.chunkElement.nativeElement);
            root.find(".sceneStream").html(root.find(".sceneStreamGenerated").html());
            root.find(".sceneStream *").contents().each(function () {
                if (this.nodeType === Node.COMMENT_NODE) {
                    jquery__WEBPACK_IMPORTED_MODULE_1__(this).remove();
                }
            });
            this.__updatePositions();
            this.processedFlag = true;
        }
    };
    AppComponent.prototype.__updatePositions = function () {
        var root = jquery__WEBPACK_IMPORTED_MODULE_1__(this.chunkElement.nativeElement);
        root.find(".bitInfo").each(function () { jquery__WEBPACK_IMPORTED_MODULE_1__(this).css("top", ""); });
        root.find(".sceneStream .bit.asNewLine > span").each(function () { jquery__WEBPACK_IMPORTED_MODULE_1__(this).css("margin-right", ""); });
        root.find(".sceneStream .bit.asNewLine").removeClass("asNewLine");
        jquery__WEBPACK_IMPORTED_MODULE_1__("html").scrollTop(0);
        var self = this;
        var lastCR = null;
        var lastBit = null;
        var refY = root.get(0).getBoundingClientRect().y;
        root.find(".sceneStream .bit").each(function () {
            var cr = jquery__WEBPACK_IMPORTED_MODULE_1__(this).get(0).getBoundingClientRect();
            var bitInfo = root.find(".bitInfo[data-bit-id='" + jquery__WEBPACK_IMPORTED_MODULE_1__(this).data("bit-id") + "']");
            if (lastCR && (lastCR.y + lastCR.height) > cr.y) {
                jquery__WEBPACK_IMPORTED_MODULE_1__(this).addClass("asNewLinePrep");
                cr = jquery__WEBPACK_IMPORTED_MODULE_1__(this).get(0).getBoundingClientRect();
                jquery__WEBPACK_IMPORTED_MODULE_1__(this).removeClass("asNewLinePrep");
                jquery__WEBPACK_IMPORTED_MODULE_1__(this).addClass("asNewLine");
                var cr_old = cr;
                var old_right = cr_old.x + cr_old.width;
                cr = jquery__WEBPACK_IMPORTED_MODULE_1__(this).get(0).getBoundingClientRect();
                var right = cr.x + cr.width;
                //console.log(right,old_right,$(this).get(0));
                jquery__WEBPACK_IMPORTED_MODULE_1__(this).find(">span").css("margin-right", -(old_right - right) + "px");
                cr = jquery__WEBPACK_IMPORTED_MODULE_1__(this).get(0).getBoundingClientRect();
            }
            bitInfo.css("top", cr.y - refY);
            if (lastBit) {
                var lastBitId = lastBit.data("bit-id");
                var lastBitInfo = root.find(".bitInfo[data-bit-id='" + lastBitId + "']");
                var last_cr = lastBit.find(">span").get(0).getBoundingClientRect();
                lastBitInfo.css("min-height", cr.y + cr.height - last_cr.y - last_cr.height);
            }
            lastBit = jquery__WEBPACK_IMPORTED_MODULE_1__(this);
            lastCR = cr;
        });
        if (lastBit) {
            var lastBitId = lastBit.data("bit-id");
            var lastBitInfo = root.find(".bitInfo[data-bit-id='" + lastBitId + "']");
            var last_cr = lastBit.find(">span").get(0).getBoundingClientRect();
            var final_cr = root.find(".sceneStream > ").last().get(0).getBoundingClientRect();
            lastBitInfo.css("min-height", final_cr.y + final_cr.height - last_cr.y);
        }
        if (self.retainScroll) {
            jquery__WEBPACK_IMPORTED_MODULE_1__("html").scrollTop(self.retainScroll);
            self.retainScroll = null;
        }
    };
    AppComponent.prototype.getCurrentCollectionName = function () {
        return this.getCollectionName(this.collection.sceneObjective);
    };
    AppComponent.prototype.getCollectionName = function (sceneObjective) {
        return 'collection_v2_' + JSON.stringify({
            filename: this.filename,
            sceneObject: sceneObjective
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('chunk'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], AppComponent.prototype, "chunkElement", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bit_chunk_bit_chunk_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./bit-chunk/bit-chunk.component */ "./src/app/bit-chunk/bit-chunk.component.ts");
/* harmony import */ var _bit_role_role_stream_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./bit-role/role-stream.component */ "./src/app/bit-role/role-stream.component.ts");
/* harmony import */ var _bit_line_bit_line_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bit-line/bit-line.component */ "./src/app/bit-line/bit-line.component.ts");
/* harmony import */ var _bit_word_bit_word_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./bit-word/bit-word.component */ "./src/app/bit-word/bit-word.component.ts");
/* harmony import */ var _bit_punctuation_bit_punctuation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./bit-punctuation/bit-punctuation.component */ "./src/app/bit-punctuation/bit-punctuation.component.ts");
/* harmony import */ var ngx_contextmenu__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-contextmenu */ "./node_modules/ngx-contextmenu/fesm5/ngx-contextmenu.js");
/* harmony import */ var _bit_substitution_bit_substitution_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./bit-substitution/bit-substitution.component */ "./src/app/bit-substitution/bit-substitution.component.ts");
/* harmony import */ var _keep_html_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./keep-html.pipe */ "./src/app/keep-html.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _keep_html_pipe__WEBPACK_IMPORTED_MODULE_12__["EscapeHtmlPipe"],
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _bit_chunk_bit_chunk_component__WEBPACK_IMPORTED_MODULE_5__["BitChunkComponent"],
                _bit_role_role_stream_component__WEBPACK_IMPORTED_MODULE_6__["RoleStreamComponent"],
                _bit_line_bit_line_component__WEBPACK_IMPORTED_MODULE_7__["BitLineComponent"],
                _bit_word_bit_word_component__WEBPACK_IMPORTED_MODULE_8__["BitWordComponent"],
                _bit_punctuation_bit_punctuation_component__WEBPACK_IMPORTED_MODULE_9__["BitPunctuationComponent"],
                _bit_substitution_bit_substitution_component__WEBPACK_IMPORTED_MODULE_11__["BitSubstitutionComponent"]
            ],
            imports: [
                ngx_contextmenu__WEBPACK_IMPORTED_MODULE_10__["ContextMenuModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [ngx_contextmenu__WEBPACK_IMPORTED_MODULE_10__["ContextMenuService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bit-chunk/bit-chunk.component.html":
/*!****************************************************!*\
  !*** ./src/app/bit-chunk/bit-chunk.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\r\n<div class=\"obstacles\">\r\n  <ng-container *ngIf=\"!bitChunk\">\r\n    מכשולים\r\n  </ng-container>\r\n  <ng-container *ngIf=\"bitChunk\">\r\n    <div class=\"obstacleText\" contenteditable=\"true\">{{appComponent.collection.obstacles[bitChunk.chunkId]}}</div>\r\n  </ng-container>\r\n</div>\r\n<div class=\"scene\">\r\n  <ng-container *ngIf=\"!bitChunk\">\r\n    סצנה\r\n  </ng-container>\r\n  <div contenteditable=\"true\" spellcheck=\"false\">\r\n    <ng-container *ngIf=\"bitChunk\">\r\n      <ng-container *ngFor=\"let bitRole of bitChunk.roles\">\r\n        <app-bit-role [bitRole]=\"bitRole\"></app-bit-role>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n</div>\r\n<div class=\"actions\">\r\n  <ng-container *ngIf=\"!bitChunk\">\r\n    פעולות\r\n  </ng-container>\r\n  <ng-container *ngIf=\"bitChunk\">\r\n    <textarea>{{appComponent.collection.actions[bitChunk.chunkId]}}</textarea>\r\n  </ng-container>\r\n</div>\r\n<div class=\"doings\">\r\n  <ng-container *ngIf=\"!bitChunk\">\r\n    doings\r\n  </ng-container>\r\n  <ng-container *ngIf=\"bitChunk\">\r\n    <textarea>{{appComponent.collection.doings[bitChunk.chunkId]}}</textarea>\r\n  </ng-container>\r\n</div>\r\n-->"

/***/ }),

/***/ "./src/app/bit-chunk/bit-chunk.component.scss":
/*!****************************************************!*\
  !*** ./src/app/bit-chunk/bit-chunk.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  border-bottom: 1px dashed black;\n  display: block;\n  direction: rtl;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch; }\n\n:host:first-child {\n  border-bottom: 1px solid black; }\n\n.obstacles {\n  flex-basis: 15%;\n  flex-shrink: 0;\n  border-left: 1px solid black;\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.scene {\n  flex-basis: 50%;\n  flex-shrink: 0;\n  border-left: 1px solid black;\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.actions {\n  flex-basis: 15%;\n  flex-shrink: 0;\n  border-left: 1px solid black;\n  padding-left: 5px;\n  padding-right: 5px; }\n\n.doings {\n  flex-basis: 20%;\n  flex-shrink: 0;\n  padding-left: 5px;\n  padding-right: 5px; }\n\ntextarea {\n  width: 100%;\n  min-height: calc(100% - 1px);\n  border: none;\n  box-sizing: border-box;\n  outline: none; }\n\n.obstacleText {\n  min-height: 100%; }\n\n[contenteditable] {\n  outline: none; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYml0LWNodW5rL2M6XFxvbXJpIHdvcmtcXGNodWJidWNrL3NyY1xcYXBwXFxiaXQtY2h1bmtcXGJpdC1jaHVuay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYml0LWNodW5rL2JpdC1jaHVuay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUE4QjtFQUU5QixlQUFhO0VBRWIsZUFBYTtFQUliLGNBQWE7RUFHYixvQkFBbUI7RUFHbkIsa0JBQWlCO0VBR2pCLDRCQUEyQjtFQUczQix1QkFBc0IsRUFDdkI7O0FBRUQ7RUFDRSwrQkFBNkIsRUFDOUI7O0FBRUQ7RUFDRSxnQkFBYztFQUNkLGVBQWE7RUFDYiw2QkFBMkI7RUFDM0Isa0JBQWdCO0VBQ2hCLG1CQUFpQixFQUNsQjs7QUFFRDtFQUNFLGdCQUFjO0VBQ2QsZUFBYTtFQUNiLDZCQUEyQjtFQUMzQixrQkFBZ0I7RUFDaEIsbUJBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsZ0JBQWM7RUFDZCxlQUFhO0VBQ2IsNkJBQTJCO0VBQzNCLGtCQUFnQjtFQUNoQixtQkFBaUIsRUFDbEI7O0FBRUQ7RUFDRSxnQkFBYztFQUNkLGVBQWE7RUFDYixrQkFBZ0I7RUFDaEIsbUJBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsWUFBVTtFQUNWLDZCQUEyQjtFQUMzQixhQUFXO0VBQ1gsdUJBQXFCO0VBQ3JCLGNBQVksRUFDYjs7QUFFRDtFQUNFLGlCQUFlLEVBQ2hCOztBQ1REO0VEWUUsY0FBWSxFQUNiIiwiZmlsZSI6InNyYy9hcHAvYml0LWNodW5rL2JpdC1jaHVuay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcclxuICBib3JkZXItYm90dG9tOjFweCBkYXNoZWQgYmxhY2s7XHJcblxyXG4gIGRpc3BsYXk6YmxvY2s7XHJcblxyXG4gIGRpcmVjdGlvbjpydGw7XHJcblxyXG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtZmxleDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAtbXMtZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgLW1zLWZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIC1tcy1mbGV4LXBhY2s6IHN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbiAgLW1zLWZsZXgtbGluZS1wYWNrOiBzdHJldGNoO1xyXG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbjpob3N0OmZpcnN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOjFweCBzb2xpZCBibGFjaztcclxufVxyXG5cclxuLm9ic3RhY2xlcyB7XHJcbiAgZmxleC1iYXNpczoxNSU7XHJcbiAgZmxleC1zaHJpbms6MDtcclxuICBib3JkZXItbGVmdDoxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZy1sZWZ0OjVweDtcclxuICBwYWRkaW5nLXJpZ2h0OjVweDtcclxufVxyXG5cclxuLnNjZW5lIHtcclxuICBmbGV4LWJhc2lzOjUwJTtcclxuICBmbGV4LXNocmluazowO1xyXG4gIGJvcmRlci1sZWZ0OjFweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG59XHJcblxyXG4uYWN0aW9ucyB7XHJcbiAgZmxleC1iYXNpczoxNSU7XHJcbiAgZmxleC1zaHJpbms6MDtcclxuICBib3JkZXItbGVmdDoxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZy1sZWZ0OjVweDtcclxuICBwYWRkaW5nLXJpZ2h0OjVweDtcclxufVxyXG5cclxuLmRvaW5ncyB7XHJcbiAgZmxleC1iYXNpczoyMCU7XHJcbiAgZmxleC1zaHJpbms6MDtcclxuICBwYWRkaW5nLWxlZnQ6NXB4O1xyXG4gIHBhZGRpbmctcmlnaHQ6NXB4O1xyXG59XHJcblxyXG50ZXh0YXJlYSB7XHJcbiAgd2lkdGg6MTAwJTtcclxuICBtaW4taGVpZ2h0OmNhbGMoMTAwJSAtIDFweCk7XHJcbiAgYm9yZGVyOm5vbmU7XHJcbiAgYm94LXNpemluZzpib3JkZXItYm94O1xyXG4gIG91dGxpbmU6bm9uZTtcclxufVxyXG5cclxuLm9ic3RhY2xlVGV4dCB7XHJcbiAgbWluLWhlaWdodDoxMDAlO1xyXG59XHJcblxyXG5bY29udGVudGVkaXRhYmxlXSB7XHJcbiAgb3V0bGluZTpub25lO1xyXG59IiwiOmhvc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkIGJsYWNrO1xuICBkaXNwbGF5OiBibG9jaztcbiAgZGlyZWN0aW9uOiBydGw7XG4gIGRpc3BsYXk6IC1tcy1mbGV4Ym94O1xuICBkaXNwbGF5OiAtd2Via2l0LWZsZXg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIC13ZWJraXQtZmxleC1kaXJlY3Rpb246IHJvdztcbiAgLW1zLWZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIC13ZWJraXQtZmxleC13cmFwOiBub3dyYXA7XG4gIC1tcy1mbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIC13ZWJraXQtanVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtbXMtZmxleC1wYWNrOiBzdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAtd2Via2l0LWFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIC1tcy1mbGV4LWxpbmUtcGFjazogc3RyZXRjaDtcbiAgYWxpZ24tY29udGVudDogc3RyZXRjaDsgfVxuXG46aG9zdDpmaXJzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjazsgfVxuXG4ub2JzdGFjbGVzIHtcbiAgZmxleC1iYXNpczogMTUlO1xuICBmbGV4LXNocmluazogMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgfVxuXG4uc2NlbmUge1xuICBmbGV4LWJhc2lzOiA1MCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nLWxlZnQ6IDVweDtcbiAgcGFkZGluZy1yaWdodDogNXB4OyB9XG5cbi5hY3Rpb25zIHtcbiAgZmxleC1iYXNpczogMTUlO1xuICBmbGV4LXNocmluazogMDtcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCBibGFjaztcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgfVxuXG4uZG9pbmdzIHtcbiAgZmxleC1iYXNpczogMjAlO1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZy1sZWZ0OiA1cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDVweDsgfVxuXG50ZXh0YXJlYSB7XG4gIHdpZHRoOiAxMDAlO1xuICBtaW4taGVpZ2h0OiBjYWxjKDEwMCUgLSAxcHgpO1xuICBib3JkZXI6IG5vbmU7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG91dGxpbmU6IG5vbmU7IH1cblxuLm9ic3RhY2xlVGV4dCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7IH1cblxuW2NvbnRlbnRlZGl0YWJsZV0ge1xuICBvdXRsaW5lOiBub25lOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/bit-chunk/bit-chunk.component.ts":
/*!**************************************************!*\
  !*** ./src/app/bit-chunk/bit-chunk.component.ts ***!
  \**************************************************/
/*! exports provided: BitChunkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitChunkComponent", function() { return BitChunkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BitChunkComponent = /** @class */ (function () {
    //@Input() bitChunk:BitChunk;
    function BitChunkComponent(appComponent) {
        this.appComponent = appComponent;
    }
    BitChunkComponent.prototype.ngOnInit = function () {
    };
    BitChunkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bit-chunk',
            template: __webpack_require__(/*! ./bit-chunk.component.html */ "./src/app/bit-chunk/bit-chunk.component.html"),
            styles: [__webpack_require__(/*! ./bit-chunk.component.scss */ "./src/app/bit-chunk/bit-chunk.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            host: {
                '[attr.data-chunkid]': 'bitChunk ? bitChunk.chunkId : null'
            },
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
    ], BitChunkComponent);
    return BitChunkComponent;
}());



/***/ }),

/***/ "./src/app/bit-line/bit-line.component.html":
/*!**************************************************!*\
  !*** ./src/app/bit-line/bit-line.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--\n<span contenteditable=\"false\" *ngIf=\"bitLine.first\" class=\"bitRole bitRoleMarker\" [attr.data-chunkid]=\"bitChunkComponent.bitChunk.chunkId\">/</span>\n\n<context-menu #context>\n  <ng-template contextMenuItem let-item>\n    mati\n  </ng-template>\n</context-menu>\n\n<span [contextMenu]=\"context\">\n  <ng-container *ngFor=\"let part of bitLine.content\">\n    <ng-container *ngIf=\"part.constructor.name == 'BitWord'\">\n      <span class=\"app-bit-word\">{{part.value}}</span>\n    </ng-container>\n    <ng-container *ngIf=\"part.constructor.name == 'BitPunctuation'\">\n      <span class=\"app-bit-punctuation\">{{part.value}}</span>\n    </ng-container>\n    <ng-container *ngIf=\"part.constructor.name == 'BitInnerObjectSubstitution'\">\n      <app-bit-substitution contenteditable=\"false\" [bitSubstitution]=\"part\" [attr.data-substitutionid]=\"part.innerObjectSubstitutionId\">\n      </app-bit-substitution>\n    </ng-container>\n  </ng-container>\n</span>\n-->"

/***/ }),

/***/ "./src/app/bit-line/bit-line.component.scss":
/*!**************************************************!*\
  !*** ./src/app/bit-line/bit-line.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block; }\n\n:host:not(:last-child) {\n  margin-bottom: 0.5em; }\n\n.bitRoleMarker {\n  color: black;\n  font-size: 30px; }\n\n.bitRoleMarker:after {\n  font-size: 11px;\n  content: \" \"; }\n\n::ng-deep .app-bit-word + .app-bit-word:before {\n  content: \"\";\n  margin-right: 0.2em; }\n\n::ng-deep .app-bit-word + .app-bit-substitution:before {\n  content: \"\";\n  margin-right: 0.2em; }\n\n::ng-deep .app-bit-punctuation + :before {\n  content: \"\";\n  margin-right: 0.2em;\n  display: inline-block; }\n\n.app-bit-punctuation,\n.app-bit-word {\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYml0LWxpbmUvYzpcXG9tcmkgd29ya1xcY2h1YmJ1Y2svc3JjXFxhcHBcXGJpdC1saW5lXFxiaXQtbGluZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQWEsRUFDZDs7QUFFRDtFQUNFLHFCQUFtQixFQUNwQjs7QUFFRDtFQUNFLGFBQVc7RUFDWCxnQkFBYyxFQUNmOztBQUVEO0VBQ0UsZ0JBQWM7RUFDZCxhQUFXLEVBQ1o7O0FBRUQ7RUFDRSxZQUFVO0VBQ1Ysb0JBQWtCLEVBQ25COztBQUVEO0VBQ0UsWUFBVTtFQUNWLG9CQUFrQixFQUNuQjs7QUFFRDtFQUNFLFlBQVU7RUFDVixvQkFBa0I7RUFDbEIsc0JBQW9CLEVBQ3JCOztBQUVEOztFQUVFLHNCQUFvQixFQUNyQiIsImZpbGUiOiJzcmMvYXBwL2JpdC1saW5lL2JpdC1saW5lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6YmxvY2s7XHJcbn1cclxuXHJcbjpob3N0Om5vdCg6bGFzdC1jaGlsZCkge1xyXG4gIG1hcmdpbi1ib3R0b206MC41ZW07XHJcbn1cclxuXHJcbi5iaXRSb2xlTWFya2VyIHtcclxuICBjb2xvcjpibGFjaztcclxuICBmb250LXNpemU6MzBweDtcclxufVxyXG5cclxuLmJpdFJvbGVNYXJrZXI6YWZ0ZXIge1xyXG4gIGZvbnQtc2l6ZToxMXB4O1xyXG4gIGNvbnRlbnQ6XCIgXCI7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYXBwLWJpdC13b3JkICsgLmFwcC1iaXQtd29yZDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICBtYXJnaW4tcmlnaHQ6MC4yZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCAuYXBwLWJpdC13b3JkICsgLmFwcC1iaXQtc3Vic3RpdHV0aW9uOmJlZm9yZSB7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIG1hcmdpbi1yaWdodDowLjJlbTtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5hcHAtYml0LXB1bmN0dWF0aW9uICsgOmJlZm9yZSB7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIG1hcmdpbi1yaWdodDowLjJlbTtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuLmFwcC1iaXQtcHVuY3R1YXRpb24sXHJcbi5hcHAtYml0LXdvcmQge1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/bit-line/bit-line.component.ts":
/*!************************************************!*\
  !*** ./src/app/bit-line/bit-line.component.ts ***!
  \************************************************/
/*! exports provided: BitLineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitLineComponent", function() { return BitLineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
/* harmony import */ var _bit_chunk_bit_chunk_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bit-chunk/bit-chunk.component */ "./src/app/bit-chunk/bit-chunk.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BitLineComponent = /** @class */ (function () {
    //@Input() bitLine:BitLine;
    function BitLineComponent(appComponent, bitChunkComponent) {
        this.appComponent = appComponent;
        this.bitChunkComponent = bitChunkComponent;
    }
    BitLineComponent.prototype.ngOnInit = function () {
    };
    BitLineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bit-line',
            template: __webpack_require__(/*! ./bit-line.component.html */ "./src/app/bit-line/bit-line.component.html"),
            styles: [__webpack_require__(/*! ./bit-line.component.scss */ "./src/app/bit-line/bit-line.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"], _bit_chunk_bit_chunk_component__WEBPACK_IMPORTED_MODULE_2__["BitChunkComponent"]])
    ], BitLineComponent);
    return BitLineComponent;
}());



/***/ }),

/***/ "./src/app/bit-punctuation/bit-punctuation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/bit-punctuation/bit-punctuation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ punctuation.value }}"

/***/ }),

/***/ "./src/app/bit-punctuation/bit-punctuation.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/bit-punctuation/bit-punctuation.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpdC1wdW5jdHVhdGlvbi9iaXQtcHVuY3R1YXRpb24uY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/bit-punctuation/bit-punctuation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/bit-punctuation/bit-punctuation.component.ts ***!
  \**************************************************************/
/*! exports provided: BitPunctuationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitPunctuationComponent", function() { return BitPunctuationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BitPunctuationComponent = /** @class */ (function () {
    function BitPunctuationComponent() {
    }
    BitPunctuationComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_component__WEBPACK_IMPORTED_MODULE_1__["Punctuation"])
    ], BitPunctuationComponent.prototype, "punctuation", void 0);
    BitPunctuationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bit-punctuation',
            template: __webpack_require__(/*! ./bit-punctuation.component.html */ "./src/app/bit-punctuation/bit-punctuation.component.html"),
            styles: [__webpack_require__(/*! ./bit-punctuation.component.scss */ "./src/app/bit-punctuation/bit-punctuation.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [])
    ], BitPunctuationComponent);
    return BitPunctuationComponent;
}());



/***/ }),

/***/ "./src/app/bit-role/role-stream.component.html":
/*!*****************************************************!*\
  !*** ./src/app/bit-role/role-stream.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"bitRole bitRoleName\">\n  {{roleStream.role}}\n</div>\n<div class=\"stream\">\n  <ng-container *ngFor=\"let part of roleStream.stream\">\n    <ng-container *ngIf=\"part.constructor.name == 'Word'\">\n      <span class=\"word\">{{part.value}}</span>\n    </ng-container>\n    <ng-container *ngIf=\"part.constructor.name == 'Punctuation'\">\n      <span class=\"punctuation\">{{part.value}}</span>\n    </ng-container>\n    <ng-container *ngIf=\"part.constructor.name == 'NewLine'\">\n      <span class=\"newLine\"><br></span>\n    </ng-container>\n    <ng-container *ngIf=\"part.constructor.name == 'BitInnerObjectSubstitution'\">\n      <app-bit-substitution contenteditable=\"false\" [bitInnerObjectSubstitution]=\"part\" [attr.data-substitutionid]=\"part.innerObjectSubstitutionId\">\n      </app-bit-substitution>\n    </ng-container>\n  </ng-container>\n</div>\n<!--\n-->\n"

/***/ }),

/***/ "./src/app/bit-role/role-stream.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/bit-role/role-stream.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  width: 100%;\n  display: block;\n  margin-bottom: 1em; }\n\n.role {\n  flex-basis: 75px;\n  flex-shrink: 0; }\n\n.bitRole {\n  width: 75px;\n  /*position: absolute;*/ }\n\napp-bit-line {\n  width: calc(100% - 75px);\n  position: relative;\n  right: 75px; }\n\n.bitRoleMarker {\n  display: none; }\n\n:host.mainRole {\n  background: rgba(0, 0, 0, 0.1); }\n\n.bitRoleName {\n  font-style: italic; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYml0LXJvbGUvYzpcXG9tcmkgd29ya1xcY2h1YmJ1Y2svc3JjXFxhcHBcXGJpdC1yb2xlXFxyb2xlLXN0cmVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVU7RUFFVixlQUFhO0VBRWIsbUJBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsaUJBQWdCO0VBQ2hCLGVBQWMsRUFDZjs7QUFDRDtFQUNFLFlBQVc7RUFDWCx1QkFBdUIsRUFDeEI7O0FBRUQ7RUFDRSx5QkFBd0I7RUFDeEIsbUJBQWtCO0VBQ2xCLFlBQVcsRUFDWjs7QUFFRDtFQUNFLGNBQVksRUFDYjs7QUFFRDtFQUNFLCtCQUF5QixFQUMxQjs7QUFFRDtFQUNFLG1CQUFrQixFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2JpdC1yb2xlL3JvbGUtc3RyZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIHdpZHRoOjEwMCU7XHJcblxyXG4gIGRpc3BsYXk6YmxvY2s7XHJcblxyXG4gIG1hcmdpbi1ib3R0b206MWVtO1xyXG59XHJcblxyXG4ucm9sZSB7XHJcbiAgZmxleC1iYXNpczogNzVweDtcclxuICBmbGV4LXNocmluazogMDtcclxufVxyXG4uYml0Um9sZSB7XHJcbiAgd2lkdGg6IDc1cHg7XHJcbiAgLypwb3NpdGlvbjogYWJzb2x1dGU7Ki9cclxufVxyXG5cclxuYXBwLWJpdC1saW5lIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gNzVweCk7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHJpZ2h0OiA3NXB4O1xyXG59XHJcblxyXG4uYml0Um9sZU1hcmtlciB7XHJcbiAgZGlzcGxheTpub25lO1xyXG59XHJcblxyXG46aG9zdC5tYWluUm9sZSB7XHJcbiAgYmFja2dyb3VuZDpyZ2JhKDAsMCwwLC4xKTtcclxufVxyXG5cclxuLmJpdFJvbGVOYW1lIHtcclxuICBmb250LXN0eWxlOiBpdGFsaWM7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuIl19 */"

/***/ }),

/***/ "./src/app/bit-role/role-stream.component.ts":
/*!***************************************************!*\
  !*** ./src/app/bit-role/role-stream.component.ts ***!
  \***************************************************/
/*! exports provided: RoleStreamComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoleStreamComponent", function() { return RoleStreamComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RoleStreamComponent = /** @class */ (function () {
    function RoleStreamComponent(appComponent) {
        this.appComponent = appComponent;
    }
    RoleStreamComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_component__WEBPACK_IMPORTED_MODULE_1__["RoleStream"])
    ], RoleStreamComponent.prototype, "roleStream", void 0);
    RoleStreamComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'role-stream',
            template: __webpack_require__(/*! ./role-stream.component.html */ "./src/app/bit-role/role-stream.component.html"),
            styles: [__webpack_require__(/*! ./role-stream.component.scss */ "./src/app/bit-role/role-stream.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
    ], RoleStreamComponent);
    return RoleStreamComponent;
}());



/***/ }),

/***/ "./src/app/bit-substitution/bit-substitution.component.html":
/*!******************************************************************!*\
  !*** ./src/app/bit-substitution/bit-substitution.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span>$</span>\r\n<div contenteditable=\"true\">{{appComponent.collection.innerObjectSubstitutions[bitInnerObjectSubstitution.innerObjectSubstitutionId]}}</div>"

/***/ }),

/***/ "./src/app/bit-substitution/bit-substitution.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/bit-substitution/bit-substitution.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: inline-block;\n  padding-top: 1em;\n  border-right: 1px solid black;\n  margin-left: 0.2em;\n  position: relative; }\n\ndiv {\n  min-width: 3em;\n  position: absolute;\n  bottom: calc(100% - 1.5em);\n  font-size: 0.7em;\n  border-bottom: 1px solid black;\n  padding-right: 0.2em;\n  padding-bottom: 0.2em;\n  white-space: nowrap; }\n\nspan {\n  width: 0;\n  overflow: hidden;\n  display: inline-block; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYml0LXN1YnN0aXR1dGlvbi9jOlxcb21yaSB3b3JrXFxjaHViYnVjay9zcmNcXGFwcFxcYml0LXN1YnN0aXR1dGlvblxcYml0LXN1YnN0aXR1dGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHNCQUFvQjtFQUNwQixpQkFBZTtFQUNmLDhCQUE0QjtFQUM1QixtQkFBaUI7RUFDakIsbUJBQWlCLEVBQ2xCOztBQUVEO0VBQ0UsZUFBYTtFQUNiLG1CQUFrQjtFQUNsQiwyQkFBMEI7RUFDMUIsaUJBQWdCO0VBQ2hCLCtCQUE2QjtFQUM3QixxQkFBb0I7RUFDcEIsc0JBQXFCO0VBQ3JCLG9CQUFtQixFQUNwQjs7QUFFRDtFQUNFLFNBQVE7RUFDUixpQkFBZ0I7RUFDaEIsc0JBQXFCLEVBQ3RCIiwiZmlsZSI6InNyYy9hcHAvYml0LXN1YnN0aXR1dGlvbi9iaXQtc3Vic3RpdHV0aW9uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xyXG4gIGRpc3BsYXk6aW5saW5lLWJsb2NrO1xyXG4gIHBhZGRpbmctdG9wOjFlbTtcclxuICBib3JkZXItcmlnaHQ6MXB4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbi1sZWZ0OjAuMmVtO1xyXG4gIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG59XHJcblxyXG5kaXYge1xyXG4gIG1pbi13aWR0aDozZW07XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGJvdHRvbTogY2FsYygxMDAlIC0gMS41ZW0pO1xyXG4gIGZvbnQtc2l6ZTogMC43ZW07XHJcbiAgYm9yZGVyLWJvdHRvbToxcHggc29saWQgYmxhY2s7XHJcbiAgcGFkZGluZy1yaWdodDogMC4yZW07XHJcbiAgcGFkZGluZy1ib3R0b206IDAuMmVtO1xyXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbn1cclxuXHJcbnNwYW4ge1xyXG4gIHdpZHRoOiAwO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/bit-substitution/bit-substitution.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/bit-substitution/bit-substitution.component.ts ***!
  \****************************************************************/
/*! exports provided: BitSubstitutionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitSubstitutionComponent", function() { return BitSubstitutionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BitSubstitutionComponent = /** @class */ (function () {
    function BitSubstitutionComponent(appComponent) {
        this.appComponent = appComponent;
    }
    BitSubstitutionComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_component__WEBPACK_IMPORTED_MODULE_1__["BitInnerObjectSubstitution"])
    ], BitSubstitutionComponent.prototype, "bitInnerObjectSubstitution", void 0);
    BitSubstitutionComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bit-substitution',
            template: __webpack_require__(/*! ./bit-substitution.component.html */ "./src/app/bit-substitution/bit-substitution.component.html"),
            styles: [__webpack_require__(/*! ./bit-substitution.component.scss */ "./src/app/bit-substitution/bit-substitution.component.scss")],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
    ], BitSubstitutionComponent);
    return BitSubstitutionComponent;
}());



/***/ }),

/***/ "./src/app/bit-word/bit-word.component.html":
/*!**************************************************!*\
  !*** ./src/app/bit-word/bit-word.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ word.value }}"

/***/ }),

/***/ "./src/app/bit-word/bit-word.component.scss":
/*!**************************************************!*\
  !*** ./src/app/bit-word/bit-word.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep app-bit-word + app-bit-word:before {\n  content: \"\";\n  margin-right: 0.2em; }\n\n::ng-deep app-bit-word + app-bit-substitution:before {\n  content: \"\";\n  margin-right: 0.2em; }\n\n::ng-deep app-bit-punctuation + app-bit-word:before {\n  content: \"\";\n  margin-right: 0.2em;\n  display: inline-block; }\n\n:host.focused {\n  background-color: rgba(0, 0, 200, 0.3); }\n\n:host.substitution {\n  padding-top: 1em; }\n\n:host {\n  display: inline-block; }\n\n.substitution {\n  border-right: 1px solid black; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYml0LXdvcmQvYzpcXG9tcmkgd29ya1xcY2h1YmJ1Y2svc3JjXFxhcHBcXGJpdC13b3JkXFxiaXQtd29yZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVU7RUFDVixvQkFBa0IsRUFDbkI7O0FBRUQ7RUFDRSxZQUFVO0VBQ1Ysb0JBQWtCLEVBQ25COztBQUVEO0VBQ0UsWUFBVTtFQUNWLG9CQUFrQjtFQUNsQixzQkFBb0IsRUFDckI7O0FBRUQ7RUFDRSx1Q0FBa0MsRUFDbkM7O0FBRUQ7RUFDRSxpQkFBZSxFQUNoQjs7QUFFRDtFQUNFLHNCQUFvQixFQUNyQjs7QUFFRDtFQUNFLDhCQUE0QixFQUM3QiIsImZpbGUiOiJzcmMvYXBwL2JpdC13b3JkL2JpdC13b3JkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIGFwcC1iaXQtd29yZCArIGFwcC1iaXQtd29yZDpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICBtYXJnaW4tcmlnaHQ6MC4yZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCBhcHAtYml0LXdvcmQgKyBhcHAtYml0LXN1YnN0aXR1dGlvbjpiZWZvcmUge1xyXG4gIGNvbnRlbnQ6XCJcIjtcclxuICBtYXJnaW4tcmlnaHQ6MC4yZW07XHJcbn1cclxuXHJcbjo6bmctZGVlcCBhcHAtYml0LXB1bmN0dWF0aW9uICsgYXBwLWJpdC13b3JkOmJlZm9yZSB7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIG1hcmdpbi1yaWdodDowLjJlbTtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuOmhvc3QuZm9jdXNlZCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDAsMCwyMDAsMC4zKTtcclxufVxyXG5cclxuOmhvc3Quc3Vic3RpdHV0aW9uIHtcclxuICBwYWRkaW5nLXRvcDoxZW07XHJcbn1cclxuXHJcbjpob3N0IHtcclxuICBkaXNwbGF5OmlubGluZS1ibG9jaztcclxufVxyXG5cclxuLnN1YnN0aXR1dGlvbiB7XHJcbiAgYm9yZGVyLXJpZ2h0OjFweCBzb2xpZCBibGFjaztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/bit-word/bit-word.component.ts":
/*!************************************************!*\
  !*** ./src/app/bit-word/bit-word.component.ts ***!
  \************************************************/
/*! exports provided: BitWordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BitWordComponent", function() { return BitWordComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.component */ "./src/app/app.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BitWordComponent = /** @class */ (function () {
    function BitWordComponent(appComponent) {
        this.appComponent = appComponent;
        this.self = this;
    }
    BitWordComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _app_component__WEBPACK_IMPORTED_MODULE_1__["Word"])
    ], BitWordComponent.prototype, "word", void 0);
    BitWordComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bit-word',
            template: __webpack_require__(/*! ./bit-word.component.html */ "./src/app/bit-word/bit-word.component.html"),
            styles: [__webpack_require__(/*! ./bit-word.component.scss */ "./src/app/bit-word/bit-word.component.scss")],
            host: {
                '[class.focused]': 'appComponent.focusedBitContent === self.bitWord',
                '[class.substitution]': 'bitWord.substitutionId'
            },
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_app_component__WEBPACK_IMPORTED_MODULE_1__["AppComponent"]])
    ], BitWordComponent);
    return BitWordComponent;
}());



/***/ }),

/***/ "./src/app/keep-html.pipe.ts":
/*!***********************************!*\
  !*** ./src/app/keep-html.pipe.ts ***!
  \***********************************/
/*! exports provided: EscapeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EscapeHtmlPipe", function() { return EscapeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EscapeHtmlPipe = /** @class */ (function () {
    function EscapeHtmlPipe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    EscapeHtmlPipe.prototype.transform = function (content) {
        return this.sanitizer.bypassSecurityTrustHtml(content);
    };
    EscapeHtmlPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'keepHtml', pure: false }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], EscapeHtmlPipe);
    return EscapeHtmlPipe;
}());



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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\omri work\chubbuck\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map