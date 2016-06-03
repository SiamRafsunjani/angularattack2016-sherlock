import {Injectable} from '@angular/core';
//Http client
// import {Http, Response} from '@angular/http';
// import {Language} from '../language';

@Injectable()
export class UserDataService{

  constructor(){

  }

  //return an array of languages used in repo
  getLanguageArray(data:any){
      let langArr:any = [];
      for (var i = 0; i < data.length; i++) {
          langArr.push(data[i].language);
      }
      return langArr;
  }

  //get unique language used in an array
  getUniqueLanguages(langArr:any){
    let a:any = [];
    let prev:any;
    langArr.sort();

    for (var i = 0; i < langArr.length; i++) {
        if (langArr[i] !== prev) {
            a.push(langArr[i]);
        }
        prev = langArr[i];
    }
    return a;
  }


  //get Maximun used langugae in the form [language:use]
  //returns the max used languages in the following object format
	// 	[language : number of usage]

	getMax(arr:any) {
		let a:any = [];
    let b:any = [];
    let prev:any;
    let array2:any = [];
		arr.sort();

		for ( var i = 0; i < arr.length; i++ ) {
		    if ( arr[i] !== prev ) {
				a.push(arr[i]);
		        b.push(1);
		    } else {
		        b[b.length-1]++;
		    }

		    prev = arr[i];
		}

		for (var i = 0; i < a.length;i++){
			for (var j = 0; j < a.length;j++){
				if(b[i] > b[j]){
					var temp = b[i];
					b[i] = b[j];
					b[j] = temp;

					temp = a[i];
					a[i] = a[j];
					a[j] = temp;
				}
			}
		}

		prev = b[0];
		array2[a[0]] = b[0];
		for (var i = 1; i < a.length;i++){
			if(b[i] === prev){
				array2[a[i]] = b[i];
			}
		}
		return  array2;
	}

}
