import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MasterCombinationsComponent } from './master-combinations.component';

describe('MasterCombinationsComponent', () => {
  let component: MasterCombinationsComponent;
  let fixture: ComponentFixture<MasterCombinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasterCombinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MasterCombinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
