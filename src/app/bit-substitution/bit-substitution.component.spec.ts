import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitSubstitutionComponent } from './bit-substitution.component';

describe('BitSubstitutionComponent', () => {
  let component: BitSubstitutionComponent;
  let fixture: ComponentFixture<BitSubstitutionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitSubstitutionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitSubstitutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
