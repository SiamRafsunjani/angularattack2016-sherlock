import {Injectable} from 'angular2/core'
import {Http} from "angular2/http"
import {Observable} from "rxjs/Observable"
import "rxjs/Rx";

@Injectable ()

export class DashBoard{	
	constructor(private _http: Http){}
	
	public language = [];
	public name = [];
	public html_url = [];
	public description = [];


	/// takes a array parameter of most used user languages assigns them to public array language
		// name ,html_url 
	// also returns them
		

	getData(UserLanguages):Observable<any>{
		
		var dateObj = new Date();
		var month = dateObj.getUTCMonth() + 1; //months from 1-12
		var	day = dateObj.getUTCDate();
		var year  = dateObj.getUTCFullYear();
		var pastDate;
		var languages = "";

		if (day <= 7){
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

		for(var key in UserLanguages ){
			languages += "language:" + UserLanguages[key] + "+"; 
		}

		return this._http.get("https://api.github.com/search/repositories?q=created:>" + pastDate + "+" + languages +"&sort=star&order=desc")
			.map(res => res.json())				// fetches json file
			.map(response => {					
				var data = response["items"];		// makes modification to the response json file and
														//	assigns them to language name html_url array
				for (var key in data) {
					this.language[key] = data[key]["language"]
					this.name[key] = data[key]["name"]
					this.html_url[key] = data[key]["html_url"]
					this.description[key] = data[key]["description"]
				}
				return [this.language, this.name, this.html_url, this.description];
			});
	}

}