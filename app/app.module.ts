/**
 * Created by Mateusz on 2016-08-12.
 */
import {NgModule}       from "@angular/core";
import {BrowserModule}  from "@angular/platform-browser";
import {FormsModule}    from "@angular/forms";
import {HttpModule, XHRBackend}     from "@angular/http"

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import {AppComponent} from "./app.component";
import {routing} from "./app.routing";

import {PrawnitronComponent} from "./prawnitron.component";

import 


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        routing
    ],
    declarations: [
        AppComponent,
        PrawnitronComponent
    ],
    providers: [
    SearchService,
    { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
