import {Component} from 'angular2/core'
import {ArrayService} from "./services/array.service"
import {HttpService} from "./services/http.service"

@Component ({
	selector: 'Bitch',
	templateUrl: 'templates/array.html',
	providers: [ArrayService,HttpService],

})

export class AppComponent {
	constructor(private _array: ArrayService, private _httpService: HttpService){
		
		this.onGet(); 
		this.onAssosiative(this.arr);
		this.onUnique(this.arr);
	}

	
	arr = ['html', 'html', 'javascript', 'c', 'c++', 'java', 'c','html', 'html', 'javascript', 'c', 'c++', 'java', 'c','lua','perl','perl','objective c'];
	response = [];

	// calles the http service and retrieves data 

	onGet() {
		this._httpService.getPost()
			.subscribe(
				response => this.response = response,
				error => console.log(error)
			)

	}

	// calles the count function from the array service and retrieves how many times 
	//   any language was used

	onAssosiative(arr){
		var answer = this._array.Count(arr);

		for (var key in answer) {
			 if (answer.hasOwnProperty(key)) {
				console.log(key + " -> " + answer[key]);
			}
		}
		
		return answer;

	}

	// calles and retrieves unique languages

	onUnique(arr){
		var unique = this._array.Unique(arr);

		for (var i = 0; i < unique.length;i++){
			console.log(unique[i]);
		}

		return unique;
	}



	// calles and retrieves mostly used language..... uses the "arr" property 

	onMax(arr){
		var max = this._array.Max(arr);
		
		for (var key in max) {
			if (max.hasOwnProperty(key)) {
				console.log(key + " -> " + max[key]);
			}
		}

		return max;
	}

}

