import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { PlayerRankComponent } from './player-rank.component';
import {By} from '@angular/platform-browser';
import 'jasmine';
import { PlayerInterceptor } from 'src/app/services/player-interceptor';
import {Player } from '../../model/player';

describe('PlayerRankComponent', () => {
  let component: PlayerRankComponent;
  let fixture: ComponentFixture<PlayerRankComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlayerRankComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlayerRankComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
