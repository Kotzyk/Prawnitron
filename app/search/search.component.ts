import {Component }            from '@angular/core';
import { Router }                      from '@angular/router';

import { Observable }                  from 'rxjs/Observable';
import { Subject }                     from 'rxjs/Subject';

import { SearchFormComponent }         from './search-form.component';
import { SearchResultsTableComponent } from './search-results-table.component';
import { SearchService }               from './search.service';

import{IUstawa}                        from '../ustawa';

@Component({
 selector: 'search-main',
    template: `
    <search-form></search-form>
    <search-results></search-results>
  `,
    directives: [SearchFormComponent, SearchResultsTableComponent]
})
export class SearchComponent {
    ustawy: Observable<IUstawa[]>;
    private _searchTerms = new Subject<string>();

    constructor(private ustawaSearchService: SearchService,
                private router: Router) {
    }

    // Push a search term into the observable stream.
    search(term: string): void {
        this._searchTerms.next(term);
    }

    ngOnInit() {
        this.ustawy = this._searchTerms
            .debounceTime(300)        // wait for 300ms pause in events
            .distinctUntilChanged()   // ignore if next search term is same as previous
            .switchMap(term => term   // switch to new observable each time
                // return the http search observable
                ? this.ustawaSearchService.search(term)
                // or the observable of empty heroes if no search term
                : Observable.of<IUstawa[]>([]))
            .catch(error => {
                // TODO: real error handling
                console.log(error);
                return Observable.of<IUstawa[]>([]);
            });
    }
}
