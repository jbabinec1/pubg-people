import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { lifeTimeStat} from '../../app/model/combat';
import { Player } from '../../app/model/player';
import { PlayerService } from '../services/player.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subject, Observable } from 'rxjs';
import {SeasonsService } from '../services/seasons.service';
import { Seasons } from '../model/seasons';
import {SeasonstatsService} from '../services/seasonstats.service';
import { SeasonStats } from '../model/season-stats';
import { switchMap, map, first, share, delay, retryWhen } from 'rxjs/operators';
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

  
 /* seasonsSelect: SeasonsSelectLink[] = [
    //{value: 'steak-0', viewValue: 'Steak'},
    {value: 'seasonThree-1', viewValue: 'Season Three'},
    {value: 'seasonFour-2', viewValue: 'Season Four'}
  ]; */
 
  
  constructor(public playerService: PlayerService, private route: ActivatedRoute, public seasonService: SeasonsService, public seasonstatsservice: SeasonstatsService, public fb: FormBuilder) { }

 @Input() public player: any =[];
  public searchString: string = '';
  public seasons: Seasons[];
 @Input() public seasonStats: SeasonStats[];
  public ID: any;
  @Input() public playa: Player[];
  public id: any;
public playerName: string = this.route.snapshot.queryParamMap.get('player'); 
product:any={};
  


  ngOnInit() {

    //const playerName: string = this.route.snapshot.queryParamMap.get('player');

   // Non query string way of name lookup const playerCode = this.route.snapshot.paramMap.get('player'); 

  
     this.playerService.getPlayer(this.playerName).pipe(retryWhen((err) => err.pipe(delay(5000))),share()).subscribe(data => {this.playa = data});  

    

    this.playerService.getPlayer(this.playerName).pipe(retryWhen((err) => err.pipe(delay(5000))),
      switchMap( player => { 
       let playerData = player["data"][0];
       let anotherID = playerData.id;
         
       return this.playerService.getSeasonStats(anotherID);        
     }))    
     .subscribe(id => this.player = id);
 
      
     

  
  

  //  this.playerService.getPlayer(this.searchString).subscribe(data => {this.player = data});  

    
  }



  seasonFourSwitch() {

  /*  const playerName: string = this.route.snapshot.queryParamMap.get('player');
    this.playerService.getPlayer(playerName).pipe(share()).subscribe(data => {this.player = data});  */


    this.playerService.getPlayer(this.playerName).pipe(retryWhen((err) => err.pipe(delay(5000))),share(),
      switchMap( player => { 
       let playerData = player["data"][0];
       let anotherID = playerData.id;
         
       return this.playerService.getSeasonFourStats(anotherID).pipe(share());        
     }))    
     .subscribe(id => this.player = id); 


  }


  
  seasonFiveSwitch() {

   // const playerName: string = this.route.snapshot.queryParamMap.get('player');
    //this.playerService.getPlayer(playerName).pipe(share()).subscribe(data => {this.player = data}); 
  
    this.playerService.getPlayer(this.playerName).pipe(retryWhen((err) => err.pipe(delay(5000))),share(),
         switchMap( player => { 
          let playerData = player["data"][0];
          let anotherID = playerData.id;
            
          return this.playerService.getSeasonStats(anotherID);
            
        })) 
       
        .subscribe(id => this.player = id);

      } 







}
