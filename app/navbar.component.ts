/**
 * Created by Mateusz on 2016-08-14.
 */
import {Component} from "@angular/core";

@Component({
    selector: 'navbar',
    template: `
<nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <a class="navbar-brand" routerLink="/prawnitron">Prawnitron</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <li><a routerLink="/search">Aplikacja<span class="sr-only">(current)</span></a></li>
        <li><a routerLink="/about">O projekcie</a></li>
        <li><a routerLink="/404">404</a> </li>
      </ul>
    </div>
  </div>
</nav>
    
`

})

export class NavBarComponent {

}