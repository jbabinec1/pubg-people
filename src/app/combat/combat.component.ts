import { Component, OnInit, Input } from '@angular/core';
import { lifeTimeStat } from '/Users/Jared/pubg-app/src/app/model/combat';
import { CombatService } from '/Users/Jared/pubg-app/src/app/services/combat.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-combat',
  templateUrl: './combat.component.html',
  styleUrls: ['./combat.component.css']
})
export class CombatComponent implements OnInit {
  
  @Input() public lifeTimeStats: lifeTimeStat;

  
  
  /*public kills$: Observable<playerSeason>; */

  
  /*objectKeys = Object.keys;*/
  constructor(public combatService: CombatService) { }


  ngOnInit() {

   
       
    }  
  

  
}


