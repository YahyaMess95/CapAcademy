import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd/message';

@Component({
  selector: 'app-chercher',
  templateUrl: './chercher.component.html',
  styleUrls: ['./chercher.component.css']
})
export class ChercherComponent implements OnInit {


  t: any;
  cbn: boolean;
  url = 'http://localhost:8080/' ;
  chercher : any ;
  constructor(private http: HttpClient , private message1: NzMessageService ) { }

  ngOnInit(): void {

    this.http.get(this.url + 'ListFormation').subscribe(res => this.chercher = res , ex=> console.log(ex))  ;
  }


  DemandeAjoute(nomFormation: any, dateDeb: any, id: any) {



    setTimeout(() => {
      this.http.get(this.url + 'Demande/AjouterDemande/' + localStorage.getItem('session') + '/' + nomFormation + '/' + dateDeb + '/' + id   ).subscribe(res => console.log(res) , ex => console.log(ex)) ;
      this.message1.create('success', `Demande ajoutée avec succés!!`);

    }, 500);


  }

}
