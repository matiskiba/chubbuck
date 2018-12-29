import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitRoleComponent } from './bit-role.component';

describe('BitRoleComponent', () => {
  let component: BitRoleComponent;
  let fixture: ComponentFixture<BitRoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitRoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitRoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
