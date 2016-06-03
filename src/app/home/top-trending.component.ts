import {Component,OnInit,DoCheck} from '@angular/core';
import {TopTrendingService} from './service/top-trending.service';
import {Trending} from './Trending';

@Component({
  selector:'top-trending',
  template: require('./templates/trending.component.html'),
  providers:[TopTrendingService]
})

export class TopTrendingComponent{
  response:any;
  errorMessage:any;
  maxUsedLang:string;
  apiUrl:string;
  hasDumped:boolean=false;

  public trending:Trending[]=[];

  constructor(private topTrendingService:TopTrendingService){}
  ngOnInit(){
    this.maxUsedLang=sessionStorage.getItem('maxLang');
    this.apiUrl="https://api.github.com/search/repositories?q=language:"+ this.maxUsedLang +"&sort=fork&order=desc"
    this.getTrendingData(this.apiUrl);
  }
  ngDoCheck(){
    if(!this.hasDumped && this.response){
      var data=this.response;
      this.trending=this.unpackData(data.items);
      this.hasDumped=true;
    }
  }

  goToGithub(link:any){
    window.location.assign(link);
  }
  getTrendingData(link:any){
      this.topTrendingService.getTrending(link)
                              .subscribe(
                              response=>this.response=response,
                              error => this.errorMessage = <any>error
                            );
}

  unpackData(data:any){
    let resArray:Trending[]=[];

    for(var i=0; i <data.length;i++){
      let box=data[i];
      let myInfo = new Trending();

      myInfo.name=box.full_name;
      myInfo.html_url=box.html_url;
      myInfo.language=box.language;
      myInfo.description=box.description;
      myInfo.fork=box.forks;

      resArray.push(myInfo);
    }
    return resArray;
  }
  }
