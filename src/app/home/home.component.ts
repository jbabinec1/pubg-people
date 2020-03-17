import { Component, OnInit, Input, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '.././services/player.service';
import {Player } from '.././model/player';
import { Subject, Observable } from 'rxjs';
import { switchMap, map, first, share } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { select } from 'd3';
//import { Career } from 'src/app/career/career.component';
import { RouterModule, Routes } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

  @Input() public player: Player[];
  @Output() private sendStats: EventEmitter<Player[]>;

  public searchString: string = '';
  public platformName: string = '';
  //public selected: string = 'option1';
  public selected: string = 'xbox';
  
 // public seasons: Seasons[];
 //@Input() public seasonStats: SeasonStats[];
  public ID: any;
  //static player: import(".././model/season-stats").SeasonStats[];
  router: any;
  //public player: string;
 
  //public searchString: string = this.route.snapshot.paramMap.get('player');

  
  

  /**Auto selects first optionselected = 'option1';*/

  constructor(  public playerService: PlayerService, private route: ActivatedRoute, private _router: Router) { 
    this.sendStats = new EventEmitter<Player[]>();
  }

 

  ngOnInit() {
  }

/* Cutting all this to limit extra requests.. 
  searchPlayer() {

    this._router.navigate(['/players']);
    this.playerService.getPlayer(this.searchString).pipe(
         switchMap( player => { 

          let playerData = player["data"][0];
          let anotherID = playerData.id;
            
           return this.playerService.LifeTimeStats(anotherID)       
        }))
       
       .subscribe(id => this.player = id);

      // this.sendStats.emit(this.player);
    

      }  */




 /* search() {
    this._router.navigate(['players', this.searchString, this.selected ]);
   this.playerService.getPlayer(this.searchString, this.selected).pipe(
         
      switchMap( player => { 

          let playerData = player["data"][0];
          let accountID = playerData.id;
            
           return this.playerService.LifeTimeStats(accountID, this.selected)       
        }))
       
       .subscribe(id => this.player = id); 

       //this.sendStats.emit(this.player);

      }  */


      search() {
        
          this._router.navigate(['players', this.searchString, this.selected ]);
      }



      
    }
