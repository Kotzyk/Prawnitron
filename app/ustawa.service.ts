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
    public ustawy;// URL to web API
    constructor (private http: Http) {
        //this.ustawy: Ustawa[] = http.get(this.ustawyUrl );

    }

}
