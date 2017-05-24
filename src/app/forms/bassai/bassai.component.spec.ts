import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BassaiComponent } from './bassai.component';

describe('BassaiComponent', () => {
  let component: BassaiComponent;
  let fixture: ComponentFixture<BassaiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BassaiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BassaiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
