webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\nSimple application developed using <a href=\"https://restcountries.eu/\">Restful Countries API</a>\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n  <div class=\"container-fluid-1\">\n    \n     <nav class=\"navbar navbar-default\">\n      <div class=\"container-fluid\">\n        <!-- Brand and toggle get grouped for better mobile display -->\n        <div class=\"navbar-header\">\n          <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n            <span class=\"sr-only\">Toggle navigation</span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n          \n        </div>\n    \n        <!-- Collect the nav links, forms, and other content for toggling -->\n        <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n          <ul class=\"nav navbar-nav\">\n            <li><a class=\"font-weight\" [routerLink]=\"['/region']\">Home</a></li>\n            <li><a class=\"font-weight\" [routerLink]=\"['/about']\">About</a></li>\n\n          </ul>\n            <ul class=\"nav navbar-nav navbar-right\">\n            <li> <a class=\"btn font-weight\" (click)=\"goBackToPreviousPage()\">Go Back </a></li>\n            </ul>\n           \n            \n        \n        </div><!-- /.navbar-collapse -->\n       \n      </div><!-- /.container-fluid -->\n    </nav>\n    <div class=\"row header\">\n        <div class=\"col-md-12\">\n <!-- <a class=\"title_style\" [routerLink]=\"['/']\"><img src=\"assets\\Images\\got.jpg\" class=\"img-responsive img1_style\"></a>-->\n        </div>\n      </div>\n  </div>\n  \n  <br/>\n <router-outlet></router-outlet>\n \n \n<ng4-loading-spinner> </ng4-loading-spinner>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(location, toastr, vcr) {
        this.location = location;
        this.toastr = toastr;
        this.vcr = vcr;
        this.title = 'app';
        this.toastr.setRootViewContainerRef(vcr);
    }
    AppComponent.prototype.ngOnInit = function () {
    };
    AppComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_2_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__region_region_component__ = __webpack_require__("../../../../../src/app/region/region.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__ = __webpack_require__("../../../../../src/app/not-found/not-found.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__region_service_service__ = __webpack_require__("../../../../../src/app/region-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__countryview_countryview_component__ = __webpack_require__("../../../../../src/app/countryview/countryview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__singlecountryview_singlecountryview_component__ = __webpack_require__("../../../../../src/app/singlecountryview/singlecountryview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__filter_pipe__ = __webpack_require__("../../../../../src/app/filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__filterunique_pipe__ = __webpack_require__("../../../../../src/app/filterunique.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__region_region_component__["a" /* RegionComponent */],
                __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */],
                __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_12__countryview_countryview_component__["a" /* CountryviewComponent */],
                __WEBPACK_IMPORTED_MODULE_13__singlecountryview_singlecountryview_component__["a" /* SinglecountryviewComponent */],
                __WEBPACK_IMPORTED_MODULE_14__filter_pipe__["a" /* FilterPipe */],
                __WEBPACK_IMPORTED_MODULE_15__filterunique_pipe__["a" /* FilteruniquePipe */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_16_ng2_toastr_ng2_toastr__["ToastModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ng4_loading_spinner__["Ng4LoadingSpinnerModule"].forRoot(),
                __WEBPACK_IMPORTED_MODULE_5__angular_router__["c" /* RouterModule */].forRoot([
                    { path: 'region', component: __WEBPACK_IMPORTED_MODULE_8__region_region_component__["a" /* RegionComponent */] },
                    { path: '', redirectTo: 'region', pathMatch: 'full' },
                    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_10__about_about_component__["a" /* AboutComponent */] },
                    { path: 'countryview', component: __WEBPACK_IMPORTED_MODULE_12__countryview_countryview_component__["a" /* CountryviewComponent */] },
                    { path: 'singlecountryview', component: __WEBPACK_IMPORTED_MODULE_13__singlecountryview_singlecountryview_component__["a" /* SinglecountryviewComponent */] },
                    { path: '**', component: __WEBPACK_IMPORTED_MODULE_9__not_found_not_found_component__["a" /* NotFoundComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_11__region_service_service__["a" /* RegionService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/countryview/countryview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/countryview/countryview.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"container-fluid\" style=\"text-align:center\">\n  \n      <div class=\"col-md-12\"style=\"font-size:22px;font-weight:bold;color: #23527c;font-variant-caps: unicase;font-family: cursive;\">Displaying all countries of the selected region</div>\n    </div>\n    <div class=\"row\" style=\"text-align:center\">\n      <div>\n        <!--  <select class=\"form-control-custom\" [(ngModel)]=\"selected\"  placeholder=\"Filter Category By\">\n              <option>Get Countries By Currency Name</option>\n              <ng-container *ngFor=\"let country of selectedRegion;\">\n                <option *ngFor=\"let currency of country.currencies\"> {{currency.name}} </option>\n              </ng-container>    \n          </select>-->\n        <br><br>\n        <div>\n            <input class=\"form-control-custom\" [(ngModel)]=\"searchText\" placeholder=\"Search Countries By Name\">\n          </div>\n          <br><br>\n        <div *ngFor=\"let country of selectedRegion |filter :searchText\"> \n          <div id=\"countries\" class=\"col-md-4\">\n          <div *ngIf=\"country\" class=\"card black font-weight\">\n              <img class=\"card-img-top\" src={{country.flag}} alt=\"Card image\" class=\"img-responsive-custom\">\n              <h4 class=\"card-title\">Country</h4>\n              <div class=\"card-header\">Name : {{country.name}}</div>\n              <div class=\"card-body\"> \n                <div class=\"card-text\">Capital : {{country.capital}}</div>\n                <div class=\"card-text\">Native Name : {{country.nativeName}}</div>\n                <div class=\"card-text\">Subregion : {{country.subregion}}</div>\n               \n                <div *ngFor=\"let currency of country.currencies;let i=index;\">\n                  <div *ngIf=\"i<1\"> \n                <div class=\"card-text\">Currencies : {{currency.name}}</div>\n            </div>\n          </div>\n            \n            </div> \n              \n              <div class=\"card-footer\"><a title=\"Visit Country To Know More Details\"class=\"btn button-custom\" [routerLink]=\"['/singlecountryview',{code : country.alpha2Code}]\" >Visit Country</a></div>\n           \n              <!-- <div class=\"card-body\">{{book.publisher}}</div> \n              <div class=\"card-footer\">{{book.released}} <br/><br/><a [routerLink]=\"['/view',book.url]\" class=\"btn btn-primary\">Details</a></div>-->\n          \n            </div>\n        </div>\n        </div>\n      <div *ngIf=\"allData\">\n        <div *ngFor=\"let country of finalData |filter :searchText\"> \n            <div id=\"countries\" class=\"col-md-4\">\n                <div *ngIf=\"country\" class=\"card black font-weight\">\n                    <img class=\"card-img-top\" src={{country.flag}} alt=\"Card image\" class=\"img-responsive-custom\">\n                    <h4 class=\"card-title\">Country</h4>\n                    <div class=\"card-header\">Name : {{country.name}}</div>\n                    <div class=\"card-body\"> \n                      <div class=\"card-text\">Capital : {{country.capital}}</div>\n                      <div class=\"card-text\">Native Name : {{country.nativeName}}</div>\n                      <div class=\"card-text\">Subregion : {{country.subregion}}</div>\n                     \n                      <div *ngFor=\"let currency of country.currencies;let i=index;\">\n                        <div *ngIf=\"i<1\"> \n                      <div class=\"card-text\">Currencies : {{currency.name}}</div>\n                  </div>\n                </div>\n                  \n                  </div> \n                    \n                    <div class=\"card-footer\"><a title=\"Visit Country To Know More Details\"class=\"btn button-custom\" [routerLink]=\"['/singlecountryview',{code : country.alpha2Code}]\" >Visit Country</a></div>\n                 \n                    <!-- <div class=\"card-body\">{{book.publisher}}</div> \n                    <div class=\"card-footer\">{{book.released}} <br/><br/><a [routerLink]=\"['/view',book.url]\" class=\"btn btn-primary\">Details</a></div>-->\n                \n                  </div>\n          </div>\n          </div>\n        </div>\n  \n        <br/>\n      \n  \n    </div>\n\n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/countryview/countryview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CountryviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__region_service_service__ = __webpack_require__("../../../../../src/app/region-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CountryviewComponent = /** @class */ (function () {
    function CountryviewComponent(_route, router, regionService, location, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.regionService = regionService;
        this.location = location;
        this.toastr = toastr;
        this.vcr = vcr;
        this.finalData = [];
        this.toastr.setRootViewContainerRef(vcr);
    }
    CountryviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        var myRegion = this._route.snapshot.paramMap.get('regionid');
        var myCurrencyName = this._route.snapshot.paramMap.get('currencyName');
        var myLanguageName = this._route.snapshot.paramMap.get('languageName');
        console.log(myRegion);
        console.log(myCurrencyName);
        console.log(myLanguageName);
        if (myRegion) {
            this.regionService.getAllCountriesOfSelectedRegion(myRegion).subscribe(function (data) {
                _this.toastr.success('Displaying all the countries of the selected region!', 'Success!');
                //  this.allRegions = data;
                _this.selectedRegion = data;
                console.log(_this.selectedRegion);
                _this.selectedCurrencies = data.map(function (a) { return a.currencies; });
                console.log(_this.selectedCurrencies);
            }, function (error) {
                console.log("some error occured");
                console.log(error.errorMessage);
            });
        }
        if (myCurrencyName) {
            this.regionService.getAllCountriesOfSelectedCurrencyName().subscribe(function (data) {
                _this.toastr.success('Currency filter has been applied!', 'Success!');
                _this.allData = data;
                console.log(_this.allData);
                for (var _i = 0, _a = _this.allData; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var currency = void 0;
                    for (var _b = 0, _c = item.currencies; _b < _c.length; _b++) {
                        currency = _c[_b];
                        if (currency.name === myCurrencyName) {
                            _this.finalData.push(item);
                        }
                    }
                }
                console.log(_this.finalData.length);
                // this.selectedCurrencies = data.map(a => a.currencies);
                // console.log(this.selectedCurrencies);
            }, function (error) {
                console.log("some error occured");
                console.log(error.errorMessage);
            });
        }
        if (myLanguageName) {
            this.regionService.getAllCountriesOfSelectedCurrencyName().subscribe(function (data) {
                _this.toastr.success('Language filter has been applied!', 'Success!');
                _this.allData = data;
                console.log(_this.allData);
                for (var _i = 0, _a = _this.allData; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var language = void 0;
                    for (var _b = 0, _c = item.languages; _b < _c.length; _b++) {
                        language = _c[_b];
                        if (language.name === myLanguageName) {
                            _this.finalData.push(item);
                        }
                    }
                }
                console.log(_this.finalData.length);
                // this.selectedCurrencies = data.map(a => a.currencies);
                // console.log(this.selectedCurrencies);
            }, function (error) {
                console.log("some error occured");
                console.log(error.errorMessage);
            });
        }
    };
    CountryviewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    CountryviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-countryview',
            template: __webpack_require__("../../../../../src/app/countryview/countryview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/countryview/countryview.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__region_service_service__["a" /* RegionService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], CountryviewComponent);
    return CountryviewComponent;
}());



/***/ }),

/***/ "../../../../../src/app/filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilterPipe = /** @class */ (function () {
    function FilterPipe() {
    }
    FilterPipe.prototype.transform = function (items, searchText) {
        if (!items) {
            return [];
        }
        if (!searchText) {
            return items;
        }
        console.log(items);
        console.log(searchText);
        return items.filter(function (it) {
            console.log(it);
            if (it.name.toLowerCase().includes(searchText)) {
                return it;
            }
        });
    };
    FilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filter'
        })
    ], FilterPipe);
    return FilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/filterunique.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilteruniquePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FilteruniquePipe = /** @class */ (function () {
    function FilteruniquePipe() {
    }
    FilteruniquePipe.prototype.transform = function (value, args) {
        // Remove the duplicate elements
        var uniqueItems = Array.from(new Set(value));
        return uniqueItems;
    };
    FilteruniquePipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Pipe"])({
            name: 'filterunique',
            pure: false
        })
    ], FilteruniquePipe);
    return FilteruniquePipe;
}());



