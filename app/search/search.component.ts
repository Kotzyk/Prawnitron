import {Component} from '@angular/core';

import { SearchFormComponent }    from 'app/search/search-form';
import { SearchResultsComponent } from 'app/search/search-results';

@Component({
 selector: 'search-main',
    template: `
    <search-form></search-form>
    <search-results></search-results>
  `,
    directives: [SearchFormComponent, SearchResultsComponent]
})
export class SearchComponent{ }
