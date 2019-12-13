import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SquadTppComponent } from './squad-tpp.component';

describe('SquadTppComponent', () => {
  let component: SquadTppComponent;
  let fixture: ComponentFixture<SquadTppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SquadTppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SquadTppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
