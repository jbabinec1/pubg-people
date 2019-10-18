import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OverviewAllComponent } from './overview-all/overview-all.component';
import { WeaponMasteryComponent } from './weapon-mastery/weapon-mastery.component';
import { CareerComponent } from './career/career.component';
import { PlayerRankComponent } from './player-rank/player-rank.component';
import { CombatComponent } from './combat/combat.component';
import { CombatService } from './services/combat.service';
import { HttpClientModule } from '@angular/common/http';
import { lifeTimeStat } from '/Users/Jared/pubg-app/src/app/model/combat';
import { CombatListComponent } from './combat-list/combat-list.component';
import { PlayerService } from './services/player.service';
import { FormsModule } from '@angular/forms';
import {SeasonsService } from 'src/app/services/seasons.service';
import {SeasonstatsService} from '/Users/Jared/pubg-app/src/app/services/seasonstats.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    OverviewAllComponent,
    WeaponMasteryComponent,
    CareerComponent,
    PlayerRankComponent,
    CombatComponent,
    CombatListComponent,
    HomeComponent,
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
    
    
  ],
  providers: [CombatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
