/**
 * Created by Mateusz on 2016-08-14.
 */
import {Component}       from '@angular/core';
import {HTTP_PROVIDERS}  from '@angular/http';
import {Observable}      from 'Rxjs/observable';
import {SearchService}   from 'app/search/search.service';
import {NavBarComponent} from "./navbar.component";

@Component({
    selector: 'my-app',
    template: `
    <navbar></navbar>
    <router-outlet></router-outlet>
  `,
    directives: [NavBarComponent],
     providers: [SearchService, HTTP_PROVIDERS]
})
export class AppComponent {
}
