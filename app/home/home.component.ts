import {Component,OnInit} from '@angular/core';
import {MenubarComponent} from '../menubar/menubar.component';


@Component({
  selector:'user-home',
  template:`<menu-bar></menu-bar>`,
  directives:[MenubarComponent]
})
export class HomeComponent implements OnInit{
    ngOnInit(){

    }
}
