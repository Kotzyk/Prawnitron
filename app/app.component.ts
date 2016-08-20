/**
 * Created by Mateusz on 2016-08-14.
 */
import {Component}       from '@angular/core';
import {SearchService}   from './search/search.service';
import {NavBarComponent} from "./navbar.component";

@Component({
    selector: 'my-app',
    template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
    directives: [NavBarComponent],
     providers: [SearchService]
})
export class AppComponent {
}
