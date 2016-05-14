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
// import {Language} from './language';
var FavouriteComponent = (function () {
    function FavouriteComponent(favouriteService, userDataService) {
        this.favouriteService = favouriteService;
        this.userDataService = userDataService;
        this.hasReceivedData = false;
        this.languageArray = [];
        this.uniqueLanguage = [];
        this.language_use = [];
    }
    FavouriteComponent.prototype.ngOnInit = function () {
        this.getFavouriteData();
    };
    FavouriteComponent.prototype.ngDoCheck = function () {
        if (this.response && !this.hasReceivedData) {
            var data = this.response;
            this.languageArray = this.userDataService.getLanguageArray(data);
            this.uniqueLanguage = this.userDataService.getUniqueLanguages(this.languageArray).reverse();
            // this.language_use=this.getLanguageUse(this.languageArray,this.uniqueLanguage);
            this.getLanguageUse(this.languageArray, this.uniqueLanguage);
            this.hasReceivedData = true;
            console.log(this.languageArray);
            console.log(this.uniqueLanguage);
            console.log(this.language_use);
        }
    };
    FavouriteComponent.prototype.getFavouriteData = function () {
        var _this = this;
        return this.favouriteService.getData()
            .subscribe(function (response) { return _this.response = response; }, function (error) { return _this.errorMessage = error; });
    };
    FavouriteComponent.prototype.getLanguageUse = function (langArr, unique) {
        unique.map(function (currentValue, index, array) {
            var check = currentValue;
            var counter = 0;
            for (var i = 0; i < langArr.length; i++) {
                if (check == langArr[i]) {
                    counter++;
                }
            }
            this.language_use.push({ name: check, use: counter });
        });
        // console.log(this.language_use);
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