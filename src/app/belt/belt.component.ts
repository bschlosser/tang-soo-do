import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'belt',
  templateUrl: './belt.component.html',
  styleUrls: ['./belt.component.scss']
})
export class BeltComponent implements OnInit {
  @Input()
  public color:string;
  @Input()
  public stripes:number;
  @Input()
  public gup:number;

  constructor() { }

  ngOnInit() {
    if (this.gup !== undefined) {
      switch (this.gup) {
        case 10:
          this.color = 'white';
          this.stripes = 0;
          break;
        case 9:
          this.color = 'white';
          this.stripes = 1;
          break;
        case 8:
          this.color = 'orange';
          this.stripes = 0;
          break;
        case 7:
          this.color = 'orange';
          this.stripes = 1;
          break;
        case 6:
          this.color = 'green';
          this.stripes = 0;
          break;
        case 5:
          this.color = 'green';
          this.stripes = 1;
          break;
        case 4:
          this.color = 'green';
          this.stripes = 2;
          break;
        case 3:
          this.color = 'red';
          this.stripes = 0;
          break;
        case 2:
          this.color = 'red';
          this.stripes = 1;
          break;
        case 1:
          this.color = 'red';
          this.stripes = 2;
          break;
        
        default:
          throw 'Invalid gup: ' + this.gup;
      }
    }
    // console.log(this.gup, this.color, this.stripes);
  }
}
