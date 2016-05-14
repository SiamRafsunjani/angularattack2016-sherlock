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
// import {Language} from '../language';
var UserDataService = (function () {
    function UserDataService() {
    }
    //return an array of languages used in repo
    UserDataService.prototype.getLanguageArray = function (data) {
        var langArr = [];
        for (var i = 0; i < data.length; i++) {
            langArr.push(data[i].language);
        }
        return langArr;
    };
    //get unique language used in an array
    UserDataService.prototype.getUniqueLanguages = function (langArr) {
        var a = [];
        var prev;
        langArr.sort();
        for (var i = 0; i < langArr.length; i++) {
            if (langArr[i] !== prev) {
                a.push(langArr[i]);
            }
            prev = langArr[i];
        }
        return a;
    };
    UserDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserDataService);
    return UserDataService;
}());
exports.UserDataService = UserDataService;
//# sourceMappingURL=user-data.service.js.map