import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import frontStance from '../data/basic-set-front-stance.json';
import backStance from '../data/basic-set-back-stance.json';

@Component({
  selector: 'app-basic-set',
  templateUrl: './basic-set.component.html',
  styleUrls: ['./basic-set.component.scss']
})
export class BasicSetComponent implements OnInit {
  public categories;
  public start: number;
  public end: number;
  private selectedCategory;
  public gup: number;
  public gups = {};

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categories = [
        {
          name: 'front stance',
          data: frontStance
        },
        {
          name: 'back stance',
          data: backStance
        }
      ];
      for (var i = 0; i < this.categories.length; ++i) {
        var category = this.categories[i];
        category.gups = {};
        for (var j = 0; j < category.data.length; ++j) {
          category.gups[category.data[j].gup] = true;
          this.gups[category.data[j].gup] = true;
        }
      }

      this.selectedCategory = params['category'] ? params['category'].replace('-', ' ') : undefined;
      this.start = params['start'];
      this.end = params['end'];
      this.gup = params['gup'];
    });
  }

  public hasSelected() {
    return this.selectedCategory !== undefined;
  }

  public isSelected(category) {
    return category.name == this.selectedCategory;
  }
}
