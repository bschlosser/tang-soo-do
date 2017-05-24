import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Data from '../data/breaking.json';

@Component({
  selector: 'app-breaking',
  templateUrl: './breaking.component.html',
  styleUrls: ['./breaking.component.scss']
})
export class BreakingComponent implements OnInit {
  public data = Data;
  public gup;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.gup = params['gup'];
    });
  }
}
