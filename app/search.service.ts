import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Rx';


@Injectable() 
  export class SearchService {
    private prawoUrl = 'https//: ;
    private testUrl = 'app/sejmometr/page_1.json';
 
  constructor(private http:Http) { }
 
  // Uses http.get() to load a single JSON file
  getSearch() {
    return this.http.get(testUrl).map((res:Response) => res.json());
  }
}
