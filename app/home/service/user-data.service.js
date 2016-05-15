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
//Http client
// import {Http, Response} from '@angular/http';
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
    //get Maximun used langugae in the form [language:use]
    //returns the max used languages in the following object format
    // 	[language : number of usage]
    UserDataService.prototype.getMax = function (arr) {
        var a = [], b = [], prev, array2 = [];
        arr.sort();
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] !== prev) {
                a.push(arr[i]);
                b.push(1);
            }
            else {
                b[b.length - 1]++;
            }
            prev = arr[i];
        }
        for (var i = 0; i < a.length; i++) {
            for (var j = 0; j < a.length; j++) {
                if (b[i] > b[j]) {
                    var temp = b[i];
                    b[i] = b[j];
                    b[j] = temp;
                    temp = a[i];
                    a[i] = a[j];
                    a[j] = temp;
                }
            }
        }
        prev = b[0];
        array2[a[0]] = b[0];
        for (var i = 1; i < a.length; i++) {
            if (b[i] === prev) {
                array2[a[i]] = b[i];
            }
        }
        return array2;
    };
    UserDataService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], UserDataService);
    return UserDataService;
}());
exports.UserDataService = UserDataService;
//# sourceMappingURL=user-data.service.js.map