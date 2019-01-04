import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RoleStreamComponent } from './bit-role.component';

describe('RoleStreamComponent', () => {
  let component: RoleStreamComponent;
  let fixture: ComponentFixture<RoleStreamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RoleStreamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RoleStreamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
