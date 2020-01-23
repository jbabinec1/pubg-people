import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombatListComponent } from './combat-list/combat-list.component';
import { CareerComponent } from './career/career.component';
import {HomeComponent} from './home/home.component';
import { RedirectComponentComponent } from './redirect-component/redirect-component.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [


    { path: 'players', pathMatch: 'full', component: CareerComponent },
    { path: 'players/:player', component: CareerComponent },
    //{ path: 'player/:stat', component: CareerComponent },
    { path: 'home', component: HomeComponent  },
    { path: 'about', pathMatch: 'full', component: AboutComponent },
    { path: 'not-found', component: RedirectComponentComponent },
    {  path: '**', redirectTo: 'home'  }
    



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

/* */