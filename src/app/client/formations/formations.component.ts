import { Component, OnInit } from '@angular/core';
import {ServiceFService} from '../../yahya/entre/pages/formations/service-f.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {


  url = 'http://localhost:8080/' ;
  chercher: any ;
  constructor( private fr: ServiceFService , private  http: HttpClient) { }



  isVisible = false;
  NomFormation: any;
  Ref: any;
  Prix: any;
  dat1: any;
  dat2: any;
  spec: any;
  cols: any[];
  products: any;
  formateur: any ;
  selectedValue3: any;
  selectedValue4: any;
  isVisible1: any;
  isVisible2: any;
  formateurbyformation : any[] ;
  isVisible3: any;
  contenuF: any ;
  idFormation: any ;

  ngOnInit(): void {

    this.http.get(this.url + 'Demande/formation/' + localStorage.getItem('session')   ).subscribe(res => this.chercher = res , ex => console.log(ex))  ;



  }



  handleCancel1() {
    this.isVisible1 = false;
  }

  handleOk1() {


    this.http.get(this.url + 'affection/ajout' + '/' + this.selectedValue3.id + '/' + this.selectedValue4.id).subscribe(res => console.log(res) , ex=> console.log(ex)) ;
    this.isVisible1 = false;

  }

  showModal1(): void {
    this.isVisible1 = true;
  }


  showModal2(id): void {
    this.http.get<any>(this.url + 'formateurByformation/' + id).subscribe(res => this.formateurbyformation = res   , ex => console.log(ex) ) ;
    this.isVisible2 = true;
  }




  handleCancel2() {
    this.isVisible2 = false;
  }

  handleOk2() {


    this.isVisible2 = false;

  }





  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  isVisible4: any;
  isVisible5: any;
  Lien: any;

  chaine: any;







  handleCancel4() {
    this.isVisible4 = false;
  }

  handleOk4() {
    this.isVisible4 = false;
  }

  showModal4(id: any) {

    this.isVisible4 = true;
    this.http.get(this.url + 'ContenuF/ListContenuF/' + id ).subscribe(res => this.contenuF = res , ex => console.log(ex)) ;

  }






  handleCancel5() {
    this.isVisible5 = false;
  }
  nomFC : any ;
  dateFC : any ;

  showModal5(id: any ) {

    this.idFormation = id ;

    this.http.get(this.url + 'AllSeance' ).subscribe(res => this.contenuF = res , ex => console.log(ex)) ;

    this.isVisible5 = true;

  }


  handleOk5() {this.http.get(this.url + 'AjouterSeance/' + this.idFormation  + '/' + this.chaine + '/' + this.nomFC + '/' + this.dateFC.replace('/', '-' ).replace('/', '-' )   ).subscribe(res => console.log(res) , ex => console.log(ex)) ;
    // this.isVisible5 = false;
  }



}
