"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var favourite_service_1 = require('./service/favourite.service');
var user_data_service_1 = require('./service/user-data.service');
// import {ROUTER_DIRECTIVES,RouteConfig,Router} from '@angular/router-deprecated';
var FavouriteComponent = (function () {
    function FavouriteComponent(favouriteService, userDataService) {
        this.favouriteService = favouriteService;
        this.userDataService = userDataService;
        this.hasReceivedData = false;
        this.languageArray = [];
        this.uniqueLanguage = [];
        this.nameArray = [];
        this.numArray = [];
        this.maxLang = [];
        this.maxUse = [];
    }
    FavouriteComponent.prototype.ngOnInit = function () {
        this.getFavouriteData();
        this.getRecentData();
    };
    FavouriteComponent.prototype.ngDoCheck = function () {
        if (this.response && !this.hasReceivedData && this.recent) {
            var data = this.response;
            this.languageArray = this.userDataService.getLanguageArray(data);
            this.uniqueLanguage = this.userDataService.getUniqueLanguages(this.languageArray).reverse();
            // this.language_use=this.getLanguageUse(this.languageArray,this.uniqueLanguage);
            this.nameArray = this.getLanguageUse(this.languageArray, this.uniqueLanguage);
            this.numArray = this.getLanguageNumber(this.languageArray, this.uniqueLanguage);
            this.unWrap(this.userDataService.getMax(this.languageArray));
            this.getRecentlyUpdated(this.recent);
            this.hasReceivedData = true;
        }
    };
    //unwrap the language:used max array2
    FavouriteComponent.prototype.unWrap = function (data) {
        //get key
        for (var key in data) {
            this.maxLang.push(key);
            this.maxUse.push(data[key]);
        }
    };
    FavouriteComponent.prototype.getFavouriteData = function () {
        var _this = this;
        return this.favouriteService.getData()
            .subscribe(function (response) { return _this.response = response; }, function (error) { return _this.errorMessage = error; });
    };
    //get the name of language
    FavouriteComponent.prototype.getLanguageUse = function (langArr, unique) {
        var nameArr = [];
        unique.map(function (currentValue, index, array) {
            var check = currentValue;
            var counter = 0;
            for (var i = 0; i < langArr.length; i++) {
                if (check == langArr[i]) {
                    counter++;
                }
            }
            if (check != null) {
                nameArr.push(check);
            }
        });
        return nameArr;
    };
    //get the number of repo in particular lang
    FavouriteComponent.prototype.getLanguageNumber = function (langArr, unique) {
        var numArr = [];
        unique.map(function (currentValue, index, array) {
            var check = currentValue;
            var counter = 0;
            for (var i = 0; i < langArr.length; i++) {
                if (check == langArr[i]) {
                    counter++;
                }
            }
            if (check != null) {
                numArr.push(counter);
            }
        });
        return numArr;
    };
    //get recently updated data
    FavouriteComponent.prototype.getRecentData = function () {
        var _this = this;
        return this.favouriteService.getRecentUpdated()
            .subscribe(function (recent) { return _this.recent = recent; }, function (error) { return _this.errorMessage = error; });
    };
    //unwrap the json data
    FavouriteComponent.prototype.getRecentlyUpdated = function (data) {
        var newData = data.items;
        newData = newData[0];
        this.recentName = newData.name;
        this.recentUrl = newData.html_url;
        this.recentLang = newData.language;
    };
    //navigate
    FavouriteComponent.prototype.getRecentUrl = function () {
        window.location.assign(this.recentUrl);
    };
    FavouriteComponent = __decorate([
        core_1.Component({
            selector: 'user-favourite',
            templateUrl: 'app/templates/favourite.component.html',
            directives: [],
            providers: [favourite_service_1.FavouriteService, user_data_service_1.UserDataService]
        }), 
        __metadata('design:paramtypes', [favourite_service_1.FavouriteService, user_data_service_1.UserDataService])
    ], FavouriteComponent);
    return FavouriteComponent;
}());
exports.FavouriteComponent = FavouriteComponent;
//# sourceMappingURL=favourite.component.js.map