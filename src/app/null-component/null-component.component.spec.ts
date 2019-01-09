import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NullComponentComponent } from './null-component.component';

describe('NullComponentComponent', () => {
  let component: NullComponentComponent;
  let fixture: ComponentFixture<NullComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NullComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NullComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
