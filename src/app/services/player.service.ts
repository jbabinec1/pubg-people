import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CareerComponent } from '/Users/Jared/pubg-app/src/app/career/career.component';
//import { query } from '@angular/core/src/render3';
import { Player } from '../model/player';
import { SeasonStats } from '../model/season-stats';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  

  constructor(private http: HttpClient) { }

  // public playerUrl = "https://api.pubg.com/shards/steam/players?filter[playerNames]=WackyJacky101"; 



  getPlayer(player: string):Observable<Player[]> {

    let getHeaders = new HttpHeaders({'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug', 'Accept': 'application/vnd.api+json'}); 
  
      return this.http.get<Player[]>(`https://api.pubg.com/shards/steam/players?filter[playerNames]=${player}`,  { observe:'body',   responseType: 'json', headers: getHeaders,  });    
  
      }

      /* `https://api.pubg.com/shards/steam/players?filter[playerNames]=${query}`    */



      getSeasonStats(id: string):Observable<SeasonStats[]> {

        let getHeaders = new HttpHeaders({'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug', 'Accept': 'application/vnd.api+json'}); 
      
          return this.http.get<SeasonStats[]>(`https://api.pubg.com/shards/steam/players/${id}/seasons/division.bro.official.pc-2018-05`,  { observe:'body',   responseType: 'json', headers: getHeaders });    
  
        }





        getSeasonFourStats(id: string):Observable<SeasonStats[]> {

          let getHeaders = new HttpHeaders({'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug', 'Accept': 'application/vnd.api+json'}); 
        
            return this.http.get<SeasonStats[]>(`https://api.pubg.com/shards/steam/players/${id}/seasons/division.bro.official.pc-2018-04`,  { observe:'body',   responseType: 'json', headers: getHeaders });    
    
          }





}
