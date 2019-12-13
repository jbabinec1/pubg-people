
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '/Users/Jared/pubg-app/src/app/services/player.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Player } from '/Users/Jared/pubg-app/src/app/model/player';

@Component({
  selector: 'app-rank-solo-fpp',
  templateUrl: './rank-solo-fpp.component.html',
  styleUrls: ['./rank-solo-fpp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RankSoloFppComponent implements OnInit {

  @Input() public playersolofpp: Player[];
  @Input() public player: Player[];

  constructor(private http: HttpClient, public playerService: PlayerService) { }

  ngOnInit() {
  }

}
