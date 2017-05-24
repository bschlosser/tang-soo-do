import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyongAhnEDanComponent } from './pyong-ahn-e-dan.component';

describe('PyongAhnEDanComponent', () => {
  let component: PyongAhnEDanComponent;
  let fixture: ComponentFixture<PyongAhnEDanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyongAhnEDanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyongAhnEDanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
