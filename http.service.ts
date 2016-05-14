import {Injectable} from 'angular2/core'
import {Http} from "angular2/http"
import {Observable} from "rxjs/Observable"
import "rxjs/Rx";

@Injectable ()

export class HttpService {
	
	constructor(private _http: Http) {}


	// Fetches repository data from git api according to star and date
	// Returns Object--- [{reponame, language, html_url, description}] 


	getPost():Observable<any>

	{
		var dateObj = new Date();
		var month = dateObj.getUTCMonth() + 1; //months from 1-12
		var	day = dateObj.getUTCDate();
		var year  = dateObj.getUTCFullYear();
		var currentDate;
		var pastDate;

		if (day < 10  && month < 10){
				currentDate = year + "-0" + month + "-0" + day;
		} else {
			if (day < 10) {
				currentDate = year + "-" + month + "-0" + day;
			}
			if(month < 10) {
				currentDate = year + "-0" + month + "-" + day;
			}

		}

		if(day <= 7){
			day = 30 + (day - 7);
			month--;
		} else {
			day = day-7;
		}

		if (day < 10 && month < 10){
				pastDate = year + "-0" + month + "-0" + day;
		} else {
			if (day < 10){
				pastDate = year + "-" + month + "-0" + day;
			}
			if(month < 10) {
				pastDate = year + "-0" + month + "-" + day;
			}	
		}

		console.log(currentDate);
		console.log(pastDate);
		
		return this._http.get("https://api.github.com/search/repositories?q=created:" + pastDate + ".." + currentDate + "&sort=star&order=desc")
			.map(res => res.json())
			.map(response => {
				var FetchedData = [];
				var data = response["items"];
				for (var key in data) {
					FetchedData[key] = {
						language: data[key]["language"],
						name: data[key]["name"],
						html_url: data[key]["html_url"],
						description: data[key]["description"],
					}
				}
				return FetchedData;
			});
	}
}


//https://api.github.com/search/repositories?q=created:>`date -v-7d '+%Y-%m-%d'`&sort=stars&order=desc

