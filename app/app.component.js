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
var dashboard_component_1 = require('./home/dashboard.component');
var AppComponent = (function () {
    function AppComponent(_router) {
        this._router = _router;
        this.appTitle = "Github Bucket";
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        componentHandler.upgradeDom();
    };
    AppComponent.prototype.ngOnInit = function () {
        if (sessionStorage.getItem('login') == 'true') {
            this.isSessionSet = true;
            this.appTitle = "Hello, " + sessionStorage.getItem('username') + "";
            this.ButtonText = "Go To My Dashboard";
        }
        else {
            this.isSessionSet = false;
            this.ButtonText = "Connect With GitHub";
        }
    };
    //triggerd after user clicks button
    AppComponent.prototype.goToDashboard = function () {
        this.isDashboard = true;
        this._router.navigate(['Dashboard']);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: 'app/templates/app.component.html',
            encapsulation: core_1.ViewEncapsulation.None,
            directives: [dashboard_component_1.DashboardComponent, router_deprecated_1.ROUTER_DIRECTIVES],
            providers: []
        }),
        router_deprecated_1.RouteConfig([
            { path: '/dashboard/...', name: 'Dashboard', component: dashboard_component_1.DashboardComponent }
        ]), 
        __metadata('design:paramtypes', [router_deprecated_1.Router])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map