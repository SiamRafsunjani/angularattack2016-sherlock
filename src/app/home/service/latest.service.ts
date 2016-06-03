import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LatestService{

        constructor(private http:Http){}

        getLatestIssue():Observable<any[]>{
            var link="https://api.github.com/search/issues?q=state:open&sort=created&order=desc";
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