/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  not-found works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/not-found/not-found.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__("../../../../../src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__("../../../../../src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "../../../../../src/app/region-service.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_do__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/do.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegionService = /** @class */ (function () {
    function RegionService(_http) {
        this._http = _http;
        this.baseUrl = 'https://restcountries.eu/rest/v2';
        console.log("RegionService is called");
    }
    RegionService.prototype.handleError = function (err) {
        console.log("Handle error Http calls");
        console.log(err.message);
        return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(err.message);
    };
    RegionService.prototype.getAllRegions = function () {
        var myResponse = this._http.get(this.baseUrl + '/all');
        return myResponse;
    };
    RegionService.prototype.getAllCountriesOfSelectedRegion = function (selectedregion) {
        var myResponse = this._http.get(this.baseUrl + '/region' + '/' + selectedregion);
        return myResponse;
    };
    RegionService.prototype.getAllCountriesOfSelectedCurrencyName = function () {
        var myResponse = this._http.get(this.baseUrl + '/all');
        return myResponse;
    };
    RegionService.prototype.getSelectedCountryInformation = function (selectedcountry) {
        var myResponse = this._http.get(this.baseUrl + '/alpha' + '/' + selectedcountry);
        return myResponse;
    };
    RegionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RegionService);
    return RegionService;
}());



