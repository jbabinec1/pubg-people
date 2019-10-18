import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SeasonstatsService {

  constructor(private http: HttpClient) { }



 // public configUrl = "https://api.pubg.com/shards/steam/players/account.a3194a754dce47a092d402ff332885d5/seasons/division.bro.official.pc-2018-04";

/*  getSeasonStats(id: any):Observable<any[]> {

    let getHeaders = new HttpHeaders({'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug', 'Accept': 'application/vnd.api+json'}); 
  
      return this.http.get<any[]>(`https://api.pubg.com/shards/steam/players/${id}/seasons/division.bro.official.pc-2018-04`,  { observe:'body',   responseType: 'json', headers: getHeaders });    
  
      }*/


}
