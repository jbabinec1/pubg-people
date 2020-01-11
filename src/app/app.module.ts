import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
//import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { OverviewAllComponent } from './overview-all/overview-all.component';
import { WeaponMasteryComponent } from './weapon-mastery/weapon-mastery.component';
import { CareerComponent } from './career/career.component';
import { PlayerRankComponent } from './all-ranks/player-rank/player-rank.component';
import { CombatComponent } from './combat/combat.component';
import { CombatService } from './services/combat.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { lifeTimeStat } from '/Users/Jared/pubg-app/src/app/model/combat';
import { CombatListComponent } from './combat-list/combat-list.component';
import { PlayerService } from './services/player.service';
import { FormsModule } from '@angular/forms';
import {SeasonsService } from 'src/app/services/seasons.service';
import {SeasonstatsService} from '/Users/Jared/pubg-app/src/app/services/seasonstats.service';
import { HomeComponent } from './home/home.component';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { RankSoloFppComponent } from './all-ranks/rank-solo-fpp/rank-solo-fpp.component';
import { DuoTppComponent } from './all-ranks/duo-tpp/duo-tpp.component';
import { DuoFppComponent } from './all-ranks/duo-fpp/duo-fpp.component';
import { SquadTppComponent } from './all-ranks/squad-tpp/squad-tpp.component';
import { SquadFppComponent } from './all-ranks/squad-fpp/squad-fpp.component';
import { PlayerInterceptor } from './services/player-interceptor';
import { from } from 'rxjs';
import { RedirectComponentComponent } from './redirect-component/redirect-component.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';


 




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
    RankSoloFppComponent,
    DuoTppComponent,
    DuoFppComponent,
    SquadTppComponent,
    SquadFppComponent,
    RedirectComponentComponent,
    HeaderComponent,
    AboutComponent,
    
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatSelectModule,
    ReactiveFormsModule
    
    
    
    
  ],
  providers: [
    CombatService, {
      provide: HTTP_INTERCEPTORS,
      useClass: PlayerInterceptor,
      multi: true,
    } ],
  bootstrap: [AppComponent]
})
export class AppModule { }
