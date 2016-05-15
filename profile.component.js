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
var profile_service_1 = require('./services/profile.service');
var ProfileComponent = (function () {
    function ProfileComponent(_profile) {
        this._profile = _profile;
    }
    //------------------------
    ProfileComponent.prototype.ngOnInit = function () {
        this.GetProfileInfo();
    };
    ProfileComponent.prototype.GetProfileInfo = function () {
        var _this = this;
        this._profile.getProfile()
            .subscribe(function (response) { return (_this.name = response[0], _this.starred_url = response[1], _this.follower = response[2], _this.following = response[3], _this.bio = response[4], _this.avatarUrl = response[5], _this.location = response[6], _this.publicRepos = response[7], _this.publicGists = response[8]); }, function (error) { return console.log(error); });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'Profile',
            templateUrl: 'templates/array.html',
            providers: [profile_service_1.Profile],
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof profile_service_1.Profile !== 'undefined' && profile_service_1.Profile) === 'function' && _a) || Object])
    ], ProfileComponent);
    return ProfileComponent;
    var _a;
}());
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map