import {Injectable} from '@angular/core';
//Http client
import {Http, Response} from '@angular/http';
//Observable
import {Observable} from 'rxjs/Observable';

@Injectable()
export class PopularService{

  constructor(private http:Http){}

  getPopularUser():Observable<any[]>{
      var link="https://api.github.com/search/users?q=followers:>1000";
      return this.http.get(link)
                .map(this.extractData)
                .catch(this.handleError);
  }

  getPopularRepo():Observable<any[]>{
    var link="https://api.github.com/search/repositories?q=forks:>1000";
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
