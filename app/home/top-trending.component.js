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
var top_trending_service_1 = require('./service/top-trending.service');
var Trending_1 = require('./Trending');
var TopTrendingComponent = (function () {
    function TopTrendingComponent(topTrendingService) {
        this.topTrendingService = topTrendingService;
        this.hasDumped = false;
        this.trending = [];
    }
    TopTrendingComponent.prototype.ngOnInit = function () {
        this.maxUsedLang = sessionStorage.getItem('maxLang');
        this.apiUrl = "https://api.github.com/search/repositories?q=language:" + this.maxUsedLang + "&sort=fork&order=desc";
        this.getTrendingData(this.apiUrl);
    };
    TopTrendingComponent.prototype.ngDoCheck = function () {
        if (!this.hasDumped && this.response) {
            var data = this.response;
            this.trending = this.unpackData(data.items);
            console.log(data);
            console.log(this.trending);
            this.hasDumped = true;
        }
    };
    TopTrendingComponent.prototype.goToGithub = function (link) {
        window.location.assign(link);
    };
    TopTrendingComponent.prototype.getTrendingData = function (link) {
        var _this = this;
        this.topTrendingService.getTrending(link)
            .subscribe(function (response) { return _this.response = response; }, function (error) { return _this.errorMessage = error; });
    };
    TopTrendingComponent.prototype.unpackData = function (data) {
        var resArray = [];
        for (var i = 0; i < data.length; i++) {
            var box = data[i];
            var myInfo = new Trending_1.Trending();
            myInfo.name = box.full_name;
            myInfo.html_url = box.html_url;
            myInfo.language = box.language;
            myInfo.description = box.description;
            myInfo.fork = box.forks;
            resArray.push(myInfo);
        }
        return resArray;
    };
    TopTrendingComponent = __decorate([
        core_1.Component({
            selector: '<top-trending>',
            templateUrl: 'app/templates/trending.component.html',
            providers: [top_trending_service_1.TopTrendingService]
        }), 
        __metadata('design:paramtypes', [top_trending_service_1.TopTrendingService])
    ], TopTrendingComponent);
    return TopTrendingComponent;
}());
exports.TopTrendingComponent = TopTrendingComponent;
//# sourceMappingURL=top-trending.component.js.map