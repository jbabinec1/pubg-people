import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { lifeTimeStat} from '../../app/model/combat';
import { Player } from '../../app/model/player';
import { PlayerService } from '../services/player.service';
import { ActivatedRoute, ParamMap, Data } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import {SeasonsService } from '../services/seasons.service';
import { Seasons } from '../model/seasons';
import {SeasonstatsService} from '../services/seasonstats.service';
import { SeasonStats } from '../model/season-stats';
import { switchMap, map, first, share, delay, retryWhen } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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

  
  n: any;
  objectKeys = Object.keys; 

 
  
  constructor(public playerService: PlayerService, private route: ActivatedRoute, public seasonService: SeasonsService, public seasonstatsservice: SeasonstatsService, public fb: FormBuilder) { }

 @Input() public player: any = [];
 //@Input() public player: Player[]

  public searchString: string = '';
  
  public seasons: Seasons[];
 @Input() public seasonStats: SeasonStats[];
  public ID: any;

  @Input() public playa: any =[];
  //@Input() public playa: Player[]

  public id: any;
//public playerName: string = this.route.snapshot.queryParamMap.get('player'); 
public playerName: string = this.route.snapshot.paramMap.get('player');
public platformName: string = this.route.snapshot.paramMap.get('platform');


//How do I get Career component to detect the platform selected from Home? 
//public platformName: string = this.route.snapshot.queryParamMap.get('platform');


//public platformName: string = this.route.snapshot.queryParamMap.get('platform'); 
//_platformName = '';



public selected: string = 'option0';
@Input() public error: any = []; 

  

  ngOnInit() {

    //const playerName: string = this.route.snapshot.queryParamMap.get('player');
   
   // Non query string way of name lookup const playerCode = this.route.snapshot.paramMap.get('player'); 

     this.playerService.getPlayer(this.playerName, this.platformName).pipe(retryWhen((err) => err.pipe(delay(5000))),share()).subscribe(data => {this.playa = data});  

    
    this.playerService.getPlayer(this.playerName, this.platformName).pipe(retryWhen((err) => err.pipe(delay(5000))),
      switchMap( player => { 
       let playerData = player["data"][0];
       let anotherID = playerData.id;
         
       return this.playerService.LifeTimeStats(anotherID, this.platformName);        
     }))    
     .subscribe(id => this.player = id);

     

     /*
    this.playerService.getPlayer(this.playerName).pipe(retryWhen((err) => err.pipe(delay(5000))),
    switchMap( player => { 
     let playerData = player["data"][0];
     let anotherID = playerData.id;
       
     return this.playerService.getLifeTimeStats(anotherID)        
   }))    
   .subscribe(id => this.player = id);   */


 
      /*  TESTT I don't know if this actually does anything
     this.playerService.getPlayer(this.playerName, this.platformName).pipe(retryWhen((err) => err.pipe(delay(5000))),share()).subscribe(data => {this.error = data});  */



     
  

  //  this.playerService.getPlayer(this.searchString).subscribe(data => {this.player = data});  

    
  } 






  seasonSixSwitchConsole() {

  /*  const playerName: string = this.route.snapshot.queryParamMap.get('player');
    this.playerService.getPlayer(playerName).pipe(share()).subscribe(data => {this.player = data});  */

    //let playerName: string = this.route.snapshot.queryParamMap.get('player');
    this.playerService.getPlayer(this.playerName, this.platformName).pipe(retryWhen((err) => err.pipe(delay(5000))),share(),
      switchMap( player => { 
       let playerData = player["data"][0];
       let anotherID = playerData.id;
         
       return this.playerService.getSeasonSixStatsConsole(anotherID).pipe(share());        
     }))    
     .subscribe(id => this.player = id); 
  }




  getSeasonSixStatsPC() {

    this.playerService.getPlayer(this.playerName, this.platformName).pipe(retryWhen((err) => err.pipe(delay(5000))),share(),
    switchMap( player => { 
     let playerData = player["data"][0];
     let anotherID = playerData.id;
       
     return this.playerService.getSeasonSixStatsPC(anotherID).pipe(share());        
   }))    
   .subscribe(id => this.player = id); 
  }




  
  seasonFiveSwitchConsole() {

   //let playerName: string = this.route.snapshot.queryParamMap.get('player');
    this.playerService.getPlayer(this.playerName, this.platformName).pipe(retryWhen((err) => err.pipe(delay(5000))),share(),
         switchMap( player => { 
          let playerData = player["data"][0];
          let anotherID = playerData.id;
            
          return this.playerService.getSeasonFiveStatsConsole(anotherID);      
        }))     
        .subscribe(id => this.player = id);

      } 


      seasonFiveSwitchPC() {
    //let playerName: string = this.route.snapshot.queryParamMap.get('player');
    this.playerService.getPlayer(this.playerName, this.platformName).pipe(retryWhen((err) => err.pipe(delay(5000))),share(),
    switchMap( player => { 
     let playerData = player["data"][0];
     let anotherID = playerData.id;  
     return this.playerService.getSeasonFiveStatsPC(anotherID);      
   }))     
   .subscribe(id => this.player = id);
      }





        
  lifetimeSwitch() {

    //let playerName: string = this.route.snapshot.queryParamMap.get('player');
     this.playerService.getPlayer(this.playerName, this.platformName).pipe(retryWhen((err) => err.pipe(delay(5000))),share(),
          switchMap( player => { 
           let playerData = player["data"][0];
           let anotherID = playerData.id;
             
           return this.playerService.LifeTimeStats(anotherID, this.platformName);      
         }))     
         .subscribe(id => this.player = id);
       } 







}
