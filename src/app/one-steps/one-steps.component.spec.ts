import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneStepsComponent } from './one-steps.component';

describe('OneStepsComponent', () => {
  let component: OneStepsComponent;
  let fixture: ComponentFixture<OneStepsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneStepsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneStepsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
