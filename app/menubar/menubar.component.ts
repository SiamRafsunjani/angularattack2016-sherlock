import {Component,ViewEncapsulation} from '@angular/core';
declare var componentHandler:any;

@Component({
    selector:'menu-bar',
    templateUrl:'app/templates/menubar.component.html'
})
export class MenubarComponent{
  ngAfterViewInit(){
    componentHandler.upgradeDom();
  }

  //logout user
  logout(){
    sessionStorage.setItem('username','');
    sessionStorage.setItem('login','false');
    window.location.assign("/");

  }
}
