import {Component,OnInit,DoCheck} from '@angular/core';
import {FavouriteService} from './service/favourite.service';
import {UserDataService} from './service/user-data.service';


@Component({
  selector:'user-favourite',
  template: require('./templates/favourite.component.html'),
  directives:[],
  providers:[FavouriteService,UserDataService]
})
export class FavouriteComponent implements OnInit,DoCheck{

  hasReceivedData:boolean=false;
  response:any;
  errorMessage:any;
  data:any;
  languageArray:any=[];
  uniqueLanguage:any=[];
  nameArray:any=[];
  numArray:any=[];
  maxLang:any=[];
  maxUse:any=[];
  recent:any;
  recentName:string;
  recentUrl:string;
  recentLang:string;

  constructor(private favouriteService:FavouriteService,private userDataService:UserDataService){}

  ngOnInit(){
      this.getFavouriteData();
      this.getRecentData();
  }
  ngDoCheck(){
    if(this.response && !this.hasReceivedData && this.recent){
      var data=this.response;
      this.languageArray=this.userDataService.getLanguageArray(data);
      this.uniqueLanguage=this.userDataService.getUniqueLanguages(this.languageArray).reverse();
      // this.language_use=this.getLanguageUse(this.languageArray,this.uniqueLanguage);
      this.nameArray=this.getLanguageUse(this.languageArray,this.uniqueLanguage);
      this.numArray=this.getLanguageNumber(this.languageArray,this.uniqueLanguage);
      this.unWrap(this.userDataService.getMax(this.languageArray));
      this.getRecentlyUpdated(this.recent);
      this.hasReceivedData=true;
    }
  }


  //unwrap the language:used max array2
  unWrap(data:any){
    //get key
    for(var key in data){
    this.maxLang.push(key);
    this.maxUse.push(data[key]);
    }


  }

  getFavouriteData(){
    return this.favouriteService.getData()
                          .subscribe(
                            response=>this.response=response,
                            error => this.errorMessage = <any>error
                          );
  }

//get the name of language
  getLanguageUse(langArr:any,unique:any){
    let nameArr:any=[];

    unique.map(function(currentValue:any,index:any,array:any){
      var check=currentValue;
      var counter=0;
      for(var i=0;i < langArr.length;i++){
        if(check==langArr[i]){
          counter++;
        }
      }

      if(check!=null){
        nameArr.push(check);
      }

    });
    return nameArr;
  }

//get the number of repo in particular lang
  getLanguageNumber(langArr:any,unique:any){
    let numArr:any=[];

    unique.map(function(currentValue:any,index:any,array:any){
      var check=currentValue;
      var counter=0;
      for(var i=0;i < langArr.length;i++){
        if(check==langArr[i]){
          counter++;
        }
      }
      if(check!=null){
        numArr.push(counter);
      }

    });
    return numArr;
  }

//get recently updated data
  getRecentData(){
    return this.favouriteService.getRecentUpdated()
                          .subscribe(
                            recent=>this.recent=recent,
                            error => this.errorMessage = <any>error
                          );
  }

  //unwrap the json data
  getRecentlyUpdated(data:any){
    var newData=data.items;
    newData=newData[0];
    this.recentName=newData.name;
    this.recentUrl=newData.html_url;
    this.recentLang=newData.language;
  }

  //navigate
  getRecentUrl(){
   window.location.assign(this.recentUrl);
  }


}
