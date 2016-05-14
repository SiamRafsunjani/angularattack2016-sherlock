import {Injectable} from '@angular/core';
//Http client
import {Http, Response} from '@angular/http';
//Observable
import {Observable} from 'rxjs/Observable';

@Injectable()
export class FavouriteService {

    private username: string;
    private apiUrl: string;

    constructor(private http: Http) {
        this.username = sessionStorage.getItem('username');
        var link = "https://api.github.com/users/" + this.username + "/repos";     //github api
        this.apiUrl = link;
    }

    getData(): Observable<any[]> {
        return this.http.get(this.apiUrl)
            .map(this.extractData)
            .catch(this.handleError);
    }

    extractData(res: Response) {
        if (res.status < 200 || res.status >= 300) {
            throw new Error('Bad response status: ' + res.status);
        }
        let body = res.json();
        return body || {};
    }

    private handleError(error: any) {
        let errMsg = error.message || 'Server Error';
        console.error(errMsg);
        return Observable.throw(errMsg);
    }


}
