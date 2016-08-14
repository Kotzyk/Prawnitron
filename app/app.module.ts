/**
 * Created by Mateusz on 2016-08-12.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";

import {AppComponent} from "./app.component";
import {routing} from "./app.routing";

import {PrawnitronComponent} from "./prawnitron.component";


@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        routing
    ],
    declarations: [
        AppComponent,
        PrawnitronComponent
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
