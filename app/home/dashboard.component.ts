import {Component,ViewEncapsulation} from '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES,Router,RouterOutlet} from '@angular/router-deprecated';
import {NewsFeedComponent} from './news-feed.component';
import {FavouriteComponent} from './favourite.component';

declare var componentHandler:any;

@Component({
    selector:'menu-bar',
    templateUrl:'app/templates/dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
    directives:[RouterOutlet,FavouriteComponent,NewsFeedComponent]
})
@RouteConfig([
  {path:'/',name:'NewsFeed',component:NewsFeedComponent,useAsDefault:true},
  {path:'/favourite',name:'Favourite',component:FavouriteComponent}
])
export class DashboardComponent{
  constructor(private _router:Router){}
  ngAfterViewInit(){
    componentHandler.upgradeDom();
  }

  goToFavourite(){
    // console.log("Fav");
     this._router.navigate(['Favourite']);
  }
  goToNewsFeed(){
    this._router.navigate(['NewsFeed']);
  }
  //logout user
  logout(){
    sessionStorage.setItem('username','');
    sessionStorage.setItem('login','false');
    window.location.assign("/");
  }
}
