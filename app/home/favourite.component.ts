import {Component,OnInit,DoCheck} from '@angular/core';
import {FavouriteService} from './service/favourite.service';
import {UserDataService} from './service/user-data.service';

@Component({
  selector:'user-favourite',
  templateUrl:'app/templates/favourite.component.html',
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

  constructor(private favouriteService:FavouriteService,private userDataService:UserDataService){}

  ngOnInit(){
      this.getFavouriteData();
  }
  ngDoCheck(){
    if(this.response && !this.hasReceivedData){
      var data=this.response;
      this.languageArray=this.userDataService.getLanguageArray(data);
      this.uniqueLanguage=this.userDataService.getUniqueLanguages(this.languageArray).reverse();
      // this.language_use=this.getLanguageUse(this.languageArray,this.uniqueLanguage);
      this.nameArray=this.getLanguageUse(this.languageArray,this.uniqueLanguage);
      this.numArray=this.getLanguageNumber(this.languageArray,this.uniqueLanguage);
      this.hasReceivedData=true;
    }
  }

  getFavouriteData(){
    return this.favouriteService.getData()
                          .subscribe(
                            response=>this.response=response,
                            error => this.errorMessage = <any>error
                          )
  }

//get the name of language
  getLanguageUse(langArr,unique){
    var nameArr=[];

    unique.map(function(currentValue,index,array){
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
  getLanguageNumber(langArr,unique){
    var numArr=[];

    unique.map(function(currentValue,index,array){
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

}
