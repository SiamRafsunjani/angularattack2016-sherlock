import {Component,OnInit,DoCheck} from '@angular/core';
import {LatestService} from './service/latest.service';


class Issue{
  title:string;
  body:any;
  html_url:string;
  created_at:any;
  comments:number;
  state:any;
}
@Component({
  selector:'latest-weekly',
  template: require('./templates/latest.component.html'),
  providers:[LatestService]
})
export class LatestComponent implements OnInit,DoCheck{

  response:any;
  errorMessage:any;
  hasDumped:boolean=false;

  public latestIssue:Issue[]=[];

  constructor(private latestService:LatestService){}

  ngOnInit(){
    this.getIssue();
  }

  ngDoCheck(){
    if(this.response && !this.hasDumped){
      this.latestIssue=this.unpackData(this.response);
      console.log(this.latestIssue);
      this.hasDumped=true;
    }
  }

  getIssue(){
    this.latestService.getLatestIssue()
                      .subscribe(
                        response=>this.response=response,
                        error=>this.errorMessage=error
                      );
  }

  unpackData(data:any):Issue[]{
      let info=data.items;
      let resArray:Issue[]=[];
      for(var i=0;i < info.length;i++){
          let box=info[i];
          let obj=new Issue();
          obj.title=box.title;
          obj.body=box.body;
          obj.html_url=box.html_url;
          obj.comments=box.comments;
          obj.created_at=box.created_at;
          obj.state=box.state;

          resArray.push(obj);
      }

      return resArray;
  }
}
