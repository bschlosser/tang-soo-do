import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Data from '../data/one-steps.json';

@Component({
  selector: 'app-one-steps',
  templateUrl: './one-steps.component.html',
  styleUrls: ['./one-steps.component.scss']
})
export class OneStepsComponent implements OnInit {
  public categories;
  public selectedCategory;
  public start;
  public end;
  public gup;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.categories = this.categorize(Data);
      for (var i = 0; i < this.categories.length; ++i) {
        var category = this.categories[i];
        category.min = Number.POSITIVE_INFINITY;
        category.max = 0;
        for (var j = 0; j < category.data.length; ++j) {
          var item = category.data[j];
          category.min = Math.min(item.gup, category.min);
          category.max = Math.max(item.gup, category.max);
        }
      }
      this.selectedCategory = params['category'];
      this.start = params['start'];
      this.end = params['end'];
      this.gup = params['gup'];
    });
  }

  private categorize(data) {
    return data.reduce((result, item) => {
      var arr = result.temp[item.category];
      if (!arr) {
        arr = [];
        result.temp[item.category] = arr;
        result.categories.push({
          name: item.category,
          data: arr
        });
      }
      arr.push(item);
      return result;
    }, {temp: {}, categories: []}).categories;
  }

  public hasSelected() {
    return this.selectedCategory !== undefined;
  }

  public isSelected(category) {
    return category.name == this.selectedCategory;
  }
}
