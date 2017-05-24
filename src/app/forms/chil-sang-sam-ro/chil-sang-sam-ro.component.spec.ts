import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilSangSamRoComponent } from './chil-sang-sam-ro.component';

describe('ChilSangSamRoComponent', () => {
  let component: ChilSangSamRoComponent;
  let fixture: ComponentFixture<ChilSangSamRoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilSangSamRoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilSangSamRoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
