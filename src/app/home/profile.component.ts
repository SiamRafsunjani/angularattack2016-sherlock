import {Component,OnInit,DoCheck} from '@angular/core';
import {ProfileService} from './service/profile.service';

@Component({
  selector:'user-profile',
  template: require('./templates/profile.component.html'),
  providers:[ProfileService]
})

export class ProfileComponent{
    username:string;
    apiLink:string;
    response:any;
    errorMessage:any;
    hasDataDumped:boolean=false;

    //Profile info
    avatar_url:string;
    blog_url:string;
    created:any;
    email:string;
    followers:number;
    following:number;
    hireable:boolean;
    html_url:string;
    location:string;
    full_name:string;
    public_gists:number;
    public_repo:any;
    type:string;
    updated_at:string;

    constructor(private profileService:ProfileService){}

    ngOnInit(){
      this.username=sessionStorage.getItem('username');
      this.apiLink="https://api.github.com/users/"+this.username;
      this.getUserInfo(this.apiLink);
    }

    ngDoCheck(){
        if(this.response && !this.hasDataDumped){
          var data=this.response;

          this.avatar_url=data.avatar_url;
          this.blog_url="https://"+data.blog;
          this.created=data.created;
          this.email=data.email;
          this.followers=data.followers;
          this.following=data.following;
          this.hireable=data.hireable;
          this.html_url=data.html_url;
          this.location=data.location;
          this.full_name=data.full_name;
          this.public_gists=data.public_gists;
          this.public_repo=data.public_repos;
          this.type=data.type;
          this.updated_at=data.updated_at;

          this.hasDataDumped=true;
        }
    }

    getUserInfo(link:any){
        this.profileService.getProfileInfo(link)
                            .subscribe(
                              response=>this.response=response,
                              error => this.errorMessage = <any>error
                            );
    }

    goToGithub(link:any){
      window.location.assign(link);
    }
    goToBlog(link:any){
      window.location.assign(link);
    }

}
