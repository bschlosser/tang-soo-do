import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import Data from '../data/self-defense.json';

@Component({
  selector: 'app-self-defense',
  templateUrl: './self-defense.component.html',
  styleUrls: ['./self-defense.component.scss']
})
export class SelfDefenseComponent implements OnInit {
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
      this.start = params['start'] | 1;
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
