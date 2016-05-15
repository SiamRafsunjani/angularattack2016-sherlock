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
var http_1 = require("@angular/http");
var Observable_1 = require("rxjs/Observable");
var NewsFeedService = (function () {
    function NewsFeedService(http) {
        this.http = http;
        // public newsFeed:NewsFeed[]=[];
        this.languageArray = [];
        this.filterNews = [];
    }
    //get all user repo data
    NewsFeedService.prototype.getDumpArray = function (link) {
        return this.http.get(link)
            .map(this.extractData)
            .catch(this.handleError);
    };
    //news feed data dump
    NewsFeedService.prototype.getNewsFeed = function (UserLanguages) {
        var dateObj = new Date();
        var month = dateObj.getUTCMonth() + 1; //months from 1-12
        var day = dateObj.getUTCDate();
        var year = dateObj.getUTCFullYear();
        var pastDate;
        var languages = "";
        if (day <= 7) {
            day = 30 + (day - 7);
            month--;
        }
        else {
            day = day - 7;
        }
        if (day < 10 && month < 10) {
            pastDate = year + "-0" + month + "-0" + day;
        }
        else {
            if (day < 10) {
                pastDate = year + "-" + month + "-0" + day;
            }
            if (month < 10) {
                pastDate = year + "-0" + month + "-" + day;
            }
        }
        //get user's most used languages
        for (var key in UserLanguages) {
            languages += "language=" + UserLanguages[key] + "+";
        }
        var link = "https://api.github.com/search/repositories?q=created:>" + pastDate + "+" + languages + "&sort=star&order=desc";
        return this.http.get(link)
            .map(this.extractData)
            .catch(this.handleError);
    };
    NewsFeedService.prototype.extractData = function (res) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        var body = res.json();
        // console.log(body);
        return body || {};
    };
    NewsFeedService.prototype.handleError = function (error) {
        var errMsg = error.message || 'Server Error';
        console.error(errMsg);
        return Observable_1.Observable.throw(errMsg);
    };
    NewsFeedService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], NewsFeedService);
    return NewsFeedService;
}());
exports.NewsFeedService = NewsFeedService;
//# sourceMappingURL=news-feed.service.js.map