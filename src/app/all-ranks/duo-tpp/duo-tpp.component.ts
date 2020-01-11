import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Player } from '../../model/player';

@Component({
  selector: 'app-duo-tpp',
  templateUrl: './duo-tpp.component.html',
  styleUrls: ['./duo-tpp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class DuoTppComponent implements OnInit {

  @Input() public player: Player[];

  constructor(private http: HttpClient, public playerService: PlayerService) { }

  ngOnInit() {
  }

}
