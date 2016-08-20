import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Rx';
import {Http, Response} from '@angular/http';

import {IUstawa}        from '../ustawa';

@Injectable() 
  export class SearchService {
    private prawoUrl = 'https//api-v3. /: ';
    private testUrl = 'app/sejmometr/page_1.json';
 
  constructor(private _http: Http) { }
  
  // Uses http.get() to load a single JSON file
  search(term: string): Observable<IUstawa[]> {
    return this._http
               .get(this.prawoUrl + `/?name=${term}`)
               .map((r: Response) => r.json().data as IUstawa[]);
  }
  
  private handleError(error: Response){
    console.error(error);
    return Observable.throw(error.json().error || "Server error");
  }
}


