import { Injectable } from '@angular/core';
import { Observable, empty } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
//import { CareerComponent } from '/Users/Jared/pubg-app/src/app/career/career.component';
//import { query } from '@angular/core/src/render3';
import { Player } from '../model/player';
import { SeasonStats } from '../model/season-stats';
import { catchError, retry, shareReplay, share, retryWhen } from 'rxjs/operators';
//import {index} from '../../../index.js'



@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  

  constructor(private http: HttpClient) { }


/* Testing version of getPlayer until I get the proxy working for testing 

 getPlayer(player: string):Observable<Player[]> {

    //const api_key = process.env.API_KEY;
    //const player = request.params.player;
    //const api_url = `https://api.pubg.com/shards/steam/players?filter[playerNames]=${player}`;
  

    let getHeaders = new HttpHeaders({'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug', 'Accept': 'application/vnd.api+json'}); 
  
      return this.http.get<Player[]> (`https://api.pubg.com/shards/steam/players?filter[playerNames]=${player}`,  { observe:'body',   responseType: 'json', headers: getHeaders, }).pipe(share());    
  
      }  */




      /* Makes request to my endpoint that makes a request to the PUBG API */ 

  getPlayer(player: string, platform: string):Observable<Player[]> {

    //const api_key = process.env.API_KEY;
    //let getHeaders = new HttpHeaders({ 'Accept': 'application/vnd.api+json'});

    let getHeaders = new HttpHeaders({'Accept': 'application/vnd.api+json', 'Cache-Control': 'no-cache'}); 
  
    return this.http.get<Player[]> (`/players/${player}/${platform}`,  { observe:'body',   responseType: 'json', headers: getHeaders }).pipe(share()); 
  
      } 



      /* GET SEASON 5 STATS HIDING KEY *TESTING WITH LIFETIME STATS RN* */  
      getSeasonFiveStatsConsole(id: string):Observable<Player[]> {

        //const api_key = process.env.API_KEY;  
        let getHeaders = new HttpHeaders({'Accept': 'application/vnd.api+json', 'Cache-Control': 'no-cache'}); 
          return this.http.get<Player[]>(`/season5Console/${id}`, {observe:'body', responseType: 'json', headers: getHeaders }).pipe(share());
             
        }   

        getSeasonFiveStatsPC(id: string):Observable<Player[]> {

          //const api_key = process.env.API_KEY;  
          let getHeaders = new HttpHeaders({'Accept': 'application/vnd.api+json', 'Cache-Control': 'no-cache'}); 
            return this.http.get<Player[]>(`/season5PC/${id}`, {observe:'body', responseType: 'json', headers: getHeaders }).pipe(share());         
          }   

   
    

     /*   Testing version of getSeasonStats until I can get my proxy working 

        getSeasonStats(id: string):Observable<SeasonStats[]> {

          let getHeaders = new HttpHeaders({'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug',
          "accept": 'application/vnd.api+json', 'Accept': 'application/vnd.api+json'}); 
            return this.http.get<SeasonStats[]>(`https://api.pubg.com/shards/steam/players/${id}/seasons/division.bro.official.pc-2018-05`,  { observe:'body',   responseType: 'json', headers: getHeaders });       
          } */




        /** Get Season Six Stats for one platform.. **/

        getSeasonSixStatsConsole(id: string):Observable<Player[]> {

          let getHeaders = new HttpHeaders({'Authorization':'API_KEY', 'Accept': 'application/vnd.api+json'}); 
            return this.http.get<Player[]>(`/season6Console/${id}`,  { observe:'body',   responseType: 'json', headers: getHeaders });       
    
          }   



                  /** Get Season Six Stats for pc.. **/

        getSeasonSixStatsPC(id: string):Observable<Player[]> {

          let getHeaders = new HttpHeaders({'Authorization':'API_KEY', 'Accept': 'application/vnd.api+json'}); 
            return this.http.get<Player[]>(`/season6PC/${id}`,  { observe:'body',   responseType: 'json', headers: getHeaders });       
    
          }   




          /*
          getSeasonFourStats(id: string):Observable<SeasonStats[]> {

            let getHeaders = new HttpHeaders({'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug', 'Accept': 'application/vnd.api+json'}); 
          
              return this.http.get<SeasonStats[]>(`https://api.pubg.com/shards/steam/players/${id}/seasons/division.bro.official.pc-2018-04`,  { observe:'body',   responseType: 'json', headers: getHeaders });     
          }  */

    




   LifeTimeStats(id: string, platform: string):Observable<Player[]> {

      let getHeaders = new HttpHeaders({'Authorization':'API_KEY', 'Accept': 'application/vnd.api+json'}); 
      return this.http.get<Player[]>(`/lifetime/${id}/${platform}`,  { observe:'body',   responseType: 'json', headers: getHeaders });       
    
          }   







}
