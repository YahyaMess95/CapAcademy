import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Formations} from './formations'
@Injectable({
  providedIn: 'root'
})
export class ServiceFService {

  private url:string = 'http://localhost:8080/ListFormation';
private _url:string="http://localhost:8080/AddDemande/"
    httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/Json'
      })
    }

  constructor(private http: HttpClient) { }


  getformation(): Observable<Formations[]> {
    return this.http.get<Formations[]>(this.url);

  }

  iscritformation(Formations: Formations): Observable<Formations> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(Formations);
    console.log(body);
    return this.http.post<Formations>(this._url, body, { 'headers': headers });
  }
 


}
