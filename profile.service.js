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
var core_1 = require('angular2/core');
var http_1 = require("angular2/http");
require("rxjs/Rx");
var Profile = (function () {
    function Profile(_http) {
        this._http = _http;
    }
    Profile.prototype.getProfile = function () {
        var _this = this;
        var userName = sessionStorage.getItem('username');
        /*var userName = 'abrarShariar';*/
        return this._http.get("https://api.github.com/users/" + userName)
            .map(function (res) { return res.json(); })
            .map(function (response) {
            _this.name = response["name"];
            _this.starredUrl = response["starred_url"];
            _this.follower = response["followers"];
            _this.following = response["following"];
            _this.bio = response["bio"];
            _this.avatarUrl = response["avatar_url"];
            _this.location = response["location"];
            _this.publicGists = response["public_gists"];
            _this.publicRepos = response["public_repos"];
            return [_this.name, _this.starredUrl, _this.follower, _this.following, _this.bio, _this.avatarUrl, _this.location, _this.publicGists, _this.publicRepos];
        });
    };
    Profile = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof http_1.Http !== 'undefined' && http_1.Http) === 'function' && _a) || Object])
    ], Profile);
    return Profile;
    var _a;
}());
exports.Profile = Profile;
/*return this._http.get("https://api.github.com/search/repositories?q="+ languages + "&sort=fork&order=desc")
.map(res => res.json())
.map(response => {
    var FetchedData = [];
    var data = response["items"];

    for (var key in data) {
        this.language[key] = data[key]["language"]
        this.name[key] = data[key]["name"]
        this.html_url[key] = data[key]["html_url"]
        this.description[key] = data[key]["description"]
        this.fork_url[key] = data[key]["fork_url"]
        this.forks[key] = data[key]["forks"]

    }
    return [this.language, this.name, this.html_url, this.description, this.fork_url,this.fork];
});*/ 
//# sourceMappingURL=profile.service.js.map