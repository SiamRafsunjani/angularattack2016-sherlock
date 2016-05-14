import {Injectable} from 'angular2/core'

@Injectable()

export class ArrayService {
	

	// will return an object 
		// [language : number of usage]
		
	Count(arr){
		var a = [], b = [], prev, array2 = [];
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
			array2[a[i]] = b[i];
		}	
		
		return array2;    
	}

	// will return an array of all the unique languages

	Unique(arr){
		var a = [], prev;
		arr.sort();

		for ( var i = 0; i < arr.length; i++ ) {
		    if ( arr[i] !== prev ) {
				a.push(arr[i]);
		    } 
			prev = arr[i];
		}

		return a;
	}

	//returns the max used languages in the following object format
	// 	[language : number of usage] 

	Max(arr) {
		var a = [], b = [], prev, array2 = [];
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