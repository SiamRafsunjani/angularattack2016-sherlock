import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Trending} from '../trending';

@Injectable()
export class TopTrendingService {

    constructor(private http: Http) {
     }

    getTrending(link):Observable<any[]>{
        return this.http.get(link)
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
