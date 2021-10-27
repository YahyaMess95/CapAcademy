import { Component, OnInit } from '@angular/core';
import {Demandes} from './demandes';
import {MServiceService} from './m-service.service';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd/message';
@Component({
  selector: 'app-mdemandes',
  templateUrl: './mdemandes.component.html',
  styleUrls: ['./mdemandes.component.css']
})
export class MdemandesComponent implements OnInit {

  url = 'http://localhost:8080/' ;
  chercher : any ;
  constructor(private http: HttpClient , private message1: NzMessageService ) { }
  ngOnInit(): void {
    this.http.get(this.url + 'Demande/findDemande/' + localStorage.getItem('session')   ).subscribe(res => this.chercher = res , ex=> console.log(ex))  ;


  }

}
