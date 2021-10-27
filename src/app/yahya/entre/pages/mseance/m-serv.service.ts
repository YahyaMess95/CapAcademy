import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Seances}from './mseance'
@Injectable({
  providedIn: 'root'
})


export class MServService {
  private url:string="http://localhost:8080/FD";
  httpOptions =
  {
    headers: new HttpHeaders({
      'Content-Type': 'application/Json'
    })
  }
  constructor(private http: HttpClient) { }

  getformation(): Observable<Seances[]> {
    return this.http.get<Seances[]>(this.url);

  }

}
