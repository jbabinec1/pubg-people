import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedirectComponentComponent } from './redirect-component.component';

describe('RedirectComponentComponent', () => {
  let component: RedirectComponentComponent;
  let fixture: ComponentFixture<RedirectComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedirectComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedirectComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
