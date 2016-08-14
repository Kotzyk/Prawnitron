import {Component} from "@angular/core";

@Component({
    selector: 'search-form',
    template: `
    <div class="well-lg">
    <legend>Wyszukiwanie ustaw</legend>
    
    <form class="form-horizontal" method="get">
    <fieldset>
        <div class="form-group">
            <label class="col-sm-1 control-label" for="inputNazwa">Nazwa</label>
            <div class="col-lg-3">
                <input type="search" list="kody" class="form-control" id="inputNazwa" />
                <datalist id="kody">
                    <option *ngFor="let kodeks of kodeksy" [value]= kodeks.nazwa></option>
                </datalist>
            </div>
        </div>
        
        <div class="form-group-sm" hidden>
            <label class="label" for="arty">Artukuły</label>
            <input type="number" title="Wybrane artykuly" id="arty" required/>
        </div>
        
        <div class="form-group-lg">
            <h4>Adres w Dzienniku Ustaw</h4>
            <label for="adres">Rok dziennika</label>
            
            <input type="search" placeholder="Rok" id="adres"/>
            <label for="nr">Numer</label>
            
            <input type="number" placeholder="(Nr w Dz.U)" id="nr"/>
            <label for="pozycja">Pozycja</label>
            
            <input type="number" placeholder="Poz. w Dz.U" id="pozycja"/>
        </div>
        <div class="form-group" hidden>
            <label for="arty">Artukuły</label>
            <input type="number" title="Wybrane artykuly" id="arty" required/>
        </div>
        
        <button type="submit" class="btn btn-primary"> <strong> Zgwałć te dzieci! </strong> </button>
        </fieldset>
    </form> 
</div>`
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