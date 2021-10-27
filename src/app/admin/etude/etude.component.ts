import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-etude',
  templateUrl: './etude.component.html',
  styleUrls: ['./etude.component.css']
})
export class EtudeComponent implements OnInit {
  constructor( private http : HttpClient) { }
  url = 'http://localhost:8080/' ;
  isVisible = false;
  matiere: any;
  niveau: any;
  dateDeb: any;
  prix: any;
  etude: any ;
  formateur : any ;




  isVisible2: any ;

isVisible1: any ;
  selectedValue5: any;
  selectedValue6: any;
  ngOnInit(): void {
    this.http.get(this.url + 'Etude/FindAll').subscribe(res => this.etude = res , ex => console.log(ex) ) ;
    this.http.get(this.url + 'formateur/getAll').subscribe(res => this.formateur = res , ex => console.log(ex)) ;

  }
  showModal(): void {
    this.isVisible = true;
  }





  handleOk(): void {

    this.http.get(this.url + 'Etude/ajouter/' + this.matiere + '/' + this.niveau + '/' + this.dateDeb + '/' + this.prix + '/' + this.selectedValue5.nom
    ).subscribe(res => console.log(res) , ex => console.log(ex) ) ;
    setTimeout(() => {
      this.http.get(this.url + 'Etude/FindAll').subscribe(res => this.etude = res , ex => console.log(ex) ) ;

    }, 500);



  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }


  supprimer(id)
  {

    this.http.delete(this.url + 'Etude/deleteEtude/' + id).subscribe(res => console.log(res) , ex => console.log(ex)) ;
    setTimeout(() => {
      this.http.get(this.url + 'Etude/FindAll').subscribe(res => this.etude = res , ex => console.log(ex) ) ;

    }, 500);

  }

  showModal2(id): void {
    this.isVisible2 = true;
  }




  handleCancel2() {
    this.isVisible2 = false;
  }

  handleOk2() {


    this.isVisible2 = false;

  }
  handleCancel1() {
    this.isVisible1 = false;
  }

  handleOk1() {



    this.isVisible1 = false;

  }

  showModal1(): void {
    this.isVisible1 = true;
  }

}
