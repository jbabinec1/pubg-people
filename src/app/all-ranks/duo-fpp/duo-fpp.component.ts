import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Player } from '../../model/player';

@Component({
  selector: 'app-duo-fpp',
  templateUrl: './duo-fpp.component.html',
  styleUrls: ['./duo-fpp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DuoFppComponent implements OnInit {

  @Input() public player: any = [];


  constructor(private http: HttpClient, public playerService: PlayerService) { }

  ngOnInit() {
  }

}
