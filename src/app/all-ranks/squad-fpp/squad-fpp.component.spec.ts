import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadFppComponent } from './squad-fpp.component';

describe('SquadFppComponent', () => {
  let component: SquadFppComponent;
  let fixture: ComponentFixture<SquadFppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadFppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadFppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
