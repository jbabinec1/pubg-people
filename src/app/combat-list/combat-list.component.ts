import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { lifeTimeStat } from '/Users/Jared/pubg-app/src/app/model/combat';
import { CombatService } from '/Users/Jared/pubg-app/src/app/services/combat.service';
import { Observable, of, throwError, interval } from 'rxjs';
import { SeasonStats } from '/Users/Jared/pubg-app/src/app/model/season-stats';
import { SeasonstatsService } from '../services/seasonstats.service';
import {Player } from '/Users/Jared/pubg-app/src/app/model/player';
import { PlayerService } from '/Users/Jared/pubg-app/src/app/services/player.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import {SeasonsService } from 'src/app/services/seasons.service';
import { Seasons } from '/Users/Jared/pubg-app/src/app/model/seasons';
import { switchMap, map, first, catchError, share, retryWhen, retry, delay } from 'rxjs/operators';
import { MatTabsModule } from '@angular/material/tabs';
//import { ViewEncapsulation } from '@angular/compiler/src/core';






@Component({
  selector: 'app-combat-list',
  templateUrl: './combat-list.component.html',
  styleUrls: ['./combat-list.component.css'],
  encapsulation: ViewEncapsulation.None
})



export class CombatListComponent implements OnInit {

 
@Input() public lifeTimeStats:lifeTimeStat[];
@Input() public seasonstats: SeasonStats[];
@Input() public player: Player[];
public seasons: Seasons[];
@Input() public seasonStats: SeasonStats[];
 public ID: any;
 public searchString: string = '';
 @Input() public playa: Player[];
public playerName: string = this.route.snapshot.queryParamMap.get('player');  


  constructor(public combatService: CombatService, public seasonStatsService: SeasonstatsService, public seasonService: SeasonsService, private route: ActivatedRoute, public playerService: PlayerService
    
    ) { }

    
    Object = Object;
   

  ngOnInit() { 

    //const playerName: string = this.route.snapshot.queryParamMap.get('player');

    // Non query string name lookup const playerCode = this.route.snapshot.paramMap.get('player');  

/* TESTT
      this.playerService.getPlayer(this.playerName).pipe(retryWhen((err) => err.pipe(delay(5000))),
      switchMap( player => { 
       let playerData = player["data"][0];
       let anotherID = playerData.id;
       return this.playerService.getSeasonStats(anotherID)   
     })).subscribe(id => this.player = id); */
     
        
      

   //this.playerService.getPlayer(playerCode).subscribe(data => {this.player = data});  
     
     //this.lifeTimeStats$ = {} as Observable<lifeTimeStat[]>

   //  this.seasonStats.getSeasonStats().subscribe(data => { this.seasonstats = data});
      
    }  



    search() {
  
      this.playerService.getPlayer(this.searchString).pipe(retryWhen((err) => err.pipe(delay(5000))),
           switchMap( player => { 
            let playerData = player["data"][0];
            let anotherID = playerData.id;
              
            return this.playerService.getSeasonStats(anotherID);
              
          })) 
         
          .subscribe(id => this.player = id);
  
        } 
  
  }





