import {Component} from '@angular/core';

import { SearchFormComponent }    from 'app/search-component';
import { SearchResultsComponent } from 'app/search-results';

@Component({
 selector: 'search-main',
    template: `
    <search-form></search-form>
    <search-results></search-results>
  `,
    directives: [SearchFormComponent, SearchResultsComponent]
})
export class SearchComponent{ }
