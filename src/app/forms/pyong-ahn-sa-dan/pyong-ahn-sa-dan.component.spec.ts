import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyongAhnSaDanComponent } from './pyong-ahn-sa-dan.component';

describe('PyongAhnSaDanComponent', () => {
  let component: PyongAhnSaDanComponent;
  let fixture: ComponentFixture<PyongAhnSaDanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyongAhnSaDanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyongAhnSaDanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
