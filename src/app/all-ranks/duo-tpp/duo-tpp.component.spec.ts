import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DuoTppComponent } from './duo-tpp.component';

describe('DuoTppComponent', () => {
  let component: DuoTppComponent;
  let fixture: ComponentFixture<DuoTppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DuoTppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DuoTppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
