import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Player } from '../../model/player';

@Component({
  selector: 'app-player-rank',
  templateUrl: './player-rank.component.html',
  styleUrls: ['./player-rank.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerRankComponent implements OnInit {

 @Input() rankPoints: number;
 @Input() bestRankPoint: number;

  @Input() public player: Player[];

  constructor(private http: HttpClient, public playerService: PlayerService) { }

  ngOnInit() {
  }

}
