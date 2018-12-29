import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitPunctuationComponent } from './bit-punctuation.component';

describe('BitPunctuationComponent', () => {
  let component: BitPunctuationComponent;
  let fixture: ComponentFixture<BitPunctuationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitPunctuationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitPunctuationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
