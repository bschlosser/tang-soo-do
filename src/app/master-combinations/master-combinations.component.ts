import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Data from '../data/master-combinations.json';

@Component({
  selector: 'app-master-combinations',
  templateUrl: './master-combinations.component.html',
  styleUrls: ['./master-combinations.component.scss']
})
export class MasterCombinationsComponent implements OnInit {
  public data = Data;
  public start: number;
  public end: number;
  public gup: number;
  public gups = {};

  constructor(private route: ActivatedRoute) {
    for (var i = 0; i < this.data.length; i++) {
      this.data[i].description = this.data[i].description.replace(/\(/g, '<span class="stance">').replace(/\)/g, '</span>')
      this.gups[this.data[i].gup] = true;
    }
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.start = params['start'];
      this.end = params['end'];
      this.gup = params['gup'];
    });
  }

  public hasSelected() {
    return this.start !== undefined || this.end !== undefined;
  }
}
