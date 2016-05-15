import {Injectable} from 'angular2/core'
import {Http} from "angular2/http"
import {Observable} from "rxjs/Observable"
import "rxjs/Rx";


@Injectable()

export class Trending {
	constructor(private _http: Http){}

	public language = [];
	public name = [];
	public html_url = [];
	public description = [];
	public fork_url = [];
	public forks = [];

	getTrending(UserLanguages):Observable<any>{

		var languages;

		for(var key in UserLanguages){
			languages += "language:" + UserLanguages[key] + "+"; 
		}

		return this._http.get("https://api.github.com/search/repositories?q="+ languages + "&sort=fork&order=desc")
		.map(res => res.json())
		.map(response => {
			var FetchedData = [];
			var data = response["items"];

			for (var key in data) {
				this.language[key] = data[key]["language"]
				this.name[key] = data[key]["name"]
				this.html_url[key] = data[key]["html_url"]
				this.description[key] = data[key]["description"]
				this.fork_url[key] = data[key]["fork_url"]
				this.forks[key] = data[key]["forks"]

			}
			return [this.language, this.name, this.html_url, this.description, this.fork_url,this.fork];
		});
	}

}


//https://api.github.com/search/repositories?q=language:assembly&sort=fork&order=desc