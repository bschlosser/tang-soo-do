import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.scss']
})
export class RequirementsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  navigate(url) {
    this.router.navigateByUrl(url);
  }
}
