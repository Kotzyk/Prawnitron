/**
 * Created by Mateusz on 2016-08-12.
 */
import {Component, OnInit} from "@angular/core";

import {NotComponent} from "./not.component";
import {SearchFormComponent} from "./search-form.component";

@Component({
    selector: 'my-app',
    template: `
<search-form></search-form>
`,
    directives: [NotComponent, SearchFormComponent]
})
export class PrawnitronComponent implements OnInit {

}