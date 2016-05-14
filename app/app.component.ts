import {Component,ViewEncapsulation,OnInit} from '@angular/core';
declare var componentHandler:any;

@Component({
  selector:'my-app',
  templateUrl:'app/templates/app.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent  implements OnInit{
  //for material lite cdn

  ButtonText:string;
  isSessionSet:boolean;
  ngAfterViewInit(){
    componentHandler.upgradeDom();
  }
  ngOnInit(){
    if(sessionStorage.getItem('login')=='true'){
      this.isSessionSet=true;
      this.ButtonText="Go To My Dashboard";
    }else{
      this.isSessionSet=false;
      this.ButtonText="Connect With GitHub";
    }
  }

  appTitle="App Title";


}
