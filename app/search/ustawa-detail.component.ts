import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { ActivatedRoute, Params } from '@angular/router';

import {IUstawa, Ustawa } from '../ustawa';
import {UstawaService} from '..ustawa.service';

@Component({
 selector: 'ustawa-detail',
  templateUrl: './ustawa-detail.component.html',
  providers: [UstawaService]
  })
export class UstawaDetailComponent { 
  @Input() ustawa: Ustawa;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  
  constructor(
    private ustawaService: HeroService,
    private route: ActivatedRoute) {
  }

ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        let id = +params['id'];
        this.navigated = true;
        this.ustawaService.getDetails(id)
            .then(ustawa => this.ustawa = ustawa);
      } else {
        this.navigated = false;
        this.hero = new Ustawa();
      }
    });
  }
  
}
