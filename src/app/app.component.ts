import {Component,ViewEncapsulation, OnInit } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, Router} from '@angular/router-deprecated';
import {DashboardComponent} from './home/dashboard.component';
import '../../public/css/styles.css';

// var componentHandler = require('exports?componentHandler&MaterialRipple!material-design-lite/material.js');


@Component({
    selector:'my-app',
    template: require('./home/templates/app.component.html'),
    encapsulation: ViewEncapsulation.None,
    directives:[ROUTER_DIRECTIVES,DashboardComponent],
    providers:[]
})
@RouteConfig([
  {path:'/dashboard/...',name:'Dashboard',component:DashboardComponent}
])
export class AppComponent implements OnInit{
  constructor(private _router: Router) { }

  // ngAfterViewInit() {
  //     componentHandler.upgradeDom();
  // }

  appTitle = "Github Bucket";

  ButtonText: string;
  isSessionSet: boolean;
  isDashboard: boolean;

  ngOnInit() {
      if (sessionStorage.getItem('login') == 'true') {
          this.isSessionSet = true;
          this.appTitle = "Hello, " + sessionStorage.getItem('username') + ""
          this.ButtonText = "Go To My Dashboard";
      } else {
          this.isSessionSet = false;
          this.ButtonText = "Connect With GitHub";
      }
  }

  //triggerd after user clicks button
  goToDashboard() {
      this.isDashboard = true;
      this._router.navigate(['Dashboard']);
  }
}
