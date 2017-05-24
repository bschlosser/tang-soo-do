import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingComponent } from './breaking.component';

describe('BreakingComponent', () => {
  let component: BreakingComponent;
  let fixture: ComponentFixture<BreakingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
