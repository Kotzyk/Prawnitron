/**
 * Created by Mateusz on 2016-08-12.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {AppComponent} from "./app.component";
import {SearchFormComponent} from "./search-form.component";
import {NotComponent} from "./not.component";

@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [AppComponent, SearchFormComponent, NotComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
