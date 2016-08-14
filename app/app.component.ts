/**
 * Created by Mateusz on 2016-08-12.
 */
import {Component} from "@angular/core";
import {NotComponent} from "./not.component";
import {SearchFormComponent} from "./search-form.component";
import {NavBarComponent} from "./navbar.component";
@Component({
    selector: 'my-app',
    template: `
<navbar></navbar>
<search-form></search-form>
`,
    directives: [NotComponent, NavBarComponent, SearchFormComponent]
})
export class AppComponent {
    title: string = 'Prawnitron';
    links: any[] = [
        {
            name: "Jan Paweł 1",
            address: "##"
        },
        {
            name: "Jan Paweł 2",
            address: "#"
        }

    ];
}