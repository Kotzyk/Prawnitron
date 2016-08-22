/**
 * Created by Mateusz on 2016-08-12.
 */
import {NgModule}       from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";
import {FormsModule}    from "@angular/forms";
import {HttpModule}     from "@angular/http";

import { XHRBackend } from '@angular/http';

import {SearchService} from "./search/search.service";

import {AppComponent} from './app.component';
import {routing} from "./app.routing";

import {SearchComponent} from "./search/search.component";
import {NotComponent} from "./not.component";
import {SearchFormComponent} from "./search/search-form.component";
import {SearchResultsTableComponent} from "./search/search-results-table.component";

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
    providers: [
    SearchService,
     XHRBackend
  ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
