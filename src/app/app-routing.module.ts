import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CombatListComponent } from './combat-list/combat-list.component';
import { CareerComponent } from './career/career.component';

const routes: Routes = [

 { path: 'players', component: CareerComponent },
 { path: 'players/:name', component: CareerComponent },
 {  path: '**', redirectTo: '/players'  }



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
