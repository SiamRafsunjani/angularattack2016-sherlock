import {Component,OnInit,DoCheck} from '@angular/core';
import {NewsFeedService} from './service/news-feed.service';
import {UserDataService} from './service/user-data.service';
import {NewsFeed} from './NewsFeed';


@Component({
  selector:'news-feed',
  templateUrl:'app/templates/news-feed.component.html',
  providers:[NewsFeedService,UserDataService]
})
export class NewsFeedComponent{
    uniqueLang:any;

    hasDumped:boolean=false;
    responseDump:any;
    errorMessage:any;
    newsDump:any;

    constructor(private newsFeedService:NewsFeedService,private userDataService:UserDataService){}

    public newsFeed:NewsFeed[];

    ngOnInit(){
      var username = sessionStorage.getItem('username');
      var link = "https://api.github.com/users/" + username + "/repos";     //github api
      this.getDump(link);
      this.getNewsDump(this.uniqueLang);
    }
    ngDoCheck(){
      if(this.responseDump && !this.hasDumped && this.newsDump){
        var data=this.responseDump;
        var lang=this.userDataService.getLanguageArray(data);

        var maxUsedLang=this.getMaxUsed(lang);
        sessionStorage.setItem('maxLang',maxUsedLang);
        this.uniqueLang=this.userDataService.getUniqueLanguages(lang);
        this.hasDumped=true;
        var box=this.newsDump;
        this.newsFeed=this.getFilteredNews(box.items);
        // console.log(this.newsFeed);
      }

    }
    //get filtered news
    getFilteredNews(data:any){
      let resArray:NewsFeed[]=[];

      for(var i=0; i <data.length;i++){
        let box=data[i];
        let myInfo = new NewsFeed();

        myInfo.name=box.full_name;
        myInfo.html_url=box.html_url;
        myInfo.language=box.language;
        myInfo.description=box.description;
        myInfo.stars=box.stargazers_count;
        myInfo.forks=box.forks;
        myInfo.watchers=box.watchers;

        resArray.push(myInfo);
      }
      return resArray;

    }

    //get news feed dump
    getNewsDump(langArr){
      return this.newsFeedService.getNewsFeed(langArr)
                                .subscribe(
                                  response => this.newsDump=response,
                                  error => this.errorMessage = <any>error
                                );
    }

    //get all user data
    getDump(link){
      return this.newsFeedService.getDumpArray(link)
                            .subscribe(
                              response=>this.responseDump=response,
                              error => this.errorMessage = <any>error
                            );
    }

    //take to github repo
    goToGithub(data){
      window.location.assign(data);
    }

    getMaxUsed(langArr){
      var maxLang=langArr[0];
      var maxCount=0;
      langArr.map(function(currentValue,index,array){
        var check=currentValue;
        var count=0;
        for(var i=0; i <langArr.length;i++){
          if(check==langArr[i]){
            count++;
          }
        }
        if(count>maxCount){
          maxCount=count;
          maxLang=check;
        }
      });
      return maxLang;
    }

}
