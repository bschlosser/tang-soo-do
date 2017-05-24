import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Data from '../data/forms.json';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  public data = Data;
  public gup;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.gup = params['gup'];
    });
  }
}
