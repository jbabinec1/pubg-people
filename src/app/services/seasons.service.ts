import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { CareerComponent } from '/Users/Jared/pubg-app/src/app/career/career.component';
import { query } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class SeasonsService {

  constructor(private http: HttpClient) { }


  public configUrl = "https://api.pubg.com/shards/steam/seasons";

  getSeason():Observable<any[]> {

    let getHeaders = new HttpHeaders({'Authorization':'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOiI4MDUzZmEyMC02MzhjLTAxMzctMGNlYi0wMGQxMWQwYzg3MzQiLCJpc3MiOiJnYW1lbG9ja2VyIiwiaWF0IjoxNTU5MDU3ODgxLCJwdWIiOiJibHVlaG9sZSIsInRpdGxlIjoicHViZyIsImFwcCI6ImpiYWJpbmVjMS1nbWFpIn0.LI-UQ8XiwVQ-vpbE5nmPzbe0sLj7ROJjpPGgXQHRuug', 'Accept': 'application/vnd.api+json'}); 
  
      return this.http.get<any[]>(this.configUrl,  { observe:'body',   responseType: 'json', headers: getHeaders });    
  
      }
}
