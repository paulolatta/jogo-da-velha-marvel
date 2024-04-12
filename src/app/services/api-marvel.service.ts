import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Injectable } from '@angular/core';
import MD5 from "crypto-js/md5";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiMarvelService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': 'my-auth-token'
    })
  };

  private publicKey: string = '1e81df2ae633cdfcbf7060a561eb3bd9';
  private privateKey: string = '011060acb8b6a6d6d294cd31272dbe16b8ea7c1f';

  constructor(private http: HttpClient) {}

  public getHero(nameHero: string): Observable<any> {
    let timestamp = new Date().getTime();
    const hash: string = MD5(timestamp+this.privateKey+this.publicKey).toString()

    return this.http.get<any>(
      'http://gateway.marvel.com/v1/public/characters?name='+nameHero+'&ts='+timestamp+'&apikey='+this.publicKey+'&hash='+hash
    );
  }
}
