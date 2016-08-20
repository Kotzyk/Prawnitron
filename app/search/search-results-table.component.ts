import {Component} from '@angular/core';
import {IUstawa} from "../ustawa";


@Component({
  selector: 'results-table',
  templateUrl: 'app/search/search-resuts-table.component.html'
  
})
export class SearchResultsTableComponent {
  ustawy: IUstawa[]=[
    
  ];
}
