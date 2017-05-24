import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilSangEeRhoComponent } from './chil-sang-ee-rho.component';

describe('ChilSangEeRhoComponent', () => {
  let component: ChilSangEeRhoComponent;
  let fixture: ComponentFixture<ChilSangEeRhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilSangEeRhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilSangEeRhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
