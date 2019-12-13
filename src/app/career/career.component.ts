import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { lifeTimeStat} from '/Users/Jared/pubg-app/src/app/model/combat';
import { Player } from '/Users/Jared/pubg-app/src/app/model/player';
import { CombatService } from '/Users/Jared/pubg-app/src/app/services/combat.service';
import { PlayerService } from '/Users/Jared/pubg-app/src/app/services/player.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import {SeasonsService } from 'src/app/services/seasons.service';
import { Seasons } from '/Users/Jared/pubg-app/src/app/model/seasons';
import {SeasonstatsService} from '/Users/Jared/pubg-app/src/app/services/seasonstats.service';
import { SeasonStats } from '/Users/Jared/pubg-app/src/app/model/season-stats';
import { switchMap, map, first } from 'rxjs/operators';
import { of } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
//import { Home, HomeComponent } from 'src/app/home/home.component';
//import { CombatListComponent } from './combat-list/combat-list.component';
import { FormBuilder } from "@angular/forms";


export interface SeasonsSelectLink {
  value: any;
  viewValue: any;
}

@Component({
  selector: 'app-career',
  templateUrl: './career.component.html',
  styleUrls: ['./career.component.css'],
  encapsulation: ViewEncapsulation.None
})


export class CareerComponent implements OnInit {

  selected = 'option1';
  n: any;
  objectKeys = Object.keys;

  ranks: any[] = [
    {
      "name": "bronze",
      "rankNumber": 1399,
      "image": File

    },

    {
      "name": "silver",
      "rankNumber": 1400

    }
  ]

 /* seasonsSelect: SeasonsSelectLink[] = [
    //{value: 'steak-0', viewValue: 'Steak'},
    {value: 'seasonThree-1', viewValue: 'Season Three'},
    {value: 'seasonFour-2', viewValue: 'Season Four'}
  ]; */
 
  
  constructor(public playerService: PlayerService, private route: ActivatedRoute, public seasonService: SeasonsService, public seasonstatsservice: SeasonstatsService, public fb: FormBuilder) { }

 @Input() public player: Player[];
  public searchString: string = '';
  public seasons: Seasons[];
 @Input() public seasonStats: SeasonStats[];
  public ID: any;
  @Input() public playa: Player[];
  public id: any;
  
  


  ngOnInit() {

    const playerName: string = this.route.snapshot.queryParamMap.get('player');

   // Non query string way of name lookup const playerCode = this.route.snapshot.paramMap.get('player'); 

    this.playerService.getPlayer(playerName).subscribe(data => {this.playa = data});  

    

    this.playerService.getPlayer(playerName).pipe(
      switchMap( player => { 
       let playerData = player["data"][0];
       let anotherID = playerData.id;
         
       return this.playerService.getSeasonStats(anotherID);        
     }))    
     .subscribe(id => this.player = id); 
 
      
     

  
  

  //  this.playerService.getPlayer(this.searchString).subscribe(data => {this.player = data});  

    
  }



  seasonFourSwitch() {

    const playerName: string = this.route.snapshot.queryParamMap.get('player');
    this.playerService.getPlayer(playerName).subscribe(data => {this.player = data});  


    this.playerService.getPlayer(playerName).pipe(
      switchMap( player => { 
       let playerData = player["data"][0];
       let anotherID = playerData.id;
         
       return this.playerService.getSeasonFourStats(anotherID);        
     }))    
     .subscribe(id => this.player = id); 


  }


  
  seasonFiveSwitch() {

    const playerName: string = this.route.snapshot.queryParamMap.get('player');
    this.playerService.getPlayer(playerName).subscribe(data => {this.player = data}); 
  
    this.playerService.getPlayer(playerName).pipe(
         switchMap( player => { 
          let playerData = player["data"][0];
          let anotherID = playerData.id;
            
          return this.playerService.getSeasonStats(anotherID);
            
        })) 
       
        .subscribe(id => this.player = id);

      } 







}
