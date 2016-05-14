import {Component,OnInit,DoCheck} from '@angular/core';
import {FavouriteService} from './service/favourite.service';
import {UserDataService} from './service/user-data.service';
// import {Language} from './language';

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
  language_use:any=[];

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
      this.getLanguageUse(this.languageArray,this.uniqueLanguage);
      this.hasReceivedData=true;

      console.log(this.languageArray);
      console.log(this.uniqueLanguage);
      console.log(this.language_use);
    }
  }

  getFavouriteData(){
    return this.favouriteService.getData()
                          .subscribe(
                            response=>this.response=response,
                            error => this.errorMessage = <any>error
                          )
  }

  getLanguageUse(langArr,unique){
    unique.map(function(currentValue,index,array){
      var check=currentValue;
      var counter=0;
      for(var i=0;i < langArr.length;i++){
        if(check==langArr[i]){
          counter++;
        }
      }
      this.language_use.push({name:check,use:counter});
    });
    // console.log(this.language_use);
  }

}
