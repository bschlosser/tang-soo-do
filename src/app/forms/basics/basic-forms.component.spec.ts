import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicFormsComponent } from './basic-forms.component';

describe('BasicsComponent', () => {
  let component: BasicFormsComponent;
  let fixture: ComponentFixture<BasicFormsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasicFormsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasicFormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
