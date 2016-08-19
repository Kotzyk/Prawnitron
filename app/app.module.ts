/**
 * Created by Mateusz on 2016-08-12.
 */
import {NgModule}       from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";
import {FormsModule}    from "@angular/forms";
import {HttpModule, HTTP_PROVIDERS}     from "@angular/http";

import {AppComponent} from "app/app.component";
import {routing} from "app/app.routing";

import {SeachComponent} from 'app/search/search.component';
import {SearchFormComponent} from 'app/search/search-form.component';
import {SearchResultsTableComponent} from 'app/search/search-results-table.component';
import {SearchService} from 'app/search/search.service';


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        SearchComponent,
        NotComponent,
        SearchResultsTableComponent,
        SearchFormComponent,
    ],
    providers: [ HTTP_PROVIDERS,
    SearchService
  ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
