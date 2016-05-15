import {Component} from 'angular2/core'
import {Profile} from './services/profile.service'
import {OnInit} from 'angular2/core';


@Component ({
	selector: 'Profile',
	templateUrl: 'templates/array.html', 
	providers: [Profile],
})

export class ProfileComponent implements OnInit{
	constructor(private _profile: Profile){

	}

	// data is stored here include these variables anywhere

	name;
	starred_url;
	follower;
	following;
	bio;
	avatarUrl ;
	location ;
	publicRepos ;
	publicGists ;

	//------------------------


	ngOnInit(){
		this.GetProfileInfo();
	}
	
	GetProfileInfo(){
		
		this._profile.getProfile()
		.subscribe(
			response => (this.name = response[0], this.starred_url = response[1], this.follower = response[2], this.following = response[3], this.bio = response[4], this.avatarUrl = response[5], this.location = response[6], this.publicRepos = response[7], this.publicGists = response[8]),
			error => console.log(error)
			)

	}

}