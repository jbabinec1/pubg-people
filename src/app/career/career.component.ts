import { Component, OnInit, Input } from '@angular/core';
import { lifeTimeStat} from '/Users/Jared/pubg-app/src/app/model/combat';
import {Player } from '/Users/Jared/pubg-app/src/app/model/player';
import { CombatService } from '/Users/Jared/pubg-app/src/app/services/combat.service';
import { PlayerService } from '/Users/Jared/pubg-app/src/app/services/player.service';
import { ActivatedRoute } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import {SeasonsService } from 'src/app/services/seasons.service';
import { Seasons } from '/Users/Jared/pubg-app/src/app/model/seasons';
import {SeasonstatsService} from '/Users/Jared/pubg-app/src/app/services/seasonstats.service';
import { SeasonStats } from '/Users/Jared/pubg-app/src/app/model/season-stats';
import { switchMap, map, first } from 'rxjs/operators';
import { of } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
//import { Home } from 'src/app/home/home.component';



@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css']
})


export class CareerComponent implements OnInit {

  constructor(public playerService: PlayerService, private route: ActivatedRoute, public seasonService: SeasonsService, public seasonstatsservice: SeasonstatsService) { }

 @Input() public player: Player[];
  public searchString: string = '';
  public seasons: Seasons[];
 @Input() public seasonStats: SeasonStats[];
  public ID: any;
  
  


  ngOnInit() {

   //const playerCode = this.route.snapshot.paramMap.get('name');  

   // this.playerService.getPlayer(this.searchString).subscribe(data => {this.player = data});  
    
  }
  

/* Saving this failure of trying to recieve data emit here
  search(player: Player) {
           
         return this.player        
            
       // .subscribe(id => this.player = id);
      } */


  
  search() {
  
    this.playerService.getPlayer(this.searchString).pipe(
         switchMap( player => { 
          let playerData = player["data"][0];
          let anotherID = playerData.id;
            
          return this.playerService.getSeasonStats(anotherID);
            
        })) 
       
        .subscribe(id => this.player = id);

      } 

}
