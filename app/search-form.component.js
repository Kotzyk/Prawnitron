"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
var core_1 = require("@angular/core");
var SearchFormComponent = (function () {
    function SearchFormComponent() {
        this.kodeksy = [
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
        this.submitted = false;
    }

    SearchFormComponent.prototype.onSubmit = function () {
        this.submitted = true;
    };
    SearchFormComponent = __decorate([
        core_1.Component({
            selector: 'search-form',
            template: "\n    <div class=\"well-lg\">\n    <legend>Wyszukiwanie ustaw</legend>\n    \n    <form class=\"form-horizontal\" method=\"get\">\n    <fieldset>\n        <div class=\"form-group\">\n            <label class=\"col-sm-1 control-label\" for=\"inputNazwa\">Nazwa</label>\n            <div class=\"col-lg-3\">\n                <input type=\"search\" list=\"kody\" class=\"form-control\" id=\"inputNazwa\" />\n                <datalist id=\"kody\">\n                    <option *ngFor=\"let kodeks of kodeksy\" [value]= kodeks.nazwa></option>\n                </datalist>\n            </div>\n        </div>\n        \n        <div class=\"form-group-sm\" hidden>\n            <label class=\"label\" for=\"arty\">Artuku\u0142y</label>\n            <input type=\"number\" title=\"Wybrane artykuly\" id=\"arty\" required/>\n        </div>\n        \n        <div class=\"form-group-lg\">\n            <h4>Adres w Dzienniku Ustaw</h4>\n            <label for=\"adres\">Rok dziennika</label>\n            \n            <input type=\"search\" placeholder=\"Rok\" id=\"adres\"/>\n            <label for=\"nr\">Numer</label>\n            \n            <input type=\"number\" placeholder=\"(Nr w Dz.U)\" id=\"nr\"/>\n            <label for=\"pozycja\">Pozycja</label>\n            \n            <input type=\"number\" placeholder=\"Poz. w Dz.U\" id=\"pozycja\"/>\n        </div>\n        <div class=\"form-group\" hidden>\n            <label for=\"arty\">Artuku\u0142y</label>\n            <input type=\"number\" title=\"Wybrane artykuly\" id=\"arty\" required/>\n        </div>\n        \n        <button type=\"submit\" class=\"btn btn-primary\"> <strong> Zgwa\u0142\u0107 te dzieci! </strong> </button>\n        </fieldset>\n    </form> \n</div>"
        }),
        __metadata('design:paramtypes', [])
    ], SearchFormComponent);
    return SearchFormComponent;
}());
exports.SearchFormComponent = SearchFormComponent;
//# sourceMappingURL=search-form.component.js.map