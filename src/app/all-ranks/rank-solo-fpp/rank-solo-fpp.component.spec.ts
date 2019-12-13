import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RankSoloFppComponent } from './rank-solo-fpp.component';

describe('RankSoloFppComponent', () => {
  let component: RankSoloFppComponent;
  let fixture: ComponentFixture<RankSoloFppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RankSoloFppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RankSoloFppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
