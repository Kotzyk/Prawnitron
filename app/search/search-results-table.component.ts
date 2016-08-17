import {Component} from '@angular/core';
import {IUstawa} from 'app/ustawa'

@Component({
  selector: 'results-table',
  templateUrl: 'app/search/search-resuts-table.component.html'
  
})
export class SearchTableResultsComponent { 
  ustawy: IUstawa[]=[
    
  ];
}
