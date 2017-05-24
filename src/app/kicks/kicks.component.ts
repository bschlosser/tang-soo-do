import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Data from '../data/kicks.json';

@Component({
  selector: 'app-kicks',
  templateUrl: './kicks.component.html',
  styleUrls: ['./kicks.component.scss']
})
export class KicksComponent implements OnInit {
  public data = Data;
  public gup: number;
  public gups = {};

  constructor(private route: ActivatedRoute) {
    for (var i = 0; i < this.data.length; i++) {
      this.gups[this.data[i].gup] = true;
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.gup = params['gup'];
    });
  }
}
