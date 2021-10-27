import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpEventType, HttpResponse} from '@angular/common/http';
import {NzMessageService} from 'ng-zorro-antd/message';
import {UploadFileService} from '../upload/upload-file.service';

@Component({
  selector: 'app-gformateur',
  templateUrl: './gformateur.component.html',
  styleUrls: ['./gformateur.component.css']
})
export class GformateurComponent implements OnInit {



  constructor(private http: HttpClient , private message1: NzMessageService , private uploadService: UploadFileService) { }

  url = 'http://localhost:8080/' ;
  isVisible = false;
  nivAct: any;
  mdp: any;
  numTel: any;
  Email: any;
  prenom: any;
  nom: any;
  selectedValue1: any ;
  formateur: any;


  typeformateur = [
    { label: 'professionel', value: 'professionel' },
    { label: 'academique', value: 'academique'} ,] ;

  Region = [
    { label: 'Tunis', value: 'Tunis' },
    { label: 'Ariana', value: 'Ariana'} ,
    { label: 'Ben Arous', value: 'Ben Arous'} ,
    { label: 'Manouba', value: 'Manouba'} ,
    { label: 'Nabel', value: 'Nabel'} ,
    { label: 'Zaghouan', value: 'Zaghouan'} ,
    { label: 'Bizert', value: 'Bizert'} ,
    { label: 'Beja', value: 'Beja'} ,
    { label: 'Jandouba', value: 'Jandouba'} ,
    { label: 'El Kef', value: 'El kef'} ,
    { label: 'Siliana', value: 'Siliana'} ,
    { label: 'Sousse', value: 'Sousse'} ,
    { label: 'Monastir', value: 'Monastir'} ,
    { label: 'Mahdia', value: 'Mahdia'} ,
    { label: 'Sfax', value: 'Sfax'} ,
    { label: 'Kairouan', value: 'Kairouan'} ,
    { label: 'Kasserine', value: 'Kasserine'} ,
    { label: 'Sidi bouzid', value: 'Sidi bouzid'} ,
    { label: 'Gabes', value: 'Gabes'} ,
    { label: 'Medenin', value: 'Medenin'} ,
    { label: 'Gafsa', value: 'Gafsa'} ,
    { label: 'Tozeur', value: 'Tozeur'} ,
    { label: 'Kébili', value: 'Kébili'}];


  specialite: any;
  selectedValue2: any;


  ngOnInit(): void {

    this.http.get(this.url + 'formateur/getAll').subscribe(res => this.formateur = res , ex => console.log(ex) ) ;

  }
  showModal(): void {
    this.isVisible = true;
  }
  handleOk(): void {

      this.http.get(this.url + 'formateur/Ajouter' + '/' + this.nom + '/' + this.prenom  + '/' + this.Email + '/' + this.numTel + '/' + this.selectedValue1.label + '/'
      + this.mdp + '/' + this.nivAct + '/' +  this.specialite + '/' + this.selectedValue2.label   ).subscribe(res => console.log(res)  , ex => console.log(ex)) ;


     // this.isVisible = false;



      setTimeout(() => {
        this.http.get(this.url + 'formateur/getAll').subscribe(res => this.formateur = res , ex => console.log(ex) ) ;

    }, 500);

  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }






  supprimer(id)
  {

    this.http.delete(this.url + 'deleteFormateur/' + id).subscribe(res => console.log(res) , ex => console.log(ex)) ;
    setTimeout(() => {
      this.http.get(this.url + 'formateur/getAll').subscribe(res => this.formateur = res , ex => console.log(ex) ) ;

    }, 500);

  }






}
