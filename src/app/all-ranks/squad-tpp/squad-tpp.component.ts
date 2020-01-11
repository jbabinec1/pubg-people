import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';
import { PlayerService } from '../../services/player.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Player } from '../../model/player';

@Component({
  selector: 'app-squad-tpp',
  templateUrl: './squad-tpp.component.html',
  styleUrls: ['./squad-tpp.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class SquadTppComponent implements OnInit {

  @Input() public player: Player[];

  constructor(private http: HttpClient, public playerService: PlayerService) { }

  ngOnInit() {
  }

}
