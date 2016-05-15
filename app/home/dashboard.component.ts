import {Component,ViewEncapsulation} from '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES,Router,RouterOutlet} from '@angular/router-deprecated';
import {NewsFeedComponent} from './news-feed.component';
import {FavouriteComponent} from './favourite.component';
import {TopTrendingComponent} from './top-trending.component';
import {LatestComponent} from './latest.component';

declare var componentHandler:any;

@Component({
    selector:'menu-bar',
    templateUrl:'app/templates/dashboard.component.html',
    encapsulation: ViewEncapsulation.None,
    directives:[RouterOutlet,FavouriteComponent,NewsFeedComponent,TopTrendingComponent]
})
@RouteConfig([
  {path:'/',name:'NewsFeed',component:NewsFeedComponent,useAsDefault:true},
  {path:'/favourite',name:'Favourite',component:FavouriteComponent},
  {path:'/top-trending',name:'TopTrending',component:TopTrendingComponent},
  {path:'/latest-weekly',name:'Latest',component:LatestComponent}

])
export class DashboardComponent{
  constructor(private _router:Router){}
  ngAfterViewInit(){
    componentHandler.upgradeDom();
  }

  goToFavourite(){
     this._router.navigate(['Favourite']);
  }
  goToNewsFeed(){
    this._router.navigate(['NewsFeed']);
  }
  goToTrending(){
    this._router.navigate(['TopTrending']);
  }

  goToLatest(){
    this._router.navigate(['Latest']);
  }
  //logout user
  logout(){
    sessionStorage.setItem('username','');
    sessionStorage.setItem('login','false');
    window.location.assign("/");
  }
}
