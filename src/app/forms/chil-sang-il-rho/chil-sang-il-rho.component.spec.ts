import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChilSangIlRhoComponent } from './chil-sang-il-rho.component';

describe('ChilSangIlRhoComponent', () => {
  let component: ChilSangIlRhoComponent;
  let fixture: ComponentFixture<ChilSangIlRhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChilSangIlRhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChilSangIlRhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
