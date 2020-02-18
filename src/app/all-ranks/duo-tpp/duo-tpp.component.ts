import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Player } from '../../model/player';
import * as d3 from 'd3';

@Component({
  selector: 'app-duo-tpp',
  templateUrl: './duo-tpp.component.html',
  styleUrls: ['./duo-tpp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DuoTppComponent implements OnInit {

  @Input() public player: any = [];

  

  constructor(private http: HttpClient, public playerService: PlayerService) { }


 

  ngOnInit() {



    

    var svgWidth = 400, svgHeight = 6;
let svg = d3.select('.ID')
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





   

}


}
