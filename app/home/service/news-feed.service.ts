import {Injectable} from '@angular/core';
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {NewsFeed} from "../NewsFeed";




@Injectable()
export class NewsFeedService {

    // public newsFeed:NewsFeed[]=[];

    languageArray:string[]=[];
    dataDump:any;
    filterNews:NewsFeed[]=[];


    constructor(private http: Http){
    }


    //get all user repo data
    getDumpArray(link):Observable<any[]>{
      return this.http.get(link)
                    .map(this.extractData)
                    .catch(this.handleError);
    }



    //news feed data dump
    getNewsFeed(UserLanguages: any): Observable<any> {

         var dateObj = new Date();
		      var month = dateObj.getUTCMonth() + 1; //months from 1-12
		      var day = dateObj.getUTCDate();
		      var year = dateObj.getUTCFullYear();
		      var pastDate;
		      var languages = "";

        if (day <= 7) {
            day = 30 + (day - 7);
            month--;
        } else {
            day = day - 7;
        }

        if (day < 10 && month < 10) {
            pastDate = year + "-0" + month + "-0" + day;
        } else {
            if (day < 10) {
                pastDate = year + "-" + month + "-0" + day;
            }
            if (month < 10) {
                pastDate = year + "-0" + month + "-" + day;
            }
        }

        //get user's most used languages
        for(var key in UserLanguages ){
			       languages += "language:" + UserLanguages[key] + "+";
		         }

        var link="https://api.github.com/search/repositories?q=created:>"+pastDate+"+"+languages+"&sort=star&order=desc";

        return this.http.get(link)
                        .map(this.extractData)
                        .catch(this.handleError);
    }

    extractData(res:Response){
      if (res.status < 200 || res.status >= 300) {
          throw new Error('Bad response status: ' + res.status);
      }
      let body = res.json();
      // console.log(body);
      return body || {};
    }

    private handleError(error: any){
      let errMsg = error.message || 'Server Error';
      console.error(errMsg);
      return Observable.throw(errMsg);
    }
	}
