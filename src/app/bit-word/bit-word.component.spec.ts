import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitWordComponent } from './bit-word.component';

describe('BitWordComponent', () => {
  let component: BitWordComponent;
  let fixture: ComponentFixture<BitWordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitWordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitWordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
