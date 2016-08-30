/**
 * Created by Mateusz on 2016-08-15.
 */
import { Injectable }     from '@angular/core';
import { Http, Response } from '@angular/http';
import { Ustawa }         from './ustawa';
import { Observable }     from 'rxjs/Observable';
@Injectable()
export class UstawyService {
    private ustawyUrl: string = 'https://api-v3.mojepanstwo.pl/dane/prawo/';
    public ustawy: Ustawa[];
    constructor (private http: Http) {
        this.ustawy = http.get(this.ustawyUrl)
            .map(this.extractData)
            .catch(this.handleError);

    }
    
    search(term: string): Observable< Ustawa[] > {
    return this.http
               .get(ustawyUrl+`?name=${term}`)
               .map((r: Response) => r.json().data as Ustawa[]);
  }

}
