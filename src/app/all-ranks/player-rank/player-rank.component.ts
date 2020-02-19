import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Player } from '../../model/player';
import { PlayerInterceptor } from 'src/app/services/player-interceptor';
import * as d3 from 'd3';

@Component({
  selector: 'app-player-rank',
  templateUrl: './player-rank.component.html',
  styleUrls: ['./player-rank.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class PlayerRankComponent implements OnInit {

 @Input() rankPoints: number;
 @Input() bestRankPoint: number;

 
 //@Input() public player: Player[];
  @Input() public player: any = [];
  Math = Math;
  constructor(private http: HttpClient, public playerService: PlayerService) { }

  ngOnInit() {

    /*

    var svgWidth = 400, svgHeight = 6;
var svg = d3.select("svg")
.attr("width", svgWidth)
.attr("height", svgHeight)
.attr("class", "actual-svg");


var line = svg.append("line")
.attr("x1", 0)
.attr("x2", 200)
.attr("y1", 0)
.attr("y2", 0)
.attr("stroke", "orange")
.attr("stroke-width", 90);

*/

    
  }

}
