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
var router_deprecated_1 = require('@angular/router-deprecated');
var news_feed_component_1 = require('./news-feed.component');
var favourite_component_1 = require('./favourite.component');
var top_trending_component_1 = require('./top-trending.component');
var DashboardComponent = (function () {
    function DashboardComponent(_router) {
        this._router = _router;
    }
    DashboardComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    DashboardComponent.prototype.goToFavourite = function () {
        this._router.navigate(['Favourite']);
    };
    DashboardComponent.prototype.goToNewsFeed = function () {
        this._router.navigate(['NewsFeed']);
    };
    DashboardComponent.prototype.goToTrending = function () {
        console.log("Trend");
        this._router.navigate(['TopTrending']);
    };
    //logout user
    DashboardComponent.prototype.logout = function () {
        sessionStorage.setItem('username', '');
        sessionStorage.setItem('login', 'false');
        window.location.assign("/");
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'menu-bar',
            templateUrl: 'app/templates/dashboard.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [router_deprecated_1.RouterOutlet, favourite_component_1.FavouriteComponent, news_feed_component_1.NewsFeedComponent, top_trending_component_1.TopTrendingComponent]
        }),
        router_deprecated_1.RouteConfig([
            { path: '/', name: 'NewsFeed', component: news_feed_component_1.NewsFeedComponent, useAsDefault: true },
            { path: '/favourite', name: 'Favourite', component: favourite_component_1.FavouriteComponent },
            { path: '/top-trending', name: 'TopTrending', component: top_trending_component_1.TopTrendingComponent },
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;
//# sourceMappingURL=dashboard.component.js.map