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
/**
 * Created by Mateusz on 2016-08-12.
 */
var core_1 = require("@angular/core");
var not_component_1 = require("./not/not.component");
var search_form_component_1 = require("./search-form.component");
var navbar_component_1 = require("./navbar.component");
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Prawnitron';
        this.links = [
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

    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n<navbar></navbar>\n<search-form></search-form>\n",
            directives: [not_component_1.NotComponent, navbar_component_1.NavBarComponent, search_form_component_1.SearchFormComponent]
        }),
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map