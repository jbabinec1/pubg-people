import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuoFppComponent } from './duo-fpp.component';

describe('DuoFppComponent', () => {
  let component: DuoFppComponent;
  let fixture: ComponentFixture<DuoFppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuoFppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuoFppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
