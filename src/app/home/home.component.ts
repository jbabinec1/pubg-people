import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayerService } from '/Users/Jared/pubg-app/src/app/services/player.service';
import {Player } from '/Users/Jared/pubg-app/src/app/model/player';
import { Subject, Observable } from 'rxjs';
import { switchMap, map, first, share } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
//import { Career } from 'src/app/career/career.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @Input() public player: Player[];
  @Output() private sendStats: EventEmitter<Player[]>;
  public searchString: string = '';
 // public seasons: Seasons[];
 //@Input() public seasonStats: SeasonStats[];
  public ID: any;
  static player: import("/Users/Jared/pubg-app/src/app/model/season-stats").SeasonStats[];

  constructor(  public playerService: PlayerService, private route: ActivatedRoute) { 
    this.sendStats = new EventEmitter<Player[]>();
  }





  ngOnInit() {
  }



  search(event) {
    this.playerService.getPlayer(this.searchString).pipe(
         switchMap( player => { 

          let playerData = player["data"][0];
          let anotherID = playerData.id;
            
           return this.playerService.getSeasonStats(anotherID)       
        }))
       
       .subscribe(id => this.player = id);

       this.sendStats.emit(this.player);
      }  

      
}