/***/ }),

/***/ "../../../../../src/app/region/region.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/region/region.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"container-fluid\" style=\"text-align:center\">\n    <div class=\"row\" style=\"text-align:center\"></div>\n      <div class=\"col-md-12\" style=\"font-size:22px;font-weight:bold;color: #23527c;font-variant-caps: unicase;font-family: cursive;\">Welcome to the <span  style=\"cursor:pointer;\"class=\"api_style\" title=\"Regions\">Regions </span>of the World</div>\n      <br><br><br>\n \n      \n    </div>\n    <div class=\"row\" style=\"text-align:center\">\n      <div>\n\n          <select class=\"form-control-custom\" [(ngModel)]=\"selected\" (ngModelChange)=\"onSelect(selected)\" placeholder=\"Filter Category By\">\n              <option  [ngValue]=\"undefined\"selected >Get Countries By Currency Name</option>\n          \n                <option *ngFor=\"let currency of finalCurrencyNamesArray\"> {{currency}} </option>\n            \n          </select>\n       \n      \n            <select class=\"form-control-custom\" [(ngModel)]=\"selected\" (ngModelChange)=\"onSelectLanguage(selected)\" placeholder=\"Filter Category By\">\n                <option  [ngValue]=\"undefined\"selected >Get Countries By Language Name</option>\n               \n                  <option *ngFor=\"let language of finalLanguageNamesArray\"> {{language}} </option>\n               \n            </select>\n         \n       \n              <select class=\"form-control-custom\" [(ngModel)]=\"selected\" (ngModelChange)=\"onSelectRegion(selected)\" placeholder=\"Filter Category By\">\n                  <option  [ngValue]=\"undefined\"selected >Get Countries By Region</option>\n              \n                    <option *ngFor=\"let region of allRegions\"> {{region}} </option>\n                 \n              </select>\n            \n        <br><br>\n        \n        <div *ngFor=\"let region of allRegions \"> \n          <div *ngIf=\"region\">\n            <div class=\"container zoom col-md-4\">\n            \n            <img src=\"assets\\Images\\globe3.png\" alt=\"Card image\" style=\"width:50%\">\n         \n          \n              <div class=\"centered\"><a [routerLink]=\"['/countryview',{ regionid : region }]\" style=\"text-decoration:none;\">{{region}}</a></div>\n            </div>\n        </div>\n        </div>\n  \n  \n        <br/>\n      \n  \n    </div>\n  \n  </div>\n  "

