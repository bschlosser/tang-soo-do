import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PyongAhnChoDanComponent } from './pyong-ahn-cho-dan.component';

describe('PyongAhnChoDanComponent', () => {
  let component: PyongAhnChoDanComponent;
  let fixture: ComponentFixture<PyongAhnChoDanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PyongAhnChoDanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PyongAhnChoDanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
