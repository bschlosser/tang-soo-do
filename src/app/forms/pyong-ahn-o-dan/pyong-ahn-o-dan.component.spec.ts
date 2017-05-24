import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyongAhnODanComponent } from './pyong-ahn-o-dan.component';

describe('PyongAhnODanComponent', () => {
  let component: PyongAhnODanComponent;
  let fixture: ComponentFixture<PyongAhnODanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyongAhnODanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyongAhnODanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
