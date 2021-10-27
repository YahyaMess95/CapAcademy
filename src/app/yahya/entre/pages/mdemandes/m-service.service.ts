import { Injectable } from '@angular/core';
import {Demandes} from './demandes'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MServiceService {
  private url:string="http://localhost:8080/DemandebyEmail";

    httpOptions =
    {
      headers: new HttpHeaders({
        'Content-Type': 'application/Json'
      })
    }


  constructor(private http: HttpClient) { }

  getdemande(): Observable<Demandes[]> {
    return this.http.get<Demandes[]>(this.url);

  }

}