/***/ }),

/***/ "../../../../../src/app/region/region.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__region_service_service__ = __webpack_require__("../../../../../src/app/region-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_animations__ = __webpack_require__("../../../animations/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__ = __webpack_require__("../../../../ng4-loading-spinner/ng4-loading-spinner.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegionComponent = /** @class */ (function () {
    function RegionComponent(_route, router, regionService, spinnerService, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.regionService = regionService;
        this.spinnerService = spinnerService;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    RegionComponent.prototype.ngOnInit = function () {
        var _this = this;
        function onlyUnique(value, index, self) {
            return self.indexOf(value) === index;
        }
        this.spinnerService.show();
        this.toastr.info('Please click on regions to know more');
        this.regionService.getAllRegions().subscribe(function (data) {
            _this.spinnerService.hide();
            //  this.allRegions = data;
            _this.allData = data;
            var result = data.map(function (a) { return a.region; });
            var unique = result.filter(onlyUnique);
            console.log(unique);
            console.log(_this.allData);
            _this.allRegions = unique;
            _this.allRegions.sort();
            var currencyName = [];
            for (var _i = 0, _a = _this.allData; _i < _a.length; _i++) {
                var item = _a[_i];
                for (var _b = 0, _c = item.currencies; _b < _c.length; _b++) {
                    var currency = _c[_b];
                    currencyName.push(currency.name);
                }
            }
            console.log(currencyName);
            var uniqueCurrencyName = currencyName.filter(onlyUnique);
            console.log(uniqueCurrencyName);
            _this.finalCurrencyNamesArray = uniqueCurrencyName;
            var languageName = [];
            for (var _d = 0, _e = _this.allData; _d < _e.length; _d++) {
                var item = _e[_d];
                for (var _f = 0, _g = item.languages; _f < _g.length; _f++) {
                    var language = _g[_f];
                    languageName.push(language.name);
                }
            }
            console.log(languageName);
            var uniqueLanguageName = languageName.filter(onlyUnique);
            console.log(uniqueLanguageName);
            _this.finalLanguageNamesArray = uniqueLanguageName;
            _this.finalCurrencyNamesArray.sort();
            _this.finalLanguageNamesArray.sort();
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    RegionComponent.prototype.onSelect = function (val) {
        console.log(val);
        this.someProperty = val;
        // if (this.someProperty === 'books') {
        //  this.toastr.success('Redirecting to books', 'Success!');
        //   this.allData = this.allData.filter(x => x.value === val);
        //  console.log(this.allData);
        this.router.navigate(['/countryview', { currencyName: val }]).then(function () {
            // do whatever you need after navigation succeeds
        });
        // }
    };
    RegionComponent.prototype.onSelectLanguage = function (val) {
        console.log(val);
        this.someProperty = val;
        // if (this.someProperty === 'books') {
        //  this.toastr.success('Redirecting to books', 'Success!');
        //   this.allData = this.allData.filter(x => x.value === val);
        //  console.log(this.allData);
        this.router.navigate(['/countryview', { languageName: val }]).then(function () {
            // do whatever you need after navigation succeeds
        });
        // }
    };
    RegionComponent.prototype.onSelectRegion = function (val) {
        console.log(val);
        this.someProperty = val;
        // if (this.someProperty === 'books') {
        //  this.toastr.success('Redirecting to books', 'Success!');
        //   this.allData = this.allData.filter(x => x.value === val);
        //  console.log(this.allData);
        this.router.navigate(['/countryview', { regionid: val }]).then(function () {
            // do whatever you need after navigation succeeds
        });
        // }
    };
    RegionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-region',
            template: __webpack_require__("../../../../../src/app/region/region.component.html"),
            styles: [__webpack_require__("../../../../../src/app/region/region.component.css")],
            providers: [],
            animations: [
                Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["i" /* trigger */])('enterAnimation', [
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])(':enter', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ transform: 'translateX(100%)', opacity: 0 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ transform: 'translateX(0)', opacity: 1 }))
                    ]),
                    Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["h" /* transition */])(':leave', [
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ transform: 'translateX(0)', opacity: 1 }),
                        Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["e" /* animate */])('500ms', Object(__WEBPACK_IMPORTED_MODULE_3__angular_animations__["g" /* style */])({ transform: 'translateX(100%)', opacity: 0 }))
                    ])
                ])
            ],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__region_service_service__["a" /* RegionService */], __WEBPACK_IMPORTED_MODULE_4_ng4_loading_spinner__["Ng4LoadingSpinnerService"], __WEBPACK_IMPORTED_MODULE_5_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], RegionComponent);
    return RegionComponent;
}());



