import { Injectable }   from '@angular/core';
import {Observable}     from 'rxjs/Rx';
import {Http, Response} from '@angular/http';

import {IUstawa}        from 'app/ustawa';

@Injectable() 
  export class SearchService {
    private prawoUrl = 'https//: ;
    private testUrl = 'app/sejmometr/page_1.json';
 
  constructor(private _http: Http) { }
 
  // Uses http.get() to load a single JSON file
    getSearch(): Observable<any[]> {
    return this.http.get(this.testUrl)
        .map((response: Response) => <IUstawa[]>response.json())
        .do(data => console.log("Otrzymano: " + JSON.stringify(data)))
        .catch(this.handleError);
  }
  
  private handleError(error: Response){
    console.error(error)
    return Observable.throw(error.json().error || "Server error");
  }
}


