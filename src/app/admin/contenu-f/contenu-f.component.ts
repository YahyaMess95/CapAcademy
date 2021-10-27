import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-contenu-f',
  templateUrl: './contenu-f.component.html',
  styleUrls: ['./contenu-f.component.css']
})
export class ContenuFComponent implements OnInit {
  url = 'http://localhost:8080/' ;
  contenuF: any ;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {

    this.http.get(this.url + 'AllSeance' ).subscribe(res => this.contenuF = res , ex => console.log(ex)) ;

  }

}
