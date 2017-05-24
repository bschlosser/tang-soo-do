import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyongAhnSamDanComponent } from './pyong-ahn-sam-dan.component';

describe('PyongAhnSamDanComponent', () => {
  let component: PyongAhnSamDanComponent;
  let fixture: ComponentFixture<PyongAhnSamDanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyongAhnSamDanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyongAhnSamDanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
