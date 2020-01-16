import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
//import { CareerComponent } from '/Users/Jared/pubg-app/src/app/career/career.component';
//import { query } from '@angular/core/src/render3';
import { Player } from '../model/player';
import { SeasonStats } from '../model/season-stats';
import { catchError,retry, shareReplay, share, retryWhen } from 'rxjs/operators';
//import {index} from '../../../index.js'



@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  
  

  constructor(private http: HttpClient) { }

  // public playerUrl = "https://api.pubg.com/shards/steam/players?filter[playerNames]=WackyJacky101"; 

/* Original getPlayer call to get the ID property of PUBG name 

 getPlayer(player: string):Observable<Player[]> {

    //const api_key = process.env.API_KEY;
    let API_KEY: any;

    let getHeaders = new HttpHeaders({'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug' , 'Accept': 'application/vnd.api+json'}); 
  
      return this.http.get<Player[]> (`https://api.pubg.com/shards/steam/players?filter[playerNames]=${player}`,  { observe:'body',   responseType: 'json', headers: getHeaders,  }).pipe(share());    
  
      }  */



  getPlayer(player: string):Observable<Player[]> {

    //const api_key = process.env.API_KEY;
    //let getHeaders = new HttpHeaders({ 'Accept': 'application/vnd.api+json'});

    let getHeaders = new HttpHeaders({'Accept': 'application/vnd.api+json'}); 
  
    return this.http.get<Player[]> (`/players/${player}/id`,  { observe:'body',   responseType: 'json', headers: getHeaders }).pipe(share()); 
  
      } 








      getSeasonStats(id: string):Observable<SeasonStats[]> {

        //const api_key = process.env.API_KEY;
        

        let getHeaders = new HttpHeaders({'Accept': 'application/vnd.api+json'}); 
      
          return this.http.get<SeasonStats[]>(`/players/player/${id}`,  { observe:'body',   responseType: 'json', headers: getHeaders }).pipe(share());
             
  
        }   
      


      /*  OG Get season Stats Do not Delete
        getSeasonStats(id: string):Observable<SeasonStats[]> {

          let getHeaders = new HttpHeaders({'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug', 'Accept': 'application/vnd.api+json'}); 
        
            return this.http.get<SeasonStats[]>(`https://api.pubg.com/shards/steam/players/${id}/seasons/division.bro.official.pc-2018-05`,  { observe:'body',   responseType: 'json', headers: getHeaders });       
    
          } */




        getSeasonFourStats(id: string):Observable<SeasonStats[]> {

          let getHeaders = new HttpHeaders({'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug', 'Accept': 'application/vnd.api+json'}); 
        
            return this.http.get<SeasonStats[]>(`https://api.pubg.com/shards/steam/players/${id}/seasons/division.bro.official.pc-2018-04`,  { observe:'body',   responseType: 'json', headers: getHeaders });       
    
          }





}
