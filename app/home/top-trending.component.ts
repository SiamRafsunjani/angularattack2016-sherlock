import {Component} from '@angular/core';
import {TopTrendingService} from './service/top-trending.service';

@Component({
  selector:'<top-trending>',
  template:`<h1>Top Trending</h1>`,
  providers:[TopTrendingService]
})
export class TopTrendingComponent{

  constructor(private topTrendingService:TopTrendingService){}

}
