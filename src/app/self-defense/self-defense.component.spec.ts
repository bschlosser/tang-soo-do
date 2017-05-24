import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelfDefenseComponent } from './self-defense.component';

describe('SelfDefenseComponent', () => {
  let component: SelfDefenseComponent;
  let fixture: ComponentFixture<SelfDefenseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelfDefenseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelfDefenseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
