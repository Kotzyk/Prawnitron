import {Component} from "@angular/core";

@Component({
    selector: 'search-form',
    templateUrl: '/app/search-form.component.html'
})
export class SearchFormComponent {
    kodeksy: any[] = [
        {
            nazwa: 'Kodeks cywilny',
            id: 0
        },
        {
            nazwa: 'Kodeks karny',
            id: 1
        },
        {
            nazwa: 'Kodeks postępowania karnego',
        },
        {
            nazwa: 'Kodeks karny skarbowy',
        },
        {
            nazwa: 'Kodeks karny wykonawczy',
        },
        {
            nazwa: 'Kodeks morski',
        },
        {
            nazwa: 'Kodeks postępowania administracyjnego',
        },
        {
            nazwa: 'Kodeks postępowania cywilnego',
        },
        {
            nazwa: 'Kodeks pracy',
        },
        {
            nazwa: 'Kodeks rodzinny i opiekuńczy'
        }];

    submitted = false;

    onSubmit() {
        this.submitted = true;
    }
}