import { Component, OnInit, Input, Output } from '@angular/core';
import { lifeTimeStat } from '/Users/Jared/pubg-app/src/app/model/combat';
import { CombatService } from '/Users/Jared/pubg-app/src/app/services/combat.service';
import { Observable } from 'rxjs';
import { SeasonStats } from '/Users/Jared/pubg-app/src/app/model/season-stats';
import { SeasonstatsService } from '../services/seasonstats.service';



@Component({
  selector: 'app-combat-list',
  templateUrl: './combat-list.component.html',
  styleUrls: ['./combat-list.component.css']
})



export class CombatListComponent implements OnInit {

 
@Input() public lifeTimeStats:lifeTimeStat[];
@Input() public seasonstats: SeasonStats[];
  


  constructor(public combatService: CombatService, public seasonStats: SeasonstatsService
    
    ) { }

    
    Object = Object;
   

  ngOnInit() { 
        

   //this.combatService.getCombat().subscribe(data => {this.lifeTimeStats = data});  
     
     //this.lifeTimeStats$ = {} as Observable<lifeTimeStat[]>

   //  this.seasonStats.getSeasonStats().subscribe(data => { this.seasonstats = data});
      
    }  
}
