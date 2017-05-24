import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicSetComponent } from './basic-set.component';

describe('BasicSetComponent', () => {
  let component: BasicSetComponent;
  let fixture: ComponentFixture<BasicSetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicSetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
