
import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Player } from '../../model/player';

@Component({
  selector: 'app-rank-solo-fpp',
  templateUrl: './rank-solo-fpp.component.html',
  styleUrls: ['./rank-solo-fpp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RankSoloFppComponent implements OnInit {

  @Input() public playersolofpp: any = [];
  @Input() public player: any = [];
  Math = Math;
  

  constructor(private http: HttpClient, public playerService: PlayerService) { }

  ngOnInit() {
  }

}
