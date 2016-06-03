import {Component,OnInit,DoCheck} from '@angular/core';
import {PopularService} from './service/popular.service';

class PopularUser{
    avatar_url:any;
    html_url:any;
    login:any;
}
class PopularRepo{
  full_name:string;
  html_url:string;
  forks:number;
  language:string;
  stargazers_count:number;
  watchers:number;
}
@Component({
    selector:'most-populer',
    template: require('./templates/popular.component.html'),
    providers:[PopularService]
})
export class PopularComponent{
    userData:any;
    repoData:any;
    errorMessage:any;
    dataDump:boolean=false;

  public popularUser:PopularUser[];
  public popularRepo:PopularRepo[];


    constructor(private popularService:PopularService){}

    ngOnInit(){
        this.getPopularUser();
        this.getPopularRepo();

    }

    //get popular users on the basis of followers
    getPopularUser(){
      this.popularService.getPopularUser()
                      .subscribe(
                          response=>this.userData=response,
                          error=>this.errorMessage=error
      );
    }

    //get popular repo on the basis of forks
    getPopularRepo(){
      this.popularService.getPopularRepo()
                .subscribe(
                  response=>this.repoData=response,
                  error=>this.errorMessage=error
                );
    }

    ngDoCheck(){
      if(this.userData && !this.dataDump && this.repoData){
        this.popularUser=this.unpackUserData(this.userData);
        this.popularRepo=this.unpackRepoData(this.repoData);
        this.dataDump=true;
      }
    }

    unpackRepoData(data:any):PopularRepo[]{
      let resArray:PopularRepo[]=[];
      var info=data.items;

      for(var i=0;i < info.length;i++){
        let repo=new PopularRepo();
        let obj=info[i];
        repo.full_name=obj.full_name;
        repo.html_url=obj.html_url;
        repo.forks=obj.forks;
        repo.language=obj.language;
        repo.stargazers_count=obj.stargazers_count;
        repo.watchers=obj.watchers;
        resArray.push(repo);
      }
      return resArray;

    }

    unpackUserData(data:any):PopularUser[]{
      let resArray:PopularUser[]=[];
      var info=data.items;

      for(var i=0;i < info.length;i++){
        let user=new PopularUser();
        let obj=info[i];
        user.login=obj.login;
        user.avatar_url=obj.avatar_url;
        user.html_url=obj.html_url;
        resArray.push(user);
      }
      return resArray;
    }
}
