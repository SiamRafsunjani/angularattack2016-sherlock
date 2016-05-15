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
var news_feed_service_1 = require('./service/news-feed.service');
var user_data_service_1 = require('./service/user-data.service');
var NewsFeed_1 = require('./NewsFeed');
var NewsFeedComponent = (function () {
    function NewsFeedComponent(newsFeedService, userDataService) {
        this.newsFeedService = newsFeedService;
        this.userDataService = userDataService;
        this.hasDumped = false;
    }
    NewsFeedComponent.prototype.ngOnInit = function () {
        var username = sessionStorage.getItem('username');
        var link = "https://api.github.com/users/" + username + "/repos"; //github api
        this.getDump(link);
        this.getNewsDump(this.uniqueLang);
    };
    NewsFeedComponent.prototype.ngDoCheck = function () {
        if (this.responseDump && !this.hasDumped && this.newsDump) {
            var data = this.responseDump;
            var lang = this.userDataService.getLanguageArray(data);
            var maxUsedLang = this.getMaxUsed(lang);
            sessionStorage.setItem('maxLang', maxUsedLang);
            this.uniqueLang = this.userDataService.getUniqueLanguages(lang);
            this.hasDumped = true;
            var box = this.newsDump;
            this.newsFeed = this.getFilteredNews(box.items);
        }
    };
    //get filtered news
    NewsFeedComponent.prototype.getFilteredNews = function (data) {
        var resArray = [];
        for (var i = 0; i < data.length; i++) {
            var box = data[i];
            var myInfo = new NewsFeed_1.NewsFeed();
            myInfo.name = box.full_name;
            myInfo.html_url = box.html_url;
            myInfo.language = box.language;
            myInfo.description = box.description;
            myInfo.stars = box.stargazers_count;
            myInfo.forks = box.forks;
            myInfo.watchers = box.watchers;
            resArray.push(myInfo);
        }
        return resArray;
    };
    //get news feed dump
    NewsFeedComponent.prototype.getNewsDump = function (langArr) {
        var _this = this;
        return this.newsFeedService.getNewsFeed(langArr)
            .subscribe(function (response) { return _this.newsDump = response; }, function (error) { return _this.errorMessage = error; });
    };
    //get all user data
    NewsFeedComponent.prototype.getDump = function (link) {
        var _this = this;
        return this.newsFeedService.getDumpArray(link)
            .subscribe(function (response) { return _this.responseDump = response; }, function (error) { return _this.errorMessage = error; });
    };
    //take to github repo
    NewsFeedComponent.prototype.goToGithub = function (data) {
        window.location.assign(data);
    };
    NewsFeedComponent.prototype.getMaxUsed = function (langArr) {
        var maxLang = langArr[0];
        var maxCount = 0;
        langArr.map(function (currentValue, index, array) {
            var check = currentValue;
            var count = 0;
            for (var i = 0; i < langArr.length; i++) {
                if (check == langArr[i]) {
                    count++;
                }
            }
            if (count > maxCount) {
                maxCount = count;
                maxLang = check;
            }
        });
        return maxLang;
    };
    NewsFeedComponent = __decorate([
        core_1.Component({
            selector: 'news-feed',
            templateUrl: 'app/templates/news-feed.component.html',
            providers: [news_feed_service_1.NewsFeedService, user_data_service_1.UserDataService]
        }), 
        __metadata('design:paramtypes', [news_feed_service_1.NewsFeedService, user_data_service_1.UserDataService])
    ], NewsFeedComponent);
    return NewsFeedComponent;
}());
exports.NewsFeedComponent = NewsFeedComponent;
//# sourceMappingURL=news-feed.component.js.map