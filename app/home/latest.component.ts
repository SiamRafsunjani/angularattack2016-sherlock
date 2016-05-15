import {Component,OnInit} from '@angular/core';
import {LatestService} from './service/latest.service';

@Component({
  selector:'latest-weekly',
  template:`<h1>Latest Weekly</h1>`,
  providers:[LatestService]
})
export class LatestComponent{
  constructor(private latestService:LatestService){}
  ngOnInit(){
    this.latestService.getData();
  }
}
