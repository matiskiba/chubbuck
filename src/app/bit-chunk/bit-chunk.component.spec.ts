import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BitChunkComponent } from './bit-chunk.component';

describe('BitChunkComponent', () => {
  let component: BitChunkComponent;
  let fixture: ComponentFixture<BitChunkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BitChunkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BitChunkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
