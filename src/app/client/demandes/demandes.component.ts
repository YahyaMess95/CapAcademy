import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-demandes',
  templateUrl: './demandes.component.html',
  styleUrls: ['./demandes.component.css']
})
export class DemandesComponent implements OnInit {

  url = 'http://localhost:8080/' ;
  chercher : any ;
  constructor(private http: HttpClient , private message1: NzMessageService ) { }
  ngOnInit(): void {
    this.http.get(this.url + 'Demande/findDemande/' + localStorage.getItem('session')   ).subscribe(res => this.chercher = res , ex=> console.log(ex))  ;


  }
}
