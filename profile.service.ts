import {Injectable} from 'angular2/core'
import {Http} from "angular2/http"
import {Observable} from "rxjs/Observable"
import "rxjs/Rx";


@Injectable()


export class Profile {
	constructor (private _http: Http){}
	
	name;
	starredUrl;
	follower;
	following;
	bio;
	avatarUrl; 
	location;
	publicRepos;
	publicGists;

	getProfile():Observable<any>{
		var userName = sessionStorage.getItem('username');

		/*var userName = 'abrarShariar';*/

		return this._http.get("https://api.github.com/users/" + userName)
		.map(res => res.json())
		.map(response => {
			this.name = response["name"];
			this.starredUrl = response["starred_url"];
			this.follower = response["followers"];
			this.following = response["following"];
			this.bio = response["bio"];
			this.avatarUrl = response["avatar_url"];
			this.location = response["location"];
			this.publicGists = response["public_gists"];
			this.publicRepos = response["public_repos"];
			
			return [this.name, this.starredUrl, this.follower,this.following,this.bio,this.avatarUrl, this.location,this.publicGists,this.publicRepos];
		});
	}

}


/*return this._http.get("https://api.github.com/search/repositories?q="+ languages + "&sort=fork&order=desc")
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
});*/