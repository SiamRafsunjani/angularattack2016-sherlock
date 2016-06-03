import {Component,ViewEncapsulation} from '@angular/core';
import {RouteConfig,ROUTER_DIRECTIVES,Router,RouterOutlet} from '@angular/router-deprecated';

import {NewsFeedComponent} from './news-feed.component';
import {FavouriteComponent} from './favourite.component';
import {TopTrendingComponent} from './top-trending.component';
import {LatestComponent} from './latest.component';
import {CreditComponent} from './credit.component';
import {ProfileComponent} from './profile.component';
import {PopularComponent} from './popular.component';


declare var componentHandler: any;

@Component({
  selector:'menu-bar',
  template: require('./templates/dashboard.component.html'),
  encapsulation: ViewEncapsulation.None,
  directives:[RouterOutlet,PopularComponent,ProfileComponent,FavouriteComponent,NewsFeedComponent,TopTrendingComponent,CreditComponent]

})
@RouteConfig([
  {path:'/',name:'NewsFeed',component:NewsFeedComponent,useAsDefault:true},
  {path:'/favourite',name:'Favourite',component:FavouriteComponent},
  {path:'/top-trending',name:'TopTrending',component:TopTrendingComponent},
  {path:'/latest-issues',name:'Latest',component:LatestComponent},
  {path:'/credits',name:'Credit',component:CreditComponent},
  {path:'/profile',name:'Profile',component:ProfileComponent},
  {path:'/most-popular',name:'Popular',component:PopularComponent},

])
export class DashboardComponent{

  ngAfterViewInit(){
    componentHandler.upgradeDom();
  }

  constructor(private _router:Router){}


  goToPopular(){
    this._router.navigate(['Popular']);
  }
  goToCredits(){
      this._router.navigate(['Credit']);
  }

  goToProfile(){
    this._router.navigate(['Profile']);
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
