import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitLineComponent } from './bit-line.component';

describe('BitLineComponent', () => {
  let component: BitLineComponent;
  let fixture: ComponentFixture<BitLineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitLineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitLineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