/***/ }),

/***/ "../../../../../src/app/singlecountryview/singlecountryview.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/singlecountryview/singlecountryview.component.html":
/***/ (function(module, exports) {

module.exports = "\n\n  <div class=\"container-fluid\" style=\"text-align:center\">\n      \n      \n   \n    <div *ngFor=\"let info of selectedCountry\">\n            <div class=\"text-center font-weight font-size-big\"><span style=\"color:crimson;font-family:cursive\">{{info.name}}</span></div>\n    \n            \n            <div class=\"row\" [style.background-image]=\"'url('+ info.flag +')'\" style=\"opacity:0.76;background-position:center;background-repeat: no-repeat;background-size:cover;\"> \n     \n           \n         \n        \n          <div>\n          \n          <div id=\"countries\" class=\"col-md-6\" style=\"margin-top:4vh;\">\n          <div *ngIf=\"info\" class=\"card black font-weight\">\n              <h4 class=\"card-title\">Basic Details of <span style=\"color:crimson;\">{{info.name}}</span></h4>\n              <div class=\"card-header\"></div>\n              <div class=\"card-body\"> \n                  <div class=\"card-text\">Capital : {{info.capital}}</div>\n                  <div class=\"card-text\">Native Name : {{info.nativeName}}</div>\n                  <div class=\"card-text\">Subregion : {{info.subregion}}</div>\n                  <div class=\"card-text\">Alpha2code : {{info.alpha2Code}}</div>\n                  <div class=\"card-text\">Alpha3code : {{info.alpha3Code}}</div>\n                  <div class=\"card-text\">Region : {{info.region}}</div>\n                  <div class=\"card-text\">Population : {{info.population}}</div>\n                  <div class=\"card-text\">Demonym : {{info.demonym}}</div>\n                  <div class=\"card-text\">Area : {{info.area}}</div>\n                  <div class=\"card-text\">Numeric Code : {{info.numericCode}}</div>\n                  <div class=\"card-text\">CIOC : {{info.cioc}}</div>\n              </div> \n              <div class=\"card-footer\"></div>\n            </div>\n        </div>\n     \n        <div id=\"countries\" class=\"col-md-6\" style=\"margin-top:4vh;\">\n            <div *ngIf=\"info\" class=\"card black font-weight\">\n                <h4 class=\"card-title\">Languages in <span style=\"color:crimson;\">{{info.name}}</span></h4>\n                <div class=\"card-header\"></div>\n                <div class=\"card-body\"> \n                    <div *ngFor=\"let language of info.languages;\">\n                    <div class=\"card-text\">{{language.name}}</div>\n                    \n                  \n                    </div>\n                </div> \n                <div class=\"card-footer\"></div>\n              </div>\n          </div>\n\n          <div id=\"countries\" class=\"col-md-6\" style=\"margin-top:4vh;\">\n              <div *ngIf=\"info\" class=\"card black font-weight\">\n                  <h4 class=\"card-title\">Currencies in <span style=\"color:crimson;\">{{info.name}}</span></h4>\n                  <div class=\"card-header\"></div>\n                  <div class=\"card-body\"> \n                      <div *ngFor=\"let currency of info.currencies;\">\n                      <div class=\"card-text\">{{currency.name}}</div>\n                      \n                    \n                      </div>\n                  </div> \n                  <div class=\"card-footer\"></div>\n                </div>\n            </div>\n\n            <div id=\"countries\" class=\"col-md-6\" style=\"margin-top:4vh;\">\n                <div *ngIf=\"info\" class=\"card black font-weight\">\n                    <h4 class=\"card-title\">Regional Blocs in <span style=\"color:crimson;\">{{info.name}}</span></h4>\n                    <div class=\"card-header\"></div>\n                    <div class=\"card-body\"> \n                        <div *ngFor=\"let rb of info.regionalBlocs;\">\n                        <div class=\"card-text\">{{rb.name}}</div>\n                        \n                      \n                        </div>\n                    </div> \n                    <div class=\"card-footer\"></div>\n                  </div>\n              </div>\n              <div id=\"countries\" class=\"col-md-6\" style=\"margin-top:4vh;\">\n                  <div *ngIf=\"info\" class=\"card black font-weight\">\n                      <h4 class=\"card-title\">Calling Codes in <span style=\"color:crimson;\">{{info.name}}</span></h4>\n                      <div class=\"card-header\"></div>\n                      <div class=\"card-body\"> \n                          <div *ngFor=\"let cc of info.callingCodes;\">\n                          <div class=\"card-text\">{{cc}}</div>\n                          \n                        \n                          </div>\n                      </div> \n                      <div class=\"card-footer\"></div>\n                    </div>\n                </div>\n                <div id=\"countries\" class=\"col-md-6\" style=\"margin-top:4vh;\">\n                    <div *ngIf=\"info\" class=\"card black font-weight\">\n                        <h4 class=\"card-title\">Borders for <span style=\"color:crimson;\">{{info.name}}</span></h4>\n                        <div class=\"card-header\"></div>\n                        <div class=\"card-body\"> \n                            <div *ngFor=\"let border of info.borders;\">\n                            <div class=\"card-text\">{{border}}</div>\n                            \n                          \n                            </div>\n                        </div> \n                        <div class=\"card-footer\"></div>\n                      </div>\n                  </div>\n                </div>\n        </div>\n  \n  \n        <br/>\n      \n  \n    </div>\n  \n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/singlecountryview/singlecountryview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinglecountryviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__region_service_service__ = __webpack_require__("../../../../../src/app/region-service.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__ = __webpack_require__("../../../../ng2-toastr/ng2-toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SinglecountryviewComponent = /** @class */ (function () {
    function SinglecountryviewComponent(_route, router, regionService, location, toastr, vcr) {
        this._route = _route;
        this.router = router;
        this.regionService = regionService;
        this.location = location;
        this.toastr = toastr;
        this.vcr = vcr;
        this.toastr.setRootViewContainerRef(vcr);
    }
    SinglecountryviewComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log(this._route.snapshot.paramMap.get('code'));
        var myCountry = this._route.snapshot.paramMap.get('code');
        console.log(myCountry);
        this.regionService.getSelectedCountryInformation(myCountry).subscribe(function (data) {
            _this.toastr.success('Displaying all the information of the selected selected country!', 'Success!');
            //  this.allRegions = data;
            _this.selectedCountry = [data];
            console.log(_this.selectedCountry);
        }, function (error) {
            console.log("some error occured");
            console.log(error.errorMessage);
        });
    };
    SinglecountryviewComponent.prototype.goBackToPreviousPage = function () {
        this.location.back();
    };
    SinglecountryviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-singlecountryview',
            template: __webpack_require__("../../../../../src/app/singlecountryview/singlecountryview.component.html"),
            styles: [__webpack_require__("../../../../../src/app/singlecountryview/singlecountryview.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_3__region_service_service__["a" /* RegionService */], __WEBPACK_IMPORTED_MODULE_2__angular_common__["Location"], __WEBPACK_IMPORTED_MODULE_4_ng2_toastr_ng2_toastr__["ToastsManager"], __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]])
    ], SinglecountryviewComponent);
    return SinglecountryviewComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map