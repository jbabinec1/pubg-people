import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewAllComponent } from './overview-all.component';

describe('OverviewAllComponent', () => {
  let component: OverviewAllComponent;
  let fixture: ComponentFixture<OverviewAllComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewAllComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
